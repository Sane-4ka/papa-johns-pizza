const initialState = {
    goods: [],
    errorMsg: '',
    goodsLoadingStatus: 'idle'
}

const goods = (state = initialState, action) => {
    switch (action.type) {
        case 'GOODS_FETCHING':
            return {
                ...state,
                goodsLoadingStatus: 'loading'
            }
        case 'GOODS_FETCHED':
            return {
                ...state,
                goods: action.payload,
                goodsLoadingStatus: 'idle'
            }
        case 'GOODS_FETCHING_ERROR':
            return {
                ...state,
                errorMsg: action.payload,
                goodsLoadingStatus: 'error'
            }
        default: return state
    }
}

export default goods;