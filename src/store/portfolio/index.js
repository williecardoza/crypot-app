const initialState = {
  assets: [],
  addAssetModal: false,
  coinList: [],
  filteredCoinList: [],
  updateAssetModal: false
};

export const ADD_ASSET_MODAL_CLICKED = "ADD_ASSET_MODAL_CLICKED,";
export const GET_ASSETS_SUCCESS = "GET_ASSETS_SUCCESS";
export const FETCH_COIN_LIST_SUCCESS = "FETCH_COIN_LIST_SUCCESS";
export const FILTER_COIN_LIST = "FILTER_COIN_LIST";
export const REMOVE_ASSET_SUCCESS = "REMOVE_ASSET_SUCCESS";
export const UPDATE_ASSET_MODAL_CLICK = "UPDATE_ASSET_MODAL_CLICK"
export const UPDATE_COIN_INFORMATION = "UPDATE_COIN_INFORMATION"

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ASSET_MODAL_CLICKED:
      return {
        ...state,
        addAssetModal: !state.addAssetModal,
      };
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
    case REMOVE_ASSET_SUCCESS:
      return {
        ...state,
        assets: action.payload,
      };
      case UPDATE_ASSET_MODAL_CLICK:
      return {
        ...state,
        updateAssetModal: !state.updateAssetModal,
      };
      case UPDATE_COIN_INFORMATION:
        return {
          ...state,
          filteredCoinList: action.payload,
        }
    default:
      return state;
  }
};
export default portfolioReducer;
