import { dateToWrittenDate } from '../../../utils/date'
import { Cart } from '../service/Cart'
import { CartItem, Item } from '../service/Cart.types'

export default function ItemReservationCard(props: { cart: Cart }) {
  const start = dateToWrittenDate(props.cart.reservation.start)
  const end = dateToWrittenDate(props.cart.reservation.end)

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div>
          Dates de Réservation: {start} - {end}
        </div>
        <ul className="list-group list-group-flush">
          <ItemReservationFeed items={props.cart.items} />
        </ul>
      </div>
    </div>
  )
}

export function ItemReservationFeed(props: { items: CartItem[] }) {
  return (
    <div className="item-reservation-feed">
      {props.items.map((item, key) => (
        <li className="list-group-item" key={key}>
          <ItemReservationObject item={item.item} />
        </li>
      ))}
    </div>
  )
}

//This component is used as an item object from a list of items
export function ItemReservationObject(props: { item: Item }) {
  return (
    <div className="d-flex flex-row">
      <div className="item-img">{props.item.image}</div>
      <div className="item-name">{props.item.name}</div>
    </div>
  )
}

const itemToAdd: Item = {
  id: 1 as Item['id'],
  image: 'img',
  name: 'name ski',
  price: 10000,
}

const cartItem = {
  item: itemToAdd,
  quantity: 1,
}

const listItem = [cartItem, cartItem, cartItem, cartItem]

export function Random() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <ul className="list-group list-group-flush">
        <ItemReservationFeed items={listItem} />
        <li className="list-group-item">
          <ItemReservationObject item={itemToAdd} />
        </li>
      </ul>
    </div>
  )
}
