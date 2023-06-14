/* eslint-disable max-len */
import { useParams } from 'react-router-dom'
import { useItemQuery } from '../../../gql/generated/schema'
import './singlepage.css'

export interface Item {
  id: string
  name: string
  price: number
  description: string
}


export function SinglePageItem() {
  const {id} = useParams<{id: string}>()

  if (!id) {throw new Error()}

  const {loading, data: currentItem} = useItemQuery({
    variables: {
       getOneItemId: id
    }
  })

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  return (
    <div className="mainContainer">
      <div className="img-container">pas de photo</div>
      <div className="presentation">
        <div className="header">
          <h2>{currentItem?.getOneItem.name}</h2>
          <p>{currentItem?.getOneItem.price} € par jour</p>
        </div>
        <div className="infos">
          <p>{currentItem?.getOneItem.description}</p>
          <div className="cart">
            <button type='button' className="button" onClick={() => console.log('ajouté au panier')}> 
              Ajouter au panier
              <i className="bi cart bi-cart2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
