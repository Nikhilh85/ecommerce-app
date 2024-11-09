import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import CartReducer from "./Cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartState"],
  blacklist: [],
};

const rootReducer = combineReducers({
  cartState: CartReducer,
});

export default persistReducer(persistConfig, rootReducer);
