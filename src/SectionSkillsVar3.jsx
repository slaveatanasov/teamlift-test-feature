// @ts-nocheck
import styled from 'styled-components';
import {
  TextWithBackgroundH4,
  TextWithColoredBorder,
} from './TextWithBackground';
import { useState, useRef } from 'react';

import { motion } from 'framer-motion';
import { useDimensions } from './useDimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 40px 40px)',
    transition: {
      // delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Section = styled.section`
  height: 96%;
`;

const ContentBox = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(239, 237, 253, 0.7);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ClickableSkill = styled.div`
  cursor: pointer;
  z-index: 2;
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  /* gap: 2rem; */
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
  border-radius: 1.5rem;

  background-color: rgb(9 9 9 / 65%);
  background-color: rgb(9 9 9 / 0%);

  /* box-shadow: rgb(99 99 99 / 20%) 0px 0px 11px 0px; */
  /* box-shadow: rgb(80 92 95 / 10%) 0px 0px 10px 0px; */

  /* backdrop-filter: blur(30px); */
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    content: '';
    /* border: 1.5px solid rgba(255, 255, 255, 0.12); */
    border-radius: inherit;
    /* mask-image: linear-gradient(135deg, #fff 0%, transparent 50%); */
    mask-image: linear-gradient(235deg, #fff 0%, transparent 50%);
  }
`;

const GridItem = styled.div`
  z-index: 1;

  background-color: rgb(0 0 0 / 0%);
  /* border-radius: 1.5rem; */

  /* backdrop-filter: blur(30px); */
  position: relative;

  padding: 1rem;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    content: '';
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: inherit;
    /* mask-image: linear-gradient(135deg, #fff 0%, transparent 50%); */
    mask-image: linear-gradient(180deg, #fff 0%, transparent 50%);

    opacity: 0;

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
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgb(212 195 248 / 5%) 100%
      );
      content: '';
      height: 100%;
      left: 0;
      opacity: 1;
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
  }
`;

const DetailsButton = styled.div`
  cursor: pointer;
  z-index: 2;

  padding: 0 1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  transition: color 0.2s;

  &:hover {
    /* background-color: #2e2e4a66; */
    color: rgb(239 237 253 / 85%);
    border-radius: 1rem;
  }
`;

const OverlayContent = styled.div`
  padding: 5rem 3rem 3rem;
  /* background: linear-gradient(180deg, rgb(0 0 0) 80%, rgb(0 0 0 / 0%) 100%); */
  /* background: linear-gradient(
    180deg,
    rgb(0 0 0 / 8%) 80%,
    rgb(0 0 0 / 0%) 100%
  ); */

  background: linear-gradient(90deg, rgb(0 0 0) 80%, rgb(0 0 0 / 0%) 100%);
`;

const OverlayCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #ffffffb8;
  transition: color 0.2s;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 2rem;

  &:hover {
    color: #fff;
  }
`;

function SectionSkillsVar3() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <GridItemR>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar}>
          <OverlayContent>
            <div>
              {' '}
              1. Web design involves creating visually appealing and
              user-friendly layouts for websites. Designers focus on aesthetics,
              typography, color schemes, and overall user experience. - They use
              tools like Sketch, Figma, or Adobe XD to create wireframes and
              prototypes.
            </div>
            <p>
              2. ChatGPT (Chat Generative Pre-trained Transformer) is a natural
              language processing chatbot powered by the GPT family of large
              language models. It helps users get answers, find inspiration, and
              be more productive by assisting with writing, learning,
              brainstorming, and more.
            </p>
          </OverlayContent>
          <OverlayCloseButton onClick={() => toggleOpen(false)}>
            Close
          </OverlayCloseButton>
        </motion.div>
      </motion.div>
      <Section>
        <Grid>
          <GridItem
            onMouseEnter={() => {
              setShowDetails(true);
            }}
            onMouseLeave={() => {
              setShowDetails(false);
            }}
          >
            <TextWithBackgroundH4>Essential Skills</TextWithBackgroundH4>
            <ContentBox>
              <ClickableSkill>
                <TextWithColoredBorder>Web Design</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>Frontend Dev</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>Backend Dev</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>Webflow</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>+ 2 more</TextWithColoredBorder>
              </ClickableSkill>
              {showDetails && (
                <DetailsButton onClick={() => toggleOpen(true)}>
                  See Details
                </DetailsButton>
              )}
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
          <GridItem
            onMouseEnter={() => {
              setShowDetails2(true);
            }}
            onMouseLeave={() => {
              setShowDetails2(false);
            }}
          >
            <TextWithBackgroundH4>Augmentable Skills</TextWithBackgroundH4>
            <ContentBox>
              <ClickableSkill>
                <TextWithColoredBorder>Web Design</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>Web Dev</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>Database</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>+ 1 more</TextWithColoredBorder>
              </ClickableSkill>
              {showDetails2 && (
                <DetailsButton onClick={() => toggleOpen(true)}>
                  See Details
                </DetailsButton>
              )}
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
          <GridItem
            onMouseEnter={() => {
              setShowDetails3(true);
            }}
            onMouseLeave={() => {
              setShowDetails3(false);
            }}
          >
            <TextWithBackgroundH4>High Impact Tools</TextWithBackgroundH4>
            <ContentBox>
              <ClickableSkill>
                <TextWithColoredBorder>Wordpress</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>ChatGPT</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>Claude</TextWithColoredBorder>
              </ClickableSkill>
              <ClickableSkill>
                <TextWithColoredBorder>+ 3 more</TextWithColoredBorder>
              </ClickableSkill>
              {showDetails3 && (
                <DetailsButton onClick={() => toggleOpen(true)}>
                  See Details
                </DetailsButton>
              )}
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
          <GridItem>
            <TextWithBackgroundH4>Our advice</TextWithBackgroundH4>
            <ContentBox>
              Stay up-to-date with industry trends and emerging technologies by
              incorporating AI tools.
            </ContentBox>
            <GridItemLine></GridItemLine>
          </GridItem>
        </Grid>
      </Section>
    </GridItemR>
  );
}

export default SectionSkillsVar3;
