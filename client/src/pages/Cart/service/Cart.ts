import { CartItem, Item, ItemReservationDates, createItemReservation } from './Cart.types'

//if an item is stored in someone's cart it is not removed from available items
//for now which could create conflicts
//maybe add to Item a boolean to say if it is in a cart or not
//which will be changed when adding or removing from cart
export class Cart {
  items: CartItem[]
  reservation: ItemReservationDates

  constructor({ items, reservation }: { items?: CartItem[]; reservation?: ItemReservationDates }) {
    this.items = items ?? []
    this.reservation = reservation ?? createItemReservation({})
  }

  GetCart() {
    return {
      items: this.items,
      reservation: this.reservation,
    }
  }

  GetItemById(itemId: Item['id']) {
    return this.items.find((item) => item.item.id === itemId)
  }

  IsInCart(item: Item) {
    const items = this.items.map((itemCart) => itemCart.item)
    return items.indexOf(item)
  }

  AddToCart(item: Item) {
    const index = this.IsInCart(item)
    if (index === -1) {
      this.items.push({ item, quantity: 1 })
    } else {
      this.items[index].quantity++
    }
  }

  RemoveOneFromCart(item: Item) {
    const index = this.IsInCart(item)
    if (index !== -1) {
      this.items[index].quantity--
    }
    this.items = this.items.filter((item) => item.quantity > 0)
  }
  EmptyCart() {
    this.items = []
  }

  GetItemCost(cartItem: CartItem) {
    return cartItem.item.price * cartItem.quantity
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
