import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  padding: 0 50px;
  width: 70%;
`;
export const Wrapper = styled.div`
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
`;
