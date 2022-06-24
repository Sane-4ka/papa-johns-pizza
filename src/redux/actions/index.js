export const goodsFetching = () => {
    return {
        type: 'GOODS_FETCHING'
    }
}

export const goodsFetched = (goods) => {
    return {
        type: 'GOODS_FETCHED',
        payload: goods
    }
}

export const goodsFetchingError = () => {
    return {
        type: 'GOODS_FETCHING_ERROR'
    }
}


// **--------------FILTERS-----------------------------**

export const pizzaFiltersFetching = () => {
    return {
        type: 'PIZZA_FILTERS_FETCHING'
    }
}

export const pizzaFiltersFetched = (filters) => {
    return {
        type: 'PIZZA_FILTERS_FETCHED',
        payload: filters
    }
}

export const pizzaFiltersFetchingError = () => {
    return {
        type: 'PIZZA_FILTERS_FETCHING_ERROR'
    }
}

export const activePizzaFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_PIZZA_FILTER_CHANGED',
        payload: filter
    }
}