import "./projector.scss";
import WaterMark from "./waterMark";
import wines from "../wines";
import { AiOutlineFire } from "react-icons/ai";
import { IoSnowOutline } from "react-icons/io5";

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
      <div className="temperature-icons">
        {wine.canBeHeated && <AiOutlineFire size={15} />}
        {wine.canBeChilled && <IoSnowOutline size={15} />}
      </div>
    </div>
  );
};

const PriceListOnProjector = ({ setRoute }) => (
  <div className="projector">
    <button
      className="nav-btn"
      style={{
        position: "absolute",
        left: "20px",
        top: "20px",
      }}
      onClick={() => setRoute("home")}
    >
      Back
    </button>
    <WaterMark />
    <div className="price-list">
      {wines.map((wine, index) => (
        <PriceListItem key={index} wine={wine} />
      ))}
    </div>
  </div>
);

export default PriceListOnProjector;
