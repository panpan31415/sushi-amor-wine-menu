import "./WineDigitalMenu.scss";
import { useRef, useState } from "react";
import wines from "./wines";
import html2canvas from "html2canvas";
function WineDigitalMenu({ setRoute }) {
  const [page, setPage] = useState(0);

  const next = () => {
    setPage((page + 1) % wines.length);
  };

  const previous = () => {
    setPage((page - 1 + wines.length) % wines.length);
  };

  const print = useRef();

  const capture = async (ref, page) => {
    const canvas = await html2canvas(ref);
    const img = canvas.toDataURL("image/png", 1);
    const link = document.createElement("a");
    link.download = page + ".png";
    link.href = img;
    link.click();
  };

  return (
    <div className="WineDigitalMenu">
      <button className="btn" onClick={previous}>
        previous
      </button>
      <div className="tablet-screen" ref={print}>
        <div className="safe-area">
          <div
            className="wine-img"
            style={{
              backgroundImage: `url(${wines[page].imageUrl})`,
            }}
          />
          <div className="wine-details">
            <p className="name">{wines[page].name}</p>
            <hr />
            <p className="description1">{wines[page].description1}</p>
            <p className="goodWith">
              <span className="title">godt med: </span>
              {wines[page].goodWith}
            </p>

            <p className="description2">
              <span className="title">beskrivelse: </span>

              {wines[page].description2}
            </p>
            <p className="alcohol">
              <span className="title">alkohol: </span>
              {wines[page].alcohol}
            </p>
            <p className="volume">
              <span className="title">indhold: </span> {wines[page].volume}
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
      <button
        className="btn"
        onClick={() => {
          capture(print.current, wines[page].systemLabel);
        }}
        style={{
          position: "absolute",
          left: "20px",
          bottom: "20px",
          width: "180px",
        }}>
        Download Page: {wines[page].systemLabel}
      </button>
    </div>
  );
}

export default WineDigitalMenu;
