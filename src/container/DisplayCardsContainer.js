import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import rootReducer from "../reducer/index.js";
import feeds from "../FeedsData.js";

const defaultState = {
  feeds
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
