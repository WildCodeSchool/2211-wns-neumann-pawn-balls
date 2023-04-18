import { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { useCallback } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

type Props = {
  show: boolean | undefined
  handleClose?: () => void
  handleShow?: () => void
}

enum Routes {
  Signin = 'signin',
  Signup = 'signup',
}

export default function ModalLogin({ show, handleClose }: Props) {
  const [active, setActive] = useState<Routes>(Routes.Signin)

  const goTo = useCallback((route: string) => {
    setActive(route as Routes)
  }, [])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{active === Routes.Signin ? 'Se connecter' : 'S\'inscrire'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {active === Routes.Signin && <SignIn goToSignUpPage={goTo} />}

          {active === 'signup' && <SignUp goToSignInPage={goTo} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
