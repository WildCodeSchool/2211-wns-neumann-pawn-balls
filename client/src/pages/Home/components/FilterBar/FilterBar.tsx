import { useState } from 'react';
import styled, { css } from 'styled-components';
import KayakSVG from './SVGComponent/KayakSVG';
import SkiSVG from './SVGComponent/SkiSVG';
import SnowSVG from './SVGComponent/SnowSVG';
import SurfSVG from './SVGComponent/SurfSVG';
import TennisSVG from './SVGComponent/TennisSVG';
import TrekSvg from './SVGComponent/TrekSVG';
import VeloSVG from './SVGComponent/VeloSVG';

export default function FilterBar() {
  // refacto sur la selection des couleurs si selectionnée 
  const [isSectionSelected, setSectionSelected] = useState(false)

  return (
    <Container>
      <RowFilter>
        <ContainerLogo>
          <TrekSvg color='#4ECB71' />
          <Text $isSelected>Trekking</Text>
          <SelectedLine />
        </ContainerLogo>

        <ContainerLogo>
          <SurfSVG />
          <Text>Surf</Text>
        </ContainerLogo>

        <ContainerLogo>
          <SnowSVG />
          <Text>Snow</Text>
          
        </ContainerLogo>

        <ContainerLogo>
          <KayakSVG />
          <Text>Kayak</Text>
          
        </ContainerLogo>

        <ContainerLogo>
          <TennisSVG />
          <Text>Tennis</Text>

        </ContainerLogo>

        <ContainerLogo>
          <VeloSVG />
          <Text>Velo</Text>
          
        </ContainerLogo>
        <ContainerLogo>
          <SkiSVG />
          <Text>Ski</Text>
          
        </ContainerLogo>

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
        color: #4ECB71;
  `}
`

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

const SelectedLine = styled.div`
  width: 97px;
  height: 2px;
  background-color: #4ECB71;
  margin-top: 10px;
`