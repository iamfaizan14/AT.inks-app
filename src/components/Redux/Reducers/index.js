// reducers/index.js
import { combineReducers } from "redux";

// Import your individual reducers here
import productReducer from "./productsReducer";
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";

// Combine the reducers
const rootReducer = combineReducers({
  // Add your individual reducers here
  products: productReducer,
  order: orderReducer,
  cart: cartReducer,
});

export default rootReducer;
