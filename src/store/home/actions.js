import axios from "axios";
import {
  GET_BITCOIN_DATA_SUCCESS,
  GET_COIN_LIST_DATA_SUCCESS,
  IS_LOADING,
  UPDATE_COINS_PER_PAGE,
  UPDATE_LIST_ORDER,
  UPDATE_PAGE,
} from "./index";

export const getBitcoinData = days => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });
    const bitcoinDataURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${
      state.app.currency
    }&days=${days}&interval=${days === 1 ? "hourly" : "daily"}`;
    const { data } = await axios(bitcoinDataURL);
    dispatch({
      type: GET_BITCOIN_DATA_SUCCESS,
      payload: [data, days, false],
    });
  } catch (error) {}
};

export const getCoinList = () => async (dispatch, getState) => {
  const state = getState();
  const { coinsPerPage, page, order } = state.coinList;
  try {
    const coinListURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
      state.app.currency
    }&order=${
      order ? "                                market_cap" : "volume"
    }_desc&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
    const { data } = await axios(coinListURL);
    dispatch({
      type: GET_COIN_LIST_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

export const updateCoinsPerPage = amount => (dispatch, getState) => {
  dispatch({
    type: UPDATE_COINS_PER_PAGE,
    payload: amount,
  });
};

export const updateListOrder = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: UPDATE_LIST_ORDER,
    payload: !state.coinList.order,
  });
};

export const updatePage = update => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: UPDATE_PAGE,
    payload: update
      ? state.coinList.page + 1
      : state.coinList.page > 1
      ? state.coinList.page - 1
      : 1,
  });
};
