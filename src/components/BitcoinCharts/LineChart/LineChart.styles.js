import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
   0% {
    transform:  rotate(0deg);
  }
 100% {
    transform:  rotate(360deg);
  }
  `;

export const Button = styled.button`
  background: ${props => (props.interval === props.value ? "#10e233" : "none")};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.color};
  font-size: 16px;
  padding: 5px 10px;
  :hover {
    cursor: pointer;
  }
  :focus {
    background-color: #10e233;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 8px;
  width: 95%;
  @media (max-width: 1200px) {
    left: 0;
    z-index: 2;
  }
`;

export const ChartWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 10px;
  box-shadow: 0 2px 14px -4px black;
  display: flex;
  flex-direction: column;
  height: 290px;
  padding: 15px;
  position: relative;
  width: 45%;
  z-index: 5;
  @media (max-width: 1200px) {
    box-shadow: none;
    display: block;
    width: 95%;
  }
  @media (max-width: 1200px) {
    background: none;
    display: block;
    width: 95%;
  }
`;

export const DescriptionContainer = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 3;
`;

export const H1 = styled.h1`
  font-size: 34px;
  font-weight: light;
  margin: 0;
`;
export const H2 = styled.h2`
  font-size: 22px;
  font-weight: lighter;
  margin: 0;
`;

export const IntervalContainer = styled.div`
  background: ${props => props.theme.third};
  border-radius: 5px;
  display: flex;
  gap: 5px;
  padding: 5px;
  position: absolute;
  right: 15px;
  top: 15;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LoadingSpinner = styled.div`
  animation: 0.9s linear infinite ${spinnerKeyframes};
  animation-play-state: inherit;
  border: solid 5px ${props => props.theme.third};
  border-bottom-color: white;
  border-radius: 50%;
  height: 45px;
  margin: auto;
  width: 45px;
`;
