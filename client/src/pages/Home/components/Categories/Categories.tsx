import 'animate.css'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Item } from '../../../../gql/generated/schema'
//TODO: THIS IS AN IMAGE BY DEFAULT, NEED TO CHANGE THAT LATER
import image from '../../../../assets/img/pantalon.png'

export type ItemCardProps = { item: Item }

export default function ProductCard({ item }: ItemCardProps) {
  const { id, name, price } = item

  const navigate = useNavigate()

  const handleClick = (productId: string) => {
    navigate(`/products/${productId}`)
  }
  return (
    <Container>
      <Card onClick={() => handleClick(id)}>
        <ImgContainer>
          <Img src={image.toString()} />
        </ImgContainer>
        <ContainerText>
          <Title>{name.toUpperCase()}</Title>
          <Price>{price + ' €'}</Price>
        </ContainerText>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.div`
  width: 308px;
  height: 308px;
  border: 2px solid #4ecb71;
  border-radius: 15px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.h3`
  font-size: 15px;
  word-wrap: break-word;
`

const Price = styled.span`
  font-size: 15px;
  white-space: nowrap;
`

const ContainerText = styled.div`
  margin: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
