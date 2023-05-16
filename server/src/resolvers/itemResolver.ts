import { Resolver, Int, Mutation, Arg, Query } from "type-graphql";
import Item, { ItemInput, UpdatedItemInput } from "../entity/Item";
import datasource from "../db";
import { ApolloError } from "apollo-server-errors";

@Resolver(Item)
export class ItemResolver {
    @Query(() => [Item])
    async items(): Promise<Item[]> {
      return await datasource.getRepository(Item).find();
    }

    @Mutation(() => Item)
    async createItem(@Arg("data", {validate: false}) data: ItemInput):Promise<Item> {
            return await datasource.getRepository(Item).save(data);
        }

    @Mutation(() => Boolean)
    async deleteItem(@Arg("id", () => Int) id: number): Promise<boolean> {
        const { affected } = await datasource.getRepository(Item).delete(id);
        if (affected === 0) throw new ApolloError("item not found", "NOT_FOUND");
        return true;
    }

  @Mutation(() => Item)
  async updateItem(
    @Arg("id") id: string,
    @Arg("data", { validate: false }) data: UpdatedItemInput
    ): Promise<Omit<Item, 'units'>> {
    const updatedFields = {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      ...(data.name ? { name: data.name }: {}),
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      ...(data.description ? { description: data.description }: {}),
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      ...(data.price ? { price: data.price }: {}),
    };
    
    const updatedObject = await datasource
      .getRepository(Item)
      .findOne({where: {id}})
      
    if (updatedObject === null) throw new ApolloError("item not found", "NOT_FOUND")
    
    const res  = await datasource
    .getRepository(Item)
    .save({...updatedObject, ...updatedFields})
    
    return res
  }
}