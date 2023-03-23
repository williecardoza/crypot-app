const initialState = {
  assets: [],
  coinList: [],
  openModal: false,
  filteredCoinList: [],
};

export const GET_ASSETS_SUCCESS = "GET_ASSETS_SUCCESS";
export const FETCH_COIN_LIST_SUCCESS = "FETCH_COIN_LIST_SUCCESS";
export const FILTER_COIN_LIST = "FILTER_COIN_LIST";
export const MODAL_CLICKED = "MODAL_CLICKED";
export const REMOVE_ASSET_SUCCESS = "REMOVE_ASSET_SUCCESS";

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSETS_SUCCESS:
      return {
        ...state,
        assets: action.payload,
      };
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
    case MODAL_CLICKED:
      return {
        ...state,
        openModal: !state.openModal,
      };
    case REMOVE_ASSET_SUCCESS:
      return {
        ...state,
        assets: action.payload,
      };
    default:
      return state;
  }
};
export default portfolioReducer;
