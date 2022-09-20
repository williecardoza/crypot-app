import React from "react";
import axios from "axios";
import { CoinCard } from "/Users/williecardoza/Desktop/portfolio-app/src/components/index.js";
import { BitcoinChart } from "/Users/williecardoza/Desktop/portfolio-app/src/components/index.js";
import { CoinListTable } from "./HomePage.styles.js";
class HomePage extends React.Component {
  state = {
    coinList: [],
    bitcoinData: [],
    dataFetched: false
  };

  getCoinList = async () => {
    try {
      const coinListURL =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";
      const { data } = await axios(coinListURL);
      this.setState({ coinList: data });
    } catch (error) {}
  };

  getBitcoinData = async () => {
    try {
      const URL =
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily";
      const { data } = await axios(URL);
      this.setState({ bitcoinData: data, dataFetched: true });
      console.log(data);
    } catch (error) {}
  };

  componentDidMount() {
    this.getCoinList();
    this.getBitcoinData();
  }

  render() {
    return (
      <>
        {this.state.dataFetched && <BitcoinChart data={this.state.bitcoinData} theme={this.props.theme}/>}
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
              return <CoinCard coin={coin} key={coin.id} />;
            })}
          </tbody>
        </CoinListTable>
      </>
    );
  }
}
export default HomePage;
