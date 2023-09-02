import { configureStore } from "@reduxjs/toolkit";

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
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch