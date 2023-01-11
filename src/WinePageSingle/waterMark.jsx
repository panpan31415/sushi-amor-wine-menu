import "./watermark.scss";
import { storageUrl } from "../pages";
const WaterMark = ({ styles }) => (
  <div
    className="water-mark"
    style={{
      backgroundImage: `url(${storageUrl + "images/logo.png"})`,
      ...styles,
    }}
  />
);

export default WaterMark;
