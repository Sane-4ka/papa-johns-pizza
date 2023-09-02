import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGoodsByUrl = createAsyncThunk(
    'goods/fetchGoodsStatus',
    async (url: string) => {
    //   const response = await userAPI.fetchById(userId)
    //   return response.data
    const { data } = await axios.get(url)
    // thunkAPI.dispatch(goodsFetched(data))
    return data;
})

interface goodState {
   goods: any,
   errorMsg: string,
   goodsLoadingStatus: string,
   status: string
}

const initialState: goodState = {
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
    goodsFetched: (state, action: PayloadAction<[]>) => {
        state.goods = action?.payload;
        state.goodsLoadingStatus = 'idle'
    },
    goodsFetchingError: (state) => {
        state.errorMsg = "error fetching response";
        state.goodsLoadingStatus = 'error'
    },
  },
  extraReducers: (builder) =>{
   builder.addCase(fetchGoodsByUrl.pending,(state) => {
      state.status = 'loading'
   }),
   builder.addCase(fetchGoodsByUrl.fulfilled,(state) => {
      state.status = 'success'
   }),
   builder.addCase(fetchGoodsByUrl.rejected,(state) => {
      state.status = 'error'
   }),
   },
});   

export const { goodsFetching, goodsFetchingError, goodsFetched } = goodsSlice.actions;

export default goodsSlice.reducer;