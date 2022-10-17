import React, { useState, useEffect } from "react";
import axios from "axios";
import BitcoinChart from "../../components/BitcoinChart";
import CoinList from "../../components/CoinList";

const HomePage = props => {
  const [coinList, setCoinList] = useState([]);
  const [data, setData] = useState(null);

  const getCoinList = async () => {
    try {
      const coinListURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
      const { data } = await axios(coinListURL);
      setCoinList(data);
    } catch (error) {}
  };

  const getBitcoinData = async () => {
    try {
      const bitcoinDataURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.currency}&days=180&interval=daily`;
      const { data } = await axios(bitcoinDataURL);
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    getCoinList();
    getBitcoinData();
  });

  return (
    <>
      {data && <BitcoinChart data={data} currency={props.currency} />}
      <CoinList coinList={coinList} currency={props.currency} />
    </>
  );
};
export default HomePage;
