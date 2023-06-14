import './products.css'
import { useNavigate } from 'react-router-dom'

interface Props {
  id: string
    description: string
}

export default function Product({ id, description }: Props) {
  console.log('hello')
  const navigate = useNavigate()
  function onClickDisplaySingleProduct() {
    navigate(`/products/${id}`)
  }
  return (
    <div className="card" onClick={onClickDisplaySingleProduct}>
      {/*image ? 
        <img src={image} className="img-thumbnail" alt="..." />
        : null
  */}
      <div className="card-body">
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
  )
}
