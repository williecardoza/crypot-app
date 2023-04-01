import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  box-shadow: 0 2px 14px -4px black;
  padding: 0 25px;
  width: 44%;
`;

export const ChartContainer = styled.div`
  margin: 0 auto 10px;
  width: 100%;
`;
export const DescriptionContainer = styled.div`
  margin: 15px 0 0 20px;
`;
export const H1 = styled.h1`
  font-size: 34px;
  font-weight: light;
  margin: 0;
`;
export const H2 = styled.h2`
  font-size: 22px;
  font-weight: lighter;
  margin: 0;
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Wrapper = styled.div`
`;