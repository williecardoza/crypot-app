import React from "react";
import axios from "axios";
import { CoinCard } from "/Users/williecardoza/Desktop/portfolio-app/src/components/index.js";
import { CoinListTable } from "./CoinList.styles.js";
class CoinList extends React.Component {
  state = {
    coinList: [],
  };

  getCoinList = async () => {
    try {
      const coinListURL =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";
      const { data } = await axios(coinListURL);
      console.log(data);
      this.setState({ coinList: data });
    } catch (error) {}
  };

  componentDidMount() {
    this.getCoinList();
  }

  render() {
    return (
      <CoinListTable>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h%</th>
          <th>24h%</th>
          <th>7d%</th>
          <th>24h Volume/Market Cap</th>
          <th>Circulating/TotalSupply</th>
          <th>Last 7d</th>
        </thead>
        <tbody>
          {this.state.coinList.map(coin => {
            return <CoinCard coin={coin}/>;
          })}
        </tbody>
      </CoinListTable>
    );
  }
}
export default CoinList;
