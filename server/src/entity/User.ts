import { Field, ObjectType, InputType } from "type-graphql";
import { IsEmail, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash, argon2id, verify } from "argon2";

@ObjectType()
@Entity()
class User {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field({ nullable: false })
  @Column({ nullable: false, length: 100, type: "varchar" })
  firstname?: string;

  @Field({ nullable: false })
  @Column({ nullable: false, length: 100, type: "varchar" })
  lastname?: string;

  @Field()
  @Column({ unique: true, nullable: false })
  email!: string;

  @Column()
  hashedPassword?: string;
}

@InputType()
export class UserInput {
  @Field()
  firstname!: string;

  @Field()
  lastname!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @MinLength(8)
  password!: string;
}

@InputType()
export class UserLoginInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @MinLength(8)
  password!: string;
}

const hashingOptions = {
  type: argon2id,
  memoryCost: 2 ** 16,
};

export async function hashPassword(plain: string): Promise<string> {
  return await hash(plain, hashingOptions);
}

export async function verifyPassword(
  plain: string,
  hashed: string
): Promise<boolean> {
  return await verify(hashed, plain, hashingOptions);
}

export default User;
