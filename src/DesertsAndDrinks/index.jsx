import { useState } from "react";
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

const pages = [
  CoverPage,
  SodaWaterList,
  BeerListPage1,
  BeerListPage2,
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
];
const DesertsAndDrinks = () => {
  const [index, setIndex] = useState(0);
  const currentPageIndex = index % pages.length;
  const Page = pages[currentPageIndex];
  return (
    <div className="newMenuContainer">
      <Page />
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
    </div>
  );
};

export default DesertsAndDrinks;
