import styled from "styled-components";
import { ReactComponent as ArrowSVG } from "../SVG/arrowIcon.svg";

export const StyledArrowIcon = styled(ArrowSVG)`
  fill: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  transform: ${props => (props.value > 0 ? "rotate(0deg)" : "rotate(180deg)")};
`;

export const CurrencyContainer = styled.div`
  display: flex;
  font-size: 19px;
  justify-content: space-between;
`;

export const CurrencyIcon = styled.div`
  background: url(${props => props.image}) center center;
  background-size: cover;
  border-radius: 5px;
  height: 33px;
  margin-right: 10px;
  width: 33px;
`;
export const LineChartContainer = styled.div`
  align-items: center;
  display: flex;
  height: 34px;
  width: 116px;
`;
export const NameContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 19px;
  margin: auto;
  padding: 5px;
  width: 70%;
  &:hover {
    cursor: pointer;
  }
`;

export const PercentageValueContainer = styled.div`
  align-items: center;
  color: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  display: flex;
  font-size: 19px;
`;

export const Td = styled.td`
  padding: 24px 19px 24px 19px;
  font-size: 19px;
  &:hover {
    cursor: default;
  }
`;
export const Tr = styled.tr`
  border-bottom: 1px solid #707070;
  &:hover {
    background: ${props => props.theme.third};
  }
`;
export const PercentageValue = styled.div`
  margin-left: 5px;
`;
