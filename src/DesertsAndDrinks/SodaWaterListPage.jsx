import { Fragment } from "react";
import ContentPage from "./ContentPage";
import "./SodaWaterList.scss";
export const sodaWaterUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/sodawater/";

export const sodaWaterList = [
  {
    name: "Coca Cola",
    description: "",
    imgUrl: "cococola.png",
  },
  {
    name: "Cola Zero",
    description: "",
    imgUrl: "colazero.png",
  },
  {
    name: "Pepsi Max",
    description: "",
    imgUrl: "pepsimax.png",
  },
  {
    name: "Schweppes Lemon",
    description: "",
    imgUrl: "schweppeslemon.png",
  },
  {
    name: "Fanta",
    description: "",
    imgUrl: "fanta.png",
  },
  {
    name: "Faxe Kondi",
    description: "",
    imgUrl: "faxekondi.png",
  },
  {
    name: "Aqua dor mineralvand",
    description: "unde brus",
    imgUrl: "aquador.png",
  },
  {
    name: "Hyldeblomst",
    description:
      "kan være med Solbær eller normal,kan være med sodavand eller uden sodavand",
    imgUrl: "elderflower.png",
  },
  {
    name: "æblejuice",
    description: "",
    imgUrl: "apple-juice.png",
  },
  {
    name: "Appelsinjuice",
    description: "",
    imgUrl: "orange-juice.png",
  },
  {
    name: "Danske Vand",
    description: `det er med brus, kan kome med eller uden citronsmag,`,
    imgUrl: "sparkingWater.png",
  },
  {
    name: "isvand",
    description: "isvand serveret med et stykke citron, andet glas gratis",
    imgUrl: "ice-water.png",
  },
];

const SodaWaterPrice = () => {
  return (
    <Fragment>
      <div className="sodaWaterAndJuice__volume--s">0.25 L</div>
      <div className="sodaWaterAndJuice__volume--m">0.50 L</div>
      <div className="sodaWaterAndJuice__volume--l">0.75 L</div>
      <div className="sodaWaterAndJuice__price--s">40kr.</div>
      <div className="sodaWaterAndJuice__price--m">55kr.</div>
      <div className="sodaWaterAndJuice__price--l">75kr.</div>
    </Fragment>
  );
};

const MineralWaterPrice = () => {
  return (
    <Fragment>
      <div className="sodaWaterAndJuice__price--s">25kr/flask</div>
    </Fragment>
  );
};

const IcelWaterPrice = () => {
  return (
    <Fragment>
      <div className="sodaWaterAndJuice__price--s">20kr.</div>
    </Fragment>
  );
};

export const SodaWaterItem = ({ imgUrl, name, description }) => {
  let pictureStyle = {};

  if (name.includes("Appelsinjuice")) {
    pictureStyle = { transform: "scale(1.4)" };
  }
  if (name.includes("æblejuice")) {
    pictureStyle = { transform: "scale(1.6)" };
  }
  if (name.includes("Danske Vand")) {
    pictureStyle = { transform: "scale(.7)" };
  }
  if (name.includes("Hyldeblomst")) {
    pictureStyle = { transform: "scale(.6)" };
  }
  let Price = () => <SodaWaterPrice />;
  if (name.includes("Aqua")) {
    Price = () => <MineralWaterPrice />;
  }
  if (name.includes("isvand")) {
    Price = () => <IcelWaterPrice />;
    pictureStyle = { transform: "scale(1.2)" };
  }
  return (
    <div className="sodaWaterAndJuice__item">
      <div
        className="sodaWaterAndJuice__picture"
        style={{
          backgroundImage: `url(${sodaWaterUrl + imgUrl})`,
          ...pictureStyle,
        }}
      />
      <p className="sodaWaterAndJuice__title">{name}</p>
      {description && (
        <p className="sodaWaterAndJuice__description">{description}</p>
      )}
      <Price />
    </div>
  );
};
const first6 = sodaWaterList.slice(0, 12);
const SodaWaterList = () => {
  return (
    <ContentPage>
      <h2 className="listTitle">vand og juice</h2>
      <div className="sodaWaterAndJuice">
        {first6.map((item, index) => {
          return (
            <SodaWaterItem
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </div>
    </ContentPage>
  );
};

export default SodaWaterList;
