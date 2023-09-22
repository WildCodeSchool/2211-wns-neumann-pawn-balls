import { Field, ObjectType, InputType } from "type-graphql";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UnitItem from "./UnitItem";

@ObjectType()
@Entity()
class Item { 
    @Field()
    @PrimaryGeneratedColumn()
    id!: string;

    @Field({ nullable: false })
    @Column({ nullable: false, length: 100, type: "varchar" })
    name?: string;

    @Field({ nullable: false })
    @Column({ nullable: false, type: "float" })
    price!: number; 

    @Field()
    @Column({type: "varchar"})
    description!: string;
    
    @OneToMany(() => UnitItem, (unit) => unit.itemId)
    @JoinColumn({name: "units"})
    units!: UnitItem["id"];
}

@InputType()
export class UnitItemId {
  @Field()
  id!: string;
}

@InputType()
export class ItemInput {
    @Field()
    name!: string;

    @Field()
    price!: string;

    @Field()
    description!: string;

}

@InputType()
export class UpdatedItemInput {
    @Field()
    name?: string;

    @Field()
    price?: number;

    @Field()
    description?: string;

}

export type UpdatedItem = Pick<Item, 'id' | 'name' | 'price' | 'description'>

export default Item;