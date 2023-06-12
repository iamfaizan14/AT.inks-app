const productsReducer = (state = { products: [], cart: [] }, action) => {
  if (action.type === "ADD-PRODUCTS") {
    return { ...state, products: [...action.data, ...state.products] };
  }
  if (action.type === "ADD-CART") {
    return {
      ...state,
      cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
    };
  }
  if (action.type === "SELECTED-ITEM") {
    return { ...state, details: [action.data] };
  }
  if (action.type === "REMOVE-ITEM") {
    const filterProducts = state.cart.filter(
      (item) => item.key !== action.data.key
    );
    return { ...state, cart: filterProducts };
  }
  return state;
};

export default productsReducer;
