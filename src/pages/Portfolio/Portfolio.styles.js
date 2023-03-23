import styled from "styled-components";

export const AddAssetButton = styled.button`
  background: #06d554;
  border-radius: 10px;
  border: none;
  color: ${props => props.theme.color};
  font-size: 20px;
  font-weight: bolder;
  padding: 15px 150px;
  margin: 0 auto 0 auto;
  :hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const H2 = styled.h2`
  font-size: 22px;
  margin: 0;
`;

export const PortfolioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  margin-top: 90px;
`;
