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
    case ActionTypes.CART_ADD:
      return { ...state, isLoading: false, error: false, basket: [action.payload, ...state.basket] }

    case ActionTypes.CART_UPDATE:
      const updated = state.basket.map((i) => i.id == action.payload.id ? action.payload : i);
      return { ...state, isLoading: false, error: false, basket: updated }

    case ActionTypes.CART_DELETE:
      const deleted = state.basket.filter((i) => i.id != action.payload);
      return { ...state, isLoading: false, error: false, basket: deleted }

    default:
      return state
  }
}

export default basketReducer
