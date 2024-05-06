import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    restaurantReducer
});

export default createStore(reducers, applyMiddleware(thunk));