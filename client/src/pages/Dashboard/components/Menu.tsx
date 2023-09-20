import styled from 'styled-components'

interface Props {
    menuOption: string
    setMenuOption: React.Dispatch<React.SetStateAction<string>>
  }

export default function Menu({menuOption, setMenuOption}: Props) {
    function handleChangeMenuOption(newMenuValue: string) {
        setMenuOption(newMenuValue)
    }  
    return (
        <Container>
            <MenuOption onClick={() => handleChangeMenuOption('orders')}>
                <Label $isClickedDiv={menuOption === 'orders' ? true : false}>
                    Commandes
                </Label>
            </MenuOption>
            <MenuOption onClick={() => handleChangeMenuOption('products')}>
                <Label $isClickedDiv={menuOption === 'products' ? true : false}>
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

const Label = styled.h3<{$isClickedDiv: boolean}>`
    color: ${(props) => (props.$isClickedDiv ? '#4ECB71' : '#000000')};
    font-size: 12px;
    font-weight: 600
`