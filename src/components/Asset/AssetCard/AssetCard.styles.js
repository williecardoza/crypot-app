import styled from "styled-components";
import { ReactComponent as Arrow } from "../../SVG/arrowIcon.svg";

export const StyledArrowIcon = styled(Arrow)`
  fill: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  transform: ${props => (props.value > 0 ? "rotate(0deg)" : "rotate(180deg)")};
  margin: 0 5px;
`;

export const AssetCardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const AssetCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CoinImageContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const CoinContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  box-shadow: 0px 7px 50px -26px black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
`;

export const ColoredSpan = styled.span`
  color: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  font-weight: lighter;
  font-size: 18px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  margin-left: 22px;
  width: 100%;
`;

export const EditContainer = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px 14px;
`;

export const EditCoinContainer = styled.div`
  align-items: center;
  display: flex;
  width: 25%;
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const Image = styled.div`
  background: url(${props => props.image}) center center;
  background-size: cover;
  height: 48px;
  width: 48px;
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: lighter;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: lighter;
  margin: 0;
`;

export const MarketDataContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  box-shadow: 0px 7px 50px -28px black;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Span = styled.span`
  font-weight: lighter;
`;
