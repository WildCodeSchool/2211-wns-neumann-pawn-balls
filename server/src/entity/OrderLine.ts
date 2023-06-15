import { Field, InputType, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Order from './Order';
import UnitItem from './UnitItem';
// import UnitItem from './UnitItem';

@Entity()
@ObjectType()
class OrderLine {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  articleCost!: number;

  @Field()
  @Column()
  articleName!: string;

  @ManyToOne(() => Order, order => order.orderLines)
  @Field(() => Order)
  order!: Order;

  @ManyToOne(() => UnitItem, (unitItem) => unitItem.orderLines)
  @JoinColumn({ name: "unitItemId" })
  @Field(() => UnitItem)
  unitItem!: UnitItem;
}

@InputType()
export class CreateOrderLineInput {
  @Field()
  articleName!: string;

  @Field()
  articleCost!: number;

  @Field()
  unitItems!: string;
}


export default OrderLine;