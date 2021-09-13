import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}


class App extends React.Component{
constructor(props){
  super(props);

  this.state = { lat: null, errorMessage: ""};

  //geolocation
     window.navigator.geolocation.getCurrentPosition(
  (position) => {
    this.setState({
      lat: position.coords.latitude
    });
  },
  (err) => {
    this.setState({
      errorMessage: err.message
    });
  } 
);
}

  //React sats we have to define render!!
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return (
        <div> Error: {this.state.errorMessage}</div>
      );
    }
    else if(!this.state.errorMessage && this.state.lat){
      return (
        <div>Latitude: {this.state.lat}</div>
      );
    }
    else {
      return(
        <div>loading!</div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
