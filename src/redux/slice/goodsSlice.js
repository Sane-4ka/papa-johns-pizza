import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    goods: [],
    errorMsg: '',
    goodsLoadingStatus: 'idle'
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    goodsFetching: (state) => {
        state.goodsLoadingStatus = 'loading'
    },
    goodsFetched: (state, action) => {
        state.goods = action.payload;
        state.goodsLoadingStatus = 'idle'
    },
    goodsFetchingError: (state, action) => {
        state.errorMsg = action.payload;
        state.goodsLoadingStatus = 'error'
    },
  },
})

export const { goodsFetching, goodsFetchingError, goodsFetched } = goodsSlice.actions;

export default goodsSlice.reducer;