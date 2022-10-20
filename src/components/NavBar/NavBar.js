import React, { useState } from "react";
import {
  Container,
  CurrencyContainer,
  CurrencySymbol,
  CurrencyWrapper,
  Dropdown,
  DropdownContainer,
  DropdownItem,
  Input,
  InputContainer,
  LeftContainer,
  Li,
  LinkWrapper,
  LinkLi,
  Nav,
  RightContainer,
  StyledLink,
  StyledArrowIcon,
  Ul,
} from "./NavBar.styles.js";
import { ReactComponent as ThemeIcon } from "../SVG/themeIcon.svg";
import { ReactComponent as SearchIcon } from "../SVG/searchIcon.svg";

const NavBar = props => {
  const [clickedLink, setClickedLink] = useState(false);
  const [dropDown, setDropdown] = useState(false);
  const currencies = [
    { name: "usd", symbol: "$" },
    { name: "eur", symbol: "€" },
    { name: "gbp", symbol: "£" },
  ];
  const handleDropdown = () => {
    setDropdown(!dropDown);
  };
  const handleDropdownFocus = () => {
    setDropdown(false);
  };
  const handleSelectedCurrency = currency => {
    setDropdown(!dropDown);
    props.handleSelectedCurrency(currency);
  };
  const handleClickedLink = () => {
    setClickedLink(!clickedLink);
  };
  return (
    <Nav>
      <Ul>
        <Container>
          <LeftContainer>
            <LinkLi>
              <StyledLink to="/">
                <LinkWrapper
                  onClick={handleClickedLink}
                  currentPage={window.location.pathname === "/"}
                >
                  Coins
                </LinkWrapper>
              </StyledLink>
            </LinkLi>
            <LinkLi>
              <StyledLink to="/Portfolio">
                <LinkWrapper
                  onClick={handleClickedLink}
                  currentPage={window.location.pathname === "/Portfolio"}
                >
                  Portfolio
                </LinkWrapper>
              </StyledLink>
            </LinkLi>
          </LeftContainer>
          <RightContainer>
            <Li>
              <InputContainer>
                <SearchIcon fill={props.theme.color} />
                <Input type="text" placeholder="Search..." />
              </InputContainer>
            </Li>
            <Li onClick={handleDropdown}>
              <CurrencyWrapper>
                <CurrencyContainer>
                  {currencies.map(currency => {
                    if (currency.name === props.currency) {
                      return (
                        <>
                          <CurrencySymbol>{currency.symbol}</CurrencySymbol>
                          <div>{currency.name.toUpperCase()}</div>
                        </>
                      );
                    } else return false;
                  })}
                  <StyledArrowIcon showDropdown={dropDown} />
                </CurrencyContainer>
                {dropDown && (
                  <Dropdown onMouseLeave={handleDropdownFocus}>
                    <DropdownContainer>
                      {currencies.map(currency => {
                        return (
                          <DropdownItem
                            onClick={() =>
                              handleSelectedCurrency(currency.name)
                            }
                          >
                            <CurrencySymbol>{currency.symbol}</CurrencySymbol>
                            <div>{currency.name.toUpperCase()}</div>
                          </DropdownItem>
                        );
                      })}
                    </DropdownContainer>
                  </Dropdown>
                )}
              </CurrencyWrapper>
            </Li>
            <Li onClick={props.handleThemeChange}>
              <ThemeIcon fill={props.theme.color} />
            </Li>
          </RightContainer>
        </Container>
      </Ul>
    </Nav>
  );
};
export default NavBar;
