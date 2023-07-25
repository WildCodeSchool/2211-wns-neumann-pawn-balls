//#region ITEM RESERVATION DATES

import { shiftDate } from '../../../utils/date'

//by default, when creating a reservation, it is set for 2weeks, so 14 days
const defaultReservationLength = 14

export type ItemReservationDates = {
  start: Date
  end: Date
}

export function createItemReservation({ start = new Date(), reservationLength = defaultReservationLength }) {
  const days = reservationLength
  const end = shiftDate({ initialDate: start, days })
  return {
    start,
    end,
  }
}

//#endregion

export type Item = {
  id: number & { _brand: 'item_id' }
  image: string
  name: string
  price: number
}

export class CartItem {
  item: Item
  quantity: number

  constructor(item: Item, quantity?: number) {
    this.item = item
    this.quantity = quantity ?? 1
  }
}
