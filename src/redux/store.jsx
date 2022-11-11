import { createStore } from "redux";
import RootReducer from "./root";

const Store = createStore(RootReducer)

export default Store;