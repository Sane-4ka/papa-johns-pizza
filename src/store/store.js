import { configureStore } from "@reduxjs/toolkit";
// import reducer from '../redux/reducers/goods'
import goods from '../redux/reducers/goods'
import pizzaFilters from "../redux/reducers/pizzaFilters";
import cart from "../redux/reducers/cart";

const store = configureStore({
    reducer: {goods, pizzaFilters, cart},
    devTools: process.env.NODE_ENV !== "production"
});

export default store