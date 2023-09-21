/* eslint-disable max-len */
import { useNavigate, useParams } from 'react-router-dom'
import { useItemQuery } from '../../../gql/generated/schema'
import './singlepage.css'

export interface Item {
  id: string
  name: string
  price: number
  description: string
}

export function SinglePageItem() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    throw new Error()
  }

  const navigate = useNavigate()

  const { loading, data } = useItemQuery({
    variables: {
      getOneItemId: id,
    },
  })

  const currentItem = data?.getOneItem

  if (loading) {
    return (
      <div>
        <span className="sr-only">Loading...</span>
        <div className="spinner-border" role="status"></div>
      </div>
    )
  }

  if (!currentItem) {
    // eslint-disable-next-line quotes
    alert("Error: Couldn't find the item")
    navigate('/')
    return <></>
  }

  const onAddToCartClick = () => {
    console.log(`ajouté au panier: ${currentItem}`)
  }

  return (
    <div className="mainContainer">
      <div className="img-container">pas de photo</div>
      <div className="presentation">
        <div className="header">
          <h2>{currentItem.name}</h2>
          <p>{currentItem.price} € par jour</p>
        </div>
        <div className="infos">
          <p>{currentItem.description}</p>
          <div className="cart">
            <button type="button" className="button" onClick={() => onAddToCartClick()}>
              Ajouter au panier
              <i className="bi cart bi-cart2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
