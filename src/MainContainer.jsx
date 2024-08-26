// @ts-nocheck
import styled from 'styled-components';
import bgCardImage1 from './assets/productivity-bg-1.webp';
import bgCardImage2 from './assets/pricing-gradient.jpg';
import SectionJobPosting from './SectionJobPosting';
import { CustomScroll } from 'react-custom-scroll';
import SectionSkills from './SectionSkills';
import SectionSkillsVar2 from './SectionSkillsVar2';
import SectionSkillsVar3 from './SectionSkillsVar3';
import SectionMiddle from './SectionMiddle';
import { TextWithBackground2 } from './TextWithBackground';

import { useState } from 'react';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subcontainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
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

const BackgroundAttachedImageGreen = styled.img`
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

const BackgroundAttachedImageRed = styled.img`
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

  filter: hue-rotate(176deg);
`;

const BackgroundAttachedImageYellow = styled.img`
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

  filter: hue-rotate(627deg);
`;

const BackgroundAttachedImage2Green = styled.img`
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

const BackgroundAttachedImage2Yellow = styled.img`
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
  filter: hue-rotate(627deg);
`;

const BackgroundAttachedImage2Red = styled.img`
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
  filter: hue-rotate(176deg);
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.25fr;
  grid-template-rows: 1fr;
  /* gap: 2rem 2rem; */
  grid-template-areas: 'JobListing MidSection Details';
`;

const TitleAndOptions = styled.div`
  justify-self: flex-start;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #ffffffb8;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

function MainContainer() {
  const [scoreColor, setScoreColor] = useState('green');

  return (
    <Container>
      <Subcontainer>
        <TitleAndOptions>
          <TextWithBackground2>TEAMLIFT REPORT</TextWithBackground2>
          <Tabs>
            <Tab onClick={() => setScoreColor('green')}>Green</Tab>
            <Tab onClick={() => setScoreColor('yellow')}>Yellow</Tab>
            <Tab onClick={() => setScoreColor('red')}>Red</Tab>
          </Tabs>
        </TitleAndOptions>
        <ContentBox>
          <Grid>
            <CustomScroll>
              <SectionJobPosting scoreColor={scoreColor} />
            </CustomScroll>
            <SectionMiddle scoreColor={scoreColor} />
            {scoreColor === 'green' && (
              <SectionSkillsVar3 scoreColor={scoreColor} />
            )}
            {scoreColor === 'yellow' && (
              <SectionSkillsVar2 scoreColor={scoreColor} />
            )}
            {scoreColor === 'red' && <SectionSkills scoreColor={scoreColor} />}
          </Grid>
        </ContentBox>
        {scoreColor === 'green' && (
          <BackgroundAttachedImageGreen src={bgCardImage1} />
        )}
        {scoreColor === 'yellow' && (
          <BackgroundAttachedImageYellow src={bgCardImage1} />
        )}
        {scoreColor === 'red' && (
          <BackgroundAttachedImageRed src={bgCardImage1} />
        )}
        {scoreColor === 'green' && (
          <BackgroundAttachedImage2Green src={bgCardImage1} />
        )}
        {scoreColor === 'yellow' && (
          <BackgroundAttachedImage2Yellow src={bgCardImage1} />
        )}
        {scoreColor === 'red' && (
          <BackgroundAttachedImage2Red src={bgCardImage1} />
        )}
      </Subcontainer>
    </Container>
  );
}

export default MainContainer;
