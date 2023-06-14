import { Resolver, Mutation, Arg, Query } from "type-graphql";
import UnitItem, { UnitItemInput, UnitItemStatusInput } from "../entity/UnitItem";
import datasource from "../db";
import { ApolloError } from "apollo-server-errors";
import { Equal } from "typeorm";

@Resolver(UnitItem)
export class UnitItemResolver {
    @Query(() => [UnitItem])
    async unitItems(@Arg("itemId") itemId: string,): Promise<UnitItem[]> {
        const units = await datasource.getRepository(UnitItem).find({where: {itemId: Equal(itemId)}})
        if (units === null) throw new ApolloError("units not found", "NOT_FOUND")
        return units
    }

    @Mutation(() => UnitItem)
    async createUnitItem(@Arg("data", { validate: false}) data: UnitItemInput):Promise<UnitItem> {

            return await datasource.getRepository(UnitItem).save(data);
        }

    @Mutation(() => Boolean)
    async deleteUnitItem(@Arg("id") id: string): Promise<boolean> {
        const { affected } = await datasource.getRepository(UnitItem).delete(id);
        if (affected === 0) throw new ApolloError("item not found", "NOT_FOUND");
        return true;
    }

    @Mutation(() => UnitItem)
    async updateUnitItem(
        @Arg("id") id: string,
        @Arg("data", { validate: false }) status: UnitItemStatusInput
    ): Promise<UnitItem> {
        const updatedObject = await datasource.getRepository(UnitItem).findOne({where: {id}})
        
        if (updatedObject === null) throw new ApolloError("unit not found", "NOT_FOUND");
        
        const res = await datasource
        .getRepository(UnitItem)
        .save({...updatedObject, ...status});

        return res;
    }
}