import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ReactComponent as GreenArrow } from "../../components/SVG/greenArrow.svg";
import { ReactComponent as RedArrow } from "../../components/SVG/redArrow.svg";
import { ReactComponent as PlusButton } from "../../components/SVG/plusIcon.svg";
import { ReactComponent as LinkIcon } from "../../components/SVG/linkIcon.svg";
import { formatCurrency } from "@coingecko/cryptoformat";
import { formatNumber } from "../../Utils/formatNumber";
import {
  CurrencyIcon,
  CurrencyContainer,
  CoinContainer,
  FlexContainer,
  H1,
  H2,
  H3,
  IconContainer,
  Link,
  MarketDataContainer,
  PriceContainer,
  ProfitValue,
  Span,
  StyledArrowIcon,
  StyledLayerIcon,
  Theme,
  ThemeContainer,
  ValueContainer,
  VolumeContainer,
} from "./CoinSummary.styles";

class CoinSummary extends React.Component {
  render() {
    const { data, currency } = this.props;
    return (
      <>
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
          <PriceContainer>
          <FlexContainer>
            <H1>
              {formatCurrency(
                data.market_data.current_price[currency],
                currency
              )}
            </H1>
            <StyledArrowIcon />
            <ProfitValue>
              {formatNumber(data.market_data.price_change_percentage_24h)}%
            </ProfitValue>
          </FlexContainer>
          <FlexContainer>
            <ValueContainer>
              <H3>
                Profit:{" "}
                <ProfitValue
                  value={parseInt(data.market_data.price_change_24h)}
                >
                  {formatCurrency(data.market_data.price_change_24h, currency)}
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
                {new Date(data.market_data.ath_date[currency]).toLocaleString()}
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
                {new Date(data.market_data.atl_date[currency]).toLocaleString()}
              </div>
            </H3>
          </FlexContainer>
          </PriceContainer>
        </Theme>
        <Theme>
          <MarketDataContainer>
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
            <VolumeContainer>
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

              <ThemeContainer>
                <H3>{formatNumber(data.market_data.total_volume[currency])}</H3>
                <H3>{formatNumber(data.market_data.market_cap[currency])}</H3>
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
            </VolumeContainer>
          </MarketDataContainer>
        </Theme>
      </>
    );
  }
}
export default CoinSummary;
