import "./CaffeListPage.scss";
const caffes = [
  {
    name: "Intenso",
    intensity: 9,
    cupSize: "230 ml",
    aromaticProfile: "Kraftig & tæt",
    description:
      "En overraskende kraftig og fyldig kaffe. Intenso-blandingen adskiller sig takket være dens lange eftersmag. Puddersukker og kraftige ristede undertoner bringer en enestående signatur til denne mørkristede kaffe bestående af Robusta fra Guatemala og central-og sydamerikansk Arabica.",
    price: "25",
    imgUrl:
      "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/caffe/intenso.png",
  },
  {
    name: "Stormio",
    intensity: 8,
    cupSize: "230 ml",
    aromaticProfile: "Fyldig & kraftig",
    description: `Stormio er en mørkt ristet blanding, der blæser dig omkuld sit væld af aromaer. Men kan det passe, at hele den kraftige smag udelukkende stammer fra rene Arabica-kaffer?
      En langvarig og langsom ristning intensiverer nicaraguanske og guatemalanske kornagtige aromaer til noter af krydderier og træ.
      De er allesammen Arabica-kaffer, der er dyrket i højlandet, og som vi rister kraftigt for ekstra intensitet. Men denne Vertuo-kaffekapsel er stadig blød og fyldig.
      
      Mælk kan muligvis lægge en dæmper på Stormio – men du kan stadig smage de kraftige, ristede noter, der tager dig med storm, efterhånden som smagen ruller sig ud.`,
    price: "25",
    imgUrl:
      "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/caffe/stormia.png",
  },
  {
    name: "Melozio",
    intensity: 6,
    cupSize: "230 ml",
    aromaticProfile: "Blød & afbalanceret",
    description: `Du kan ikke undgå at falde for Melozio. Det er en harmonisk blanding af latinamerikanske Arabica-kaffer, der nynner en melodi af bløde noter af korn og honningagtig sødme. Denne Vertuo-kaffe har en aroma af ren nydelse. Vi vælger brasiliansk kaffe af Bourbon-varianten, som er kendt og elsket for sin sødme og markante note af korn. Den ristes og blandes med let ristede mellemamerikanske Arabica-kaffer, der afrunder denne Vertuo-kaffe. Split-ristningen gør det muligt for den brasilianske Bourbon at udvikle sin note af korn, så du får en sød og mild kaffe. Det er svært ikke at falde for den her kaffe.`,
    price: "25",
    imgUrl:
      "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/caffe/melozio.png",
  },
];

const IntensityContainer = ({ intensity }) => {
  const IntensityBoxes = () =>
    Array.from({ length: 10 }, (i, v) => {
      let boxStyle = "intensity";
      if (v < intensity) {
        boxStyle = "intensity--filled";
      }
      return <div key={v} className={boxStyle} />;
    });

  return (
    <div className="intensity__container">
      <p className="intensity__number">intensitet:{intensity}</p>
      <div className="intensity__boxes">
        {<IntensityBoxes intensity={intensity} />}
      </div>
    </div>
  );
};

const CafeItem = ({ cafe, index }) => {
  return (
    <div className={"cafeItem--" + (index + 1)}>
      <img className="cafeItem__image" src={cafe.imgUrl} alt="Nepresse" />
      <div className="cafeItem__info">
        <div className="cafeItem__name">
          <p>{cafe.name}</p>
        </div>
        <IntensityContainer intensity={cafe.intensity} />
        <div className="cafeItem__capacity">
          <p className="cafeItem__capacity--label"> Kopstørrelse:</p>
          <p className="cafeItem__capacity--value">{cafe.cupSize}</p>
        </div>
        <div className="cafeItem__aromatic">
          <p className="cafeItem__aromatic--label">Aromatisk Profil: </p>
          <p className="cafeItem__aromatic--value">{cafe.aromaticProfile}</p>
        </div>
        <div className="cafeItem__priceContainer">
          <p className="cafeItem__price">{cafe.price}</p>
          <p className="cafeItem__priceUnit">kr/kop</p>
        </div>
      </div>
    </div>
  );
};

const CafePage = () => {
  return (
    <div className="cafePage a4">
      <h2 className="cafeListTitle">Nespresso Kaffe</h2>
      {caffes.map((cafe, index) => (
        <CafeItem cafe={cafe} key={index} index={index} />
      ))}
    </div>
  );
};

export default CafePage;
