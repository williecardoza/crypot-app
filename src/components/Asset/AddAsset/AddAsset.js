import React, { useState } from "react";
import {
  AddAssetContainer,
  AddAssetOverlay,
  Button,
  ButtonContainer,
  CoinContainer,
  CoinDataContainer,
  CoinImageContainer,
  DropDown,
  DropDownItem,
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
} from "./AddAsset.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddAssetClick,
  fetchCoinData,
  SearchCoin,
} from "../../../store/portfolio/actions";

function AddAsset() {
  const [date, setDate] = useState("");
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [dropDown, setDropdown] = useState(false);
  const symbol = useSelector(state => state.app.symbol);
  const filteredCoinList = useSelector(
    state => state.portfolio.filteredCoinList
  );
  const dispatch = useDispatch();

  return (
    <AddAssetOverlay onClick={() => dispatch(handleAddAssetClick())}>
      <AddAssetContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <TopContainer>
          <H2>Select Coin</H2>
          <StyledExitIcon onClick={() => dispatch(handleAddAssetClick())} />
        </TopContainer>
        <MiddleContainer>
          <CoinContainer>
            <CoinImageContainer>
              <Image image={filteredCoinList.map(coin => coin.image)} />
            </CoinImageContainer>
            {coin ? <H3>{coin}</H3> : <H3>Coin</H3>}
          </CoinContainer>
          <CoinDataContainer>
            <InputContainer>
              <Input
                onChange={e => {
                  setCoin(e.target.value);
                  setDropdown(true);
                  dispatch(SearchCoin(e.target.value));
                }}
                placeholder="Coin"
                type="text"
                value={coin}
              />
              <StyledGreenArrow
                dropDown={dropDown}
                onClick={() => setDropdown(!dropDown)}
              />
            </InputContainer>
            {dropDown && coin
              ? filteredCoinList.length > 1 && (
                  <DropDown onMouseLeave={() => setDropdown(false)}>
                    {filteredCoinList.map(coin => (
                      <DropDownItem
                        key={coin.id}
                        onClick={() => {
                          setCoin(coin.id);
                          setDropdown(!dropDown);
                          dispatch(SearchCoin(coin.id));
                        }}
                      >
                        {coin.id}
                      </DropDownItem>
                    ))}
                  </DropDown>
                )
              : ""}
            <InputContainer>
              <DollarSign>{symbol}</DollarSign>
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
          <Button onClick={() => dispatch(handleAddAssetClick())} greenColor>
            Close
          </Button>
          <Button
            onClick={
              coin && date && amount
                ? () => {
                    dispatch(fetchCoinData(coin, amount, date));
                    dispatch(handleAddAssetClick());
                  }
                : null
            }
            greenBackground
          >
            Save and Continue
          </Button>
        </ButtonContainer>
      </AddAssetContainer>
    </AddAssetOverlay>
  );
}

export default AddAsset;
