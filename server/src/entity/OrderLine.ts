import { Field, InputType, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Order from './Order';
import UnitArticle from './UnitArticle';

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

  @OneToMany(() => UnitArticle, unitArticle => unitArticle.orderLine, { nullable: true })
  @Field(() => [UnitArticle], { nullable: true })
  unitArticles?: UnitArticle[];
}

@InputType()
export class CreateOrderLineInput {
  @Field()
  articleName!: string;

  @Field()
  articleCost!: number;
}


export default OrderLine;