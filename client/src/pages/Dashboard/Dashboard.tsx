import { useGetProfileQuery } from '../../gql/generated/schema'
import {useState} from 'react'
import styled from 'styled-components'
import OrderList from './components/OrderList'
import ProductList from './components/ProductList'
import Menu from './components/Menu'

export default function Dashboard() {
  const [menuOption, setMenuOption] = useState<string>('orders')
  return (
    <Container>
      <Menu menuOption={menuOption} setMenuOption={setMenuOption} />
      {menuOption === 'orders' ? <OrderList /> : null}
      {menuOption === 'products' ? <ProductList /> : null}
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