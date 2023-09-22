import { BaseItem, CartItem, ItemReservationDates, createItemReservation } from './Cart.types'

//if an item is stored in someone's cart it is not removed from available items
//for now which could create conflicts
//maybe add to Item a boolean to say if it is in a cart or not
//which will be changed when adding or removing from cart
export class Cart<T extends BaseItem> {
  items: CartItem<T>[]
  reservation: ItemReservationDates

  constructor(content?: { items?: CartItem<T>[]; reservation?: ItemReservationDates }) {
    this.items = content?.items ?? []
    this.reservation = content?.reservation ?? createItemReservation({})
  }

  GetCart() {
    return {
      items: this.items,
      reservation: this.reservation,
    }
  }

  GetItemById(itemId: T['id']) {
    return this.items.find((cartItem) => cartItem.product.id === itemId)
  }

  IsInCart(item: T) {
    const items = this.items.map((cartItem) => cartItem.product.name)
    return items.indexOf(item.name)
  }

  AddToCart(item: T) {
    const index = this.IsInCart(item)
    if (index === -1) {
      this.items.push(new CartItem<T>({ item, quantity: 1 }))
    } else {
      this.items[index].quantity++
    }
  }

  RemoveOneFromCart(item: T) {
    const index = this.IsInCart(item)
    if (index !== -1) {
      this.items[index].quantity--
    }
    this.items = this.items.filter((item) => item.quantity > 0)
  }
  EmptyCart() {
    this.items = []
  }

  GetItemCost(cartItem: CartItem<T>) {
    return cartItem.product.price * cartItem.quantity
  }

  GetNumberOfArticle() {
    const numberOfArticle = this.items.reduce((acc, current) => (acc += current.quantity), 0)
    return numberOfArticle
  }

  GetCartCost() {
    const totalCost = this.items.reduce((acc, current) => (acc += this.GetItemCost(current)), 0)
    return totalCost
  }

  ResetReservationDates() {
    this.reservation = createItemReservation({})
  }
}
