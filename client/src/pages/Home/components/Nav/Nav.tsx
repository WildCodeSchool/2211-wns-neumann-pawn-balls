import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetProfileQuery, useLogoutMutation } from '../../../../gql/generated/schema'
import ModalLogin from '../../../Auth/ModalLogin'
import styled, { css } from 'styled-components'
import { ShoppingBasket2 } from '@styled-icons/remix-fill/ShoppingBasket2'
import { Search } from '@styled-icons/fluentui-system-filled/Search'
import Logo from './Logo'

export default function Nav() {
  const [show, setShow] = useState(false)
  const [showInput, setShowInput] = useState(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleShowInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    setShowInput(true)
  }

  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowInput(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const {
    data: currentUser,
    client,
    error,
  } = useGetProfileQuery({
    errorPolicy: 'ignore',
  })

  return (
    <Container>
      <Pawnballs />
      <ButtonContainer>
        {showInput && <SearchInput ref={searchInputRef} type="text" placeholder="Rechercher..." />}
        {!showInput && (
          <ContainerSearch onClick={handleShowInput}>
            <SearchBtn />
          </ContainerSearch>
        )}
        <BasketLogo />
        {currentUser?.profile ? (
          <Button
            onClick={async () => {
              await logout()
              client.resetStore()
              navigate('/')
            }}
          >
            Se déconnecter
          </Button>
        ) : (
          <Button onClick={() => handleShow()}>Se connecter</Button>
        )}
        {!currentUser?.profile && (
          <Button $createAccount onClick={() => handleShow()}>
            Créer un compte
          </Button>
        )}
      </ButtonContainer>
      {show && <ModalLogin show={show} handleClose={handleClose} />}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 50px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button<{ $createAccount?: boolean }>`
  margin: 20px 8px;
  border-radius: 50px;
  padding: 6px 22px;
  border: 1px solid black;
  background-color: white;

  ${(props) =>
    props.$createAccount &&
    css`
      background-color: black;
      color: white;
    `}
`
const BasketLogo = styled(ShoppingBasket2)`
  color: black;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

const ContainerSearch = styled.button`
  border-radius: 90px;
  background-color: #4ecb71;
  border: #4ecb71;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

const SearchBtn = styled(Search)`
  color: black;
  width: 15px;
  height: 15px;
`

const Pawnballs = styled(Logo)`
  position: absolute;
  margin: 12px 16px;
`

const SearchInput = styled.input`
  width: 325px;
  border-radius: 50px;
  padding: 6px 15px;
  border: 1px solid black;
  margin-right: 20px;
`
