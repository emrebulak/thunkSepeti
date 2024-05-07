import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";

const reducers = combineReducers({
    restaurantReducer,
    productReducer
});

export default createStore(reducers, applyMiddleware(thunk));