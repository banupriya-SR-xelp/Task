import React, { Component } from "react";
import DisplayCards from "./DisplayCards.js";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      feed: 1
    };
  }
  renderFeed(feedId) {
    return this.props.feedsData[feedId].map(cardField => {
      return <DisplayCards type={cardField.type} data={cardField.cardData} />;
    });
  }
  onClick = id => {
    return this.setState({ feed: id });
  };
  feedsButton() {
    return Object.keys(this.props.feedsData).map(feed => {
      return (
        <Link to="/cards/${feed}">
          <div
            className="button"
            id={feed}
            key={feed}
            onClick={() => this.onClick(feed)}
          >
            <p>{feed}</p>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h3>
            <Link to="/">Cards</Link>
          </h3>
          <div className="buttonHolder">{this.feedsButton()}</div>
          {this.renderFeed(this.state.feed)}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
