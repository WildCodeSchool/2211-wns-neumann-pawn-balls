import './categories.css'

interface Props {
  title: string
  image: any
}

export default function Categories({ title, image }: Props) {
  return (
    <div className="test d-flex flex-column align-items-center justify-content-center container">
      <div className="categories-container">
        <img src={image} alt="extreme" />
      </div>
      <h3>{title}</h3>
    </div>
  )
}
