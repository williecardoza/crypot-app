import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
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
  @media (max-width: 900px) {
    display: none;
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

export const StyledProgressBar = styled(ProgressBar)`
  margin: 0 5px 0 5px;
  width: 100%;
`;

export const CurrencyContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 17px;
`;

export const CurrencySymbol = styled.div`
  color: #00ff5f;
  margin: 0 5px 0 0;
`;

export const Data = styled.div`
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  border-radius: 5px;
  box-shadow: 8px 8px 25px -7px black;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 15;
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
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 11px;
  &:hover {
    background: ${props => props.theme.secondary};
    cursor: pointer;
  }
  width: 80%;
  z-index: 999;
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
  @media (max-width: 900px) {
    display: none;
  }
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
  @media (max-width: 900px) {
    margin: 0;
  }
`;

export const ThemeIconLi = styled.li`
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
  @media (max-width: 1200px) {
    display: none;
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
  padding: 5px 10px;
  width: 45%;
  z-index: 999;
  @media (max-width: 900px) {
    background: ${props => props.theme.third};
    border-radius: 0;
    box-shadow: none;
    justify-content: space-around;
    width: 100%;
  }
`;

export const Nav = styled.nav`
  color: ${props => props.theme.color};
  position: absolute;
  width: 100%;
`;

export const Overview = styled.h3`
  display: none;
  @media (max-width: 900px) {
    display: block;
    font-size: 22px;
    margin: 0;
  }
`;

export const ProgressBarContainer = styled.div`
  align-items: center;
  display: flex;
  width: 140px;
  @media (max-width: 900px) {
    width: 120px;
  }
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 17px;
  margin: 10px;
  @media (max-width: 900px) {
    margin: 10px 0;
    gap: 5px;
  }
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
  z-index: 15;
`;

export const Ul = styled.ul`
  align-items: center;
  background: ${props => props.theme.main};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  width: 85%;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
