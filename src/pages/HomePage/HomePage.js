import React from "react";
import axios from "axios";
import BitcoinChart from "../../components/BitcoinChart";
import CoinList from "../../components/CoinList";

class HomePage extends React.Component {
  state = {
    coinList: [],
    currency: this.props.currency,
    data: [],
    dataFetched: false,
  };

  getCoinList = async () => {
    try {
      const coinListURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
      const { data } = await axios(coinListURL);
      this.setState({ coinList: data });
    } catch (error) {}
  };

  getBitcoinData = async () => {
    try {
      const bitcoinDataURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.state.currency}&days=180&interval=daily`;
      const { data } = await axios(bitcoinDataURL);
      this.setState({
        data: data,
        dataFetched: true,
      });
    } catch (error) {}
  };

  componentDidMount() {
    this.getCoinList();
    this.getBitcoinData();
  }

  render() {
    return (
      <>
        {this.state.dataFetched && (
          <BitcoinChart data={this.state.data} currency={this.state.currency} />
        )}
        <CoinList
          coinList={this.state.coinList}
          currency={this.state.currency}
        />
      </>
    );
  }
}
export default HomePage;
