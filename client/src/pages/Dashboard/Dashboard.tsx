import { useGetProfileQuery } from '../../gql/generated/schema'
import {useState} from 'react'
import styled from 'styled-components'
import OrderList from './components/OrderList'
import Menu from './components/Menu'

export default function Dashboard() {
  //const [menuOption, setMenuOption] = useState('order')
  return (
    <Container>
      <Menu />
      <OrderList />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  padding: 30px;
`