import "./WineDigitalMenu.scss";
import pages from "./pages";
import { useState } from "react";
function WineDigitalMenu({ setRoute }) {
  const wines = [
    pages[4],
    pages[5],
    pages[6],
    pages[7],
    pages[8],
    pages[9],
    pages[10],
    pages[11],
    pages[12],
    pages[13],
    pages[14],
    pages[15],
  ];
  const [page, setPage] = useState(0);

  const next = () => {
    setPage((page + 1) % wines.length);
  };

  const previous = () => {
    setPage((page - 1) % wines.length);
  };

  return (
    <div className="WineDigitalMenu">
      <button className="btn" onClick={previous}>
        previous
      </button>
      <div className="tablet-screen">
        <div className="safe-area">
          <div
            className="wine-img"
            style={{
              backgroundImage: `url(${wines[page].imageUrl})`,
            }}
          />
          <div className="wine-details">
            <p className="name">{wines[page].name}</p>
            <p className="description1 italic">{wines[page].description1}</p>
            <p className="goodWith">
              <span>godt med: </span>
              {wines[page].goodWith}
            </p>

            <p className="description2">
              <span>beskrivelse: </span>
              {wines[page].description2}
            </p>
            <p className="alcohol">
              <span>alkohol: </span>
              {wines[page].alcohol}
            </p>
            <p className="volume">
              <span>indhold: </span> {wines[page].volume}
            </p>
            <div className="system-label">{wines[page].systemLabel}</div>
          </div>
        </div>
        <div className="bottom-area"></div>
      </div>
      <button className="btn" onClick={next}>
        next
      </button>
      <button
        className="btn"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
        onClick={() => {
          setRoute("home");
        }}>
        Home
      </button>
    </div>
  );
}

export default WineDigitalMenu;
