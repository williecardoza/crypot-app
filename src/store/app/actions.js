import axios from "axios";
import {
  FETCH_COIN_LIST_SUCCESS,
  FILTER_COIN_LIST,
  GET_MARKET_DATA_SUCCESS,
  UPDATE_CURRENT_MOBILE_PAGE,
  UPDATE_THEME,
  UPDATE_CURRENCY,
} from "./index";

export const fetchCoins = () => async (dispatch, getState) => {
  const state = getState();
  const currency = state.app.currency;
  try {
    const coinListURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`;
    const { data } = await axios(coinListURL);
    dispatch({
      type: FETCH_COIN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

export const getMarketData = () => async (dispatch, getState) => {
  try {
    const marketDataURL = "https://api.coingecko.com/api/v3/global";
    const { data } = await axios(marketDataURL);
    dispatch({
      type: GET_MARKET_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

export const handleThemeChange = () => {
  return {
    type: UPDATE_THEME,
  };
};

export const handleSelectedCurrency = (currency, symbol) => {
  return {
    type: UPDATE_CURRENCY,
    payload: [currency, symbol],
  };
};

export const SearchCoin = coinName => async (dispatch, getState) => {
  const state = getState();
  const filteredSearch = state.app.coinList.filter(coin =>
    coin.id.includes(coinName)
  );
  dispatch({
    type: FILTER_COIN_LIST,
    payload: filteredSearch,
  });
};

export const updateCurrentMobilePage = page => {
  return {
    type: UPDATE_CURRENT_MOBILE_PAGE,
    payload: page,
  };
};
