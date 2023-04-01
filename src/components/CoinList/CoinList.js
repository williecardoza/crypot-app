import React from "react";
import {
  CoinListContainer,
  FilterContainer,
  H3,
  H4,
  LeftFilterContainer,
  RightFilterContainer,
  Select,
  StyledLeftArrow,
  StyledRightArrow,
  StyledSortByIcon,
  Th,
  Tr,
  Table,
  TableContainer,
} from "./CoinList.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCoinsPerPage,
  updateListOrder,
  updatePage,
} from "../../store/home/actions";
import CoinCard from "../CoinCard";

const CoinList = props => {
  const page = useSelector(state => state.coinList.page);
  const order = useSelector(state => state.coinList.order);
  const dispatch = useDispatch();
  return (
    <CoinListContainer>
      <H4>Market Overview</H4>
      <TableContainer>
        <FilterContainer>
          <LeftFilterContainer>
            {page <= 1 ? (
              <H3>TOP {props.coinList.length}</H3>
            ) : (
              <H3>Page {page}</H3>
            )}
            <H4>
              {order ? "By Market Cap" : "By Volume"}
              <StyledSortByIcon onClick={() => dispatch(updateListOrder())} />
            </H4>
          </LeftFilterContainer>
          <RightFilterContainer>
            <H4>show:</H4>
            <Select
              onChange={e => dispatch(updateCoinsPerPage(e.target.value))}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
            <StyledLeftArrow onClick={() => dispatch(updatePage(false))} />
            <H4>{page}</H4>
            <StyledRightArrow onClick={() => dispatch(updatePage(true))} />
          </RightFilterContainer>
        </FilterContainer>
        <Table>
          <thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>1h%</Th>
              <Th>24h%</Th>
              <Th>7d%</Th>
              <Th>24h Vol / Market</Th>
              <Th>Circulating / Total</Th>
              <Th>Last 7d</Th>
            </Tr>
          </thead>
          <tbody>
            {props.coinList.map((coin, index) => {
              return (
                <CoinCard
                  index={index + 1}
                  coin={coin}
                  key={coin.id}
                  currency={props.currency}
                />
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </CoinListContainer>
  );
};
export default CoinList;
