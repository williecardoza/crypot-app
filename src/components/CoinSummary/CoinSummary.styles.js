import styled from "styled-components";
import { ReactComponent as LayerIcon } from "../../components/SVG/layerIcon.svg";
import { ReactComponent as ArrowSVG } from "../../components/SVG/arrowIcon.svg";
import { ReactComponent as LinkIcon } from "../../components/SVG/linkIcon.svg";

export const StyledArrowIcon = styled(ArrowSVG)`
  fill: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  margin: 5px;
  transform: ${props => (props.value > 0 ? "rotate(0deg)" : "rotate(180deg)")};
`;
export const StyledLayerIcon = styled(LayerIcon)`
  margin: auto;
  width: 100%;
`;
export const StyledLinkIcon = styled(LinkIcon)`
  fill: ${props => props.theme.color};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const CurrencyIcon = styled.div`
  background: url(${props => props.image}) center center;
  background-size: cover;
  height: 55px;
  width: 55px;
`;
export const CurrencyContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 5px;
  box-shadow: 0 2px 10px -4px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  @media (max-width: 1200px) {
    box-shadow: none;
  }
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
`;
export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
`;
export const H1 = styled.h1`
  font-size: 35px;
  font-weight: light;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
`;
export const H2 = styled.h2`
  font-size: 25px;
  text-align: center;
  margin: auto;
`;
export const H3 = styled.h3`
  font-size: 18px;
  margin: 0 0 0 10px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  height: 105px;
  justify-content: center;
  width: 105px;
  @media (max-width: 1200px) {
    background: ${props => props.theme.third};
  }
`;
export const Link = styled.a`
  color: ${props => props.theme.color};
  font-size: 15px;
  margin: 0 40px 0 40px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export const MarketDataContainer = styled.div`
  background: ${props => props.theme.main};
  box-shadow: 0 2px 10px -4px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 30px;
  @media (max-width: 1200px) {
    align-items: center;
    background: ${props => props.theme.third};
    box-shadow: none;
    border-radius: 10px;
    padding: 15px;
  }
`;
export const PriceContainer = styled.div`
  background: ${props => props.theme.main};
  box-shadow: 0 2px 10px -4px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px;
  @media (max-width: 1200px) {
    align-items: center;
    background: ${props => props.theme.third};
    box-shadow: none;
    border-radius: 10px;
    overflow: hidden;
    justify-content: center;
    margin-bottom: 15px;
  }
`;
export const ProfitValue = styled.span`
  color: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  font-size: 18px;
  font-weight: lighter;
  @media (max-width: 1200px) {
    font-size: 15px;
  }
`;
export const VolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;
export const Span = styled.span`
  font-size: 18px;
  font-weight: lighter;
`;
export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ValueContainer = styled.div`
  margin: auto;
`;

export const Div = styled.div`
  width: 100%;
`;
