import React, { useEffect } from "react";
import { Asset, AddAsset, UpdateAsset } from "../../components";
import {
  AddAssetButton,
  Container,
  H2,
  PortfolioList,
  Wrapper,
} from "./Portfolio.styles";
import { useDispatch, useSelector } from "react-redux";
import { handleAddAssetClick, fetchCoins } from "../../store/portfolio/actions";

const Portfolio = () => {
  const addAssetModal = useSelector(state => state.portfolio.addAssetModal);
  const updateAssetModal = useSelector(
    state => state.portfolio.updateAssetModal
  );
  const assets = useSelector(state => state.portfolio.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Wrapper>
        <AddAssetButton onClick={() => dispatch(handleAddAssetClick())}>
          Add Asset
        </AddAssetButton>
        <PortfolioList>
          <H2>Your Statistics</H2>
          {assets.map(coin => {
            return <Asset key={coin.name} coin={coin} />;
          })}
        </PortfolioList>
      </Wrapper>
      {addAssetModal && <AddAsset />}
      {updateAssetModal && <UpdateAsset />}
    </Container>
  );
};
export default Portfolio;
