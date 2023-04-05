const initialState = {
  coinHistory: null,
  data: null,
  interval: 365,
};
export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_HISTORY_SUCCESS = "GET_COIN_HISTORY_SUCCESS";

const coinDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_COIN_HISTORY_SUCCESS:
      return {
        ...state,
        coinHistory: action.payload[0],
        interval: action.payload[1],
      };
    default:
      return state;
  }
};

export default coinDataReducer;
