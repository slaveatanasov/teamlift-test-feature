/* eslint-disable react/prop-types */
// @ts-nocheck
import styled from 'styled-components';
import AnimatedCircularProgressBar from './NumberLoader';
import { useEffect, useState } from 'react';

import RobotImg from './assets/robot-down-arrow-graph.png';
import TeamoImg from './assets/66b33f6a64bf87e239c61eba_heroimageteamo.png';
import TextWithBackground from './TextWithBackground';
const Section = styled.section``;
const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgTeamo = styled.img`
  /* filter: hue-rotate(128deg); */
`;

const ImgIllGreen = styled.img`
  filter: hue-rotate(128deg);
`;
const ImgIllRed = styled.img``;
const ImgIllYellow = styled.img`
  filter: hue-rotate(61deg);
`;

const GridItemM = styled.div`
  padding: 2rem;
  grid-area: MidSection;
  padding-right: 3.5rem;
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;
  grid-template-areas:
    '.'
    '.'
    '.';
`;

function SectionMiddle({ scoreColor }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (scoreColor === 'green') {
      setTimeout(() => {
        setValue(18);
      }, 1000);
    }

    if (scoreColor === 'yellow') {
      setTimeout(() => {
        setValue(37);
      }, 1000);
    }

    if (scoreColor === 'red') {
      setTimeout(() => {
        setValue(69);
      }, 1000);
    }

    // const handleIncrement = (prev) => {
    //   if (prev === 100) {
    //     return 0;
    //   }
    //   return prev + 10;
    // };
    // setValue(handleIncrement);
    // const interval = setInterval(() => setValue(handleIncrement), 2000);
    // return () => clearInterval(interval);
  }, [scoreColor]);

  const gaugePrimaryColor =
    scoreColor === 'green'
      ? '#40e33a9f'
      : scoreColor === 'yellow'
      ? '#e3cf3a9f'
      : '#e33a3aa0';

  return (
    <GridItemM>
      <Section>
        <Grid>
          <Box>
            <ImgTeamo src={TeamoImg} width="100px" />
            {scoreColor === 'green' && (
              <ImgIllGreen src={RobotImg} width="100px" />
            )}
            {scoreColor === 'yellow' && (
              <ImgIllYellow src={RobotImg} width="100px" />
            )}
            {scoreColor === 'red' && <ImgIllRed src={RobotImg} width="100px" />}
          </Box>
          <Box>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </Box>
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor={gaugePrimaryColor}
            gaugeSecondaryColor="rgba(255, 255, 255, 0.04)"
            className="test"
          />
        </Grid>
      </Section>
    </GridItemM>
  );
}

export default SectionMiddle;
