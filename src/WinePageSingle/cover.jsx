import "./index.scss";
import WaterMark from "./waterMark";
const Cover = () => (
  <div className="wine-page-single">
    <WaterMark />

    <img alt="logo" src="images/wine_glasses.png" className="cover-glasses" />
    <p className="cover-menu-text">SUSHI AMOR VIN MENU</p>
  </div>
);

export default Cover;
