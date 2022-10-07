import React from "react";
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

class NavBar extends React.Component {
  state = {
    clickedLink: false,
    currencies: [
      { name: "USD", symbol: "$" },
      { name: "EUR", symbol: "€" },
      { name: "GBP", symbol: "£" },
    ],
    showDropdown: false,
  };
  handleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };
  handleDropdownFocus = () => {
    this.setState({ showDropdown: false });
  };
  handleSelectedCurrency = currency => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
    this.props.handleSelectedCurrency(currency);
  };
  handleClickedLink = () => {
    this.setState({ clickedLink: !this.state.clickedLink });
  };
  render() {
    return (
      <Nav>
        <Ul>
          <Container>
            <LeftContainer>
              <LinkLi>
                <StyledLink to="/">
                  <LinkWrapper
                    onClick={this.handleClickedLink}
                    currentPage={window.location.pathname === "/"}
                  >
                    Coins
                  </LinkWrapper>
                </StyledLink>
              </LinkLi>
              <LinkLi>
                <StyledLink to="/Portfolio">
                  <LinkWrapper
                    onClick={this.handleClickedLink}
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
                  <SearchIcon fill={this.props.theme.color} />
                  <Input type="text" placeholder="Search..." />
                </InputContainer>
              </Li>
              <Li onClick={this.handleDropdown}>
                <CurrencyWrapper>
                  <CurrencyContainer>
                    {this.state.currencies.map(currency => {
                      if (currency.name === this.props.currency) {
                        return (
                          <>
                            <CurrencySymbol>{currency.symbol}</CurrencySymbol>
                            <div>{currency.name}</div>
                          </>
                        );
                      } else return false;
                    })}
                    <StyledArrowIcon showDropdown={this.state.showDropdown} />
                  </CurrencyContainer>
                  {this.state.showDropdown && (
                    <Dropdown onMouseLeave={this.handleDropdownFocus}>
                      <DropdownContainer>
                        {this.state.currencies.map(currency => {
                          return (
                            <DropdownItem
                              onClick={() =>
                                this.handleSelectedCurrency(currency.name)
                              }
                            >
                              <CurrencySymbol>{currency.symbol}</CurrencySymbol>
                              <div>{currency.name}</div>
                            </DropdownItem>
                          );
                        })}
                      </DropdownContainer>
                    </Dropdown>
                  )}
                </CurrencyWrapper>
              </Li>
              <Li onClick={this.props.handleThemeChange}>
                <ThemeIcon fill={this.props.theme.color} />
              </Li>
            </RightContainer>
          </Container>
        </Ul>
      </Nav>
    );
  }
}
export default NavBar;
