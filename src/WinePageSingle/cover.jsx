import "./index.scss";
import WaterMark from "./waterMark";
const Cover = () => (
  <div className="wine-page-single">
    <WaterMark
      styles={{ opacity: 100, width: "190mm", heigh: "190mm", left: "0" }}
    />

    <img alt="logo" src="images/wine_glasses.png" className="cover-glasses" />
    <p className="cover-menu-text">SUSHI AMOR VIN MENU</p>
  </div>
);

export default Cover;
