import React from "react";
import { CoinListContainer, Th, Tr, Table } from "./CoinList.styles";
import CoinCard from "../CoinCard";
class CoinList extends React.Component {
  render() {
    return (
      <CoinListContainer>
        <h2>Your Overview</h2>
        <Table>
          <thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>1h%</Th>
              <Th>24h%</Th>
              <Th>7d%</Th>
              <Th>24h Volume/Market Cap</Th>
              <Th>Circulating/TotalSupply</Th>
              <Th>Last 7d</Th>
            </Tr>
          </thead>
          <tbody>
            {this.props.coinList.map(coin => {
              return <CoinCard coin={coin} key={coin.id} />;
            })}
          </tbody>
        </Table>
      </CoinListContainer>
    );
  }
}
export default CoinList;
