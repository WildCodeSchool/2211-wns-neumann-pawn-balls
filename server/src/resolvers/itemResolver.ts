import { Resolver, Mutation, Arg, Query } from "type-graphql";
import Item, { ItemInput, UpdatedItemInput } from "../entity/Item";
import datasource from "../db";
import { ApolloError } from "apollo-server-errors";

@Resolver(Item)
export class ItemResolver {
    @Query(() => [Item])
    async getAllItems(): Promise<Item[]> {
      const items = await datasource.getRepository(Item).find()
      return items;
    }

    @Query(() => Item)
    async getOneItem(@Arg("id") id: string): Promise<Item> {
      const item = await datasource.getRepository(Item).findOne({where: {id}, relations: ["units"]});
      
      if (item === null) throw new ApolloError("item not found", "NOT_FOUND")
      return item;
    }

    @Mutation(() => Item)
    async createItem(@Arg("data", {validate: false}) data: ItemInput):Promise<Item> {
          const item = new Item()
          item.name = data.name;
          item.description = data.description;
          item.price = data.price;
          const savedItem = await datasource.getRepository(Item).save(data);
          console.log(savedItem);
          
          return await datasource.getRepository(Item).findOneOrFail({where: {id: savedItem.id}, relations: ['units']});
        }

    @Mutation(() => Boolean)
    async deleteItem(@Arg("id") id: string): Promise<boolean> {
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