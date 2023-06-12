export const ADD_TO_ORDER_LIST = "ADD_TO_ORDER_LIST";
export const EMPTY_ORDER_LIST = "EMPTY_ORDER_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";

const orderReducer = (state = { products: [], updatedList: [] }, action) => {
  if (action.type === ADD_TO_ORDER_LIST) {
    const productIds = state.products.map((product) => product.productId);
    return {
      ...state,
      updatedList: [...state.updatedList, action.payload],
    };
    if (productIds.includes(action.payload.productId)) {
      const newProducts = [...state.products];
      const currentProduct = newProducts.find(
        (product) => product.productId === action.payload.productId
      );

      if (
        currentProduct.color === action.payload.color &&
        currentProduct.packaging === action.payload.packaging
      ) {
        currentProduct.qauntity += action.payload.qauntity;
        return { ...state, products: newProducts };
      } else {
        return { ...state, products: [action.payload, ...state.products] };
      }
    } else {
      return { ...state, products: [action.payload, ...state.products] };
    }
  } else if (action.type === REMOVE_ITEM) {
    // const productIds = state.products.map((product) => product.productId);
    state.updatedList.splice(action.payload, 1);
    return { ...state, updatedList: [...state.updatedList] };
    // if (productIds.includes(action.payload.productId)) {
    //   const newProducts = [...state.products];
    //   const currentProducts = newProducts.filter(
    //     (product) => product.productId !== action.payload.productId
    //   );
    //   return { ...state, products: currentProducts };
    // }
  } else if (action.type === EMPTY_ORDER_LIST) {
    return { ...state, products: [] };
  }

  return state;
};

export default orderReducer;
