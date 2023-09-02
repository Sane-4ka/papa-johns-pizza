import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface pizzaState {
   pizzaFilters: [],
    pizzaFiltersLoadingStatus: string,
    activePizzaFilter: string
}

const initialState: pizzaState = {
    pizzaFilters: [],
    pizzaFiltersLoadingStatus: 'idle',
    activePizzaFilter: 'all'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    activePizzaFilterChanged: (state, action: PayloadAction<string>) => {
        state.activePizzaFilter = (action.payload === state.activePizzaFilter)? 'all' : action.payload
    },
    }
})

export const {activePizzaFilterChanged} = filterSlice.actions;

export default filterSlice.reducer;