import { Button } from 'react-bootstrap'
import { Cart } from '../service/Cart'
import { Item } from '../service/Cart.types'
import './ShoppingSummary.css'

export default function ShoppingSummary(props: { cart: Cart }) {
  return (
    <div className="card" style={{ width: '30rem' }}>
      <ul className="list-group list-group-flush">
        <ItemShoppingFeed cart={props.cart} />
      </ul>
      <div className="d-flex justify-content-end">
        <div className="cart-cost">Total Price: {props.cart.GetCartCost()} €</div>
      </div>

      <button type="button" className="payment-btn btn">
        Procéder au Paiement
      </button>
    </div>
  )
}

export function ItemShoppingFeed(props: { cart: Cart }) {
  return (
    <div className="item-shopping-feed">
      {props.cart.items.map((item, key) => (
        <li className="list-group-item" key={key}>
          <ItemReservationObject key={key} item={item.item} cart={props.cart} />
        </li>
      ))}
    </div>
  )
}

//This component is used as an item object from a list of items
export function ItemReservationObject(props: { item: Item; cart: Cart }) {
  const cartItem = props.cart.GetItemById(props.item.id)
  if (!cartItem) {
    return <div></div>
  }
  return (
    <div className="d-flex flex-row">
      <div className="item-img">{props.item.image}</div>
      <div className="item-name">{props.item.name}</div>
      <div className="item-quantity">
        <Button
          onClick={() => {
            console.log({ item: props.item })
            props.cart.RemoveOneFromCart(props.item)
            console.log('Remove One')
            console.log({ cart: props.cart })
          }}
        >
          -
        </Button>
        {cartItem.quantity}
        <Button
          onClick={() => {
            console.log({ item: props.item })
            props.cart.AddToCart(props.item)
            console.log('Add One')
            console.log({ cart: props.cart })
          }}
        >
          +
        </Button>
      </div>
      <div className="item-name">{props.cart.GetItemCost(cartItem)}</div>
    </div>
  )
}
