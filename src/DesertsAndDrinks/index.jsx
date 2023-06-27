import { useRef, useState } from "react";
import { BeerListPage1, BeerListPage2 } from "./BeerListPage";
import CoverPage from "./CoverPage";
import SodaWaterList from "./SodaWaterListPage";
import WinesAndSakeList from "./WinesAndSakeListPage";
import "./index.scss";
import {
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  V10,
  V11,
  V12,
  V13,
  V14,
  V15,
} from "./WinePage";
import { Cakes, IceCreamList } from "./DessertList";
import TeaList from "./TeaList";
import CafePage from "./CaffeListPage";
import CoverEndPage from "./CoverEnd";
import SecondCoverPage from "./SecondCoverPage";
import html2canvas from "html2canvas";

const pages = [
  CoverPage,
  SecondCoverPage,
  SodaWaterList,
  BeerListPage1,
  BeerListPage2,
  CafePage,
  TeaList,
  Cakes,
  IceCreamList,
  WinesAndSakeList,
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  V10,
  V11,
  V12,
  V13,
  V14,
  V15,
  CoverEndPage,
];
const DesertsAndDrinks = () => {
  const [index, setIndex] = useState(0);
  const Page = pages[(index + pages.length) % pages.length];
  const print = useRef();

  const capture = async (ref, pageNumber) => {
    const canvas = await html2canvas(ref.current);
    const img = canvas.toDataURL("image/png", 1);
    const link = document.createElement("a");
    link.download = pageNumber + ".png";
    link.href = img;
    link.click();
  };
  return (
    <div ref={print}>
      <div className="newMenuContainer">
        <div style={{ border: "5mm dashed white" }}>
          <Page />
        </div>

        <button
          className="pageBtn pageBtn--previous"
          onClick={() => setIndex(index - 1)}
        >
          previous
        </button>
        <button
          className="pageBtn pageBtn--next"
          onClick={() => setIndex(index + 1)}
        >
          next
        </button>
        <button
          className="pageBtn pageBtn--capture"
          onClick={() =>
            capture(print, ((index + pages.length) % pages.length) + 1)
          }
        >
          download page: {((index + pages.length) % pages.length) + 1}
        </button>
      </div>
    </div>
  );
};

export default DesertsAndDrinks;
