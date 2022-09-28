import React, { createRef } from "react";
import "./WinePaperMenu.css";
import pages from "./pages";
import WinePageSingle from "./WinePageSingle";
import Cover from "./WinePageSingle/cover";
import PriceList from "./WinePageSingle/pricelist";
import Empty from "./WinePageSingle/empty";
import CoverEnd from "./WinePageSingle/coverEnd";
import html2canvas from "html2canvas";

class WinePaperMenu extends React.Component {
  state = {
    pageIndex: 0,
  };
  printRef = createRef();

  async capture(ref, page) {
    const canvas = await html2canvas(ref);
    const img = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = page + ".png";
    link.href = img;
    link.click();
  }

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
        <div
          id="print"
          ref={this.printRef}
          style={{ padding: "3mm", backgroundColor: "var(--amor-darkred)" }}>
          <div
            style={{
              border: "1px dashed white",
            }}>
            {this.selectPage(this.state.pageIndex)}
          </div>
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
        <button
          className="nav-btn"
          onClick={() => {
            this.capture(this.printRef.current, this.state.pageIndex);
          }}
          style={{
            position: "absolute",
            left: "20px",
            bottom: "20px",
            width: "180px",
          }}>
          Download Page: {this.state.pageIndex}
        </button>
      </div>
    );
  }
}

export default WinePaperMenu;
