import "reflect-metadata";
import db from "./db";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { join } from "path";
import mongoose, { ConnectOptions } from "mongoose";
import express from "express";

async function start(): Promise<void> {
  await db.initialize();
  const app = express();


  console.log("Connecting to MongoDB");
  await mongoose.connect("mongodb://127.0.0.1:6000", { useNewUrlParser: true } as ConnectOptions);
  console.log("Connected");


  app.get('/', (req, res) => {
    console.log("Got a request");
    res.json({ message: "Hey, I'm Tom, the API" });
  });


  const schema = await buildSchema({
    resolvers: [join(__dirname, "/resolvers/*.ts")],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start().catch(console.error);
