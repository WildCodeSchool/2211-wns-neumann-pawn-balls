import styled from 'styled-components'
import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'
import { useState } from 'react'
import { Order, useGetOrdersQuery } from '../../../gql/generated/schema'
import { getDateFromTimeStamps, isAnteriorToToday } from '../../../utils/date'

enum OrderStatus {
    COMPLETE= 'complete',
    INPROGRESS= 'en cours',
    WAITING= 'en attente'
  }
  
  type OrderRows = {
    id: Order['id'],
    start: string,
    end: string,
    bindingEmail: string,
    address: string,
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

    const {data, error} = useGetOrdersQuery({errorPolicy: 'ignore',})

    const orders = data?.getOrders

    function filterOrders(orderList: Order[] | undefined, indexValue: string): Order[] {
        if (orderList === undefined) {return []}
        const sortedArr = orderList.sort(({start: aStart}, {start: bStart}) => {
            const date1 = new Date(aStart) 
            const date2 = new Date(bStart) 
            return date1.getTime() - date2.getTime()})
            const index = sortedArr.findIndex(el => isAnteriorToToday(el.start))
            let res = []
            if (indexValue === '0') {
                res = sortedArr.slice(0, index)
            } else {
                res = sortedArr.slice(index, sortedArr.length)
            }
        return res
    }

    const [ordersToDisplay, setOrdersToDisplay] = useState(orders ?? [])

    function mapRows(dataList: Pick<Order, 'id' | 'start' | 'end' | 'bindingEmail' | 'address'>[]): OrderRows[] {
        return dataList.map((data) => ({
          id: data.id as Order['id'],
          start: getDateFromTimeStamps(data.start),
          end: getDateFromTimeStamps(data.end),
          bindingEmail: data.bindingEmail,
          address: data.address,
          status: OrderStatus.INPROGRESS
        }))
      }
    

    const handleChangeItem = (newValue: string) => {
        console.log(newValue)
        setIndexValue(newValue)
        const orderList = orders ?? [] as Order[]
        setOrdersToDisplay(filterOrders(orderList, newValue))
    }

      return (
        <Wrapper>
            <Title>Commandes</Title>
            <Container>
                <Menu>
                    <MenuItem 
                        $isClickedDiv={indexValue === '0' ? true : false}
                        onClick={() => handleChangeItem('0')}>Commandes à venir</MenuItem>
                    <MenuItem 
                        $isClickedDiv={indexValue === '1' ? true : false}
                        onClick={() => handleChangeItem('1')}>Commandes passées</MenuItem>
                </Menu>
                <br/>
                <UpperBarContainer>
                <SearchInput type="text" placeholder="Rechercher..." />
                    {ordersToDisplay ? <Counter>{ordersToDisplay.length} commandes à venir</Counter> : null}
                </UpperBarContainer>
                <br/>
                {ordersToDisplay ? 
                <DataGrid columns={columns} rows={mapRows(ordersToDisplay)} /> : <p>Pas de commandes</p>}
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
    background-color: #D9D9D9;
    width: 100%;
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
`

const MenuItem = styled.div<{$isClickedDiv: boolean}>`
    display: flex;
    justify-content: center;
    border-bottom: ${props => (props.$isClickedDiv ? '3px solid #000000' : '1px solid #A1A1A1')};
    width: 50%;
    cursor: pointer;
    font-weight: ${props => (props.$isClickedDiv ? '400' : '200')};
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
