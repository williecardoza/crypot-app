import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #ffffff;
  padding: 35px;
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
`;

export const Input = styled.input`
  background: none;
  border: none;
  font-size: 17px;
  margin-left: 8px;
  width: 100%;
  &::placeholder {
   color: #FFFFFF;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 1.5px;
  width: 320px;
`;

export const Li = styled.li`
  background: #2c2f36;
  border-radius: 5px;
  list-style: none;
  margin: 20px 12px 20px 0;
  padding: 10px;
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  margin-left: 95px;
`;

export const Nav = styled.nav`
  background: #191b1f;
  color: #ffffff;
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 17px;
`;

export const Ul = styled.ul`
  margin: 0;
`;
