import React, { useEffect } from "react";
import { Asset } from "../../components";
import {
  AddAssetButton,
  Container,
  H2,
  PortfolioList,
  Wrapper,
} from "./Portfolio.styles";
import { AddAsset } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { handleModalClick, fetchCoins } from "../../store/portfolio/actions";

const Portfolio = () => {
  const openModal = useSelector(state => state.portfolio.openModal);
  const assets = useSelector(state => state.portfolio.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets]);

  return (
    <Container>
      <Wrapper>
        <AddAssetButton onClick={() => dispatch(handleModalClick())}>
          Add Asset
        </AddAssetButton>
        <PortfolioList>
          <H2>Your Statistics</H2>
          {assets.map(coin => {
            return <Asset key={coin.currencyName} coin={coin} />;
          })}
        </PortfolioList>
      </Wrapper>
      {openModal && <AddAsset />}
    </Container>
  );
};
export default Portfolio;
