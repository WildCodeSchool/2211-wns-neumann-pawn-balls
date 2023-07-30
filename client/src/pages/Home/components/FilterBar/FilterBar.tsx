import styled from 'styled-components';
import KayakSVG from './SVGComponent/KayakSVG';
import SkiSVG from './SVGComponent/SkiSVG';
import SnowSVG from './SVGComponent/SnowSVG';
import SurfSVG from './SVGComponent/SurfSVG';
import TennisSVG from './SVGComponent/TennisSVG';
import TrekSvg from './SVGComponent/TrekSVG';
import VeloSVG from './SVGComponent/VeloSVG';

export default function FilterBar() {
  return (
    <Container>
      <RowFilter>
        <TrekSvg />
        <SurfSVG />
        <SnowSVG />
        <KayakSVG />
        <TennisSVG />
        <VeloSVG />
        <SkiSVG />
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