import styled from 'styled-components';
import bgCardImage1 from './assets/productivity-bg-1.webp';
import bgCardImage2 from './assets/pricing-gradient.jpg';
import SectionJobPosting from './SectionJobPosting';
import { CustomScroll } from 'react-custom-scroll';
import SectionSkills from './SectionSkills';
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  z-index: 1;
  width: 1060px;
  height: 580px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;

  padding: 2.5rem;

  backdrop-filter: blur(30px);
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
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: inherit;
    mask-image: linear-gradient(135deg, #fff 0%, transparent 50%);
  }
`;

const BackgroundAttachedImage = styled.img`
  width: 706px;
  aspect-ratio: auto 706 / 338;
  height: 338px;

  object-fit: cover;
  display: inline-block;

  position: absolute;
  bottom: 0;
  z-index: 0;
  max-width: none;
  left: 0;
  transform: translate(-10px, 120px);
`;

const BackgroundAttachedImage2 = styled.img`
  width: 706px;
  aspect-ratio: auto 706 / 338;
  height: 338px;

  object-fit: cover;
  display: inline-block;

  position: absolute;
  top: 0;
  z-index: 0;
  max-width: none;
  right: 0;
  transform: translate(120px, 148px) rotate(166deg);
`;

const TextParagraph = styled.p`
  margin: 0;
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  grid-template-rows: 1fr;
  /* gap: 2rem 2rem; */
  grid-template-areas: 'JobListing MidSection Details';
`;

const GridItemL = styled.div`
  grid-area: JobListing;
  /* background-color: #161b22; */
  border-radius: 1.5rem;
  height: 580px;
  padding-right: 3rem;
`;

const GridItemM = styled.div`
  padding: 2rem;
  grid-area: MidSection;
`;

const GridItemR = styled.div`
  /* padding: 2rem; */
  grid-area: Details;
  background-color: #161b22;
  border-radius: 1.5rem;

  z-index: 1;

  background-color: rgb(0 0 0 / 0%);
  border-radius: 1.5rem;

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
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: inherit;
    /* mask-image: linear-gradient(135deg, #fff 0%, transparent 50%); */
  }
`;

function MainContainer() {
  return (
    <Container>
      <ContentBox>
        <Grid>
          <CustomScroll>
            <GridItemL>
              <SectionJobPosting />
            </GridItemL>
          </CustomScroll>
          <GridItemM>Middle</GridItemM>
          <GridItemR>
            <SectionSkills />
          </GridItemR>
        </Grid>
      </ContentBox>
      <BackgroundAttachedImage src={bgCardImage1} />
      <BackgroundAttachedImage2 src={bgCardImage1} />
    </Container>
  );
}

export default MainContainer;
