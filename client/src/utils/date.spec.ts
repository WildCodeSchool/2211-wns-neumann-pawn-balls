import { dateToWrittenDate, shiftDate } from './date'

describe('date utils tests', () => {
  const date = new Date('2023-06-14')

  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(date)
  })
  afterAll(() => {
    jest.useRealTimers()
  })

  describe('shiftDate tests', () => {
    it('should shift the date from now to 2 days later', () => {
      const date = shiftDate({ days: 2 })
      expect(date).toStrictEqual(new Date('2023-06-16'))
    })
  })

  describe('dateToWrittenDate tests', () => {
    it('should create a date in french', () => {
      const dateWritten = dateToWrittenDate(date)
      expect(dateWritten).toBe('Mercredi 14 juin 2023')
    })

    it('should create a date in english', () => {
      const dateWritten = dateToWrittenDate(date, false)
      expect(dateWritten).toBe('Wednesday, June 14, 2023')
    })
  })
})
