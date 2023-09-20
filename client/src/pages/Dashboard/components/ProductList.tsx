import styled from 'styled-components'

export default function ProductList() {
    return (
        <Wrapper>
            <TitleBox>
                <Title>Nos articles</Title>
                <AddArticleButton>+ Ajouter un article</AddArticleButton>
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
    width: 250px;
    padding: 10px;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
`