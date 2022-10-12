import styled from "styled-components";
import { ReactComponent as ExchangeIcon } from "../../components/SVG/exchangeIcon.svg";
import { ReactComponent as LayerIcon } from "../../components/SVG/layerIcon.svg";

export const StyledExchangeIcon = styled(ExchangeIcon)`
  fill: ${props => props.theme.color};
  padding: 20px;
`;
export const StyledLayerIcon = styled(LayerIcon)`
  margin: 15px auto;
  width: 100%;
`;
export const Button = styled.button`
  background: none;
  border: 1px solid #06d554;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 40%;
`;
export const Calculator = styled.div`
  align-items: center;
  display: flex;
  font-size: 17px;
  height: 45px;
  width: 330px;
`;
export const CalculatorContainer = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  justify-content: center;
`;
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
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
  a:link {
    color: #06d554;
    text-decoration: none;
  }
  text-align: center;
`;
export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 5px;
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
  padding: 0 0 0 10px;
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
export const Link = styled.a`
  color: #ffffff;
  font-size: 15px;
  margin: 0 50px 0 50px;
  text-decoration: none;
`;
export const Time = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;
export const TimeFrame = styled.div`
  align-items: center;
  display: flex;
`;
export const Theme = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  padding: 12px 20px;
`;
export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Value = styled.div`
  align-items: center;
  background: ${props => props.theme.third};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  font-size: 16px;
  height: 100%;
  padding: 0 0 0 10px;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 71%;
`;
