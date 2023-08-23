import Categories from './components/Categories/Categories'
import { sports } from './fakeData/data'
import styled from 'styled-components'
import FilterBar from './components/FilterBar/FilterBar'

export default function Home() {
  return (
    <Container>
      <CardRowWrapper>
        <FilterBar />
        <CardRow>
          {sports.map((el, i) => (
            <Categories key={i} title={el.title} image={el.image} price={el.price} product={i} />
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
