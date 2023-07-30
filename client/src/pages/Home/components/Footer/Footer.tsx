import styled from 'styled-components'
import Logo from '../Nav/Logo'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'

export default function Footer() {
  return (
    <Container>
      <TextContainer>
        <LogoContainer>
          <LogoCenter>
            <Logo />
            <LogoTitle>PAWNBALLS</LogoTitle>
          </LogoCenter>
          <ContainerOpeninghours>
            <OpeningHours>Ouvert du Lundi au Vendredi</OpeningHours>
            <OpeningHours style={{ marginTop: -18 }}>09h-12h45 | 14h-18h</OpeningHours>
          </ContainerOpeninghours>
        </LogoContainer>

        <Block>
          <Title>À propos</Title>

          <Text>Contact</Text>
          <Text>Plan du site</Text>
          <Text>Qui sommes nous ? </Text>
        </Block>

        <Block>
          <Title>Conditions</Title>

          <Text>Mentions légales</Text>
          <Text>CGV</Text>
          <Text>Politique de confidentialité</Text>
          <Text>Gestion des cookies</Text>
        </Block>

        <Block>
          <Title>Suivez-nous</Title>

          <SubContainer>
            <LogoFacebook />
            <LogoInsta />
            <LogoYoutube />
          </SubContainer>
        </Block>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 270px;
  background-color: #F7F7F7;
  border-top: 1px solid #D6D6D6;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 30px;
`

const Block = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`

const Title = styled.h2`
  color: #000000;
  font-size: 18px;
`

const Text = styled.a`
  color: #414141;
  font-size: 14px;
  text-decoration: none;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoTitle = styled.h1`
  font-size: 18px;
`
const OpeningHours = styled.p`
  color: #414141;
  font-size: 14px;
`
const ContainerOpeninghours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const LogoFacebook = styled(FacebookCircle)`
  width: 28px;
  height: 28px;
`

const LogoInsta = styled(InstagramAlt)`
  width: 28px;
  height: 28px;
`

const LogoYoutube = styled(Youtube)`
  width: 28px;
  height: 28px;
`













{/* <footer className="bg-footer text-center text-lg-start fixed-bottom">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">À propos</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Plan du site
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Qui sommes nous
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Conditions générale de vente
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Conditions</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  CGV
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Gestion de cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 info col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <ul className="list-unstyled">
              <li>INFOS ET RESERVATIONS</li>
              <li>+33 1 43 25 63 97</li>
              <li>Lundi au vendredi : 09:00-12:45 | 14:00-18:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3">© 2023 Copyright : PAWNBALLS</div>
    </footer> */}