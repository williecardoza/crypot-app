import React from "react";
import {
  Container,
  CurrencyContainer,
  Input,
  InputContainer,
  LeftContainer,
  Li,
  Nav,
  RightContainer,
  StyledLink,
  Ul,
} from "./NavBar.styles.js";
import { ReactComponent as ThemeIcon } from "../SVG/themeIcon.svg";
import { ReactComponent as CurrencySymbol } from "../SVG/currencySymbol.svg";
import { ReactComponent as DownArrow } from "../SVG/downArrow.svg";
import { ReactComponent as SearchIcon } from "../SVG/searchIcon.svg";

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <Ul>
          <Container>
            <LeftContainer>
              <Li>
                <StyledLink to="/"> Coins </StyledLink>
              </Li>
              <Li>
                <StyledLink to="/Portfolio"> Portfolio </StyledLink>
              </Li>
            </LeftContainer>
            <RightContainer>
              <Li>
                <InputContainer>
                  <SearchIcon fill= {this.props.theme.color}/>
                  <Input type="text" placeholder="Search..." />
                </InputContainer>
              </Li>
              <Li>
                <CurrencyContainer>
                  <CurrencySymbol />
                  <CurrencyContainer>
                    <div>USD</div>
                    <DownArrow />
                  </CurrencyContainer>
                </CurrencyContainer>
              </Li>
              <Li onClick={this.props.handleThemeChange}>
                <ThemeIcon fill= {this.props.theme.color}/>
              </Li>
            </RightContainer>
          </Container>
        </Ul>
      </Nav>
    );
  }
}
export default NavBar;
