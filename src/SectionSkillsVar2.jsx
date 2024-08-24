import styled from 'styled-components';
import {
  TextWithBackgroundH4,
  TextWithColoredBorder,
} from './TextWithBackground';
const Section = styled.section`
  height: 100%;
`;

const ContentBox = styled.div`
  margin-top: 0.5rem;
  font-size: 14px;
  color: rgba(239, 237, 253, 0.7);
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 1rem;
  grid-template-areas:
    '.'
    '.'
    '.'
    '.';
`;

const GridItemR = styled.div`
  /* padding: 2rem; */
  grid-area: Details;
  background-color: #161b22;
  border-radius: 1.5rem;

  z-index: 1;

  background-color: rgb(0 0 0 / 0%);

  /* box-shadow: rgb(99 99 99 / 20%) 0px 0px 11px 0px; */

  /* backdrop-filter: blur(30px); */
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    pointer-events: none;
    content: '';
    /* border: 1.5px solid rgba(255, 255, 255, 0.12); */
    border-radius: inherit;
    /* mask-image: linear-gradient(135deg, #fff 0%, transparent 50%); */
  }
`;

const GridItem = styled.div`
  z-index: 1;

  background-color: rgb(0 0 0 / 0%);
  border-radius: 1.5rem;

  /* backdrop-filter: blur(30px); */
  position: relative;

  padding: 1rem 1.5rem 1rem 1.5rem;
  overflow: hidden;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    pointer-events: none;
    content: '';
    border: 2px solid rgba(255, 255, 255, 0.12);
    border-radius: inherit;
    /* mask-image: linear-gradient(135deg, #fff 0%, transparent 50%); */
    mask-image: linear-gradient(180deg, #fff 0%, transparent 50%);

    opacity: 1;

    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.12) 0,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 1px; */
  }

  &:after {
    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.06) 100%
    ); */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgb(42 42 42 / 5%) 100%
    );
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 0.45s cubic-bezier(0.6, 0.6, 0, 1) opacity;
    width: 100%;
  }

  &:hover {
    &:after {
      /* background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.06) 100%
      ); */
      /* background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgb(42 42 42 / 5%) 100%
      ); */
      /* background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgb(212 195 248 / 5%) 100%
      ); */
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgb(255 255 255 / 2%) 100%
      );
      content: '';
      height: 100%;
      left: 0;
      opacity: 1;
      pointer-events: none;
      position: absolute;
      top: 0;
      transition: 0.5s cubic-bezier(0.6, 0.6, 0, 1) opacity;
      width: 100%;
    }
  }
`;

const GridItemLine = styled.div`
  &:before {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) -0.89%,
      rgba(255, 255, 255, 0.08) 24.33%,
      rgba(255, 255, 255, 0.08) 49.55%,
      rgba(255, 255, 255, 0.08) 74.78%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    bottom: 0;
    /* width: 948px; */
    width: 100%;

    opacity: 0;
  }
`;

function SectionSkillsVar2() {
  return (
    <GridItemR>
      <Section>
        <Grid>
          <GridItem>
            <TextWithBackgroundH4>Essential Skills</TextWithBackgroundH4>
            <ContentBox>
              Quantum Finance Group is a leading financial services firm.
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
          <GridItem>
            <TextWithBackgroundH4>Augmentable Skills</TextWithBackgroundH4>
            <ContentBox>
              Quantum Finance Group is a leading financial services firm.
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
          <GridItem>
            <TextWithBackgroundH4>High Impact Tools</TextWithBackgroundH4>
            <ContentBox>
              Quantum Finance Group is a leading financial services firm.
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
          <GridItem>
            <TextWithBackgroundH4>Summary</TextWithBackgroundH4>
            <ContentBox>
              Quantum Finance Group is a leading financial services firm.
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
        </Grid>
      </Section>
    </GridItemR>
  );
}

export default SectionSkillsVar2;
