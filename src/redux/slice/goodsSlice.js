import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGoodsByUrl = createAsyncThunk(
    'goods/fetchGoodsStatus',
    async (url, thunkAPI) => {
    //   const response = await userAPI.fetchById(userId)
    //   return response.data
    const { data } = await axios.get(url)
    // thunkAPI.dispatch(goodsFetched(data))
    return data;
    })

const initialState = {
    goods: [],
    errorMsg: '',
    goodsLoadingStatus: 'idle',
    status: ''
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    goodsFetching: (state) => {
        state.goodsLoadingStatus = 'loading'
    },
    goodsFetched: (state, action) => {
        state.goods = action?.payload;
        state.goodsLoadingStatus = 'idle'
    },
    goodsFetchingError: (state, action) => {
        state.errorMsg = "error fetching response";
        state.goodsLoadingStatus = 'error'
    },
  },
  extraReducers: {
    [fetchGoodsByUrl.pending]: (state) => {
        state.status = 'loading'
    },
    [fetchGoodsByUrl.fulfilled]: (state, action) => {
        state.status = 'success'
    },
    [fetchGoodsByUrl.rejected]: (state) => {
        state.status = 'error'
    },
  }
  })

export const { goodsFetching, goodsFetchingError, goodsFetched } = goodsSlice.actions;

export default goodsSlice.reducer;