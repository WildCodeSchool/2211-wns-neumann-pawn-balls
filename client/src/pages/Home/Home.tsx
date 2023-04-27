import Categories from './components/Categories/Categories'
import { sports } from './fakeData/data'


export default function Login() {
  
  return (
    <div>
      <div className="row">
        <div className="col row mt-5">
          {sports.map((el, i) => (
            <Categories key={i} title={el.title} image={el.image} product={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
