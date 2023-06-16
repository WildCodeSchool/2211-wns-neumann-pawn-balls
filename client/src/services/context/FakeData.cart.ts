import { Cart } from '../../pages/Cart/service/Cart'
import { CartItem, Item, createItemReservation } from '../../pages/Cart/service/Cart.types'

const reservation = createItemReservation({ start: new Date('2022-10-10') })

const itemsToAdd: CartItem[] = [
  {
    item: {
      id: 1 as Item['id'],
      image: 'img',
      name: 'Ski',
      price: 15,
    },
    quantity: 2,
  },
  {
    item: {
      id: 2 as Item['id'],
      image: 'img',
      name: 'Chaussure de Ski',
      price: 7,
    },
    quantity: 2,
  },
  {
    item: {
      id: 3 as Item['id'],
      image: 'img',
      name: 'Baton de Ski',
      price: 9,
    },
    quantity: 2,
  },
]

export const fakeCart = new Cart({ items: itemsToAdd, reservation })
