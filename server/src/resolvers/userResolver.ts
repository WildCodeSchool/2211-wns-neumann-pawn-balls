import { Query, Resolver } from "type-graphql";
import User from "../entity/User";
import datasource from "../db";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await datasource.getRepository(User).find()
  }
}
