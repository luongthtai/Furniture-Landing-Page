import { combineReducers } from "redux";
import { countProductReducer } from "./countProduct";

const rootReducer = combineReducers({
    count: countProductReducer,
})

export default rootReducer