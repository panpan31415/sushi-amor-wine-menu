import React from "react";
import "./index.scss";
import WaterMark from "./waterMark";

let page = ({ wine }) => {
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
    <div className="wine-page-single">
      <WaterMark />
      <div
        className="left-side"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
        }}></div>
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
          <span className="description--title">INDHOLD</span> {volume}
        </p>
        <div className="system-label">{systemLabel}</div>
      </div>
    </div>
  );
};

export default page;
