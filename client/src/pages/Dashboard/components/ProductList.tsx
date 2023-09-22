import {useState} from 'react'
import ModalProduct from './ModalProduct'
import styled from 'styled-components'

export default function ProductList() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    return (
        <Wrapper>
            <TitleBox>
                <Title>Nos articles</Title>
                <AddArticleButton onClick={() => handleShow()}>+    Ajouter un article</AddArticleButton>
                {show && <ModalProduct show={show} handleClose={handleClose} />}
            </TitleBox>
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
const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`
const AddArticleButton = styled.button`
    width: 200px;
    padding: 15px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    background-color: transparent;
`