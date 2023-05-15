import './products.css'

interface Props {
    description: string
    image: any
}

export default function Product({ image, description }: Props) {
  return (
    <div className="card">
      <img src={image} className="img-thumbnail" alt="..." />
      <div className="card-body">
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
  )
}
