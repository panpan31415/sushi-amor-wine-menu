import React from "react";
import "./index.scss";

let page = ({ imageSrc, name, description }) => {
  return (
    <div className="wine-page-single">
      <div className="left-side">
        <img alt="wine_1" src={require("../images/wines/1.png")} />
      </div>
      <div className="right-side">
        <h1 className="name">LÉGENDE "R" ROUGE</h1>
        <hr />
        <p className="description">En elegant og let drikkelig vin.</p>
        <br />
        <br />
        <p>
          <span className="description--title">God til:</span> Grill, ost -
          kraftig, ost - mild, asiatiske retter
        </p>
        <br />
        <p>
          Dyb lilla farve med en charmerende duft af solbær, kirsebær og lidt
          toastede noter fra fadlagringen. Smagen er fyldig og struktureret med
          gode bløde tanniner og en frugtdomineret afslutning af smagen.
        </p>
        <br />
        <p>
          <span className="description--title">ALKOHOL:</span> 13 %
        </p>
        <p>
          <span className="description--title">INDHOLD</span> 75 cl
        </p>
        <br />
        <p>
          <span className="description--title">Pris</span>ttjek vores digitale
          meun eller spørg en tjener
        </p>
        <div className="system-label">1</div>
      </div>
    </div>
  );
};

export default page;
