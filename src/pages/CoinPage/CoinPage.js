import axios from "axios";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { formatCurrency } from "@coingecko/cryptoformat";
import { formatNumber } from "../../Utils/formatNumber";
import { ReactComponent as GreenArrow } from "../../components/SVG/greenArrow.svg";
import { ReactComponent as RedArrow } from "../../components/SVG/redArrow.svg";
import { ReactComponent as CopyIcon } from "../../components/SVG/copyIcon.svg";
import { ReactComponent as LinkIcon } from "../../components/SVG/linkIcon.svg";
import { ReactComponent as PlusButton } from "../../components/SVG/plusIcon.svg";
import {
  Button,
  ButtonContainer,
  IconContainer,
  Calculator,
  CalculatorContainer,
  Container,
  CurrencyIcon,
  CurrencyContainer,
  Currency,
  CoinContainer,
  CoinDescription,
  FlexContainer,
  H1,
  H2,
  H3,
  Link,
  ProfitValue,
  Span,
  StyledExchangeIcon,
  StyledLayerIcon,
  StyledArrowIcon,
  Time,
  TimeFrame,
  ThemeContainer,
  Theme,
  Value,
  ValueContainer,
  Wrapper,
} from "./CoinPage.styles";
class CoinPage extends React.Component {
  state = {
    data: null,
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
              <CurrencyContainer>
                <Theme>
                  <CoinContainer>
                    <IconContainer>
                      <CurrencyIcon image={data.image.large} />
                    </IconContainer>
                    <H2>
                      {data.name}({data.symbol.toUpperCase()})
                    </H2>
                  </CoinContainer>
                </Theme>
                <Theme>
                  <FlexContainer>
                    <LinkIcon />
                    <Link href={data.links.homepage[0]}>
                      {data.links.homepage[0]}
                    </Link>
                  </FlexContainer>
                </Theme>
              </CurrencyContainer>
              <Theme>
                <FlexContainer>
                  <H1>
                    {formatCurrency(
                      data.market_data.current_price[currency],
                      currency
                    )}
                  </H1>
                  <StyledArrowIcon />
                  <ProfitValue>
                    {formatNumber(data.market_data.price_change_percentage_24h)}
                    %
                  </ProfitValue>
                </FlexContainer>
                <FlexContainer>
                  <ValueContainer>
                    <H3>
                      Profit:{" "}
                      <ProfitValue
                        value={parseInt(data.market_data.price_change_24h)}
                      >
                        {formatCurrency(
                          data.market_data.price_change_24h,
                          currency
                        )}
                      </ProfitValue>
                    </H3>
                  </ValueContainer>
                </FlexContainer>

                <StyledLayerIcon />
                <FlexContainer>
                  <GreenArrow />
                  <H3>
                    All Time High:{" "}
                    <Span>
                      {formatCurrency(data.market_data.ath[currency], currency)}
                    </Span>
                    <div>
                      {new Date(
                        data.market_data.ath_date[currency]
                      ).toLocaleString()}
                    </div>
                  </H3>
                </FlexContainer>
                <FlexContainer>
                  <RedArrow />
                  <H3>
                    All Time Low:{" "}
                    <Span>
                      {formatCurrency(data.market_data.atl[currency], currency)}
                    </Span>
                    <div>
                      {new Date(
                        data.market_data.atl_date[currency]
                      ).toLocaleString()}
                    </div>
                  </H3>
                </FlexContainer>
              </Theme>

              <Theme>
                <FlexContainer>
                  <PlusButton />
                  <H3>
                    Market Cap:{" "}
                    <Span>
                      {formatCurrency(
                        data.market_data.market_cap[currency],
                        currency
                      )}
                    </Span>{" "}
                  </H3>
                </FlexContainer>

                <FlexContainer>
                  <PlusButton />
                  <H3>
                    Fully Diluted Valuation:{" "}
                    <Span>
                      {formatCurrency(
                        data.market_data.fully_diluted_valuation[currency],
                        currency
                      )}
                    </Span>
                  </H3>
                </FlexContainer>
                <FlexContainer>
                  <PlusButton />
                  <H3>
                    Volume/Market Cap:{" "}
                    <Span>
                      {formatCurrency(
                        (data.market_data.total_volume[currency] /
                          data.market_data.market_cap[currency]) *
                          100,
                        currency
                      )}
                    </Span>
                  </H3>
                </FlexContainer>
                <FlexContainer>
                  <PlusButton />
                  <H3>
                    Total volume:{" "}
                    <Span>
                      {formatCurrency(
                        data.market_data.total_volume[currency],
                        currency
                      )}
                    </Span>
                  </H3>
                </FlexContainer>
                <FlexContainer>
                  <PlusButton />
                  <H3>
                    Circulating Supply:{" "}
                    <Span>
                      {formatCurrency(
                        data.market_data.circulating_supply,
                        currency
                      )}
                    </Span>
                  </H3>
                </FlexContainer>
                <FlexContainer>
                  <PlusButton />
                  <H3>
                    Max Supply:{" "}
                    <Span>
                      {formatCurrency(data.market_data.total_supply, currency)}{" "}
                      {data.symbol.toUpperCase()}
                    </Span>
                  </H3>
                </FlexContainer>
                <div>
                  <ThemeContainer>
                    <H3>
                      {formatNumber(data.market_data.total_volume[currency])}
                    </H3>
                    <H3>
                      {formatNumber(data.market_data.market_cap[currency])}
                    </H3>
                  </ThemeContainer>
                  <ProgressBar
                    completed={
                      (data.market_data.total_volume[currency] /
                        data.market_data.market_cap[currency]) *
                      100
                    }
                    isLabelVisible={false}
                    baseBgColor={"#707070"}
                    bgColor={"#ff8200"}
                    height={"10px"}
                    width={"100%"}
                  />
                </div>
              </Theme>
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
              <Theme>
                <FlexContainer>
                  <LinkIcon />
                  <Link>{data.links.blockchain_site[0]}</Link>
                  <CopyIcon />
                </FlexContainer>
              </Theme>
              <Theme>
                <FlexContainer>
                  <LinkIcon />
                  <Link>{data.links.blockchain_site[1]}</Link>
                  <CopyIcon />
                </FlexContainer>
              </Theme>
              <Theme>
                <FlexContainer>
                  <LinkIcon />
                  <Link>{data.links.blockchain_site[2]}</Link>
                  <CopyIcon />
                </FlexContainer>
              </Theme>
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
                <Value>1</Value>
              </Calculator>
              <StyledExchangeIcon />
              <Calculator>
                <Currency>{data.symbol.toUpperCase()}</Currency>
                <Value>1</Value>
              </Calculator>
            </CalculatorContainer>
          </Wrapper>
        )}
      </Container>
    );
  }
}
export default CoinPage;
