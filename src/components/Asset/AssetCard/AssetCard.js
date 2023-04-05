import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  handleUpdateAssetClick,
  RemoveCoin,
  UpdateCoinData,
} from "../../../store/portfolio/actions";
import { useDispatch } from "react-redux";
import {
  AssetCardContainer,
  AssetCardWrapper,
  CoinImageContainer,
  CoinContainer,
  ColoredSpan,
  DataContainer,
  EditContainer,
  FlexContainer,
  Image,
  H1,
  H3,
  MarketDataContainer,
  StyledArrowIcon,
  StyledRemoveIcon,
  StyledEditIcon,
  Span,
} from "./AssetCard.styles";

const AssetCard = ({ coin }) => {
  const dispatch = useDispatch();
  const numeral = require("numeral");
  return (
    <AssetCardContainer>
      <AssetCardWrapper>
        <CoinContainer>
          <CoinImageContainer>
            <Image image={coin.image}></Image>
          </CoinImageContainer>
          <H1>{coin.name}</H1>
        </CoinContainer>

        <DataContainer>
          <H3>Market Price:</H3>
          <MarketDataContainer>
            <FlexContainer>
              <H3>Current Price:</H3>
              <Span>${coin.current_price}</Span>
            </FlexContainer>
            <FlexContainer>
              <H3>PriceChange 24h:</H3>
              <StyledArrowIcon value={coin.priceChange24H} />
              <ColoredSpan value={coin.priceChange24H}>
                ${coin.priceChange24H}
              </ColoredSpan>
            </FlexContainer>
            <FlexContainer>
              <H3>Market Cap vs Vol </H3>
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
              <H3>Circ Sup vs Max sup: </H3>
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

          <FlexContainer>
            <H3>Your Coin:</H3>
            <EditContainer
              onClick={() => {
                dispatch(handleUpdateAssetClick());
                dispatch(UpdateCoinData(coin.name));
              }}
            >
              <StyledEditIcon />
            </EditContainer>
            <StyledRemoveIcon onClick={() => dispatch(RemoveCoin(coin.id))} />
          </FlexContainer>
          <MarketDataContainer>
            <FlexContainer>
              <H3>Coin Amount:</H3>
              <Span> {coin.coinAmount.toFixed(5)}</Span>
            </FlexContainer>
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
              Purchase Date <Span>{coin.date}</Span>
            </H3>
          </MarketDataContainer>
        </DataContainer>
      </AssetCardWrapper>
    </AssetCardContainer>
  );
};

export default AssetCard;
