import { Key } from 'react'
import { useItemsQuery } from '../../gql/generated/schema'
import Product from './components/Product/Product'
//import { items } from './fakeData/data'

export default function Item() {
  const {loading, data: currentItems, refetch} = useItemsQuery()
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
          {currentItems?.map((el: { description: string; image: any }, i: Key | null | undefined) => (
            <Product key={i} description={el.description} image={el.image} />
          ))}
        </div>
      </div>
    </div>
  )
}
