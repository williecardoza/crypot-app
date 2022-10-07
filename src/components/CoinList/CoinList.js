import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CoinListContainer, Th, Tr, Table } from "./CoinList.styles";
import CoinCard from "../CoinCard";
class CoinList extends React.Component {
  state = {
    coinList: this.props.coinList,
  };
  render() {
    return (
      <CoinListContainer>
        <h2>Your Overview</h2>
        <Table>
          <InfiniteScroll
            dataLength={this.state.coinList.length}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            height={550}
          >
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
                return (
                  <CoinCard
                    coin={coin}
                    key={coin.id}
                    currency={this.props.currency}
                  />
                );
              })}
            </tbody>
          </InfiniteScroll>
        </Table>
      </CoinListContainer>
    );
  }
}
export default CoinList;
