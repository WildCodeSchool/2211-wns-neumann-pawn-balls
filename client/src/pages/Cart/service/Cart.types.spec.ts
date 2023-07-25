import { createItemReservation } from './Cart.types'

describe('Cart Type tests', () => {
  describe('createItemReservation test', () => {
    const date = new Date('2023-06-14')
    beforeAll(() => {
      jest.useFakeTimers()
      jest.setSystemTime(date)
    })
    afterAll(() => {
      jest.useRealTimers()
    })
    it('should create a date today with 14days difference', () => {
      const reservation = createItemReservation({})
      expect(reservation).toStrictEqual({
        start: date,
        end: new Date('2023-06-28'),
      })
    })
    it('should create a date from a specific date with 2days interval', () => {
      const start = new Date('2023-06-30')
      const reservation = createItemReservation({ start, reservationLength: 2 })
      expect(reservation).toStrictEqual({
        start,
        end: new Date('2023-07-02'),
      })
    })
  })
})
