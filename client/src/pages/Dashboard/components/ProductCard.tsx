import styled from 'styled-components'
import { Item } from '../../../gql/generated/schema'
import img from '../../../assets/img/baton-randonne.png'

type Props = {
    product: Item
}

export default function ProductCard({product}: Props) {
    return (
        <MainContainer>
            <ImgContainer>
                <Img src={img} />
            </ImgContainer>
            <Title>{product?.name.toUpperCase()}</Title>
            <Button>Voir la fiche</Button>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 220px;
    border: solid 2px #4ECB71;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
`

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    font-size: 15px;
    word-wrap: break-word;
    width: 80%;
    height: auto
` 

const Button = styled.button`
    border-radius: 25px;
    background-color: #4ECB71;
    color: white;
    align-self: center;
    border: none;
    width: 120px;
    height: 50px;
`

const Title = styled.h4`
    font-weight: bold;
`
