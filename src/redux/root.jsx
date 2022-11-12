import { combineReducers } from "redux";
import CartReducer from "./cart/CartReducer";
import ProductsReducer from "./products/ProductsReducer";

const RootReducer = combineReducers({
    products : ProductsReducer,
    shopingCart : CartReducer,
})

export default RootReducer;
