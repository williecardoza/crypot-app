import styled from "styled-components";
import { ReactComponent as ExchangeIcon } from "../../components/SVG/exchangeIcon.svg";
import { ReactComponent as LayerIcon } from "../../components/SVG/layerIcon.svg";

export const StyledExchangeIcon = styled(ExchangeIcon)`
  fill: ${props => props.theme.color};
  padding: 20px;
`;
export const StyledLayerIcon = styled(LayerIcon)`
  margin: auto;
  width: 100%;
`;
export const Button = styled.button`
  background: ${props => (props.interval === props.value ? "#06d554" : "none")};
  border: ${props =>
    props.interval === props.value ? "2px solid green" : "none"};
  border-radius: 5px;
  color: ${props => props.theme.color};
  font-size: 15px;
  height: 35px;
  width: 35px;
  :hover {
    background: #06d554;
    border: 2px solid green;
    cursor: pointer;
  }
`;
export const ButtonContainer = styled.div`
  background: ${props => props.theme.third};
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 5px;
  width: 30%;
  @media (max-width: 1200px) {
    width: auto;
  }
`;
export const CalculatorContainer = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
`;
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  @media (max-width: 1200px) {
    margin: 0 auto 70px auto;
  }
`;
export const Currency = styled.div`
  align-items: center;
  background: #06d554;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  font-weight: bold;
  height: 100%;
  padding: 0 15px;
  text-align: center;
`;
export const CoinDescription = styled.div`
  text-align: center;
  a:link,
  a:visited {
    color: #06d554;
    text-decoration: none;
  }
`;
export const ChartContainer = styled.div`
  bottom: -330px;
  position: absolute;
  width: 100%;
  @media (max-width: 1200px) {
    position: revert;
    bottom: 0;
    height: 100%;
  }
`;

export const H2 = styled.div`
  font-size: 22px;
  margin: 0;
`;

export const Input = styled.input`
  background: ${props => props.theme.third};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: border-box;
  color: ${props => props.theme.color};
  font-size: 16px;
  height: 100%;
  padding: 0 0 0 20px;
  width: 100%;
  :focus {
    outline: none;
    -webkit-appearance: none;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
export const InputContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.third};
  border-radius: 10px;
  display: flex;
  font-size: 17px;
  height: 45px;
  width: 330px;
  position: relative;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Symbol = styled.div`
  position: absolute;
  left: 70px;
`;

export const Theme = styled.div`
  background: ${props => props.theme.main};
  border-radius: 10px;
  box-shadow: 0 2px 10px -4px black;
  padding: 10px;
  @media (max-width: 1200px) {
    background: ${props => props.theme.third};
    box-shadow: none;
    height: 230px;
    overflow: auto;
  }
`;
export const Wrapper = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 69px;
  padding: 50px 50px 25px 50px;
  position: relative;
  width: 70%;
  z-index: 10;
  @media (max-width: 1200px) {
    padding: 50px 50px 10px 50px;
    background: none;
    width: 90%;
  }
`;
