import axios from "axios";
import React from "react";
import { CoinSummary } from "../../components";
import { ReactComponent as CopyIcon } from "../../components/SVG/copyIcon.svg";
import { ReactComponent as LinkIcon } from "../../components/SVG/linkIcon.svg";
import {
  Button,
  ButtonContainer,
  Calculator,
  CalculatorContainer,
  Container,
  Currency,
  CoinDescription,
  FlexContainer,
  Input,
  Link,
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
    data: null,
    inputValue: null,
    timeFrames: ["1d", "7d", "30d", "90", "1y", "Max"],
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

  handleChange = e => {
    const sum =
      e.target.value /
      this.state.data.market_data.current_price[this.props.currency];
    this.setState({ calculatorValue: sum, inputValue: e.target.text });
  };

  componentDidMount() {
    this.fetchCoinData();
  }

  render() {
    const { data, timeFrames } = this.state;
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
            <ThemeContainer>
              {data.links.blockchain_site
                .filter((link, index) => index < 3)
                .map(link => (
                  <Theme>
                    <FlexContainer>
                      <LinkIcon />
                      <Link>{link}</Link>
                      <CopyIcon />
                    </FlexContainer>
                  </Theme>
                ))}
            </ThemeContainer>
            <ButtonContainer>
              {timeFrames.map(time => (
                <TimeFrame>
                  <Button />
                  <Time>{time}</Time>
                </TimeFrame>
              ))}
            </ButtonContainer>
            <CalculatorContainer>
              <Calculator>
                <Currency>{currency.toUpperCase()}</Currency>
                <Input
                  onChange={this.handleChange}
                  type={"number"}
                  value={this.state.inputValue}
                  thousandSeparator={true}
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
          </Wrapper>
        )}
      </Container>
    );
  }
}
export default CoinPage;
