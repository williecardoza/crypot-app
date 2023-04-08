import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";
import { ReactComponent as GreenArrow } from "../../components/SVG/greenArrow.svg";
import { ReactComponent as RedArrow } from "../../components/SVG/redArrow.svg";
import { ReactComponent as PlusButton } from "../../components/SVG/plusIcon.svg";
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
  StyledLinkIcon,
  ThemeContainer,
  ValueContainer,
  VolumeContainer,
} from "./CoinSummary.styles";

const CoinSummary = props => {
  const symbol = useSelector(state => state.app.symbol);
  const handleClickedLink = link => {
    window.open(link);
  };
  const { data, currency } = props;
  return (
    <>
      <CurrencyContainer>
        <CoinContainer>
          <IconContainer>
            <CurrencyIcon image={data.image.large} />
          </IconContainer>
          <H2>
            {data.name}({data.symbol.toUpperCase()})
          </H2>
        </CoinContainer>

        <FlexContainer>
          <Link href={data.links.homepage[0]}>{data.links.homepage[0]}</Link>
          <StyledLinkIcon
            onClick={() => handleClickedLink(data.links.homepage[0])}
          />
        </FlexContainer>
      </CurrencyContainer>

      <PriceContainer>
        <div>
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
        </div>
      </PriceContainer>

      <MarketDataContainer>
        <div>
          <FlexContainer>
            <PlusButton />
            <H3>
              Market Cap:{" "}
              <Span>
                {symbol}
                {formatNumber(data.market_data.market_cap[currency])}
              </Span>{" "}
            </H3>
          </FlexContainer>

          <FlexContainer>
            <PlusButton />
            <H3>
              Fully Diluted:{" "}
              <Span>
                {symbol}
                {formatNumber(
                  data.market_data.fully_diluted_valuation[currency]
                )}
              </Span>
            </H3>
          </FlexContainer>
          <FlexContainer>
            <PlusButton />
            <H3>
              Vol/Market Cap:{" "}
              <Span>
                {symbol}
                {(
                  data.market_data.total_volume[currency] /
                  data.market_data.market_cap[currency]
                ).toFixed(4)}
              </Span>
            </H3>
          </FlexContainer>
          <VolumeContainer>
            <FlexContainer>
              <PlusButton />
              <H3>
                Total volume:{" "}
                <Span>
                  {symbol}
                  {formatNumber(data.market_data.total_volume[currency])}
                </Span>
              </H3>
            </FlexContainer>
            <FlexContainer>
              <PlusButton />
              <H3>
                Circ Supply:{" "}
                <Span>
                  {symbol}
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
                  {formatNumber(data.market_data.total_supply)}{" "}
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
        </div>
      </MarketDataContainer>
    </>
  );
};
export default CoinSummary;
