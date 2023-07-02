import { Fragment } from "react";
import "./DessertList.scss";

const cakesUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/cakes/";

const cakes = [
  {
    name: "BLÅBÆR LAGKAGE",
    price: "45kr/stk",
    description:
      "let og lækker blåbærkage med to cremer. Fyldt med blåbæryoghurt, creme fraiche og flødeskum. Kagen er toppet med blåbær, blåbærpuré og gelé.",
    imgUrl: cakesUrl + "blueberry_cake.png",
  },
  {
    name: "CHOKOLADEKAGE",
    price: "45kr/stk",
    description:
      "Kagebund med chokolademousse overtrukket med mørk chokoladesauce og chokoladestykker.",
    imgUrl: cakesUrl + "chocklate_cake.png",
  },
  {
    name: "JORDBÆR CREME LAGKAGE",
    price: "45kr/stk",
    description:
      "Dobbeltslags kage, let og lækker kage med laktosefri flødeskum imellem. Kagen er toppet med jordbærskiver og rød jordbærgele.",
    imgUrl: cakesUrl + "starwberry_cake.png",
  },
];

export const Cakes = () => {
  const cake1 = cakes[0];
  const cake2 = cakes[1];
  const cake3 = cakes[2];
  return (
    <div className="dessertPage a4">
      <h2 className="desertListTitle">Desserter</h2>
      <Fragment>
        <div className="cake cake--1">
          <div
            className="cake__image"
            style={{
              backgroundImage: `url(${cake1.imgUrl})`,
            }}
          />
        </div>
        <div className="cake__info cake--1__info">
          <div className="cake__name">
            <p>{cake1.name}</p>
          </div>
          <div className="cake__price cake--1__price">
            <p>{cake1.price}</p>
          </div>
          <div className="cake__description">
            <p>{cake1.description}</p>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="cake cake--2">
          <div
            className="cake__image"
            style={{
              backgroundImage: `url(${cake2.imgUrl})`,
            }}
          />
        </div>
        <div className="cake__info cake--2__info">
          <div className="cake__name cake--2__name">
            <p>{cake2.name}</p>
          </div>
          <div className="cake__price cake--2__price">
            <p>{cake2.price}</p>
          </div>
          <div className="cake__description">
            <p>{cake2.description}</p>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="cake cake--3">
          <div
            className="cake__image"
            style={{
              backgroundImage: `url(${cake3.imgUrl})`,
            }}
          />
        </div>
        <div className="cake__info cake--3__info">
          <div className="cake__name cake--3__name">
            <p>{cake3.name}</p>
          </div>
          <div className="cake__price cake--3__price">
            <p>{cake3.price}</p>
          </div>
          <div className="cake__description">
            <p>{cake3.description}</p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

const iceCreamUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/icecreams/";

const icecreams = [
  {
    name: "vanilje is",
    description:
      "sommerland klassisk is med vaniljesmag, vi putter normalt 3 kugler i en lille skål, toppet med mælkecreme, jordbærsaucer og sukkerperler. Det er inkluderet i ad libitum menuen.",
    price: "35kr/skål",
    imgUrl: iceCreamUrl + "vanila_icecream.png",
  },
  {
    name: "chokolade is",
    description:
      "sommerland klassisk is med chokolade, vi plejer at putte 3 kugler i en lille skål, toppet med mælkecreme, chokoladesaucer og sukkerperler. Det er inkluderet i ad libitum menuen.",
    price: "35kr/skål",
    imgUrl: iceCreamUrl + "choclate_icecream.png",
  },
];

export const IceCreamList = () => {
  const icecream1 = icecreams[0];
  const icecream2 = icecreams[1];

  return (
    <div className="dessertPage a4">
      <h2 className="desertListTitle">Desserter</h2>
      <Fragment>
        <div className="icecream1">
          <div className="icecream1__left">
            <img
              className="icecream1__image"
              src={icecream1.imgUrl}
              alt="icecream_image"
            />
          </div>
          <div className="icecream1__right">
            <h3 className="icecream1__name">{icecream1.name}</h3>
            <p className="icecream1__price">{icecream1.price}</p>
            <p className="icecream1__description">{icecream1.description}</p>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="icecream2">
          <div className="icecream2__left">
            <h3 className="icecream2__name">{icecream2.name}</h3>
            <p className="icecream2__price">{icecream2.price}</p>
            <p className="icecream2__description">{icecream2.description}</p>
          </div>
          <div className="icecream2__right">
            <img
              className="icecream2__image"
              src={icecream2.imgUrl}
              alt="icecream_image"
            />
          </div>
        </div>
      </Fragment>
    </div>
  );
};
