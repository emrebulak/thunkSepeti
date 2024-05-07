import api from "../../utils/api"
import ActionTypes from "../actionTypes"

export const getProducts = (restId) => (dispatch) => {

    dispatch({
        type: ActionTypes.PROD_LOADING
    })

    api.get(`/products?restaurantId=${restId}`)
        .then(res => {
            dispatch({
                type: ActionTypes.PROD_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ActionTypes.PROD_ERROR,
                payload: err.message
            })
        })
}
