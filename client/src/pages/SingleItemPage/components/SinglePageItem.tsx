/* eslint-disable max-len */
import { useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useItemQuery } from '../../../gql/generated/schema'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import Img1 from '../../../assets/img/little/image-1.png'
import Img2 from '../../../assets/img/little/image-2.png'
import Img4 from '../../../assets/img/little/image-4.png'
import Img5 from '../../../assets/img/little/image-5.png'

import Casquette from '../../../assets/img/casquette-trek.png'

import Arrow from './ArrowSVG'
import { useState } from 'react'
export interface Item {
  id: string
  name: string
  price: number
  description: string
}

export function SinglePageItem() {
  const { id } = useParams<{ id: string }>()
  const [date, setDate] = useState(new Date())

  if (!id) {
    throw new Error()
  }

  const { loading, data: currentItem } = useItemQuery({
    variables: {
      getOneItemId: id,
    },
  })

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  return (
    // <div className="mainContainer">
    //   <div className="img-container">pas de photo</div>
    //   <div className="presentation">
    //     <div className="header">
    //       <h2>{currentItem?.getOneItem.name}</h2>
    //       <p>{currentItem?.getOneItem.price} € par jour</p>
    //     </div>
    //     <div className="infos">
    //       <p>{currentItem?.getOneItem.description}</p>
    //       <div className="cart">
    //         <button type='button' className="button" onClick={() => console.log('ajouté au panier')}>
    //           Ajouter au panier
    //           <i className="bi cart bi-cart2"></i>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Container>
      <PicContainer>
        <LittlePictureContainer>
          <Img src={Img1} />
          <Img src={Img2} />
          <Img src={Img4} />
          <Img src={Img5} />
        </LittlePictureContainer>

        <BigPictureContainer>
          <Slide prevArrow={<Arrow style={{ transform: 'rotate(180deg)' }} />} nextArrow={<Arrow />} infinite={false}>
            <BigPicture src={Casquette} />
            <BigPicture src={Casquette} />
            <BigPicture src={Casquette} />
          </Slide>
        </BigPictureContainer>
      </PicContainer>

      <InfoContainer>
        <TitleEco>Matières éco-responsable</TitleEco>
        <ItemTitle>CASQUETTE TREKKING DESERT - FORCLAZ</ItemTitle>
        <Price>15 €</Price>

        <ColorText>Couleur</ColorText>
        <ColorChoice />

        <StyledCalendarContainer>
          <StyledCalendar onChange={() => setDate} value={date} />
        </StyledCalendarContainer>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 50px;
`

const PicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LittlePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Img = styled.img<{ $isSelected?: boolean }>`
  max-width: 100%;
  max-height: 100%;
  border: 2px solid #858585;
  border-radius: 10px;

  ${(props) =>
    props.$isSelected &&
    css`
      color: #4ecb71;
    `}
`

const InfoContainer = styled.div``

const BigPictureContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 100px;
`

const BigPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-left: 30px;
`
const TitleEco = styled.span`
  font-size: 16px;
  color: #408441;
`

const ItemTitle = styled.h2`
  font-size: 30px;
  color: #000000;
  font-weight: 600;
`
const Price = styled.h2`
  font-size: 36px;
  color: #000000;
  font-weight: 600;
`
const ColorText = styled.span`
  font-size: 16px;
  color: #000000;
`
const ColorChoice = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c8af98;
  border: 1px solid #969696;
  border-radius: 5px;
`

const StyledCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 30px;
`

const StyledCalendar = styled(Calendar)`
  max-width: 320px;
  width: 100%;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
  border: none;

  .react-calendar {
    border: none;
    color: #ffffff;
  }

  .react-calendar__navigation {
    margin-bottom: 10px;
    color: #ffffff;
  }

  .react-calendar__navigation__label {
    color: #ffffff;
  }

  .react-calendar__navigation__arrow {
    color: #ffffff;
  }

  .react-calendar__month-view__weekdays {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #ffffff;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 9px;
    text-align: center;
    color: #fff;
  }

  .react-calendar__month-view__days__day {
    color: #cccccc;
    font-size: 11px;
  }

  .react-calendar__month-view__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .react-calendar__tile:hover {
    background-color: #4ecb71;
    color: #ffffff;
    border-radius: 50%;
  }

  .react-calendar__tile--active {
    background-color: #f0f0f0;
    color: #ffffff;
  }

  .react-calendar__tile--now {
    background-color: #4ecb71;
    color: #ffffff;
    border-radius: 50%;
  }

  .react-calendar__tile--active {
    background: #4ecb71;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: #4ecb71;
}
`
