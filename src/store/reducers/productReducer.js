import ActionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    error: false,
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PROD_LOADING:
            return { ...state, isLoading: true }

        case ActionTypes.PROD_ERROR:
            return { ...state, isLoading: false, error: action.payload }

        case ActionTypes.PROD_SUCCESS:
            return { ...state, isLoading: false, error: false, products: action.payload }
        default:
            return state
    }
}

export default productReducer;