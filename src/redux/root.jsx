import { combineReducers } from "redux";
import CartReducer from "./cart/CartReducer";
// import CartReducer from "./cart/CartReducer";
import ProductsReducer from "./products/ProductsReducer";

const RootReducer = combineReducers({
    products : ProductsReducer,
    ShopingCart : CartReducer,
})

export default RootReducer;
