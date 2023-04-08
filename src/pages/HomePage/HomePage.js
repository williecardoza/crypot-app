import React, { useEffect } from "react";
import CoinList from "../../components/CoinList";
import BarChart from "../../components/BitcoinCharts/BarChart";
import LineChart from "../../components/BitcoinCharts/LineChart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getBitcoinData, getCoinList } from "../../store/home/actions";
import {
  BitcoinChartContainer,
  Button,
  CoinListContainer,
  Container,
  H2,
  IntervalContainer,
  LoadingSpinner,
  MobileContainer,
  TableContainer,
  Wrapper,
} from "./HomePage.styles";

const HomePage = () => {
  const chartLoading = useSelector(state => state.coinList.chartLoading);
  const currency = useSelector(state => state.app.currency);
  const coinList = useSelector(state => state.coinList.coinList);
  const coinsPerPage = useSelector(state => state.coinList.coinsPerPage);
  const coinListLoading = useSelector(state => state.coinList.coinListLoading);
  const interval = useSelector(state => state.coinList.interval);
  const page = useSelector(state => state.coinList.page);
  const order = useSelector(state => state.coinList.order);
  const dispatch = useDispatch();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <Container>
      <Wrapper>
        <H2>Bitcoin Overview</H2>
        <MobileContainer>
          {chartLoading ? (
            <LoadingSpinner position={true} />
          ) : (
            <Slider {...settings}>
              <LineChart />

              <BarChart />
            </Slider>
          )}
        </MobileContainer>
        <IntervalContainer>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(1))}
            value={1}
          >
            1d
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(7))}
            value={7}
          >
            1w
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(31))}
            value={31}
          >
            1m
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(90))}
            value={90}
          >
            3m
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(180))}
            value={180}
          >
            6m
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(365))}
            value={365}
          >
            1y
          </Button>
        </IntervalContainer>
        <BitcoinChartContainer>
          <LineChart />

          <BarChart />
        </BitcoinChartContainer>
        <CoinListContainer>
          <H2>Market Overview</H2>
          <TableContainer>
            {coinListLoading ? (
              <LoadingSpinner position={false} />
            ) : coinList ? (
              <CoinList coinList={coinList} currency={currency} />
            ) : (
              <LoadingSpinner />
            )}
          </TableContainer>
        </CoinListContainer>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
