import { SET_CART_STATE, UPDATE_CART_LIST } from "./cart.actionTypes";

const initialState = {
  isActive: false,
  products: [],
  totalQuantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_STATE:
      return {
        ...state,
        isActive: action.payload,
      };
    case UPDATE_CART_LIST:
      return {
        ...state,
        products: action.payload.updatedProducts,
        totalQuantity: action.payload.totalQuantity,
      };
    default:
      return state;
  }
};

export default reducer;
