import { useState } from 'react'
import styled, { css } from 'styled-components'
import KayakSVG from './SVGComponent/KayakSVG'
import SkiSVG from './SVGComponent/SkiSVG'
import SnowSVG from './SVGComponent/SnowSVG'
import SurfSVG from './SVGComponent/SurfSVG'
import TennisSVG from './SVGComponent/TennisSVG'
import TrekSvg from './SVGComponent/TrekSVG'
import VeloSVG from './SVGComponent/VeloSVG'
import FilterSVG from './SVGComponent/FilterSVG'

export default function FilterBar() {
  const [isSectionSelected, setSectionSelected] = useState('')

  const handleSelectedSection = (sectionName: string) => {
    setSectionSelected(sectionName)
  }

  return (
    <Container>
      <RowFilter>
        <ContainerLogo onClick={() => handleSelectedSection('Trekking')}>
          <TrekSvg color={isSectionSelected === 'Trekking' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Trekking'}>Trekking</Text>
          {isSectionSelected === 'Trekking' && <SelectedLine />}
        </ContainerLogo>

        <ContainerLogo onClick={() => handleSelectedSection('Surf')}>
          <SurfSVG color={isSectionSelected === 'Surf' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Surf'}>Surf</Text>
          {isSectionSelected === 'Surf' && <SelectedLine />}
        </ContainerLogo>

        <ContainerLogo onClick={() => handleSelectedSection('Snow')}>
          <SnowSVG color={isSectionSelected === 'Snow' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Snow'}>Snow</Text>
          {isSectionSelected === 'Snow' && <SelectedLine />}
        </ContainerLogo>

        <ContainerLogo onClick={() => handleSelectedSection('Kayak')}>
          <KayakSVG color={isSectionSelected === 'Kayak' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Kayak'}>Kayak</Text>
          {isSectionSelected === 'Kayak' && <SelectedLine />}
        </ContainerLogo>

        <ContainerLogo onClick={() => handleSelectedSection('Tennis')}>
          <TennisSVG color={isSectionSelected === 'Tennis' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Tennis'}>Tennis</Text>
          {isSectionSelected === 'Tennis' && <SelectedLine />}
        </ContainerLogo>

        <ContainerLogo onClick={() => handleSelectedSection('Velo')}>
          <VeloSVG color={isSectionSelected === 'Velo' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Velo'}>Velo</Text>
          {isSectionSelected === 'Velo' && <SelectedLine />}
        </ContainerLogo>

        <ContainerLogo onClick={() => handleSelectedSection('Ski')}>
          <SkiSVG color={isSectionSelected === 'Ski' ? '#4ECB71' : undefined} />
          <Text $isSelected={isSectionSelected === 'Ski'}>Ski</Text>
          {isSectionSelected === 'Ski' && <SelectedLine />}
        </ContainerLogo>

        <FilterBtn>
          <FilterSVG />
          <TextFilter>Filtres</TextFilter>
        </FilterBtn>
      </RowFilter>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
`

const RowFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`

const Text = styled.span<{ $isSelected?: boolean }>`
  font-size: 17px;
  color: #000000;

  ${(props) =>
    props.$isSelected &&
    css`
      color: #4ecb71;
    `}
`

const ContainerLogo = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none;
`

const SelectedLine = styled.div`
  width: 97px;
  height: 2px;
  background-color: #4ecb71;
  margin-top: 10px;
`

const FilterBtn = styled.button`
  margin-left: 30px;
  border: 2px solid #d9d9d9;
  padding: 12px 10px;
  background-color: transparent;
  border-radius: 10px;
`

const TextFilter = styled.span`
  color: black
  font-size: 16px;
  font-weight: bold;
  margin-left: 12px;
`
