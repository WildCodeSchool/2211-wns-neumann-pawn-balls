import styled from 'styled-components'

export default function Menu({setMenuOption}) {
    return (
        <Container>
            <MenuOption>
                <Label>
                    Commandes
                </Label>
            </MenuOption>
            <MenuOption>
                <Label>
                    Tous nos articles
                </Label>
            </MenuOption>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
`

const MenuOption = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: solid lightgrey;
    padding: 10px;
    border-bottom: 1px solid #A1A1A1;
    cursor: pointer
`

const Label = styled.h3`
    color: #4ECB71;
    font-size: 12px;
    font-weight: 600
`