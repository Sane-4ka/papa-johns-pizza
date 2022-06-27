const initialState = {
    pizzaFilters: [],
    pizzaFiltersLoadingStatus: 'idle',
    activePizzaFilter: 'all'
}

const pizzaFilters = (state = initialState, action) => {
    switch (action.type) {
        // case 'PIZZA_FILTERS_FETCHING':
        //     return {
        //         ...state,
        //         pizzaFiltersLoadingStatus: 'loading'
        //     }
        // case 'PIZZA_FILTERS_FETCHED':
        //     return {
        //         ...state,
        //         pizzaFilters: action.payload,
        //         pizzaFiltersLoadingStatus: 'idle'
        //     }
        // case 'PIZZA_FILTERS_FETCHING_ERROR':
        //     return {
        //         ...state,
        //         pizzaFiltersLoadingStatus: 'error'
        //     }
        case 'ACTIVE_PIZZA_FILTER_CHANGED':
            return {
                ...state,
                activePizzaFilter: action.payload === state.activePizzaFilter? 'all' : action.payload
            }
        default: return state
    }
}

export default pizzaFilters;