import React from "react";
import "./WinePaperMenu.css";
import pages from "./pages";
import WinePageSingle from "./WinePageSingle";
import Cover from "./WinePageSingle/cover";
import PriceList from "./WinePageSingle/pricelist";
import Empty from "./WinePageSingle/empty";
import CoverEnd from "./WinePageSingle/coverEnd";
class WinePaperMenu extends React.Component {
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
    if (pageIndex === 19) {
      return <CoverEnd />;
    }
    return <WinePageSingle wine={pages[pageIndex + 1]} />;
  }

  render() {
    return (
      <div className="WinePaperMenu">
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
        {this.selectPage(this.state.pageIndex)}
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
        <button
          className="nav-btn"
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
          }}
          onClick={() => this.props.setRoute("home")}>
          Back
        </button>
        <div
          className="nav-btn"
          style={{
            position: "absolute",
            left: "20px",
            bottom: "20px",
          }}>
          Page: {this.state.pageIndex}
        </div>
      </div>
    );
  }
}

export default WinePaperMenu;
