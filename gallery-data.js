const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "Drakenmuur",
    caption: "Street art die de hele gevel overneemt.",
    description:
      "Op de Kiefernstraße in Flingern prijkt het beroemde Drakenhuis met een goudgele muur en een kronkelende rode draak. De straat staat vol met legale, grootschalige murals op woonblokken. Tip: loop de straat overdag af voor de sterkste kleuren."
  },
  {
    id: 2,
    title: "Kiefernstraße",
    image: "images/home-gallery/kiefernstrasse-facade.png",
    caption: "De meest kleurrijke straat van Düsseldorf.",
    description:
      "Hele gevels zijn bedekt met cartoonachtige figuren en felle patronen, waaronder het huis met nummer 21. De sfeer is alternatief, creatief en fotogeniek. Wandel rustig door en ontdek bij elke deur een ander kunstwerk."
  },
  {
    id: 3,
    title: "Street art Flingern",
    caption: "Urban art op monumentale schaal.",
    description:
      "Vanaf straatniveau zie je hoe hoog en dicht de muurschilderingen op de Kiefernstraße zijn. Groen van bomen contrasteert met de felle verf. Kijk omhoog voor de beste composities en combineer met een koffiestop in Flingern."
  },
  {
    id: 4,
    title: "Kleurrijke gevel",
    caption: "Een explosie van kleur in de stad.",
    description:
      "Warme rood-oranje tinten en gestileerde figuren bedekken deze gevel aan de Kiefernstraße. De buurt ademt geschiedenis van activisme en creativiteit. Neem de tijd voor de kleine details op elke gevel."
  },
  {
    id: 5,
    title: "Aziatische supermarkt",
    caption: "Een wereld aan smaken in één gangpad.",
    description:
      "Kratten vol Koreaanse soju, Asahi en Bintang geven een glimp van het aanbod rond de Immermannstraße. Hier vind je drank en snacks die je elders zelden ziet. Tip: probeer een fruitige soju-variant als souvenir."
  },
  {
    id: 6,
    title: "Hanaro Markt",
    caption: "Verse tteok en mochi uit de koeling.",
    description:
      "Bij Hanaro Markt liggen rijen verse reiskoeken in allerlei kleuren. De winkel is een ankerpunt van Little Tokyo voor Koreaanse en Japanse producten. Perfect voor een picknick of om thuis te proeven."
  },
  {
    id: 7,
    title: "Wakaba matcha",
    caption: "Authentieke Japanse matcha-creaties.",
    description:
      "Bij Wakaba bestel je gelaagde matcha-lattes en drankjes met zachtijs in een strak, modern interieur. De sfeer is rustig en typisch Japans midden in Düsseldorf. Combineer je drank met vers gebak uit de vitrine."
  },
  {
    id: 8,
    title: "Hanaro Markt gevel",
    caption: "Koreaanse supermarkt in Little Tokyo.",
    description:
      "De groene gevel van Hanaro Markt By Kim's Asia is onmiskenbaar op de Immermannstraße. Binnen vind je een enorm assortiment Aziatische producten en street food om de hoek. Op zaterdag is het druk — doordeweeks shop je rustiger."
  },
  {
    id: 9,
    title: "Wakaba café",
    caption: "Premium matcha op een hoekpand.",
    description:
      "Het donkergroene uithangbord van Wakaba markeert een stijlvolle matcha-specialist. Door de glazen pui zie je een minimalistisch interieur en een menu met hoogwaardige thee. Ideale pitstop tijdens een wandeling door Little Tokyo."
  },
  {
    id: 10,
    title: "Botanische tuin",
    caption: "Tropen onder een iconische glazen koepel.",
    description:
      "De geodetische koepelkas van de Botanische Tuin op de HHU-campus is een architectonisch hoogtepunt met exotische planten erachter. Het pad ernaartoe voelt verrassend rustig. Vaak is toegang gratis of goedkoop."
  },
  {
    id: 11,
    title: "Koepelkas binnen",
    caption: "Mediterraan groen in glas en staal.",
    description:
      "Binnen de koepel groeien palmen, succulents en witte bloemen onder het driehoekige glasdak. De ruimte is warm en vochtig — perfect om even weg te zijn van de drukte. Let op de etiketten bij bijzondere soorten."
  },
  {
    id: 12,
    title: "Classic Remise",
    caption: "Oldtimers in een historisch depot.",
    description:
      "Classic Remise zit in een gerestaureerde locomotiefloods met industriële betonwanden en het iconische Gulf-bord. Speelgoedautootjes op de entree geven meteen de autoliefhebbers-sfeer. Toegang is gratis."
  },
  {
    id: 13,
    title: "Remise showroom",
    caption: "Sportwagens in de ronde loods.",
    description:
      "In de gewelfde hal staan moderne sportwagens naast klassiekers, met genummerde vakken uit de treintijd. De lichtinval door het glazen dak maakt de lak extra indrukwekkend. Bekijk ook de werkplaatsen langs de ring."
  },
  {
    id: 14,
    title: "Porsche Remise",
    caption: "Luxe bolides in industrieel erfgoed.",
    description:
      "Een glanzende Porsche 911 weerspiegelt de baksteen en staal van Classic Remise. Rondom staan Aston Martin, BMW en andere droomauto's. Neem de Aussichts-Galerie mee voor een hoger uitzicht op de collectie."
  },
  {
    id: 15,
    title: "Oldtimercollectie",
    caption: "Klassiekers zover het oog reikt.",
    description:
      "De ronde hal toont zilveren BMW's, een turquoise Chevrolet-pick-up en een crème Porsche 911 onder het witte dakzeil. Het voelt als een levend museum. Plan een uur en eindig eventueel in het restaurant op het terrein."
  },
  {
    id: 16,
    title: "Design conceptstore",
    caption: "Boeken, keramiek en cadeaus met stijl.",
    description:
      "Een gecureerde tafel met designboeken, Taschen-titels en handgemaakt aardewerk typisch voor creatieve winkels in Düsseldorf. De sfeer is rustig en inspirerend. Ideaal om een uniek cadeau te scoren."
  },
  {
    id: 17,
    title: "Modeboutique",
    caption: "Tijdloze mode in industrieel jasje.",
    description:
      "Strakke rekken met zwart-wit-grijze collecties en grote ramen naar de straat. Het beton en het daglicht geven de winkel een galerie-achtige uitstraling. Neem de tijd voor basics van hoge kwaliteit."
  },
  {
    id: 18,
    title: "Langen Foundation",
    caption: "Gouden werktuigen in beton en licht.",
    description:
      "Gouden tuingereedschappen en keukengerei als wandsculptuur tegen Tadao Ando's strakke architectuur. Het licht door het glazen dak maakt de installatie extra scherp. Combineer met Museum Insel Hombroich op hetzelfde terrein."
  },
  {
    id: 19,
    title: "Kunst Langen Foundation",
    caption: "Kleur en expressie in een witte zaal.",
    description:
      "Een kamerhoge, kleurrijke muurtekening en installaties vullen een lichte tentoonstellingsruimte. De Langen Foundation verbindt toparchitectuur met hedendaagse kunst. Reserveer tijd voor het buitenterrein en andere paviljoens."
  },
  {
    id: 20,
    title: "K21 Ständehaus",
    caption: "Hedendaagse kunst in gewelfde gangen.",
    description:
      "Het voormalige parlementsgebouw K21 huisvest de Kunstsammlung NRW met witte kruisgewelven en een serene gang. Met een studententicket vanaf circa €5 stap je de wereld van moderne kunst binnen. Vraag naar actuele top-tentoonstellingen."
  },
  {
    id: 21,
    title: "Videokunst K21",
    caption: "Dompel jezelf onder in beeld en geluid.",
    description:
      "Een grote projectie, vloerkleden met portretten en oranje kussens nodigen uit om te blijven zitten. De grijze zaal en het zachte licht maken het een meeslepende ervaring. Neem plaats op een kussen en lees de ondertitels mee."
  },
  {
    id: 22,
    title: "Bed Peace K21",
    caption: "Kunst die uitnodigt tot reflectie.",
    description:
      "Twee aarden figuren op een wit bed — een eerbetoon aan John Lennon en Yoko Ono's Bed-In for Peace. De tekst op de muur legt de symboliek uit. Lees de begeleidende tekst voor het volledige verhaal."
  },
  {
    id: 23,
    title: "Mode-installatie K21",
    caption: "Conceptuele mode als kunstwerk.",
    description:
      "Mannequins in gedurfde stoffen en teksten als Wisdom Tree tonen mode als sociaal commentaar. De zachte verlichting en houten vloer geven een intieme galerie-sfeer. Bekijk de details in stof en accessoires."
  },
  {
    id: 24,
    title: "Oude meester Hombroich",
    caption: "Bruegel-achtig tafereel in witte boog.",
    description:
      "Een donker historisch landschap hangt in een diepe witte boognis — typisch voor Museum Insel Hombroich. Het contrast tussen oud schilderij en moderne architectuur is adembenemend. Sta stil bij de kleine figuren en het water."
  },
  {
    id: 25,
    title: "Houten koppen Hombroich",
    caption: "Rauwe sculpturen in dramatisch licht.",
    description:
      "Twee grof gehakte houten hoofden op stalen stellages in een donkere zaal met één spotlight — werk in de geest van Anatol Herzfeld. De sfeer is meditatief en bijna sacraal. Bezoek bij voorkeur op een rustige doordeweekse dag."
  },
  {
    id: 26,
    title: "Fotogalerij K21",
    caption: "Fotografie langs gewelfde gangen.",
    description:
      "Langwerpige gangen met witte bogen en houten vloer tonen grote fotowerken aan de muur. Het K21 is ideaal om kunst en gebouw te combineren. Ga daarna naar boven voor de In Orbit-installatie onder het glazen dak."
  },
  {
    id: 27,
    title: "Atrium K21",
    caption: "Historisch pand, modern glazen dak.",
    description:
      "Het centrale binnenhof combineert klassieke bogen en een toren met een spectaculaire stalen-glazen koepel. Licht stroomt naar binnen en er zijn plekken om te zitten. Vanaf hier bereik je alle tentoonstellingen."
  },
  {
    id: 28,
    title: "K21 aan de Kaiserteich",
    caption: "Museumreflectie in het parkwater.",
    description:
      "Het Ständehaus met zijn glazen koepel spiegelt in de Kaiserteich, omringd door bomen. De setting is rustig en fotogeniek, ook op bewolkte dagen. Combineer een museumbezoek met een wandeling rond het meer."
  },
  {
    id: 29,
    title: "Spee'scher Graben",
    caption: "Rheinturm gespiegeld in stads groen.",
    description:
      "Aan het Spee'scher Graben reflecteert de Rheinturm in het water tussen kantoorpanden en voorjaarsbloesem. Een groene pauze vlak bij de drukke binnenstad. Ideaal voor een korte wandeling zonder grote menigte."
  },
  {
    id: 30,
    title: "Vader Rijn-fontein",
    caption: "Historische pracht aan de Kaiserteich.",
    description:
      "De bronzen groep Vater Rhein und seine Töchter staat majestueus voor het Ständehaus. Het park aan de Kaiserteich is perfect om te rusten na K21. Loop door naar het museum voor hedendaagse kunst."
  },
  {
    id: 31,
    title: "Keramiekwinkel",
    caption: "Handgemaakt aardewerk in pasteltinten.",
    description:
      "Houten planken vol handgedraaide mokken en kommen in zachte pasteltinten — een typische ambachtelijke winkel in een creatieve buurt. Door het raam zie je de straat en bloemen op de vensterbank. Ideaal voor een uniek souvenir."
  },
  {
    id: 32,
    title: "Museum Insel Hombroich",
    caption: "Kunst en natuur in harmonie.",
    description:
      "In een rond wit paviljoen staan donkere bronzen sculpturen op houten platformen, omlijst door ronde ramen naar het park. Licht en schaduw wisselen constant. Wandel daarna over het eiland tussen de andere paviljoens."
  },
  {
    id: 33,
    title: "Street art mural",
    image: "images/home-gallery/street-art-mural.jpg",
    caption: "Regenboog en melkweg op een stadsgevel.",
    description:
      "Op een gebouw in Düsseldorf stroomt een cirkelvormige melkweg over in verticale regenboogstrepen langs de gevel. Street art op grote schaal — typisch voor de creatieve buurten van de stad."
  },
  {
    id: 34,
    title: "Pic You fotowand",
    image: "images/home-gallery/pic-you-wall.jpg",
    caption: "Hart van foto booth-strips.",
    description:
      "Bij Pic You vullen bezoekers een hartvormige muur met hun strips — duizenden herinneringen op één plek. De neon-sign en roze accenten maken het meteen herkenbaar."
  },
  {
    id: 35,
    title: "Photo booth strips",
    image: "images/home-gallery/photo-strips-hand.jpg",
    caption: "Klassieke strips om mee te nemen.",
    description:
      "Twee strips in roze en zwart met groepsfoto’s — zo ga je de stad in met een souvenir in de hand. Pic You en vergelijkbare booths zitten verspreid over Düsseldorf."
  },
  {
    id: 36,
    title: "Pic You shop",
    image: "images/home-gallery/pic-you-shop.jpg",
    caption: "Neon, spiegels en tote bags.",
    description:
      "In de Pic You-shop hangen tote bags, patches en accessoires aan een pegboard. De roze gloeiende spiegel en donkere muren geven een speelse, Instagram-waardige sfeer."
  },
  {
    id: 37,
    title: "Photo strips flatlay",
    image: "images/home-gallery/photo-strips-flatlay.jpg",
    caption: "Verschillende layouts en kleuren.",
    description:
      "Een flatlay van strips in allerlei formaten — met kersenbloesem-randen, stippen en zwarte achtergronden. Laat zien hoe gevarieerd een photo booth-bezoek kan zijn."
  },
  {
    id: 38,
    title: "Patch shop",
    image: "images/home-gallery/patches-shop.jpg",
    caption: "Honderden patches om zelf te stylen.",
    description:
      "Houten vakjes vol geborduurde patches: letters, cijfers, dieren en food-icons. Populair om tassen of jassen te personaliseren — vaak in de buurt van creatieve winkels en photo booths."
  }
];
