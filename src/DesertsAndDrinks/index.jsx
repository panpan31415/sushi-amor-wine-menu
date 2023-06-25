import { BeerListPage1, BeerListPage2 } from "./BeerListPage";
import CoverPage from "./CoverPage";
import SodaWaterList from "./SodaWaterListPage";
import WinesAndSakeList from "./WinesAndSakeListPage";
import "./index.scss";
const DesertsAndDrinks = () => {
  return (
    <div className="newMenuContainer">
      <WinesAndSakeList />
    </div>
  );
};

export default DesertsAndDrinks;
