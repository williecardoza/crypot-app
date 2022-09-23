import styled from "styled-components";

export const CoinListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Table = styled.table`
  background: ${props => props.theme.secondary};
  border-collapse: collapse;
  border-radius: 10px;
  width: 90%;
`;

export const Th = styled.th`
  font-size: 18px;
  text-align: left;
  padding: 19px;
`;

export const Tr = styled.tr`
  box-shadow: 0px 11px 13px -15px #ffffff;
`;
