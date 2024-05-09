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

export const addBasket = (product) => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING
  })

  api.post(`/cart`,product)
  .then(response => {
    dispatch({
      type: ActionTypes.CART_ADD,
      payload: response.data
    })
  }).catch(error => {
    dispatch({
      type: ActionTypes.CART_ERROR,
      payload: error.message
    })
  })
}

export const updateBasket= (product) => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING
  })

  api.put(`/cart/${product.id}`,product)
  .then(response => {
    dispatch({
      type: ActionTypes.CART_UPDATE,
      payload: response.data
    })
  }).catch(error => {
    dispatch({
      type: ActionTypes.CART_ERROR,
      payload: error.message
    })
  })
};

export const deleteProductFromBasket = (id) => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING
  })

  api.delete(`/cart/${id}`)
  .then(response => {
    dispatch({
      type: ActionTypes.CART_DELETE,
      payload: id
    })
  })
  .catch(error => {
    dispatch({
      type: ActionTypes.CART_ERROR,
      payload: error.message
    })
  })
}
