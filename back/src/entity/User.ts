import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
class User {
  @Field()
    @PrimaryGeneratedColumn()
    id!: string;

  @Field()
  @Column({ length: 100 })
  name?: string;

  @Field({ nullable: true })
  @Column({ nullable: true, length: 100, type: "varchar" })
  lastname?: string;
}

export default User;
