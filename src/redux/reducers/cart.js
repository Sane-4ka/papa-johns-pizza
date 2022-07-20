const initialState = {
    productData: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ITEM_FROM_CARD':
            const data = {...state.productData}
            delete data[action.payload] 
            console.log(data, 'asdasda')
            return {
                ...state,
                productData: {
                    ...data
                }
            }
        case 'ADD_ITEM_TO_CARD':
            const {id , price, image_list, diameter, dough} = action.payload.currentVariation
            const varById = state.productData[id]
            return {
                ...state,
                productData: {
                    ...state.productData,
                    [id]: varById ? {...varById, count: varById.count + 1} 
                    // varById ? {...varById, count: varById.count + 1} 
                    : {
                        productId: action.payload.id, 
                        count: 1,
                        variation: {id , price, image_list, diameter, dough}
                    }
                }
            }
        default: return state
    }
}

export default cart;