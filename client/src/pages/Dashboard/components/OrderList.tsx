import styled from 'styled-components'
import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'
import { useState, useEffect } from 'react'
import { Order, useGetOrdersQuery, GetOrdersQuery } from '../../../gql/generated/schema'
import { getDateFromTimeStamps, isAnteriorToToday } from '../../../utils/date'

enum OrderStatus {
  COMPLETE = 'complete',
  INPROGRESS = 'en cours',
  WAITING = 'en attente',
}

type OrderRows = {
  id: Order['id']
  start: string
  end: string
  bindingEmail: string
  address: string
  status: OrderStatus
}

export default function OrderList() {
  const [indexValue, setIndexValue] = useState('0')

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'start', name: 'Date de début' },
    { key: 'end', name: 'Date de fin' },
    { key: 'bindingEmail', name: 'Email' },
    { key: 'address', name: 'Adresse' },
    { key: 'status', name: 'Statut' },
  ]

  const { data, loading, error } = useGetOrdersQuery({ errorPolicy: 'ignore' })
  function filterOrders(
    orderList: GetOrdersQuery['getOrders'] | undefined,
    indexValue: string
  ): GetOrdersQuery['getOrders'] | [] {
    if (!orderList) {
      return []
    }
    const sortedArr = orderList.slice().sort((order1, order2) => {
      if (order1.start === order2.start) return order1.end > order2.end ? -1 : 0
      return order1.start > order2.start ? -1 : 0
    })

    let res = []
    const index = sortedArr.findIndex((el) => isAnteriorToToday(el.start))
    if (indexValue === '0') {
      res = sortedArr.slice(0, index)
    } else {
      res = sortedArr.slice(index, sortedArr.length)
    }
    return res
  }

  const [actualOrders, setActualOrders] = useState<GetOrdersQuery['getOrders']>([])
  const [pastOrders, setPastOrders] = useState<GetOrdersQuery['getOrders']>([])

  useEffect(() => {
    setActualOrders(filterOrders(data?.getOrders, '0'))
    setPastOrders(filterOrders(data?.getOrders, '1'))
  }, [data])

  function mapRows(dataList: Pick<Order, 'id' | 'start' | 'end' | 'bindingEmail' | 'address'>[]): OrderRows[] {
    return dataList.map((data) => ({
      id: data.id as Order['id'],
      start: getDateFromTimeStamps(data.start),
      end: getDateFromTimeStamps(data.end),
      bindingEmail: data.bindingEmail,
      address: data.address,
      status: OrderStatus.INPROGRESS,
    }))
  }

  const handleChangeItem = (newValue: string) => {
    setIndexValue(newValue)
  }

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <Wrapper>
      <Title>Commandes</Title>
      <Container>
        <Menu>
          <MenuItem $isClickedDiv={indexValue === '0' ? true : false} onClick={() => handleChangeItem('0')}>
            Commandes à venir
          </MenuItem>
          <MenuItem $isClickedDiv={indexValue === '1' ? true : false} onClick={() => handleChangeItem('1')}>
            Commandes passées
          </MenuItem>
        </Menu>
        <br />
        <UpperBarContainer>
          <SearchInput type="text" placeholder="Rechercher..." />
          {indexValue === '0' ? (
            (actualOrders.length > 0 ? (
              <Counter>{actualOrders.length} commandes à venir</Counter>
            ) : (
              <Counter>0 commande à venir</Counter>
            ))
          ) : (pastOrders.length > 0 ? (
            <Counter>{actualOrders.length} commandes à venir</Counter>
          ) : (
            <Counter>0 commande à venir</Counter>
          ))}
        </UpperBarContainer>
        <br />
        {indexValue === '0' ? (
          actualOrders.length > 0 ? (
            <DataGrid columns={columns} rows={mapRows(actualOrders)} />
          ) : (
            null
          )
          ) : (
            pastOrders.length > 0 ? (
              <DataGrid columns={columns} rows={mapRows(pastOrders)} />
            ) : (
              null
            )
          )}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-left: 10px;
`
const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
`

const Container = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`

const MenuItem = styled.div<{ $isClickedDiv: boolean }>`
  display: flex;
  justify-content: center;
  border-bottom: ${(props) => (props.$isClickedDiv ? '2px solid #000000' : '1px solid #A1A1A1')};
  width: 50%;
  cursor: pointer;
  font-weight: ${(props) => (props.$isClickedDiv ? '400' : '200')};
`
const UpperBarContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Counter = styled.p`
  font-weight: 200;
  font-size: 12px;
  margin-right: 5px;
`

const SearchInput = styled.input`
  width: 60%;
  border-radius: 50px;
  padding: 6px 15px;
  border: 1px solid black;
`
