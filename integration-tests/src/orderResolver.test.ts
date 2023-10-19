import { gql } from '@apollo/client/core';
import db from '../../server/src/db';
import User from '../../server/src/entity/User';
import client from './apolloClient';
//import Order from '../../server/src/entity/Order';
import Item from '../../server/src/entity/Item';
//import UnitItem from '../../server/src/entity/UnitItem';

describe('OrderResolver tests', () => {
  describe('CreateOrder', () => {
    const createOrderMutation = gql`
      mutation Mutation($data: OrderInput!) {
        createOrder(data: $data) {
          id
        }
      }
    `;

    it('should create a new order', async () => {
       const ski = await db.getRepository(Item).create({name: "ski", price: 40, description: "bons skis"})
       //const ski = await db.getRepository(Item).create({name: "ski", price: 40, description: "bons skis"})

      const variables = {
        data: {
          start: "2023-10-19",
          end: "2023-11-19",
          address: "4 place des fetes 31400 Toulouse",
          phoneNumber: "0606600606",
          bindingEmail: "toto@gmail.com",
          items: [{id: ski.id, quantity: 1}]
        },
      };
      const query = await client.mutate({ mutation: createOrderMutation, variables });

      const createdOrder = query.data.createOrder;

      const userCount = await db.getRepository(User).count();
      expect(userCount).toBe(1);

      expect(createdOrder).toHaveProperty('id');

    });
    })
})
