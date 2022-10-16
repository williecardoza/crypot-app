import axios from "axios";
import React from "react";
import { CoinSummary } from "../../components";
import { CoinPageChart } from "../../components";
import {
  Button,
  ButtonContainer,
  Calculator,
  CalculatorContainer,
  ChartContainer,
  Container,
  Currency,
  CoinDescription,
  Input,
  StyledExchangeIcon,
  StyledLayerIcon,
  Time,
  TimeFrame,
  ThemeContainer,
  Theme,
  Value,
  Wrapper,
} from "./CoinPage.styles";
class CoinPage extends React.Component {
  state = {
    calculatorValue: null,
    coinHistory: null,
    data: null,
    inputValue: null,
    timeFrames: [
      { interval: "1d", days: 1 },
      { interval: "7d", days: 7 },
      { interval: "30d", days: 30 },
      { interval: "90d", days: 90 },
      { interval: "1y", days: 360 },
      { interval: "5y", days: 1800 },
    ],
  };

  fetchCoinData = async () => {
    try {
      const coinURL = `https://api.coingecko.com/api/v3/coins/${this.props.match.params.coinId.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`;
      const { data } = await axios(coinURL);
      this.setState({
        data: data,
      });
    } catch (error) {}
  };

  fetchCoinHistory = async days => {
    try {
      const coinURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency.toLowerCase()}&days=${days}`;
      const { data } = await axios(coinURL);
      this.setState({ coinHistory: data });
    } catch (error) {}
  };

  handleChange = e => {
    const sum =
      e.target.value /
      this.state.data.market_data.current_price[this.props.currency];
    this.setState({ calculatorValue: sum, inputValue: e.target.text });
  };

  handleClickedLink = link => {
    window.open(link);
  };

  componentDidMount() {
    this.fetchCoinData();
    this.fetchCoinHistory(7);
  }

  render() {
    const { data, timeFrames, coinHistory } = this.state;
    const { currency } = this.props;
    return (
      <Container>
        {data && (
          <Wrapper>
            <h2>Your Summary</h2>
            <ThemeContainer>
              <CoinSummary data={data} currency={currency} />
            </ThemeContainer>
            <h2>Description</h2>
            <Theme>
              <StyledLayerIcon />
              <CoinDescription
                dangerouslySetInnerHTML={{
                  __html: data.description.en,
                }}
              ></CoinDescription>
            </Theme>
            <CalculatorContainer>
              <Calculator>
                <Currency>{currency.toUpperCase()}</Currency>
                <Input
                  onChange={this.handleChange}
                  type={"number"}
                  value={this.state.inputValue}
                ></Input>
              </Calculator>
              <StyledExchangeIcon />
              <Calculator>
                <Currency>{data.symbol.toUpperCase()}</Currency>
                <Value>
                  {new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 7,
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(this.state.calculatorValue)}
                </Value>
              </Calculator>
            </CalculatorContainer>
            <ButtonContainer>
              {timeFrames.map(timeframe => (
                <TimeFrame>
                  <Button
                    onClick={() => {
                      this.fetchCoinHistory(timeframe.days);
                    }}
                  />
                  <Time>{timeframe.interval}</Time>
                </TimeFrame>
              ))}
            </ButtonContainer>
          </Wrapper>
        )}
        {coinHistory && (
          <ChartContainer>
            <CoinPageChart coinHistory={coinHistory} />
          </ChartContainer>
        )}
      </Container>
    );
  }
}
export default CoinPage;
