import { useContext } from 'react'
import { Context } from '../../services/context/Context'
import './CartPage.css'
import AddCreditCard from './components/AddCreditCard.component'
import ItemReservationCard from './components/ItemReservationCard.component'
import ShoppingSummary from './components/ShoppingSummary.component'

export default function CartPage() {
  const { cart } = useContext(Context)

  return (
    <div>
      <div className="cart-page-container d-flex flex-row justify-content-center">
        <ItemReservationCard cart={cart} />
        <ShoppingSummary cart={cart} />
      </div>
      <AddCreditCard />
    </div>
  )
}
