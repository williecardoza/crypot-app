import axios from "axios";
import {
  MODAL_CLICKED,
  FETCH_COIN_LIST_SUCCESS,
  FILTER_COIN_LIST,
  GET_ASSETS_SUCCESS,
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
      const currentPrice = data.map(item => item.current_price);
      const coin = {
        amountValue:
          currentPrice - previousPrice >= 0
            ? (amount / previousPrice) * currentPrice
            : 0,
        coinAmount:
          currentPrice - previousPrice >= 0 ? amount / previousPrice : 0,
        currentPrice: currentPrice[0],
        circulatingSupplyVsMax:
          data.map(item => item.circulating_supply / item.total_supply) * 100,
        image: data.map(item => item.image),
        marketCapVsVolume:
          data.map(item => item.total_volume / item.market_cap) * 100,
        currencyName: data.map(item => item.name),
        priceChangeSince: currentPrice - previousPrice,
        priceChange24H: data.map(item => item.price_change_24h)[0],
        purchaseDate: date,
      };
      dispatch({
        type: GET_ASSETS_SUCCESS,
        payload: coin,
      });
    } catch (error) {}
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
