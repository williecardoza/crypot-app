import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData, getCoinHistory } from "../../store/coin/actions";
import { CoinSummary } from "../../components";
import { CoinPageChart } from "../../components";
import {
  Button,
  ButtonContainer,
  CalculatorContainer,
  ChartContainer,
  Container,
  Currency,
  CoinDescription,
  H2,
  Input,
  InputContainer,
  StyledExchangeIcon,
  StyledLayerIcon,
  SummaryContainer,
  Symbol,
  Theme,
  Wrapper,
} from "./CoinPage.styles";

const CoinPage = props => {
  const [amountValue, setAmountValue] = useState("");
  const [coinValue, setCoinValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const data = useSelector(state => state.coin.data);
  const coinHistory = useSelector(state => state.coin.coinHistory);
  const currency = useSelector(state => state.app.currency);
  const interval = useSelector(state => state.coin.interval);
  const symbol = useSelector(state => state.app.symbol);
  const dispatch = useDispatch();

  const handleAmountConversion = e => {
    const sum = e.target.value / data.market_data.current_price[currency];
    setCoinValue(sum);
    setInputValue(e.target.value);
    setAmountValue("");
  };

  const handleCoinConversion = e => {
    const sum = e.target.value * data.market_data.current_price[currency];
    setAmountValue(sum);
    setInputValue(e.target.value);
    setCoinValue("");
  };

  useEffect(() => {
    dispatch(getCoinData(props.match.params.coinId.toLowerCase()));
    dispatch(getCoinHistory(props.match.params.coinId.toLowerCase(), interval));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, props.match.params.coinId]);

  return (
    <Container>
      {data && (
        <Wrapper>
          <H2>Coin Summary</H2>
          <SummaryContainer>
            <CoinSummary data={data} currency={currency} />
          </SummaryContainer>
          <H2>Description</H2>
          <Theme>
            <StyledLayerIcon />
            <CoinDescription
              dangerouslySetInnerHTML={{
                __html: data.description.en,
              }}
            ></CoinDescription>
          </Theme>
          <CalculatorContainer>
            <InputContainer>
              <Currency>{currency.toUpperCase()}</Currency>
              <Symbol>{symbol}</Symbol>
              <Input
                onChange={e => handleAmountConversion(e)}
                type={"number"}
                value={coinValue ? inputValue : amountValue}
              ></Input>
            </InputContainer>
            <StyledExchangeIcon />
            <InputContainer>
              <Currency>{data.symbol.toUpperCase()}</Currency>
              <Input
                onChange={e => handleCoinConversion(e)}
                type={"number"}
                value={
                  amountValue
                    ? inputValue
                    : coinValue
                    ? coinValue.toFixed(6)
                    : ""
                }
              />
            </InputContainer>
          </CalculatorContainer>
          <ButtonContainer>
            <Button
              interval={interval}
              onClick={() => {
                dispatch(getCoinHistory(data.id, 1));
              }}
              value={1}
            >
              1d
            </Button>
            <Button
              interval={interval}
              onClick={() => {
                dispatch(getCoinHistory(data.id, 7));
              }}
              value={7}
            >
              7d
            </Button>
            <Button
              interval={interval}
              onClick={() => {
                dispatch(getCoinHistory(data.id, 31));
              }}
              value={31}
            >
              1m
            </Button>
            <Button
              interval={interval}
              onClick={() => {
                dispatch(getCoinHistory(data.id, 90));
              }}
              value={90}
            >
              3m
            </Button>
            <Button
              interval={interval}
              onClick={() => {
                dispatch(getCoinHistory(data.id, 365));
              }}
              value={365}
            >
              1y
            </Button>
            <Button
              interval={interval}
              onClick={() => {
                dispatch(getCoinHistory(data.id, 1800));
              }}
              value={1800}
            >
              5y
            </Button>
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
