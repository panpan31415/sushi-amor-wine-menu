import "./index.scss";
import WaterMark from "./waterMark";
const CoverEnd = () => (
  <div className="wine-page-single">
    <WaterMark
      styles={{ opacity: 100, width: "190mm", heigh: "190mm", left: "100%" }}
    />
  </div>
);

export default CoverEnd;
