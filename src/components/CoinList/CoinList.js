import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CoinListContainer, Th, Tr, Table } from "./CoinList.styles";
import CoinCard from "../CoinCard";

const CoinList = (props) => {
  return(
    <CoinListContainer>
        <h2>Your Overview</h2>
        <Table>
          <InfiniteScroll
            dataLength={props.coinList.length}
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
              {props.coinList.map(coin => {
                return (
                  <CoinCard
                    coin={coin}
                    key={coin.id}
                    currency={props.currency}
                  />
                );
              })}
            </tbody>
          </InfiniteScroll>
        </Table>
      </CoinListContainer>
  )
}
export default CoinList;
