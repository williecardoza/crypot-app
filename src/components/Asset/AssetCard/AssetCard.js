import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  AssetCardContainer,
  AssetCardWrapper,
  CoinImageContainer,
  CoinContainer,
  ColoredSpan,
  DataContainer,
  EditContainer,
  EditCoinContainer,
  FlexContainer,
  Image,
  H1,
  H3,
  MarketDataContainer,
  StyledArrowIcon,
  Span,
} from "./AssetCard.styles";
import { ReactComponent as EditIcon } from "../../SVG/editIcon.svg";

const AssetCard = ({ coin }) => {
  const numeral = require("numeral");
  return (
    <AssetCardContainer>
      <AssetCardWrapper>
        <CoinContainer>
          <CoinImageContainer>
            <Image image={coin.image}></Image>
          </CoinImageContainer>
          <H1>{coin.currencyName}</H1>
        </CoinContainer>

        <DataContainer>
          <EditCoinContainer>
            <H3>Market Price:</H3>
            <EditContainer>
              <EditIcon />
            </EditContainer>
          </EditCoinContainer>
          <MarketDataContainer>
            <H3>
              Current Price: <Span>${coin.currentPrice}</Span>
            </H3>
            <FlexContainer>
              <H3>PriceChange 24h:</H3>
              <StyledArrowIcon value={coin.priceChange24H} />
              <ColoredSpan value={coin.priceChange24H}>
                ${numeral(coin.priceChange24H).format()}
              </ColoredSpan>
            </FlexContainer>
            <FlexContainer>
              <H3>Market Cap vs Volume </H3>
              <ProgressBar
                animateOnRender={true}
                completed={parseInt(coin.marketCapVsVolume.toFixed())}
                isLabelVisible={true}
                baseBgColor={"#00FC2A"}
                bgColor={"#FFFFFF"}
                height={"9px"}
                margin={"5px"}
                labelAlignment={"outside"}
                width={"60px"}
              />
            </FlexContainer>
            <FlexContainer>
              <H3>Circ Supply vs Max supply: </H3>
              <ProgressBar
                animateOnRender={true}
                completed={
                  coin.circulatingSupplyVsMax
                    ? parseInt(coin.marketCapVsVolume.toFixed())
                    : 0
                }
                isLabelVisible={true}
                baseBgColor={"#00FC2A"}
                bgColor={"#FFFFFF"}
                height={"9px"}
                margin={"5px"}
                labelAlignment={"outside"}
                width={"60px"}
              />
            </FlexContainer>
          </MarketDataContainer>

          <EditCoinContainer>
            <H3>Your Coin:</H3>
            <EditContainer>
              <EditIcon />
            </EditContainer>
          </EditCoinContainer>
          <MarketDataContainer>
            <H3>
              Coin Amount: <Span>{coin.coinAmount.toFixed(5)}</Span>
            </H3>
            <FlexContainer>
              <H3>Amount Value:</H3>
              <StyledArrowIcon value={coin.amountValue} />
              <ColoredSpan value={coin.amountValue}>
                ${numeral(coin.amountValue).format()}
              </ColoredSpan>
            </FlexContainer>
            <FlexContainer>
              <H3>Price Change since Purchase:</H3>
              <StyledArrowIcon value={coin.priceChangeSince} />
              <ColoredSpan value={coin.priceChangeSince}>
                ${numeral(coin.priceChangeSince).format()}
              </ColoredSpan>
            </FlexContainer>
            <H3>
              Purchase Date <Span>{coin.purchaseDate}</Span>
            </H3>
          </MarketDataContainer>
        </DataContainer>
      </AssetCardWrapper>
    </AssetCardContainer>
  );
};

export default AssetCard;
