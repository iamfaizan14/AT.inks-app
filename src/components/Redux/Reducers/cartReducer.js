export const ADD_TO_CART = "ADD_TO_CART";

const cartReducer = (state = { cartItems: [] }, action) => {
  if (action.type === ADD_TO_CART) {
    return { ...state, cartItems: [...state.cartItems, ...action.payload] };
  }
  return state;
};

export default cartReducer;
