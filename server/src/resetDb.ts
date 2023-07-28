import datasource from "./db";
import UnitItem from "./entity/UnitItem";
import User, { hashPassword } from "./entity/User";

async function reset(): Promise<void> {
  await datasource.initialize();
  await datasource.getRepository(UnitItem).delete({});
  await datasource.getRepository(User).save([
    {
      firstname: "user",
      lastname: "test",
      email: "user@app.com",
      hashedPassword: await hashPassword("test@123"),
    },
  ]);
  await datasource.destroy();
  console.log("done !");
}

reset().catch(console.error);