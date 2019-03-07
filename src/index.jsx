import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spiner from "./Spiner";
import ErrorMessage from "./ErrorMessage";

class App extends React.Component {
  /* constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }*/

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
  compo;
  render() {
    if (this.state.errorMessage && !this.state.lat)
      return <ErrorMessage err={this.state.errorMessage} />;
    else if (this.state.lat && !this.state.errorMessage)
      return <SeasonsDisplay lat={this.state.lat} />;
    else {
      return <Spiner message="Please allow us to know your location." />;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
