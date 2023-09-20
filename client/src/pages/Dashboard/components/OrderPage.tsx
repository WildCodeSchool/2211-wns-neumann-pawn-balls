import { Order, useGetOrdersQuery } from '../../../gql/generated/schema'

type OrderInfos = {
  id: Order['id'],
  start: string,
  end: string,
  bindingEmail: string,
  address: string,
}

export default function OrderPage() {
  const {data} = useGetOrdersQuery({errorPolicy: 'ignore',})
  const orders = data?.getOrders.map((order) => ({
    id: order.id,
    start: order.start,
    end: order.end,
    bindingEmail: order.bindingEmail,
    address: order.address,
  })) as OrderInfos[]
  return <OrderList orders={orders}></OrderList>
}

type OrderListProps = {
  orders: OrderInfos[]
}

function OrderList({orders}: OrderListProps) {
  return <>{orders}</>
}