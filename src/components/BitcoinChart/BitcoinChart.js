import React from "react";
import {
  BitcoinChartContainer,
  PriceChartContainer,
  VolumeChartContainer,
} from "./BitcoinChart.styles";
import { formatCurrency } from "@coingecko/cryptoformat";

class BitcoinChart extends React.Component {
  state = {};
  render() {
    return (
      <BitcoinChartContainer>
        <PriceChartContainer>
          <h1>BTC</h1>
          <div>
            {formatCurrency(
              this.props.data.prices[this.props.data.prices.length - 1][1],
              "USD",
              "en",
              false
            )}
          </div>
          <div>{new Date().toLocaleDateString()}</div>
        </PriceChartContainer>
        <VolumeChartContainer>
          <h1>Volume 24h</h1>
          <div>
            {formatCurrency(
              this.props.data.total_volumes[
                this.props.data.total_volumes.length - 1
              ][1],
              "USD",
              "en",
              false
            )}
          </div>
          <div>{new Date().toLocaleDateString()}</div>
        </VolumeChartContainer>
      </BitcoinChartContainer>
    );
  }
}
export default BitcoinChart;
