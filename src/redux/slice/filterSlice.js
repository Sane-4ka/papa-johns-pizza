import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzaFilters: [],
    pizzaFiltersLoadingStatus: 'idle',
    activePizzaFilter: 'all'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    activePizzaFilterChanged: (state, action) => {
        state.activePizzaFilter = action.payload === state.activePizzaFilter? 'all' : action.payload
    },
    }
})

export const {activePizzaFilterChanged} = filterSlice.actions;

export default filterSlice.reducer;