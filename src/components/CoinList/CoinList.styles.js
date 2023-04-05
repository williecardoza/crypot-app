import styled from "styled-components";
import { ReactComponent as SortDownIcon } from "../SVG/sortDownIcon.svg";
import { ReactComponent as LeftArrowIcon } from "../SVG/leftArrow.svg";
import { ReactComponent as RightArrowIcon } from "../SVG/rightArrow.svg";

export const StyledSortByIcon = styled(SortDownIcon)`
  fill: ${props => props.theme.color};
  height: 16px;
  vertical-align: center;
  width: 16px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledLeftArrow = styled(LeftArrowIcon)`
  fill: ${props => props.theme.color};
  height: 25px;
  width: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledRightArrow = styled(RightArrowIcon)`
  fill: ${props => props.theme.color};
  height: 25px;
  width: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const FilterContainer = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const H3 = styled.h3`
  font-size: 30px;
  margin: 0;
`;

export const H4 = styled.h4`
  font-weight: lighter;
  font-size: 21px;
  margin: 0 0 0 5px;
`;

export const LeftFilterContainer = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-around;
`;

export const RightFilterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

export const Select = styled.select`
  background: transparent;
  border: none;
  color: ${props => props.theme.color};
  font-size: 17px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  overflow-x: scroll;
  width: 100%;
`;

export const Th = styled.th`
  font-size: 18px;
  padding: 10px;
  text-align: left;
`;

export const Tr = styled.tr`
  border-bottom: 1px dotted #707070;
`;
