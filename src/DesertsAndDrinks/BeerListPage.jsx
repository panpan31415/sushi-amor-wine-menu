import ContentPage from "./ContentPage";
import "./BeerListPage.scss";
export const beers = [
  {
    name: "Sapporo Premium",
    descriptions: [
      `Sapporo Premium er den mest populære øl på japanske restauranter og izakaykas.
     `,
      `Denne lyse pilsner er meget let, blød og tør – bare ikke helt så tør som rivalen Asahi Super Dry.`,

      `Beskeden humlebitterhedsniveauer og høj kulsyre giver en jævn drikkeoplevelse. Den aromatiske intensitet af denne øl er beskeden, med citrusagtige, blomsteragtige og Kornede noter.`,
    ],
    alcohol: "4.7%",
    imgUrl: "sappro.png",
    price: "45kr/stk(33cl)",
  },
  {
    name: "Asahi super dry",
    descriptions: [
      `Asahi Super Dry er brygget med den fineste maltede byg, humle, gær og ris for at give den en tør, sprød smag og hurtig, ren finish, der aldrig bliver hængende. Vi kalder det Karakuchi.`,
      `Asahi Super Dry beskrives som en stærkt dæmpet pilsner uden den tungere maltsmag fra konkurrenternes produkter, med en sprød, tør smag, der minder om nogle nordtyske øl.`,
    ],
    alcohol: "5.2%",
    imgUrl: "asahi.png",
    price: "45kr/stk(33cl)",
  },
  {
    name: "Kirin Ichiban",
    descriptions: [
      `Kirin Ichiban er en lys, gylden og filtreret pilsner fra Japan. Duften er mild og frisk, og det er malten, der skinner igennem i aromaen.`,
      `Smagen er elegant og øllen er letdrikkelig og forfriskende af karakter. Malten giver en fin sødme og nuancer af brød, kiks og nødder. I eftersmagen får sødmen selskab af en fin humlebitterhed, der skaber en flot balance. Alt i alt en let og behagelig pilsner der går godt til mange forskellige retter i det asiatiske køkken`,
    ],
    alcohol: "5%",
    imgUrl: "kirin.png",
    price: "45kr/stk(33cl)",
  },
  {
    name: "Tuborg Classic",
    descriptions: [
      `Den originale ’Classic’ blev introduceret i anledning af Tuborgs 120 års fødselsdag.`,
      `Tilsammen resulterer den komplekse kombination af flere forskellige typer malt i en legende blanding af en letdrikkelig øl med masser af god smag. Øllen er mørk i farven og har en lille smule sødme i smagen.`,
    ],
    alcohol: "4.6%",
    imgUrl: "tuborg-classic.png",
    price: `40kr/250ml 
            55kr/500ml 
            78kr/750ml`,
  },
  {
    name: "Kronenbourg 1664 Blanc",
    descriptions: [
      `1664 Blanc smager forfriskende med mild sødme, balancerende krydderier, hvedenoter og frugtighed fra eksotiske frugter med et strejf af citron. `,
      `Selvom den har en frugtagtig karakter, blander den sig med en let syrlighed og afsluttes med en mild bitter smag fra humlen og tilsat koriander.`,
    ],
    alcohol: "5%",
    imgUrl: "blanc.png",
    price: "49kr/stk(33cl)",
  },
  {
    name: "Kronenbourg 1664 Blanc 0.0",
    descriptions: [
      `Den samme forfriskende citrusfrugt og koriandersmag, som du forventer og nyder fra en Kronenbourg 1664 Blanc, men uden alkoholen.`,
      `Til de øjeblikke, hvor alkoholfri øl og gode venner er den perfekte idé: du smager ikke forskellen.`,
    ],
    alcohol: "0.0%",
    imgUrl: "blanc_0.png",
    price: "49kr/stk(33cl)",
  },
  {
    name: "Carlsberg Pilsner",
    descriptions: [
      `Det er en sprød, forfriskende, perfekt afbalanceret øl, der har en fuld smag og humlet aroma.`,
      `Carlsberg Danish Pilsner er brygget med principperne lært fra over 100 års bryggerfaring for at producere en pilsner med karakteristiske citrus- og blomsterhumlearomaer, der leverer stor smagsdybde, hvilket gør den til den perfekte øl for dem, der værdsætter autentiske drikkeoplevelser af høj kvalitet.`,
    ],
    alcohol: "5%",
    imgUrl: "pilsen.png",
    price: "35kr/stk(33cl)",
  },
  {
    name: "Carlsberg Nordic Pilsner 0,0%",
    descriptions: [
      `Carlsberg Nordic Pilsner 0,0% er frisk, livlig og har en fyldig maltsødme sat i elegant balance af en mild efterbitterhed.`,
      `Læskende som almindelig pilsner – men helt uden alkohol.`,
    ],
    alcohol: "0.0%",
    imgUrl: "pilsen_nordic.png",
    price: "35kr/stk(33cl)",
  },
];

export const beerUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/images/beer/";

export const BeerItem = ({ beer }) => {
  return (
    <div className="item">
      <div
        className="item__image"
        style={{
          backgroundImage: `url(${beerUrl + beer.imgUrl})`,
        }}
      />
      <div className="item__info">
        <div className="item__name">{beer.name}</div>
        <div className="item__description">
          {beer.descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <div className="item__alcohol">Alkohol: {beer.alcohol}</div>
        <div className="item__price">Pris: {beer.price}</div>
      </div>
    </div>
  );
};
export const BeerListPage1 = () => {
  const beerlist1 = beers.slice(0, 4);

  return (
    <ContentPage>
      <h2 className="title">øl</h2>
      <div className="beerContainer">
        {beerlist1.map((beer, index) => (
          <BeerItem beer={beer} key={index} />
        ))}
      </div>
    </ContentPage>
  );
};

export const BeerListPage2 = () => {
  const beerlist2 = beers.slice(4, 8);

  return (
    <ContentPage>
      <h2 className="title">øl</h2>
      <div className="beerContainer">
        {beerlist2.map((beer, index) => (
          <BeerItem beer={beer} key={index} />
        ))}
      </div>
    </ContentPage>
  );
};
