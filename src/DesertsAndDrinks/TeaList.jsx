import "./TeaList.scss";
const teaUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/tea/";

const teas = [
  {
    systemLabel: "T1",
    name: "Grøn Gojibær Te",
    ingredient: "Grøn te, Gojibær, Citrongræs, Granatæble, Aroma, Kornblomst",
    description: `Klassisk mild og blød økologisk grøn Sencha te fra Kina kombineret med skønne japanske gojibær, frisk granatæble, søde blåbær samt citrongræs og kornblomst. Gratis genopfyldning.`,
    price: "79kr/kande",
    imgUrl1: "T1_1.png",
    imgUrl2: "T1_2.png",
  },
  {
    systemLabel: "T2",
    name: "Æble Te, Økologisk",
    ingredient: "Sort te, Æblestykker, Naturlig æble aroma",
    description: `Sort økologisk Keemun te og økologiske æblestykker af højeste kvalitet. Keemun te er kendt som en af de mildere sorte teer og derfor er indholdet af garvesyre ret begrænset. Tilføj dertil æblestykker og du får den perfekte eftermiddagste.
    Gratis genopfyldning.
    `,
    price: "69kr/kande",
    imgUrl1: "T2_1.png",
    imgUrl2: "T2_2.png",
  },
  {
    systemLabel: "T4",
    name: "Kinesisk Forårs Te (Chinese Spring Tea)",
    ingredient:
      "Sort Ceylon te, Grøn te, Kirsebær, Rosenblade, Jasmin blomster, Aroma",
    description: `Kinesisk Forårste er en skøn blanding med en herlig duft af forår. Den er sammensat af både grøn og sort te og er en smagfuld blanding. Klassisk Ceylon te kombineret med grøn te giver dig en let og alligevel fyldig kop te. Tilføj derudover rose, jasmin, kirsebær og bergamotte, så får du en fantastisk teoplevelse.
    Gratis genopfyldning.
    `,
    price: "69kr/kande",
    imgUrl1: "T4_1.png",
    imgUrl2: "T4_2.png",
  },
  {
    systemLabel: "T3",
    name: "Grøn Sakura Te (Japansk Kirsebær)",
    ingredient: "Grøn te, Kirsebær aroma, Rosenblade",
    description: `Grøn Sakura te er sammensat af den milde og klassiske grønne Sencha te, japanske sakura kirsebær samt rosenblade. En skøn te der smager af forår. Gratis genopfyldning.`,
    price: "79kr/kande",
    imgUrl1: "T3_1.png",
    imgUrl2: "T3_2.png",
  },
];

const TeaItem = ({ tea }) => {
  let style = {};
  if (tea.systemLabel === "T4") {
    style = {
      transform: "translateY(-20mm)",
    };
  }
  return (
    <div className="teaItem" style={style}>
      <div className="teaItem__systemLabel">{tea.systemLabel}</div>
      <div className="teaItem__imgContainer">
        <img
          src={teaUrl + tea.imgUrl1}
          alt={tea.name}
          className="teaItem__img"
        />
        <img
          src={teaUrl + tea.imgUrl2}
          alt={tea.name}
          className="teaItem__img"
        />
      </div>
      <div className="teaItem__info">
        <p className="teaItem__name">{tea.name}</p>
        <p className="teaItem__price">{tea.price}</p>
        <p className="teaItem__description">Ingredienser: {tea.ingredient}</p>
        <p className="teaItem__description">{tea.description}</p>
      </div>
    </div>
  );
};

const TeaList = () => {
  return (
    <div className="a4 teapage ">
      <h2 className="teaPageTitle">te</h2>
      <div className="teaListContainer">
        {teas.map((tea, index) => {
          return <TeaItem tea={tea} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TeaList;
