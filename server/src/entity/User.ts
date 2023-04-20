import { argon2id, hash, verify } from 'argon2';
import { IsEmail, MinLength } from 'class-validator';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  admin = 'admin',
  visitor = 'visitor',
}

@ObjectType()
@Entity()
class User {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field({ nullable: false })
  @Column({ nullable: false, length: 100, type: 'varchar' })
  firstname?: string;

  @Field({ nullable: false })
  @Column({ nullable: false, length: 100, type: 'varchar' })
  lastname?: string;

  @Field()
  @Column({ default: UserRole.visitor, enum: UserRole })
  role!: UserRole;

  @Field()
  @Column({ unique: true, nullable: false })
  email!: string;

  @Column()
  hashedPassword?: string;
}

// @ObjectType()
// @Entity()
// class User {
//   @Field()
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Field()
//   @Column({ unique: true })
//   email: string;

//   @Column()
//   hashedPassword: string;
// }

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

  @Field()
  role: UserRole = UserRole.visitor;
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

@InputType()
export class UserAdminInput {
  @Field()
  id!: string;
}

const hashingOptions = {
  type: argon2id,
  memoryCost: 2 ** 16,
};

export async function hashPassword(plain: string): Promise<string> {
  return await hash(plain, hashingOptions);
}

export async function verifyPassword(plain: string, hashed: string): Promise<boolean> {
  return await verify(hashed, plain, hashingOptions);
}

export default User;
