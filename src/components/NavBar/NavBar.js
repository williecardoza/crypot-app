import React from "react";
import DropdownMenu from "./Dropdown/Dropdown.js";
import {
  Container,
  CurrencyContainer,
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
  CurrencySymbol,
  Ul,
  Wrapper,
} from "./NavBar.styles.js";
import { ReactComponent as ThemeIcon } from "../SVG/themeIcon.svg";
import { ReactComponent as SearchIcon } from "../SVG/searchIcon.svg";

class NavBar extends React.Component {
  state = {
    clickedLink: false,
    currency: JSON.parse(localStorage.getItem("currency")),
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
      currency: currency,
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

              <Li>
                <Wrapper>
                  <CurrencyContainer onClick={this.handleDropdown}>
                    <CurrencySymbol>
                      {this.state.currency === "USD"
                        ? "$"
                        : this.state.currency === "EUR"
                        ? "€"
                        : this.state.currency === "GBP"
                        ? "£"
                        : ""}
                    </CurrencySymbol>
                    <div>{this.state.currency}</div>
                    <StyledArrowIcon showDropdown={this.state.showDropdown} />
                  </CurrencyContainer>
                  {this.state.showDropdown && (
                    <DropdownMenu
                      handleDropdownFocus={this.handleDropdownFocus}
                      handleSelectedCurrency={this.handleSelectedCurrency}
                    />
                  )}
                </Wrapper>
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
