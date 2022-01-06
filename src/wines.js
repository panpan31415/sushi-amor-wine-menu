const wines = {
  1: {
    name: `LÉGENDE "R" ROUGE`,
    imageUrl: "images/wines/1.png",
    description1: `En elegant og let drikkelig vin.`,
    goodWith: `Grill, ost -
    kraftig, ost - mild, asiatiske retter`,
    description2: ` Dyb lilla farve med en charmerende duft af solbær, kirsebær og lidt
    toastede noter fra fadlagringen. Smagen er fyldig og struktureret med
    gode bløde tanniner og en frugtdomineret afslutning af smagen.`,
    alcohol: `13 %`,
    volume: `75 cl`,
    systemLabel: "1",
  },
  2: {
    name: `LÉGENDE "R" BLANC`,
    imageUrl: "images/wines/2.png",
    description1: `Frisk og aromatisk, let drikkelig hvidvin fra Bordeaux.En elegant og let drikkelig vin.`,
    goodWith: `Aperitif, skaldyr, fisk - fede, fisk - mager, ost - kraftig`,
    description2: `Smuk stråfarvet vin med en ekspressiv duft af citrus og modne pærer. Smagen har god fylde og en meget livlig frugtpalet med æbler, pærer og lyche. Frugtsyren giver en god baggrund og en vin der er velegnet til mad.
    Velegnet til fiskeretter, salater og bløde oste.
    `,
    alcohol: `12 %`,
    volume: `75 cl`,
    systemLabel: "2",
  },
  3: {
    name: `FABIANO VALPOLICELLA CLASSICO`,
    imageUrl: "images/wines/3.png",
    description1: `Dejlig frisk Valpolicella med fed frugtstil. Dette er vinen som smager perfekt i det varme område omkring Gardasøen.
    `,
    goodWith: `Pasta og pizza, ost - mild, ost - kraftig`,
    description2: `Flot rød med næsten lilla kant. Ekspressiv duft med jordbær, kirsebær og små brombær. Smagen er frisk med den unge frugt i smuk harmoni med skovens røde bær og en anelse krydderi i eftersmagen.
    En herlig ledsager til lettere pastaretter og friske oste fra Italien.
    `,
    alcohol: `13.5 %`,
    volume: `75 cl`,
    systemLabel: "3",
  },
  4: {
    name: `MURÉ CALCAIRES JAUNES RIESLING`,
    imageUrl: "images/wines/4.png",
    description1: `Fra den sydlige ende af Alsace kommer denne mesterlige Riesling. Grundet det sydlige terroir har man her lidt mere fedme end man normalt finder i Alsace Riesling.`,
    goodWith: `Fisk - fede, fisk - mager, skaldyr, sushi`,
    description2: `Flot gylden i glasset med herlig ekspressiv duft af fersken og melon. Smagen har blød fylde og god struktur. Her er noter af citrus og tørret ananas i baggrunden.
    `,
    alcohol: `13 %`,
    volume: `75 cl eller 37.5 cl`,
    systemLabel: "4",
  },
  5: {
    name: `VIÑA TARAPACÁ RESERVA`,
    imageUrl: "images/wines/5.png",
    description1: `En virkelig interessant vin fra tophuset Viña Tarapacá.`,
    goodWith: `Ost - kraftig, kraftige krydrede retter, oksekød`,
    description2: `Vinen har en rubinrød farve med flot klarhed. Duften er stor og kraftfuld med strejf fra lagringen med eg og solmoden frugt. Smagen er fyldig med god balance mellem Cabernet Sauvignon-druens kraft og blødheden fra Merlot-druen.
    `,
    alcohol: `13.5 %`,
    volume: `75 cl`,
    systemLabel: "5",
  },
  6: {
    name: `CHARDONNAY SERBATO`,
    imageUrl: "images/wines/6.png",
    description1: `En forfriskende og liflig vin.`,
    goodWith: `Aperitif, pasta og pizza, kylling og kalkun, skaldyr, fisk - fede, fisk - mager`,
    description2: `Batasiolo, Langhe Chardonnay DOC, Serbato, har en lys, stråfarve med gyldne reflekser. Smagen er tør, forfriskende med liflig frugt i den lange eftersmag, afsluttet af den frugtfyldte bouquet.

    En dejlig ledsager til fisk, alt godt fra havet, lyse kødretter, ost og som aperitif.
    `,
    alcohol: `12.5 %`,
    volume: `75 cl eller 37.5 cl`,
    systemLabel: "6",
  },
  7: {
    name: `VIÑA TARAPACÁ`,
    imageUrl: "images/wines/7.png",
    description1: `Chardonnay er verdens mest berømte drue til hvidvin.
    `,
    goodWith: `Fisk - fede, kylling og kalkun`,
    description2: `Denne herlige hvidvin har en klar gylden farve med grønne reflekser. Duften er typisk Chardonnay med masser af fedme og stor frugt fra de modne druer. Smagen er forførende blød med lækker fylde fra druerne. En lang og frugtfyldt eftersmag afslutter denne vin.`,
    alcohol: `12.5 %`,
    volume: `75 cl eller 37.5 cl`,
    systemLabel: "7",
  },
  8: {
    name: `Junmai Taru Sake`,
    imageUrl: "images/wines/8.png",
    description1: `Taru Sake is an authentic dry sake distinguished by the aroma of Yoshino cedar. Enjoy the refreshing aroma of Yoshino cedar and the crisp, clean finish of Taru Sake. Taru sake is usually enjoyed chilled and also delicious when served at room temperature or even slightly warmed (40～45℃)
    `,
    goodWith: `sushi, ramen, tempura, and other Japanese foods`,

    alcohol: `15 %`,
    volume: `180 ml`,
    systemLabel: "8",
  },
  9: {
    name: `FABIANO BARDOLINO CHIARETTO CLASSICO`,
    imageUrl: "images/wines/9.png",
    description1: `En smuk laksefarvet rosévin med en elegance der gør den velegnet til enhver god lejlighed. Drik den ung og nyd finessen med for eksempel en laksemad.
    `,
    goodWith: `Fisk - fede, ost - mild, skaldyr`,
    description2: `Bardolino Chiaretto er flot laksefarvet med en duft af rosenblade og friskplukkede hindbær. Smagen er domineret af en frisk frugtsyre og lang intens smag med noter af friske røde bær.
    `,
    alcohol: `12 %`,
    volume: `75 cl`,
    systemLabel: "9",
  },
  10: {
    name: `MONT MARCAL CAVA BRUT`,
    imageUrl: "images/wines/10.png",
    description1: `Tør og frisk mousserende vin fra det spanske højland. Dette er et glimrende modsvar til andre mere eksponerede og dyre udgaver af mousserende vin.
    `,
    goodWith: `Aperitif, skaldyr, fisk - fede, fisk - mager
    `,
    description2: `Blank og klar i glasset med smukke små bobler. Duften er præget af grønne noter med græs, citrus og æbler. Smagen er tør med frisk frugt og gode bløde bobler.

    En herlig aperitif, eller som ledsager til lette fiskeretter og skaldyr.
    `,
    alcohol: `11.5 %`,
    volume: `75 cl elle 37.5 cl`,
    systemLabel: "10",
  },
  11: {
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
  12: {
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
};

export default wines;
