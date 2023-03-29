import React, { useEffect } from "react";
import BitcoinChart from "../../components/BitcoinChart";
import CoinList from "../../components/CoinList";
import { useDispatch, useSelector } from "react-redux";
import { getBitcoinData, getCoinList } from "../../store/home/actions";
import { Container, Wrapper } from "./HomePage.styles";

const HomePage = () => {
  const bitcoinData = useSelector(state => state.coinList.bitcoinData);
  const coinList = useSelector(state => state.coinList.coinList);
  const currency = useSelector(state => state.app.currency);
  const coinsPerPage = useSelector(state => state.coinList.coinsPerPage);
  const page = useSelector(state => state.coinList.page);
  const order = useSelector(state => state.coinList.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinList());
    dispatch(getBitcoinData(currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getCoinList());
    dispatch(getBitcoinData(currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  useEffect(() => {
    dispatch(getCoinList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinsPerPage, page, order]);

  return (
    <Wrapper>
      <Container>
        {bitcoinData && <BitcoinChart data={bitcoinData} currency={currency} />}
        {coinList && <CoinList coinList={coinList} currency={currency} />}
      </Container>
    </Wrapper>
  );
};

export default HomePage;
