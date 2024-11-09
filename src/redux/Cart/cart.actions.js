import { SET_CART_STATE, UPDATE_CART_LIST } from "./cart.actionTypes";

export const setCartState = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_CART_STATE,
      payload: data,
    });
  };
};

export const updateCartList = (product, op) => {
  return (dispatch, getState) => {
    const { products } = getState().cartState;
    const prodIndex = products.findIndex((p) => p.id === product.id);
    let updatedProducts;
    if (prodIndex === -1) {
      updatedProducts = [...products, product];
    } else {
      if (products[prodIndex].quantity === 1 && op === "decrease") {
        updatedProducts = [
          ...products.slice(0, prodIndex),
          ...products.slice(prodIndex + 1),
        ];
      } else {
        updatedProducts = [
          ...products.slice(0, prodIndex),
          {
            ...products[prodIndex],
            quantity:
              op === "increase"
                ? products[prodIndex].quantity + 1
                : products[prodIndex].quantity - 1,
          },
          ...products.slice(prodIndex + 1),
        ];
      }
    }

    const totalQuantity = updatedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );

    dispatch({
      type: UPDATE_CART_LIST,
      payload: { updatedProducts, totalQuantity },
    });
  };
};
