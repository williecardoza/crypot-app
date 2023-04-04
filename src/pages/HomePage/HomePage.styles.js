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
`;

export const ChartContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  box-shadow: 0 2px 14px -4px black;
  display: flex;
  flex-direction: column;
  height: 290px;
  padding: 15px;
  position: relative;
  width: 45%;
`;

export const Container = styled.div`
  background: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 45px 50px;
  width: 70%;

`;

export const CoinListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 22px;
  font-weight: lighter;
  margin: 0 0 10px 0;
`;

export const LoadingSpinner = styled.div`
  animation: 1.3s linear infinite ${spinnerKeyframes};
  animation-play-state: inherit;
  border: solid 5px ${props => props.theme.third};
  border-bottom-color: white;
  border-radius: 50%;
  height: 40px;
  margin: auto;
  width: 40px;
`;

export const TableContainer = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  box-shadow: 0 2px 14px -4px black;
  padding: 0 0 20px 0;
  margin: 10px 0;
  overflow-x: scroll;
  padding: 15px;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
`;
