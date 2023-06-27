import "./TeaDigitalMenu.scss";
import { useRef, useState } from "react";
import teas from "./teas";
import html2canvas from "html2canvas";

function TeaItemPage({ tea }) {
  return (
    <div className="safe-area">
      <div className="left">
        <div
          className="img1"
          style={{ backgroundImage: `url(${tea.image1Url})` }}
        ></div>
        <div
          className="img2"
          style={{ backgroundImage: `url(${tea.image2Url})` }}
        ></div>
      </div>
      <div className="right">
        <p>
          <span className="title">navn: </span>
          {tea.name}
        </p>
        <p>
          <span className="title">ingrediens: </span>
          {tea.ingredient}
        </p>
        <p>
          <span className="title">beskrivelse: </span>
          {tea.description}
        </p>
        <p>gratis påfyldning af varmt vand</p>
      </div>
      <div className="system-label">{tea.systemLabel}</div>
    </div>
  );
}

function TeaDigitalMenu({ setRoute }) {
  const [page, setPage] = useState(0);
  const teasArray = Object.keys(teas).map((key) => teas[key]);
  console.log(teasArray);
  const next = () => {
    setPage((page + 1) % teasArray.length);
  };

  const previous = () => {
    setPage((page - 1 + teasArray.length) % teasArray.length);
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
    <div className="TeaDigitalMenu">
      <button className="btn" onClick={previous}>
        previous
      </button>
      <div className="tablet-screen" ref={print}>
        <TeaItemPage tea={teasArray[page]} />
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
        }}
      >
        Home
      </button>
      <button
        className="btn"
        onClick={() => {
          capture(print.current, teasArray[page].systemLabel);
        }}
        style={{
          position: "absolute",
          left: "20px",
          bottom: "20px",
          width: "180px",
        }}
      >
        Download Page: {teasArray[page].systemLabel}
      </button>
    </div>
  );
}

export default TeaDigitalMenu;
