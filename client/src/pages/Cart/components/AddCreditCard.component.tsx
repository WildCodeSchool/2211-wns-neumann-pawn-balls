import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function AddCreditCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="add-credit-card">
      <div className="d-flex flex-row">
        <div className="title">Ajouter un moyen de payement</div>
        <Button className="close" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '-' : '+'}
        </Button>
      </div>
      {isOpen ? <CreditCardForm /> : <div />}
    </div>
  )
}

function CreditCardForm() {
  return (
    <div className="open">
      <Form>
        <div className="form-group">
          <div className="label">
            <label>Card Number</label>
          </div>
          <div className="small">
            <small>Enter the 16-digits number on your card</small>
          </div>
          <input type="tel" className="form-control" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />
        </div>

        <div className="form-group">
          <div className="label">
            <label>Card Owner</label>
          </div>
          <div className="small">
            <small>Enter the lastname written on the card</small>
          </div>
          <input type="text" className="form-control" id="cardNumber" placeholder="Dupont" />
        </div>

        <div className="form-group">
          <div className="label">
            <label>Expiration Date</label>
          </div>
          <input type="tel" className="form-control" id="cardNumber" placeholder="XX" />
          /
          <input type="tel" className="form-control" id="cardNumber" placeholder="XX" />
        </div>

        <div className="form-group">
          <div className="label">
            <label>CVC</label>
          </div>
          <div className="small">
            <small>Security Code at the back of your Card</small>
          </div>
          <input type="tel" className="form-control" id="cardNumber" placeholder="XXX" />
        </div>

        <button type="submit" className="btn btn-primary">
          Add this Card
        </button>
      </Form>
    </div>
  )
}
