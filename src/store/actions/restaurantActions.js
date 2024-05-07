import ActionTypes from "../actionTypes"
import api from "../../utils/api"

export const getRestaurants = (restId) => (dispatch) => {

    dispatch({
        type: ActionTypes.REST_LOADING
    });

    const url = restId ? `/restaurants/${restId}` : "/restaurants";

    api.get(url)
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