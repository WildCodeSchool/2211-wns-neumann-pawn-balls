import { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { useCallback } from 'react'
import Close from './Close'

import styled from 'styled-components'

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
    <ModalContainer show={show}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={handleClose}>
            <Close />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <ModalTitle>{active === Routes.Signin ? 'Se connecter' : 'S\'inscrire'}</ModalTitle>
          {active === Routes.Signin && <SignIn goToSignUpPage={goTo} />}
          {active === Routes.Signup && <SignUp goToSignInPage={goTo} />}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  )
}

const ModalContainer = styled.div<{ show?: boolean | undefined }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const ModalTitle = styled.span`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: black;
`

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
`

const ModalBody = styled.div`
  padding: 50px;
`
