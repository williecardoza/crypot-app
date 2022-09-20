import React from "react";
import { formatCurrency } from "@coingecko/cryptoformat";

class CoinCard extends React.Component {
  render() {
    return (
      <tr key={this.props.coin.id}>
        <td>{this.props.coin.market_cap_rank}</td>
        <td>{this.props.coin.name}</td>
        <td>{formatCurrency(this.props.coin.current_price, "USD", "en")}</td>
        <td>{this.props.coin.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
        <td>{this.props.coin.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
        <td>{this.props.coin.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
        <td>
          <td>{this.props.coin.total_volume}</td>
          <td>{this.props.coin.market_cap}</td>
        </td>
        <td>
          <td>{this.props.coin.circulating_supply.toString().split("-", 3)}</td>
          <td>{this.props.coin.total_supply}</td>
        </td>
      </tr>
    );
  }
}
export default CoinCard;
