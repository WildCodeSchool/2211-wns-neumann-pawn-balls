import { createContext, useReducer, useState } from 'react'
import { Cart } from '../../pages/Cart/service/Cart'
import { CartItem, Item } from '../../pages/Cart/service/Cart.types'

export type AppContext = {
  addToCart: (item: Item) => void
  removeOneFromCart: (item: Item) => void
  cart: Cart<Item>
  cartLength: number
}

export const initialCartContext = {
  cart: new Cart<Item>({ ...LocalStorageToCartItems() }),
}
export const ContextApp = createContext<AppContext>(initialCartContext as AppContext)

type CartState = {
  cart: Cart<Item>
}

enum CartActionType {
  ADDONE,
  REMOVEONE,
}

type CartAction = {
  type: CartActionType
  item: Item
}

function CartReducer(state: CartState, action: CartAction) {
  const { type, item } = action
  switch (type) {
    case CartActionType.ADDONE:
      state.cart.AddToCart(item)
      localStorage.setItem('cart', JSON.stringify(state.cart.GetCart()))

      //sauvegarde dans localStorage, le panier (items) stringified.
      return state
    case CartActionType.REMOVEONE:
      state.cart.RemoveOneFromCart(item)
      localStorage.setItem('cart', JSON.stringify(state.cart.GetCart()))

      return state
    default:
      return state
  }
}

function LocalStorageToCartItems(): Cart<Item> {
  const stringifiedCart = localStorage.getItem('cart') ?? ''
  const storedCart: { items: CartItem<Item>[]; reservation: { start: string; end: string } } =
    JSON.parse(stringifiedCart)
  const reservation = {
    start: new Date(storedCart.reservation.start),
    end: new Date(storedCart.reservation.end),
  }
  const cart = new Cart({ items: storedCart.items, reservation })
  return cart
}

export default function CartContextProvider({ children }: { children: JSX.Element }) {
  const storedCart = localStorage.getItem('cart') ?? ''
  const test = LocalStorageToCartItems()
  const [state, dispatch] = useReducer(CartReducer, initialCartContext as { cart: Cart<Item> })
  const [cartLength, setCartLength] = useState(initialCartContext.cart.GetNumberOfArticle())

  const contextUtilities = {
    addToCart: (item: Item) => {
      dispatch({ type: CartActionType.ADDONE, item })
      setCartLength(state.cart.GetNumberOfArticle() + 1)
    },
    removeOneFromCart: (item: Item) => {
      dispatch({ type: CartActionType.REMOVEONE, item })
      setCartLength(state.cart.GetNumberOfArticle() - 1)
    },
    cart: state.cart,
    cartLength,
  }

  return <ContextApp.Provider value={contextUtilities}>{children}</ContextApp.Provider>
}
