import { configureStore } from "@reduxjs/toolkit";

// import goods from './reducers/goods'
// import pizzaFilters from "./reducers/pizzaFilters";
// import cart from "./reducers/cart";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
import goodsReducer from './slice/goodsSlice'

const store = configureStore({
    reducer: {
        goods: goodsReducer, 
        pizzaFilters: filterReducer, 
        cart: cartReducer
    },
    devTools: process.env.NODE_ENV !== "production"
});

export default store

//* import { configureStore } from '@reduxjs/toolkit'
//* import goodsReducer from './slice/goodsSlice'
//* export const store = configureStore({
//*   reducer: {
//*     goods: goodsReducer,
//*   },
//* })