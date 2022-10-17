import React from "react";
import BarChart from "./BarChart/BarChart";
import LineChart from "./LineChart/LineChart";
import {
  ChartContainer,
  Container,
  DescriptionContainer,
  ParentContainer,
  H1,
  H2,
  Wrapper,
} from "./BitcoinChart.styles";
import { formatCurrency } from "@coingecko/cryptoformat";
import { getCurrentDate } from "../../Utils/getCurrentDate";

const BitcoinChart = (props) => {
  return(
    <Wrapper>
        <h2>Bitcoin Overview</h2>
        <ParentContainer>
          <Container>
            <DescriptionContainer>
              <H2>BTC 1D</H2>
              <H1>
                {formatCurrency(
                  props.data.prices[props.data.prices.length - 1][1],
                  props.currency
                )}
              </H1>
              <H2>{getCurrentDate()}</H2>
            </DescriptionContainer>
            <ChartContainer>
              <LineChart data={props.data} />
            </ChartContainer>
          </Container>
          <Container>
            <DescriptionContainer>
              <H2>Volume 24h</H2>
              <H1>
                {formatCurrency(
                  props.data.total_volumes[
                    props.data.total_volumes.length - 1
                  ][1],
                  props.currency
                )}
              </H1>
              <H2>{getCurrentDate()}</H2>
            </DescriptionContainer>
            <ChartContainer>
              <BarChart data={props.data} />
            </ChartContainer>
          </Container>
        </ParentContainer>
      </Wrapper>
  )
}
export default BitcoinChart;
