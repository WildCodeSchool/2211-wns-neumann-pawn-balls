import { Field, ObjectType, InputType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    @JoinColumn({ name: "itemId" })
    item!: Item;

    @OneToMany(() => OrderLine, (orderLine) => orderLine.unitItem)
    orderLines!: OrderLine[];
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