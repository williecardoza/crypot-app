import axios from "axios";
import {
  FETCH_COIN_LIST_SUCCESS,
  FILTER_COIN_LIST,
  MODAL_CLICKED,
  GET_ASSETS_SUCCESS,
  REMOVE_ASSET_SUCCESS,
} from "./index";

export const handleModalClick = () => {
  return {
    type: MODAL_CLICKED,
  };
};

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

export const fetchCoinData =
  (coinName, amount, date) => async (dispatch, getState) => {
    const state = getState();
    const currency = state.app.currency;
    try {
      const previousDataURL = `https://api.coingecko.com/api/v3/coins/${coinName}/history?date=${date}`;
      const currentDataURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinName}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
      const previous = await axios(previousDataURL);
      const { data } = await axios(currentDataURL);
      const previousPrice = previous.data.market_data.current_price.usd;
      const {
        current_price,
        circulating_supply,
        image,
        market_cap,
        name,
        price_change_24h,
        total_supply,
        total_volume,
      } = data[0];

      const coin = {
        amountValue:
          current_price - previousPrice >= 0
            ? (amount / previousPrice) * current_price
            : 0,
        coinAmount:
          current_price - previousPrice >= 0 ? amount / previousPrice : 0,
        circulatingSupplyVsMax: (circulating_supply / total_supply) * 100,
        current_price,
        date,
        image,
        marketCapVsVolume: (total_volume / market_cap) * 100,
        name,
        priceChangeSince: current_price - previousPrice,
        priceChange24H: price_change_24h,
      };
      dispatch({
        type: GET_ASSETS_SUCCESS,
        payload: [...state.portfolio.assets, coin],
      });
    } catch (error) {}
  };

export const RemoveCoin = coinName => (dispatch, getState) => {
  const state = getState();
  const filteredList = state.portfolio.assets.filter(
    coin => coin.name !== coinName
  );
  console.log(filteredList);
  dispatch({
    type: REMOVE_ASSET_SUCCESS,
    payload: filteredList,
  });
};

export const SearchCoin = coinName => async (dispatch, getState) => {
  const state = getState();
  const filteredSearch = state.portfolio.coinList.filter(coin =>
    coin.id.includes(coinName)
  );
  dispatch({
    type: FILTER_COIN_LIST,
    payload: filteredSearch,
  });
};
