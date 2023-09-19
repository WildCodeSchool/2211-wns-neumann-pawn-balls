export class Filter<X> {
  id: string & { _brand: 'filterId' }
  predicate: (data: X) => boolean

  constructor({ predicate, id }: { predicate: Filter<X>['predicate']; id: string }) {
    this.predicate = predicate
    this.id = id as Filter<X>['id']
  }
}

export class FilterList<X> {
  filtersObject: Record<string, Filter<X>> = {}
  dataList: X[] // doesn't change

  constructor(dataList: X[]) {
    this.dataList = dataList
  }

  /**
   * return the filtered Data array contained in this object, using filtersObject
   */
  getFilteredList(): X[] {
    return this.dataList.filter((data) => Object.values(this.filtersObject).every((filter) => filter.predicate(data)))
  }

  //should add a preciate to the corresponding id, or change the current one if it exist for a new predicate
  addFilter(filter: Filter<X>) {
    this.filtersObject[filter.id] = filter
  }

  //should remove a filter from filtersObject if it exists, and return it
  removeFilter(filterId: Filter<X>['id']): Filter<X> {
    const { [filterId]: removedFilter, ...rest } = this.filtersObject
    this.filtersObject = rest
    return removedFilter
  }

  /**
   * To use whenever you remove all filters
   */
  clearFilters() {
    this.filtersObject = {}
  }

  /**
   * To use whenever you fetch data. Return the updated DataList filtered.
   */
  updateDataList(updatedDataList: X[]) {
    this.dataList = updatedDataList
    return this.getFilteredList()
  }
}
