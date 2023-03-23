import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  CoinContainer,
  CoinDataContainer,
  CoinImageContainer,
  FloatingSpan,
  DollarSign,
  H2,
  H3,
  Input,
  InputContainer,
  Image,
  MiddleContainer,
  StyledExitIcon,
  StyledGreenArrow,
  TopContainer,
  UpdateAssetContainer,
  UpdateAssetOverlay,
} from "./UpdateAsset.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  handleUpdateAssetClick,
  fetchCoinData,
} from "../../../store/portfolio/actions";

function UpdateAsset() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const coin = useSelector(state => state.portfolio.filteredCoinList);
  const { name, image } = coin[0];

  return (
    <UpdateAssetOverlay onClick={() => dispatch(handleUpdateAssetClick())}>
      <UpdateAssetContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <TopContainer>
          <H2>Update Coin</H2>
          <StyledExitIcon onClick={() => dispatch(handleUpdateAssetClick())} />
        </TopContainer>
        <MiddleContainer>
          <CoinContainer>
            <CoinImageContainer>
              <Image image={image} />
            </CoinImageContainer>
            {coin ? <H3>{name}</H3> : <H3>Coin</H3>}
          </CoinContainer>
          <CoinDataContainer>
            <InputContainer>
              <Input readOnly type="text" value={name} />
              <StyledGreenArrow />
            </InputContainer>

            <InputContainer>
              <DollarSign>$</DollarSign>
              <Input
                onChange={e => setAmount(e.target.value)}
                placeholder="Purchased Amount"
                type={"number"}
                value={amount}
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                onChange={e => setDate(e.target.value)}
                value={date}
              />
              <FloatingSpan date={date}>DD-MM-YYYY</FloatingSpan>
            </InputContainer>
          </CoinDataContainer>
        </MiddleContainer>
        <ButtonContainer>
          <Button onClick={() => dispatch(handleUpdateAssetClick())} greenColor>
            Close
          </Button>
          <Button
            onClick={
              name && date && amount
                ? () => {
                    dispatch(fetchCoinData(name.toLowerCase(), amount, date));
                    dispatch(handleUpdateAssetClick());
                  }
                : null
            }
            greenBackground
          >
            Save and Continue
          </Button>
        </ButtonContainer>
      </UpdateAssetContainer>
    </UpdateAssetOverlay>
  );
}

export default UpdateAsset;
