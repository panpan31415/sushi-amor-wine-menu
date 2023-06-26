import { Fragment } from "react";
import "./DessertList.scss";

const cakesUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/cakes/";

const cakes = [
  {
    name: "BLÅBÆR LAGKAGE",
    price: "45kr/stk",
    description:
      "Blød og saftig blåbærkage med to cremer. Lilla svamp farvet med planteekstrakter, fyldt med blåbæryoghurt, creme fraiche og flødeskum. Kagen er dækket med blåbær, blåbærpuré og gelé.",
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
      "Dobbeltslags kage, let og lækker svampebund kage med laktosefri flødeskum imellem. Kagen er toppet med jordbærskiver og rød jordbærgele.",
    imgUrl: cakesUrl + "starwberry_cake.png",
  },
];

const DessertList = () => {
  const cake1 = cakes[0];
  const cake2 = cakes[1];
  const cake3 = cakes[2];
  return (
    <div className="dessertPage a4">
      <h2 className="listTitle">Desserter</h2>
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

export default DessertList;
