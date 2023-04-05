import axios from "axios";
import { GET_COIN_DATA_SUCCESS, GET_COIN_HISTORY_SUCCESS } from "./index";

export const getCoinData = coinName => async (dispatch, getState) => {
  try {
    const coinURL = `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`;
    const { data } = await axios(coinURL);
    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

export const getCoinHistory = (coin, days) => async (dispatch, getState) => {
  const state = getState();
  try {
    const coinURL = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${
      state.app.currency
    }&days=${days}&interval=${days === 1 ? "hourly" : "daily"}`;
    const { data } = await axios(coinURL);
    dispatch({
      type: GET_COIN_HISTORY_SUCCESS,
      payload: [data, days],
    });
  } catch (error) {}
};
