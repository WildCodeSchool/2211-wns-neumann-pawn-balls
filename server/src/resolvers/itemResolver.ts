import { Resolver, Int, Mutation, Arg, Query } from "type-graphql";
import Item, { ItemInput, type UpdatedItem } from "../entity/Item";
import datasource from "../db";
import { ApolloError } from "apollo-server-errors";

@Resolver(Item)
export class ItemResolver {
    @Query(() => [Item])
    async skills(): Promise<Item[]> {
      return await datasource.getRepository(Item).find();
    }

    @Mutation(() => Item)
    async createItem(@Arg("data") data: ItemInput):Promise<Item> {
            const { name, price, description } = data;

            return await datasource.getRepository(Item).save({
                name,
                price,
                description
            });
        }

    @Mutation(() => Boolean)
    async deleteItem(@Arg("id", () => Int) id: number): Promise<boolean> {
        const { affected } = await datasource.getRepository(Item).delete(id);
        if (affected === 0) throw new ApolloError("item not found", "NOT_FOUND");
        return true;
    }

  @Mutation(() => Item)
  async updateItem(
    @Arg("id", () => Int) id: string,
    @Arg("data") { name, price, description }: ItemInput
  ): Promise<UpdatedItem> {
    const { affected } = await datasource
      .getRepository(Item)
      .update(id, { name, price });

    if (affected === 0) throw new ApolloError("item not found", "NOT_FOUND");

    return { id, name, price, description };
  }
}