import React from "react";
import "./App.css";
import pages from "./pages";
import WinePageSingle from "./WinePageSingle";
import Cover from "./WinePageSingle/cover";
import PriceList from "./WinePageSingle/pricelist";
import Empty from "./WinePageSingle/empty";
import CoverEnd from "./WinePageSingle/coverEnd";
class App extends React.Component {
  state = {
    pageIndex: 0,
  };

  selectPage(pageIndex) {
    if (pageIndex === 0) {
      return <Cover />;
    }
    if (pageIndex === 1) {
      return <Empty />;
    }
    if (pageIndex === 2) {
      return <PriceList />;
    }
    if (pageIndex === 15) {
      return <CoverEnd />;
    }
    return <WinePageSingle wine={pages[pageIndex + 1]} />;
  }

  render() {
    return (
      <div className="App">
        <button
          className="nav-btn"
          onClick={() =>
            this.setState({
              pageIndex:
                (this.state.pageIndex - 1 + Object.keys(pages).length) %
                Object.keys(pages).length,
            })
          }>
          Previous
        </button>
        <div className="page-wrapper">
          {this.selectPage(this.state.pageIndex)}
        </div>

        <button
          className="nav-btn"
          onClick={() =>
            this.setState({
              pageIndex:
                (this.state.pageIndex + 1 + Object.keys(pages).length) %
                Object.keys(pages).length,
            })
          }>
          Next
        </button>
      </div>
    );
  }
}

export default App;
