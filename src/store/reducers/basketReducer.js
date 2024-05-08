import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  basket: []
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true }
    case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case ActionTypes.CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        basket: action.payload,
      }
      default:
        return state
  }
}

export default basketReducer
