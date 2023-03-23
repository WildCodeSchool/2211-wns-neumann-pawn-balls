import { ApolloError } from "apollo-server-errors";
import { Query, Ctx, Authorized, Resolver, Mutation, Arg } from "type-graphql";
import User, {
  UserInput,
  UserLoginInput,
  hashPassword,
  verifyPassword,
} from "../entity/User";
import datasource from "../db";
import jwt from "jsonwebtoken";
import { env } from "../env";
import { type ContextType } from "..";

@Resolver(() => User)
class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg("data") { firstname, lastname, email, password }: UserInput
  ): Promise<User> {
    const existingUser = await datasource
      .getRepository(User)
      .findOne({ where: { email } });

    if (existingUser !== null) throw new ApolloError("EMAIL_ALREADY_EXISTS");
    const hashedPassword = await hashPassword(password ?? "");

    return await datasource.getRepository(User).save({ firstname, lastname, email, hashedPassword });
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await datasource.getRepository(User).find();
  }

  @Mutation(() => String)
  async login(
    @Arg("data") { email, password }: UserLoginInput,
    @Ctx() { res }: ContextType
  ): Promise<string> {
    const user = await datasource.getRepository(User).findOneBy({ email });

    if (
      user === null ||
      !(await verifyPassword(password ?? "", user.hashedPassword ?? ""))
    )
      throw new ApolloError("invalid credentials", "INVALID_CREDS");

    const token = jwt.sign({ userId: user.id }, env.JWT_PRIVATE_KEY);
    res.cookie("token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
    });

    return token;
  }
  
  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: ContextType): Promise<boolean> {
    res.clearCookie("token");
    return true;
  }

  @Authorized()
  @Query(() => User)
  async profile(@Ctx() { currentUser }: ContextType): Promise<User> {
    return currentUser as User;
  }
}

export default UserResolver;
