import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px 0 70px 0;
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;
export const ChartContainer = styled.div`
  margin: 0 auto 10px;
  width: 650px;
`;
export const DescriptionContainer = styled.div`
  margin: 15px 0 0 20px;
`;
export const H1 = styled.h1`
  font-size: 41px;
  font-weight: light;
  margin: 0;
`;
export const H2 = styled.h2`
  font-size: 22px;
  font-weight: lighter;
  margin: 0;
`;
export const Container = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  width: 740px;
`;
