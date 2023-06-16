import { Field, ObjectType, InputType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Item from "./Item";
import OrderLine from './OrderLine';

@ObjectType()
@Entity()
class UnitItem { 
    @Field()
    @PrimaryGeneratedColumn()
    id!: string;

    @Field({ nullable: false })
    @Column({ nullable: false, type: "enum", enum: ['PARFAIT', 'OK', 'HS'] })
    status!: string; 

    @ManyToOne(() => Item, (item) => item.units, { onDelete: "CASCADE" })
    itemId!: Item;

    @ManyToOne(() => OrderLine, orderLine => orderLine.unitItem)
    @Field(() => OrderLine)
    orderLine!: OrderLine;
}

@InputType()
export class UnitItemInput {
    @Field()
    status!: string;

    @Field()
    itemId?: string;
}

@InputType()
export class UnitItemStatusInput {
    @Field()
    status!: string;

}


export type UpdatedUnitItem = Pick<UnitItem, 'id' | 'status'>

export default UnitItem;