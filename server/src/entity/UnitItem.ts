import { Field, ObjectType, InputType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Item from "./Item";

@ObjectType()
@Entity()
class UnitItem { 
    @Field()
    @PrimaryGeneratedColumn()
    id!: string;

    @Field({ nullable: false })
    @Column({ nullable: false, type: "boolean" })
    status!: boolean; 

    @ManyToOne(() => Item, (item) => item.units, { onDelete: "CASCADE" })
    item!: Item;
}

@InputType()
export class UnitItemInput {
    @Field()
    status!: boolean;

    @Field()
    item!: Item;
}

export type UpdatedUnitItem = Pick<UnitItem, 'id' | 'status'>
export default UnitItem;