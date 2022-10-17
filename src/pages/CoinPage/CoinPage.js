import axios from "axios";
import React, { useState, useEffect } from "react";
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

const CoinPage = props => {
  const [calculatorValue, setCalculatorValue] = useState(null);
  const [coinHistory, setCoinHistory] = useState(null);
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const timeFrames = [
    { interval: "1d", days: 1 },
    { interval: "7d", days: 7 },
    { interval: "30d", days: 30 },
    { interval: "90d", days: 90 },
    { interval: "1y", days: 360 },
    { interval: "5y", days: 1800 },
  ];

  const fetchCoinData = async () => {
    try {
      const coinURL = `https://api.coingecko.com/api/v3/coins/${props.match.params.coinId.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`;
      const { data } = await axios(coinURL);
      setData(data);
    } catch (error) {}
  };

  const fetchCoinHistory = async days => {
    try {
      const coinURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.currency.toLowerCase()}&days=${days}`;
      const { data } = await axios(coinURL);
      setCoinHistory(data);
    } catch (error) {}
  };

  const handleChange = e => {
    const sum = e.target.value / data.market_data.current_price[props.currency];
    setCalculatorValue(sum);
    setInputValue(e.target.text);
  };

  useEffect(() => {
    fetchCoinData();
    fetchCoinHistory(7);
  });

  return (
    <Container>
      {data && (
        <Wrapper>
          <h2>Your Summary</h2>
          <ThemeContainer>
            <CoinSummary data={data} currency={props.currency} />
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
              <Currency>{props.currency.toUpperCase()}</Currency>
              <Input
                onChange={handleChange}
                type={"number"}
                value={inputValue}
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
                }).format(calculatorValue)}
              </Value>
            </Calculator>
          </CalculatorContainer>
          <ButtonContainer>
            {timeFrames.map(timeframe => (
              <TimeFrame>
                <Button
                  onClick={() => {
                    fetchCoinHistory(timeframe.days);
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
};
export default CoinPage;
