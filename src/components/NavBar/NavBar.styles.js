import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  padding: 32px;
  text-decoration: none;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CurrencyContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 1px;
`;

export const Input = styled.input`
  background: none;
  border: none;
  font-size: 17px;
  margin-left: 8px;
  width: 100%;
  &::placeholder {
    color: ${props => props.theme.color};
  }
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 2px;
  width: 330px;
`;

export const Li = styled.li`
  background: ${props => props.theme.third};
  border-radius: 5px;
  color: ${props => props.theme.color};
  list-style: none;
  margin: 20px 13.5px 20px 0;
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  margin-left: 95px;
`;

export const Nav = styled.nav`
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.color};
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 17px;
`;

export const Ul = styled.ul`
  margin: 0;
`;
