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
  box-shadow: 0 2px 14px -4px black;
  margin-bottom: 40px;
  position: relative;
  height: 400px;
  table-layout: fixed;
  overflow: auto;
  width: 88%;
`;

export const Th = styled.th`
  font-size: 18px;
  padding: 18px;
`;

export const Tr = styled.tr`
  box-shadow: 0px 11px 13px -15px #ffffff;
`;