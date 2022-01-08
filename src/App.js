import React from "react";
import "./App.css";
import pages from "./pages";
import WinePageSingle from "./WinePageSingle";
import Cover from "./WinePageSingle/cover";
import PriceList from "./WinePageSingle/pricelist";
import Empty from "./WinePageSingle/empty";
class App extends React.Component {
  state = {
    pageIndex: 0,
  };

  selectPage() {
    if (this.state.pageIndex === 0) {
      return <Cover />;
    }
    if (this.state.pageIndex === 1 || this.state.pageIndex === 15) {
      return <Empty />;
    }
    if (this.state.pageIndex === 2) {
      return <PriceList />;
    }
    return <WinePageSingle wine={pages[this.state.pageIndex + 1]} />;
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
        {this.selectPage()}
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
