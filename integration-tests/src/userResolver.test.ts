import { gql } from '@apollo/client/core';
import db from '../../server/src/db';
import User from '../../server/src/entity/User';
import client from './apolloClient';

describe('UserResolver tests', () => {
  describe('CreateUser', () => {
    const createUserMutation = gql`
      mutation Mutation($data: UserInput!) {
        createUser(data: $data) {
          email
          firstname
          id
          lastname
          role
        }
      }
    `;

    it('should create a new user given valid parameters', async () => {
      const variables = {
        data: {
          firstname: 'super',
          lastname: 'admin',
          email: 'admin@gmail.com',
          password: 'password',
          role: 'admin',
        },
      };
      const query = await client.mutate({ mutation: createUserMutation, variables });

      const createdUser = query.data.createUser;

      const userCount = await db.getRepository(User).count();
      expect(userCount).toBe(1);

      expect(createdUser).toHaveProperty('id');
      expect(createdUser).toHaveProperty('__typename');
      expect(createdUser.__typename).toBe('User');

      delete createdUser.__typename;
      delete createdUser.id;

      expect({
        ...createdUser,
        password: variables.data.password,
      }).toMatchObject(variables.data);
    });

    it('should fail to create a new user (email already exist)', async () => {
      const variables = {
        data: {
          firstname: 'super',
          lastname: 'admin',
          email: 'admin@gmail.com',
          password: 'password',
          role: 'admin',
        },
      };
      await client.mutate({ mutation: createUserMutation, variables });
      try {
        await client.mutate({ mutation: createUserMutation, variables });
      } catch (error: any) {
        expect(error.constructor.name).toBe('ApolloError');
        expect(error.message).toBe('EMAIL_ALREADY_EXISTS');
      }
    });
  });
});
