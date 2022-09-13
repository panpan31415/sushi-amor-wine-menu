const pages = {
  1: {}, // cover
  2: {}, // empty page
  3: {}, // price list
  4: {
    name: `BIOLOGIK TERRE DI CHIETI IGT PECORINO`,
    imageUrl: "images/wines/1.png",
    description1: `En god ledsager til fisk, bløde oste og risotto.`,
    goodWith: `Fisk - mager, ost - mild, risotto`,
    description2: `Vinen har en delikat lys, gul farve i glasset. Duften er frugtig med hints af blomster. Smagen af citrus og fersken er lækker og frisk. Eftersmagen er mineralsk og med en elegant syre.
    `,
    alcohol: `13 %`,
    volume: `75 cl`,
    systemLabel: "1",
  },
  5: {
    name: `CASTELLANI VILLA LUCIA PINOT GRIGIO`,
    imageUrl: "images/wines/2.png",
    description1: `En fin ledsager til ”alt godt fra havet”, lyse kødretter og milde, bløde ostetyper.`,
    goodWith: `Kylling og kalkun, fisk - mager, fisk - fede`,
    description2: `Castellani, Pinot Grigio fremstår med en lys farve med grønne reflekser. Duften er meget frisk med en anelse lime. Smagen er velafbalanceret, tør med god fylde og megen frugt. Eftersmagen er medium fyldig med god balance.`,
    alcohol: `12 %`,
    volume: `75 cl`,
    systemLabel: "2",
  },
  6: {
    name: `BIXIO PINOT GRIGIO ARCOLE DOC`,
    imageUrl: "images/wines/3.png",
    description1: `Nyd vinen som aperitif eller server den til fisk eller lyst kød.`,
    goodWith: `Aperitif, fisk - fede, fisk - mager, kylling og kalkun, skaldyr, sushi`,
    description2: `Vinen har en sart gul farve i glasset med gyldne reflekser. Duften er rig på blomster og frisk frugt med hints af grønne æbler og abrikos. I munden opleves vinen utrolig frisk med noter af akaciehonning. Der er god balance mellem syre og sødme og en behagelig eftersmag.`,
    alcohol: `12.5 %`,
    volume: `75 cl`,
    systemLabel: "3",
  },
  7: {
    name: `ARMAS DE GUERRA BLANCO`,
    imageUrl: "images/wines/4.png",
    description1: `Vinen er en oplagt ledsager til grøntsager, fisk og pasta.`,
    goodWith: `Salater, tapas, fisk - fede, fisk - mager`,
    description2: `Vinens farve er hørgul med blege, gyldne strejf. I næsen opleves en aroma af modne hvide frugter, noter af blomster og hints af fennikel. Smagen er dejlig frisk og afsluttes med en intens og frugtig eftersmag.`,
    alcohol: `12.5 %`,
    volume: `75 cl`,
    systemLabel: "4",
  },
  8: {
    name: `BABICH FAMILY ESTATES HEADWATERS ORGANIC PINOT NOIR`,
    imageUrl: "images/wines/5.png",
    description1: `Headwaters Organic Pinot Noir kan med succes serveres til vildt eller laks.`,
    goodWith: `Fisk - fede, vildt`,
    description2: `Headwaters Organic Pinot Noir er flot rubinrød i glasset. Duften er blød og lækker, en snert parfumeret, hvorefter følger noter af kirsebær, jordbær og lidt røgede noter. Smagen er mediumfyldig med stor intensitet og cremet struktur. Der er masser af røde frugter og saftig syre. Lækker og vedholdende eftersmag.`,
    alcohol: `13 %`,
    volume: `75 cl`,
    systemLabel: "5",
  },
  9: {
    name: `AVISPA TEMPRANILLO-BIOLÓGICO`,
    imageUrl: "images/wines/6.png",
    description1: `Server Avispa Tempranillo med blåskimmelost, grillet kød eller andre retter med kød`,
    goodWith: `Grill, ost - kraftig, oksekød`,
    description2: `Indbydende rød farve i glasset og en behagelig duft af lakrids og morbær. Smagen er frisk og frugtig med noter af mørke bær og urter og en vedholdende, fyldig eftersmag.`,
    alcohol: `13 %`,
    volume: `75 cl`,
    systemLabel: "6",
  },
  10: {
    name: `ARMAS DE GUERRA ROSÉ`,
    imageUrl: "images/wines/7.png",
    description1: `Server vinen til fisk, lyst kød, pasta eller pizza.`,
    goodWith: `Fisk - fede, fisk - mager, kylling og kalkun, pasta og pizza`,
    description2: `I glasset fremstår vinen med en sart, lys rød farve. Duften er præget af intense aromaer af roser og jasmin. I munden opleves en eksplosion af røde frugter, som fylder munden og efterlader en følelse af friskhed. Virkelig en interessant og liflig rosévin.`,
    alcohol: `13 %`,
    volume: `75 cl`,
    systemLabel: "7",
  },
  11: {
    name: `TU NO HONJOZO SAKE BLACK`,
    imageUrl: "images/wines/8.png",
    description1: `Den flotte lille flaske er perfekt til servere direkte på bordet, hvor den vil pryde enhver japansk anretning.`,
    goodWith: `sushi, ramen, tempura og andre japanske fødevarer`,
    description2:
      "Dette er en såkaldt Honjozo Sake, hvilket vil sige at der tilsættes en anelse alkohol under gæringen. Honjozo er en relativt let, aromatisk sake, med en smule bitterhed, der er meget nem at drikke. En mild og modnet smag, og lidt til den søde side. Den kan drikkes både afkølet og opvarmet. ",
    alcohol: `16 %`,
    volume: `180 ml`,
    systemLabel: "8",
  },
  12: {
    name: `TU NO JUNMAI SAKE WHITE `,
    imageUrl: "images/wines/9.png",
    description1: `Den flotte lille flaske er perfekt til servere direkte på bordet, hvor den vil pryde enhver japansk anretning.`,
    goodWith: `sushi, ramen, tempura og andre japanske fødevarer`,
    description2: `Dette er en såkaldt Junmai Sake, hvilket vil sige at der ikke er tilføjet destilleret alkohol i gæringsprocessen. Tsu No Junmai er en let, aromatisk sake, med en mild bitterhed, der er meget nem at drikke. En mild og smag, og lidt til den søde side. Den kan drikkes både afkølet og opvarmet, men vi anbefaler at servere denne sake enten 'Jo-on' (20 grader) eller 'Suzuhie' (15 grader).`,
    alcohol: `15 %`,
    volume: `180 ml`,
    systemLabel: "9",
  },
  13: {
    name: `MABOROSHI GINJO SEIKYO`,
    imageUrl: "images/wines/10.png",
    description1: `Denne sake er perfekt for dem der er nye i sake verdenen - den er mild og letdrikkelig, men har stadig masser af smag at byde på.`,
    goodWith: `sushi, ramen, tempura og andre japanske fødevarer`,
    description2: `Den har en let sødlig smag med frugtige og blomstrede noter, flot umami og en let, balanceret syre. Risen af varianten Shinsenbon og er poleret 58%.

    Perfekt til sushi-aften, fest, værtindegave eller bare til at nyde med stil i haven en varm sommerdag. Denne sake favner bredt, og den smukke flaske og det lille tilhørende glas, gør den til en helt særlig oplevelse.
    
    Serveres bedst ved stuetemperatur eller afkølet.
    `,
    alcohol: `15.4 %`,
    volume: `180 ml`,
    systemLabel: "10",
  },
  14: {
    name: `VIÑA TARAPACÁ SAUVIGNON BLANC KVARTFLASKE`,
    imageUrl: "images/wines/mini_white.png",
    description1: `I en tid hvor vi ønsker mere friske vine, med frisk frugt og elegance, er Sauvignon Blanc svaret på vores bønner. Denne vin er frisk og med god karakter.`,
    goodWith: `Fisk - fede, fisk - mager, sushi, salater
    `,
    description2: `Sprød og lækker hvidvin med flotte grønne reflekser i glasset. Duften er præget af frisk græs og hyldeblomster. Smagen er fokuseret og med fin syre der giver en god længde i eftersmagen.
    `,
    alcohol: `12 %`,
    volume: `18.75 cl`,
    systemLabel: "11",
  },
  15: {
    name: `VIÑA TARAPACÁ CABERNET SAUVIGNON KVARTFLASKE`,
    imageUrl: "images/wines/mini_red.png",
    description1: `Tør og frisk mousserende vin fra det spanske højland. Dette er et glimrende modsvar til andre mere eksponerede og dyre udgaver af mousserende vin.
    `,
    goodWith: `Oksekød, pasta og pizza, ost - kraftig, ost - mild`,
    description2: `Vina Tarapaca Cabernet Sauvignon er dyb rubinrød i glasset med en duft af modne solbær og kirsebær samt noter af vanilje Vinen er medium fyldig med en blød smag med god tæt frugt og modne tanniner. 
    `,
    alcohol: `13 %`,
    volume: `18.75 cl`,
    systemLabel: "12",
  },
  16: {}, // cover end
};

export default pages;
