export const storageUrl =
  "https://sushi-amor-taastrup.s3.eu-north-1.amazonaws.com/";
const pages = {
  1: {}, // cover
  2: {}, // empty page
  3: {}, // price list
  4: {
    name: `BIOLOGIK TERRE DI CHIETI IGT PECORINO`,
    imageUrl: storageUrl + "images/wines/1.png",
    description1: `Frugtig og yderst smagsfyldt vin med mineralske og elegante noter.`,
    goodWith: `Fisk - mager, ost - mild, risotto.`,
    description2: `Vinen har en delikat lys, gul farve i glasset. Duften er frugtig med hints af blomster. Smagen af citrus og fersken er lækker og frisk. Eftersmagen er mineralsk og med en elegant syre.
    `,
    alcohol: `13%`,
    volume: `75cl`,
    systemLabel: "1",
    price: "189kr",
  },
  5: {
    name: `CASTELLANI VILLA LUCIA PINOT GRIGIO`,
    imageUrl: storageUrl + "images/wines/2.png",
    description1: `En fin ledsager til ”alt godt fra havet”, lyse kødretter og milde, bløde ostetyper.`,
    goodWith: `Kylling og kalkun, fisk - mager, fisk - fede.`,
    description2: `Castellani, Pinot Grigio fremstår med en lys farve med grønne reflekser. Duften er meget frisk med en anelse lime. Smagen er velafbalanceret, tør med god fylde og megen frugt. Eftersmagen er medium fyldig med god balance.`,
    alcohol: `12%`,
    volume: `75cl`,
    systemLabel: "2",
    price: "169kr",
  },
  6: {
    name: `BIXIO PINOT GRIGIO ARCOLE DOC`,
    imageUrl: storageUrl + "images/wines/3.png",
    description1: `Nyd vinen som aperitif eller server den til fisk eller lyst kød.`,
    goodWith: `Aperitif, fisk - fede, fisk - mager, kylling og kalkun, skaldyr, sushi.`,
    description2: `Vinen har en sart gul farve i glasset med gyldne reflekser. Duften er rig på blomster og frisk frugt med hints af grønne æbler og abrikos. I munden opleves vinen utrolig frisk med noter af akaciehonning. Der er god balance mellem syre og sødme og en behagelig eftersmag.`,
    alcohol: `12.5%`,
    volume: `75cl`,
    systemLabel: "3",
    price: "219kr",
  },
  7: {
    name: `ARMAS DE GUERRA BLANCO`,
    imageUrl: storageUrl + "images/wines/4.png",
    description1: `Vinen er en oplagt ledsager til grøntsager, fisk og pasta.`,
    goodWith: `Salater, tapas, fisk - fede, fisk - mager`,
    description2: `Vinens farve er hørgul med blege, gyldne strejf. I næsen opleves en aroma af modne hvide frugter, noter af blomster og hints af fennikel. Smagen er dejlig frisk og afsluttes med en intens og frugtig eftersmag.`,
    alcohol: `12.5%`,
    volume: `75 cl`,
    systemLabel: "4",
    price: "185kr",
  },
  8: {
    name: `BABICH FAMILY ESTATES HEADWATERS ORGANIC PINOT NOIR`,
    imageUrl: storageUrl + "images/wines/5.png",
    description1: `Headwaters Organic Pinot Noir kan med succes serveres til vildt eller laks.`,
    goodWith: `Fisk - fede, vildt`,
    description2: `Headwaters Organic Pinot Noir er flot rubinrød i glasset. Duften er blød og lækker, en snert parfumeret, hvorefter følger noter af kirsebær, jordbær og lidt røgede noter. Smagen er mediumfyldig med stor intensitet og cremet struktur.`,
    alcohol: `13%`,
    volume: `75cl`,
    systemLabel: "5",
    price: "329kr",
  },
  9: {
    name: `AVISPA TEMPRANILLO-BIOLÓGICO`,
    imageUrl: storageUrl + "images/wines/6.png",
    description1: `Server Avispa Tempranillo med blåskimmelost, grillet kød eller andre retter med kød.`,
    goodWith: `Grill, ost - kraftig, oksekød.`,
    description2: `Indbydende rød farve i glasset og en behagelig duft af lakrids og morbær. Smagen er frisk og frugtig med noter af mørke bær og urter og en vedholdende, fyldig eftersmag.`,
    alcohol: `13%`,
    volume: `75cl`,
    systemLabel: "6",
    price: "149kr",
  },
  10: {
    name: `AVISPA BLANCO BIOLÓGICO ØKOLOGISK`,
    imageUrl: storageUrl + "images/wines/7.png",
    description1: `orfriskende og velbalanceret hvidvin med en lang eftersmag.`,
    goodWith: `Fisk - mager, pasta og pizza, skaldyr, salater, suppe, sushi, tapas.`,
    description2: `Denne forfriskende hvidvin har en sart, lys gul farve med grønlige strejf. Duften er frisk med noter af græs og frugt. Smagen er velbalanceret med friske noter af nyslået græs og grønne æbler. Eftersmagen er let bitter og vedholdende.`,
    alcohol: `11.5%`,
    volume: `75cl`,
    systemLabel: "7",
    price: "149kr",
  },
  11: {
    name: `ARMAS DE GUERRA ROSÉ`,
    imageUrl: storageUrl + "images/wines/8.png",
    description1: `Server vinen til fisk, lyst kød, pasta eller pizza.`,
    goodWith: `Fisk - fede, fisk - mager, kylling og kalkun, pasta og pizza.`,
    description2: `I glasset fremstår vinen med en sart, lys rød farve. Duften er præget af intense aromaer af roser og jasmin. I munden opleves en eksplosion af røde frugter, som fylder munden og efterlader en følelse af friskhed. Virkelig en interessant og liflig rosévin.`,
    alcohol: `13%`,
    volume: `75cl`,
    systemLabel: "8",
    price: "175kr",
  },
  12: {
    name: `TU NO HONJOZO SAKE BLACK`,
    imageUrl: storageUrl + "images/wines/9.png",
    description1: `Den flotte lille flaske er perfekt til at servere direkte på bordet, hvor den vil pryde enhver japansk anretning.`,
    goodWith: `sushi, ramen, tempura og andre japanske fødevarer`,
    description2:
      "Dette er en såkaldt Honjozo Sake, hvilket vil sige at der tilsættes en anelse alkohol under gæringen. Honjozo er en relativt let, aromatisk sake, med en smule bitterhed, der er meget nem at drikke. En mild og modnet smag, og lidt til den søde side. Den kan drikkes både afkølet og opvarmet. ",
    alcohol: `16%`,
    volume: `180ml`,
    systemLabel: "9",
    price: "99kr",
    canBeChilled: true,
    canBeHeated: true,
  },
  13: {
    name: `TU NO JUNMAI SAKE WHITE `,
    imageUrl: storageUrl + "images/wines/10.png",
    description1: `Den flotte lille flaske er perfekt til at servere direkte på bordet, hvor den vil pryde enhver japansk anretning.`,
    goodWith: `sushi, ramen, tempura og andre japanske fødevarer.`,
    description2: `Dette er en såkaldt Junmai Sake, hvilket vil sige at der ikke er tilføjet destilleret alkohol i gæringsprocessen. Tsu No Junmai er en let, aromatisk sake, med en mild bitterhed, der er meget nem at drikke. En mild og smag, og lidt til den søde side. Den kan drikkes både afkølet og opvarmet.`,
    alcohol: `15%`,
    volume: `180ml`,
    systemLabel: "10",
    price: "99kr",
    canBeChilled: true,
    canBeHeated: true,
  },
  14: {
    name: `MABOROSHI GINJO SEIKYO`,
    imageUrl: storageUrl + "images/wines/11.png",
    description1: `Denne sake er perfekt for dem der er nye i sake verdenen - den er mild og letdrikkelig, men har stadig masser af smag at byde på.`,
    goodWith: `sushi, ramen, tempura og andre japanske fødevarer.`,
    description2: `Den har en let sødlig smag med frugtige og blomstrede noter, flot umami og en let, balanceret syre. Risen af varianten Shinsenbon og er poleret 58%.
    Denne sake favner bredt, og den smukke flaske og det lille tilhørende glas, gør den til en helt særlig oplevelse.
    Serveres bedst ved stuetemperatur eller afkølet.
    `,
    alcohol: `15.4 %`,
    volume: `180ml`,
    systemLabel: "11",
    price: "189kr",
    canBeChilled: true,
    canBeHeated: false,
  },
  15: {
    name: `VIÑA TARAPACÁ SAUVIGNON BLANC KVARTFLASKE`,
    imageUrl: storageUrl + "images/wines/mini_white.png",
    description1: `I en tid hvor vi ønsker mere friske vine, med frisk frugt og elegance, er Sauvignon Blanc svaret på vores bønner. Denne vin er frisk og med god karakter.`,
    goodWith: `Fisk - fede, fisk - mager, sushi, salater
    `,
    description2: `Sprød og lækker hvidvin med flotte grønne reflekser i glasset. Duften er præget af frisk græs og hyldeblomster. Smagen er fokuseret og med fin syre der giver en god længde i eftersmagen.
    `,
    alcohol: `12%`,
    volume: `18.75cl`,
    systemLabel: "12",
    price: "55kr",
  },
  16: {
    name: `VIÑA TARAPACÁ CABERNET SAUVIGNON KVARTFLASKE`,
    imageUrl: storageUrl + "images/wines/mini_red.png",
    description1: `Tør og frisk mousserende vin fra det spanske højland. Dette er et glimrende modsvar til andre mere eksponerede og dyre udgaver af mousserende vin.
    `,
    goodWith: `Oksekød, pasta og pizza, ost - kraftig, ost - mild.`,
    description2: `Vina Tarapaca Cabernet Sauvignon er dyb rubinrød i glasset med en duft af modne solbær og kirsebær samt noter af vanilje Vinen er medium fyldig med en blød smag med god tæt frugt og modne tanniner. 
    `,
    alcohol: `13%`,
    volume: `18.75cl`,
    systemLabel: "13",
    price: "55kr",
  },
  17: {
    name: `MASUMI KARAKUCHI GOLD SAKE`,
    imageUrl: storageUrl + "images/wines/14.png",
    description1: `Den er robust og smagfuld, men formår på samme tid at beholde et let og udtryk og en mild aroma. `,
    goodWith: `grillet fisk, yakitori, teriyaki, sukiyaki og nabe hotpots.
    `,
    description2: `Karakuchi Gold er en af bryggernes favoritter hos Masumi, da den går perfekt til de mere solide og krydrede japanske retter, der er skønne efter en lang dags hårdt arbejde i bryggeriet.`,
    alcohol: `13.4%`,
    volume: `180ml`,
    systemLabel: "14",
    price: "99kr",
    canBeChilled: true,
    canBeHeated: true,
  },
  18: {
    name: `DAISEKKEI GREEN SAKE`,
    imageUrl: storageUrl + "images/wines/15.png",
    description1: `Japansk sake i flot lille grøn flaske med smukke bjerglandskaber på.`,
    goodWith: `sushi og sashimi.`,
    description2: `En fantastisk sake, fra et mikrobryggeri i Nagano. Saken passer godt til de milde nuancer i sushi og sashimi og har en flot balance mellem sødme og tørhed. Den lille grønne flaske med skruelåg gør den perfekt som detalje på sushi-bordet eller til at tage med på skovturen el.lign. 
    `,
    alcohol: `15%`,
    volume: `180ml`,
    systemLabel: "15",
    price: "99kr",
    canBeChilled: true,
    canBeHeated: true,
  },
  19: {
    name: `SAYURI NIGORI SAKE PINK`,
    imageUrl: storageUrl + "images/wines/16.png",
    description1: `Hakutsuru Sayuri er en såkaldt 'Nigori' Sake - en grovfiltreret Sake der byder på et mælkehvidt udseende og en fyldig, cremet smag og mundfornemmelse.`,
    goodWith: `ette kødretter, fisk og sushi,også spicy retter.`,
    description2: `Sayuri bør serveres afkølet mellem 5 og 12 grader Celsius, for at få det bedste udtryk frem. Her får man sødmen, friskheden og den milde, cremede smag. Opvarmet vil den præsentere sig mere bitter og næsten harsk i sit udtryk, så det anbefaler vi ikke.
    `,
    alcohol: `12.5%`,
    volume: `300ml`,
    systemLabel: "16",
    price: "179kr",
    canBeChilled: true,
  },
  20: {}, // cover end
};

export default pages;
