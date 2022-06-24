import { configureStore } from "@reduxjs/toolkit";
// import reducer from '../redux/reducers/goods'
import goods from '../redux/reducers/goods'
import pizzaFilters from "../redux/reducers/pizzaFilters";

const store = configureStore({
    reducer: {goods, pizzaFilters},
    devTools: process.env.NODE_ENV !== "production"
});

export default store