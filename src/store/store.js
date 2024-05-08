import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";

const reducers = combineReducers({
    restaurantReducer,
    productReducer,
    basketReducer
});

export default createStore(reducers, applyMiddleware(thunk));