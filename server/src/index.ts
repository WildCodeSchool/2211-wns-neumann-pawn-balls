import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import cookie from 'cookie';
import type express from 'express';
import jwt from 'jsonwebtoken';
import { join } from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import db from './db';
import User from './entity/User';
import { env } from './env';

export interface JWTPayload {
  userId: string;
}

export interface ContextType {
  req: express.Request;
  res: express.Response;
  currentUser?: User;
}

async function start(): Promise<void> {
  await db.initialize();

  const schema = await buildSchema({
    resolvers: [join(__dirname, '/resolvers/*.ts')],
    authChecker: async ({ context }: { context: ContextType }, roles) => {
      const { headers } = context.req;
      const tokenInAuthHeaders = headers.authorization?.split(' ')[1];
      const tokenInCookie = cookie.parse(headers.cookie ?? '').token;

      const token = tokenInAuthHeaders ?? tokenInCookie;

      if (typeof token === 'string') {
        const decoded = jwt.verify(token, env.JWT_PRIVATE_KEY) as JWTPayload;
        if (typeof decoded === 'object') {
          const currentUser = await db.getRepository(User).findOneBy({ id: decoded.userId });
          if (currentUser !== null) {
            context.currentUser = currentUser;
            return roles.length === 0 || roles.includes(currentUser.role);
          }
        }
      }
      return false;
    },
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    context: ({ req, res }) => ({ req, res }),
    cors: {
      origin: env.CORS_ALLOWED_ORIGINS.split(','),
      credentials: true,
    },
  });
  await server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start().catch(console.error);
