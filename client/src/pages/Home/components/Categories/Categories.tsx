import 'animate.css'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface Props {
  title: string
  image: any
  product: number
  price: number
}

export default function Categories({ title, image, price, product }: Props) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/products')
  }
  return (
    <Container>
      <Card onClick={handleClick}>
        <ImgContainer>
          <Img src={image} />
        </ImgContainer>
        <ContainerText>
          <Title>{title.toUpperCase()}</Title>
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
