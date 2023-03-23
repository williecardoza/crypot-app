const initialState = {
  assets: JSON.parse(localStorage.getItem("assets")) ? JSON.parse(localStorage.getItem("assets")) : [],
  coinList: [],
  openModal: false,
  filteredCoinList: []
};

export const MODAL_CLICKED = "MODAL_CLICKED";
export const FETCH_COIN_LIST_SUCCESS = "FETCH_COIN_LIST_SUCCESS";
export const GET_ASSETS_SUCCESS = "GET_ASSETS_SUCCESS";
export const FILTER_COIN_LIST = "FILTER_COIN_LIST"

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_LIST_SUCCESS:
      return {
        ...state,
        coinList: action.payload
      };
      case FILTER_COIN_LIST:
        return {
          ...state,
          filteredCoinList: action.payload
        }
    case MODAL_CLICKED:
      return {
        ...state,
        openModal: !state.openModal,
      };
      case GET_ASSETS_SUCCESS:
        return {
          ...state,
          assets: [...state.assets, action.payload]
        }
    default:
      return state;
  }
};
export default portfolioReducer;