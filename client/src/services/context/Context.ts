import { createContext } from 'react'
import { Cart } from '../../pages/Cart/service/Cart'

export type AppContext = {
  cart: Cart
}

// to add: language, lightMode
export const newContext = {
  cart: new Cart({}),
}

export const Context = createContext<AppContext>(newContext)
