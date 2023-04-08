import styled from "styled-components";
import { ReactComponent as ArrowSVG } from "../SVG/arrowIcon.svg";
import { Link } from "react-router-dom";

export const StyledArrowIcon = styled(ArrowSVG)`
  fill: ${props => (props.value > 0 ? "#00FC2A" : "#FE1040")};
  transform: ${props => (props.value > 0 ? "rotate(0deg)" : "rotate(180deg)")};
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const CurrencyContainer = styled.div`
  display: flex;
  font-size: 19px;
  justify-content: space-between;
`;

export const CurrencyIcon = styled.img`
  border-radius: 5px;
  height: 35px;
  margin-right: 10px;
  vertical-align: middle;
  width: 35px;
  @media (max-width: 1200px) {
    display: inline-block;
    height: 30px;
    width: 30px;
  }
`;
export const LineChartContainer = styled.div`
  align-items: center;
  display: flex;
  height: 34px;
  width: 116px;
`;

export const PercentageValueContainer = styled.div`
  align-items: center;
  color: ${props => (props.value > 0 ? "#10E233" : "#FE1040")};
  display: flex;
  font-size: 19px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  display: inline-block;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Td = styled.td`
  font-size: 19px;
  padding: 20px 10px;
  font-weight: lighter;
  &:hover {
    cursor: default;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    padding: 5px 10px;
  }
`;
export const Tr = styled.tr`
  border-bottom: 1px dotted #707070;
`;
export const PercentageValue = styled.div`
  margin-left: 5px;
`;
