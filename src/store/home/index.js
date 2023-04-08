const initialState = {
  bitcoinData: null,
  coinList: null,
  coinsPerPage: 10,
  interval: 1,
  chartLoading: true,
  coinListLoading: true,
  order: true,
  page: 1,
};

export const CHART_LOADING = "CHART_LOADING";
export const COIN_LIST_LOADING = "COIN_LIST_LOADING";
export const GET_BITCOIN_DATA_SUCCESS = "GET_BITCOIN_DATA_SUCCESS";
export const GET_COIN_LIST_DATA_SUCCESS = "GET_COIN_LIST_DATA_SUCCESS";
export const UPDATE_COINS_PER_PAGE = "UPDATE_COINS_PER_PAGE";
export const UPDATE_LIST_ORDER = "UPDATE_LIST_ORDER";
export const UPDATE_PAGE = "UPDATE_PAGE";

const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHART_LOADING:
      return {
        ...state,
        chartLoading: action.payload,
      };
    case COIN_LIST_LOADING:
      return {
        ...state,
        coinListLoading: action.payload,
      };
    case GET_BITCOIN_DATA_SUCCESS:
      return {
        ...state,
        bitcoinData: action.payload[0],
        interval: action.payload[1],
      };
    case GET_COIN_LIST_DATA_SUCCESS:
      return {
        ...state,
        coinList: action.payload[0],
      };
    case UPDATE_COINS_PER_PAGE:
      return {
        ...state,
        coinsPerPage: action.payload,
      };
    case UPDATE_LIST_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
export default coinListReducer;
