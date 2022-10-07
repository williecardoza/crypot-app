import styled from "styled-components";
import { ReactComponent as ExchangeIcon } from "../../components/SVG/exchangeIcon.svg";
import { ReactComponent as LayerIcon } from "../../components/SVG/layerIcon.svg";
import { ReactComponent as ArrowSVG } from "../../components/SVG/arrowIcon.svg";

export const StyledArrowIcon = styled(ArrowSVG)`
  fill: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  margin: 5px;
  transform: ${props => (props.value > 0 ? "rotate(0deg)" : "rotate(180deg)")};
`;
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
  display: flex;
  font-size: 17px;
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
export const CurrencyIcon = styled.div`
  background: url(${props => props.image}) center center;
  background-size: cover;
  height: 55px;
  width: 55px;
`;
export const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Currency = styled.div`
  background: #06d554;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-weight: bold;
  gap: 20px;
  padding: 15px 35px;
  text-align: center;
`;
export const CoinContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 35px 20px;
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
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  background: ${props => props.theme.main};
  border-radius: 10px;
  height: 105px;
  justify-content: center;
  margin: auto;
  width: 105px;
`;
export const H1 = styled.h1`
  font-size: 44px;
  margin: 0;
`;
export const H2 = styled.h2`
  font-size: 25px;
  text-align: center;
  margin: auto;
`;
export const H3 = styled.h3`
  font-size: 18px;
  margin: 0 0 0 10px;
`;
export const Link = styled.a`
  color: #ffffff;
  font-size: 15px;
  margin: 0 30px 0 30px;
  text-decoration: none;
`;
export const ProfitValue = styled.span`
  color: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  font-size: 18px;
  font-weight: lighter;
`;
export const Span = styled.span`
  font-size: 18px;
  font-weight: lighter;
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
  padding: 15px 25px;
`;
export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Value = styled.div`
  background: ${props => props.theme.third};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 215px 5px 20px;
  text-align: center;
`;
export const ValueContainer = styled.div`
  margin: auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 71%;
`;
