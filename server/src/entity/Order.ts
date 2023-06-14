import { Field, InputType, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import User from './User';
import OrderLine from './OrderLine';

@Entity()
@ObjectType()
class Order {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  cost!: number;

  @Field()
  @Column()
  start!: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  end!: Date;

  @Field()
  @Column()
  address!: string;

  @Field()
  @Column()
  bindingEmail!: string;

  @Field()
  @Column()
  phoneNumber!: string;

  @ManyToOne(() => User, user => user.orders)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  user?: User;

  @OneToMany(() => OrderLine, orderLine => orderLine.order, { cascade: true })
  @Field(() => [OrderLine])
  orderLines!: OrderLine[];
}

@InputType()
export class OrderInput {
  @Field()
  cost!: number;

  @Field()
  start!: Date;

  @Field({ nullable: true })
  end!: Date;

  @Field()
  address!: string;

  @Field()
  bindingEmail!: string;

  @Field()
  phoneNumber!: string;

  @Field()
  userId?: string;

  @Field()
  unitItems!: string[];
}

export default Order;