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
            // console.log(state.productData[action.payload])
            return {
                ...state,
                totalPrice: (+state.totalPrice - +state.productData[action.payload].count * +state.productData[action.payload].variation.price).toFixed(2),
                productData: {
                    ...data
                }
            }
        case 'ADD_ITEM_TO_CARD':
            const {id , price, image_list, diameter, dough} = action.payload.currentVariation
            const varById = state.productData[id]
            console.log(+state.totalPrice, +price)
            return {
                ...state,
                // ? price working incorrectly
                // totalPrice: state.totalPrice + +price,
                totalPrice: (+state.totalPrice + +price).toFixed(2),
                
                productData: {
                    ...state.productData,
                    [id]: varById ? {...varById, count: varById.count + 1} 
                    : {
                        productId: action.payload.id, 
                        name: action.payload.name,
                        count: 1,
                        variation: {id , price, image_list, diameter, dough}
                    }
                }
            }
        default: return state
    }
}

export default cart;