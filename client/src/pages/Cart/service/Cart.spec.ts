import { describe } from '@jest/globals'
import { Cart } from './Cart'
import { Item } from './Cart.types'

describe('Cart Object Tests', () => {
  const date = new Date('2023-06-14')

  const item1: Item = {
    id: 1 as Item['id'],
    image: 'img',
    name: 'item1',
    price: 5,
  }
  const item2: Item = {
    id: 1 as Item['id'],
    image: 'other img',
    name: 'item2',
    price: 7,
  }

  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(date)
  })
  afterAll(() => {
    jest.useRealTimers()
  })

  describe('AddToCart test', () => {
    it('should succesflly add a new item', () => {
      const cart = new Cart({})
      cart.AddToCart(item1)
      expect(cart.items).toStrictEqual([{ item: item1, quantity: 1 }])
    })
    it('should succesfully add an item already in cart', () => {
      const cart = new Cart({
        items: [
          {
            item: item1,
            quantity: 1,
          },
        ],
      })
      cart.AddToCart(item1)
      expect(cart.items).toStrictEqual([{ item: item1, quantity: 2 }])
    })
  })
  describe('RemoveOneFromCart test', () => {
    it('succesfully remove an item entirely from cart', () => {
      const cart = new Cart({
        items: [
          {
            item: item1,
            quantity: 1,
          },
        ],
      })
      cart.RemoveOneFromCart(item1)
      expect(cart.items).toStrictEqual([])
    })
    it('sucessfully remove an item from cart by decreasing quantity value', () => {
      const cart = new Cart({
        items: [
          {
            item: item1,
            quantity: 2,
          },
        ],
      })
      cart.RemoveOneFromCart(item1)
      expect(cart.items).toStrictEqual([
        {
          item: item1,
          quantity: 1,
        },
      ])
    })
  })
  describe('IsInCart test', () => {
    it('sucessfully find item2 in cart', () => {
      const cart = new Cart({
        items: [
          {
            item: item1,
            quantity: 1,
          },
          {
            item: item2,
            quantity: 1,
          },
        ],
      })
      expect(cart.IsInCart(item2)).toBe(1)
    })
    it('fail to find item2 in cart', () => {
      const cart = new Cart({
        items: [
          {
            item: item1,
            quantity: 1,
          },
        ],
      })
      expect(cart.IsInCart(item2)).toBe(-1)
    })
  })
  describe('GetItemCost test', () => {
    it('should return 2times the price of item1', () => {
      const cart = new Cart({
        items: [
          {
            item: item1,
            quantity: 2,
          },
        ],
      })
      const cost = cart.GetItemCost(cart.items[0])
      expect(cost).toBe(item1.price * 2)
    })
  })
  xit('GetNumberOfArticle test', () => {
    const cart = new Cart({})
    cart.AddToCart(item1)
  })
  xit('GetCartCost test', () => {
    const cart = new Cart({})
    cart.AddToCart(item1)
  })
  xit('ResetReservationDates test', () => {
    const cart = new Cart({})
    cart.AddToCart(item1)
  })
  xit('EmptyCart test', () => {
    const cart = new Cart({})
    cart.AddToCart(item1)
  })
})
