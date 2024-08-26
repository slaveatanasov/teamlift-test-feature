/* eslint-disable react/prop-types */
import styled from 'styled-components';

const TextH1 = styled.h1`
  margin: 0;
  /* background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%); */
  /* background: linear-gradient(180deg, #000000 0%, rgb(217 210 210 / 70%) 100%); */
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: block;
`;

const BigText = styled.h1`
  margin: 0;
  /* background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%); */
  /* background: linear-gradient(180deg, #000000 0%, rgb(217 210 210 / 70%) 100%); */
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: block;
  font-size: 40px;
`;

const TextH4 = styled.h4`
  margin: 0;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: block;
`;

const TextSpan = styled.span`
  margin: 0;
  position: relative;
  padding: 0.25rem 1.5rem;
  border-radius: 16px;
  font-size: 14px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%);
  background-blend-mode: normal, screen;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &:after {
    background: linear-gradient(
      90.01deg,
      rgba(229, 156, 255, 0.24) 0.01%,
      rgba(186, 156, 255, 0.24) 50.01%,
      rgba(156, 178, 255, 0.24) 100%
    );
    border-radius: inherit;
    content: '';
    inset: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    mask-composite: exclude;
    padding: 1px;
    /* pointer-events: none; */
    position: absolute;
  }
`;

export function TextWithBackground({ children }) {
  return <TextH1>{children}</TextH1>;
}

export function TextWithBackground2({ children }) {
  return <BigText>{children}</BigText>;
}

export function TextWithBackgroundH4({ children }) {
  return <TextH4>{children}</TextH4>;
}

export function TextWithColoredBorder({ children }) {
  return <TextSpan>{children}</TextSpan>;
}

export default TextWithBackground;
