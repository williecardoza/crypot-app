import React, { useEffect } from "react";
import CoinList from "../../components/CoinList";
import BarChart from "../../components/BitcoinCharts/BarChart";
import LineChart from "../../components/BitcoinCharts/LineChart";
import { useDispatch, useSelector } from "react-redux";
import { getBitcoinData, getCoinList } from "../../store/home/actions";
import {
  BitcoinChartContainer,
  ChartContainer,
  CoinListContainer,
  Container,
  H2,
  LoadingSpinner,
  TableContainer,
  Wrapper,
} from "./HomePage.styles";

const HomePage = () => {
  const currency = useSelector(state => state.app.currency);
  const coinList = useSelector(state => state.coinList.coinList);
  const coinsPerPage = useSelector(state => state.coinList.coinsPerPage);
  const isLoading = useSelector(state => state.coinList.isLoading);
  const page = useSelector(state => state.coinList.page);
  const order = useSelector(state => state.coinList.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinList());
    dispatch(getBitcoinData(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getCoinList());
    dispatch(getBitcoinData(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  useEffect(() => {
    dispatch(getCoinList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinsPerPage, page, order]);

  return (
    <Wrapper>
      <Container>
        <H2>Bitcoin Overview</H2>
        <BitcoinChartContainer>
          <ChartContainer>
            {isLoading ? <LoadingSpinner /> : <LineChart />}
          </ChartContainer>
          <ChartContainer>
            {isLoading ? <LoadingSpinner /> : <BarChart />}
          </ChartContainer>
        </BitcoinChartContainer>
        <CoinListContainer>
          <H2>Market Overview</H2>
          <TableContainer>
            {isLoading ? (
              <LoadingSpinner />
            ) : coinList ? (
              <CoinList coinList={coinList} currency={currency} />
            ) : (
              <LoadingSpinner />
            )}
          </TableContainer>
        </CoinListContainer>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
