import React from "react";
import "./App.css";
import wines from "./wines";
import WinePageSingle from "./WinePageSingle";
import Cover from "./WinePageSingle/cover";

class App extends React.Component {
  state = {
    pageIndex: 0,
  };

  render() {
    return (
      <div className="App">
        <button
          className="nav-btn"
          onClick={() =>
            this.setState({
              pageIndex:
                (this.state.pageIndex - 1 + Object.keys(wines).length) %
                Object.keys(wines).length,
            })
          }>
          Previous
        </button>
        {/* <Cover /> */}
        <WinePageSingle wine={wines[this.state.pageIndex + 1]} />
        <button
          className="nav-btn"
          onClick={() =>
            this.setState({
              pageIndex:
                (this.state.pageIndex + 1 + Object.keys(wines).length) %
                Object.keys(wines).length,
            })
          }>
          Next
        </button>
      </div>
    );
  }
}

export default App;
