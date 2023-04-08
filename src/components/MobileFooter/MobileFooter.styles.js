import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as DottedIcon } from "../../components/SVG/dottedIcon.svg";
import { ReactComponent as ListIcon } from "../../components/SVG/listIcon.svg";
import { ReactComponent as Search } from "../../components/SVG/searchIcon.svg";
import { ReactComponent as TrendIcon } from "../../components/SVG/trendIcon.svg";
import { ReactComponent as ExitIcon } from "../../components/SVG/exitIcon.svg";

export const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
  margin: 0 0 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: ${props => props.theme.color};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StyledExitIcon = styled(ExitIcon)`
  height: 32px;
  position: absolute;
  right: 5%;
  top: 3%;
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;

export const OverviewIcon = styled(DottedIcon)`
  fill: ${props =>
    props.page === props.currentmobilepage ? "#00FC2A" : props.theme.color};
  height: 30px;
  width: 30px;
`;

export const PortfolioIcon = styled(ListIcon)`
  fill: ${props =>
    props.page === props.currentmobilepage ? "#00FC2A" : props.theme.color};
  height: 30px;
  width: 30px;
`;
export const SearchIcon = styled(Search)`
  fill: ${props =>
    props.page === props.currentmobilepage ? "#00FC2A" : props.theme.color};
  height: 30px;
  width: 30px;
`;

export const Img = styled.img`
  height: 40px;
  vertical-align: middle;
  width: 40px;
`;

export const Li = styled.li`
  font-size: 20px;
  list-style: none;
  margin: 10px 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SummaryIcon = styled(TrendIcon)`
  fill: ${props =>
    props.page === props.currentmobilepage ? "#00FC2A" : props.theme.color};
  height: 30px;
  width: 30px;
`;

export const SearchInput = styled.input`
  background: ${props => props.theme.third};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.color};
  font-size: 20px;
  height: 40px;
  padding: 9px 0 9px 10px;
  margin: 40px 0 0 0;
  width: 97%;
  z-index: 999;
  :focus {
    outline: solid #06d554;
  }
`;
export const SearchContainer = styled.div`
  width: 85%;
  height: 90%;
`;

export const Ul = styled.ul`
  position: absolute;
  overflow: scroll;
  padding: 0;
  height: 80%;
  width: 85%;
  margin: 0;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #10e233;
  }

  ::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ModalOverlay = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.93);
  position: fixed;
  right: 0;
  top: 0;
  height: 92.5%;
  width: 100%;
  z-index: 2;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.third};
  display: none;
  bottom: 0;
  justify-content: space-around;
  padding: 12px 0;
  position: fixed;
  width: 100%;
  z-index: 999;
  @media (max-width: 1200px) {
    display: flex;
  }
`;
