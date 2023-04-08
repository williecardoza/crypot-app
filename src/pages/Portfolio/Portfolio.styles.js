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
  @media (max-width: 1200px) {
    white-space: nowrap;
    font-size: 17px;
    padding: 13px 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const H2 = styled.h2`
  font-size: 22px;
  margin: 0;
`;

export const PortfolioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 1200px) {
    gap: 10px;
  }
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 50px;
  width: 70%;
  margin-top: 69px;
  @media (max-width: 1200px) {
    background: none;
    padding: 55px 0 100px 0;
    width: 90%;
  }
`;
