import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as ArrowSVG } from "../SVG/arrowIcon.svg";
import { ReactComponent as ThemeIcon } from "../SVG/themeIcon.svg";
import { ReactComponent as SearchIcon } from "../SVG/searchIcon.svg";

export const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  margin: 0 0 0 10px;
  text-decoration: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StyledNavLink = styled(NavLink)`
  background: none;
  border-radius: 5px;
  box-shadow: 0 3px 9px -5px black;
  color: ${props => props.theme.color};
  padding: 10px 30px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  &.${props => props.activeClassName} {
    background-color: ${props => props.theme.third};
  }
`;

export const StyledArrowIcon = styled(ArrowSVG)`
  fill: #00ff5f;
  margin-left: 5px;
  transform: ${props => props.dropdown};
`;

export const StyledSearchIcon = styled(SearchIcon)`
  fill: ${props => props.theme.color};
  right: 10px;
  position: absolute;
  :hover {
    cursor: pointer;
  }
`;

export const StyledThemeIcon = styled(ThemeIcon)`
  fill: ${props => props.theme.color};
  vertical-align: middle;
`;

export const CurrencyContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 19px;
  position: relative;
`;

export const CurrencySymbol = styled.div`
  color: #00ff5f;
  margin: 0 5px 0 0;
`;

export const Dropdown = styled.div`
  box-shadow: 8px 8px 25px -7px black;
  position: absolute;
  top: 61px;
  right: 0;
  z-index: 10;
  width: 100%;
`;

export const DropdownContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.third};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 12px;
  &:hover {
    background: ${props => props.theme.secondary};
    cursor: pointer;
  }
  width: 80%;
`;

export const Img = styled.img`
  height: 25px;
  width: 25px;
`;

export const Input = styled.input`
  background: ${props => props.theme.third};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.color};
  font-size: 19px;
  outline: none;
  padding: 13px;
  width: 280px;
  &::placeholder {
    color: ${props => props.theme.color};
  }
`;
export const InputLi = styled.li`
  align-items: center;
  box-shadow: 0 3px 9px -5px black;
  display: flex;
  list-style: none;
  margin: 0 5px;
  position: relative;
`;

export const Li = styled.li`
  background: ${props => props.theme.third};
  border-radius: 5px;
  box-shadow: 0 3px 9px -5px black;
  color: ${props => props.theme.color};
  list-style: none;
  padding: 10px;
  position: relative;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
`;

export const MarketDataContainer = styled.div`
  background: ${props => props.theme.main};
  box-shadow: 6px 5px 13px -8px black;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 5px 15px;
  width: 45%;
`;

export const Nav = styled.nav`
  color: ${props => props.theme.color};
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const ProgressBarContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 17px;
  margin: 10px;
`;

export const SearchContainer = styled.div`
  background: ${props => props.theme.third};
  border-radius: 5px;
  box-shadow: 0 3px 9px -5px black;
  top: 50px;
  display: flex;
  flex-direction: column;
  height: 100px;
  position: absolute;
  overflow-y: scroll;
  width: 100%;
  z-index: 10;
`;

export const Ul = styled.ul`
  align-items: center;
  background: ${props => props.theme.main};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  width: 85%;
`;
