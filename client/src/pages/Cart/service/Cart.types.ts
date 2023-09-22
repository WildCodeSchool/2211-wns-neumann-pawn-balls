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

export interface BaseItem {
  id: string
  name: string
  price: number
}

export type Item = {
  id: string & { _brand: 'item_id' }
  image: string
  name: string
  price: number
}
export class CartItem<T extends BaseItem> {
  product: T
  quantity: number

  constructor({ item, quantity }: { item: T; quantity?: number }) {
    this.product = item
    this.quantity = quantity ?? 1
  }
}
