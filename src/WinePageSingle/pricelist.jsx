import "./index.scss";
import WaterMark from "./waterMark";
import wines from "../wines";

const PriceListItem = ({ wine }) => {
  return (
    <div className="price-list-item">
      <div
        className="price-list-item__img"
        style={{ backgroundImage: `url(${wine.imageUrl})` }}
      />
      <label>{wine.systemLabel}</label>
      <p>
        {wine.volume}: {wine.price}
      </p>
    </div>
  );
};

const PriceList = () => (
  <div className="wine-page-single">
    <WaterMark />
    <div className="price-list">
      {wines.map((wine, index) => (
        <PriceListItem key={index} wine={wine} />
      ))}
    </div>
  </div>
);

export default PriceList;
