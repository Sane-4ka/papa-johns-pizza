import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: {},
    totalPrice: 0,
    totalCount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteItemFromCard: (state, action) => {
        const data = {...state.productData}
        delete data[action.payload] 
        state.totalPrice = (+state.totalPrice - +state.productData[action.payload].count * +state.productData[action.payload].variation.price).toFixed(2);
        state.productData = {
            ...data
        }
    },
    addItemToCard: (state, action) => {
        const {id , price, image_list, diameter, dough} = action.payload
        const varById = state.productData[id]
        state.totalPrice = (+state.totalPrice + +price).toFixed(2);
            
        state.productData = {
            ...state.productData,
            [id]: varById ? {...varById, count: varById.count + 1} 
            : {
                productId: action.payload.iDid, 
                name: action.payload.name,
                count: 1,
                variation: {id , price, image_list, diameter, dough}
            }
        }
    },
    addOneMore: (state, action) => {
        state.productData[action.payload].count ++;
        state.totalPrice = (+state.totalPrice + +state.productData[action.payload].variation.price).toFixed(2);
    },
    removeOne: (state, action) => {
        state.productData[action.payload].count --;
        state.totalPrice = (+state.totalPrice - +state.productData[action.payload].variation.price).toFixed(2);
    },
    }
})

export const { deleteItemFromCard, addItemToCard, addOneMore, removeOne} = cartSlice.actions;

export default cartSlice.reducer;