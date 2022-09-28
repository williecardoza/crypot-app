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
import { formatNumber } from "../../Utils/formatNumber";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  Tooltip
);

class BitcoinChart extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>Bitcoin Overview</h2>
        <ParentContainer>
          <Container>
            <DescriptionContainer>
              <H2>BTC</H2>
              <H1>
                {formatCurrency(
                  this.props.data.prices[this.props.data.prices.length - 1][1],
                  "USD",
                  "en",
                  false
                )}
              </H1>
              <H2>{getCurrentDate()}</H2>
            </DescriptionContainer>
            <ChartContainer>
              <LineChart data={this.props.data} />
            </ChartContainer>
          </Container>
          <Container>
            <DescriptionContainer>
              <H2>Volume 24h</H2>
              <H1>
                {formatNumber(
                  this.props.data.total_volumes[
                    this.props.data.total_volumes.length - 1
                  ][1]
                )}
              </H1>
              <H2>{getCurrentDate()}</H2>
            </DescriptionContainer>
            <ChartContainer>
              <BarChart data={this.props.data} />
            </ChartContainer>
          </Container>
        </ParentContainer>
      </Wrapper>
    );
  }
}
export default BitcoinChart;
