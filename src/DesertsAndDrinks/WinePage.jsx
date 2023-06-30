import { wines } from "./wines";
import "./WinePage.scss";
const WinePage = ({ wine }) => {
  const {
    name,
    imageUrl,
    description1,
    goodWith,
    description2,
    alcohol,
    volume,
    systemLabel,
  } = wine;
  return (
    <div className="wine-page">
      <div
        className="left-side"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="right-side">
        <h1 className="name"> {name}</h1>
        <hr />
        <p className="description1">{description1}</p>
        <p className="goodWith">
          <span className="description--title">God til:</span> {goodWith}
        </p>

        <p className="description2">{description2}</p>

        <p>
          <span className="description--title">ALKOHOL:</span> {alcohol}
        </p>
        <p>
          <span className="description--title">INDHOLD:</span> {volume}
        </p>
        <div className="wine-system-label">{"V" + systemLabel}</div>
      </div>
    </div>
  );
};

export const V1 = () => <WinePage wine={wines[0]} />;
export const V2 = () => <WinePage wine={wines[1]} />;
export const V3 = () => <WinePage wine={wines[2]} />;
export const V4 = () => <WinePage wine={wines[3]} />;
export const V5 = () => <WinePage wine={wines[4]} />;
export const V6 = () => <WinePage wine={wines[5]} />;
export const V7 = () => <WinePage wine={wines[6]} />;
export const V8 = () => <WinePage wine={wines[7]} />;
export const V9 = () => <WinePage wine={wines[8]} />;
export const V10 = () => <WinePage wine={wines[9]} />;
export const V11 = () => <WinePage wine={wines[10]} />;
export const V12 = () => <WinePage wine={wines[11]} />;
export const V13 = () => <WinePage wine={wines[12]} />;
export const V14 = () => <WinePage wine={wines[13]} />;
export const V15 = () => <WinePage wine={wines[14]} />;
export const V16 = () => <WinePage wine={wines[15]} />;
