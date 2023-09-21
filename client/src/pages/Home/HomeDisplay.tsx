import { useEffect } from 'react'
import styled from 'styled-components'
import { Item } from '../../gql/generated/schema'
import Categories from './components/Categories/Categories'
import FilterBar from './components/FilterBar/FilterBar'

export function HomeDisplay({ items }: { items: Item[] }) {
  //TODO: add filters behaviour in next PR
  // const filterList = useRef(new FilterList(items)).current

  useEffect(() => {
    //update states that depends of items in this section.
  }, [items])

  return (
    <Container>
      <CardRowWrapper>
        <FilterBar />
        <CardRow>
          {items.map((item, i) => (
            <Categories key={i} item={item} />
          ))}
        </CardRow>
      </CardRowWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const CardRow = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
