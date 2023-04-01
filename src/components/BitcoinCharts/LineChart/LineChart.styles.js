import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.interval === props.value ? "#10e233" : "none")};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.color};
  font-size: 16px;
  padding: 5px 10px;
  margin: 0 5px;
  :hover {
    cursor: pointer;
  }
  :focus {
    background-color: #10e233;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  width: 95%;
`;

export const DescriptionContainer = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 999;
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

export const IntervalContainer = styled.div`
  background: ${props => props.theme.third};
  border-radius: 5px;
  display: flex;
  padding: 5px;
`;
