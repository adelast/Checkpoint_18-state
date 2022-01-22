import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    fullName: "adelast",
    bio: "biographie",
    imgSrc: "imagesrc",
    profession: "webdev",
    shows: false,
    secs: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ secs: this.state.secs + 1 });
    }, 1000);
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ shows: !this.state.shows });
          }}
        >
          change
        </button>
        {this.state.shows ? (
          <h1>
            Hi, I’m {this.state.fullName}, it is {"" + this.state.shows}
          </h1>
        ) : null}

        <h1>Intervall : {this.state.secs}</h1>
      </>
    );
  }
}

export default App;
