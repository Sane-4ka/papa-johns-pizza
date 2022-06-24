const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const pizzaFilters = (state = initialState, action) => {
    switch (action.type) {
        case 'PIZZA_FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'PIZZA_FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'PIZZA_FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'ACTIVE_PIZZA_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default pizzaFilters;