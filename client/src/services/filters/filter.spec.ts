import { describe, expect, it } from '@jest/globals'
import { Filter, FilterList } from './filter'

type Data = {
  name: string
  age: number
}

describe('filter', () => {
  const testData = new FilterList([
    {
      name: 'Hugo',
      age: 24,
    },
    {
      name: 'Pierre',
      age: 31,
    },
    {
      name: 'Peter',
      age: 42,
    },
    {
      name: 'Paul',
      age: 23,
    },
  ])

  const isWiseFilter = new Filter<Data>({ predicate: ({ age }) => age > 30, id: 'age' })
  const isLearningFilter = new Filter<Data>({ predicate: ({ age }) => age < 25, id: 'age' })

  const isNameWith4LettersFilter = new Filter<Data>({
    predicate: ({ name }) => name.length === 4,
    id: 'name',
  })
  const isNameWithPFilter = new Filter<Data>({
    predicate: ({ name }) => name[0] === 'P',
    id: 'name',
  })

  beforeEach(() => {
    testData.clearFilters()
  })

  it('should filter all boomers', () => {
    testData.addFilter(isWiseFilter)

    const result = testData.getFilteredList()
    const expected = [
      {
        name: 'Pierre',
        age: 31,
      },
      {
        name: 'Peter',
        age: 42,
      },
    ]

    expect(result.length).toBe(2)
    expect(result).toStrictEqual(expected)
  })

  it('should only have one filter per filterId', () => {
    testData.addFilter(isWiseFilter)
    testData.addFilter(isLearningFilter)

    expect(testData.filtersObject).toStrictEqual({
      age: isLearningFilter,
    })

    const result = testData.getFilteredList()
    const expected = [
      {
        name: 'Hugo',
        age: 24,
      },
      {
        name: 'Paul',
        age: 23,
      },
    ]

    expect(result.length).toBe(2)
    expect(result).toStrictEqual(expected)
  })

  it('should remove one filter given the name', () => {
    testData.addFilter(isWiseFilter)
    testData.addFilter(isNameWith4LettersFilter)

    expect(testData.filtersObject).toStrictEqual({
      name: isNameWith4LettersFilter,
      age: isWiseFilter,
    })

    testData.removeFilter('age' as Filter<Data>['id'])
    expect(testData.filtersObject).toHaveProperty('name')
  })

  it('should allow removing a filter that doesnt exist', () => {
    testData.addFilter(isNameWith4LettersFilter)
    testData.removeFilter(isWiseFilter.id)
    // for now removing any filter with the same id will remove the category
    // testData.removeFilter(isNameWithPFilter);

    expect(testData.filtersObject).toStrictEqual({ name: isNameWith4LettersFilter })
  })

  it('should correctly get data with filters', () => {
    testData.addFilter(isLearningFilter)
    const expectedPetitCon = [
      {
        name: 'Hugo',
        age: 24,
      },
      {
        name: 'Paul',
        age: 23,
      },
    ]
    expect(testData.getFilteredList()).toStrictEqual(expectedPetitCon)

    testData.addFilter(isNameWithPFilter)
    const expectedPetitConWithP = [
      {
        name: 'Paul',
        age: 23,
      },
    ]
    expect(testData.getFilteredList()).toStrictEqual(expectedPetitConWithP)

    testData.removeFilter(isLearningFilter.id)
    const expectedWithP = [
      {
        name: 'Pierre',
        age: 31,
      },
      {
        name: 'Peter',
        age: 42,
      },
      {
        name: 'Paul',
        age: 23,
      },
    ]
    expect(testData.getFilteredList()).toStrictEqual(expectedWithP)

    testData.addFilter(isNameWith4LettersFilter)
    const expected4Letters = [
      {
        name: 'Hugo',
        age: 24,
      },
      {
        name: 'Paul',
        age: 23,
      },
    ]
    expect(testData.getFilteredList()).toStrictEqual(expected4Letters)
  })
})
