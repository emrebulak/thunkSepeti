import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getBasket = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });

  api
    .get(`/cart`)
    .then((response) => {
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: error.message,
      });
    });
};
