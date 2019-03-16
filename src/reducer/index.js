import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import feeds from "./feeds";

const rootReducer = combineReducers({
  feeds,
  routing: routerReducer
});
export default rootReducer;
