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
  const contain = systemLabel === "8" ? { backgroundSize: "contain" } : {};
  return (
    <div className="wine-page-single">
      <WaterMark />
      <div
        className="left-side"
        style={{
          backgroundImage: `url(${imageUrl})`,
          ...contain,
        }}></div>
      <div className="right-side">
        <h1 className="name"> {name}</h1>
        <hr />
        <p className="description">{description1}</p>
        <p>
          <span className="description--title">God til:</span> {goodWith}
        </p>
        <br />
        <p>{description2}</p>
        <br />
        <p>
          <span className="description--title">ALKOHOL:</span> {alcohol}
        </p>
        <p>
          <span className="description--title">INDHOLD</span> {volume}
        </p>
        <br />

        <div className="system-label">{systemLabel}</div>
      </div>
    </div>
  );
};

export default page;
