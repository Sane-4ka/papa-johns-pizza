import { configureStore } from "@reduxjs/toolkit";
// import reducer from '../redux/reducers/goods'
import goods from './reducers/goods'
import pizzaFilters from "./reducers/pizzaFilters";
import cart from "./reducers/cart";

const store = configureStore({
    reducer: {goods, pizzaFilters, cart},
    devTools: process.env.NODE_ENV !== "production"
});

export default store