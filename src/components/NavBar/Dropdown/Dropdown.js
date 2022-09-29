import React from "react";
import {
  CurrencySymbol,
  Dropdown,
  DropdownContainer,
  DropdownItem,
} from "./Dropdown.styles";
class DropdownMenu extends React.Component {
  render() {
    return (
      <Dropdown onMouseLeave={this.props.handleDropdownFocus}>
        <DropdownContainer>
          <DropdownItem
            onClick={() => this.props.handleSelectedCurrency("USD")}
          >
            <CurrencySymbol>$</CurrencySymbol>
            <div>USD</div>
          </DropdownItem>
          <DropdownItem
            onClick={() => this.props.handleSelectedCurrency("EUR")}
          >
            <CurrencySymbol>€</CurrencySymbol>
            <div>EUR</div>
          </DropdownItem>
          <DropdownItem
            onClick={() => this.props.handleSelectedCurrency("GBP")}
          >
            <CurrencySymbol>£</CurrencySymbol>
            <div>GBP</div>
          </DropdownItem>
        </DropdownContainer>
      </Dropdown>
    );
  }
}
export default DropdownMenu;
