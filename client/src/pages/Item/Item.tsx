import Product from './components/Product/Product'
import { items } from './fakeData/data'

export default function Item() {
  return (
    <div>
      <div className="row">
        <div className="col row ms-3 mt-5">
          {items.map((el, i) => (
            <Product key={i} description={el.description} image={el.image} />
          ))}
        </div>
      </div>
    </div>
  )
}
