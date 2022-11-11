import { combineReducers } from "redux";
import ProductsReducer from "./products/ProductsReducer";

const RootReducer = combineReducers({
    products : ProductsReducer,
})

export default RootReducer;
