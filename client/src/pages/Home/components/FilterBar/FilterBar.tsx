import { useState } from 'react'
import styled, { css } from 'styled-components'
import FilterSVG from './SVGComponent/FilterSVG'
import KayakSVG from './SVGComponent/KayakSVG'
import SkiSVG from './SVGComponent/SkiSVG'
import SnowSVG from './SVGComponent/SnowSVG'
import SurfSVG from './SVGComponent/SurfSVG'
import TennisSVG from './SVGComponent/TennisSVG'
import TrekSvg from './SVGComponent/TrekSVG'
import VeloSVG from './SVGComponent/VeloSVG'

type Filter = {
  name: string
  svgElement: (isSelected: boolean) => JSX.Element
}

enum SportsSuggestions {
  TREKKING = 'Trekking',
  SURF = 'Surf',
  SNOW = 'Snow',
  KAYAK = 'Kayak',
  TENNIS = 'Tennis',
  VELO = 'Velo',
  SKI = 'Ski',
}

const SELECTED_COLOR = '#4ECB71'

const mockFilters = [
  {
    name: 'Trekking',
    svgElement: (isSelected: boolean) => TrekSvg(isSelected ? { color: SELECTED_COLOR } : {}),
  },
  {
    name: 'Surf',
    svgElement: (isSelected: boolean) => SurfSVG(isSelected ? { color: SELECTED_COLOR } : {}),
  },
  {
    name: 'Snow',
    svgElement: (isSelected: boolean) => SnowSVG(isSelected ? { color: SELECTED_COLOR } : {}),
  },
  {
    name: 'Kayak',
    svgElement: (isSelected: boolean) => KayakSVG(isSelected ? { color: SELECTED_COLOR } : {}),
  },
  {
    name: 'Tennis',
    svgElement: (isSelected: boolean) => TennisSVG(isSelected ? { color: SELECTED_COLOR } : {}),
  },
  {
    name: 'Velo',
    svgElement: (isSelected: boolean) => VeloSVG(isSelected ? { color: SELECTED_COLOR } : {}),
  },
  {
    name: 'Ski',
    svgElement: (isSelected: boolean) => SkiSVG(isSelected ? { color: SELECTED_COLOR } : {}),
  },
]

export default function FilterBar() {
  const [isSectionSelected, setSectionSelected] = useState('')

  const handleSelectedSection = (sectionName: string) => {
    setSectionSelected(sectionName)
  }

  return (
    <Container>
      <RowFilter>
        {mockFilters.map((filter) => {
          const isSelected = isSectionSelected === filter.name
          return (
            <ContainerLogo key={filter.name} onClick={() => handleSelectedSection(filter.name)}>
              {filter.svgElement(isSelected)}
              <Text $isSelected={isSelected}>{filter.name}</Text>
              {isSelected && <SelectedLine />}
            </ContainerLogo>
          )
        })}
        <FilterBtn onClick={() => alert('RAJOUTER UNE MODAL !')}>
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
