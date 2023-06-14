/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from 'react'
import { useItemsQuery } from '../../gql/generated/schema'
import Product from './components/Product/Product'
//import { items } from './fakeData/data'

export default function Item() {
  const {loading, data: currentItems, refetch} = useItemsQuery()
  console.log('check', {currentItems})

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  
  return (
    <div>
      <div className="row">
        <div className="col row ms-3 mt-5">
          {currentItems?.getAllItems?.map((el: { id: string; description: string }, i: Key | null | undefined) => (
            <Product key={i} id={el.id} description={el.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
