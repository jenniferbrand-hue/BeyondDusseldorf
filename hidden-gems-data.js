const HIDDEN_GEMS = [
  {
    id: "little-tokyo",
    title: "Little Tokyo",
    image: "images/gem-little-tokyo.webp",
    imageAlt: "Matcha-drankjes bij Wakaba café",
    wijk: "Stadtmitte",
    adres: "Immermannstraße & omgeving, 40210 Düsseldorf",
    caption: "Japanse winkels, ramenbars en unieke sfeer midden in Düsseldorf.",
    beschrijving:
      "Rond de Immermannstraße vind je de grootste Japanse gemeenschap van Europa buiten Japan zelf. Van matcha-specialisten tot ramenbars en Japanse supermarkten: het voelt hier alsof je in Tokio bent geland.",
    highlights: [
      "Beste tijd: doordeweeks rond lunch, minder druk dan in het weekend.",
      "Combineer met Wakaba voor matcha en Hanaro Markt voor Aziatische ingrediënten.",
      "Veel zaken zijn op zondag gesloten — check vooraf."
    ],
    mapsQuery: "Immermannstraße, Düsseldorf"
  },
  {
    id: "kiefernstrasse",
    title: "Kiefernstraße",
    image: "images/home-gallery/kiefernstrasse-facade.png",
    imageAlt: "Kleurrijke cartoon street art op gevels aan de Kiefernstraße",
    wijk: "Flingern Nord",
    adres: "Kiefernstraße, 40233 Düsseldorf",
    caption: "Street art, alternatieve cultuur en kleurrijke gevels.",
    beschrijving:
      "De Kiefernstraße is een van de bekendste streetart-straten van Duitsland. Hele woonblokken zijn legal beschilderd — van het Drakenhuis tot abstracte en figuratieve murals.",
    highlights: [
      "Loop de straat overdag af voor de beste kleuren en foto’s.",
      "Respecteer dat hier mensen wonen: rustig blijven, geen privéterrein betreden.",
      "Combineer met een koffiestop in de creatieve buurt Flingern."
    ],
    mapsQuery: "Kiefernstraße, Düsseldorf"
  },
  {
    id: "pic-you",
    title: "Pic You",
    image: "images/home-gallery/pic-you-wall.jpg",
    imageAlt: "Fotowand bij Pic You self photo booth",
    wijk: "Stadtmitte",
    adres: "Düsseldorf centrum — check pic-you.de voor actueel adres",
    caption: "Self photo booth, strips en een kleurrijke fotowand vol herinneringen.",
    beschrijving:
      "Pic You is een self photo booth in Düsseldorf waar je strips maakt met vrienden — compleet met decor en een muur vol foto’s van bezoekers. Naast de booth vind je een shop met patches, tote bags en accessoires in dezelfde speelse stijl.",
    highlights: [
      "Ideaal voor een groepsuitje: reserveer tijd of loop binnen als er plek is.",
      "Kies verschillende achtergronden en layouts voor je strips.",
      "Combineer met een wandeling door Little Tokyo of de Altstadt."
    ],
    mapsQuery: "Pic You Düsseldorf"
  },
  {
    id: "rheinpark-golzheim",
    title: "Rheinpark Golzheim",
    image: "images/gem-rheinpark.webp",
    imageAlt: "K21 Ständehaus met water en reflectie",
    wijk: "Golzheim / Pempelfort",
    adres: "Rheinpark Golzheim, 40479 Düsseldorf",
    caption: "Rustige plek aan de Rijn met uitzicht en ruimte.",
    beschrijving:
      "Langs de Rijn ligt dit brede park met gazons, wandelpaden en uitzicht op de skyline. Perfect om te ontsnappen aan de drukte van de Königsallee, op loopafstand van K21.",
    highlights: [
      "Gratis toegang, ideaal voor picknick of een rustige wandeling.",
      "Combineer met K21 aan de Kaiserteich (Ständehaus).",
      "Bij mooi weer drukker — vroeg op de dag is het het rustigst."
    ],
    mapsQuery: "Rheinpark Golzheim, Düsseldorf"
  },
  {
    id: "immermannstrasse",
    title: "Immermannstraße",
    image: "images/gem-immermannstrasse.webp",
    imageAlt: "Aziatische muurschildering met draak",
    wijk: "Stadtmitte",
    adres: "Immermannstraße, 40210 Düsseldorf",
    caption: "De grootste Little Tokyo van Europa: Aziatische winkels en restaurants.",
    beschrijving:
      "De Immermannstraße is het hart van Little Tokyo. Bekende muurschilderingen (zoals de drakenmuur), Japanse restaurants en speciaalzaken maken deze straat tot een must-see.",
    highlights: [
      "Start bij de drakenmuur voor een iconische foto.",
      "Proef authentieke ramen, sushi of Koreaans street food in de zijstraten.",
      "Bereikbaar met U-bahn: station Düsseldorf Hauptbahnhof, daarna 10 min lopen."
    ],
    mapsQuery: "Immermannstraße 7, Düsseldorf"
  },
  {
    id: "hanaro-markt",
    title: "Hanaro Markt",
    image: "images/gem-hanaro.webp",
    imageAlt: "Hanaro Markt winkelgevel",
    wijk: "Stadtmitte",
    adres: "Immermannstraße 28, 40210 Düsseldorf",
    caption: "Koreaanse en Aziatische supermarkt met street food om de hoek.",
    beschrijving:
      "Hanaro Markt By Kim's Asia is dé supermarkt voor Koreaanse en Japanse producten. Verse tteok, kimchi, noodles en een groot drankassortiment — populair bij locals en bezoekers.",
    highlights: [
      "Zaterdagmiddag is het drukst; doordeweeks shop je rustiger.",
      "Om de hoek: K-Bab Nado en andere street-food plekken.",
      "Neem verse snacks mee voor onderweg of een picknick in het park."
    ],
    mapsQuery: "Hanaro Markt Immermannstraße 28 Düsseldorf"
  },
  {
    id: "k20-k21",
    title: "K20 / K21",
    image: "images/gem-kunst.webp",
    imageAlt: "Entreekaartje K20 Kunstsammlung",
    wijk: "Altstadt / Golzheim",
    adres: "K20: Grabbeplatz 5 · K21: Ständehausstraße 1, 40213 Düsseldorf",
    caption: "Wereldklasse moderne kunst in het historische Ständehaus.",
    beschrijving:
      "De Kunstsammlung Nordrhein-Westfalen is verspreid over K20 (Grabbeplatz) en K21 (Ständehaus aan de Kaiserteich). Van klassieke moderne kunst tot grote installaties en de beroemde In Orbit onder het glazen dak.",
    highlights: [
      "Studenten/ticket vaak vanaf ca. €5 — vraag bij de balie naar actuele exposities.",
      "K21: combineer binnen met een wandeling rond de Kaiserteich.",
      "Gesloten op maandag — check openingstijden online."
    ],
    mapsQuery: "Kunstsammlung NRW K21 Ständehaus Düsseldorf"
  },
  {
    id: "botanische-tuin",
    title: "Botanische tuin",
    image: "images/gem-botanisch.webp",
    imageAlt: "Botanische tuin met glazen koepel",
    wijk: "Bilk (campus HHU)",
    adres: "Universitätsstraße 1, 40225 Düsseldorf",
    caption: "Tropische planten onder een iconische glazen koepel op de campus.",
    beschrijving:
      "De Botanische Tuin van de Heinrich-Heine-Universiteit heeft een spectaculaire geodetische koepelkas met tropische en mediterrane planten. Een groene oase op korte afstand van het centrum.",
    highlights: [
      "Toegang is vaak gratis of zeer goedkoop — ideaal voor een budget-tip.",
      "Combineer met een wandeling over de universiteitscampus.",
      "Binnen is het warm en vochtig — neem een lichte jas mee voor buiten."
    ],
    mapsQuery: "Botanischer Garten HHU Düsseldorf"
  },
  {
    id: "rheinturm-park",
    title: "Rheinturm & park",
    image: "images/gem-rheinturm.webp",
    imageAlt: "Park met Rheinturm en reflectie",
    wijk: "Hammer Oberbilk / Medienhafen",
    adres: "Stromstraße / Rheinufer, 40221 Düsseldorf",
    caption: "Iconisch uitzichtpunt en groene oevers langs het water.",
    beschrijving:
      "De Rheinturm is het bekendste uitzichtpunt van de stad (240 m). In de omgeving: groene oevers, reflecties in het water en uitzicht op de Medienhafen — minder toeristisch dan de Altstadt.",
    highlights: [
      "Beklim de Rheinturm voor panorama (ticket vereist).",
      "Wandel langs het Rheinufer richting Medienhafen bij zonsondergang.",
      "Gratis parkeren is beperkt — OV of fiets is handig."
    ],
    mapsQuery: "Rheinturm Düsseldorf"
  }
];
