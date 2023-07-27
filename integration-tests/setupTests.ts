import db from "../server/src/db";

async function clearDB() {
  const entities = db.entityMetadatas;
  return Promise.all(
    entities.map((entity) => db.getRepository(entity.name).delete({}))
  );
}

//TO FIX
// export async function createEntity<X extends EntitySchema>({ entity }: { entity: X }) {
//   console.log({ entity });
//   if (!Reflect.hasMetadata('typeorm:entity_options', entity)) {
//     throw new Error('Invalid type');
//   }
//   const insertion = await db
//     .getRepository(Reflect.getMetadata('typeorm:entity_options', entity).name)
//     .insert(entity);
//   return insertion;
// }

beforeAll(async () => {
  await db.initialize();
  // const newUser: User = {
  //   id: '1',
  //   role: UserRole.admin,
  //   email: 'user@test.com',
  //   firstname: 'bernard',
  //   lastname: 'dupont',
  // };
  // const insertion = createEntity<User>({ entity: newUser });
  // console.log({ insertion });
  // const allUsers = await db.getRepository(User).find();
  // console.log({ allUsers });
});

beforeEach(async () => {
  await clearDB();
});

afterAll(async () => {
  try {
    await db.destroy();
  } catch (err) {
    console.error(err);
  }
});
