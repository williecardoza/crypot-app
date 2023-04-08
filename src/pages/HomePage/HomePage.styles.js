import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
   0% {
    transform:  rotate(0deg);
  }
 100% {
    transform:  rotate(360deg);
  }
  `;

export const BitcoinChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: ${props => (props.interval === props.value ? "#10e233" : "none")};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.color};
  font-size: 16px;
  padding: 8px 11px;
  gap: 10px;
  :hover {
    cursor: pointer;
  }
  :focus {
    background-color: #10e233;
  }
`;

export const CoinListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  width: 100%;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  background: ${props => props.theme.main};
  display: flex;
  justify-content: center;
`;

export const H2 = styled.h2`
  font-size: 22px;
  font-weight: lighter;
  margin: 0 0 10px 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const IntervalContainer = styled.div`
  background: ${props => props.theme.third};
  border-radius: 5px;
  display: none;
  justify-content: space-between;
  margin: 10px 0;
  padding: 4px;

  @media (max-width: 1200px) {
    display: flex;
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
  position: ${props => (props.position ? "absolute" : "static")};
  top: 50%;
  left: 45%;
  width: 45px;
`;

export const MobileContainer = styled.div`
  background: ${props => props.theme.third};
  border-radius: 10px;
  display: none;
  height: 310px;
  position: relative;
  width: 100%;
  @media (max-width: 1200px) {
    display: block;
    .slick-prev,
    .slick-next {
      z-index: 1;
      top: 50%;
    }
    .slick-prev {
      left: 30px;
    }
    .slick-next {
      right: 30px;
    }
  }
`;

export const TableContainer = styled.div`
  background: ${props => props.theme.main};
  border-radius: 10px;
  box-shadow: 0 2px 14px -4px black;
  padding: 0 0 20px 0;
  overflow-x: scroll;
  position: relative;
  width: 100%;
  @media (max-width: 1200px) {
    background: none;
    box-shadow: none;
    width: 100%;
    ::-webkit-scrollbar {
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 100px rgba(44, 45, 51, 0.9);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #10e233;
      height: 5px;
      outline: 1px solid slategrey;
    }

    ::-webkit-scrollbar:vertical {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  margin-top: 69px;
  padding: 45px 50px;
  width: 70%;
  @media (max-width: 1200px) {
    background: none;
    padding: 45px 0 100px 0;
    width: 90%;
  }
`;
