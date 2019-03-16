import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./action/DisplayCards.action";
import App from "./App";

function mapStateToProps(state) {
  return {
    feedsData: state.feeds
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default Main;
