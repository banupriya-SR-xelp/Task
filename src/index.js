import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import DisplayCards from "./DisplayCards.js";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./container/DisplayCardsContainer.js";
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <Route path="/Cards/:postId" component={DisplayCards} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
