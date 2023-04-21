import { Resolver, Int, Mutation, Arg, Query } from "type-graphql";
import UnitItem, { UnitItemInput } from "../entity/UnitItem";
import datasource from "../db";
import { ApolloError } from "apollo-server-errors";

@Resolver(UnitItem)
export class UnitItemResolver {
    @Query(() => [UnitItem])
    async unitItems(@Arg("itemId", ()=> Int) itemId: string,): Promise<UnitItem[]> {
        const units = await datasource.getRepository(UnitItem).find({where: {itemId}})
        if (units === null) throw new ApolloError("units not found", "NOT_FOUND")
        return units
    }

    @Mutation(() => UnitItem)
    async createUnitItem(@Arg("data") data: UnitItemInput):Promise<UnitItem> {
            const { status, item } = data;

            return await datasource.getRepository(UnitItem).save({
                status,
                item
            });
        }

    @Mutation(() => Boolean)
    async deleteUnitItem(@Arg("id", () => Int) id: string): Promise<boolean> {
        const { affected } = await datasource.getRepository(UnitItem).delete(id);
        if (affected === 0) throw new ApolloError("item not found", "NOT_FOUND");
        return true;
    }

  @Mutation(() => UnitItem)
  async updateItem(
    @Arg("id", () => Int) id: string,
    @Arg("data") { status, item }: UnitItemInput
  ): Promise<UnitItem> {
    const { affected } = await datasource
      .getRepository(UnitItem)
      .update(id, { status });

    if (affected === 0) throw new ApolloError("unit not found", "NOT_FOUND");

    return { id, status, item };
  }
}