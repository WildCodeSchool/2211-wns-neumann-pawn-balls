import { ApolloError } from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { type ContextType } from '..';
import datasource from '../db';
import User, {
  UserAdminInput,
  UserInput,
  UserLoginInput,
  UserRole,
  hashPassword,
  verifyPassword,
} from '../entity/User';
import { env } from '../env';

@Resolver(() => User)
class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('data') { firstname, lastname, email, password, role = UserRole.visitor }: UserInput
  ): Promise<User> {
    const existingUser = await datasource.getRepository(User).findOne({ where: { email } });

    if (existingUser !== null) throw new ApolloError('EMAIL_ALREADY_EXISTS');
    const hashedPassword = await hashPassword(password ?? '');

    return await datasource
      .getRepository(User)
      .save({ firstname, lastname, email, hashedPassword, role });
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await datasource.getRepository(User).find();
  }

  @Mutation(() => String)
  async login(
    @Arg('data') { email, password }: UserLoginInput,
    @Ctx() { res }: ContextType
  ): Promise<string> {
    const user = await datasource.getRepository(User).findOneBy({ email });

    if (user === null || !(await verifyPassword(password ?? '', user.hashedPassword ?? '')))
      throw new ApolloError('invalid credentials', 'INVALID_CREDS');

    const token = jwt.sign({ userId: user.id }, env.JWT_PRIVATE_KEY);
    res.cookie('token', token, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
    });

    return token;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: ContextType): Promise<boolean> {
    res.clearCookie('token');
    return true;
  }

  @Authorized()
  @Query(() => User)
  async profile(@Ctx() { currentUser }: ContextType): Promise<User> {
    return currentUser as User;
  }

  // requires: headers: { Authorization : Bearer <valid_token> }
  @Authorized<UserRole>([UserRole.admin])
  @Mutation(() => User)
  async setUserAsAdmin(@Arg('data', { validate: false }) { id }: UserAdminInput): Promise<User> {
    const user = await datasource.getRepository(User).findOne({ where: { id } });
    if (user == null) {
      throw new Error('No User');
    }
    const modifiedUser = await datasource
      .getRepository(User)
      .save({ ...user, role: UserRole.admin });
    delete modifiedUser.hashedPassword;
    return modifiedUser;
  }
}

export default UserResolver;
