import styled from 'styled-components'
import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'
import { useState } from 'react'
import { useGetOrdersQuery } from '../../../gql/generated/schema'
import { getDateFromTimeStamps } from '../../../utils/date'

export default function OrderList() {
    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'start', name: 'Date de début' },
        { key: 'end', name: 'Date de fin' },
        { key: 'bindingEmail', name: 'Email' },
        {key: 'address', name: 'Adresse'},
        { key: 'status', name: 'Statut' },
      ]

      /*const rows = [
        {id: 1, start: '08/09/23', end: '08/10/23', bindingEmail: 'test@email.net', status: 'En cours'},
      ]*/

    const [rows, setRows] = useState([])
    const {data: orderList, error} = useGetOrdersQuery({errorPolicy: 'ignore',})
      console.log(orderList)
    function getRows(rows) {
        let res = []
        for (let i=0; i < rows.length; i++) {
            console.log(rows[i])
            let row = {
                id: rows[i].id,
                start: getDateFromTimeStamps(rows[i].start),
                end: getDateFromTimeStamps(rows[i].end),
                bindingEmail: rows[i].bindingEmail,
                address: rows[i].address,
                status: 'En cours'
            }
            res.push(row)
        }            
        return res
    }
      
      /*useEffect(() => {
        const rowsFromData = getRows(orderList?.getOrders)
        setRows(rowsFromData)
      }, [orderList])*/
    
      return (
        <Wrapper>
            <Title>Commandes</Title>
            <Container>
                <Menu>
                    <MenuItem>Commandes à venir</MenuItem>
                    <MenuItem>Commandes passées</MenuItem>
                </Menu>
                <br/>
                <UpperBarContainer>
                <SearchInput type="text" placeholder="Rechercher..." />
                    {orderList ? <Counter>{orderList?.getOrders.length} commandes à venir</Counter> : null}
                </UpperBarContainer>
                <br/>
                {orderList ? <DataGrid columns={columns} rows={getRows(orderList?.getOrders)} /> : <p>no order</p>}
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

const MenuItem = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #A1A1A1;
    width: 50%;
    cursor: pointer
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
