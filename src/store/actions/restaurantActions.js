import ActionTypes from "../actionTypes"
import api from "../../utils/api"

export const getRestaurants = () => (dispatch) => {

    dispatch({
        type: ActionTypes.REST_LOADING
    });

    api.get("/restaurants")
        .then((response) =>
            dispatch({
                type: ActionTypes.REST_SUCCESS,
                payload: response.data
            }))
        .catch((error) =>
            dispatch({
                type: ActionTypes.REST_ERROR,
                payload: error.message
            }))
}