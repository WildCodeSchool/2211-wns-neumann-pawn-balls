import { ApolloError } from 'apollo-server-errors';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import datasource from '../db';
import Order, { type ItemAndQuantity, OrderInput } from '../entity/Order';
import OrderLine from '../entity/OrderLine';
import Item from '../entity/Item'
import UnitItem from '../entity/UnitItem';
import User from '../entity/User';

@Resolver(() => Order)
export class OrderResolver {
  //   @Authorized(['admin'])
  @Query(() => [Order])
  async getOrders(): Promise<Order[]> {
    const orders = await datasource.getRepository(Order).find({
      relations: ['user', 'orderLines'],
    });

    return orders;
  }

  @Mutation(() => Order)
  async createOrder(@Arg('data', { validate: false }) data: OrderInput): Promise<Order> {

    const order = new Order();
    order.start = data.start;
    order.end = data.end;
    order.address = data.address;
    order.bindingEmail = data.bindingEmail;
    order.phoneNumber = data.phoneNumber;
    
    const user = await datasource.getRepository(User).findOne({ where: { id: data.userId } });
    if (user !== null) {
      order.user = user;
    }

    async function calculateCostOfOrder(items: ItemAndQuantity[]): Promise<number> {
      let cost = 0
      await Promise.all(items.map(async (element) => {
        const item = await datasource.getRepository(Item).findOne({ where: { id: element.id } });
        if (item === null) {
          throw new Error("Missing item");
        }

        cost+= item.price*element.quantity
      }))

      return cost
    }

    order.cost = await calculateCostOfOrder(data.items)

    /* function checkUnitAvailability(unitId) {
          const orderLine = await datasource.getRepository(OrderLine).find({
            where: {
              unitItem: unitId,
              
            }
          })
          if (orderLine) {
            throw new Error('already rented on this period')
          }
        }
      */
    // faire un check et le lien avec le unit item id
    // const units = data.unitItem
    // units.forEach((unit) => console.log(unit))

    const savedOrder = await datasource.getRepository(Order).save(order);

    /* for (let i = 0; i < data.unitItems.length; i++) {
      const unit = await datasource.getRepository(UnitItem).findOneOrFail({
        where: {
          id: data.unitItems[i],
        },
        relations: ['itemId'],
      });
      if (unit != null) {
        console.log(unit, 'unit unit unit unit unit');
        const orderLine = new OrderLine();
        // orderLine.articleName = unit.item.name
        // orderLine.articleCost = unit.item.price
        orderLine.order = savedOrder;
        orderLine.unitItem = unit;
        await datasource.getRepository(OrderLine).save(orderLine);
      }
    } */

    return await datasource.getRepository(Order).findOneOrFail({
      where: {
        id: savedOrder.id,
      },
      relations: ['orderLines', 'user'],
    });
  }

  //   @Authorized(['admin'])
  @Mutation(() => Order)
  async updateOrder(
    @Arg('id') id: string,
    @Arg('data', { validate: false }) data: OrderInput
  ): Promise<Order> {
    const orderAffected = await datasource.getRepository(Order).findOne({ where: { id } });

    if (orderAffected === null) {
      throw new ApolloError(`Order with id ${id} not found`);
    }

    orderAffected.start = data.start;
    orderAffected.end = data.end;
    orderAffected.address = data.address;
    orderAffected.bindingEmail = data.bindingEmail;
    orderAffected.phoneNumber = data.phoneNumber;

    const savedOrder = await datasource.getRepository(Order).save(orderAffected);

    const updatedOrder = await datasource.getRepository(Order).findOneOrFail({
      where: { id: savedOrder.id },
      relations: ['user', 'orderLines'],
    });

    return updatedOrder;
  }

  //   @Authorized(['admin'])
  @Mutation(() => Boolean)
  async deleteOrder(@Arg('id') id: string): Promise<boolean> {
    const order = await datasource
      .getRepository(Order)
      .findOne({ where: { id }, relations: ['orderLines'] });

    if (order === null) {
      throw new ApolloError(`Order with id ${id} not found`);
    }

    await datasource.getRepository(OrderLine).remove(order.orderLines);
    await datasource.getRepository(Order).delete(id);

    return true;
  }
}
