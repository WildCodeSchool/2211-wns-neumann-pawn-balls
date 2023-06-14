import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import OrderLine from './OrderLine';

@Entity()
@ObjectType()
class UnitArticle {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  status?: string;

  @ManyToOne(() => OrderLine, orderLine => orderLine.unitArticles)
  @Field(() => OrderLine)
  orderLine!: OrderLine;
}

export default UnitArticle;