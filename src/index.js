import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  //default lat and errormessage value assign
  state = { lat: null, errorMessage: "" };

  //REact lifecycle which call on
  componentDidMount() {
    //geolocation
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }
  //helper class
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  //React sats we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
