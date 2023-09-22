import { Button } from 'react-bootstrap'
import useCart from '../../../services/hooks/useCart'
import { Cart } from '../service/Cart'
import { Item } from '../service/Cart.types'
import './ShoppingSummary.css'

export default function ShoppingSummary() {
  const { cart, addToCart, removeOneFromCart } = useCart()

  return (
    <div className="card" style={{ width: '30rem' }}>
      <ul className="list-group list-group-flush">
        <ItemShoppingFeed cart={cart} addToCart={addToCart} removeOneFromCart={removeOneFromCart} />
      </ul>
      <div className="d-flex justify-content-end">
        <div className="cart-cost">Total Price: {cart.GetCartCost()} €</div>
      </div>

      <button type="button" className="payment-btn btn">
        Procéder au Paiement
      </button>
    </div>
  )
}

export function ItemShoppingFeed(props: {
  cart: Cart<Item>
  addToCart: (item: Item) => void
  removeOneFromCart: (item: Item) => void
}) {
  return (
    <div className="item-shopping-feed">
      {props.cart.items.map((item, key) => (
        <li className="list-group-item" key={key}>
          <ItemReservationObject
            key={key}
            item={item.product}
            cart={props.cart}
            addToCart={props.addToCart}
            removeOneFromCart={props.removeOneFromCart}
          />
        </li>
      ))}
    </div>
  )
}

//This component is used as an item object from a list of items
export function ItemReservationObject(props: {
  item: Item
  cart: Cart<Item>
  addToCart: (item: Item) => void
  removeOneFromCart: (item: Item) => void
}) {
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
            props.removeOneFromCart(props.item)
          }}
        >
          -
        </Button>
        {cartItem.quantity}
        <Button
          onClick={() => {
            props.addToCart(props.item)
          }}
        >
          +
        </Button>
      </div>
      <div className="item-name">{props.cart.GetItemCost(cartItem)}</div>
    </div>
  )
}
