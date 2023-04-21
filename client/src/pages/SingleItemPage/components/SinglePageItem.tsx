/* eslint-disable max-len */
import { useState } from 'react'
import './singlepage.css'
//import { useParams } from 'react-router-dom'

export interface Item {
  id: string
  name: string
  price: number
  description: string
}

const itemExample: Item = {
  id: '1',
  name: 'Article de sport',
  price: 34,
  // eslint-disable-next-line max-len
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue at ipsum et aliquam. Vestibulum suscipit enim et nulla blandit, aliquet maximus justo hendrerit. Donec dignissim ipsum id lorem ullamcorper, vitae faucibus magna faucibus. Proin tempus lacinia tincidunt. Ut mattis turpis eget semper scelerisque. Nunc in purus diam. Aenean dictum mauris eget pretium auctor. Vestibulum mollis at erat nec sollicitudin. Nullam quis sollicitudin libero. Aliquam lobortis ligula id tempor commodo. Nunc varius aliquam urna, eget sodales enim blandit quis. Sed maximus porttitor erat, nec fermentum eros finibus eget. Aenean arcu ante, aliquet aliquam lectus id, viverra efficitur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer consequat, libero in malesuada molestie, lacus sapien fringilla tortor, vitae volutpat felis mauris eget ex.',
}

export function SinglePageItem() {
  const [item, setItem] = useState<Item>(itemExample)
  //const { id } = useParams()
  return (
    <div className="mainContainer">
      <div className="img-container">pas de photo</div>
      <div className="presentation">
        <div className="header">
          <h2>{item.name}</h2>
          <p>{item.price} € par jour</p>
        </div>
        <div className="infos">
          <p>{item.description}</p>
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
