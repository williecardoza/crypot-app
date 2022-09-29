import styled from "styled-components";

export const CurrencySymbol = styled.div`
  color: #00ff5f;
  margin-right: 8px;
`;

export const Dropdown = styled.div`
  animation: fadeInOut 0.9s ease-in-out;
  box-shadow: 8px 8px 25px -7px black;
  position: absolute;
  top: 61px;
  right: -13px;
  z-index: 10;
  width: 125px;
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
