const initialState = {
  coinList: [],
  currency: "usd",
  currencies: [
    { name: "usd", symbol: "$" },
    { name: "eur", symbol: "€" },
    { name: "gbp", symbol: "£" },
  ],
  filteredCoinList: [],
  marketData: null,
  symbol: "$",
  theme: false,
};
export const FETCH_COIN_LIST_SUCCESS = "FETCH_COIN_LIST_SUCCESS";
export const FILTER_COIN_LIST = "FILTER_COIN_LIST";
export const GET_MARKET_DATA_SUCCESS = "GET_MARKET_DATA_SUCCESS";
export const UPDATE_CURRENCY = "UPDATE_CURRENCY";
export const UPDATE_THEME = "UPDATE_THEME";

const appStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_LIST_SUCCESS:
      return {
        ...state,
        coinList: action.payload,
      };
    case FILTER_COIN_LIST:
      return {
        ...state,
        filteredCoinList: action.payload,
      };
    case GET_MARKET_DATA_SUCCESS:
      return {
        ...state,
        marketData: action.payload,
      };
    case UPDATE_CURRENCY:
      return {
        ...state,
        currency: action.payload[0],
        symbol: action.payload[1],
      };
    case UPDATE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
export default appStorageReducer;
