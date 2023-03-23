import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { RemoveCoin } from "../../../store/portfolio/actions";
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
            <H3>
              Current Price: <Span>${coin.current_price}</Span>
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

          <FlexContainer>
            <H3>Your Coin:</H3>
            <EditContainer>
              <StyledEditIcon />
            </EditContainer>
            <StyledRemoveIcon onClick={() => dispatch(RemoveCoin(coin.name))} />
          </FlexContainer>
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
              Purchase Date <Span>{coin.date}</Span>
            </H3>
          </MarketDataContainer>
        </DataContainer>
      </AssetCardWrapper>
    </AssetCardContainer>
  );
};

export default AssetCard;
