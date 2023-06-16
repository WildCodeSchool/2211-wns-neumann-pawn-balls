import './categories.css'
import 'animate.css'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  image: any
}

export default function Categories({ title, image }: Props) {
  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/products')
  }
  return (
    <div
      className="test d-flex flex-column align-items-center justify-content-center container cursor-pointer"
      onClick={handleClick}
      style={{ pointerEvents: 'visible' }}
    >
      <div className="categories-container">
        <img src={image} alt="extreme" />
      </div>
      <h3>{title}</h3>
    </div>
  )
}
