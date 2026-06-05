const STORAGE = {
  saved: 'dtf_saved_v46',
  trip: 'dtf_mytrip_v46',
  likes: 'dtf_likes_v46',
  hotel: 'dtf_hotel_v46',
  recs: 'dtf_my_recs_v46',
  packageMode: 'dtf_package_mode_v46',
  offlinePacks: 'dtf_offline_packs_v46'
};

const CITIES = {
  prague: { name:'Prague', airportName:'Václav Havel Airport Prague', airport:{lat:50.1008,lng:14.2632}, centre:{lat:50.0875,lng:14.4213} },
  vienna: { name:'Vienna', airportName:'Vienna International Airport', airport:{lat:48.1103,lng:16.5697}, centre:{lat:48.2082,lng:16.3738} },
  strasbourg: { name:'Strasbourg', airportName:'Strasbourg Airport', airport:{lat:48.5383,lng:7.6282}, centre:{lat:48.5734,lng:7.7521} }
};

const CITY_BY_ORIGIN = { pragueAirport:'prague', viennaAirport:'vienna', strasbourgAirport:'strasbourg' };
const AIRPORT_ORIGINS = [
  {id:'pragueAirport', label:'Prague Airport'},
  {id:'viennaAirport', label:'Vienna Airport'},
  {id:'strasbourgAirport', label:'Strasbourg Airport'}
];


// v22 bilingual content helpers: UI language also controls card titles/descriptions/tags.
function getLang(){ return localStorage.getItem('dtf_language_v19') === 'he' ? 'he' : 'en'; }
const CITY_HE = { prague:'פראג', vienna:'וינה', strasbourg:'שטרסבורג' };
const CAT_HE = { trips:'טיולי יום', food:'אוכל', nightlife:'חיי לילה', experiences:'חוויות', mustdo:'חובה לעשות', recommendations:'ההמלצות שלי' };
const TAG_HE = {
  castle:'טירה', easy:'קל', 'half-day':'חצי יום', UNESCO:'אתר UNESCO', history:'היסטוריה', train:'רכבת', spa:'ספא', 'full-day':'יום מלא', romantic:'רומנטי', 'long-day':'יום ארוך', 'cross-border':'חוצה גבול', museums:'מוזיאונים', memorial:'אתר זיכרון', forest:'יער', beer:'בירה', city:'עיר', nature:'טבע', 'car-best':'מומלץ ברכב', wine:'יין', river:'נהר', park:'פארק', 'old-town':'עיר עתיקה', mountain:'הר', hiking:'הליכה', view:'תצפית', lake:'אגם', iconic:'אייקוני', abbey:'מנזר', danube:'דנובה', palace:'ארמון', railway:'רכבת נופית', roman:'רומי', village:'כפר', germany:'גרמניה', switzerland:'שוויץ', 'black-forest':'היער השחור', waterfalls:'מפלים', alsace:'אלזס', casino:'קזינו', 'theme-park':'פארק שעשועים', border:'גבול', viewpoint:'תצפית', boat:'שייט', central:'מרכזי', popular:'פופולרי', budget:'זול יחסית', 'good-value':'תמורה טובה', parking:'חניה', 'car-friendly':'נוח לרכב', custom:'מותאם אישית', 'google-maps':'גוגל מפות', casual:'קז׳ואל', photo:'צילום', indoor:'מקורה', show:'הופעה', evening:'ערב', free:'חינם', mustdo:'חובה', czech:'צ׳כי', austrian:'אוסטרי', alsatian:'אלזסי', french:'צרפתי', german:'גרמני', asian:'אסייתי', vietnamese:'וייטנאמי', vegetarian:'צמחוני', meat:'בשרי', bistro:'ביסטרו', cafe:'בית קפה', market:'שוק', schnitzel:'שניצל', pastry:'מאפים', fish:'דגים', local:'מקומי', 'public-friendly':'נוח בתחבורה ציבורית', 'walkable':'נגיש בהליכה'
};
const TITLE_HE = {
  'Karlštejn Castle':'טירת קרלשטיין', 'Kutná Hora':'קוטנה הורה', 'Karlovy Vary':'קרלובי וארי', 'Český Krumlov':'צ׳סקי קרומלוב', 'Dresden':'דרזדן', 'Terezín':'טרזין', 'Konopiště Castle':'טירת קונופישטה', 'Pilsen':'פילזן', 'Bohemian Paradise':'גן העדן הבוהמי', 'Křivoklát Castle':'טירת קריבוקלאט', 'Mělník':'מלניק', 'Poděbrady':'פודייבראדי', 'Tábor':'טאבור', 'České Budějovice':'צ׳סקה בודייוביצה', 'Liberec':'ליברץ', 'Český ráj rocks':'סלעי גן העדן הבוהמי', 'Lidice Memorial':'אתר הזיכרון לידיצה', 'Velká Amerika Quarry':'מחצבת ולקה אמריקה', 'Průhonice Park':'פארק פרוהוניצה', 'Sázava Monastery':'מנזר סאזאבה',
  'Bratislava':'ברטיסלבה', 'Wachau Valley':'עמק ואכאו', 'Melk Abbey':'מנזר מלק', 'Baden bei Wien':'באדן ליד וינה', 'Hallstatt':'הלשטאט', 'Graz':'גראץ', 'Laxenburg Castle Park':'פארק טירת לקסנבורג', 'Klosterneuburg Abbey':'מנזר קלוסטרנויבורג', 'Semmering Railway':'רכבת זמרינג', 'Eisenstadt':'אייזנשטאדט', 'Carnuntum':'קרנונטום', 'Neusiedler See':'אגם נויזידל', 'Krems an der Donau':'קרמס על הדנובה', 'Dürnstein':'דורנשטיין', 'Mayerling':'מאיירלינג', 'Forchtenstein Castle':'טירת פורכטנשטיין', 'Mariazell':'מריאצל', 'Sopron':'שופרון', 'Göttweig Abbey':'מנזר גוטווייג', 'Schloss Hof':'שלוס הוף',
  'Colmar':'קולמר', 'Riquewihr':'ריקוויר', 'Château du Haut-Kœnigsbourg':'טירת או־קניגסבורג', 'Baden-Baden':'באדן־באדן', 'Europa-Park':'אירופה פארק', 'Obernai':'אוברנה', 'Eguisheim':'אגיסהיים', 'Kaysersberg':'קייזרסברג', 'Freiburg im Breisgau':'פרייבורג', 'Black Forest Triberg':'טריברג ביער השחור', 'Saverne':'סאברן', 'Molsheim':'מולסהיים', 'Mont Sainte-Odile':'מון סנט־אודיל', 'Sélestat':'סלסטה', 'Basel':'באזל', 'Nancy':'נאנסי', 'Heidelberg':'היידלברג', 'Mummelsee':'מומלזה', 'Gengenbach':'גנגנבאך', 'Wissembourg':'ויסמבורג',
  'Vltava River Cruise':'שייט על נהר הוולטאבה', 'Petřín Hill Viewpoint':'תצפית גבעת פטרין', 'Black Light Theatre':'תיאטרון אור שחור', 'Beer Spa':'ספא בירה', 'Prague Vintage Car Tour':'סיור רכב וינטג׳ בפראג', 'E-bike Old Town Tour':'סיור אי־בייק בעיר העתיקה', 'Prague Castle Viewpoints':'תצפיות טירת פראג', 'Vyšehrad Sunset Walk':'הליכת שקיעה בווישהראד', 'Letná Metronome View':'תצפית מטרונום לטנה', 'Paddle Boats on Vltava':'סירות פדלים בוולטאבה', 'Charles Bridge at sunrise':'גשר קארל בזריחה', 'Old Town Square at night':'כיכר העיר העתיקה בלילה', 'Prague Castle panorama':'פנורמת טירת פראג', 'Petřín sunset':'שקיעה בפטרין',
  'Prater Giant Ferris Wheel':'הגלגל הענק בפראטר', 'Schönbrunn Palace gardens':'גני ארמון שנברון', 'Belvedere Palace':'ארמון בלוודר', 'Vienna State Opera standing tickets':'כרטיסי עמידה לאופרה של וינה', 'Spanish Riding School':'בית הספר הספרדי לרכיבה', 'St. Stephen’s Cathedral':'קתדרלת סטפנוס הקדוש', 'Schönbrunn Palace':'ארמון שנברון',
  'Strasbourg Boat Tour':'שייט בתעלות שטרסבורג', 'Cathedral Platform View':'תצפית הקתדרלה', 'Petite France canals':'תעלות פטיט פראנס', 'European Quarter walk':'הליכה ברובע האירופי', 'Covered Bridges sunset':'שקיעה בגשרים המקורים', 'Batorama cruise':'שייט בטורמה', 'Strasbourg Cathedral':'קתדרלת שטרסבורג', 'Petite France':'פטיט פראנס'
};
function titleFor(item){ if(!item) return ''; if(item.title && item.title[getLang()]) return item.title[getLang()]; if(getLang()==='he') return TITLE_HE[item.name] || item.name; return item.name || item.query || 'Place'; }
function cityNameFor(city){ return getLang()==='he' ? (CITY_HE[city] || CITIES[city]?.name || city) : (CITIES[city]?.name || city); }
function catNameFor(cat){ return getLang()==='he' ? (CAT_HE[cat] || cat) : (cat || 'place'); }
function tagFor(tag){ return getLang()==='he' ? (TAG_HE[tag] || tag) : tag; }
function textFor(value){ if(value && typeof value === 'object') return value[getLang()] || value.en || value.he || ''; return value || ''; }
function buildHebrewDescription(city,cat,name,tags,note){
  const cityName=cityNameFor(city); const title=TITLE_HE[name] || name; const catName=catNameFor(cat); const tagText=(tags||[]).slice(0,3).map(tagFor).join(' / ');
  const intro={
    trips:`${title} הוא יעד מתאים כטיול יום מאזור ${cityName}. הוא מופיע כאן רק אם הוא מתאים לסוג הטיול שבחרת ולמגבלת המרחק/זמן.`,
    food:`${title} הוא מקום אוכל שנבחר כאפשרות התחלה טובה ב${cityName}, עם דגש על מחיר סביר, נוחות ותמורה טובה.`,
    nightlife:`${title} הוא אפשרות ערב או חיי לילה ב${cityName}, למי שרוצה להוסיף אווירה בלי להעמיס על היום.`,
    experiences:`${title} הוא חוויה שיכולה להפוך את הטיול לזכיר יותר. מתאים להוספה ל־My Trip אם זה מסתדר עם מזג האוויר והקצב שלך.`,
    mustdo:`${title} הוא נקודת חובה בסגנון ביקור ראשון ב${cityName}: צילום, אווירה, תצפית או מקום קלאסי שלא כדאי לפספס.`
  }[cat] || `${title} הוא מקום מומלץ באזור ${cityName}.`;
  return `${intro}${tagText ? ` מאפיינים: ${tagText}.` : ''} מומלץ לבדוק שעות פתיחה, עומס וביקורות עדכניות כשיש אינטרנט.`;
}
function aiImagePromptFor(city,cat,name,tags){
  return `AI travel hero image, ${name}, ${CITIES[city]?.name || city}, ${cat}, ${(tags||[]).join(', ')}, cinematic, realistic travel photography, no text, mobile app card`;
}

const FOOD_PROFILE = {
  // Prague
  'Lokál Dlouhááá': { cuisine:{en:'Czech pub food',he:'מטבח צ׳כי עממי'}, price:'€€', vibe:{en:'beer hall, casual',he:'אולם בירה, קז׳ואל'} },
  'Naše Maso': { cuisine:{en:'butcher bistro / meat',he:'ביסטרו קצבים / בשרי'}, price:'€€', vibe:{en:'quick, high-quality meat',he:'מהיר, בשר איכותי'} },
  'Kantýna': { cuisine:{en:'Czech meat counter',he:'מטבח צ׳כי בשרי'}, price:'€€', vibe:{en:'meat-focused, lively',he:'בשרי ותוסס'} },
  'Havelská Koruna': { cuisine:{en:'budget Czech cafeteria',he:'קפיטריה צ׳כית זולה'}, price:'€', vibe:{en:'simple, fast, cheap',he:'פשוט, מהיר וזול'} },
  'Sisters Bistro': { cuisine:{en:'open-faced sandwiches',he:'כריכי צ׳לביצ׳קי'}, price:'€', vibe:{en:'light lunch',he:'ארוחה קלה'} },
  'Mincovna': { cuisine:{en:'modern Czech',he:'צ׳כי מודרני'}, price:'€€', vibe:{en:'central, reliable',he:'מרכזי ואמין'} },
  'U Parlamentu': { cuisine:{en:'classic Czech',he:'צ׳כי קלאסי'}, price:'€€', vibe:{en:'casual local meal',he:'ארוחה מקומית קז׳ואל'} },
  'Luka Lu': { cuisine:{en:'Balkan',he:'בלקני'}, price:'€€', vibe:{en:'colorful, warm',he:'צבעוני וחמים'} },
  'Banh Mi Makers': { cuisine:{en:'Vietnamese sandwiches',he:'כריכים וייטנאמיים'}, price:'€', vibe:{en:'fast and cheap',he:'מהיר וזול'} },
  'Café Louvre': { cuisine:{en:'historic café / Czech-European',he:'קפה היסטורי / צ׳כי-אירופי'}, price:'€€', vibe:{en:'classic café',he:'בית קפה קלאסי'} },
  'Eska Karlín': { cuisine:{en:'modern Czech bakery/restaurant',he:'מאפייה ומסעדה צ׳כית מודרנית'}, price:'€€', vibe:{en:'stylish, Karlín',he:'מעוצב בקרלין'} },
  'Mr. HotDoG': { cuisine:{en:'hot dogs / casual American',he:'נקניקיות / אמריקאי קז׳ואל'}, price:'€', vibe:{en:'quick comfort food',he:'אוכל מהיר מנחם'} },
  'Pho Vietnam Tuan & Lan': { cuisine:{en:'Vietnamese pho',he:'פו וייטנאמי'}, price:'€', vibe:{en:'cheap and warming',he:'זול ומחמם'} },
  'Manifesto Market': { cuisine:{en:'street-food market',he:'שוק אוכל רחוב'}, price:'€€', vibe:{en:'many options',he:'הרבה אפשרויות'} },
  'U Kroka': { cuisine:{en:'Czech comfort food',he:'אוכל צ׳כי ביתי'}, price:'€€', vibe:{en:'neighborhood restaurant',he:'מסעדה שכונתית'} },
  'Bistro Monk': { cuisine:{en:'brunch / café',he:'בראנץ׳ / קפה'}, price:'€€', vibe:{en:'breakfast-friendly',he:'מתאים לבוקר'} },
  'Kuchyň': { cuisine:{en:'Czech with castle views',he:'צ׳כי עם נוף לטירה'}, price:'€€', vibe:{en:'viewpoint meal',he:'ארוחה עם נוף'} },
  'Maitrea': { cuisine:{en:'vegetarian',he:'צמחוני'}, price:'€€', vibe:{en:'calm Old Town option',he:'אופציה רגועה בעיר העתיקה'} },
  'Kavárna co hledá jméno': { cuisine:{en:'café / brunch',he:'קפה / בראנץ׳'}, price:'€€', vibe:{en:'hipster café',he:'קפה צעיר'} },
  'Bakeshop Praha': { cuisine:{en:'bakery / café',he:'מאפייה / קפה'}, price:'€€', vibe:{en:'pastries and coffee',he:'מאפים וקפה'} },
  // Vienna
  'Figlmüller': { cuisine:{en:'Viennese schnitzel',he:'שניצל וינאי'}, price:'€€', vibe:{en:'classic and touristy',he:'קלאסי ותיירותי'} },
  'Naschmarkt': { cuisine:{en:'food market',he:'שוק אוכל'}, price:'€-€€', vibe:{en:'many cuisines',he:'הרבה מטבחים'} },
  'Café Central': { cuisine:{en:'historic Viennese café',he:'בית קפה וינאי היסטורי'}, price:'€€', vibe:{en:'desserts and coffee',he:'קינוחים וקפה'} },
  'Gasthaus Pöschl': { cuisine:{en:'Austrian gasthaus',he:'גסטהאוס אוסטרי'}, price:'€€', vibe:{en:'local, compact',he:'מקומי וקטן'} },
  // Strasbourg
  'Maison Kammerzell': { cuisine:{en:'Alsatian classic',he:'אלזסי קלאסי'}, price:'€€€', vibe:{en:'historic building',he:'מבנה היסטורי'} },
  'La Corde à Linge': { cuisine:{en:'Alsatian casual',he:'אלזסי קז׳ואל'}, price:'€€', vibe:{en:'Petite France location',he:'בלב פטיט פראנס'} }
};

const PLACE_DESCRIPTIONS = {
  en: {

    'Letná Beer Garden':'Go here for a simple Prague evening: beer in hand, open-air tables, and one of the easiest city views without paying for a viewpoint. Best near sunset or after a long walking day.',
    'Náplavka Riverside':'A relaxed riverside strip for walking, casual drinks and people-watching. It works well when you want atmosphere without committing to a club or a formal dinner.',
    'Hemingway Bar':'A polished cocktail bar for a proper drinks night, not a cheap beer stop. Good when you want quality cocktails and a more intimate evening.',
    'Anonymous Bar':'The draw is the theatrical cocktail experience and playful presentation. Choose it when you want a night out that feels like an event, not just another bar.',
    'Dva Kohouti':'A lively beer spot in Karlín with a young local feel. Good for craft beer, standing around outside and starting the evening casually.',
    'Jazz Dock':'A reliable evening plan if you want live music by the river. Check the schedule first because the experience depends on the act performing that night.',
    'Lucerna Music Bar':'Classic Prague nightlife for concerts, DJ nights and retro parties. Better for energy and dancing than for quiet drinks.',
    'Cross Club':'Industrial, alternative and visually intense. Go if you want something weird, young and different from the postcard version of Prague.',
    'Roxy Prague':'One of the stronger choices for a real club night in Prague. Check the event before going; the night can vary a lot by lineup.',
    'Karlovy Lázně':'Large, tourist-heavy multi-floor club. It can be fun with the right mood, but it is not the most local or refined nightlife option.',
    'Vyšehrad Sunset Walk':'A calmer sunset alternative to the busy castle area. You get river views, fortress walls and a slower local feeling, good when the center feels too crowded.',
    'Letná Metronome View':'A wide open viewpoint over Prague bridges and rooftops. Best as a short stop before drinks in Letná or a relaxed evening walk.',
    'Paddle Boats on Vltava':'A light, fun river activity when the weather is good. It is not a must for history, but it makes the trip feel more playful and memorable.',
    'Mirror Maze Petřín':'A small, old-school attraction near Petřín. Best for families or a quick silly stop, not worth crossing the city just for it.',
    'Museum of Senses':'Indoor, photo-friendly and easy. Good as a rain backup or when you want something playful that does not require planning.',
    'Tram 22 Scenic Ride':'A low-cost scenic route through classic Prague areas. Useful when you are tired but still want to see the city from a good line.',
    'Dancing House Rooftop':'Go for a quick modern architecture stop and a view over the river. It is best combined with a riverside walk rather than treated as a full activity.',
    'Strahov Monastery Library':'A beautiful historic interior and a quieter cultural stop near the castle side. Check access rules because not every area is always open.',
    'Astronomical Clock area':'Touristy and crowded, but it is central for a reason. Best treated as a quick iconic stop, not a long activity.',
    'Vyšehrad Fortress':'A less crowded historic area with views, paths and a calmer mood. Good when you want Prague without the Old Town crush.',
    'Jewish Quarter':'Compact, historic and meaningful. Best when you are in the mood for context, synagogues and a deeper layer of Prague history.',
    'Kampa Island':'A softer riverside walk with art, water channels and good photo corners. Useful between Charles Bridge and Malá Strana.',
    'Lennon Wall':'A short colorful photo stop, not a destination by itself. Add it when you are already around Kampa or Malá Strana.',
    'Clementinum viewpoint':'One of the better old-city viewpoints if you want rooftops and architecture. Check ticket times before going.',
    'Karlštejn Castle':'A practical half-day castle trip from Prague. Good when you want a clear destination with views and history without spending the entire day on transport.',
    'Kutná Hora':'A strong public-transport day trip with UNESCO old-town atmosphere and the famous Sedlec Ossuary. Best for history and unusual sights.',
    'Karlovy Vary':'Elegant spa town with colonnades, mineral springs and grand architecture. Better as a full day because the ride is longer.',
    'Český Krumlov':'One of the most beautiful Czech old towns, but it is a long day. Choose it only if you are willing to start early and return late.',
    'Dresden':'Cross-border city trip with museums, river views and rebuilt baroque architecture. Good if you want a Germany day from Prague.',
    'Terezín':'A serious historical memorial visit, not a light tourist stop. Choose it for history, not for scenery or nightlife.',
    'Konopiště Castle':'Castle and park trip with an easier driving profile than the longer southern towns.',
    'Pilsen':'Good for beer culture, a large square and a different Czech city feel. Practical by train or car.',
    'Bohemian Paradise':'Nature and rock formations. This is much better by car because public transport can be fragmented.',
    'Křivoklát Castle':'Forest castle trip with a classic Czech countryside feel. Better when you want a quieter alternative to Karlštejn.',
    'Mělník':'Small wine-and-river town where the Vltava and Elbe meet. Nice for a relaxed partial-day trip.',
    'Poděbrady':'Easy spa-town option with a calmer pace and lower effort than the major day trips.',
    'Vltava River Cruise':'Low-effort river experience for the evening or a relaxed daytime break. Good when you want scenery without walking too much.',
    'Petřín Hill Viewpoint':'A classic viewpoint and sunset area. Check the funicular status before relying on it; walking up is possible but takes effort.',
    'Black Light Theatre':'Indoor evening show option that works well as a rain plan or when you want something uniquely Prague-like.',
    'Beer Spa':'Touristy but memorable wellness-style experience built around Czech beer culture. Check price and reviews before booking.',
    'Prague Vintage Car Tour':'Scenic guided ride through central Prague. Good for photos and low-walking sightseeing, not for budget travel.',
    'E-bike Old Town Tour':'Active city experience for covering more ground. Confirm route, traffic rules and insurance before booking.',
    'Charles Bridge at sunrise':'Best done early before crowds. The value is atmosphere and photos, not a long visit.',
    'Old Town Square at night':'Atmospheric night walk with the city lit up. Good as a simple first-night plan.',
    'Prague Castle panorama':'Classic city view and must-do perspective over Prague roofs and bridges.',
    'Bratislava':'Easy international day trip from Vienna with an old town, castle views and a compact center.',
    'Wachau Valley':'Danube valley, wine villages and viewpoints. Strong by car; public transport works but needs better timing.',
    'Melk Abbey':'Major abbey above the Danube. Good cultural day trip from Vienna.',
    'Baden bei Wien':'Short spa-town escape near Vienna. Good when you want something easy and not too far.',
    'Hallstatt':'Iconic lake village but far and crowded. Best by car with an early start.',
    'Colmar':'One of the strongest day trips from Strasbourg: colorful old town, canals and Alsace atmosphere.',
    'Riquewihr':'Wine village with postcard streets. Better by car or organized transfer than pure public transport.',
    'Château du Haut-Kœnigsbourg':'Mountain castle with wide views. Car is usually the practical choice.',
    'Baden-Baden':'Elegant German spa town with casino, parks and thermal-bath culture.',
    'Europa-Park':'Large theme park day trip. Works best when you dedicate a full day and plan transport carefully.',
    'Strasbourg Boat Tour':'Good first experience for understanding the city layout, canals and European quarter.',
    'Cathedral Platform View':'A viewpoint experience above central Strasbourg; check opening times and stair access.',
    'Petite France canals':'Romantic canal area for photos, walking and evening atmosphere.'
  },
  he: {

    'Letná Beer Garden':'מקום מעולה לערב פשוט בפראג: בירה, שולחנות בחוץ ותצפית עירונית בלי לשלם על אטרקציה. הכי טוב בשקיעה או אחרי יום הליכה ארוך.',
    'Náplavka Riverside':'טיילת נהר רגועה להליכה, שתייה קלה ואווירה. מתאים כשבא לך להרגיש את העיר בלי להיכנס למועדון או למסעדה כבדה.',
    'Hemingway Bar':'בר קוקטיילים איכותי ורציני, לא מקום לבירה זולה. מתאים לערב אלגנטי יותר עם שתייה טובה ואווירה אינטימית.',
    'Anonymous Bar':'החוויה כאן היא ההגשה התיאטרלית והמשחק סביב הקוקטיילים. מתאים כשרוצים ערב שמרגיש כמו חוויה ולא רק עוד בר.',
    'Dva Kohouti':'מקום בירה תוסס בקרלין עם תחושה צעירה ומקומית. טוב להתחלת ערב קלילה עם בירה בעמידה ואווירה פתוחה.',
    'Jazz Dock':'תוכנית ערב טובה אם רוצים מוזיקה חיה ליד הנהר. חשוב לבדוק לוח הופעות כי הערב תלוי באמן שמופיע.',
    'Lucerna Music Bar':'מקום קלאסי להופעות, מסיבות וערבי רטרו. מתאים יותר לאנרגיה וריקודים מאשר לשיחה שקטה.',
    'Cross Club':'אלטרנטיבי, תעשייתי ומאוד ויזואלי. מתאים אם רוצים משהו צעיר, מוזר ושונה מפראג התיירותית הרגילה.',
    'Roxy Prague':'אחת האפשרויות החזקות למועדון אמיתי בפראג. לבדוק אירוע לפני שמגיעים כי האיכות תלויה בליין־אפ.',
    'Karlovy Lázně':'מועדון גדול ותיירותי עם כמה קומות. יכול להיות כיף במצב רוח נכון, אבל זה לא המקום הכי מקומי או אלגנטי.',
    'Vyšehrad Sunset Walk':'חלופה רגועה יותר לשקיעה לעומת אזור הטירה העמוס. יש חומות, נוף לנהר ואווירה מקומית יותר.',
    'Letná Metronome View':'תצפית רחבה על הגשרים והגגות של פראג. טובה כעצירה קצרה לפני שתייה באזור לטנה או הליכת ערב.',
    'Paddle Boats on Vltava':'חוויה קלילה וכיפית על הנהר כשמזג האוויר טוב. לא חובה היסטורית, אבל מוסיפה לטיול תחושה משחקית וזכירה.',
    'Mirror Maze Petřín':'אטרקציה קטנה וקצת נוסטלגית ליד פטרין. טובה למשפחות או עצירה מצחיקה קצרה, לא יעד בפני עצמו.',
    'Museum of Senses':'מקורה, מצטלם טוב וקל לביצוע. מתאים כגיבוי לגשם או כשמחפשים משהו קליל בלי תכנון גדול.',
    'Tram 22 Scenic Ride':'קו חשמלית נופי וזול שעובר באזורים קלאסיים של פראג. טוב כשעייפים אבל עדיין רוצים לראות עוד מהעיר.',
    'Dancing House Rooftop':'עצירת אדריכלות מודרנית ותצפית על הנהר. הכי טוב לשלב עם הליכה לאורך הוולטאבה ולא כפעילות יחידה.',
    'Strahov Monastery Library':'פנים היסטורי יפהפה ועצירה תרבותית שקטה יחסית באזור הטירה. לבדוק מראש מה פתוח למבקרים.',
    'Astronomical Clock area':'תיירותי ועמוס, אבל אייקוני. כדאי להתייחס אליו כעצירה קצרה ולא כפעילות ארוכה.',
    'Vyšehrad Fortress':'אזור היסטורי פחות צפוף עם שבילים ותצפיות. טוב כשרוצים פראג רגועה יותר מהעיר העתיקה.',
    'Jewish Quarter':'אזור קומפקטי, היסטורי ומשמעותי. מתאים כשמחפשים יותר עומק, בתי כנסת וסיפור היסטורי.',
    'Kampa Island':'הליכה רכה ליד הנהר עם אמנות, תעלות ופינות צילום. טוב לשילוב בין גשר קארל למאלה סטרנה.',
    'Lennon Wall':'עצירת צילום צבעונית וקצרה, לא יעד בפני עצמו. להוסיף כשכבר נמצאים בקמפה או מאלה סטרנה.',
    'Clementinum viewpoint':'אחת התצפיות הטובות לגגות העיר העתיקה. לבדוק זמני כרטיסים לפני שמגיעים.',
    'Karlštejn Castle':'טיול חצי־יום מעשי מטירת קרלשטיין. מתאים כשרוצים יעד ברור עם נוף והיסטוריה בלי לשרוף יום שלם על נסיעות.',
    'Kutná Hora':'טיול יום חזק בתחבורה ציבורית עם אווירת עיר עתיקה ואתר עצמות מפורסם. מתאים במיוחד להיסטוריה ומקומות יוצאי דופן.',
    'Karlovy Vary':'עיירת ספא אלגנטית עם קולונדות, מעיינות חמים ואדריכלות מרשימה. עדיף כיום מלא בגלל זמן הנסיעה.',
    'Český Krumlov':'אחת הערים העתיקות היפות בצ׳כיה, אבל זה יום ארוך. מתאים רק אם מוכנים לצאת מוקדם ולחזור מאוחר.',
    'Dresden':'טיול עירוני חוצה גבול לגרמניה עם מוזיאונים, נוף נהר ואדריכלות בארוק משוחזרת.',
    'Terezín':'ביקור היסטורי רציני באתר זיכרון, לא טיול קליל. מתאים למי שמחפש עומק היסטורי.',
    'Konopiště Castle':'טירה ופארק עם פרופיל נסיעה קל יותר מהיעדים הדרומיים הארוכים.',
    'Pilsen':'מתאים לתרבות בירה, כיכר גדולה ואווירה של עיר צ׳כית אחרת. מעשי ברכבת או ברכב.',
    'Bohemian Paradise':'טבע ותצורות סלע. עדיף משמעותית ברכב כי התחבורה הציבורית פחות רציפה.',
    'Křivoklát Castle':'טירת יער עם תחושת כפר צ׳כי קלאסי. חלופה שקטה יותר לקרלשטיין.',
    'Mělník':'עיירת יין ונהרות קטנה בנקודת המפגש של הוולטאבה והאלבה. טובה לחצי יום רגוע.',
    'Poděbrady':'עיירת ספא קלה ונינוחה, פחות מאמצת מהטיולים הגדולים.',
    'Vltava River Cruise':'חוויה קלה על הנהר לערב או להפסקה רגועה ביום. טובה כשרוצים נוף בלי הרבה הליכה.',
    'Petřín Hill Viewpoint':'אזור תצפית ושקיעה קלאסי. צריך לבדוק אם הפוניקולר פעיל; אפשר לעלות ברגל אבל זה מאמץ.',
    'Black Light Theatre':'מופע ערב מקורה שמתאים במיוחד ליום גשום או לחוויה “פראגית” מיוחדת.',
    'Beer Spa':'חוויה תיירותית אבל זכירה סביב תרבות הבירה הצ׳כית. חשוב לבדוק מחיר וביקורות לפני הזמנה.',
    'Prague Vintage Car Tour':'סיור רכוב ונופי במרכז פראג. טוב לצילומים ולסיור עם מעט הליכה, פחות למטייל חסכוני.',
    'E-bike Old Town Tour':'חוויה אקטיבית שמכסה יותר אזורים בעיר. כדאי לבדוק מסלול, חוקי רכיבה וביטוח.',
    'Charles Bridge at sunrise':'הכי טוב מוקדם בבוקר לפני העומס. הערך הוא אווירה וצילום, לא ביקור ארוך.',
    'Old Town Square at night':'הליכת ערב באווירה יפה כשהעיר מוארת. מתאים לתוכנית פשוטה ללילה הראשון.',
    'Prague Castle panorama':'תצפית קלאסית וחובה על גגות וגשרי פראג.',
    'Bratislava':'טיול יום בינלאומי קל מווינה עם עיר עתיקה, תצפית מהטירה ומרכז קומפקטי.',
    'Wachau Valley':'עמק הדנובה, כפרי יין ותצפיות. חזק ברכב; בתחבורה ציבורית דורש תזמון טוב.',
    'Melk Abbey':'מנזר מרכזי מעל הדנובה. טיול תרבותי טוב מווינה.',
    'Baden bei Wien':'בריחה קצרה לעיירת ספא ליד וינה. טובה כשרוצים משהו קל ולא רחוק.',
    'Hallstatt':'כפר אגם אייקוני אבל רחוק ועמוס. עדיף ברכב ויציאה מוקדמת.',
    'Colmar':'אחד מטיולי היום החזקים משטרסבורג: עיר עתיקה צבעונית, תעלות ואווירת אלזס.',
    'Riquewihr':'כפר יין ציורי עם רחובות פוטוגניים. עדיף ברכב או העברה מאורגנת מאשר בתחבורה ציבורית בלבד.',
    'Château du Haut-Kœnigsbourg':'טירת הר עם תצפיות רחבות. רכב הוא בדרך כלל הבחירה המעשית.',
    'Baden-Baden':'עיירת ספא גרמנית אלגנטית עם קזינו, פארקים ותרבות מרחצאות.',
    'Europa-Park':'פארק שעשועים גדול ליום מלא. מתאים רק כשמקדישים לו את היום ומתכננים תחבורה מראש.',
    'Strasbourg Boat Tour':'חוויה טובה להתחלה כדי להבין את מבנה העיר, התעלות והרובע האירופי.',
    'Cathedral Platform View':'תצפית מעל מרכז שטרסבורג; לבדוק שעות פתיחה וגישה במדרגות.',
    'Petite France canals':'אזור תעלות רומנטי לצילום, הליכה ואווירת ערב.'
  }
};


const GUIDE_CONTENT = {
  'Velká Amerika Quarry': {he:{why:'מחצבה עצומה ומוצפת במים בצבע טורקיז שנראית כמו קניון קטן מחוץ לפראג. זה יעד טוב כשמחפשים טבע, צילום ונוף דרמטי בלי להיכנס לעוד עיר עתיקה.', see:['נקודות תצפית מעל המחצבה','שבילי הליכה קצרים באזור','נוף מים וצוקים שמתאים לצילום'], fit:'מתאים לזוגות, צילום וטבע. פחות מתאים ליום גשום או למי שלא רוצה הליכה בשטח.', tip:'לא לבנות על רחצה או ירידה למים; לבדוק גישה חוקית ובטיחות לפני ההגעה.'}, en:{why:'A huge flooded limestone quarry with turquoise water that feels more like a small canyon than a standard Prague stop. Go for nature, photography and a dramatic view outside the city.', see:['Viewpoints above the quarry','Short countryside walks','Water-and-cliff scenery for photos'], fit:'Best for couples, photography and nature. Less suitable in rain or for travelers avoiding rough walking.', tip:'Do not assume swimming or access to the water is allowed. Verify access and safety before going.'}},
  'Lidice Memorial': {he:{why:'אתר זיכרון עוצמתי לכפר שנמחק במלחמת העולם השנייה. זה לא טיול נוף קליל אלא ביקור שנותן עומק היסטורי ומשמעות רגשית לטיול.', see:['אנדרטת הילדים','אזור הכפר ההיסטורי','מוזיאון הזיכרון והגן'], fit:'מתאים למי שמחפש היסטוריה, זיכרון ועומק. לא מתאים כפעילות קלילה לילדים קטנים או יום בילוי שמח.', tip:'להגיע בראש מתאים ולתת לזה זמן שקט; זה יעד מכבד ולא “עוד עצירת צילום”.'}, en:{why:'A powerful memorial to a village destroyed during World War II. This is not a light sightseeing stop; it adds historical depth and emotional weight to the trip.', see:['The children’s memorial','The historic village area','Memorial museum and gardens'], fit:'Best for history, memory and context. Not ideal as a light family fun stop.', tip:'Arrive with the right mindset and give it quiet time. Treat it as a memorial, not just a photo stop.'}},
  'Karlštejn Castle': {he:{why:'טירה גותית קלאסית שנבנתה לשמירת אוצרות המלוכה של בוהמיה. זה אחד מטיולי החצי־יום הכי פשוטים מפראג עם שילוב טוב של רכבת, כפר וטירה.', see:['העלייה דרך הכפר אל הטירה','חצרות ותצפיות','סיור פנים אם יש כרטיסים זמינים'], fit:'מתאים למי שרוצה טירה בלי יום נסיעה ארוך. יש עלייה, אז פחות נוח לעגלות או למי שמתקשה בהליכה.', tip:'להזמין סיור מראש בעונה עמוסה ולהשאיר זמן להליכה מהתחנה.'}, en:{why:'A classic Gothic castle originally built to protect Bohemian royal treasures. One of the easiest half-day trips from Prague with train, village walk and castle atmosphere.', see:['Village walk up to the castle','Courtyards and viewpoints','Interior tour if tickets are available'], fit:'Good for travelers who want a castle without losing a full day. The uphill walk can be tiring.', tip:'Book the interior tour ahead in busy season and allow time for the walk from the station.'}},
  'Kutná Hora': {he:{why:'עיר היסטורית עם שילוב נדיר של יופי, כסף, כנסיות ואתר עצמות מפורסם. זה יעד חזק למי שרוצה משהו שונה מהעיר העתיקה של פראג.', see:['כנסיית העצמות Sedlec Ossuary','קתדרלת St. Barbara','רחובות העיר העתיקה'], fit:'מתאים להיסטוריה, צילום ואתרים יוצאי דופן. פחות מתאים למי שרגיש לתצוגות עצמות.', tip:'לבדוק אם הכרטיס כולל כמה אתרים, כי הם לא כולם באותה נקודה בעיר.'}, en:{why:'A historic silver-mining town with a rare mix of beauty, churches and the famous bone chapel. It feels very different from Prague’s Old Town.', see:['Sedlec Ossuary bone chapel','St. Barbara’s Cathedral','Historic streets and viewpoints'], fit:'Best for history, photography and unusual sights. Less suitable if bone displays bother you.', tip:'Check combined tickets and transport between sites; they are not all in one spot.'}},
  'Karlovy Vary': {he:{why:'עיירת הספא האלגנטית ביותר בצ׳כיה: קולונדות, מעיינות חמים, מבנים צבעוניים וטיילת שמרגישה כמו אירופה של פעם.', see:['Mill Colonnade','מעיינות חמים לאורך הטיילת','תצפית Diana אם יש זמן'], fit:'מתאים לזוגות, צילום, יום רגוע ובתי קפה. פחות מתאים למי שמחפש אקשן.', tip:'לקנות כוס ספא קטנה ולטעום בזהירות מהמעיינות; הטעם מינרלי ולא לכולם.'}, en:{why:'The most elegant Czech spa town: colonnades, hot springs, colorful buildings and a promenade that feels like old Europe.', see:['Mill Colonnade','Hot springs along the promenade','Diana viewpoint if time allows'], fit:'Great for couples, photography, cafés and a slower day. Not for action seekers.', tip:'Buy a small spa cup and taste the springs carefully; the mineral flavor is not for everyone.'}},
  'Český Krumlov': {he:{why:'עיר עתיקה ציורית עם נהר מתפתל, טירה גדולה וסמטאות שנראות כמו תפאורה. זה יעד יפה מאוד, אבל ארוך — לא לבחור אם רוצים יום קל.', see:['מרכז העיר העתיקה','הטירה והתצפית','הליכה לאורך הנהר'], fit:'מתאים לרומנטיקה, צילום ויום מלא. פחות מתאים למי שלא רוצה נסיעה ארוכה.', tip:'לצאת מוקדם מאוד; אחרת תגיעו לשעות העמוסות ותאבדו חצי מהיום בנסיעות.'}, en:{why:'A storybook old town with a river bend, large castle and streets that feel like a film set. Beautiful, but long from Prague.', see:['Old town center','Castle and viewpoint','River walks'], fit:'Best for romance, photography and a full-day plan. Not for an easy short outing.', tip:'Start very early or the travel time and crowds will weaken the experience.'}},
  'Terezín': {he:{why:'אתר היסטורי כבד ומשמעותי שקשור לשואה ולמלחמת העולם השנייה. בוחרים בו כדי להבין, לא כדי “לטייל יפה”.', see:['המצודה הקטנה','מוזיאון הגטו','אתרי זיכרון בעיירה'], fit:'מתאים למבוגרים ולמי שמחפש היסטוריה עמוקה. לא יעד קליל.', tip:'לא לשלב מיד אחריו פעילות שמחה מדי; להשאיר מרווח רגשי ביום.'}, en:{why:'A heavy, meaningful historical site connected to the Holocaust and World War II. Choose it for understanding, not pretty sightseeing.', see:['Small Fortress','Ghetto Museum','Memorial sites around town'], fit:'Best for adults and travelers seeking serious history. Not a light day trip.', tip:'Leave emotional space in the day; do not treat it as just another tourist stop.'}},
  'Dresden': {he:{why:'קפיצה לגרמניה ביום אחד: עיר על נהר האלבה עם ארכיטקטורה משוחזרת, מוזיאונים ואווירה שונה לגמרי מפראג.', see:['Frauenkirche','Brühl’s Terrace','אזור Zwinger והמוזיאונים'], fit:'מתאים למוזיאונים, ארכיטקטורה וקניות קלות. פחות למי שרוצה טבע.', tip:'לבדוק רכבת חזור מראש; זה יום עירוני מלא.'}, en:{why:'A one-day jump into Germany: Elbe river views, rebuilt baroque architecture and a completely different feel from Prague.', see:['Frauenkirche','Brühl’s Terrace','Zwinger area and museums'], fit:'Great for museums, architecture and a city day. Less suitable for nature.', tip:'Check the return train before leaving; it works best as a full city day.'}},
  'Pilsen': {he:{why:'עיר הבירה של הבירה פילזנר, עם כיכר גדולה ומרכז נוח. מתאים למי שרוצה צ׳כיה אחרת בלי להתרחק מדי.', see:['Pilsner Urquell Brewery','כיכר Republic Square','מרכז העיר'], fit:'מתאים לחובבי בירה, אוכל ויום קל. פחות מרשים למי שמחפש נופים.', tip:'אם עושים סיור מבשלה — לבדוק שעות וסיורים באנגלית מראש.'}, en:{why:'The home of Pilsner beer, with a large square and easy center. Good for a different Czech city without going too far.', see:['Pilsner Urquell Brewery','Republic Square','City center'], fit:'Best for beer lovers, food and an easy day. Less impressive for scenery.', tip:'If you want the brewery tour, check English times ahead.'}},
  'Bratislava': {he:{why:'טיול יום בינלאומי קל מווינה לעיר עתיקה קומפקטית, טירה ותצפיות על הדנובה. טוב כשצריך שינוי מדויק בלי לוגיסטיקה כבדה.', see:['העיר העתיקה','טירת ברטיסלבה','טיילת הדנובה'], fit:'מתאים ליום קל, צילום ותחושת “עוד מדינה”.', tip:'לא צריך לרוץ בין הרבה אתרים; הערך הוא הליכה רגועה במרכז.'}, en:{why:'An easy international day trip from Vienna to a compact old town, castle and Danube views. A clean change of scene without heavy logistics.', see:['Old Town','Bratislava Castle','Danube promenade'], fit:'Good for an easy day, photos and the feeling of visiting another country.', tip:'Do not over-plan; the value is a relaxed central walk.'}},
  'Hallstatt': {he:{why:'כפר אגם אייקוני בין הרים ומים, מהתמונות המפורסמות של אוסטריה. יפה מאוד, אבל רחוק ועמוס — לבחור רק אם זה חלום אישי.', see:['תצפית על הכפר והאגם','טיילת האגם','נקודות צילום קלאסיות'], fit:'מתאים לצילום ונוף. פחות מתאים אם שונאים עומס או נסיעות ארוכות.', tip:'לצאת מוקדם מאוד ולבדוק חניה/עומס; אחרת החוויה נפגעת.'}, en:{why:'An iconic lake village between mountains and water, one of Austria’s most photographed scenes. Beautiful but far and crowded.', see:['Village-and-lake viewpoint','Lake promenade','Classic photo spots'], fit:'Best for scenery and photography. Less good if you dislike crowds or long drives.', tip:'Leave very early and check parking/crowds; timing can make or break it.'}},
  'Colmar': {he:{why:'עיר אלזס צבעונית עם תעלות, בתים מצוירים ואווירה רומנטית. אחד היעדים הכי חזקים משטרסבורג בלי להסתבך.', see:['La Petite Venise','רחובות צבעוניים','בתי קפה וקונדיטוריות'], fit:'מתאים לזוגות, צילום, יום רגוע ואוכל אלזסי.', tip:'להגיע מוקדם או לקראת ערב כדי לקבל פחות עומס ואור יפה יותר.'}, en:{why:'A colorful Alsace town with canals, painted houses and romantic streets. One of the strongest, easiest trips from Strasbourg.', see:['La Petite Venise','Colorful streets','Cafés and pastry shops'], fit:'Great for couples, photography, slow walking and Alsatian food.', tip:'Go early or late afternoon for better light and fewer crowds.'}},
  'Riquewihr': {he:{why:'כפר יין ציורי שנראה כמעט לא אמיתי: רחובות אבן, בתים צבעוניים ותחושת אלזס מרוכזת. נהדר ברכב.', see:['רחוב ראשי צבעוני','חנויות יין ומעדנים','נקודות צילום בכפר'], fit:'מתאים לרומנטיקה, יין וצילום. פחות נוח בתחבורה ציבורית.', tip:'לשלב עם כפר נוסף באזור ולא לנסוע רק אליו אם יש רכב.'}, en:{why:'A postcard wine village with stone streets, colorful houses and a concentrated Alsace feeling. Excellent by car.', see:['Colorful main street','Wine and food shops','Village photo corners'], fit:'Best for romance, wine and photography. Less convenient by public transport.', tip:'Combine it with another nearby village if you have a car.'}},
  'Baden-Baden': {he:{why:'עיירת ספא גרמנית אלגנטית עם פארקים, קזינו ואווירה של חופשת בריאות קלאסית. שינוי טוב משטרסבורג.', see:['Kurhaus והקזינו','פארקים ושדרות','מרחצאות אם מתכננים מראש'], fit:'מתאים לזוגות, ספא והליכה רגועה. לא יעד זול במיוחד.', tip:'אם רוצים מרחצאות — לבדוק מדיניות, שעות וכרטיסים מראש.'}, en:{why:'An elegant German spa town with parks, casino culture and a classic wellness-holiday mood. A good contrast to Strasbourg.', see:['Kurhaus and casino','Parks and promenades','Thermal baths if planned ahead'], fit:'Good for couples, spa and relaxed walking. Not the cheapest stop.', tip:'If you want baths, check rules, opening hours and tickets before going.'}},
  'Vltava River Cruise': {he:{why:'דרך קלה לראות את פראג מזווית אחרת בלי ללכת הרבה. הגשרים, הטירה והעיר העתיקה נראים אחרת לגמרי מהנהר.', see:['גשר קארל מהמים','קו הרקיע של הטירה','אזורי הנהר המוארים בערב'], fit:'מתאים לזוגות, משפחות ויום עייף. פחות מתאים למי שמחפש אדרנלין.', tip:'הזמן הכי יפה הוא שעה לפני שקיעה; לבדוק אם המסלול באמת עובר באזורים המרכזיים.'}, en:{why:'An easy way to see Prague from a different angle without much walking. The bridges, castle skyline and Old Town feel different from the water.', see:['Charles Bridge from the river','Castle skyline','Evening river lights'], fit:'Good for couples, families and tired days. Not for adrenaline.', tip:'Best about an hour before sunset; check the exact route before booking.'}},
  'Hemingway Bar': {he:{why:'בר קוקטיילים רציני ואינטימי, מתאים לערב איכותי ולא לבירה זולה. מגיעים בשביל משקה מושקע ואווירה בוגרת.', see:['תפריט קוקטיילים יצירתי','אווירה קטנה ואינטימית','שירות יותר מוקפד מבר רגיל'], fit:'מתאים לזוגות וחובבי קוקטיילים. פחות מתאים לקבוצות רועשות או תקציב נמוך.', tip:'להזמין מקום מראש; ספונטני יכול להסתיים בהמתנה.'}, en:{why:'A serious, intimate cocktail bar for a quality drinks night rather than cheap beer. Go for crafted drinks and a more mature atmosphere.', see:['Creative cocktail menu','Small intimate setting','More polished service than a standard bar'], fit:'Great for couples and cocktail lovers. Less suitable for loud groups or low budget.', tip:'Reserve ahead; walk-ins can mean waiting.'}},
  'Letná Beer Garden': {he:{why:'בירה באוויר פתוח עם תצפית רחבה על פראג. זה מקום שמרגיש פשוט, מקומי וחופשי יותר מבר תיירותי במרכז.', see:['נוף לגשרים','שולחנות בחוץ','הליכה בפארק לטנה'], fit:'מתאים לערב קל, חברים ושקיעה. לא מתאים אם יורד גשם.', tip:'לקחת משהו קל ולא לבנות על ארוחת גורמה; הערך הוא האווירה.'}, en:{why:'Open-air beer with a broad Prague view. It feels simpler, freer and more local than a tourist bar in the center.', see:['Views over the bridges','Outdoor tables','Letná park walk'], fit:'Best for sunset, friends and a casual evening. Not good in rain.', tip:'Do not expect gourmet food; the value is the atmosphere.'}},
  'Charles Bridge at sunrise': {he:{why:'רוב המטיילים רואים את גשר קארל כשהוא צפוף. בזריחה הוא שקט, הפסלים מקבלים אור רך והגשר מרגיש כמעט פרטי.', see:['פסלי הגשר באור ראשון','נוף הטירה','צילום כמעט בלי קהל'], fit:'מתאים לצילום, זוגות ומי שמוכן לקום מוקדם.', tip:'להגיע 20–30 דקות לפני הזריחה, לא בדיוק בזמן.'}, en:{why:'Most travelers see Charles Bridge when it is packed. At sunrise it is quiet, the statues catch soft light and the bridge can feel almost private.', see:['Bridge statues in first light','Castle view','Photos with fewer crowds'], fit:'Best for photography, couples and early risers.', tip:'Arrive 20–30 minutes before sunrise, not exactly at sunrise.'}},
  'Old Town Square at night': {he:{why:'בלילה הכיכר משתנה: האורות, המגדלים והשעון יוצרים אווירה חזקה יותר מאשר בשעות העומס של היום.', see:['השעון האסטרונומי מואר','כנסיית טין','הליכת ערב בסמטאות'], fit:'מתאים ללילה ראשון, צילום והליכה קצרה.', tip:'לא חייבים לאכול ממש בכיכר; לרוב עדיף להתרחק כמה רחובות.'}, en:{why:'At night the square changes: lights, towers and the clock create a stronger atmosphere than the crowded daytime version.', see:['Astronomical Clock lit up','Týn Church','Evening lanes around the square'], fit:'Good for first night, photos and a short walk.', tip:'You do not need to eat on the square; usually better a few streets away.'}},
  'Strasbourg Cathedral': {he:{why:'קתדרלה גותית עצומה שמגדירה את מרכז שטרסבורג. גם אם לא נכנסים להרבה כנסיות, זו נקודת חובה בגלל הגודל, הפרטים והנוכחות.', see:['חזית האבן המפורטת','השעון האסטרונומי','הכיכר סביב הקתדרלה'], fit:'מתאים לכולם כמעט, במיוחד צילום והיסטוריה.', tip:'לחזור גם בלילה — התאורה משנה לגמרי את החוויה.'}, en:{why:'A huge Gothic cathedral that defines central Strasbourg. Even if you rarely visit churches, this one is worth it for scale, detail and presence.', see:['Detailed stone façade','Astronomical clock','Cathedral square'], fit:'Good for almost everyone, especially history and photography.', tip:'Return at night too; the lighting changes the whole feeling.'}},
  'Petite France': {he:{why:'האזור הכי ציורי בשטרסבורג: תעלות, גשרים ובתים חצי־עץ. זה המקום שמרגיש הכי “אלזס” בתוך העיר.', see:['תעלות וגשרים','בתים חצי־עץ','נקודות צילום לאורך המים'], fit:'מתאים לזוגות, צילום והליכה איטית.', tip:'הכי יפה מוקדם בבוקר או אחרי השקיעה כשהעומס יורד.'}, en:{why:'The most postcard-like part of Strasbourg: canals, bridges and half-timbered houses. This is the strongest Alsace feeling inside the city.', see:['Canals and bridges','Half-timbered houses','Waterfront photo spots'], fit:'Best for couples, photography and slow walking.', tip:'Most beautiful early morning or after sunset when crowds drop.'}}
};


const RICH_GUIDE_CONTENT = {
  "Průhonice Park": {
    "he": {
      "why": "פארק פרוהוניצה הוא לא “עוד פארק ליד פראג”, אלא גן נופי ענק סביב טירה, עם שבילים, אגמים, גשרים וצמחייה עונתית. הסיבה להגיע היא לברוח מהעומס של העיר בלי לנסוע רחוק, ולקבל טבע מסודר, יפה ונגיש יחסית גם ביום קצר.",
      "see": "טירת פרוהוניצה מבחוץ, שבילי הליכה סביב אגמים, גשרים קטנים, אזורי פריחה וצמחייה, נקודות צילום ירוקות ושקטות.",
      "fit": "מתאים לזוגות, משפחות, צילום, יום רגוע אחרי עומס בעיר. פחות מתאים למי שמחפש אדרנלין או מרכז עירוני.",
      "tip": "לבוא עם נעליים נוחות ולתכנן לפחות שעתיים. באביב/תחילת קיץ הצמחייה והפריחה נותנות ערך גבוה במיוחד."
    },
    "en": {
      "why": "Průhonice Park is not just a park near Prague; it is a large landscaped park around a château, with lakes, paths, bridges and seasonal planting. The reason to go is simple: a green escape from central Prague without committing to a long day trip.",
      "see": "Château exterior, lakeside paths, small bridges, seasonal flowers, quiet green photo spots.",
      "fit": "Good for couples, families, photography and a calm half-day. Not for adrenaline seekers.",
      "tip": "Wear comfortable shoes and allow at least two hours. Spring and early summer are especially rewarding."
    }
  },
  "Velká Amerika Quarry": {
    "he": {
      "why": "מחצבת ולקה אמריקה היא קניון אבן גיר מוצף במים טורקיז, ולכן מכנים אותה לעיתים “הגרנד קניון הצ׳כי”. הסיבה להגיע היא הנוף הדרמטי: זה נראה שונה לגמרי מפראג הקלאסית ומוסיף לטיול רגע טבע פראי וצילומי.",
      "see": "תצפיות מעל המחצבה, מים כחולים/טורקיז, שביל סביב אזורי התצפית, שילוב אפשרי עם טירת קרלשטיין או מחצבות סמוכות.",
      "fit": "מתאים לצילום, טבע, זוגות ומי שמטייל ברכב. פחות מתאים לגשם, עגלות או מי שמחפש אתר מסודר עם הרבה שירותים.",
      "tip": "לא יורדים לתוך המחצבה — הכניסה למטה מסוכנת ואסורה. להישאר בנקודות התצפית המסודרות ולשלב עם Karlštejn אם יש זמן."
    },
    "en": {
      "why": "Velká Amerika is a flooded limestone quarry with blue-green water, often nicknamed the Czech Grand Canyon. Go for a dramatic natural view that feels completely different from classical Prague.",
      "see": "Viewpoints above the quarry, turquoise water, walking around the rim, possible combination with Karlštejn Castle or nearby quarries.",
      "fit": "Best for photography, nature and car-based trips. Not ideal in rain or with strollers.",
      "tip": "Do not enter the quarry floor; it is dangerous and prohibited. Stay on the viewpoints and combine with Karlštejn if possible."
    }
  },
  "Lidice Memorial": {
    "he": {
      "why": "לידיצה הוא אתר זיכרון קשה אבל חשוב. זה הכפר שנמחק על ידי הנאצים ביוני 1942 והפך לסמל אירופי של אובדן, נקמה וזיכרון. הסיבה להגיע היא לא “בילוי”, אלא להבין פרק היסטורי עמוק שנמצא במרחק קצר מפראג.",
      "see": "אזור הזיכרון הפתוח, שרידי הכפר, גן הוורדים, מוזיאון/תערוכה, אנדרטאות וסימונים של המקומות שבהם עמדו הבתים.",
      "fit": "מתאים למטיילים שמתעניינים בהיסטוריה ומוכנים לביקור רציני ושקט. לא מתאים כטיול קליל עם ילדים קטנים או יום שמח.",
      "tip": "לתכנן את זה כיום רגוע יותר ולא לשלב מיד אחר כך פעילות רועשת. זה מקום שצריך לו זמן וכבוד."
    },
    "en": {
      "why": "Lidice Memorial is a serious, important stop. The village was destroyed by the Nazis in June 1942 and became a European symbol of loss, retaliation and memory. The reason to go is historical understanding, not entertainment.",
      "see": "Open memorial area, remains of the village, rose garden, museum/exhibition, memorial sculptures and foundations.",
      "fit": "Good for travelers interested in WWII history and reflective visits. Not a light family fun stop.",
      "tip": "Do it on a quieter day and allow time to absorb the place."
    }
  },
  "Karlštejn Castle": {
    "he": {
      "why": "קרלשטיין היא אחת הטירות הקלאסיות ביותר ליד פראג: טירה גותית מהמאה ה־14 שנבנתה עבור קרל הרביעי כדי לשמור אוצרות ושרידים קדושים. הסיבה להגיע היא לקבל טירת ימי־ביניים אמיתית בלי יום נסיעה ארוך.",
      "see": "עלייה דרך הכפר, חזית הטירה המרשימה, חצרות ותצפיות, אפשרות לסיור פנים לפי זמינות, טבע מסביב.",
      "fit": "מתאים מאוד לטיול חצי יום, צילום, משפחות וזוגות. העלייה לטירה דורשת קצת הליכה.",
      "tip": "אם לא נכנסים לסיור פנים — עדיין יש ערך גבוה בחוץ ובכפר. לשלב עם Velká Amerika אם יש רכב."
    },
    "en": {
      "why": "Karlštejn is one of the classic castle trips from Prague: a 14th-century Gothic castle built for Charles IV to guard royal treasures and relics. Go for a real medieval-castle feeling without a long travel day.",
      "see": "Village walk uphill, impressive castle exterior, courtyards, viewpoints, optional interior tour, surrounding nature.",
      "fit": "Great half-day trip for photos, couples and families. The castle approach includes some uphill walking.",
      "tip": "Even without an interior tour, the exterior and village are worthwhile. Combine with Velká Amerika by car."
    }
  },
  "Kutná Hora": {
    "he": {
      "why": "קוטנה הורה הייתה פעם עיר כסף עשירה שהתחרתה בחשיבותה עם פראג. הסיבה להגיע היא השילוב החריג של יופי גותי, עיר היסטורית וכנסיית העצמות המפורסמת — יעד שמרגיש שונה מכל דבר במרכז פראג.",
      "see": "Sedlec Ossuary – כנסיית העצמות, קתדרלת St. Barbara, הרחובות ההיסטוריים, תצפיות על העיר והעמק.",
      "fit": "מתאים לחובבי היסטוריה, ארכיטקטורה, צילום וטיול יום בתחבורה ציבורית. פחות מתאים למי שמחפש טבע פתוח.",
      "tip": "לא לבוא רק בשביל כנסיית העצמות. St. Barbara והעיר עצמה נותנים את העומק האמיתי של הביקור."
    },
    "en": {
      "why": "Kutná Hora was once a wealthy silver-mining city that rivaled Prague. Go for a rare mix of Gothic architecture, historic streets and the famous Bone Church.",
      "see": "Sedlec Ossuary, St. Barbara’s Cathedral, historic streets, viewpoints over town and valley.",
      "fit": "Good for history, architecture, photography and public transport day trips.",
      "tip": "Do not come only for the Bone Church; St. Barbara and the old town make the trip worthwhile."
    }
  },
  "Karlovy Vary": {
    "he": {
      "why": "קרלובי וארי היא עיירת הספא האלגנטית ביותר בצ׳כיה: טיילות, קולונדות, מעיינות חמים ומבנים צבעוניים לאורך הנהר. הסיבה להגיע היא לראות צ׳כיה מפוארת ורגועה יותר, עם תחושה של חופשת בריאות אירופאית ישנה.",
      "see": "Mill Colonnade, Hot Spring Colonnade, Grandhotel Pupp מבחוץ, טיילת הנהר, תצפית Diana אם יש זמן.",
      "fit": "מתאים לזוגות, צילום, הליכה רגועה ואנשים שאוהבים אדריכלות. פחות מתאים למי שמחפש אטרקציות אקסטרים.",
      "tip": "לקנות כוס ספא קטנה ולטעום מהמעיינות — גם אם הטעם מוזר, זו חלק מהחוויה."
    },
    "en": {
      "why": "Karlovy Vary is the Czech Republic’s most elegant spa town: colonnades, hot springs, colorful buildings and river promenades. Go for a refined old-European spa atmosphere.",
      "see": "Mill Colonnade, Hot Spring Colonnade, Grandhotel Pupp exterior, river promenade, Diana viewpoint if time allows.",
      "fit": "Good for couples, photos, relaxed walking and architecture.",
      "tip": "Buy a small spa cup and taste the springs; the flavor may be odd, but it is part of the experience."
    }
  },
  "Český Krumlov": {
    "he": {
      "why": "צ׳סקי קרומלוב הוא טיול יום ארוך אבל מרשים: עיר עתיקה שנכרכת סביב נהר הוולטאבה, טירה גדולה ומראה כמעט אגדי. הסיבה להגיע היא אם רוצים יום מלא שמרגיש כמו יציאה לסיפור אירופי אחר לגמרי.",
      "see": "העיר העתיקה, הטירה והחצרות, תצפית מעל הנהר, סמטאות אבן, בתי קפה וגלריות.",
      "fit": "מתאים ליום מלא, זוגות וצילום. פחות מתאים אם יש רק מעט ימים בפראג או אם לא רוצים נסיעה ארוכה.",
      "tip": "לצאת מוקדם. אם מתחילים מאוחר, הנסיעה גוזלת יותר מדי מהחוויה."
    },
    "en": {
      "why": "Český Krumlov is a long but beautiful day trip: an old town wrapped around the Vltava River, a major castle and almost fairytale scenery.",
      "see": "Old town, castle courtyards, river viewpoints, stone lanes, cafés and galleries.",
      "fit": "Best for a full day, couples and photography. Not ideal if your Prague stay is short.",
      "tip": "Leave early; a late start makes the travel time feel too heavy."
    }
  },
  "Dresden": {
    "he": {
      "why": "דרזדן נותנת טיול יום חוצה גבול עם מוזיאונים, כיכרות בארוק ותחושה גרמנית שונה לגמרי מפראג. הסיבה להגיע היא לקבל עיר תרבות גדולה נוספת בלי טיסה ובלי להחליף מלון.",
      "see": "Frauenkirche, Zwinger, גדת האלבה, העיר העתיקה, מוזיאונים לפי עניין.",
      "fit": "מתאים לחובבי אמנות, אדריכלות ומוזיאונים. פחות מתאים אם אתם רוצים טבע או כפרים.",
      "tip": "לבדוק מראש איזה מוזיאון באמת מעניין אתכם — אחרת היום יכול להפוך לשוטטות כללית מדי."
    },
    "en": {
      "why": "Dresden is a cross-border cultural day trip with baroque squares, museums and a very different German atmosphere from Prague.",
      "see": "Frauenkirche, Zwinger, Elbe riverfront, Old Town, museums.",
      "fit": "Good for art, architecture and museums. Less for nature.",
      "tip": "Choose one museum in advance; otherwise the day can become too unfocused."
    }
  },
  "Terezín": {
    "he": {
      "why": "טרזין הוא ביקור היסטורי כבד סביב גטו ומבצר ששימשו את הנאצים בתקופת מלחמת העולם השנייה. הסיבה להגיע היא להבין את ההיסטוריה היהודית והאירופית באזור דרך מקום אמיתי, לא רק דרך מוזיאון בעיר.",
      "see": "המבצר הקטן, מוזיאון הגטו, בתי קברות ואתרי זיכרון, רחובות העיירה.",
      "fit": "מתאים למטיילים שמתעניינים בהיסטוריה, שואה וזיכרון. לא מתאים כיום קליל.",
      "tip": "לבוא מוכנים נפשית. זה לא יעד “כיף”, אבל הוא יכול להיות משמעותי מאוד."
    },
    "en": {
      "why": "Terezín is a heavy historical visit connected to the WWII ghetto and fortress system used by the Nazis. Go to understand Jewish and European history through a real place, not only a city museum.",
      "see": "Small Fortress, Ghetto Museum, cemeteries and memorial sites, town streets.",
      "fit": "Good for history and remembrance. Not a fun light day.",
      "tip": "Come mentally prepared; it is meaningful, not entertaining."
    }
  },
  "Konopiště Castle": {
    "he": {
      "why": "קונופישטה הוא ארמון/טירה עם קשר לפרנץ פרדיננד, האיש שרציחתו הציתה את מלחמת העולם הראשונה. הסיבה להגיע היא שילוב של טירה, פארק וסיפור היסטורי גדול שמתחבא במקום יחסית שקט.",
      "see": "הטירה מבחוץ, פארק וגנים, אוספים היסטוריים בסיורים, אגם/שבילים סביב.",
      "fit": "מתאים לחובבי היסטוריה, טירות וטיול רגוע. טוב יותר ברכב או בתכנון תחבורה מראש.",
      "tip": "אם אתם מתעניינים במלחמת העולם הראשונה — זה מקבל משמעות אחרת לגמרי."
    },
    "en": {
      "why": "Konopiště is tied to Archduke Franz Ferdinand, whose assassination triggered WWI. Go for a quieter castle-and-park trip with a big historical shadow.",
      "see": "Castle exterior, park and gardens, historical collections on tours, lakeside paths.",
      "fit": "Good for history lovers, castles and a calm day. Easier by car or planned transit.",
      "tip": "If WWI interests you, this place becomes much more meaningful."
    }
  },
  "Pilsen": {
    "he": {
      "why": "פילזן היא עיר הבירה של הבירה הצ׳כית — הבית של Pilsner Urquell. הסיבה להגיע היא לא רק לשתות בירה, אלא לראות עיר צ׳כית אמיתית יותר, עם כיכר גדולה, מבשלת וסיפור תרבותי חזק.",
      "see": "מבשלת Pilsner Urquell, הכיכר המרכזית, קתדרלת St. Bartholomew, בתי בירה מקומיים.",
      "fit": "מתאים לחובבי בירה, אוכל וערים פחות תיירותיות. פחות מתאים למי שלא מתעניין בבירה בכלל.",
      "tip": "אם עושים סיור במבשלה — להזמין מראש ולבדוק שפה/שעות."
    },
    "en": {
      "why": "Pilsen is the home of Pilsner Urquell and Czech beer culture. Go not just to drink, but to see a real Czech city with a major brewing story.",
      "see": "Pilsner Urquell brewery, main square, St. Bartholomew Cathedral, local beer halls.",
      "fit": "Good for beer lovers, food and less touristy city energy.",
      "tip": "Book brewery tours ahead and check language/times."
    }
  },
  "Bohemian Paradise": {
    "he": {
      "why": "גן העדן הבוהמי מתאים כשאתם רוצים טבע אמיתי: סלעי אבן חול, שבילים, יערות ותצפיות. הסיבה להגיע היא להחליף את רחובות פראג בנוף הליכה צ׳כי קלאסי.",
      "see": "סלעי אבן חול, שבילי יער, תצפיות, טירות/חורבות באזור לפי המסלול.",
      "fit": "מתאים לטבע, הליכה וצילום. פחות מתאים בלי רכב או בלי תכנון מסלול ברור.",
      "tip": "לבחור מסלול אחד מראש. האזור רחב מדי ל“נראה כשנגיע”."
    },
    "en": {
      "why": "Bohemian Paradise is for real nature: sandstone rocks, forests, trails and viewpoints. Go to swap Prague streets for classic Czech hiking scenery.",
      "see": "Sandstone rock formations, forest paths, viewpoints, castles/ruins depending on route.",
      "fit": "Best for nature, hiking and photography. Less ideal without a car or clear plan.",
      "tip": "Choose one route in advance; the region is too broad to improvise."
    }
  },
  "Křivoklát Castle": {
    "he": {
      "why": "טירה עתיקה בלב יערות מערב בוהמיה, עם תחושה מחוספסת יותר מקרלשטיין ופחות תיירותית. להגיע בשביל טירה, יער ואווירת ימי־ביניים שקטה יותר.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "טירה עתיקה בלב יערות מערב בוהמיה, עם תחושה מחוספסת יותר מקרלשטיין ופחות תיירותית. להגיע בשביל טירה, יער ואווירת ימי־ביניים שקטה יותר.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Mělník": {
    "he": {
      "why": "עיר קטנה מעל מפגש נהרות האלבה והוולטאבה, עם יין, תצפית וטירה. להגיע אם רוצים טיול קצר, רגוע וקל יחסית מפראג.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "עיר קטנה מעל מפגש נהרות האלבה והוולטאבה, עם יין, תצפית וטירה. להגיע אם רוצים טיול קצר, רגוע וקל יחסית מפראג.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Poděbrady": {
    "he": {
      "why": "עיירת ספא שטוחה ונעימה עם טיילת, פארק ומים מינרליים. מתאימה ליום רגוע מאוד, בלי עומס ובלי יעד דרמטי מדי.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "עיירת ספא שטוחה ונעימה עם טיילת, פארק ומים מינרליים. מתאימה ליום רגוע מאוד, בלי עומס ובלי יעד דרמטי מדי.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Tábor": {
    "he": {
      "why": "עיר היסטורית עם עבר הוסיטי, סמטאות ותחושה צ׳כית מקומית. טובה למי שרוצה עיר פחות צפויה מקוטנה הורה.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "עיר היסטורית עם עבר הוסיטי, סמטאות ותחושה צ׳כית מקומית. טובה למי שרוצה עיר פחות צפויה מקוטנה הורה.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "České Budějovice": {
    "he": {
      "why": "עיר דרומית עם כיכר ענקית ובירת Budvar. טובה אם משלבים בירה, עיר עתיקה ואולי המשך לכיוון צ׳סקי קרומלוב.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "עיר דרומית עם כיכר ענקית ובירת Budvar. טובה אם משלבים בירה, עיר עתיקה ואולי המשך לכיוון צ׳סקי קרומלוב.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Liberec": {
    "he": {
      "why": "עיר צפונית ליד הר Ještěd, עם שילוב של עיר, הרים ותצפית. מתאימה יותר כשיש רצון לברוח לאזור הררי.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "עיר צפונית ליד הר Ještěd, עם שילוב של עיר, הרים ותצפית. מתאימה יותר כשיש רצון לברוח לאזור הררי.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Český ráj rocks": {
    "he": {
      "why": "אזור סלעים ושבילים בתוך גן העדן הבוהמי. זה יעד טבע וצילום, לא עיר. ברכב הוא הרבה יותר הגיוני.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "אזור סלעים ושבילים בתוך גן העדן הבוהמי. זה יעד טבע וצילום, לא עיר. ברכב הוא הרבה יותר הגיוני.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Sázava Monastery": {
    "he": {
      "why": "מנזר היסטורי ליד נהר סאזאבה, מתאים לטיול שקט עם היסטוריה ונוף נהר. פחות מוכר ולכן מרגיש פחות תיירותי.",
      "see": [
        "נקודת עניין מרכזית באזור",
        "הליכה קצרה או בינונית",
        "צילום/אוכל לפי אופי המקום"
      ],
      "fit": "מתאים למי שרוצה לצאת מפראג אבל לא בהכרח ללכת לאתר הכי צפוי.",
      "tip": "לבדוק זמני תחבורה וחזרה לפני שיוצאים; חלק מהיעדים נוחים בהרבה ברכב."
    },
    "en": {
      "why": "מנזר היסטורי ליד נהר סאזאבה, מתאים לטיול שקט עם היסטוריה ונוף נהר. פחות מוכר ולכן מרגיש פחות תיירותי.",
      "see": [
        "Main local point of interest",
        "Short or medium walk",
        "Photo/food depending on the place"
      ],
      "fit": "Good for travelers who want to leave Prague without choosing only the most obvious trips.",
      "tip": "Check transport and return times; some stops are much easier by car."
    }
  },
  "Lokál Dlouhááá": {
    "he": {
      "why": "מסעדת בירה צ׳כית קלאסית עם אוכל מקומי פשוט וטוב: גולאש, שניצל, נקניקיות ובירה טרייה. מומלץ כי זה נותן חוויית פאב צ׳כי אמיתית בלי להתחכם.",
      "see": [
        "גולאש/שניצל/נקניקיות",
        "בירה פילזנר",
        "אווירת אולם בירה רועש ושמח."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "מסעדת בירה צ׳כית קלאסית עם אוכל מקומי פשוט וטוב: גולאש, שניצל, נקניקיות ובירה טרייה. מומלץ כי זה נותן חוויית פאב צ׳כי אמיתית בלי להתחכם.",
      "see": [
        "גולאש/שניצל/נקניקיות",
        "בירה פילזנר",
        "אווירת אולם בירה רועש ושמח."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Naše Maso": {
    "he": {
      "why": "ביסטרו קצבים קטן שמתמקד בבשר איכותי, כריכים וסטייקים מהירים. מומלץ אם רוצים ארוחה קצרה אבל חזקה במקום מסעדה כבדה.",
      "see": [
        "המבורגר/כריך בשר",
        "נקניקיות",
        "דלפק קצבים",
        "עצירה מהירה במרכז."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "ביסטרו קצבים קטן שמתמקד בבשר איכותי, כריכים וסטייקים מהירים. מומלץ אם רוצים ארוחה קצרה אבל חזקה במקום מסעדה כבדה.",
      "see": [
        "המבורגר/כריך בשר",
        "נקניקיות",
        "דלפק קצבים",
        "עצירה מהירה במרכז."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Kantýna": {
    "he": {
      "why": "מקדש בשר מודרני בתוך חלל גדול ותוסס. בוחרים נתחים בדלפק ומקבלים חוויה של מסעדה וקצבייה יחד.",
      "see": [
        "נתחי בקר",
        "טרטר",
        "נקניקיות",
        "אווירה תעשייתית ותוססת."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "מקדש בשר מודרני בתוך חלל גדול ותוסס. בוחרים נתחים בדלפק ומקבלים חוויה של מסעדה וקצבייה יחד.",
      "see": [
        "נתחי בקר",
        "טרטר",
        "נקניקיות",
        "אווירה תעשייתית ותוססת."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Havelská Koruna": {
    "he": {
      "why": "אופציה זולה ומהירה לאוכל צ׳כי בסגנון קפיטריה. לא רומנטי, אבל מעולה כשצריך לאכול טוב בלי לשלם מחיר תיירותי.",
      "see": [
        "מנות צ׳כיות יומיומיות",
        "שירות מהיר",
        "מחיר נמוך יחסית."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "אופציה זולה ומהירה לאוכל צ׳כי בסגנון קפיטריה. לא רומנטי, אבל מעולה כשצריך לאכול טוב בלי לשלם מחיר תיירותי.",
      "see": [
        "מנות צ׳כיות יומיומיות",
        "שירות מהיר",
        "מחיר נמוך יחסית."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Sisters Bistro": {
    "he": {
      "why": "מקום קטן לכריכים פתוחים צ׳כיים – chlebíčky. טוב לנשנוש מקומי קליל במקום ארוחה כבדה.",
      "see": [
        "כריכים פתוחים צבעוניים",
        "ארוחת צהריים קצרה",
        "אוכל מקומי קל."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "מקום קטן לכריכים פתוחים צ׳כיים – chlebíčky. טוב לנשנוש מקומי קליל במקום ארוחה כבדה.",
      "see": [
        "כריכים פתוחים צבעוניים",
        "ארוחת צהריים קצרה",
        "אוכל מקומי קל."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Maitrea": {
    "he": {
      "why": "מסעדה צמחונית ליד העיר העתיקה עם תפריט אסייתי־אירופי, עיצוב רגוע ואוכל שמצליח לדבר גם ללא־צמחונים. מומלץ כשצריך הפסקה מאוכל כבד ובשרי.",
      "see": [
        "קארי",
        "בורגר צמחוני",
        "קערות",
        "אווירת זן רגועה."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "מסעדה צמחונית ליד העיר העתיקה עם תפריט אסייתי־אירופי, עיצוב רגוע ואוכל שמצליח לדבר גם ללא־צמחונים. מומלץ כשצריך הפסקה מאוכל כבד ובשרי.",
      "see": [
        "קארי",
        "בורגר צמחוני",
        "קערות",
        "אווירת זן רגועה."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Café Louvre": {
    "he": {
      "why": "בית קפה היסטורי בסגנון אירופי קלאסי, מתאים לקפה, עוגה או ארוחה קלה עם תחושת פראג של פעם. זה לא “עוד קפה” אלא מוסד ותיק.",
      "see": [
        "קפה ועוגות",
        "ארוחות קלות",
        "חלל היסטורי גדול."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "בית קפה היסטורי בסגנון אירופי קלאסי, מתאים לקפה, עוגה או ארוחה קלה עם תחושת פראג של פעם. זה לא “עוד קפה” אלא מוסד ותיק.",
      "see": [
        "קפה ועוגות",
        "ארוחות קלות",
        "חלל היסטורי גדול."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Eska Karlín": {
    "he": {
      "why": "מסעדה־מאפייה מודרנית בקרלין שמראה צד צעיר ועכשווי של פראג. מומלץ אם רוצים לצאת מעט מהמסלול התיירותי ולאכול משהו איכותי יותר.",
      "see": [
        "מאפים",
        "לחם",
        "מנות צ׳כיות מודרניות",
        "שכונת Karlín."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "מסעדה־מאפייה מודרנית בקרלין שמראה צד צעיר ועכשווי של פראג. מומלץ אם רוצים לצאת מעט מהמסלול התיירותי ולאכול משהו איכותי יותר.",
      "see": [
        "מאפים",
        "לחם",
        "מנות צ׳כיות מודרניות",
        "שכונת Karlín."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Manifesto Market": {
    "he": {
      "why": "שוק אוכל מודרני עם כמה דוכנים, מתאים כשכל אחד רוצה משהו אחר. טוב לקבוצות או ערב קליל בלי החלטה אחת מחייבת.",
      "see": [
        "דוכני אוכל מגוונים",
        "שתייה",
        "אווירה צעירה."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "שוק אוכל מודרני עם כמה דוכנים, מתאים כשכל אחד רוצה משהו אחר. טוב לקבוצות או ערב קליל בלי החלטה אחת מחייבת.",
      "see": [
        "דוכני אוכל מגוונים",
        "שתייה",
        "אווירה צעירה."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Banh Mi Makers": {
    "he": {
      "why": "אופציה וייטנאמית זולה ומהירה. פראג חזקה באוכל וייטנאמי, וזה טוב כשצריך משהו קל, חד וטעים באמצע יום.",
      "see": [
        "כריכי באן מי",
        "אוכל מהיר",
        "טעמים אסייתיים."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    },
    "en": {
      "why": "אופציה וייטנאמית זולה ומהירה. פראג חזקה באוכל וייטנאמי, וזה טוב כשצריך משהו קל, חד וטעים באמצע יום.",
      "see": [
        "כריכי באן מי",
        "אוכל מהיר",
        "טעמים אסייתיים."
      ],
      "fit": "מתאים כשאתה רוצה לדעת מראש איזה אוכל תקבל, בלי להמר על מסעדת תיירים אקראית.",
      "tip": "לבדוק שעות ועומס בזמן אמת; חלק מהמקומות קטנים או עמוסים בשעות שיא."
    }
  },
  "Hemingway Bar": {
    "he": {
      "why": "בר קוקטיילים אינטימי ומוקפד בהשראת ארנסט המינגוויי. מומלץ לערב איכותי של קוקטיילים, לא למסיבה רועשת.",
      "see": [
        "קוקטיילים מושקעים",
        "אווירה אינטימית",
        "אבסינת/רום/וויסקי לפי תפריט"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "בר קוקטיילים אינטימי ומוקפד בהשראת ארנסט המינגוויי. מומלץ לערב איכותי של קוקטיילים, לא למסיבה רועשת.",
      "see": [
        "קוקטיילים מושקעים",
        "אווירה אינטימית",
        "אבסינת/רום/וויסקי לפי תפריט"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Letná Beer Garden": {
    "he": {
      "why": "גן בירה פתוח עם אחת התצפיות היפות על הגשרים של פראג. מומלץ לשקיעה, בירה ואווירה לא מתאמצת.",
      "see": [
        "נוף לנהר ולגשרים",
        "שולחנות בחוץ",
        "אווירה מקומית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "גן בירה פתוח עם אחת התצפיות היפות על הגשרים של פראג. מומלץ לשקיעה, בירה ואווירה לא מתאמצת.",
      "see": [
        "נוף לנהר ולגשרים",
        "שולחנות בחוץ",
        "אווירה מקומית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Náplavka Riverside": {
    "he": {
      "why": "טיילת נהר שהופכת בערב לאזור הליכה, שתייה ואוכל קל. מומלץ כשלא רוצים להיכנס למועדון אבל כן להרגיש את העיר.",
      "see": [
        "נהר הוולטאבה",
        "ברים/דוכנים לפי עונה",
        "הליכת ערב"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "טיילת נהר שהופכת בערב לאזור הליכה, שתייה ואוכל קל. מומלץ כשלא רוצים להיכנס למועדון אבל כן להרגיש את העיר.",
      "see": [
        "נהר הוולטאבה",
        "ברים/דוכנים לפי עונה",
        "הליכת ערב"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Jazz Dock": {
    "he": {
      "why": "מועדון ג׳אז מודרני על הנהר, מתאים לערב מוזיקה אמיתי ולא סתם בר. מומלץ להזמין הופעה ספציפית.",
      "see": [
        "במת ג׳אז",
        "נוף לנהר",
        "אווירה רגועה ומוזיקלית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "מועדון ג׳אז מודרני על הנהר, מתאים לערב מוזיקה אמיתי ולא סתם בר. מומלץ להזמין הופעה ספציפית.",
      "see": [
        "במת ג׳אז",
        "נוף לנהר",
        "אווירה רגועה ומוזיקלית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Cross Club": {
    "he": {
      "why": "מועדון אלטרנטיבי עם עיצוב תעשייתי־מכני משוגע, מוזיקה אלקטרונית ואווירה צעירה. מומלץ למי שרוצה פראג אחרת.",
      "see": [
        "עיצוב מתכתי ייחודי",
        "מוזיקה אלקטרונית/אלטרנטיבית",
        "קהל צעיר"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "מועדון אלטרנטיבי עם עיצוב תעשייתי־מכני משוגע, מוזיקה אלקטרונית ואווירה צעירה. מומלץ למי שרוצה פראג אחרת.",
      "see": [
        "עיצוב מתכתי ייחודי",
        "מוזיקה אלקטרונית/אלטרנטיבית",
        "קהל צעיר"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Lucerna Music Bar": {
    "he": {
      "why": "מועדון הופעות וריקודים מוכר, במיוחד לערבי להיטים/80s/90s לפי התוכנית. מתאים למי שרוצה לילה יותר פעיל.",
      "see": [
        "רחבת ריקודים",
        "הופעות/מסיבות",
        "אווירה נוסטלגית לפי ערב"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "מועדון הופעות וריקודים מוכר, במיוחד לערבי להיטים/80s/90s לפי התוכנית. מתאים למי שרוצה לילה יותר פעיל.",
      "see": [
        "רחבת ריקודים",
        "הופעות/מסיבות",
        "אווירה נוסטלגית לפי ערב"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Roxy Prague": {
    "he": {
      "why": "מועדון ותיק ומרכזי לסצנת מוזיקה אלקטרונית והופעות. מתאים למי שמחפש לילה חזק יותר מבר קוקטיילים.",
      "see": [
        "DJ/הופעות",
        "חלל מועדון",
        "לילה אנרגטי"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "מועדון ותיק ומרכזי לסצנת מוזיקה אלקטרונית והופעות. מתאים למי שמחפש לילה חזק יותר מבר קוקטיילים.",
      "see": [
        "DJ/הופעות",
        "חלל מועדון",
        "לילה אנרגטי"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Black Angel’s Bar": {
    "he": {
      "why": "בר קוקטיילים אלגנטי במרתף, עם תחושה דרמטית וקלאסית. מתאים לדייט או ערב שקט יותר.",
      "see": [
        "מרתף מעוצב",
        "קוקטיילים",
        "אווירה אינטימית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "בר קוקטיילים אלגנטי במרתף, עם תחושה דרמטית וקלאסית. מתאים לדייט או ערב שקט יותר.",
      "see": [
        "מרתף מעוצב",
        "קוקטיילים",
        "אווירה אינטימית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Karlovy Lázně": {
    "he": {
      "why": "מועדון גדול ומאוד תיירותי ליד גשר קארל, עם כמה קומות וסגנונות מוזיקה. לא הכי מקומי, אבל מתאים למי שרוצה מסיבה קלה להבנה.",
      "see": [
        "כמה קומות",
        "מוזיקה מגוונת",
        "קהל תיירותי"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "מועדון גדול ומאוד תיירותי ליד גשר קארל, עם כמה קומות וסגנונות מוזיקה. לא הכי מקומי, אבל מתאים למי שרוצה מסיבה קלה להבנה.",
      "see": [
        "כמה קומות",
        "מוזיקה מגוונת",
        "קהל תיירותי"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "BeerGeek Bar": {
    "he": {
      "why": "בר בירה קראפט למי שרוצה לטעום בירות שונות ולא רק פילזנר רגיל. יותר בירה איכותית מאשר מועדון.",
      "see": [
        "ברזי קראפט",
        "טעימות בירה",
        "אווירה לא פורמלית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    },
    "en": {
      "why": "בר בירה קראפט למי שרוצה לטעום בירות שונות ולא רק פילזנר רגיל. יותר בירה איכותית מאשר מועדון.",
      "see": [
        "ברזי קראפט",
        "טעימות בירה",
        "אווירה לא פורמלית"
      ],
      "fit": "מתאים לפי מצב רוח: קוקטיילים, בירה, מוזיקה חיה או מסיבה. לא כל מקום לילה נותן אותה חוויה.",
      "tip": "לבדוק תוכנית/הזמנה/שעות לפני יציאה, במיוחד בסופי שבוע."
    }
  },
  "Vltava River Cruise": {
    "he": {
      "why": "שייט בוולטאבה נותן את פראג מזווית שלא מקבלים בהליכה: הגשרים, הטירה והעיר העתיקה נפתחים מהמים. מומלץ במיוחד ביום ראשון בעיר או לקראת שקיעה.",
      "see": [
        "גשר קארל מהמים",
        "טירת פראג מעל הנהר",
        "קמפה והגדה העתיקה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    },
    "en": {
      "why": "שייט בוולטאבה נותן את פראג מזווית שלא מקבלים בהליכה: הגשרים, הטירה והעיר העתיקה נפתחים מהמים. מומלץ במיוחד ביום ראשון בעיר או לקראת שקיעה.",
      "see": [
        "גשר קארל מהמים",
        "טירת פראג מעל הנהר",
        "קמפה והגדה העתיקה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    }
  },
  "Petřín Hill Viewpoint": {
    "he": {
      "why": "פטרין היא אחת מנקודות התצפית הרומנטיות של פראג: גבעה ירוקה מעל העיר עם מבט לטירה, לגגות ולנהר. הסיבה לעלות היא אווירה, לא רק צילום.",
      "see": [
        "שבילי גן",
        "תצפית על העיר",
        "מגדל פטרין מבחוץ/מבפנים אם פתוח"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    },
    "en": {
      "why": "פטרין היא אחת מנקודות התצפית הרומנטיות של פראג: גבעה ירוקה מעל העיר עם מבט לטירה, לגגות ולנהר. הסיבה לעלות היא אווירה, לא רק צילום.",
      "see": [
        "שבילי גן",
        "תצפית על העיר",
        "מגדל פטרין מבחוץ/מבפנים אם פתוח"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    }
  },
  "Black Light Theatre": {
    "he": {
      "why": "תיאטרון האור השחור הוא חוויה פראגית קלאסית: מופע ויזואלי שמבוסס על חושך, צבע ותנועה. מתאים במיוחד לערב גשום או פעילות בלי הרבה הליכה.",
      "see": [
        "מופע ויזואלי",
        "אור אולטרה־סגול",
        "חוויה מקורה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    },
    "en": {
      "why": "תיאטרון האור השחור הוא חוויה פראגית קלאסית: מופע ויזואלי שמבוסס על חושך, צבע ותנועה. מתאים במיוחד לערב גשום או פעילות בלי הרבה הליכה.",
      "see": [
        "מופע ויזואלי",
        "אור אולטרה־סגול",
        "חוויה מקורה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    }
  },
  "Beer Spa": {
    "he": {
      "why": "ספא בירה הוא חוויה קלילה ומשעשעת: אמבטיות עם מרכיבי בירה ובירה לשתייה תוך כדי. זה לא אתר חובה תרבותי, אלא רגע חופשה מצחיק וזוגי.",
      "see": [
        "אמבט ספא",
        "בירה מקומית",
        "חוויה זוגית/חברית"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    },
    "en": {
      "why": "ספא בירה הוא חוויה קלילה ומשעשעת: אמבטיות עם מרכיבי בירה ובירה לשתייה תוך כדי. זה לא אתר חובה תרבותי, אלא רגע חופשה מצחיק וזוגי.",
      "see": [
        "אמבט ספא",
        "בירה מקומית",
        "חוויה זוגית/חברית"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    }
  },
  "Tram 22 Scenic Ride": {
    "he": {
      "why": "קו חשמלית 22 הוא דרך זולה לראות חלקים יפים של פראג בלי סיור מודרך. הוא עובר באזורים שמובילים לטירה ומראה את העיר דרך חלון מקומי.",
      "see": [
        "נסיעה דרך אזורים היסטוריים",
        "גישה לטירה",
        "חוויה מקומית וזולה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    },
    "en": {
      "why": "קו חשמלית 22 הוא דרך זולה לראות חלקים יפים של פראג בלי סיור מודרך. הוא עובר באזורים שמובילים לטירה ומראה את העיר דרך חלון מקומי.",
      "see": [
        "נסיעה דרך אזורים היסטוריים",
        "גישה לטירה",
        "חוויה מקומית וזולה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    }
  },
  "Old Town Underground": {
    "he": {
      "why": "העיר התחתית של פראג חושפת שכבות עתיקות מתחת לרחובות של היום. מומלץ למי שרוצה להבין שהעיר לא רק יפה מבחוץ אלא בנויה על היסטוריה עמוקה.",
      "see": [
        "מרתפים וחללים עתיקים",
        "סיפורי ימי הביניים",
        "סיור מודרך מקורה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    },
    "en": {
      "why": "העיר התחתית של פראג חושפת שכבות עתיקות מתחת לרחובות של היום. מומלץ למי שרוצה להבין שהעיר לא רק יפה מבחוץ אלא בנויה על היסטוריה עמוקה.",
      "see": [
        "מרתפים וחללים עתיקים",
        "סיפורי ימי הביניים",
        "סיור מודרך מקורה"
      ],
      "fit": "מתאים כשאתה רוצה להוסיף לטיול רגע מיוחד ולא רק עוד רחוב או כיכר.",
      "tip": "לבדוק זמינות וכרטיסים מראש; חוויות טובות נופלות לפעמים על שעות לא מתאימות."
    }
  },
  "Charles Bridge at sunrise": {
    "he": {
      "why": "גשר קארל בזריחה הוא פראג אחרת: בלי דוחק, עם אור רך על הפסלים ותחושת עיר שמתעוררת. זו אחת הסיבות לקום מוקדם באמת.",
      "see": [
        "פסלי האבן",
        "נהר הוולטאבה",
        "מבט לטירת פראג",
        "צילום כמעט בלי קהל"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    },
    "en": {
      "why": "גשר קארל בזריחה הוא פראג אחרת: בלי דוחק, עם אור רך על הפסלים ותחושת עיר שמתעוררת. זו אחת הסיבות לקום מוקדם באמת.",
      "see": [
        "פסלי האבן",
        "נהר הוולטאבה",
        "מבט לטירת פראג",
        "צילום כמעט בלי קהל"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    }
  },
  "Old Town Square at night": {
    "he": {
      "why": "כיכר העיר העתיקה בלילה מרגישה דרמטית יותר: התאורה, כנסיית טין והשעון האסטרונומי יוצרים תפאורה חזקה בלי עומס היום.",
      "see": [
        "השעון האסטרונומי",
        "כנסיית טין",
        "סמטאות סביב הכיכר"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    },
    "en": {
      "why": "כיכר העיר העתיקה בלילה מרגישה דרמטית יותר: התאורה, כנסיית טין והשעון האסטרונומי יוצרים תפאורה חזקה בלי עומס היום.",
      "see": [
        "השעון האסטרונומי",
        "כנסיית טין",
        "סמטאות סביב הכיכר"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    }
  },
  "Prague Castle panorama": {
    "he": {
      "why": "פנורמת טירת פראג נותנת את התמונה הקלאסית של העיר: גגות אדומים, נהר, גשרים וטירה אחת שמסבירה למה פראג כל כך מצולמת.",
      "see": [
        "קו הרקיע של הטירה",
        "גגות העיר",
        "נקודות תצפית"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    },
    "en": {
      "why": "פנורמת טירת פראג נותנת את התמונה הקלאסית של העיר: גגות אדומים, נהר, גשרים וטירה אחת שמסבירה למה פראג כל כך מצולמת.",
      "see": [
        "קו הרקיע של הטירה",
        "גגות העיר",
        "נקודות תצפית"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    }
  },
  "Astronomical Clock area": {
    "he": {
      "why": "השעון האסטרונומי הוא מוקד תיירותי, אבל עדיין חשוב לראות אותו כחלק מהעיר העתיקה. הערך הוא בפרטים, לא רק במופע השעתי.",
      "see": [
        "חזית השעון",
        "כיכר העיר העתיקה",
        "הקהל סביב המופע"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    },
    "en": {
      "why": "השעון האסטרונומי הוא מוקד תיירותי, אבל עדיין חשוב לראות אותו כחלק מהעיר העתיקה. הערך הוא בפרטים, לא רק במופע השעתי.",
      "see": [
        "חזית השעון",
        "כיכר העיר העתיקה",
        "הקהל סביב המופע"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    }
  },
  "Vyšehrad Fortress": {
    "he": {
      "why": "וישהראד נותנת פראג שקטה יותר: מבצר, פארק, תצפיות ותחושה מקומית רחוקה מהעומס של העיר העתיקה.",
      "see": [
        "חומות ותצפיות",
        "בית הקברות ההיסטורי",
        "פארק שקט"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    },
    "en": {
      "why": "וישהראד נותנת פראג שקטה יותר: מבצר, פארק, תצפיות ותחושה מקומית רחוקה מהעומס של העיר העתיקה.",
      "see": [
        "חומות ותצפיות",
        "בית הקברות ההיסטורי",
        "פארק שקט"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    }
  },
  "Petřín sunset": {
    "he": {
      "why": "שקיעה בפטרין היא רגע רומנטי: העיר יורדת לאור רך, והגבעה נותנת מרחק מההמולה של המרכז.",
      "see": [
        "תצפית לגגות",
        "שבילי גבעה",
        "אור שקיעה"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    },
    "en": {
      "why": "שקיעה בפטרין היא רגע רומנטי: העיר יורדת לאור רך, והגבעה נותנת מרחק מההמולה של המרכז.",
      "see": [
        "תצפית לגגות",
        "שבילי גבעה",
        "אור שקיעה"
      ],
      "fit": "מתאים במיוחד לביקור ראשון בפראג ולמי שרוצה לצלם ולהרגיש את העיר.",
      "tip": "לתזמן לשעות פחות עמוסות — מוקדם בבוקר או ערב."
    }
  },
  "Wachau Valley": {
    "he": {
      "why": "עמק ואכאו הוא אחד מטיולי היום היפים מווינה: דנובה, כרמים, כפרים ומנזרים. הסיבה להגיע היא נוף אוסטרי פתוח שמאזן את העיר הקיסרית.",
      "see": [
        "נהר הדנובה",
        "כרמים וכפרים",
        "Dürnstein/Melk לפי המסלול"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "עמק ואכאו הוא אחד מטיולי היום היפים מווינה: דנובה, כרמים, כפרים ומנזרים. הסיבה להגיע היא נוף אוסטרי פתוח שמאזן את העיר הקיסרית.",
      "see": [
        "נהר הדנובה",
        "כרמים וכפרים",
        "Dürnstein/Melk לפי המסלול"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Melk Abbey": {
    "he": {
      "why": "מנזר מלק הוא מבנה בארוק עצום מעל הדנובה. להגיע בשביל אדריכלות, תצפית וספרייה/כנסייה שמרגישות כמו כוח תרבותי אוסטרי.",
      "see": [
        "חזית המנזר",
        "כנסייה בארוקית",
        "תצפית לדנובה"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "מנזר מלק הוא מבנה בארוק עצום מעל הדנובה. להגיע בשביל אדריכלות, תצפית וספרייה/כנסייה שמרגישות כמו כוח תרבותי אוסטרי.",
      "see": [
        "חזית המנזר",
        "כנסייה בארוקית",
        "תצפית לדנובה"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Bratislava": {
    "he": {
      "why": "ברטיסלבה היא בירת סלובקיה במרחק קצר מווינה. הסיבה להגיע היא לסמן עוד מדינה ועיר עתיקה קומפקטית ביום קל יחסית.",
      "see": [
        "העיר העתיקה",
        "הטירה מעל העיר",
        "טיילת הדנובה"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "ברטיסלבה היא בירת סלובקיה במרחק קצר מווינה. הסיבה להגיע היא לסמן עוד מדינה ועיר עתיקה קומפקטית ביום קל יחסית.",
      "see": [
        "העיר העתיקה",
        "הטירה מעל העיר",
        "טיילת הדנובה"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Schönbrunn Palace": {
    "he": {
      "why": "שנברון הוא הארמון הקיסרי הגדול של וינה. הסיבה להגיע היא להבין את וינה ההבסבורגית דרך גנים, חזית מפוארת ותצפית Gloriette.",
      "see": [
        "גני הארמון",
        "Gloriette",
        "חדרי הארמון אם נכנסים"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "שנברון הוא הארמון הקיסרי הגדול של וינה. הסיבה להגיע היא להבין את וינה ההבסבורגית דרך גנים, חזית מפוארת ותצפית Gloriette.",
      "see": [
        "גני הארמון",
        "Gloriette",
        "חדרי הארמון אם נכנסים"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Prater Giant Ferris Wheel": {
    "he": {
      "why": "הגלגל הענק בפראטר הוא סמל וינאי נוסטלגי. מגיעים בשביל תצפית איטית, צילום וחוויה קלילה שלא דורשת מוזיאון.",
      "see": [
        "גלגל הענק",
        "פארק פראטר",
        "תצפית על העיר"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "הגלגל הענק בפראטר הוא סמל וינאי נוסטלגי. מגיעים בשביל תצפית איטית, צילום וחוויה קלילה שלא דורשת מוזיאון.",
      "see": [
        "גלגל הענק",
        "פארק פראטר",
        "תצפית על העיר"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Colmar": {
    "he": {
      "why": "קולמר היא אחת העיירות הציוריות באלזס: תעלות, בתים צבעוניים ואווירה רומנטית. הסיבה להגיע משטרסבורג היא לראות אלזס מרוכזת ויפה במיוחד.",
      "see": [
        "La Petite Venise",
        "בתים חצי־עץ",
        "רחובות צבעוניים"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "קולמר היא אחת העיירות הציוריות באלזס: תעלות, בתים צבעוניים ואווירה רומנטית. הסיבה להגיע משטרסבורג היא לראות אלזס מרוכזת ויפה במיוחד.",
      "see": [
        "La Petite Venise",
        "בתים חצי־עץ",
        "רחובות צבעוניים"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Riquewihr": {
    "he": {
      "why": "ריקוויר הוא כפר יין קטן שנראה כמו תפאורה: רחוב מרכזי צבעוני, חנויות יין ובתי חצי־עץ. להגיע בשביל אלזס הכפרית.",
      "see": [
        "רחוב הכפר",
        "חנויות יין",
        "נקודות צילום"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "ריקוויר הוא כפר יין קטן שנראה כמו תפאורה: רחוב מרכזי צבעוני, חנויות יין ובתי חצי־עץ. להגיע בשביל אלזס הכפרית.",
      "see": [
        "רחוב הכפר",
        "חנויות יין",
        "נקודות צילום"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Château du Haut-Kœnigsbourg": {
    "he": {
      "why": "טירת או־קניגסבורג יושבת גבוה מעל אלזס ונותנת תחושת מבצר הררי אמיתי. הסיבה להגיע היא שילוב של היסטוריה ונוף.",
      "see": [
        "חומות הטירה",
        "תצפיות לעמק",
        "חדרים/חצרות"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "טירת או־קניגסבורג יושבת גבוה מעל אלזס ונותנת תחושת מבצר הררי אמיתי. הסיבה להגיע היא שילוב של היסטוריה ונוף.",
      "see": [
        "חומות הטירה",
        "תצפיות לעמק",
        "חדרים/חצרות"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Strasbourg Cathedral": {
    "he": {
      "why": "קתדרלת שטרסבורג היא לב העיר: גותית, עצומה, מפורטת ובלתי אפשרית להתעלמות. חובה גם אם לא אוהבים כנסיות.",
      "see": [
        "חזית האבן",
        "השעון האסטרונומי",
        "כיכר הקתדרלה"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "קתדרלת שטרסבורג היא לב העיר: גותית, עצומה, מפורטת ובלתי אפשרית להתעלמות. חובה גם אם לא אוהבים כנסיות.",
      "see": [
        "חזית האבן",
        "השעון האסטרונומי",
        "כיכר הקתדרלה"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  },
  "Petite France": {
    "he": {
      "why": "פטיט פראנס הוא האזור הכי ציורי בשטרסבורג: תעלות, גשרים ובתי חצי־עץ. זה המקום שמרגיש הכי “אלזס” בתוך העיר.",
      "see": [
        "תעלות וגשרים",
        "בתי חצי־עץ",
        "הליכה רומנטית"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    },
    "en": {
      "why": "פטיט פראנס הוא האזור הכי ציורי בשטרסבורג: תעלות, גשרים ובתי חצי־עץ. זה המקום שמרגיש הכי “אלזס” בתוך העיר.",
      "see": [
        "תעלות וגשרים",
        "בתי חצי־עץ",
        "הליכה רומנטית"
      ],
      "fit": "מתאים למי שרוצה נקודת עוגן חזקה ולא רק עוד עצירה במפה.",
      "tip": "לשלב עם נקודות קרובות ולבדוק עומס/כרטיסים מראש."
    }
  }
};

const PRAGUE_REAL_GUIDE_CONTENT = {
  "Karlštejn Castle": {
    "he": {
      "why": "טירת קרלשטיין היא הטירה הקלאסית הכי נוחה ליום קצר מפראג: מבצר גותי מעל כפר קטן, מוקף יערות, שנבנה כדי לשמור אוצרות מלכותיים ושרידים קדושים. הסיבה להגיע היא לקבל “טירת אגדה” אמיתית בלי לשרוף יום שלם על נסיעות.",
      "see": [
        "העלייה מהכפר לטירה",
        "חומות וחצרות הטירה",
        "נוף ליערות בוהמיה",
        "בתי קפה קטנים בכפר"
      ],
      "fit": "מתאים לחצי יום, זוגות, צילום וטירה ראשונה מחוץ לפראג. פחות מתאים אם קשה לך עם עלייה רגלית.",
      "tip": "להתחיל מוקדם. אם רוצים לראות את הקפלה המפורסמת בפנים, צריך לבדוק כרטיסים מראש; גם מבחוץ המקום שווה ביקור."
    },
    "en": {
      "why": "Karlštejn is the easiest classic castle day trip from Prague: a Gothic fortress above a small village, built to protect royal treasures and holy relics. Go when you want a fairytale castle without losing the whole day to transport.",
      "see": [
        "The climb from the village",
        "Castle walls and courtyards",
        "Bohemian forest views",
        "Small cafés in the village"
      ],
      "fit": "Best for a half-day, couples, photos and a first castle outside Prague. Less ideal if uphill walking is hard.",
      "tip": "Start early. Interior highlights may require advance tickets; the exterior and village still make the trip worthwhile."
    }
  },
  "Kutná Hora": {
    "he": {
      "why": "קוטנה הורה היא יעד חזק כי הוא לא דומה לפראג: עיר כסף מימי הביניים עם קתדרלה גדולה וכנסיית עצמות יוצאת דופן. זו בחירה טובה כשאתה רוצה היסטוריה עם “וואו” ברור ולא עוד מרכז עיר יפה.",
      "see": [
        "Sedlec Ossuary – כנסיית העצמות",
        "קתדרלת St. Barbara",
        "מרכז העיר ההיסטורי",
        "רחובות שקטים יותר מפראג"
      ],
      "fit": "מתאים לחובבי היסטוריה, אדריכלות ומקומות חריגים. פחות מתאים למי שלא אוהב אתרי זיכרון/עצמות.",
      "tip": "לא לבנות רק על כנסיית העצמות; הקתדרלה והעיר עצמה נותנות את העומק האמיתי של היום."
    },
    "en": {
      "why": "Kutná Hora feels different from Prague: a medieval silver town with a major cathedral and the unusual Bone Church. It is one of the clearest “worth leaving the city” trips.",
      "see": [
        "Sedlec Ossuary / Bone Church",
        "St. Barbara’s Cathedral",
        "Historic town center",
        "Quieter streets than Prague"
      ],
      "fit": "Best for history, architecture and unusual places. Less suitable if bone chapels feel uncomfortable.",
      "tip": "Do not make it only about the Bone Church; the cathedral and town center are what make the day complete."
    }
  },
  "Karlovy Vary": {
    "he": {
      "why": "קרלובי וארי היא צ׳כיה האלגנטית: עיר ספא צבעונית לאורך נהר, עם קולונדות, מעיינות חמים ובתי מלון היסטוריים. הסיבה להגיע היא יום רגוע, יפה ומצולם מאוד שמרגיש כמו אירופה קלאסית.",
      "see": [
        "Mill Colonnade",
        "Hot Spring Colonnade",
        "Grandhotel Pupp מבחוץ",
        "תצפית Diana אם יש זמן",
        "טעימת מי מעיינות בכוס ספא"
      ],
      "fit": "מתאים לזוגות, צילום, אדריכלות ויום רגוע. פחות מתאים למי שמחפש אטרקציות לילדים או אקשן.",
      "tip": "לקנות כוס ספא קטנה ולטעום מהמעיינות — זו החוויה המקומית. לא כולם אוהבים את הטעם, וזה חלק מהעניין."
    },
    "en": {
      "why": "Karlovy Vary is elegant spa-town Czechia: colorful colonnades, hot springs, historic hotels and a slow river walk. Go for a calm, photogenic day that feels like old Europe.",
      "see": [
        "Mill Colonnade",
        "Hot Spring Colonnade",
        "Grandhotel Pupp exterior",
        "Diana viewpoint if time allows",
        "Tasting mineral water from spa cups"
      ],
      "fit": "Best for couples, photos, architecture and a relaxed full day. Less ideal for children looking for action.",
      "tip": "Buy a small spa cup and taste the springs. The taste is unusual — that is part of the experience."
    }
  },
  "Český Krumlov": {
    "he": {
      "why": "צ׳סקי קרומלוב היא עיירת אגדה אמיתית סביב נהר מתפתל וטירה גדולה. היא רחוקה יותר, אבל אם יש לך יום מלא ורצון לראות את אחת העיירות היפות בצ׳כיה, זו בחירה חזקה מאוד.",
      "see": [
        "העיר העתיקה בתוך עיקול הנהר",
        "מתחם הטירה",
        "נקודות תצפית מעל הגגות",
        "סמטאות אבן ובתי קפה"
      ],
      "fit": "מתאים ליום מלא, זוגות, צילום ואווירה רומנטית. פחות מתאים ליום קצר או כשלא רוצים נסיעה ארוכה.",
      "tip": "לצאת מוקדם מאוד. אם מגיעים מאוחר, העומס והנסיעה הארוכה מורידים מהערך."
    },
    "en": {
      "why": "Český Krumlov is a real fairytale town wrapped around a bend in the river, with a major castle above it. It is far, but one of the most atmospheric full-day trips from Prague.",
      "see": [
        "Old town inside the river bend",
        "Castle complex",
        "Viewpoints over the rooftops",
        "Stone lanes and cafés"
      ],
      "fit": "Best for a full day, couples, photography and romantic atmosphere. Not ideal for a short day.",
      "tip": "Leave very early. Arriving late makes the long journey feel less worthwhile."
    }
  },
  "Dresden": {
    "he": {
      "why": "דרזדן היא קפיצה לגרמניה ביום אחד: עיר משוחזרת ומרשימה עם מוזיאונים, כנסיות בארוק וטיילת על האלבה. הסיבה להגיע היא לשבור את רצף צ׳כיה ולקבל אדריכלות ותחושת עיר אחרת לגמרי.",
      "see": [
        "Frauenkirche",
        "Zwinger Palace",
        "טיילת האלבה",
        "העיר העתיקה המשוחזרת"
      ],
      "fit": "מתאים למוזיאונים, אדריכלות ויום עירוני. פחות מתאים אם אתה רוצה טבע או כפרים.",
      "tip": "לוודא דרכון/תעודה ומסלול חזרה. זה יום טוב כשמזג האוויר פחות מתאים לטבע."
    },
    "en": {
      "why": "Dresden gives you a Germany switch in one day: rebuilt Baroque architecture, museums and the Elbe riverfront. Go when you want a very different city feel from Prague.",
      "see": [
        "Frauenkirche",
        "Zwinger Palace",
        "Elbe promenade",
        "Rebuilt old town"
      ],
      "fit": "Best for museums, architecture and an urban day. Not for nature seekers.",
      "tip": "Carry ID and check return times. It is a good bad-weather alternative to nature trips."
    }
  },
  "Terezín": {
    "he": {
      "why": "טרזין הוא לא טיול “כיף”, אלא ביקור היסטורי רציני. המבצר והגטו לשעבר מספרים פרק קשה במלחמת העולם השנייה ובשואה. הסיבה להגיע היא להבין משהו עמוק יותר על אירופה, לא לחפש אטרקציה קלילה.",
      "see": [
        "המבצר הקטן",
        "מוזיאון הגטו",
        "אתרי זיכרון",
        "רחובות העיירה עם ההקשר ההיסטורי"
      ],
      "fit": "מתאים למי שמוכן לביקור כבד ומשמעותי. לא מתאים כיום קליל עם ילדים קטנים בלי הכנה.",
      "tip": "להגיע עם זמן ושקט. לא לשלב עם יותר מדי אטרקציות באותו יום."
    },
    "en": {
      "why": "Terezín is not a “fun” trip; it is a serious historical visit. The former fortress and ghetto tell a painful World War II and Holocaust story. Go for depth, not entertainment.",
      "see": [
        "Small Fortress",
        "Ghetto Museum",
        "Memorial sites",
        "Town streets with historical context"
      ],
      "fit": "Best for travelers ready for a heavy, meaningful visit. Not a light family attraction without preparation.",
      "tip": "Give it time and emotional space. Do not pack the day with many other stops."
    }
  },
  "Konopiště Castle": {
    "he": {
      "why": "קונופישטה היא טירה נוחה ליום קצר עם סיפור חזק: היא קשורה לארכידוכס פרנץ פרדיננד, שרציחתו הציתה את מלחמת העולם הראשונה. מעבר לטירה, יש פארק נעים ואגם קטן.",
      "see": [
        "טירת קונופישטה",
        "פארק וגנים",
        "אגם ושבילי הליכה",
        "אוסף היסטורי אם נכנסים פנימה"
      ],
      "fit": "מתאים לחצי יום ברכב או תחבורה משולבת, היסטוריה והליכה רגועה.",
      "tip": "אם אין זמן להרבה טירות, לבחור בינה לבין קרלשטיין לפי מה שמעניין אותך: סיפור היסטורי מודרני יותר מול טירת אגדה."
    },
    "en": {
      "why": "Konopiště has a strong story: it was linked to Archduke Franz Ferdinand, whose assassination triggered World War I. Beyond the castle, the park and lake make it a pleasant short trip.",
      "see": [
        "Konopiště Castle",
        "Park and gardens",
        "Lake paths",
        "Historic collections if entering"
      ],
      "fit": "Good for a half-day, history and relaxed walking.",
      "tip": "Choose between this and Karlštejn by mood: modern historical story versus fairytale Gothic castle."
    }
  },
  "Pilsen": {
    "he": {
      "why": "פילזן היא יעד למי שאוהב בירה, אוכל ועיר צ׳כית פחות תיירותית. זו העיר של Pilsner Urquell, אבל יש גם כיכר מרכזית גדולה, בית כנסת מרשים ואווירה מקומית יותר מפראג.",
      "see": [
        "Pilsner Urquell Brewery",
        "Republic Square",
        "Great Synagogue",
        "מרכז העיר"
      ],
      "fit": "מתאים לחובבי בירה, אוכל ויום עירוני קל. פחות מתאים למי שמחפש נופים.",
      "tip": "אם הסיור במבשלה חשוב לך, לבדוק מראש שעות וסיורים באנגלית."
    },
    "en": {
      "why": "Pilsen is for beer, food and a less touristy Czech city. It is the home of Pilsner Urquell, but also has a large central square and local atmosphere.",
      "see": [
        "Pilsner Urquell Brewery",
        "Republic Square",
        "Great Synagogue",
        "City center"
      ],
      "fit": "Best for beer lovers, food and an easy urban day. Less for scenery.",
      "tip": "If the brewery tour matters, check English tour times before leaving."
    }
  },
  "Bohemian Paradise": {
    "he": {
      "why": "גן העדן הבוהמי הוא יום טבע עם סלעי אבן חול, יערות וטירות קטנות. זה יעד חזק במיוחד אם אתה רוצה לצאת מהעיר לנוף דרמטי יותר, אבל הוא עובד הרבה יותר טוב עם רכב.",
      "see": [
        "סלעי אבן חול",
        "שבילי הליכה ביער",
        "תצפיות וטירות קטנות",
        "כפרים ונוף פתוח"
      ],
      "fit": "מתאים לטבע, צילום והליכה. פחות מתאים בתחבורה ציבורית קצרה.",
      "tip": "לבחור מסלול הליכה אחד ולא לנסות “לראות הכול”. לבדוק מזג אוויר ונעליים."
    },
    "en": {
      "why": "Bohemian Paradise is a nature day: sandstone rock formations, forest trails, viewpoints and small castles. It is strong if you want scenery, but works best by car.",
      "see": [
        "Sandstone rocks",
        "Forest trails",
        "Viewpoints and small castles",
        "Villages and open landscape"
      ],
      "fit": "Best for nature, photography and walking. Less convenient as a quick public-transport trip.",
      "tip": "Pick one walking route. Do not try to see everything in one day."
    }
  },
  "Křivoklát Castle": {
    "he": {
      "why": "קריבוקלאט היא טירה יערית שנותנת תחושה פחות “מסודרת לתיירים” מקרלשטיין. היא יושבת באזור ירוק ומרגישה יותר כמו יציאה לבוהמיה הכפרית.",
      "see": [
        "הטירה מעל העמק",
        "יער ושבילים באזור",
        "חצרות וחומות",
        "כפר קטן מסביב"
      ],
      "fit": "מתאים למי שרוצה טירה עם תחושת יער ואווירה שקטה יותר.",
      "tip": "טוב במיוחד ברכב. בתחבורה ציבורית לבדוק זמני חזרה מראש."
    },
    "en": {
      "why": "Křivoklát is a forest castle with a less polished tourist feeling than Karlštejn. It feels more rural and green.",
      "see": [
        "Castle above the valley",
        "Nearby forest paths",
        "Courtyards and walls",
        "Small village setting"
      ],
      "fit": "Good for travelers who want a quieter castle and forest atmosphere.",
      "tip": "Best by car. If using public transport, check return times first."
    }
  },
  "Mělník": {
    "he": {
      "why": "מלניק היא עיירה קטנה מעל מפגש הנהרות אלבה וולטאבה, עם יין, תצפית וטירה. זו בחירה טובה ליום קצר ונעים בלי עומס.",
      "see": [
        "תצפית על מפגש הנהרות",
        "טירת מלניק מבחוץ/בפנים",
        "רחובות קטנים",
        "יין מקומי"
      ],
      "fit": "מתאים לחצי יום, זוגות, יין ונוף רגוע.",
      "tip": "לבוא כשמזג האוויר יפה; הערך המרכזי הוא התצפית וההליכה הקלה."
    },
    "en": {
      "why": "Mělník is a small town above the meeting of the Elbe and Vltava rivers, with wine, a château and a calm viewpoint.",
      "see": [
        "River confluence viewpoint",
        "Mělník château",
        "Small streets",
        "Local wine"
      ],
      "fit": "Best for a half-day, couples, wine and easy views.",
      "tip": "Go in good weather; the view and slow walk are the main value."
    }
  },
  "Poděbrady": {
    "he": {
      "why": "פודייבראדי היא עיירת ספא קלה ונגישה, פחות מפוארת מקרלובי וארי אבל נוחה ליום רגוע. מגיעים בשביל פארק, קולונדה, קפה ואווירת ספא מקומית.",
      "see": [
        "קולונדת הספא",
        "פארקים ושדרות",
        "בתי קפה",
        "תחושת עיירה רגועה"
      ],
      "fit": "מתאים ליום קל, זוגות ומי שלא רוצה נסיעה ארוכה.",
      "tip": "זו לא “וואו” דרמטי — זו עצירה רגועה. לבחור בה כשצריך יום נמוך מאמץ."
    },
    "en": {
      "why": "Poděbrady is an easy spa town: less grand than Karlovy Vary, but simple, calm and accessible. Go for parks, cafés and a local spa-town feel.",
      "see": [
        "Spa colonnade",
        "Parks and promenades",
        "Cafés",
        "Relaxed town atmosphere"
      ],
      "fit": "Good for an easy low-effort day.",
      "tip": "It is not dramatic; choose it when you want a calm day, not a major spectacle."
    }
  },
  "Tábor": {
    "he": {
      "why": "טאבור היא עיר עם עבר הוסיטי, סמטאות אבן וכיכר היסטורית. היא פחות מפורסמת, ולכן מתאימה למי שרוצה עיר צ׳כית אמיתית יותר ופחות צפופה.",
      "see": [
        "הכיכר המרכזית",
        "סמטאות העיר העתיקה",
        "מוזיאון/הקשר הוסיטי",
        "תצפיות קטנות סביב העיר"
      ],
      "fit": "מתאים להיסטוריה, הליכה עירונית ומי שכבר ראה את הקלאסיקות.",
      "tip": "לקרוא קצת על ההוסיטים לפני הביקור — זה הופך את העיר להרבה יותר מעניינת."
    },
    "en": {
      "why": "Tábor has Hussite history, stone lanes and a compact old town. It is less famous, which makes it good for a more local Czech day.",
      "see": [
        "Main square",
        "Old-town lanes",
        "Hussite historical context",
        "Small viewpoints around town"
      ],
      "fit": "Good for history, urban walking and travelers beyond the obvious classics.",
      "tip": "Read a little about the Hussites before going; it makes the town much more meaningful."
    }
  },
  "České Budějovice": {
    "he": {
      "why": "צ׳סקה בודייוביצה היא עיר עם כיכר ענקית, בירה ואווירה דרום־בוהמית. היא מתאימה למי שרוצה עיר צ׳כית רגועה יותר, ואפשר לשלב אותה עם צ׳סקי קרומלוב אם יש רכב וזמן.",
      "see": [
        "הכיכר המרכזית הגדולה",
        "מגדל שחור",
        "בירה מקומית",
        "רחובות מרכז העיר"
      ],
      "fit": "מתאים לאוכל, בירה ועיר פחות עמוסה. לא יעד חובה ראשון אם הזמן קצר.",
      "tip": "אם יש יום אחד בלבד מחוץ לפראג, יש יעדים חזקים יותר; כאן הערך הוא קצב רגוע ומקומי."
    },
    "en": {
      "why": "České Budějovice offers a huge square, beer and a South Bohemian city rhythm. It is calm and local, and can pair with Český Krumlov by car.",
      "see": [
        "Large main square",
        "Black Tower",
        "Local beer",
        "Central streets"
      ],
      "fit": "Good for food, beer and a less crowded city. Not the first must-do if time is short.",
      "tip": "If you only have one day trip, other places may be stronger; choose this for a relaxed local pace."
    }
  },
  "Liberec": {
    "he": {
      "why": "ליברץ נותנת שילוב של עיר, הר ותצפית. הסיבה להגיע היא בעיקר Ještěd – המבנה האייקוני על ההר – עם תחושת צפון צ׳כיה שונה מפראג.",
      "see": [
        "Ještěd Mountain / Tower",
        "מרכז העיר",
        "גן חיות/אטרקציות משפחתיות אם מתאים",
        "נוף הררי"
      ],
      "fit": "מתאים לרכב, משפחות, תצפיות ויום שונה מהעיר.",
      "tip": "הערך תלוי במזג אוויר. ביום מעונן מאוד, התצפית מאבדת חלק גדול מהסיבה לנסוע."
    },
    "en": {
      "why": "Liberec combines city, mountain and viewpoint. The main reason is Ještěd, the iconic tower on the hill, giving a different North Bohemian feel.",
      "see": [
        "Ještěd Mountain / Tower",
        "City center",
        "Family attractions if relevant",
        "Mountain views"
      ],
      "fit": "Good by car, for families, viewpoints and a different landscape.",
      "tip": "Weather matters. On a very cloudy day the viewpoint loses much of its value."
    }
  },
  "Český ráj rocks": {
    "he": {
      "why": "סלעי גן העדן הבוהמי הם הצד הדרמטי של הטבע הצ׳כי: עמודי אבן חול, שבילים ותצפיות. זה יעד לרכב/הליכה ולא ליום עירוני רגוע.",
      "see": [
        "Prachov Rocks או אזורי סלע דומים",
        "שבילי יער",
        "תצפיות בין הסלעים",
        "צילום טבע"
      ],
      "fit": "מתאים להליכה, טבע וצילום. פחות מתאים למי שלא רוצה להתאמץ.",
      "tip": "לבדוק מסלול, חניה ומזג אוויר. לקחת מים ונעליים טובות."
    },
    "en": {
      "why": "The Bohemian Paradise rocks show the dramatic side of Czech nature: sandstone towers, trails and viewpoints. This is a walking/nature day, not a relaxed town stop.",
      "see": [
        "Prachov Rocks or similar rock areas",
        "Forest trails",
        "Viewpoints between rocks",
        "Nature photography"
      ],
      "fit": "Best for hiking, nature and photography. Less for low-effort travelers.",
      "tip": "Check trail, parking and weather. Bring water and proper shoes."
    }
  },
  "Lidice Memorial": {
    "he": {
      "why": "לידיצה היא אתר זיכרון לכפר שנמחק על ידי הנאצים בשנת 1942. זה ביקור קצר יחסית אבל חזק רגשית, שממחיש היסטוריה דרך מקום שקט, דשא, פסלים ומוזיאון.",
      "see": [
        "אזור הכפר שנמחק",
        "אנדרטת הילדים",
        "מוזיאון הזיכרון",
        "מרחב שקט להליכה והבנה"
      ],
      "fit": "מתאים למי שמחפש עומק היסטורי. לא מתאים כיום “בילוי”.",
      "tip": "לבוא מוכנים רגשית. זה מקום לעצירה מכבדת, לא לאטרקציה מהירה."
    },
    "en": {
      "why": "Lidice is a memorial to a village destroyed by the Nazis in 1942. It is short but emotionally powerful, using quiet space, sculpture and museum context.",
      "see": [
        "Site of the destroyed village",
        "Children’s memorial",
        "Memorial museum",
        "Quiet walking space"
      ],
      "fit": "Best for meaningful history. Not a leisure attraction.",
      "tip": "Come prepared emotionally. Treat it as a respectful visit, not a quick stop."
    }
  },
  "Velká Amerika Quarry": {
    "he": {
      "why": "ולקה אמריקה היא מחצבת אבן גיר מוצפת שמכונה לפעמים “הגרנד קניון הצ׳כי”. מגיעים בשביל נוף טורקיז, צוקים וצילום – אבל צריך לזכור שזה אזור טבע/מחצבה עם מגבלות בטיחות.",
      "see": [
        "תצפיות על המחצבה",
        "מים בצבע טורקיז",
        "צוקי אבן גיר",
        "שילוב אפשרי עם קרלשטיין"
      ],
      "fit": "מתאים לצילום, טבע וזוגות. פחות מתאים בגשם או למי שמחפש אתר מסודר מאוד.",
      "tip": "לא לרדת לאזורים אסורים. לשלב עם Karlštejn כדי להפוך את היום לחזק יותר."
    },
    "en": {
      "why": "Velká Amerika is a flooded limestone quarry often nicknamed the Czech Grand Canyon. Go for turquoise water, cliffs and photos — while respecting safety restrictions.",
      "see": [
        "Quarry viewpoints",
        "Turquoise water",
        "Limestone cliffs",
        "Possible pairing with Karlštejn"
      ],
      "fit": "Good for photos, nature and couples. Less ideal in rain or if you want a very organized attraction.",
      "tip": "Do not enter restricted areas. Combine with Karlštejn for a stronger day."
    }
  },
  "Průhonice Park": {
    "he": {
      "why": "פארק פרוהוניצה הוא בריחה ירוקה קרובה מאוד מפראג: פארק נופי עצום סביב טירה, עם אגמים, גשרים, שבילים וצמחייה עונתית. הסיבה להגיע היא לקבל טבע יפה בלי לנסוע רחוק.",
      "see": [
        "טירת פרוהוניצה מבחוץ",
        "אגמים ושבילים",
        "גשרים קטנים",
        "פריחה וצמחייה עונתית"
      ],
      "fit": "מתאים לזוגות, משפחות, צילום ויום רגוע. פחות מתאים למי שמחפש אקשן.",
      "tip": "להקדיש לפחות שעתיים. באביב ובתחילת קיץ הערך של הפריחה גבוה במיוחד."
    },
    "en": {
      "why": "Průhonice Park is a green escape very close to Prague: a vast landscaped park around a château, with lakes, bridges, paths and seasonal planting.",
      "see": [
        "Château exterior",
        "Lakes and paths",
        "Small bridges",
        "Seasonal planting and flowers"
      ],
      "fit": "Good for couples, families, photography and a calm day. Not for action seekers.",
      "tip": "Allow at least two hours. Spring and early summer are especially rewarding."
    }
  },
  "Sázava Monastery": {
    "he": {
      "why": "מנזר סאזאבה הוא יעד שקט ליד נהר עם רקע דתי והיסטורי צ׳כי. הוא לא “וואו” תיירותי גדול, אלא מקום למי שאוהב היסטוריה, שקט ונוף נהר.",
      "see": [
        "מתחם המנזר",
        "נהר סאזאבה",
        "הליכה באזור",
        "אווירה כפרית שקטה"
      ],
      "fit": "מתאים למי שכבר ראה את הקלאסיקות ורוצה משהו שקט יותר.",
      "tip": "לבחור בו רק אם אתה אוהב היסטוריה ומקומות שקטים; אחרת יעדים כמו Kutná Hora יתנו יותר אפקט."
    },
    "en": {
      "why": "Sázava Monastery is a quiet riverside historical site with Czech religious background. It is not a big spectacle; it is for calm history and river atmosphere.",
      "see": [
        "Monastery complex",
        "Sázava River",
        "Nearby walks",
        "Quiet rural mood"
      ],
      "fit": "Good for travelers beyond the classics who enjoy calm historical places.",
      "tip": "Choose it if you like quiet history; otherwise Kutná Hora gives a stronger first-time effect."
    }
  },
  "Havelská Koruna": {
    "he": {
      "why": "Havelská Koruna נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Havelská Koruna is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Sisters Bistro": {
    "he": {
      "why": "Sisters Bistro נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Sisters Bistro is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Mincovna": {
    "he": {
      "why": "Mincovna נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Mincovna is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "U Parlamentu": {
    "he": {
      "why": "U Parlamentu נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "U Parlamentu is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Luka Lu": {
    "he": {
      "why": "Luka Lu נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Luka Lu is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Banh Mi Makers": {
    "he": {
      "why": "Banh Mi Makers נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Banh Mi Makers is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Eska Karlín": {
    "he": {
      "why": "Eska Karlín נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Eska Karlín is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Mr. HotDoG": {
    "he": {
      "why": "Mr. HotDoG נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Mr. HotDoG is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Pho Vietnam Tuan & Lan": {
    "he": {
      "why": "Pho Vietnam Tuan & Lan נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Pho Vietnam Tuan & Lan is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Manifesto Market": {
    "he": {
      "why": "Manifesto Market נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Manifesto Market is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "U Kroka": {
    "he": {
      "why": "U Kroka נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "U Kroka is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Bistro Monk": {
    "he": {
      "why": "Bistro Monk נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Bistro Monk is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Kuchyň": {
    "he": {
      "why": "Kuchyň נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Kuchyň is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Kavárna co hledá jméno": {
    "he": {
      "why": "Kavárna co hledá jméno נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Kavárna co hledá jméno is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Bakeshop Praha": {
    "he": {
      "why": "Bakeshop Praha נבחר כמקום אוכל שימושי כי הוא נותן סגנון ברור ולא עוד חיפוש אקראי: או אוכל צ׳כי נוח, או ביסטרו/קפה/אוכל רחוב שמתאים לעצירה באמצע מסלול. הערך הוא לדעת מראש אם זה מקום מהיר, רגוע, מקומי או מתאים לקבוצה.",
      "see": [
        "סגנון אוכל ברור לפני הגעה",
        "בדיקת תפריט כשיש אינטרנט",
        "עצירה שמתאימה למסלול ולא רק למיקום",
        "אפשרות להוסיף ל־My Trip אם זה מסתדר עם היום"
      ],
      "fit": "מתאים כשאתה רוצה לבחור אוכל לפי אופי המקום ולא רק לפי מרחק.",
      "tip": "לבדוק שעות, עומס וביקורות עדכניות לפני יציאה."
    },
    "en": {
      "why": "Bakeshop Praha is included as a practical food stop because it has a clear role: Czech comfort food, bistro/café, street-food style or an easy break during the route. The value is knowing the kind of meal before walking there.",
      "see": [
        "Clear food style before arrival",
        "Check menu while online",
        "A stop that fits the route, not just the map",
        "Add to My Trip only if it matches the day"
      ],
      "fit": "Good when you want to choose by food mood, not just distance.",
      "tip": "Check hours, crowding and current reviews before leaving."
    }
  },
  "Lokál Dlouhááá": {
    "he": {
      "why": "פאב-מסעדה צ׳כי קלאסי עם בירה טרייה ואוכל ביתי פשוט. מומלץ כי הוא נותן חוויה מקומית טובה בלי להרגיש כמו מסעדת תיירים מעוצבת מדי.",
      "see": [
        "גולאש/בשר צ׳כי",
        "בירה פילזנר טרייה",
        "אווירת אולם בירה רועשת ונעימה",
        "תפריט צ׳כי ברור"
      ],
      "fit": "מתאים לארוחת צהריים/ערב ראשונה בפראג, בירה ואוכל צ׳כי. פחות רומנטי.",
      "tip": "להגיע לא בשעת עומס או להזמין; המקום פופולרי."
    },
    "en": {
      "why": "Classic Czech pub-restaurant with fresh beer and simple comfort food. Recommended because it feels local without being overly touristy.",
      "see": [
        "Goulash or Czech meat dishes",
        "Fresh Pilsner beer",
        "Lively beer-hall atmosphere",
        "Clear Czech menu"
      ],
      "fit": "Good for a first Czech lunch/dinner and beer. Not romantic.",
      "tip": "Avoid peak times or reserve; it is popular."
    }
  },
  "Naše Maso": {
    "he": {
      "why": "ביסטרו קצבים קטן ומפורסם לאוהבי בשר. הסיבה להגיע היא איכות חומרי גלם ומהירות: נקניקיות, המבורגר או בשר פשוט בלי טקס ארוך.",
      "see": [
        "דלפק קצבים",
        "מנות בשר קצרות ומהירות",
        "המבורגר/נקניקיות",
        "אכילה בעמידה או ישיבה קצרה"
      ],
      "fit": "מתאים להפסקה מהירה ואיכותית. פחות מתאים לארוחה ארוכה או צמחונים.",
      "tip": "לבוא רעבים אבל לא לצפות למסעדה שקטה; זה יותר חוויית ביסטרו."
    },
    "en": {
      "why": "Small butcher bistro for meat lovers. Go for quality ingredients and a quick, focused bite rather than a long meal.",
      "see": [
        "Butcher counter",
        "Short meat dishes",
        "Burger or sausages",
        "Quick standing/small seating meal"
      ],
      "fit": "Best for a fast quality meat stop. Not for vegetarians or long dinners.",
      "tip": "Expect a bistro experience, not a quiet restaurant."
    }
  },
  "Kantýna": {
    "he": {
      "why": "מסעדת בשר גדולה ותוססת בסגנון קצבייה מודרנית. מומלצת כשבא לך ערב בשרי חזק עם אווירה, לא רק “משהו לאכול”.",
      "see": [
        "נתחי בשר לפי בחירה",
        "אווירה רועשת וחיה",
        "בירה ותוספות פשוטות",
        "חלל גדול ומעוצב"
      ],
      "fit": "מתאים לחובבי בשר וקבוצות. פחות מתאים לערב שקט.",
      "tip": "לבדוק איך עובד שיטת ההזמנה במקום; זה חלק מהחוויה."
    },
    "en": {
      "why": "A lively modern butcher-style meat restaurant. Recommended when you want a strong meat-focused meal with atmosphere, not just food.",
      "see": [
        "Meat cuts by choice",
        "Loud lively room",
        "Beer and simple sides",
        "Large designed space"
      ],
      "fit": "Best for meat lovers and groups. Less for quiet evenings.",
      "tip": "Understand the ordering system; it is part of the experience."
    }
  },
  "Maitrea": {
    "he": {
      "why": "מסעדה צמחונית ליד העיר העתיקה שמצליחה לעבוד גם למי שאינו צמחוני. יש בה אווירת זן, תאורה רגועה ומנות יצירתיות יותר מסלט רגיל.",
      "see": [
        "מנות צמחוניות אסייתיות/אירופיות",
        "חלל רגוע בסגנון זן",
        "אפשרות לארוחה קלה או מלאה",
        "מיקום נוח במרכז"
      ],
      "fit": "מתאים לצמחונים, זוגות וארוחה רגועה. פחות מתאים למי שמחפש אוכל צ׳כי מסורתי.",
      "tip": "מומלץ כשצריך הפסקה שקטה מהעומס של העיר העתיקה."
    },
    "en": {
      "why": "A vegetarian restaurant near Old Town that also works for non-vegetarians. Calm Zen-like interior and creative dishes beyond basic salad.",
      "see": [
        "Vegetarian Asian/European dishes",
        "Calm Zen-style interior",
        "Light or full meal option",
        "Convenient central location"
      ],
      "fit": "Good for vegetarians, couples and a calmer meal. Not for traditional Czech food.",
      "tip": "Use it as a quiet break from Old Town crowds."
    }
  },
  "Café Louvre": {
    "he": {
      "why": "בית קפה היסטורי בסגנון אירופי קלאסי, טוב כשאתה רוצה קפה, עוגה או ארוחה קלה במקום עם תחושה של פראג הישנה.",
      "see": [
        "אולם קפה קלאסי",
        "קינוחים וקפה",
        "מנות צ׳כיות/אירופיות",
        "תחושת בית קפה היסטורי"
      ],
      "fit": "מתאים להפסקה רגועה, זוגות ומשפחות. פחות מתאים לאוכל רחוב מהיר.",
      "tip": "להגיע גם רק לקפה ועוגה; לא חייבים ארוחה מלאה."
    },
    "en": {
      "why": "Historic European-style café, good for coffee, cake or a light meal with an old-Prague feeling.",
      "see": [
        "Classic café hall",
        "Coffee and desserts",
        "Czech/European dishes",
        "Historic café atmosphere"
      ],
      "fit": "Good for a relaxed break, couples and families. Not fast street food.",
      "tip": "It works well just for coffee and cake; no need for a full meal."
    }
  },
  "Hemingway Bar": {
    "he": {
      "why": "בר קוקטיילים אינטימי ומפורסם, מתאים לערב איכותי יותר מבירה רגילה. מגיעים בשביל קוקטיילים מוקפדים, אווירה שקטה ותחושת בר קלאסי.",
      "see": [
        "קוקטיילים יצירתיים",
        "אווירה אינטימית",
        "ישיבה שקטה יחסית",
        "מקום שמתאים לדייט"
      ],
      "fit": "מתאים לזוגות וחובבי קוקטיילים. לא מתאים לקבוצות רועשות או תקציב נמוך.",
      "tip": "להזמין מקום מראש; ספונטני עלול להיגמר בהמתנה."
    },
    "en": {
      "why": "A well-known intimate cocktail bar for a higher-quality night than standard beer. Go for crafted cocktails and a classic bar mood.",
      "see": [
        "Creative cocktails",
        "Intimate atmosphere",
        "Relatively quiet seating",
        "Good date-night setting"
      ],
      "fit": "Best for couples and cocktail lovers. Not for loud groups or low budget.",
      "tip": "Reserve ahead; walk-ins may wait."
    }
  },
  "Jazz Dock": {
    "he": {
      "why": "מועדון ג׳אז על הנהר, מתאים למי שרוצה מוזיקה חיה ולא רק לשבת בבר. החוויה היא שילוב של הופעה, נהר ואווירה בוגרת.",
      "see": [
        "הופעות ג׳אז/בלוז/פיוז׳ן",
        "מיקום על הנהר",
        "ישיבה עם במה",
        "ערב תרבותי יותר"
      ],
      "fit": "מתאים למוזיקה חיה, זוגות וערב רגוע. פחות מתאים לריקודים.",
      "tip": "לבדוק מי מופיע באותו ערב; האיכות והסגנון משתנים לפי התוכנית."
    },
    "en": {
      "why": "A jazz club by the river, for live music rather than just drinks. The experience is performance, river setting and a mature evening mood.",
      "see": [
        "Jazz/blues/fusion concerts",
        "Riverside location",
        "Seated stage venue",
        "More cultural evening"
      ],
      "fit": "Good for live music, couples and a calmer night. Not for dancing.",
      "tip": "Check tonight’s lineup; the style depends on the program."
    }
  },
  "Lucerna Music Bar": {
    "he": {
      "why": "מועדון ותיק במרכז פראג עם מסיבות, הופעות וערבי רטרו. מתאים כשבא לך לילה יותר אנרגטי בלי לצאת רחוק מהמרכז.",
      "see": [
        "רחבת ריקודים",
        "הופעות/מסיבות לפי ערב",
        "אווירת מועדון מרכזית",
        "קהל מעורב מקומי ותיירים"
      ],
      "fit": "מתאים לריקודים וקבוצה. פחות מתאים לערב שקט.",
      "tip": "לבדוק את סוג הערב לפני שמגיעים — רטרו, הופעה או DJ זה חוויה שונה."
    },
    "en": {
      "why": "A long-running central music bar with parties, concerts and retro nights. Good when you want an energetic night without leaving the center.",
      "see": [
        "Dance floor",
        "Concerts/parties depending on night",
        "Central club atmosphere",
        "Mixed local and visitor crowd"
      ],
      "fit": "Good for dancing and groups. Not for a quiet night.",
      "tip": "Check the event type before going; retro, concert and DJ nights feel different."
    }
  },
  "Cross Club": {
    "he": {
      "why": "מועדון אלטרנטיבי עם עיצוב מכני/תעשייתי יוצא דופן. לא הולכים רק בשביל מוזיקה — המקום עצמו נראה כמו תפאורה עתידנית משוגעת.",
      "see": [
        "עיצוב מתכתי ותעשייתי",
        "מוזיקה אלקטרונית/אלטרנטיבית לפי ערב",
        "חללים מוזרים לצילום",
        "אווירה לא מיינסטרים"
      ],
      "fit": "מתאים למי שרוצה משהו חריג וצעיר יותר. פחות מתאים למי שמחפש אלגנטי ושקט.",
      "tip": "לבדוק ליינאפ; אם המוזיקה לא הסגנון שלך, עדיין המקום מעניין אבל הערב פחות יעבוד."
    },
    "en": {
      "why": "An alternative club with wild mechanical/industrial design. You do not go only for music — the place itself feels like a futuristic set.",
      "see": [
        "Metal industrial design",
        "Electronic/alternative music by night",
        "Unusual photo corners",
        "Non-mainstream atmosphere"
      ],
      "fit": "Good for a younger/alternative night. Not elegant or quiet.",
      "tip": "Check the lineup; the space is interesting, but the music still matters."
    }
  },
  "Letná Beer Garden": {
    "he": {
      "why": "Letná Beer Garden נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Letná Beer Garden is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Náplavka Riverside": {
    "he": {
      "why": "Náplavka Riverside נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Náplavka Riverside is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Anonymous Bar": {
    "he": {
      "why": "Anonymous Bar נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Anonymous Bar is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Dva Kohouti": {
    "he": {
      "why": "Dva Kohouti נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Dva Kohouti is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "U Sudu": {
    "he": {
      "why": "U Sudu נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "U Sudu is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "BeerGeek Bar": {
    "he": {
      "why": "BeerGeek Bar נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "BeerGeek Bar is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Vzorkovna": {
    "he": {
      "why": "Vzorkovna נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Vzorkovna is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Roxy Prague": {
    "he": {
      "why": "Roxy Prague נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Roxy Prague is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Aloha Wave Lounge": {
    "he": {
      "why": "Aloha Wave Lounge נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Aloha Wave Lounge is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Black Angel’s Bar": {
    "he": {
      "why": "Black Angel’s Bar נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Black Angel’s Bar is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Cobra Bar": {
    "he": {
      "why": "Cobra Bar נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Cobra Bar is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "M1 Lounge": {
    "he": {
      "why": "M1 Lounge נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "M1 Lounge is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Karlovy Lázně": {
    "he": {
      "why": "Karlovy Lázně נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Karlovy Lázně is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Duplex Rooftop": {
    "he": {
      "why": "Duplex Rooftop נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Duplex Rooftop is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Chapeau Rouge": {
    "he": {
      "why": "Chapeau Rouge נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Chapeau Rouge is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Kasárna Karlín": {
    "he": {
      "why": "Kasárna Karlín נבחר כאפשרות ערב כי הוא מייצר סוג יציאה ברור: בירה עם נוף, בר קוקטיילים, מוזיקה, מועדון או אווירה מקומית. המטרה היא שתדע איזה לילה אתה בוחר לפני שאתה יוצא מהמלון.",
      "see": [
        "אופי ערב ברור לפני הגעה",
        "אפשרות לשלב עם אוכל קרוב",
        "בדיקת מוזיקה/אירועים אונליין",
        "נקודת יציאה או סיום למסלול ערב"
      ],
      "fit": "מתאים לפי מצב רוח: שקט, קוקטיילים, בירה, ריקודים או ערב צעיר יותר.",
      "tip": "לבדוק היום הספציפי: חיי לילה משתנים מאוד לפי ליינאפ, מזג אוויר ושעה."
    },
    "en": {
      "why": "Kasárna Karlín is included because it gives a clear evening choice: view beer, cocktails, music, clubbing or local atmosphere. The point is to know what kind of night you are choosing before leaving the hotel.",
      "see": [
        "Clear evening mood",
        "Can pair with nearby food",
        "Check music/events online",
        "Good start or end point for a night route"
      ],
      "fit": "Choose by mood: quiet, cocktails, beer, dancing or a younger night.",
      "tip": "Check the specific night; nightlife changes with lineup, weather and time."
    }
  },
  "Vltava River Cruise": {
    "he": {
      "why": "שייט בוולטאבה נותן את פראג מזווית שלא מקבלים בהליכה: הגשרים, הטירה והעיר העתיקה נפתחים מהמים בקצב רגוע. זו חוויה טובה במיוחד כשעייפים אבל עדיין רוצים לראות משהו משמעותי.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Vltava River Cruise is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Petřín Hill Viewpoint": {
    "he": {
      "why": "פטרין נותנת תצפית ירוקה ורומנטית על פראג. זה המקום ללכת אליו כשצריך אוויר, שקיעה ונוף במקום עוד רחוב עמוס בעיר העתיקה.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Petřín Hill Viewpoint is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Black Light Theatre": {
    "he": {
      "why": "תיאטרון אור שחור הוא חוויה פראגאית קלאסית: מופע ויזואלי כמעט בלי תלות בשפה, עם תאורה, תנועה ואשליות. טוב במיוחד לערב גשום.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Black Light Theatre is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Beer Spa": {
    "he": {
      "why": "ספא בירה הוא לא אתר היסטורי אלא חוויה תיירותית משעשעת: אמבטיות, בירה ואווירה קלילה. מתאים כשמחפשים משהו מצחיק ולא עוד מוזיאון.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Beer Spa is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Prague Vintage Car Tour": {
    "he": {
      "why": "סיור רכב וינטג׳ הופך את פראג לתפאורה קולנועית. זה פחות “תחבורה” ויותר צילום, אווירה וחוויה זוגית/משפחתית קצרה.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Prague Vintage Car Tour is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "E-bike Old Town Tour": {
    "he": {
      "why": "סיור אי־בייק מתאים כשרוצים לכסות יותר אזורים בלי ללכת כל היום. הוא טוב לפתיחת הטיול ולהבנת מרחקים בעיר.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "E-bike Old Town Tour is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Prague Castle Viewpoints": {
    "he": {
      "why": "תצפיות סביב הטירה מסבירות למה פראג נחשבת כל כך יפה: גגות אדומים, נהר, צריחים וגשרים באותה תמונה.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Prague Castle Viewpoints is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Vyšehrad Sunset Walk": {
    "he": {
      "why": "וישהראד פחות עמוסה מהטירה המרכזית ונותנת ערב שקט יותר: חומות, פארק, נהר ושקיעה מעל העיר.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Vyšehrad Sunset Walk is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Letná Metronome View": {
    "he": {
      "why": "לטנה היא תצפית קלה וחזקה על הגשרים של פראג. מקום מצוין לעצירה עם בירה או הליכה קצרה לפני ערב.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Letná Metronome View is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Paddle Boats on Vltava": {
    "he": {
      "why": "סירות פדלים הן חוויה קלילה וזוגית על הנהר, טובה כשמזג האוויר יפה ורוצים הפסקה playful מהליכה בעיר.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Paddle Boats on Vltava is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Mirror Maze Petřín": {
    "he": {
      "why": "מבוך המראות בפטרין הוא עצירה קצרה ומשעשעת, בעיקר למשפחות או ליום קליל ליד התצפית.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Mirror Maze Petřín is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Museum of Senses": {
    "he": {
      "why": "מוזיאון החושים הוא חוויה indoor קלילה, עם אשליות וצילום. מתאים כשמזג האוויר פחות טוב או כשצריך משהו לילדים/נוער.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Museum of Senses is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Jewish Quarter Walk": {
    "he": {
      "why": "הליכה ברובע היהודי נותנת שכבת עומק היסטורית לפראג: בתי כנסת, בית קברות עתיק וסיפור קהילה שנמשך מאות שנים.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Jewish Quarter Walk is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Tram 22 Scenic Ride": {
    "he": {
      "why": "חשמלית 22 היא דרך זולה ונוחה לראות חלקים יפים של פראג בדרך לטירה, בלי סיור יקר ובלי הרבה הליכה.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Tram 22 Scenic Ride is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Dancing House Rooftop": {
    "he": {
      "why": "הגג של הבית הרוקד נותן שילוב של אדריכלות מודרנית ותצפית על הנהר. זו עצירה קצרה שמתאימה לצילום וקפה.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Dancing House Rooftop is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Franz Kafka Head": {
    "he": {
      "why": "ראש קפקא המסתובב הוא פסל מודרני, קצר ומוזר — עצירת צילום טובה כשאתה כבר באזור.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Franz Kafka Head is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Strahov Monastery Library": {
    "he": {
      "why": "ספריית מנזר סטרחוב היא אחת העצירות היפות לחובבי ספרים, היסטוריה וחללים עתיקים. היא מרגישה כמו חדר מתוך סרט.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Strahov Monastery Library is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Kampa Island Walk": {
    "he": {
      "why": "קמפה היא הליכה רגועה בין נהר, פארק, אמנות וגשרים. טובה כמעבר נעים בין גשר קארל למאלה סטרנה.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Kampa Island Walk is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Náplavka Saturday Market": {
    "he": {
      "why": "שוק שבת בנאפלבקה נותן אוכל, קפה ואווירת נהר מקומית יותר. הוא עובד הכי טוב בבוקר/צהריים עם מזג אוויר טוב.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Náplavka Saturday Market is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Old Town Underground": {
    "he": {
      "why": "העיר התחתית של פראג חושפת שכבה נסתרת מתחת למרכז: מרתפים, סיפורים מימי הביניים ותחושה של עיר מתחת לעיר.",
      "see": [
        "מהות החוויה עצמה",
        "נקודות צילום או רגעים מיוחדים",
        "התאמה למזג אוויר/ערב/משפחה",
        "אפשרות לשלב עם נקודות קרובות"
      ],
      "fit": "מתאים כשאתה רוצה שהיום לא יהיה רק הליכה בין אתרים אלא גם חוויה.",
      "tip": "לבדוק זמינות, שעות פתיחה ומזג אוויר לפני שבונים סביב זה את היום."
    },
    "en": {
      "why": "Old Town Underground is included as an experience because it adds a memorable travel moment rather than just another stop: a view, show, playful activity or a different angle on Prague.",
      "see": [
        "The core experience itself",
        "Photo moments or special views",
        "Weather/evening/family fit",
        "Possible pairing with nearby stops"
      ],
      "fit": "Good when you want the day to include an experience, not only sightseeing.",
      "tip": "Check availability, opening hours and weather before building the day around it."
    }
  },
  "Charles Bridge at sunrise": {
    "he": {
      "why": "גשר קארל בזריחה הוא פראג בלי הרעש. רוב התיירים רואים אותו כשהוא צפוף; בבוקר מוקדם הפסלים, הטירה והנהר מרגישים כמעט פרטיים.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Charles Bridge at sunrise is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Old Town Square at night": {
    "he": {
      "why": "כיכר העיר העתיקה בלילה מרגישה דרמטית יותר: כנסיית טין, השעון והאורות נותנים אווירה שלא קיימת בצהריים העמוסים.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Old Town Square at night is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Prague Castle panorama": {
    "he": {
      "why": "פנורמת טירת פראג היא אחת התמונות שמגדירות את העיר. זה המקום להבין את היחס בין הנהר, הגשרים, הגגות והטירה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Prague Castle panorama is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Astronomical Clock area": {
    "he": {
      "why": "אזור השעון האסטרונומי הוא לב העיר העתיקה. מעבר למופע השעון, הסיפור הוא הכיכר, המגדל והחיים סביבו.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Astronomical Clock area is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Vyšehrad Fortress": {
    "he": {
      "why": "וישהראד היא “פראג השנייה”: מבצר שקט יותר עם נוף לנהר, פארק ובית קברות של דמויות צ׳כיות חשובות.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Vyšehrad Fortress is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Petřín sunset": {
    "he": {
      "why": "שקיעה בפטרין נותנת פראג רכה וירוקה יותר. זה רגע רומנטי ומאוורר אחרי יום צפוף בעיר העתיקה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Petřín sunset is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Letná view over bridges": {
    "he": {
      "why": "תצפית לטנה על הגשרים היא אחת הזוויות הטובות בעיר לצילום. היא מראה את פראג כעיר של נהר וגשרים.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Letná view over bridges is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Jewish Quarter": {
    "he": {
      "why": "הרובע היהודי הוא שכבת היסטוריה עמוקה של פראג: בתי כנסת, בית קברות עתיק וסיפורים של קהילה, זיכרון ותרבות.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Jewish Quarter is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Kampa Island": {
    "he": {
      "why": "קמפה היא מקום נעים לעצור בו בין הנהר למאלה סטרנה: פארק, תעלות קטנות, אמנות ואווירה רגועה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Kampa Island is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Powder Tower": {
    "he": {
      "why": "מגדל אבק השריפה הוא שער גותי מרשים שמזכיר שפראג הייתה עיר מלכותית. טוב כעצירה בדרך לבית העירייה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Powder Tower is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Wenceslas Square": {
    "he": {
      "why": "כיכר ואצלב היא פחות “יפה רומנטית” ויותר ציר היסטורי ומודרני: הפגנות, מסחר, מוזיאון לאומי ותנועת עיר.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Wenceslas Square is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "National Theatre riverside": {
    "he": {
      "why": "אזור התיאטרון הלאומי על הנהר נותן שילוב יפה של אדריכלות, מים וגשרים — טוב להליכה קצרה וצילום.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "National Theatre riverside is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Dancing House photo stop": {
    "he": {
      "why": "הבית הרוקד הוא עצירת צילום מודרנית שמראה שפראג היא לא רק גותיקה ובארוק.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Dancing House photo stop is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Strahov Monastery view": {
    "he": {
      "why": "התצפית ליד סטרחוב נותנת מבט רחב על העיר והטירה, פחות צפוף מחלק מנקודות התצפית המרכזיות.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Strahov Monastery view is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Nerudova Street": {
    "he": {
      "why": "רחוב נרודובה הוא העלייה הקלאסית לטירה, עם חזיתות היסטוריות ושלטי בתים ישנים. הוא מחבר בין מאלה סטרנה לטירה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Nerudova Street is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Lennon Wall": {
    "he": {
      "why": "קיר לנון הוא נקודת צבע, גרפיטי וזיכרון תרבותי. לא עמוק כמו אתר היסטורי גדול, אבל טוב לעצירה קצרה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Lennon Wall is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Municipal House": {
    "he": {
      "why": "בית העירייה הוא פנינת אר־נובו ליד Powder Tower. מבחוץ ומבפנים הוא מציג פראג אלגנטית של תחילת המאה ה־20.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Municipal House is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Vltava riverside walk": {
    "he": {
      "why": "הליכה לאורך הוולטאבה מחברת בין פראג של מים, גשרים וטירות. זו הדרך הכי פשוטה להרגיש את העיר בלי לשלם על כלום.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Vltava riverside walk is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Malá Strana lanes": {
    "he": {
      "why": "סמטאות מאלה סטרנה הן פראג שקטה ורומנטית יותר: חצרות, כנסיות, מדרגות ותחושת עיר ישנה מתחת לטירה.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Malá Strana lanes is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  },
  "Clementinum viewpoint": {
    "he": {
      "why": "תצפית קלמנטינום נותנת מבט מרכזי על גגות העיר העתיקה. זו עצירה חזקה למי שאוהב תצפיות ואדריכלות.",
      "see": [
        "הסמל או הזווית המרכזית של המקום",
        "נקודות צילום חזקות",
        "הקשר להיסטוריה/אווירה של פראג",
        "אפשרות לשלב עם תחנות קרובות"
      ],
      "fit": "מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים של העיר.",
      "tip": "להגיע בשעה הנכונה: מוקדם, שקיעה או ערב יכולים לשנות לגמרי את החוויה."
    },
    "en": {
      "why": "Clementinum viewpoint is a must-do because it gives a classic Prague angle that is hard to replace on a first visit.",
      "see": [
        "Main landmark or viewpoint",
        "Strong photo spots",
        "Connection to Prague history or atmosphere",
        "Easy pairing with nearby stops"
      ],
      "fit": "Especially good for a first visit and for anchoring your route.",
      "tip": "Timing matters: early morning, sunset or evening can change the experience completely."
    }
  }
};


// v30 clean Prague guide DB: overrides all template/fallback text for Prague cards.
const PRAGUE_CLEAN_GUIDE_CONTENT = {
  "Karlštejn Castle": {
    "he": {
      "why": "טירת קרלשטיין היא טירת ימי־ביניים דרמטית מעל כפר קטן, שנבנתה עבור קארל הרביעי ושימשה לשמירת אוצרות וכתרי המלוכה. הסיבה להגיע היא לקבל חוויית טירה קלאסית בלי לבזבז יום שלם בנסיעה.",
      "see": [
        "העלייה דרך הכפר אל שערי הטירה",
        "חצרות ותצפיות על היער והעמק",
        "סיור פנים אם יש כרטיסים",
        "תחושת ימי־ביניים קרובה לפראג"
      ],
      "fit": "מתאים לחצי יום, לזוגות, צילום ומי שרוצה טירה נגישה. פחות מתאים למי שמתקשה בעלייה רגלית.",
      "tip": "להשאיר זמן להליכה מהתחנה/חניה אל הטירה; העלייה היא חלק מהחוויה אבל לא שטוחה."
    },
    "en": {
      "why": "Karlštejn is a dramatic medieval castle above a small village, built for Charles IV and associated with royal treasures. Go when you want a classic castle experience without losing an entire day to travel.",
      "see": [
        "Village walk up to the castle gates",
        "Courtyards and forest viewpoints",
        "Interior tour if tickets are available",
        "A strong medieval atmosphere close to Prague"
      ],
      "fit": "Good for a half-day, couples, photos and accessible castle atmosphere. Less ideal if uphill walking is a problem.",
      "tip": "Allow time for the walk from station/parking; the climb is part of the visit."
    }
  },
  "Kutná Hora": {
    "he": {
      "why": "קוטנה הורה היא עיר כסף היסטורית עם אחד האתרים החריגים בצ׳כיה: כנסיית העצמות בסדלץ. היא מומלצת כי היא נותנת שילוב של יופי גותי, היסטוריה וכלי החלטה ברור — זה לא עוד רחוב יפה.",
      "see": [
        "Sedlec Ossuary – כנסיית העצמות",
        "קתדרלת St. Barbara המרשימה",
        "רחובות ותצפיות בעיר העתיקה",
        "סיפור מכרות הכסף שהעשירו את בוהמיה"
      ],
      "fit": "מתאים להיסטוריה, צילום ואתרים יוצאי דופן. פחות מתאים למי שרגיש להצגת עצמות.",
      "tip": "לא כל האתרים באותה נקודה; לתכנן מעבר בין סדלץ למרכז העיר."
    },
    "en": {
      "why": "Kutná Hora is a historic silver town with one of the most unusual sites in Czechia: the Sedlec Ossuary. It combines Gothic beauty, history and a very clear reason to leave Prague.",
      "see": [
        "Sedlec Ossuary bone chapel",
        "St. Barbara’s Cathedral",
        "Historic streets and viewpoints",
        "The silver-mining story behind the town"
      ],
      "fit": "Best for history, photography and unusual sights. Less suitable if bone displays bother you.",
      "tip": "Plan transport between Sedlec and the old center; the main sites are not all in one spot."
    }
  },
  "Karlovy Vary": {
    "he": {
      "why": "קרלובי וארי היא עיירת הספא האלגנטית של צ׳כיה: קולונדות, מעיינות חמים, מבנים צבעוניים וטיילת שמרגישה כמו אירופה של פעם. זו בחירה טובה ליום רגוע ויפה מחוץ לפראג.",
      "see": [
        "Mill Colonnade והקולונדות המרכזיות",
        "מעיינות חמים לאורך הטיילת",
        "Grandhotel Pupp מבחוץ",
        "תצפית Diana אם נשאר זמן"
      ],
      "fit": "מתאים לזוגות, צילום, בתי קפה ויום איטי. פחות מתאים למי שמחפש אקשן.",
      "tip": "לקנות כוס ספא קטנה ולטעום בזהירות; למים יש טעם מינרלי חזק ולא כולם אוהבים."
    },
    "en": {
      "why": "Karlovy Vary is Czechia’s elegant spa town: colonnades, hot springs, colorful buildings and a promenade that feels like old Europe. Choose it for a slower, beautiful day outside Prague.",
      "see": [
        "Mill Colonnade and the main colonnades",
        "Hot springs along the promenade",
        "Grandhotel Pupp exterior",
        "Diana viewpoint if time allows"
      ],
      "fit": "Great for couples, photos, cafés and a relaxed day. Not for action seekers.",
      "tip": "Buy a small spa cup and taste carefully; the mineral flavor is strong."
    }
  },
  "Český Krumlov": {
    "he": {
      "why": "צ׳סקי קרומלוב נראית כמו תפאורה: נהר מתפתל סביב עיר עתיקה, טירה גדולה וגגות אדומים. היא יפה מאוד, אבל רחוקה — לבחור בה רק כשבאמת רוצים יום מלא וציורי.",
      "see": [
        "העיר העתיקה והסמטאות",
        "הטירה והתצפית מעל הנהר",
        "הליכה לאורך הוולטאבה המקומית",
        "נקודות צילום של הנהר והגשרים"
      ],
      "fit": "מתאים לרומנטיקה, צילום ויום מלא. פחות מתאים לטיול קצר או למי שלא רוצה נסיעה ארוכה.",
      "tip": "לצאת מוקדם מאוד; אם מגיעים מאוחר, העומס והנסיעה מורידים מערך היום."
    },
    "en": {
      "why": "Český Krumlov feels like a film set: river bends, a castle, red roofs and narrow streets. It is beautiful but far, so choose it only when you want a full scenic day.",
      "see": [
        "Old town lanes",
        "Castle and river viewpoint",
        "Walks along the local Vltava bends",
        "Classic photo spots over roofs and bridges"
      ],
      "fit": "Best for romance, photography and a full-day plan. Not for a short, easy outing.",
      "tip": "Leave very early; late arrival plus crowds can weaken the day."
    }
  },
  "Dresden": {
    "he": {
      "why": "דרזדן היא קפיצה לגרמניה ליום אחד: עיר על האלבה עם ארכיטקטורה משוחזרת, מוזיאונים ואווירה שונה לגמרי מפראג. מומלץ כשמתחשק “עוד מדינה” בלי טיסה.",
      "see": [
        "Frauenkirche והכיכר סביבו",
        "Brühl’s Terrace על הנהר",
        "אזור Zwinger והמוזיאונים",
        "הליכה לאורך האלבה"
      ],
      "fit": "מתאים למוזיאונים, ארכיטקטורה וקניות קלות. פחות מתאים לטבע.",
      "tip": "לבדוק רכבת/נסיעה חזרה מראש; זה יום עירוני מלא ולא עצירת שעה."
    },
    "en": {
      "why": "Dresden is a one-day jump into Germany: Elbe river views, rebuilt baroque architecture and museums. Good when you want another country without flying.",
      "see": [
        "Frauenkirche and surrounding square",
        "Brühl’s Terrace by the river",
        "Zwinger area and museums",
        "Elbe riverside walk"
      ],
      "fit": "Best for museums, architecture and a city day. Less suitable for nature.",
      "tip": "Check return options before leaving; it works best as a full city day."
    }
  },
  "Terezín": {
    "he": {
      "why": "טרזין הוא אתר היסטורי כבד ומשמעותי הקשור לשואה ולמלחמת העולם השנייה. בוחרים בו כדי להבין, לא כדי “לטייל יפה”. זה ביקור שנותן עומק וכובד לטיול.",
      "see": [
        "המצודה הקטנה",
        "מוזיאון הגטו",
        "אתרי זיכרון ברחבי העיירה",
        "הקשר בין המקום להיסטוריה היהודית והאירופית"
      ],
      "fit": "מתאים למבוגרים ולמי שמחפש היסטוריה עמוקה. לא מתאים כפעילות קלילה.",
      "tip": "לא לשלב מיד אחריו פעילות שמחה מדי; להשאיר מרווח רגשי ביום."
    },
    "en": {
      "why": "Terezín is a heavy, meaningful historical site connected to the Holocaust and World War II. Choose it for understanding, not pretty sightseeing.",
      "see": [
        "Small Fortress",
        "Ghetto Museum",
        "Memorial sites around town",
        "Jewish and European historical context"
      ],
      "fit": "Best for adults and travelers seeking serious history. Not a light activity.",
      "tip": "Leave emotional space in the day; do not treat it as just another stop."
    }
  },
  "Konopiště Castle": {
    "he": {
      "why": "קונופישטה היא טירה ירוקה ושקטה יותר, המזוהה עם הארכידוכס פרנץ פרדיננד, שרציחתו הציתה את מלחמת העולם הראשונה. הסיבה להגיע היא שילוב של פארק, טירה וסיפור היסטורי גדול.",
      "see": [
        "הטירה והפארק הסובב",
        "אוספים היסטוריים בסיור פנימי",
        "אגם/שבילים באזור",
        "הקשר לפרנץ פרדיננד ומלחמת העולם הראשונה"
      ],
      "fit": "מתאים לחובבי היסטוריה וטירות שרוצים יעד פחות עמוס מקרלשטיין.",
      "tip": "אם ההיסטוריה של מלחמת העולם הראשונה מעניינת אותך — המקום מקבל הרבה יותר משמעות."
    },
    "en": {
      "why": "Konopiště is a quieter green castle linked to Archduke Franz Ferdinand, whose assassination triggered WWI. Go for castle, park and a major historical shadow.",
      "see": [
        "Castle and surrounding park",
        "Historic collections on interior tours",
        "Paths and lake area",
        "Franz Ferdinand / WWI connection"
      ],
      "fit": "Good for history and castle lovers seeking something less crowded than Karlštejn.",
      "tip": "If WWI history interests you, this stop becomes far more meaningful."
    }
  },
  "Pilsen": {
    "he": {
      "why": "פילזן היא עיר הבירה של הבירה פילזנר. הסיבה להגיע היא לא רק לשתות, אלא לראות עיר צ׳כית אמיתית יותר עם כיכר גדולה, מבשלה וסיפור תרבותי חזק סביב בירה.",
      "see": [
        "Pilsner Urquell Brewery",
        "Republic Square הגדולה",
        "קתדרלה ומרכז העיר",
        "טעימות או סיור מבשלה אם זמין"
      ],
      "fit": "מתאים לחובבי בירה, אוכל ויום קל. פחות מרשים למי שמחפש נופים.",
      "tip": "אם עושים סיור מבשלה — לבדוק מראש שפה, שעות וכרטיסים."
    },
    "en": {
      "why": "Pilsen is the home of Pilsner beer. Go not only to drink, but to see a real Czech city with a huge square, brewery and strong beer culture.",
      "see": [
        "Pilsner Urquell Brewery",
        "Large Republic Square",
        "Cathedral and city center",
        "Tasting or brewery tour if available"
      ],
      "fit": "Best for beer lovers, food and an easy day. Less impressive for scenery.",
      "tip": "If you want a brewery tour, check language, times and tickets ahead."
    }
  },
  "Bohemian Paradise": {
    "he": {
      "why": "גן העדן הבוהמי מתאים כשאתם רוצים טבע אמיתי: סלעי אבן חול, יערות, שבילים ותצפיות. זה יעד שמחליף את רחובות פראג בנוף הליכה צ׳כי קלאסי.",
      "see": [
        "תצורות סלע גבוהות",
        "שבילי יער ותצפיות",
        "כפרים וטירות קטנות באזור",
        "צילום טבע ונוף"
      ],
      "fit": "מתאים לטבע, הליכה וצילום. פחות מתאים ליום גשם או למי שלא רוצה לוגיסטיקת רכב.",
      "tip": "ברכב זה הרבה יותר נוח; בתחבורה ציבורית לבדוק היטב נקודת התחלה וסיום."
    },
    "en": {
      "why": "Bohemian Paradise is for real nature: sandstone rocks, forests, trails and viewpoints. It swaps Prague streets for classic Czech hiking scenery.",
      "see": [
        "Tall sandstone formations",
        "Forest paths and viewpoints",
        "Villages and small castles nearby",
        "Nature and landscape photography"
      ],
      "fit": "Best for nature, walking and photos. Less good in rain or without car planning.",
      "tip": "A car makes it much easier; public transport needs careful start/end planning."
    }
  },
  "Křivoklát Castle": {
    "he": {
      "why": "קריבוקלאט היא טירת יער עתיקה עם תחושה מחוספסת ופחות תיירותית. מגיעים בשביל טירה, יער ואווירת ימי־ביניים שקטה יותר מהמסלולים הקלאסיים.",
      "see": [
        "טירה מעל אזור מיוער",
        "חצרות וחומות",
        "סיור פנימי אם פתוח",
        "נוף כפרי סביב הטירה"
      ],
      "fit": "מתאים לחובבי טירות שרוצים משהו פחות צפוי. פחות מתאים למי שרוצה מרכז עיר וחיי קפה.",
      "tip": "לבדוק שעות פתיחה — טירות מחוץ לעיר לא תמיד פתוחות כמו אתרי מרכז פראג."
    },
    "en": {
      "why": "Křivoklát is an old forest castle with a rougher, less touristy feeling. Go for castle, woods and a quieter medieval atmosphere.",
      "see": [
        "Castle above wooded landscape",
        "Courtyards and walls",
        "Interior tour if open",
        "Countryside around the castle"
      ],
      "fit": "Good for castle lovers seeking a less obvious choice. Less for café-city travelers.",
      "tip": "Check opening hours; countryside castles do not always operate like central Prague sights."
    }
  },
  "Mělník": {
    "he": {
      "why": "מלניק היא עיר קטנה מעל מפגש נהרות האלבה והוולטאבה, עם יין, טירה ותצפית. זו בחירה טובה לטיול קצר יותר, רגוע ופחות מתיש.",
      "see": [
        "תצפית מפגש הנהרות",
        "הטירה מבחוץ/סיור אם פתוח",
        "מרכז קטן ושקט",
        "אפשרות יין מקומי"
      ],
      "fit": "מתאים ליום רגוע, זוגות ותצפית. פחות מתאים למי שמחפש אתר ענק.",
      "tip": "לשלב עם עצירת אוכל/קפה; הערך הוא הקצב האיטי ולא ריצה בין אטרקציות."
    },
    "en": {
      "why": "Mělník is a small town above the meeting of the Elbe and Vltava rivers, with wine, a castle and a viewpoint. A calmer shorter trip.",
      "see": [
        "River confluence viewpoint",
        "Castle exterior/tour if open",
        "Small quiet center",
        "Local wine angle"
      ],
      "fit": "Good for a relaxed day, couples and views. Less for travelers seeking a major attraction.",
      "tip": "Pair it with food/coffee; its value is slow pace, not many big sights."
    }
  },
  "Poděbrady": {
    "he": {
      "why": "פודייבראדי היא עיירת ספא שטוחה ונעימה עם פארקים, טיילת ומים מינרליים. היא מתאימה כשלא רוצים דרמה — רק יום רגוע ונוח מחוץ לפראג.",
      "see": [
        "טיילת ופארקים",
        "אווירת ספא רגועה",
        "מרכז קטן ונוח",
        "טעימת מים מינרליים אם מתאים"
      ],
      "fit": "מתאים ליום קל, הליכה רגועה ומנוחה. פחות מתאים למי שמחפש יעד “וואו”.",
      "tip": "טוב במיוחד אם רוצים להוריד קצב אחרי ימים עמוסים בפראג."
    },
    "en": {
      "why": "Poděbrady is a flat, pleasant spa town with parks, promenade and mineral-water culture. Choose it for an easy, calm day rather than drama.",
      "see": [
        "Promenade and parks",
        "Relaxed spa-town mood",
        "Small walkable center",
        "Mineral-water tasting if you like"
      ],
      "fit": "Good for an easy walk and slow day. Less for a wow-factor trip.",
      "tip": "Use it when you need a slower day after intense Prague sightseeing."
    }
  },
  "Tábor": {
    "he": {
      "why": "טאבור היא עיר היסטורית עם עבר הוסיטי, סמטאות ותחושה צ׳כית מקומית. היא טובה למי שרוצה עיר פחות צפויה מקוטנה הורה או קרלובי וארי.",
      "see": [
        "כיכר ומרכז עתיק",
        "סמטאות ומבנים היסטוריים",
        "הקשר לתנועה ההוסיטית",
        "אפשרות למוזיאון/מנהרות אם זמינים"
      ],
      "fit": "מתאים להיסטוריה, עיר שקטה וצילום. פחות מתאים למי שמחפש אטרקציות גדולות.",
      "tip": "כדאי לקרוא קצת על ההוסיטים לפני ההגעה; זה מוסיף משמעות לעיר."
    },
    "en": {
      "why": "Tábor is a historic town with Hussite roots, lanes and a local Czech feel. It is a less obvious alternative to Kutná Hora or Karlovy Vary.",
      "see": [
        "Old square and historic center",
        "Lanes and old buildings",
        "Hussite movement context",
        "Museum/underground options if available"
      ],
      "fit": "Good for history, quiet town walks and photos. Less for major attractions.",
      "tip": "Read a little about the Hussites before going; it adds meaning."
    }
  },
  "České Budějovice": {
    "he": {
      "why": "צ׳סקה בודייוביצה היא עיר דרומית עם כיכר ענקית ובירת Budvar. היא מתאימה לשילוב של עיר, בירה וקצב רגוע — במיוחד אם ממשיכים דרומה.",
      "see": [
        "כיכר Přemysl Otakar II",
        "מבשלת Budvar אם עושים סיור",
        "מרכז העיר",
        "אוכל ובירה מקומית"
      ],
      "fit": "מתאים לחובבי בירה ועיר דרומית רגועה. פחות חזק כיעד יחיד אם אין הרבה זמן.",
      "tip": "שווה במיוחד אם משלבים עם צ׳סקי קרומלוב או מסלול דרומי."
    },
    "en": {
      "why": "České Budějovice is a southern city with a huge square and Budvar beer. Good for city, beer and a slower southern Czech feel.",
      "see": [
        "Přemysl Otakar II Square",
        "Budvar brewery if touring",
        "City center",
        "Local food and beer"
      ],
      "fit": "Good for beer lovers and a relaxed southern city. Weaker as a single stop if time is tight.",
      "tip": "Works best when combined with Český Krumlov or a southern route."
    }
  },
  "Liberec": {
    "he": {
      "why": "ליברץ נותנת שילוב של עיר צפונית, הר Ještěd ואווירה קרובה להרים. היא מתאימה כשבא לברוח מהמרכז העירוני לאזור יותר הררי.",
      "see": [
        "מרכז ליברץ",
        "הר Ještěd והתצפית אם מגיעים",
        "אדריכלות מקומית",
        "אזור ירוק יותר מצפון לפראג"
      ],
      "fit": "מתאים לתצפית, רכב ותחושת הרים. פחות מתאים אם אין זמן לעלות לאזור Ještěd.",
      "tip": "לבדוק מזג אוויר לפני נסיעה; בעננות חזקה התצפית מאבדת ערך."
    },
    "en": {
      "why": "Liberec combines a northern city with Ještěd mountain and a more mountain-adjacent feeling. Good when you want to escape the city center.",
      "see": [
        "Liberec center",
        "Ještěd mountain/view if you go up",
        "Local architecture",
        "Greener northern setting"
      ],
      "fit": "Good for views, car trips and mountain mood. Less if you cannot reach Ještěd.",
      "tip": "Check weather first; low clouds can ruin the viewpoint value."
    }
  },
  "Český ráj rocks": {
    "he": {
      "why": "סלעי גן העדן הבוהמי הם יעד טבע וצילום: עמודי אבן, שבילי יער ותצפיות. זה לא “עיר לביקור” אלא יציאה אמיתית לשטח.",
      "see": [
        "סלעי אבן חול",
        "שבילי הליכה",
        "תצפיות טבע",
        "אזורי צילום בין היער והסלעים"
      ],
      "fit": "מתאים לרכב, טבע והליכה. פחות מתאים לעגלות, גשם או נעליים לא נוחות.",
      "tip": "להגיע עם נעלי הליכה ומים; זה לא מסלול מדרכה עירוני."
    },
    "en": {
      "why": "The Bohemian Paradise rocks are a nature/photo destination: sandstone towers, forest paths and viewpoints. This is a real outdoor escape, not a town visit.",
      "see": [
        "Sandstone rock formations",
        "Walking trails",
        "Nature viewpoints",
        "Photo spots between forest and rocks"
      ],
      "fit": "Best by car, for nature and walking. Less for strollers, rain or poor shoes.",
      "tip": "Bring walking shoes and water; this is not a city pavement route."
    }
  },
  "Lidice Memorial": {
    "he": {
      "why": "לידיצה היא אתר זיכרון לכפר שנמחק במלחמת העולם השנייה. זו לא עצירת “יופי”, אלא ביקור שמסביר מחיר אנושי, זיכרון והיסטוריה אירופית.",
      "see": [
        "אנדרטת הילדים",
        "אזור הכפר המקורי",
        "המוזיאון והגן",
        "הסיפור ההיסטורי של לידיצה"
      ],
      "fit": "מתאים למי שמחפש עומק, היסטוריה וזיכרון. פחות מתאים כפעילות קלילה לילדים קטנים.",
      "tip": "להגיע בראש שקט ומכבד; זה מקום לעצירה והבנה, לא צילום מהיר."
    },
    "en": {
      "why": "Lidice is a memorial to a village destroyed during World War II. It is not a pretty stop; it is about human cost, memory and European history.",
      "see": [
        "Children’s memorial",
        "Original village area",
        "Museum and garden",
        "The historical story of Lidice"
      ],
      "fit": "Best for travelers seeking depth, history and memory. Not a light family fun stop.",
      "tip": "Arrive with a quiet respectful mindset; this is for understanding, not quick photos."
    }
  },
  "Velká Amerika Quarry": {
    "he": {
      "why": "ולקה אמריקה היא מחצבה עצומה עם מים טורקיז וצוקים, שנראית כמו קניון קטן מחוץ לפראג. הסיבה להגיע היא נוף לא צפוי וצילום, לא עוד רחוב עתיק.",
      "see": [
        "תצפיות מעל המחצבה",
        "צבע המים והצוקים",
        "שבילים קצרים באזור",
        "נוף טבע דרמטי קרוב לפראג"
      ],
      "fit": "מתאים לצילום, זוגות וטבע. פחות מתאים ליום גשום או למי שלא רוצה הליכה בשטח.",
      "tip": "לא להניח שמותר לרדת למים או לשחות; לבדוק גישה ובטיחות לפני הגעה."
    },
    "en": {
      "why": "Velká Amerika is a huge quarry with turquoise water and cliffs, like a small canyon outside Prague. Go for unexpected scenery and photos, not another old street.",
      "see": [
        "Viewpoints above the quarry",
        "Turquoise water and cliffs",
        "Short paths nearby",
        "Dramatic nature close to Prague"
      ],
      "fit": "Best for photos, couples and nature. Less in rain or if you avoid rough walking.",
      "tip": "Do not assume you can go down to the water or swim; verify access and safety."
    }
  },
  "Průhonice Park": {
    "he": {
      "why": "פארק פרוהוניצה הוא גן נוף גדול ומטופח סביב טירה, עם שבילים, אגמים, עצים ופריחה עונתית. זה יעד מושלם כשצריך טבע יפהפה בלי נסיעה ארוכה.",
      "see": [
        "שבילים ארוכים בגנים",
        "אגמים ונחלים קטנים",
        "חזית הטירה והפארק",
        "פריחה עונתית ורודודנדרונים בעונה"
      ],
      "fit": "מתאים לזוגות, משפחות, צילום והליכה רגועה. פחות מתאים למי שמחפש עיר או מוזיאון.",
      "tip": "לתת לפארק לפחות שעתיים; הערך הוא שיטוט איטי ולא סימון נקודה."
    },
    "en": {
      "why": "Průhonice Park is a large landscaped park around a château, with paths, lakes, trees and seasonal flowers. Perfect when you want beauty and nature without a long trip.",
      "see": [
        "Long garden paths",
        "Lakes and small streams",
        "Château exterior and park views",
        "Seasonal flowers and rhododendrons"
      ],
      "fit": "Great for couples, families, photos and calm walking. Less for city/museum seekers.",
      "tip": "Give it at least two hours; the value is slow wandering, not a quick checkmark."
    }
  },
  "Sázava Monastery": {
    "he": {
      "why": "מנזר סאזאבה הוא יעד שקט ליד נהר, עם היסטוריה דתית וצ׳כית עמוקה יותר מהמסלול התיירותי הרגיל. מתאים למי שרוצה יום איטי ומשמעותי.",
      "see": [
        "המנזר והכנסייה",
        "נהר סאזאבה והאזור הירוק",
        "סיפור דתי־היסטורי מקומי",
        "הליכה שקטה בסביבה"
      ],
      "fit": "מתאים להיסטוריה, שקט ונוף נהר. פחות מתאים למי שמחפש אטרקציה גדולה.",
      "tip": "לשלב עם עצירה ליד הנהר או קפה; לא למהר לחזור מיד אחרי הביקור."
    },
    "en": {
      "why": "Sázava Monastery is a quiet riverside historical stop with deeper Czech religious context than the usual tourist route. Good for a slow meaningful day.",
      "see": [
        "Monastery and church",
        "Sázava river and green surroundings",
        "Local religious history",
        "Quiet walking nearby"
      ],
      "fit": "Good for history, quiet and river scenery. Less for a big attraction day.",
      "tip": "Pair it with a riverside pause or coffee; do not rush back immediately."
    }
  },
  "Lokál Dlouhááá": {
    "he": {
      "why": "פאב־מסעדה צ׳כי קלאסי עם בירה טרייה ואוכל פשוט שמבוצע טוב. מומלץ כשאתה רוצה להבין מה זה אוכל צ׳כי יומיומי בלי להיכנס למלכודת תיירים יקרה.",
      "see": [
        "גולאש, שניצל או נקניקיות",
        "בירה פילזנר טרייה",
        "אווירת אולם בירה תוססת",
        "שירות מהיר יחסית למרכז"
      ],
      "fit": "מתאים לארוחת צהריים או ערב ראשון בפראג. פחות מתאים לדייט רומנטי שקט.",
      "tip": "להגיע מחוץ לשעות עומס או להזמין; המקום פופולרי מאוד."
    },
    "en": {
      "why": "Classic Czech pub-restaurant with fresh beer and simple comfort food done well. Good when you want everyday Czech food without an expensive tourist trap.",
      "see": [
        "Goulash, schnitzel or sausages",
        "Fresh Pilsner beer",
        "Lively beer-hall atmosphere",
        "Relatively fast central meal"
      ],
      "fit": "Good for lunch or a first Prague dinner. Not for a quiet romantic date.",
      "tip": "Go off-peak or reserve; it is popular."
    }
  },
  "Naše Maso": {
    "he": {
      "why": "ביסטרו קצבים קטן לאוהבי בשר. הסיבה להגיע היא איכות חומרי גלם ומהירות: כריך, המבורגר או נקניקייה טובים בלי ארוחה ארוכה.",
      "see": [
        "דלפק קצבים",
        "המבורגר/נקניקיות/כריכי בשר",
        "אכילה קצרה במקום",
        "תחושת אוכל רחוב איכותי"
      ],
      "fit": "מתאים להפסקת בשר מהירה. פחות מתאים לצמחונים או לארוחה משפחתית ארוכה.",
      "tip": "לבוא כשלא צריך לשבת הרבה; המקום קטן והחוויה קצרה."
    },
    "en": {
      "why": "Small butcher bistro for meat lovers. Go for quality ingredients and a quick focused bite, not a long meal.",
      "see": [
        "Butcher counter",
        "Burger/sausages/meat sandwiches",
        "Short meal on site",
        "Quality street-food feeling"
      ],
      "fit": "Best for a quick meat stop. Not for vegetarians or long family meals.",
      "tip": "Come when you do not need a long sit-down experience."
    }
  },
  "Kantýna": {
    "he": {
      "why": "מקדש בשר מודרני בחלל גדול ותוסס. בוחרים נתחים בדלפק והחוויה מרגישה כמו שילוב של קצבייה, בר ומסעדה.",
      "see": [
        "נתחי בשר לפי בחירה",
        "אווירה רועשת וחיה",
        "בירה ותוספות פשוטות",
        "חלל גדול ומעוצב"
      ],
      "fit": "מתאים לחובבי בשר וקבוצות. פחות מתאים לערב שקט או צמחוני.",
      "tip": "לבדוק במקום איך שיטת ההזמנה עובדת; זה חלק מהחוויה."
    },
    "en": {
      "why": "A modern meat temple in a lively hall. You choose cuts at the counter, and the experience feels like butcher shop, bar and restaurant combined.",
      "see": [
        "Meat cuts by choice",
        "Loud lively atmosphere",
        "Beer and simple sides",
        "Large designed room"
      ],
      "fit": "Best for meat lovers and groups. Less for quiet dinners or vegetarians.",
      "tip": "Understand the ordering system; it is part of the experience."
    }
  },
  "Havelská Koruna": {
    "he": {
      "why": "קפיטריה צ׳כית פשוטה וזולה במרכז. לא מגיעים בשביל עיצוב, אלא בשביל אוכל מקומי מהיר וזול כשלא רוצים לשלם מחיר תיירותי.",
      "see": [
        "מנות צ׳כיות בסיסיות",
        "הגשה מהירה בסגנון קפיטריה",
        "מחירים נמוכים יחסית",
        "תחושה פונקציונלית מאוד"
      ],
      "fit": "מתאים לתקציב נמוך וארוחה מהירה. לא מתאים לאירוע או דייט.",
      "tip": "להבין שזה מקום שימושי ולא “חוויה קולינרית” מפוארת."
    },
    "en": {
      "why": "A simple budget Czech cafeteria in the center. You go for fast local food at fair prices, not design or romance.",
      "see": [
        "Basic Czech dishes",
        "Fast cafeteria-style service",
        "Relatively low prices",
        "Very functional atmosphere"
      ],
      "fit": "Good for low budget and quick food. Not for an occasion or date.",
      "tip": "Treat it as practical food, not a fancy culinary experience."
    }
  },
  "Sisters Bistro": {
    "he": {
      "why": "ביסטרו קטן שמתמחה בכריכים פתוחים צ׳כיים – chlebíčky. מומלץ כעצירה קלה שמרגישה מקומית יותר מסנדוויץ׳ רגיל.",
      "see": [
        "כריכים פתוחים צבעוניים",
        "מנות קטנות וקלות",
        "אופציה לצהריים זריזים",
        "טעמים צ׳כיים בצורה מודרנית"
      ],
      "fit": "מתאים לנשנוש, צהריים קלים או עצירה בין אתרים. פחות מתאים לרעב גדול.",
      "tip": "לבחור כמה סוגים שונים ולשתף; זה כל הכיף."
    },
    "en": {
      "why": "Small bistro focused on Czech open-faced sandwiches, chlebíčky. Great for a light local stop that feels more interesting than a normal sandwich.",
      "see": [
        "Colorful open-faced sandwiches",
        "Small light portions",
        "Quick lunch option",
        "Modern take on Czech flavors"
      ],
      "fit": "Good for snacks, light lunch or between sights. Less for big hunger.",
      "tip": "Choose several kinds and share; variety is the point."
    }
  },
  "Mincovna": {
    "he": {
      "why": "מסעדה צ׳כית מודרנית בכיכר מרכזית, טובה כשצריך מקום ברור, נגיש ומסודר לאוכל מקומי בלי להמר יותר מדי.",
      "see": [
        "מנות צ׳כיות קלאסיות בגישה מודרנית",
        "מיקום מרכזי מאוד",
        "אווירה מסודרת יותר מפאב",
        "אפשרות טובה לקבוצה"
      ],
      "fit": "מתאים לארוחה נוחה במרכז. פחות אותנטי מפאב שכונתי קטן.",
      "tip": "טוב כשאתה באזור Old Town ורוצה בחירה בטוחה יחסית."
    },
    "en": {
      "why": "Modern Czech restaurant in a central location, useful when you need an easy, reliable local-food decision without gambling.",
      "see": [
        "Classic Czech dishes with a modern approach",
        "Very central location",
        "More polished than a pub",
        "Good group option"
      ],
      "fit": "Good for a convenient central meal. Less local than a small neighborhood pub.",
      "tip": "Use it when you are near Old Town and need a safer choice."
    }
  },
  "U Parlamentu": {
    "he": {
      "why": "מסעדה צ׳כית קז׳ואלית ליד המרכז עם מנות מקומיות ובירה. היא טובה כשמחפשים אוכל צ׳כי נגיש בלי אווירת Fine Dining.",
      "see": [
        "מנות בשר/גולאש/כופתאות",
        "בירה צ׳כית",
        "אווירה קז׳ואלית",
        "מיקום נוח להמשך טיול"
      ],
      "fit": "מתאים לארוחה מקומית פשוטה. פחות מתאים למי שמחפש מטבח יצירתי.",
      "tip": "לבדוק עומס; מקומות כאלה מתמלאים מהר בערב."
    },
    "en": {
      "why": "Casual Czech restaurant near the center with local dishes and beer. Good when you want accessible Czech food without fine dining.",
      "see": [
        "Meat/goulash/dumpling dishes",
        "Czech beer",
        "Casual atmosphere",
        "Convenient for continuing your route"
      ],
      "fit": "Good for simple local food. Less for creative cuisine seekers.",
      "tip": "Check crowds; places like this fill quickly in the evening."
    }
  },
  "Luka Lu": {
    "he": {
      "why": "מסעדה בלקנית צבעונית ושמחה, שונה מאוד מהמטבח הצ׳כי הכבד. מומלצת כשבא לך אוכל חם, מתובל ואווירה ביתית־חגיגית.",
      "see": [
        "מנות בלקניות",
        "עיצוב צבעוני מאוד",
        "אווירה חמה ולא פורמלית",
        "מקום שמתאים לערב קליל"
      ],
      "fit": "מתאים לזוגות וחברים שרוצים שינוי מטבח. פחות מתאים למי שמחפש צ׳כי מסורתי.",
      "tip": "להגיע כשבא לכם משהו עם אופי, לא עוד מסעדה ניטרלית."
    },
    "en": {
      "why": "A colorful Balkan restaurant that feels very different from heavier Czech food. Good for warm, seasoned dishes and a friendly festive mood.",
      "see": [
        "Balkan dishes",
        "Very colorful interior",
        "Warm informal atmosphere",
        "Good relaxed evening place"
      ],
      "fit": "Good for couples/friends wanting a cuisine change. Not for traditional Czech food.",
      "tip": "Go when you want personality, not a neutral restaurant."
    }
  },
  "Banh Mi Makers": {
    "he": {
      "why": "אופציה וייטנאמית מהירה וזולה יחסית. פראג חזקה באוכל וייטנמי, וזה מקום טוב כשצריך ביס חד, קל וטעים באמצע יום.",
      "see": [
        "Banh mi – כריך וייטנאמי",
        "טעמים רעננים/חריפים/חמצמצים",
        "ארוחה מהירה",
        "מחיר נוח יחסית"
      ],
      "fit": "מתאים לצהריים מהירים או הפסקה באמצע מסלול. פחות מתאים לארוחה ארוכה.",
      "tip": "מעולה כשנמאס מאוכל כבד ורוצים משהו קל יותר."
    },
    "en": {
      "why": "Fast, relatively cheap Vietnamese option. Prague has strong Vietnamese food, and this works well for a sharp, fresh bite mid-day.",
      "see": [
        "Banh mi Vietnamese sandwich",
        "Fresh/spicy/tangy flavors",
        "Quick meal",
        "Good value"
      ],
      "fit": "Best for quick lunch or route break. Less for a long dinner.",
      "tip": "Great when heavy food becomes too much and you want something lighter."
    }
  },
  "Café Louvre": {
    "he": {
      "why": "בית קפה היסטורי בסגנון אירופי קלאסי, עם תחושה של פראג הישנה. זה מקום טוב לקפה, עוגה או ארוחה קלה כשבא לשבת במקום עם עבר ואופי.",
      "see": [
        "חלל קפה קלאסי",
        "קפה וקינוחים",
        "מנות צ׳כיות/אירופיות קלות",
        "אווירת מוסד ותיק"
      ],
      "fit": "מתאים להפסקה רגועה, זוגות ומשפחות. פחות מתאים לאוכל רחוב מהיר.",
      "tip": "אפשר להגיע רק לקפה ועוגה; לא חייבים ארוחה מלאה."
    },
    "en": {
      "why": "Historic European-style café with an old-Prague feeling. Good for coffee, cake or a light meal in a place with character.",
      "see": [
        "Classic café hall",
        "Coffee and desserts",
        "Light Czech/European dishes",
        "Historic institution atmosphere"
      ],
      "fit": "Good for a calm break, couples and families. Not fast street food.",
      "tip": "It works well just for coffee and cake; no full meal required."
    }
  },
  "Eska Karlín": {
    "he": {
      "why": "מסעדה־מאפייה מודרנית בקרלין שמראה צד צעיר ועכשווי יותר של פראג. מומלצת אם רוצים לצאת מעט מהמרכז ולאכול במקום איכותי ומעוצב.",
      "see": [
        "לחם ומאפים איכותיים",
        "מטבח צ׳כי מודרני",
        "חלל תעשייתי־מעוצב",
        "שכונת Karlín המתחדשת"
      ],
      "fit": "מתאים לבראנץ׳/צהריים איכותיים ולמי שאוהב מקומות עכשוויים.",
      "tip": "שווה לשלב עם סיבוב קצר בקרלין ולא להגיע רק לאכול ולברוח."
    },
    "en": {
      "why": "Modern bakery-restaurant in Karlín showing a younger contemporary Prague. Go when you want to leave the center for a stylish quality meal.",
      "see": [
        "Quality bread and bakery",
        "Modern Czech cooking",
        "Industrial designed space",
        "Karlín neighborhood mood"
      ],
      "fit": "Good for quality brunch/lunch and modern places.",
      "tip": "Pair it with a short Karlín walk, not only a quick food stop."
    }
  },
  "Mr. HotDoG": {
    "he": {
      "why": "מקום קז׳ואלי לנקניקיות ואוכל אמריקאי פשוט, טוב כשלא רוצים ארוחה כבדה. הוא נותן הפסקה קלילה, מהירה ולא יקרה מדי.",
      "see": [
        "Hot dogs והמבורגרים קטנים",
        "אוכל מנחם ומהיר",
        "אווירה לא פורמלית",
        "טוב לעצירה קצרה"
      ],
      "fit": "מתאים לחברים, ילדים וצהריים מהירים. פחות מתאים לארוחה צ׳כית אותנטית.",
      "tip": "בחירה טובה כשצריך אוכל בלי טקס ובלי לשבת שעתיים."
    },
    "en": {
      "why": "Casual hot dog / American comfort food place for when you do not want a heavy meal. Quick, easy and informal.",
      "see": [
        "Hot dogs and small burgers",
        "Fast comfort food",
        "Informal atmosphere",
        "Good short stop"
      ],
      "fit": "Good for friends, kids and quick lunch. Not for authentic Czech cuisine.",
      "tip": "Use it when you need food without ceremony or a two-hour meal."
    }
  },
  "Pho Vietnam Tuan & Lan": {
    "he": {
      "why": "אוכל וייטנאמי זול ומחמם, בעיקר פו ומנות פשוטות. מומלץ ביום קר או כשצריך משהו קל וברור שלא יכביד על המשך הטיול.",
      "see": [
        "קערות פו",
        "מנות וייטנאמיות בסיסיות",
        "מחיר נוח",
        "שירות מהיר יחסית"
      ],
      "fit": "מתאים לארוחה זולה, חמה ומהירה. פחות מתאים לאווירה רומנטית.",
      "tip": "מעולה ביום גשם או כשצריך להתאושש מאוכל כבד."
    },
    "en": {
      "why": "Affordable warming Vietnamese food, especially pho and simple dishes. Great on a cold day or when you need a lighter meal.",
      "see": [
        "Pho bowls",
        "Basic Vietnamese dishes",
        "Good value",
        "Relatively quick service"
      ],
      "fit": "Good for cheap, warm and quick food. Not romantic.",
      "tip": "Excellent on rainy days or after too much heavy food."
    }
  },
  "Manifesto Market": {
    "he": {
      "why": "שוק אוכל מודרני עם כמה דוכנים, מתאים כשלא כולם רוצים אותו דבר. היתרון הוא בחירה, אווירה וקלות — לא מסעדה אחת מחייבת.",
      "see": [
        "דוכני אוכל שונים",
        "שתייה ואווירת ערב",
        "אפשרות לקבוצות",
        "ישיבה לא פורמלית"
      ],
      "fit": "מתאים לקבוצות, ערב קליל והחלטה בלי ויכוחים. פחות מתאים למי שרוצה שירות מסעדה שקט.",
      "tip": "לבדוק איזה מתחם פעיל ושעות פתיחה לפני נסיעה."
    },
    "en": {
      "why": "Modern food market with multiple vendors, useful when everyone wants something different. The value is choice, mood and flexibility.",
      "see": [
        "Different food stalls",
        "Drinks and evening atmosphere",
        "Good for groups",
        "Informal seating"
      ],
      "fit": "Good for groups, casual evenings and easy decisions. Less for quiet table service.",
      "tip": "Check which location/area is active and opening hours before going."
    }
  },
  "U Kroka": {
    "he": {
      "why": "מסעדה שכונתית נעימה ליד Vyšehrad עם אוכל צ׳כי ביתי יותר. מומלץ אם רוצים להתרחק מעט מהמרכז ולקבל ארוחה רגועה יותר.",
      "see": [
        "מנות צ׳כיות ביתיות",
        "אווירה שכונתית",
        "קרבה ל־Vyšehrad",
        "מחירים סבירים יחסית"
      ],
      "fit": "מתאים לשילוב עם טיול בווישהראד. פחות נוח אם אתה רחוק באזור אחר.",
      "tip": "לבנות סביב זה מסלול: Vyšehrad ואז ארוחה, או להפך."
    },
    "en": {
      "why": "Pleasant neighborhood restaurant near Vyšehrad with homier Czech food. Good when you want to step outside the busiest center for a calmer meal.",
      "see": [
        "Homestyle Czech dishes",
        "Neighborhood atmosphere",
        "Near Vyšehrad",
        "Reasonable value"
      ],
      "fit": "Best combined with Vyšehrad. Less convenient if you are far away.",
      "tip": "Build a route: Vyšehrad then meal, or the reverse."
    }
  },
  "Bistro Monk": {
    "he": {
      "why": "ביסטרו/בראנץ׳ מרכזי עם אוכל קל, קפה ואווירה יותר צעירה. טוב לפתוח איתו יום לפני הליכה ארוכה בעיר.",
      "see": [
        "בראנץ׳ וקפה",
        "מנות קלות יחסית",
        "מיקום מרכזי",
        "אווירה מודרנית"
      ],
      "fit": "מתאים לבוקר/צהריים קל. פחות מתאים לארוחת ערב כבדה.",
      "tip": "שווה להגיע מוקדם יחסית כדי לא להיתקע בתור."
    },
    "en": {
      "why": "Central bistro/brunch spot with lighter food, coffee and a younger mood. Good for starting a walking day.",
      "see": [
        "Brunch and coffee",
        "Relatively light dishes",
        "Central location",
        "Modern atmosphere"
      ],
      "fit": "Good for breakfast/brunch/light lunch. Not for heavy dinner.",
      "tip": "Go relatively early to avoid waiting."
    }
  },
  "Kuchyň": {
    "he": {
      "why": "מסעדה צ׳כית עם נוף באזור הטירה, שמצליחה לחבר אוכל מקומי עם אחת הסביבות היפות בעיר. היתרון הוא לא רק הצלחת, אלא המיקום.",
      "see": [
        "אוכל צ׳כי",
        "אזור טירת פראג",
        "נוף/אווירה לפי ישיבה",
        "תחושת ארוחה מיוחדת יותר"
      ],
      "fit": "מתאים אחרי ביקור בטירה או לערב יפה. פחות מתאים לתקציב נמוך מאוד.",
      "tip": "לנסות לשלב עם מסלול טירה; לא לנסוע במיוחד אם לא באזור."
    },
    "en": {
      "why": "Czech restaurant near the castle that connects local food with one of the city’s strongest settings. The value is food plus location.",
      "see": [
        "Czech food",
        "Prague Castle area",
        "View/atmosphere depending on seating",
        "More special meal feeling"
      ],
      "fit": "Good after a castle visit or for a scenic evening. Less for very low budget.",
      "tip": "Pair it with a castle route rather than crossing town only for it."
    }
  },
  "Maitrea": {
    "he": {
      "why": "מסעדה צמחונית ליד העיר העתיקה עם תפריט אסייתי־אירופי ועיצוב רגוע. היא טובה גם ללא־צמחונים כשצריך הפסקה מאוכל צ׳כי כבד.",
      "see": [
        "מנות קארי/נודלס/המבורגר צמחוני",
        "חלל רגוע בסגנון זן",
        "אופציה קלה במרכז",
        "אוכל שמתאים גם לזוגות"
      ],
      "fit": "מתאים לצמחונים, זוגות וארוחה רגועה. פחות למי שמחפש גולאש ובירה.",
      "tip": "מומלץ כשמרגישים עומס מהעיר העתיקה וצריך מקום שקט יחסית."
    },
    "en": {
      "why": "Vegetarian restaurant near Old Town with Asian-European dishes and a calm interior. It also works for non-vegetarians needing a break from heavy Czech food.",
      "see": [
        "Curry/noodle/vegetarian burger style dishes",
        "Calm Zen-like interior",
        "Light central option",
        "Good for couples too"
      ],
      "fit": "Good for vegetarians, couples and calmer meals. Not for goulash-and-beer mood.",
      "tip": "Use it as a quieter break from Old Town crowds."
    }
  },
  "Kavárna co hledá jméno": {
    "he": {
      "why": "בית קפה צעיר באזור פחות תיירותי, עם תחושת שכונה יצירתית. מומלץ כשבא לצאת מהמסלול המרכזי לקפה, בראנץ׳ ואווירה מקומית יותר.",
      "see": [
        "קפה ובראנץ׳",
        "עיצוב צעיר ולא פורמלי",
        "אזור Smíchov/Anděl",
        "קהל מקומי יותר"
      ],
      "fit": "מתאים לקפה ארוך, עבודה קלה או בראנץ׳. פחות מתאים אם אתה רוצה אתר תיירות ליד.",
      "tip": "טוב לשלב עם יום פחות צפוף או מעבר באזור אנדל."
    },
    "en": {
      "why": "Young café in a less touristy area with a creative neighborhood feeling. Good for coffee, brunch and a more local mood.",
      "see": [
        "Coffee and brunch",
        "Young informal design",
        "Smíchov/Anděl area",
        "More local crowd"
      ],
      "fit": "Good for long coffee, light work or brunch. Less if you need sights next door.",
      "tip": "Pair it with a slower day or when passing through Anděl."
    }
  },
  "Bakeshop Praha": {
    "he": {
      "why": "מאפייה/קפה מרכזית שמתאימה לעצירת מתוק, מאפה או כריך קל. לא יעד קולינרי עמוק, אבל שימושי מאוד בין אתרים.",
      "see": [
        "מאפים ועוגות",
        "קפה ומשהו מהיר",
        "מיקום מרכזי",
        "אופציה לקחת לדרך"
      ],
      "fit": "מתאים להפסקת בוקר או מתוק. פחות לארוחה אמיתית.",
      "tip": "טוב כשצריך משהו מהיר לפני גשר קארל/העיר העתיקה."
    },
    "en": {
      "why": "Central bakery/café for pastries, sweets or a light sandwich. Not a deep culinary destination, but very practical between sights.",
      "see": [
        "Pastries and cakes",
        "Coffee and quick bites",
        "Central location",
        "Take-away option"
      ],
      "fit": "Good for a morning or sweet stop. Less for a real meal.",
      "tip": "Useful before/after Old Town or Charles Bridge routes."
    }
  },
  "Letná Beer Garden": {
    "he": {
      "why": "גן בירה פתוח מעל הנהר עם אחת התצפיות היפות על פראג. לא באים בשביל תפריט מורכב, אלא בשביל בירה, אוויר פתוח ושקיעה מעל הגשרים.",
      "see": [
        "בירה באוויר פתוח",
        "תצפית על הגשרים והעיר",
        "אווירה לא מתאמצת",
        "אפשרות לשלב עם פארק לטנה"
      ],
      "fit": "מתאים לשקיעה, חברים וערב רגוע. פחות מתאים ליום גשם או קוקטיילים רציניים.",
      "tip": "להגיע לפני השקיעה ולתפוס מקום עם נוף."
    },
    "en": {
      "why": "Open-air beer garden above the river with one of Prague’s great views. You come for beer, air and sunset, not a complex menu.",
      "see": [
        "Beer outdoors",
        "Views over bridges and the city",
        "Relaxed unpretentious mood",
        "Can pair with Letná Park"
      ],
      "fit": "Good for sunset, friends and a relaxed evening. Not for rain or serious cocktails.",
      "tip": "Arrive before sunset to get a better view spot."
    }
  },
  "Náplavka Riverside": {
    "he": {
      "why": "טיילת הנהר שמתעוררת בערב עם הליכה, שתייה ואוכל קל. זו בחירה טובה כשלא רוצים מועדון אבל כן רוצים להרגיש את העיר חיה.",
      "see": [
        "הליכה ליד הוולטאבה",
        "ברים/דוכנים עונתיים",
        "אווירת נהר פתוחה",
        "שילוב עם שקיעה או שייט"
      ],
      "fit": "מתאים לערב קליל, זוגות וחברים. פחות מתאים אם רוצים מקום אחד סגור ומובטח.",
      "tip": "מזג אוויר משנה הכול; לבדוק אם יש פעילות באותו ערב."
    },
    "en": {
      "why": "A riverside promenade that comes alive with walking, drinks and light food. Good when you want the city mood without a club.",
      "see": [
        "Walk along the Vltava",
        "Seasonal bars/stalls",
        "Open river atmosphere",
        "Pairs with sunset or cruise"
      ],
      "fit": "Good for casual evenings, couples and friends. Less if you need one guaranteed indoor venue.",
      "tip": "Weather changes everything; check what is happening that night."
    }
  },
  "Hemingway Bar": {
    "he": {
      "why": "בר קוקטיילים אינטימי ומוקפד בהשראת המינגוויי. זה המקום לערב איכותי ושקט יחסית — קוקטיילים, תאורה נמוכה ושירות מקצועי.",
      "see": [
        "קוקטיילים יצירתיים",
        "אווירת בר קלאסי",
        "ישיבה אינטימית",
        "תפריט רום/וויסקי/אבסינת׳"
      ],
      "fit": "מתאים לדייט וחובבי קוקטיילים. פחות מתאים לקבוצות רועשות או תקציב נמוך.",
      "tip": "להזמין מקום מראש; ספונטני עלול להיגמר בהמתנה."
    },
    "en": {
      "why": "An intimate polished cocktail bar inspired by Hemingway. Go for a quality, quieter night: crafted drinks, low light and professional service.",
      "see": [
        "Creative cocktails",
        "Classic bar atmosphere",
        "Intimate seating",
        "Rum/whisky/absinthe angle"
      ],
      "fit": "Best for dates and cocktail lovers. Not for loud groups or low budget.",
      "tip": "Reserve ahead; walk-ins may wait."
    }
  },
  "Anonymous Bar": {
    "he": {
      "why": "בר קוקטיילים תיאטרלי עם אווירה מסתורית ומשחקית. מתאים כשאתה רוצה שהבר עצמו יהיה חלק מהחוויה, לא רק מקום לשתות בו.",
      "see": [
        "קוקטיילים מוגשים בצורה יצירתית",
        "אווירה חשוכה ותיאטרלית",
        "תחושת משחק/סודיות",
        "ערב שמתאים לזוג או חברים"
      ],
      "fit": "מתאים למי שאוהב קונספטים וקוקטיילים. פחות למי שרוצה בירה פשוטה.",
      "tip": "להזמין ולבוא בראש פתוח; חלק מהכיף הוא ההצגה."
    },
    "en": {
      "why": "A theatrical cocktail bar with a mysterious playful mood. Go when you want the bar itself to be part of the experience, not only the drink.",
      "see": [
        "Creative cocktail presentation",
        "Dark theatrical atmosphere",
        "Secret/playful feeling",
        "Good for couples or friends"
      ],
      "fit": "Good for concept-bar and cocktail fans. Less for simple beer drinkers.",
      "tip": "Reserve and come with an open mind; the show is part of it."
    }
  },
  "Dva Kohouti": {
    "he": {
      "why": "מבשלת/בר בירה בקרלין עם תחושה צעירה ומקומית יותר. מומלץ למי שרוצה בירה טובה באזור פחות תיירותי מהעיר העתיקה.",
      "see": [
        "בירות מקומיות",
        "חלל מודרני בקרלין",
        "קהל צעיר יותר",
        "אפשרות לשלב עם אוכל באזור"
      ],
      "fit": "מתאים לחובבי בירה וחברים. פחות לדייט רומנטי שקט.",
      "tip": "לשלב עם סיבוב בקרלין; האזור עצמו חלק מהחוויה."
    },
    "en": {
      "why": "A brewery/bar in Karlín with a younger more local feel. Good when you want quality beer outside the tourist core.",
      "see": [
        "Local beers",
        "Modern Karlín space",
        "Younger crowd",
        "Nearby food options"
      ],
      "fit": "Good for beer lovers and friends. Less for a quiet romantic date.",
      "tip": "Pair it with a Karlín walk; the neighborhood is part of the experience."
    }
  },
  "U Sudu": {
    "he": {
      "why": "בר מרתף גדול ומסועף עם תחושה מחתרתית יותר. נכנסים בשביל אווירת לילה מקומית, חדרים שונים וקצת בלגן טוב.",
      "see": [
        "מרתפים וחדרים שונים",
        "אווירת בר מחוספסת",
        "שתייה לא יוקרתית",
        "תחושה מקומית/סטודנטיאלית"
      ],
      "fit": "מתאים לחברים וערב ספונטני. פחות למי שמחפש אלגנטיות.",
      "tip": "לשמור על חפצים; מקומות צפופים ומרתפיים דורשים תשומת לב."
    },
    "en": {
      "why": "A sprawling cellar bar with a more underground feeling. Go for local night mood, different rooms and a bit of organized chaos.",
      "see": [
        "Cellars and different rooms",
        "Rougher bar atmosphere",
        "Unfussy drinks",
        "Local/student feel"
      ],
      "fit": "Good for friends and spontaneous nights. Not elegant.",
      "tip": "Watch your belongings; crowded cellar spaces require attention."
    }
  },
  "Jazz Dock": {
    "he": {
      "why": "מועדון ג׳אז מודרני על הנהר. זה ערב של מוזיקה חיה, ישיבה ואווירה בוגרת — לא עוד בר שתייה.",
      "see": [
        "הופעות ג׳אז/בלוז/פיוז׳ן",
        "מיקום על הנהר",
        "ישיבה מול במה",
        "תוכנית משתנה לפי ערב"
      ],
      "fit": "מתאים לזוגות וחובבי מוזיקה חיה. פחות מתאים לריקודים.",
      "tip": "לבדוק מי מופיע באותו ערב; הסגנון משתנה מאוד."
    },
    "en": {
      "why": "Modern jazz club by the river. This is a seated live-music evening, not just another drinks bar.",
      "see": [
        "Jazz/blues/fusion concerts",
        "Riverside location",
        "Seated stage venue",
        "Program changes by night"
      ],
      "fit": "Good for couples and live music lovers. Not for dancing.",
      "tip": "Check tonight’s lineup; the style varies a lot."
    }
  },
  "Lucerna Music Bar": {
    "he": {
      "why": "מועדון/בר מוזיקה ותיק במרכז, עם הופעות ומסיבות לפי הערב. מתאים כשבא לילה פעיל יותר, במיוחד אם יש ערב רטרו או הופעה טובה.",
      "see": [
        "רחבת ריקודים",
        "הופעות או מסיבות",
        "קהל מעורב מקומיים ותיירים",
        "מיקום מרכזי"
      ],
      "fit": "מתאים לקבוצות וריקודים. פחות מתאים לערב שקט.",
      "tip": "לבדוק את התוכנית; ערב 80s/90s שונה לגמרי מהופעה חיה."
    },
    "en": {
      "why": "Long-running central music bar with concerts and parties depending on the night. Good for a more active evening, especially retro or live events.",
      "see": [
        "Dance floor",
        "Concerts or parties",
        "Mixed local/visitor crowd",
        "Central location"
      ],
      "fit": "Good for groups and dancing. Not for a quiet night.",
      "tip": "Check the program; an 80s/90s night is very different from a concert."
    }
  },
  "Cross Club": {
    "he": {
      "why": "מועדון אלטרנטיבי עם עיצוב תעשייתי־מכני משוגע. המקום עצמו נראה כמו תפאורת מדע בדיוני — גם לפני שהמוזיקה מתחילה.",
      "see": [
        "עיצוב מתכתי יוצא דופן",
        "מוזיקה אלקטרונית/אלטרנטיבית",
        "חללים מעניינים לצילום",
        "אווירה צעירה ולא מיינסטרים"
      ],
      "fit": "מתאים למי שרוצה פראג אחרת. פחות מתאים למי שמחפש אלגנטי ושקט.",
      "tip": "לבדוק ליינאפ; אם המוזיקה לא הסגנון שלך, המקום עדיין מעניין אבל הערב פחות יעבוד."
    },
    "en": {
      "why": "Alternative club with wild industrial-mechanical design. The venue itself feels like a sci-fi set before the music even starts.",
      "see": [
        "Unusual metal design",
        "Electronic/alternative music",
        "Interesting photo spaces",
        "Young non-mainstream mood"
      ],
      "fit": "Good for a different Prague night. Not for elegant quiet evenings.",
      "tip": "Check the lineup; if the music is not your style, the venue alone may not be enough."
    }
  },
  "BeerGeek Bar": {
    "he": {
      "why": "גן עדן לחובבי בירת קראפט: הרבה ברזים מתחלפים ובירות מכל העולם. זה לא מועדון ולא דייט מפואר — זה מקום לשבת, לטעום ולהבין בירה.",
      "see": [
        "ברזי בירה מתחלפים",
        "סגנונות בירה מגוונים",
        "צוות שיכול להמליץ",
        "אווירה של חובבי בירה"
      ],
      "fit": "מתאים לחובבי בירה וחברים. פחות מתאים למי שרוצה מוזיקה חזקה או קוקטיילים.",
      "tip": "לבקש המלצה לפי טעם: מריר, פירותי, חמצמץ או כהה."
    },
    "en": {
      "why": "A craft-beer paradise with many rotating taps and beers from different places. Not a club or fancy date spot — a place to taste and understand beer.",
      "see": [
        "Rotating beer taps",
        "Many beer styles",
        "Staff recommendations",
        "Beer-lover atmosphere"
      ],
      "fit": "Best for beer lovers and friends. Less for loud music or cocktails.",
      "tip": "Ask for a recommendation by taste: bitter, fruity, sour or dark."
    }
  },
  "Vzorkovna": {
    "he": {
      "why": "בר מחתרתי ומוזר עם חללים גדולים, מוזיקה ואווירה כאוטית־צעירה. זה מקום לחוויה לא מלוטשת, לא לערב אלגנטי.",
      "see": [
        "חללים תת־קרקעיים",
        "מוזיקה ואנשים צעירים",
        "אווירה אלטרנטיבית",
        "תחושת “לא תיירות קלאסית”"
      ],
      "fit": "מתאים לחברים, תרמילאים ואנשים שאוהבים מקומות מוזרים. פחות לזוג שמחפש שקט.",
      "tip": "להגיע בראש פתוח; זה מקום שאוהבים או שלא מבינים בכלל."
    },
    "en": {
      "why": "A weird underground-feeling bar with large spaces, music and chaotic young energy. It is for an unpolished experience, not an elegant night.",
      "see": [
        "Underground-like rooms",
        "Music and young crowd",
        "Alternative atmosphere",
        "Not classic tourism"
      ],
      "fit": "Good for friends, backpacker mood and strange places. Less for quiet couples.",
      "tip": "Come with an open mind; people either love it or do not get it."
    }
  },
  "Roxy Prague": {
    "he": {
      "why": "מועדון ותיק ומרכזי לסצנת אלקטרונית והופעות. מומלץ כשאתה רוצה לילה חזק יותר מבר — מוזיקה, קהל ורחבה.",
      "see": [
        "DJ/הופעות לפי ערב",
        "רחבת ריקודים",
        "סצנה אלקטרונית/אלטרנטיבית",
        "מיקום מרכזי"
      ],
      "fit": "מתאים למי שמחפש מסיבה אמיתית. פחות למי שרוצה ישיבה רגועה.",
      "tip": "לבדוק ליינאפ וכרטיסים; הערב נקבע לפי מי שמופיע."
    },
    "en": {
      "why": "A long-running central club for electronic music and shows. Go when you want a stronger night than a bar: music, crowd and dance floor.",
      "see": [
        "DJ/live program by night",
        "Dance floor",
        "Electronic/alternative scene",
        "Central location"
      ],
      "fit": "Good for real clubbing. Less for seated drinks.",
      "tip": "Check lineup and tickets; the night depends on the act."
    }
  },
  "Aloha Wave Lounge": {
    "he": {
      "why": "בר/לאונג׳ עם אווירת קוקטיילים קלילה וטרופית יותר. מתאים כפתיחת ערב או מקום לשתייה בלי להיכנס מיד למועדון כבד.",
      "see": [
        "קוקטיילים",
        "אווירה צבעונית/טרופית",
        "ישיבה לא פורמלית",
        "אפשרות להתחיל ערב"
      ],
      "fit": "מתאים לחברים וערב קליל. פחות למי שמחפש בר קוקטיילים רציני מאוד.",
      "tip": "טוב כתחנה ראשונה לפני המשך לילה במקום אחר."
    },
    "en": {
      "why": "A lighter tropical-style cocktail lounge. Useful as a first stop or drinks place before a heavier club night.",
      "see": [
        "Cocktails",
        "Colorful/tropical mood",
        "Informal seating",
        "Good early-evening stop"
      ],
      "fit": "Good for friends and casual drinks. Less for serious cocktail purists.",
      "tip": "Works well as the first stop before moving on."
    }
  },
  "Black Angel’s Bar": {
    "he": {
      "why": "בר קוקטיילים אלגנטי במרתף עם אווירה קלאסית ודרמטית. מגיעים בשביל תחושת speakeasy, לא בשביל רעש ומסיבה.",
      "see": [
        "קוקטיילים מוקפדים",
        "חלל מרתף אלגנטי",
        "תאורה נמוכה",
        "אווירה רומנטית/קלאסית"
      ],
      "fit": "מתאים לדייט וקוקטיילים. פחות מתאים לקבוצה רועשת.",
      "tip": "להתלבש קצת יותר מסודר ולבדוק אם צריך הזמנה."
    },
    "en": {
      "why": "Elegant cellar cocktail bar with a classic dramatic mood. Go for a speakeasy feeling, not noise and partying.",
      "see": [
        "Craft cocktails",
        "Elegant cellar room",
        "Low lighting",
        "Romantic/classic atmosphere"
      ],
      "fit": "Good for dates and cocktails. Less for loud groups.",
      "tip": "Dress a bit smarter and check if reservation is needed."
    }
  },
  "Cobra Bar": {
    "he": {
      "why": "בר שכונתי־צעיר באזור Letná/Holešovice עם אוכל קל, שתייה ואווירה מקומית. טוב כשמחפשים ערב פחות תיירותי.",
      "see": [
        "קוקטיילים/בירה",
        "אווירה צעירה ולא פורמלית",
        "אפשרות אוכל קל",
        "קהל מקומי יותר"
      ],
      "fit": "מתאים לערב רגוע עם חברים. פחות מתאים למסיבה גדולה.",
      "tip": "שווה לשלב עם Letná אם אתם באזור."
    },
    "en": {
      "why": "Young neighborhood-style bar around Letná/Holešovice with drinks, light food and local mood. Good for a less touristy evening.",
      "see": [
        "Cocktails/beer",
        "Young informal atmosphere",
        "Light food option",
        "More local crowd"
      ],
      "fit": "Good for relaxed drinks with friends. Less for big clubbing.",
      "tip": "Pair it with Letná if you are nearby."
    }
  },
  "M1 Lounge": {
    "he": {
      "why": "לאונג׳/מועדון במרכז עם אווירה יותר נוצצת ותיירותית. מתאים אם רוצים מוזיקה, ריקודים ולילה קל להבנה בלי לחפש סצנה מקומית מורכבת.",
      "see": [
        "מוזיקה וריקודים",
        "אווירת לאונג׳/מועדון",
        "קהל בינלאומי",
        "מיקום מרכזי"
      ],
      "fit": "מתאים לקבוצות וחברים שרוצים מסיבה פשוטה. פחות למי שמחפש מקומי ואותנטי.",
      "tip": "לבדוק ביקורות עדכניות וכניסה; מקומות כאלה משתנים לפי ערב."
    },
    "en": {
      "why": "Central lounge/club with a glossier international mood. Good for music, dancing and an easy-to-understand night out.",
      "see": [
        "Music and dancing",
        "Lounge/club atmosphere",
        "International crowd",
        "Central location"
      ],
      "fit": "Good for groups wanting a simple party. Less for local authenticity.",
      "tip": "Check current reviews and entry conditions; nights vary."
    }
  },
  "Karlovy Lázně": {
    "he": {
      "why": "מועדון גדול ומאוד תיירותי ליד גשר קארל, עם כמה קומות וסגנונות מוזיקה. לא הכי מקומי, אבל ברור מאוד למי שרוצה מסיבה פשוטה.",
      "see": [
        "כמה קומות",
        "סגנונות מוזיקה שונים",
        "קהל צעיר ובינלאומי",
        "מיקום ליד גשר קארל"
      ],
      "fit": "מתאים לצעירים וקבוצות. פחות למי שמחפש איכות מקומית או בר שקט.",
      "tip": "להגיע עם ציפייה נכונה: זה מועדון תיירותי גדול, לא סוד מקומי."
    },
    "en": {
      "why": "A large, very touristy club near Charles Bridge with multiple floors and music styles. Not local, but very clear for a straightforward party.",
      "see": [
        "Multiple floors",
        "Different music styles",
        "Young international crowd",
        "Near Charles Bridge"
      ],
      "fit": "Good for young groups. Less for local quality or quiet bars.",
      "tip": "Set expectations: it is a big tourist club, not a local secret."
    }
  },
  "Duplex Rooftop": {
    "he": {
      "why": "רופטופ־מועדון בכיכר ואצלב, משלב נוף עירוני עם לילה נוצץ יותר. מגיעים בשביל מיקום, קהל ותמונה של ערב “גדול”.",
      "see": [
        "רופטופ ונוף עירוני",
        "מוזיקה/מסיבה לפי ערב",
        "קהל בינלאומי",
        "אווירה יותר יוקרתית"
      ],
      "fit": "מתאים לערב לבוש יותר וקבוצות. פחות למי שרוצה מקום זול.",
      "tip": "לבדוק קוד לבוש/אירוע; רופטופים משתנים מאוד לפי ערב."
    },
    "en": {
      "why": "Rooftop club on Wenceslas Square combining city views with a glossier night. Go for location, crowd and a bigger-night feeling.",
      "see": [
        "Rooftop city view",
        "Music/party by night",
        "International crowd",
        "More upscale mood"
      ],
      "fit": "Good for dressed-up evenings and groups. Less for low budget.",
      "tip": "Check dress code/event; rooftops vary heavily by night."
    }
  },
  "Chapeau Rouge": {
    "he": {
      "why": "מקום רב־קומתי במרכז עם ברים, הופעות ומוזיקה. זה פתרון טוב כשקבוצה לא בטוחה איזה סגנון ערב היא רוצה.",
      "see": [
        "כמה קומות/חללים",
        "ברים ומוזיקה",
        "אפשרות להופעות או DJ",
        "אווירה מעורבת ותוססת"
      ],
      "fit": "מתאים לחברים ולערב גמיש. פחות מתאים למי שרוצה קוקטיילים שקטים.",
      "tip": "לבדוק מה קורה בכל קומה; החוויה משתנה בתוך אותו מקום."
    },
    "en": {
      "why": "Multi-level central venue with bars, music and events. Useful when a group is not sure what kind of night it wants.",
      "see": [
        "Several floors/rooms",
        "Bars and music",
        "Possible live/DJ events",
        "Mixed lively atmosphere"
      ],
      "fit": "Good for friends and flexible nights. Less for quiet cocktails.",
      "tip": "Check what is happening on each floor; the experience changes inside the venue."
    }
  },
  "Kasárna Karlín": {
    "he": {
      "why": "מתחם תרבותי בחצר גדולה בקרלין, עם בר, אירועים ואווירה קהילתית. זה לא “בר רגיל” אלא מקום לשבת, להסתובב ולהרגיש שכונה.",
      "see": [
        "חצר פתוחה",
        "בר ואירועים משתנים",
        "קהל מקומי/יצירתי",
        "אווירה קהילתית יותר"
      ],
      "fit": "מתאים לערב רגוע, תרבות וחברים. פחות למסיבה כבדה.",
      "tip": "לבדוק אירועים באותו יום; לפעמים המקום חי מאוד ולפעמים רגוע."
    },
    "en": {
      "why": "Cultural courtyard venue in Karlín with bar, events and community mood. Not a normal bar — a place to sit, wander and feel the neighborhood.",
      "see": [
        "Open courtyard",
        "Changing bar/events",
        "Local/creative crowd",
        "Community atmosphere"
      ],
      "fit": "Good for relaxed evenings, culture and friends. Less for heavy clubbing.",
      "tip": "Check same-day events; it can be lively or very calm."
    }
  },
  "Vltava River Cruise": {
    "he": {
      "why": "שייט בוולטאבה נותן את פראג מזווית שלא רואים בהליכה: הגשרים, הטירה והעיר העתיקה נפתחים מהמים בקצב רגוע. זו חוויה טובה במיוחד כשעייפים אבל רוצים לראות משהו משמעותי.",
      "see": [
        "גשר קארל מהמים",
        "טירת פראג מעל הנהר",
        "אי קמפה והגדה ההיסטורית",
        "אור שקיעה על העיר אם בוחרים שעה נכונה"
      ],
      "fit": "מתאים לזוגות, משפחות ופעם ראשונה בפראג. פחות למי שמחפש אדרנלין.",
      "tip": "שעה לפני שקיעה בדרך כלל נותנת את החוויה היפה ביותר."
    },
    "en": {
      "why": "A Vltava cruise shows Prague from an angle walking cannot: bridges, castle and Old Town opening from the water at a calm pace.",
      "see": [
        "Charles Bridge from the water",
        "Prague Castle above the river",
        "Kampa Island and historic banks",
        "Sunset light if timed well"
      ],
      "fit": "Good for couples, families and first-time visitors. Less for adrenaline seekers.",
      "tip": "About an hour before sunset is usually the strongest experience."
    }
  },
  "Petřín Hill Viewpoint": {
    "he": {
      "why": "פטרין היא גבעה ירוקה ורומנטית מעל העיר, עם נוף לגגות, לטירה ולנהר. הסיבה לעלות היא אווירה ותצפית, לא רק עוד נקודת צילום.",
      "see": [
        "שבילים בגבעה",
        "תצפיות על פראג",
        "מגדל פטרין מבחוץ/מבפנים אם פתוח",
        "שקיעה מעל העיר"
      ],
      "fit": "מתאים לזוגות, צילום והפסקה ירוקה. פחות מתאים למי שלא רוצה עליות.",
      "tip": "הרכבל עשוי להיות סגור בתקופות שיפוץ; לבדוק לפני ולתכנן הליכה/חשמלית."
    },
    "en": {
      "why": "Petřín is a green romantic hill above the city with views over roofs, castle and river. Go for mood and panorama, not just a photo.",
      "see": [
        "Hill paths",
        "Views over Prague",
        "Petřín Tower if open",
        "Sunset over the city"
      ],
      "fit": "Good for couples, photos and a green break. Less for travelers avoiding uphill walking.",
      "tip": "The funicular may be closed during renovation periods; verify and plan walking/tram alternatives."
    }
  },
  "Black Light Theatre": {
    "he": {
      "why": "תיאטרון אור שחור הוא חוויה פראגית ויזואלית: חושך, צבע, תנועה ואשליות במה. זה מתאים לערב גשום או לפעילות בלי הרבה הליכה.",
      "see": [
        "מופע ויזואלי ללא הרבה שפה",
        "אפקטים של אור וחושך",
        "אווירה תיאטרלית מקומית",
        "פעילות ערב מקורה"
      ],
      "fit": "מתאים למשפחות, זוגות ויום גשם. פחות למי שלא אוהב מופעים תיירותיים.",
      "tip": "לבדוק ביקורות על המופע הספציפי; האיכות משתנה בין תיאטראות."
    },
    "en": {
      "why": "Black light theatre is a Prague visual experience: darkness, color, movement and stage illusions. Good for rainy evenings or low-walking activity.",
      "see": [
        "Mostly language-light visual show",
        "Light/dark effects",
        "Local theatrical mood",
        "Indoor evening activity"
      ],
      "fit": "Good for families, couples and rain plans. Less for people avoiding tourist shows.",
      "tip": "Check reviews of the specific show; quality varies by venue."
    }
  },
  "Beer Spa": {
    "he": {
      "why": "ספא בירה הוא חוויה קלילה ומצחיקה: אמבט עם מרכיבי בירה ובירה לשתייה תוך כדי. לא אתר תרבות חובה, אלא רגע חופשה מוזר וזוגי.",
      "see": [
        "אמבטיות עץ/ספא לפי המקום",
        "בירה תוך כדי החוויה",
        "אווירה משחקית",
        "אפשרות לזוגות או חברים"
      ],
      "fit": "מתאים לזוגות וחברים שרוצים משהו שונה. פחות למי שמחפש היסטוריה.",
      "tip": "לבדוק מה כלול במחיר — משך, פרטיות, שתייה וטיפולים משתנים."
    },
    "en": {
      "why": "Beer spa is a playful funny experience: beer-ingredient baths and beer while relaxing. Not a cultural must, but a quirky vacation memory.",
      "see": [
        "Wooden spa tubs depending on venue",
        "Beer during the experience",
        "Playful atmosphere",
        "Couples/friends option"
      ],
      "fit": "Good for couples and friends wanting something different. Less for history seekers.",
      "tip": "Check exactly what is included: duration, privacy, drinks and treatments vary."
    }
  },
  "Prague Vintage Car Tour": {
    "he": {
      "why": "סיור רכב וינטג׳ הוא דרך לראות את המרכז בלי ללכת הרבה, עם תחושה קולנועית. הוא מתאים כשצריך חוויה קלה, במיוחד אחרי יום עמוס ברגל.",
      "see": [
        "נסיעה ברכב פתוח/קלאסי",
        "מעבר ליד אתרי מרכז העיר",
        "עצירות צילום לפי המסלול",
        "תחושת רטרו תיירותית"
      ],
      "fit": "מתאים לזוגות, משפחות וצילום. פחות מתאים למי שמחפש אותנטיות מקומית עמוקה.",
      "tip": "לבדוק מסלול לפני הזמנה; חלק מהסיורים קצרים ומאוד תיירותיים."
    },
    "en": {
      "why": "A vintage car tour lets you see the center without much walking, with a cinematic feeling. Good as an easy experience after a heavy walking day.",
      "see": [
        "Classic/open car ride",
        "Passes central sights",
        "Photo stops depending on route",
        "Retro tourist feeling"
      ],
      "fit": "Good for couples, families and photos. Less for deep local authenticity.",
      "tip": "Check route before booking; some tours are short and very touristy."
    }
  },
  "E-bike Old Town Tour": {
    "he": {
      "why": "סיור אי־בייק מאפשר לכסות יותר שטח בפחות מאמץ. הוא טוב כשרוצים לראות שכונות ונקודות תצפית בלי להפוך את היום למסע רגלי.",
      "see": [
        "רכיבה מודרכת",
        "מעבר בין אזורים שונים",
        "תצפיות ונקודות צילום",
        "היכרות מהירה עם העיר"
      ],
      "fit": "מתאים למי שנוח לו ברכיבה עירונית. פחות מתאים למי שחושש מתנועה/חוקים.",
      "tip": "לבדוק קסדה, ביטוח, מסלול וחוקי רכיבה לפני שמזמינים."
    },
    "en": {
      "why": "An e-bike tour covers more ground with less effort. Good when you want viewpoints and neighborhoods without turning the day into a long walk.",
      "see": [
        "Guided ride",
        "Different city areas",
        "Viewpoints and photo stops",
        "Quick orientation of the city"
      ],
      "fit": "Good if you are comfortable riding in a city. Less if traffic/rules worry you.",
      "tip": "Check helmet, insurance, route and riding rules before booking."
    }
  },
  "Prague Castle Viewpoints": {
    "he": {
      "why": "תצפיות סביב טירת פראג נותנות את קו הרקיע הקלאסי של העיר: גגות אדומים, צריחים והנהר מתחת. זו אחת הדרכים להבין את מבנה העיר.",
      "see": [
        "תצפית על מאלה סטרנה",
        "גגות העיר העתיקה",
        "הנהר והגשרים",
        "שילוב עם ירידה דרך Nerudova"
      ],
      "fit": "מתאים לצילום, פעם ראשונה בפראג ושקיעה. פחות מתאים אם מזג האוויר אפור מאוד.",
      "tip": "לעלות לפני שקיעה ולרדת ברגל דרך הרחובות ההיסטוריים."
    },
    "en": {
      "why": "Viewpoints around Prague Castle give the classic city skyline: red roofs, spires and river below. A strong way to understand the city layout.",
      "see": [
        "Views over Malá Strana",
        "Old Town roofs",
        "River and bridges",
        "Can combine with Nerudova descent"
      ],
      "fit": "Great for photos, first visit and sunset. Less in flat grey weather.",
      "tip": "Go before sunset and walk down through the historic streets."
    }
  },
  "Vyšehrad Sunset Walk": {
    "he": {
      "why": "ווישהראד נותנת פראג שקטה יותר: מצודה, פארק, בית קברות היסטורי ותצפית על הנהר. בשקיעה זה מרגיש פחות תיירותי ויותר מקומי.",
      "see": [
        "חומות ותצפיות על הנהר",
        "בית הקברות Slavín",
        "כנסיית St. Peter and Paul",
        "פארק שקט יחסית"
      ],
      "fit": "מתאים לזוגות, הליכה רגועה ושקיעה. פחות מתאים למי שרוצה מרכז עמוס.",
      "tip": "לשלב עם U Kroka או ארוחה באזור כדי לסגור ערב מלא."
    },
    "en": {
      "why": "Vyšehrad gives a quieter Prague: fortress, park, historic cemetery and river views. At sunset it feels less touristy and more local.",
      "see": [
        "Walls and river viewpoints",
        "Slavín cemetery",
        "St. Peter and Paul Basilica",
        "Relatively calm park"
      ],
      "fit": "Good for couples, calm walking and sunset. Less for busy center energy.",
      "tip": "Pair it with U Kroka or nearby dinner for a full evening."
    }
  },
  "Letná Metronome View": {
    "he": {
      "why": "תצפית המטרונום בלֶטנה היא אחת הזוויות הטובות על הגשרים של פראג. זה מקום פשוט אבל חזק לצילום ולנשימה מעל העיר.",
      "see": [
        "שורת הגשרים על הוולטאבה",
        "מטרונום לטנה",
        "פארק לטנה",
        "אווירה צעירה סביב הסקייטרים/פארק"
      ],
      "fit": "מתאים לצילום, שקיעה וטיול קל. פחות מתאים אם רוצים אתר היסטורי סגור.",
      "tip": "לשלב עם Letná Beer Garden — זה יוצר ערב פשוט וחזק."
    },
    "en": {
      "why": "The Letná Metronome viewpoint gives one of the best angles over Prague’s bridges. Simple but powerful for photos and breathing above the city.",
      "see": [
        "Line of Vltava bridges",
        "Letná Metronome",
        "Letná Park",
        "Young park/skater atmosphere"
      ],
      "fit": "Good for photos, sunset and an easy walk. Less for indoor history.",
      "tip": "Pair it with Letná Beer Garden for a simple strong evening."
    }
  },
  "Paddle Boats on Vltava": {
    "he": {
      "why": "סירות פדלים על הוולטאבה הן חוויה קלילה ומשחקית שמוסיפה רגע כיפי לטיול. לא חובה היסטורית, אבל כן זיכרון נחמד ביום שמש.",
      "see": [
        "שייט עצמי קצר",
        "נוף לגשרים ולנהר",
        "פעילות זוגית/משפחתית",
        "צילום מהמים"
      ],
      "fit": "מתאים ליום שמש, זוגות ומשפחות. פחות מתאים לרוח חזקה או גשם.",
      "tip": "לבדוק מחיר וזמן השכרה; לא לעשות אם מזג האוויר לא נעים."
    },
    "en": {
      "why": "Paddle boats on the Vltava add a playful light moment to the trip. Not a historical must, but a fun sunny-day memory.",
      "see": [
        "Short self-guided boat ride",
        "Views of bridges and river",
        "Couples/family activity",
        "Photos from the water"
      ],
      "fit": "Good for sunny days, couples and families. Less in wind or rain.",
      "tip": "Check rental time and price; skip it if weather is unpleasant."
    }
  },
  "Mirror Maze Petřín": {
    "he": {
      "why": "מבוך המראות בפטרין הוא עצירה קלילה ומשעשעת, בעיקר אם כבר עליתם לגבעה. זו לא אטרקציה עמוקה, אבל ילדים ומבוגרים נהנים מהרגע.",
      "see": [
        "מבוך מראות",
        "מראות מעוותות",
        "עצירה קצרה ליד פטרין",
        "פעילות מקורה קטנה"
      ],
      "fit": "מתאים למשפחות ויום קליל. פחות מתאים כיעד בפני עצמו.",
      "tip": "לעשות רק אם אתם כבר באזור פטרין; לא לנסוע במיוחד רק לזה."
    },
    "en": {
      "why": "The Petřín Mirror Maze is a light playful stop, especially if you are already on the hill. Not deep, but fun for kids and adults.",
      "see": [
        "Mirror maze",
        "Distorting mirrors",
        "Short stop near Petřín",
        "Small indoor activity"
      ],
      "fit": "Good for families and light fun. Less as a standalone destination.",
      "tip": "Do it only if you are already around Petřín; do not cross town just for it."
    }
  },
  "Museum of Senses": {
    "he": {
      "why": "מוזיאון החושים הוא פעילות אינטראקטיבית וצילומית, יותר משחק מאשר מוזיאון קלאסי. טוב לגשם, ילדים או כשצריך הפסקה קלילה.",
      "see": [
        "חדרי אשליות",
        "תמונות מצחיקות",
        "פעילות אינטראקטיבית",
        "זמן קצר יחסית"
      ],
      "fit": "מתאים למשפחות, ילדים וחברים. פחות למי שמחפש תרבות עמוקה.",
      "tip": "לשמור אותו כתוכנית גשם או הפסקה בין אתרים."
    },
    "en": {
      "why": "Museum of Senses is interactive and photo-friendly, more playful than a classic museum. Good for rain, kids or a light break.",
      "see": [
        "Illusion rooms",
        "Funny photos",
        "Interactive activity",
        "Relatively short visit"
      ],
      "fit": "Good for families, kids and friends. Less for deep culture.",
      "tip": "Use it as a rain plan or break between sights."
    }
  },
  "Jewish Quarter Walk": {
    "he": {
      "why": "הרובע היהודי של פראג הוא אחד האזורים ההיסטוריים החשובים בעיר. ההליכה שם מחברת בתי כנסת, בית קברות עתיק וסיפור יהודי־אירופי עמוק.",
      "see": [
        "בית הקברות היהודי העתיק",
        "בתי הכנסת ההיסטוריים",
        "רחובות יוזפוב",
        "הקשר להיסטוריה היהודית בפראג"
      ],
      "fit": "מתאים להיסטוריה, תרבות וביקור משמעותי. פחות כטיול קליל בלבד.",
      "tip": "לשקול כרטיס משולב ולא להגיע עשר דקות לפני סגירה."
    },
    "en": {
      "why": "Prague’s Jewish Quarter is one of the city’s most important historic areas, connecting synagogues, old cemetery and deep Jewish-European history.",
      "see": [
        "Old Jewish Cemetery",
        "Historic synagogues",
        "Josefov streets",
        "Jewish history in Prague"
      ],
      "fit": "Best for history, culture and meaningful visits. Less as a light casual stroll only.",
      "tip": "Consider a combined ticket and do not arrive close to closing time."
    }
  },
  "Tram 22 Scenic Ride": {
    "he": {
      "why": "חשמלית 22 היא דרך זולה לראות אזורים יפים של פראג דרך חלון מקומי. היא שימושית במיוחד בדרך לטירה ולאזור מאלה סטרנה.",
      "see": [
        "נסיעה עירונית קלאסית",
        "מעבר ליד אזורים היסטוריים",
        "גישה לטירה/מאלה סטרנה",
        "חוויה מקומית פשוטה"
      ],
      "fit": "מתאים כשעייפים מהליכה ורוצים עדיין לראות את העיר. פחות אם רוצים הסבר מודרך.",
      "tip": "לשבת ליד חלון ולשלב עם ירידה באזור הטירה."
    },
    "en": {
      "why": "Tram 22 is a cheap way to see beautiful parts of Prague through a local window, especially toward the castle and Malá Strana.",
      "see": [
        "Classic city tram ride",
        "Passes historic areas",
        "Access to castle/Malá Strana",
        "Simple local experience"
      ],
      "fit": "Good when tired of walking but still wanting to see the city. Less if you need guided explanation.",
      "tip": "Sit by the window and combine with a castle-area stop."
    }
  },
  "Dancing House Rooftop": {
    "he": {
      "why": "הרופטופ של הבית הרוקד נותן זווית מודרנית על הנהר והעיר, בתוך אחד המבנים האייקוניים של פראג החדשה.",
      "see": [
        "הבית הרוקד מבחוץ",
        "תצפית לגגות ולנהר",
        "צילום אדריכלות מודרנית",
        "עצירת משקה/תצפית אם פתוח"
      ],
      "fit": "מתאים לצילום, אדריכלות ועצירה קצרה. פחות כיעד ארוך.",
      "tip": "לשלב עם הליכה לאורך הנהר או Náplavka."
    },
    "en": {
      "why": "The Dancing House rooftop gives a modern angle over river and city from one of Prague’s newer icons.",
      "see": [
        "Dancing House exterior",
        "Rooftop/river views",
        "Modern architecture photos",
        "Drink/view stop if open"
      ],
      "fit": "Good for photos, architecture and a short stop. Less for a long visit.",
      "tip": "Pair it with a riverside or Náplavka walk."
    }
  },
  "Franz Kafka Head": {
    "he": {
      "why": "ראש קפקא המסתובב הוא פסל מודרני וקצר לביקור שמוסיף רגע וידאו/צילום בין אתרים. הוא מעניין בעיקר בגלל התנועה והקשר לקפקא.",
      "see": [
        "פסל מתכתי מסתובב",
        "רגע צילום קצר",
        "קשר לפרנץ קפקא",
        "מיקום נוח במרכז"
      ],
      "fit": "מתאים לעצירה קצרה וצילום. פחות כיעד מרכזי.",
      "tip": "להוסיף כשאתם באזור, לא לחצות את העיר במיוחד."
    },
    "en": {
      "why": "The rotating Kafka Head is a short modern sculpture stop, good for a video/photo moment between sights. Interesting mainly because of motion and Kafka link.",
      "see": [
        "Rotating metal sculpture",
        "Short photo/video moment",
        "Franz Kafka connection",
        "Convenient central location"
      ],
      "fit": "Good for a short stop and photo. Less as a main destination.",
      "tip": "Add it when nearby; do not cross town just for it."
    }
  },
  "Strahov Monastery Library": {
    "he": {
      "why": "ספריית מנזר סטרחוב היא אחד החללים היפים בפראג לחובבי ספרים, אמנות והיסטוריה. מגיעים בשביל אולמות ספרייה מפוארים ואווירה של ידע עתיק.",
      "see": [
        "אולמות ספרייה היסטוריים",
        "מנזר סטרחוב",
        "תצפיות באזור",
        "אווירת תרבות ושקט"
      ],
      "fit": "מתאים לחובבי ספרים, היסטוריה וצילום. פחות למי שמחפש פעילות ילדים.",
      "tip": "לבדוק מראש אם הכניסה לאולמות מוגבלת או רק צפייה מבחוץ."
    },
    "en": {
      "why": "Strahov Monastery Library is one of Prague’s beautiful spaces for book, art and history lovers. Go for ornate library halls and old-knowledge atmosphere.",
      "see": [
        "Historic library halls",
        "Strahov Monastery",
        "Viewpoints nearby",
        "Quiet cultural mood"
      ],
      "fit": "Good for books, history and photos. Less for kids seeking action.",
      "tip": "Check whether access is limited or viewing is from outside."
    }
  },
  "Kampa Island Walk": {
    "he": {
      "why": "אי קמפה הוא אזור רך ורומנטי ליד גשר קארל, עם נהר, סמטאות ופארק. מתאים להאט את הקצב אחרי אזורים עמוסים.",
      "see": [
        "תעלות ונוף נהר",
        "פארק קמפה",
        "סמטאות שקטות",
        "קרבה לגשר קארל ולנון וול"
      ],
      "fit": "מתאים לזוגות, הליכה רגועה וצילום. פחות למי שמחפש יעד דרמטי.",
      "tip": "לשלב עם גשר קארל מוקדם בבוקר או לקראת ערב."
    },
    "en": {
      "why": "Kampa Island is a softer romantic area near Charles Bridge, with river, lanes and park. Good for slowing down after crowded areas.",
      "see": [
        "Canals and river views",
        "Kampa Park",
        "Quiet lanes",
        "Near Charles Bridge and Lennon Wall"
      ],
      "fit": "Good for couples, calm walking and photos. Less for dramatic attractions.",
      "tip": "Pair it with Charles Bridge early morning or evening."
    }
  },
  "Náplavka Saturday Market": {
    "he": {
      "why": "שוק שבת בנאפלבקה נותן בוקר מקומי על הנהר: אוכל, קפה, דוכנים ואווירה פתוחה. הוא עובד רק כשיש שוק פעיל.",
      "see": [
        "דוכני אוכל וקפה",
        "הליכה על הנהר",
        "קהל מקומי",
        "אווירת סוף שבוע"
      ],
      "fit": "מתאים לבוקר שבת, אוכל קל וצילום. פחות אם אין שוק באותו יום.",
      "tip": "לבדוק מראש אם השוק פעיל; לא להגיע רק על סמך השם."
    },
    "en": {
      "why": "Náplavka Saturday Market gives a local riverside morning: food, coffee, stalls and open atmosphere. It only works when the market is active.",
      "see": [
        "Food and coffee stalls",
        "Riverside walk",
        "Local crowd",
        "Weekend atmosphere"
      ],
      "fit": "Good for Saturday morning, light food and photos. Less if no market is running.",
      "tip": "Verify the market is active before going."
    }
  },
  "Old Town Underground": {
    "he": {
      "why": "העיר התחתית של פראג חושפת שכבות עתיקות מתחת לרחובות של היום. זה טוב למי שרוצה להבין שהעיר לא רק יפה מבחוץ, אלא בנויה על היסטוריה עמוקה.",
      "see": [
        "מרתפים וחללים עתיקים",
        "סיפורי ימי ביניים",
        "זווית אחרת על העיר העתיקה",
        "סיור מודרך בדרך כלל"
      ],
      "fit": "מתאים להיסטוריה ויום גשם. פחות למי שלא אוהב חללים סגורים.",
      "tip": "לבחור סיור עם ביקורות טובות; ההדרכה עושה את ההבדל."
    },
    "en": {
      "why": "Prague underground reveals older layers beneath today’s streets. Good when you want to understand that the city is not only beautiful outside but built on deep history.",
      "see": [
        "Old cellars/spaces",
        "Medieval stories",
        "Different angle on Old Town",
        "Usually guided tour"
      ],
      "fit": "Good for history and rain days. Less if you dislike enclosed spaces.",
      "tip": "Choose a well-reviewed tour; the guide makes the difference."
    }
  },
  "Charles Bridge at sunrise": {
    "he": {
      "why": "גשר קארל בזריחה הוא פראג אחרת לגמרי. בצהריים הוא עמוס מאוד; בבוקר מוקדם יש אור רך, פסלים כמעט לבד ותחושת עיר שמתעוררת.",
      "see": [
        "פסלי האבן לאורך הגשר",
        "טירת פראג ברקע",
        "נהר הוולטאבה באור ראשון",
        "צילום בלי המוני תיירים"
      ],
      "fit": "מתאים לצילום, זוגות ומי שמוכן לקום מוקדם. פחות למי שלא אוהב בוקר.",
      "tip": "להגיע 30–40 דקות לפני הזריחה, לא בדיוק בשעת הזריחה."
    },
    "en": {
      "why": "Charles Bridge at sunrise is a completely different Prague. At midday it is crowded; early morning gives soft light, statues and a waking-city feeling.",
      "see": [
        "Stone statues along the bridge",
        "Prague Castle in the background",
        "Vltava river in first light",
        "Photos without heavy crowds"
      ],
      "fit": "Best for photos, couples and early risers. Not for late sleepers.",
      "tip": "Arrive 30–40 minutes before sunrise, not exactly at sunrise."
    }
  },
  "Old Town Square at night": {
    "he": {
      "why": "כיכר העיר העתיקה בלילה מקבלת אווירה תיאטרלית: תאורה, צריחים, שעון אסטרונומי והמון שנרגע יחסית. זו דרך לראות את המרכז בלי עומס היום.",
      "see": [
        "השעון האסטרונומי מואר",
        "כנסיית טין בלילה",
        "חזיתות היסטוריות",
        "אווירת ערב במרכז"
      ],
      "fit": "מתאים לסיבוב ערב ראשון וצילום. פחות אם מחפשים שקט מוחלט.",
      "tip": "לבוא אחרי ארוחת ערב כשהקבוצות הגדולות כבר ירדו בכמות."
    },
    "en": {
      "why": "Old Town Square at night becomes theatrical: lights, spires, Astronomical Clock and a slightly calmer crowd than daytime.",
      "see": [
        "Lit Astronomical Clock",
        "Týn Church at night",
        "Historic façades",
        "Evening center atmosphere"
      ],
      "fit": "Good for first evening and photos. Less if you need total quiet.",
      "tip": "Go after dinner when large groups thin out."
    }
  },
  "Prague Castle panorama": {
    "he": {
      "why": "פנורמת טירת פראג היא אחת התמונות שמסבירות את העיר: הטירה מעל הגגות, הנהר מתחת והמרכז ההיסטורי סביב. זו נקודת עוגן לביקור ראשון.",
      "see": [
        "הטירה והקתדרלה",
        "מאלה סטרנה מתחת",
        "גגות אדומים ונהר",
        "נקודות תצפית לאורך הירידה"
      ],
      "fit": "מתאים לפעם ראשונה, צילום ושקיעה. פחות אם מזג האוויר סגור.",
      "tip": "לא להסתפק בחצר; לחפש נקודות מבט לאורך הירידה מהטירה."
    },
    "en": {
      "why": "The Prague Castle panorama explains the city: castle above roofs, river below and historic center around it. A first-visit anchor.",
      "see": [
        "Castle and cathedral",
        "Malá Strana below",
        "Red roofs and river",
        "Viewpoints on the descent"
      ],
      "fit": "Good for first visit, photos and sunset. Less in bad visibility.",
      "tip": "Do not stop only in the courtyard; look for viewpoints while walking down."
    }
  },
  "Astronomical Clock area": {
    "he": {
      "why": "אזור השעון האסטרונומי הוא עמוס ותיירותי, אבל עדיין אייקון. הערך הוא להבין שזה מנגנון עירוני היסטורי ולא רק “מופע קטן כל שעה”.",
      "see": [
        "השעון והחזית",
        "ההמון סביב השעה העגולה",
        "כיכר העיר העתיקה",
        "פרטים קטנים על המבנה"
      ],
      "fit": "מתאים לביקור ראשון. פחות למי ששונא עומס.",
      "tip": "לא להגיע רק לרגע המופע; להסתכל על הפרטים לפני ואחרי."
    },
    "en": {
      "why": "The Astronomical Clock area is crowded and touristy, but still iconic. The value is seeing a historic civic machine, not only the hourly show.",
      "see": [
        "Clock and façade",
        "Crowd at the hour",
        "Old Town Square",
        "Small architectural details"
      ],
      "fit": "Good for first-time visitors. Less if you hate crowds.",
      "tip": "Do not come only for the show; look at the details before and after."
    }
  },
  "Vyšehrad Fortress": {
    "he": {
      "why": "ווישהראד היא המצודה השקטה יותר של פראג, עם פארק, כנסייה, בית קברות ותצפיות. חובה למי שרוצה צד פחות צפוף של העיר.",
      "see": [
        "חומות ותצפית לנהר",
        "כנסיית St. Peter and Paul",
        "בית הקברות Slavín",
        "פארק רגוע יחסית"
      ],
      "fit": "מתאים להליכה, שקיעה והיסטוריה צ׳כית. פחות למי שמחפש אתרים עמוסים.",
      "tip": "לשלב עם ארוחה באזור כדי להפוך את זה לחצי יום רגוע."
    },
    "en": {
      "why": "Vyšehrad is Prague’s quieter fortress: park, church, cemetery and viewpoints. A must if you want a less crowded side of the city.",
      "see": [
        "Walls and river view",
        "St. Peter and Paul Basilica",
        "Slavín cemetery",
        "Relatively calm park"
      ],
      "fit": "Good for walking, sunset and Czech history. Less for busy landmark energy.",
      "tip": "Pair with a meal nearby for a calm half-day."
    }
  },
  "Petřín sunset": {
    "he": {
      "why": "שקיעה בפטרין נותנת שילוב של ירוק, גגות, טירה ונהר. זה רגע רומנטי יותר מתצפית עירונית רגילה.",
      "see": [
        "אור שקיעה על הגגות",
        "שבילים בגבעה",
        "תצפית לכיוון הטירה",
        "אווירה שקטה יחסית"
      ],
      "fit": "מתאים לזוגות וצילום. פחות למי שלא רוצה עלייה/ירידה.",
      "tip": "לבדוק מצב רכבל; אם סגור, לתכנן זמן הליכה."
    },
    "en": {
      "why": "Petřín sunset combines greenery, rooftops, castle and river. More romantic than a standard city viewpoint.",
      "see": [
        "Sunset light on roofs",
        "Hill paths",
        "View toward the castle",
        "Relatively quiet atmosphere"
      ],
      "fit": "Good for couples and photos. Less if you avoid uphill/downhill walking.",
      "tip": "Check funicular status; if closed, plan walking time."
    }
  },
  "Letná view over bridges": {
    "he": {
      "why": "תצפית לטנה על הגשרים היא אחת הזוויות המזוהות של פראג. היא טובה כי היא מסדרת בעין את הנהר, הגשרים והעיר העתיקה.",
      "see": [
        "שורת הגשרים",
        "נהר הוולטאבה",
        "פארק לטנה",
        "אפשרות בירה קרובה"
      ],
      "fit": "מתאים לצילום ושקיעה. פחות כיעד ארוך לבד.",
      "tip": "לשלב עם Beer Garden או הליכה בפארק."
    },
    "en": {
      "why": "Letná’s bridge view is one of Prague’s signature angles, visually lining up the river, bridges and Old Town.",
      "see": [
        "Line of bridges",
        "Vltava river",
        "Letná Park",
        "Beer option nearby"
      ],
      "fit": "Good for photos and sunset. Less as a long standalone stop.",
      "tip": "Pair with the beer garden or a park walk."
    }
  },
  "Jewish Quarter": {
    "he": {
      "why": "הרובע היהודי הוא חובה למי שרוצה להבין את עומק ההיסטוריה של פראג מעבר לגשרים וטירות. זה אזור קטן עם משקל תרבותי עצום.",
      "see": [
        "בתי כנסת היסטוריים",
        "בית הקברות היהודי העתיק",
        "רחובות יוזפוב",
        "מוזיאון/כרטיס משולב אם בוחרים"
      ],
      "fit": "מתאים להיסטוריה, תרבות וזיכרון. פחות כעצירת צילום שטחית.",
      "tip": "לתת לזה זמן ולא לדחוס בין שתי אטרקציות קלילות."
    },
    "en": {
      "why": "The Jewish Quarter is essential for understanding Prague beyond bridges and castles. A small area with huge cultural weight.",
      "see": [
        "Historic synagogues",
        "Old Jewish Cemetery",
        "Josefov streets",
        "Museum/combined ticket if chosen"
      ],
      "fit": "Best for history, culture and memory. Less as a superficial photo stop.",
      "tip": "Give it real time; do not squeeze it between two light attractions."
    }
  },
  "Kampa Island": {
    "he": {
      "why": "קמפה היא הפינה הרכה ליד גשר קארל: נהר, פארק, תעלות וסמטאות שקטות. חובה קטנה למי שרוצה לנשום בין עומסי המרכז.",
      "see": [
        "פארק קמפה",
        "תעלות ונוף מים",
        "סמטאות ליד מאלה סטרנה",
        "קרבה ללנון וול וגשר קארל"
      ],
      "fit": "מתאים לזוגות והליכה רגועה. פחות למי שמחפש אתר גדול.",
      "tip": "להיכנס אחרי גשר קארל במקום להמשיך ישר עם ההמון."
    },
    "en": {
      "why": "Kampa is the soft corner near Charles Bridge: river, park, canals and quiet lanes. A small must-do for breathing between crowded sights.",
      "see": [
        "Kampa Park",
        "Canals and water views",
        "Lanes near Malá Strana",
        "Near Lennon Wall and Charles Bridge"
      ],
      "fit": "Good for couples and calm walking. Less for major-attraction seekers.",
      "tip": "Enter after Charles Bridge instead of following the crowd straight on."
    }
  },
  "Powder Tower": {
    "he": {
      "why": "מגדל האבקה הוא שער גותי שמזכיר שפראג הייתה עיר מלכותית ומבוצרת. הוא טוב כנקודת התחלה למסלול העיר העתיקה.",
      "see": [
        "המגדל הגותי",
        "הקשר לדרך המלכותית",
        "חזיתות סביב Municipal House",
        "אפשרות תצפית אם פתוח"
      ],
      "fit": "מתאים להיסטוריה, צילום ותחילת מסלול. פחות כיעד יחיד.",
      "tip": "לשלב עם Municipal House ו־Old Town Square."
    },
    "en": {
      "why": "Powder Tower is a Gothic gate reminding you Prague was a royal fortified city. A good starting anchor for Old Town.",
      "see": [
        "Gothic tower",
        "Royal Route connection",
        "Municipal House nearby",
        "View option if open"
      ],
      "fit": "Good for history, photos and route starting point. Less as a single destination.",
      "tip": "Combine with Municipal House and Old Town Square."
    }
  },
  "Wenceslas Square": {
    "he": {
      "why": "כיכר ואצלב היא לא הכיכר הכי יפה בעיר, אבל היא חשובה היסטורית ופוליטית. זה המקום להבין את פראג המודרנית יותר.",
      "see": [
        "השדרה הארוכה",
        "המוזיאון הלאומי בקצה",
        "הקשר להפגנות ואירועים היסטוריים",
        "חנויות וחיי עיר"
      ],
      "fit": "מתאים להבנת העיר המודרנית וקניות. פחות לרומנטיקה.",
      "tip": "לא לצפות לכיכר עתיקה שקטה; זה ציר עירוני פעיל."
    },
    "en": {
      "why": "Wenceslas Square is not the prettiest square, but it is historically and politically important — a key to modern Prague.",
      "see": [
        "Long boulevard",
        "National Museum at the top",
        "Protest/history context",
        "Shops and city life"
      ],
      "fit": "Good for modern-city context and shopping. Less for romance.",
      "tip": "Do not expect a quiet old square; it is an active urban boulevard."
    }
  },
  "National Theatre riverside": {
    "he": {
      "why": "אזור התיאטרון הלאומי על הנהר נותן שילוב של אדריכלות, מים ותנועה עירונית. זו עצירה יפה בדרך בין העיר העתיקה לנאפלבקה.",
      "see": [
        "חזית התיאטרון הלאומי",
        "הנהר והגשרים",
        "נוף לכיוון הטירה",
        "הליכה לאורך הגדה"
      ],
      "fit": "מתאים להליכה וצילום. פחות כיעד ארוך.",
      "tip": "לשלב עם קפה/הליכה על הנהר, לא להגיע רק לעשר שניות."
    },
    "en": {
      "why": "The National Theatre riverside combines architecture, water and city movement — a beautiful stop between Old Town and Náplavka.",
      "see": [
        "National Theatre façade",
        "River and bridges",
        "View toward the castle",
        "Riverside walk"
      ],
      "fit": "Good for walking and photos. Less as a long visit.",
      "tip": "Pair with coffee or river walk, not just a ten-second stop."
    }
  },
  "Dancing House photo stop": {
    "he": {
      "why": "הבית הרוקד הוא האייקון המודרני של פראג. זו עצירת צילום קצרה שמראה שהעיר היא לא רק גותיקה ובארוק.",
      "see": [
        "הבניין המעוקל",
        "צילום מבחוץ",
        "נהר סמוך",
        "אפשרות רופטופ אם פתוח"
      ],
      "fit": "מתאים לאדריכלות וצילום. פחות כיעד מרכזי.",
      "tip": "לשלב עם הליכה לאורך הנהר או Náplavka."
    },
    "en": {
      "why": "Dancing House is Prague’s modern icon — a short photo stop showing the city is not only Gothic and Baroque.",
      "see": [
        "Curved building exterior",
        "Photo stop",
        "Nearby river",
        "Rooftop option if open"
      ],
      "fit": "Good for architecture and photos. Less as a main destination.",
      "tip": "Pair with a riverside or Náplavka walk."
    }
  },
  "Strahov Monastery view": {
    "he": {
      "why": "התצפית מסטרחוב נותנת מבט רחב על פראג מלמעלה, עם פחות דוחק מחלק מנקודות המרכז. היא טובה במיוחד בשילוב עם המנזר והספרייה.",
      "see": [
        "תצפית על העיר",
        "אזור מנזר סטרחוב",
        "שבילים לכיוון הטירה",
        "אווירה שקטה יותר"
      ],
      "fit": "מתאים לצילום, הליכה ופעם שנייה באזור הטירה.",
      "tip": "לשלב עם הספרייה או ירידה לכיוון הטירה/מאלה סטרנה."
    },
    "en": {
      "why": "Strahov’s view gives a wide look over Prague with less pressure than some central viewpoints, especially paired with the monastery/library.",
      "see": [
        "City viewpoint",
        "Strahov Monastery area",
        "Paths toward castle",
        "Quieter atmosphere"
      ],
      "fit": "Good for photos, walking and a deeper castle-area route.",
      "tip": "Pair with the library or walk down toward the castle/Malá Strana."
    }
  },
  "Nerudova Street": {
    "he": {
      "why": "רחוב נרודובה הוא העלייה/ירידה הקלאסית בין מאלה סטרנה לטירה, עם חזיתות יפות ושלטי בתים היסטוריים. הוא הופך מעבר לדרך לחוויה.",
      "see": [
        "חזיתות בארוקיות",
        "שלטי בתים עתיקים",
        "העלייה לכיוון הטירה",
        "חנויות ובתי קפה קטנים"
      ],
      "fit": "מתאים להליכה וצילום. פחות אם קשה לך בעלייה.",
      "tip": "עדיף לרדת בו אחרי הטירה מאשר לעלות כשעייפים."
    },
    "en": {
      "why": "Nerudova Street is the classic route between Malá Strana and the castle, with beautiful façades and historic house signs. The route itself becomes an experience.",
      "see": [
        "Baroque façades",
        "Old house signs",
        "Castle route",
        "Small shops/cafés"
      ],
      "fit": "Good for walking and photos. Less if uphill walking is difficult.",
      "tip": "It is often nicer to walk down after the castle than climb up tired."
    }
  },
  "Lennon Wall": {
    "he": {
      "why": "קיר לנון הוא נקודת צבע וסמליות בפראג: גרפיטי, שלום, מוזיקה ומחאה. הוא קצר לביקור אבל מתאים לשילוב באזור קמפה.",
      "see": [
        "קיר גרפיטי צבעוני",
        "מסרים וסמלי שלום",
        "צילום קצר",
        "קרבה לקמפה וגשר קארל"
      ],
      "fit": "מתאים לעצירת צילום וטיול באזור. פחות כיעד בפני עצמו.",
      "tip": "לשלב עם קמפה; לא לחצות את העיר רק בשבילו."
    },
    "en": {
      "why": "Lennon Wall is a colorful symbolic stop: graffiti, peace, music and protest. Short, but useful when combined with Kampa.",
      "see": [
        "Colorful graffiti wall",
        "Peace/music messages",
        "Short photo stop",
        "Near Kampa and Charles Bridge"
      ],
      "fit": "Good for a photo and nearby walk. Less as a standalone destination.",
      "tip": "Combine with Kampa; do not cross town only for it."
    }
  },
  "Municipal House": {
    "he": {
      "why": "Municipal House הוא מבנה אר־נובו מרשים ליד מגדל האבקה. גם אם לא נכנסים, החזית והאזור מראים את פראג האלגנטית של תחילת המאה ה־20.",
      "see": [
        "חזית Art Nouveau",
        "אולם/סיור אם זמין",
        "קרבה למגדל האבקה",
        "פרטים דקורטיביים עשירים"
      ],
      "fit": "מתאים לאדריכלות וצילום. פחות אם לא מתעניינים במבנים.",
      "tip": "להסתכל על הפרטים בחזית, לא רק לצלם מרחוק."
    },
    "en": {
      "why": "Municipal House is an impressive Art Nouveau building near Powder Tower. Even from outside it shows Prague’s early-20th-century elegance.",
      "see": [
        "Art Nouveau façade",
        "Interior/tour if available",
        "Near Powder Tower",
        "Rich decorative details"
      ],
      "fit": "Good for architecture and photos. Less if buildings do not interest you.",
      "tip": "Look at the façade details, not only a wide photo."
    }
  },
  "Vltava riverside walk": {
    "he": {
      "why": "הליכה לאורך הוולטאבה מחברת את פראג בצורה הכי פשוטה: גשרים, טירה, תיאטרון, סירות ואיים. זו חובה כי היא מסדרת את העיר בראש.",
      "see": [
        "גשרים ונוף מים",
        "מבט לטירה",
        "סירות ואיים",
        "חיבור בין אזורים שונים בעיר"
      ],
      "fit": "מתאים לכל מטייל כמעט. פחות ביום גשם חזק.",
      "tip": "לעשות מקטע אחד טוב במקום לנסות ללכת את כל הנהר."
    },
    "en": {
      "why": "A Vltava riverside walk connects Prague in the simplest way: bridges, castle, theatre, boats and islands. It helps you understand the city.",
      "see": [
        "Bridges and water views",
        "Castle view",
        "Boats and islands",
        "Connection between city areas"
      ],
      "fit": "Good for almost every traveler. Less in heavy rain.",
      "tip": "Walk one strong section instead of trying to do the whole river."
    }
  },
  "Malá Strana lanes": {
    "he": {
      "why": "הסמטאות של מאלה סטרנה נותנות פראג רכה ורומנטית יותר מהעיר העתיקה. יש בהן ארמונות, חצרות, מדרגות ונקודות שקטות.",
      "see": [
        "סמטאות אבן",
        "חזיתות ארמונות",
        "חצרות ומדרגות",
        "קשר לטירה ולקמפה"
      ],
      "fit": "מתאים לזוגות, צילום ושיטוט. פחות למי שממהר מאתר לאתר.",
      "tip": "להוריד קצב; היופי כאן הוא בפרטים הקטנים."
    },
    "en": {
      "why": "Malá Strana lanes give a softer, more romantic Prague than Old Town: palaces, courtyards, steps and quieter corners.",
      "see": [
        "Stone lanes",
        "Palace façades",
        "Courtyards and steps",
        "Connection to castle and Kampa"
      ],
      "fit": "Good for couples, photos and wandering. Less for rushed sightseeing.",
      "tip": "Slow down; the value is in small details."
    }
  },
  "Clementinum viewpoint": {
    "he": {
      "why": "תצפית קלמנטינום נותנת מבט יפה על גגות העיר העתיקה והאזור סביב גשר קארל. היא טובה למי שרוצה תצפית מרכזית עם אופי היסטורי.",
      "see": [
        "מבט על גגות העיר העתיקה",
        "אזור גשר קארל",
        "מבנה היסטורי של קלמנטינום",
        "חוויה מודרכת לפי זמינות"
      ],
      "fit": "מתאים לצילום ותצפית מרכזית. פחות למי שמתקשה במדרגות.",
      "tip": "לבדוק מראש סיור/שעות; לא תמיד אפשר פשוט להיכנס חופשי."
    },
    "en": {
      "why": "Clementinum viewpoint gives a beautiful look over Old Town roofs and the Charles Bridge area, with historic-building context.",
      "see": [
        "Old Town rooftops",
        "Charles Bridge area",
        "Historic Clementinum building",
        "Guided access depending on availability"
      ],
      "fit": "Good for photos and central viewpoint. Less if stairs are difficult.",
      "tip": "Check tour/hours ahead; access is not always free-flowing."
    }
  }
};
Object.assign(PRAGUE_REAL_GUIDE_CONTENT, PRAGUE_CLEAN_GUIDE_CONTENT);



// v32: Real guide packs for Vienna and Strasbourg.
// These entries override generic fallback text so each card explains the actual place,
// not the algorithmic reason it was selected.
const EUROPE_REAL_GUIDE_CONTENT = {
  // Vienna day trips
  'Bratislava': { en:{why:'Bratislava is one of the easiest cross-border day trips from Vienna: a compact old town, a castle above the Danube and a completely different capital-city mood in about an hour.',see:['Bratislava Castle and the river view','The small historic centre around the main square','Café stops and Slovak comfort food','A relaxed walk without needing a full itinerary'],fit:'Good for travellers who want a light international day trip without committing to a long drive.',tip:'Go early enough to enjoy the castle view before lunch, then keep the afternoon for the old town.'}, he:{why:'ברטיסלבה היא אחד מטיולי היום הקלים ביותר מוינה: עיר בירה אחרת, מרכז עתיק קטן, טירה מעל הדנובה ואווירה שונה לגמרי — בערך שעה נסיעה.',see:['טירת ברטיסלבה ותצפית לנהר','המרכז ההיסטורי והכיכר המרכזית','עצירת קפה ואוכל סלובקי פשוט','הליכה רגועה בלי צורך במסלול כבד'],fit:'מתאים למי שרוצה “עוד מדינה” ביום אחד בלי טיול מתיש.',tip:'כדאי להגיע מוקדם לטירה ואז לרדת למרכז לארוחת צהריים והליכה.'}},
  'Wachau Valley': { en:{why:'The Wachau is the Danube at its most cinematic: vineyards, river bends, small villages and ruined castles. It feels less like a city trip and more like Austria opening up around you.',see:['Danube viewpoints','Vineyard villages such as Dürnstein or Krems','Apricot shops, wine taverns and river scenery','Castle ruins and abbey views depending on your route'],fit:'Best for couples, photographers and anyone who wants a slower countryside day.',tip:'If you are not driving, plan the exact train/boat combination before leaving; connections shape the whole day.'}, he:{why:'עמק ואכאו הוא הדנובה בגרסה הכי יפה שלה: כרמים, כפרים קטנים, פיתולי נהר וטירות הרוסות. זה מרגיש כמו לצאת מהעיר אל אוסטריה האמיתית.',see:['תצפיות על הדנובה','כפרי יין כמו דורנשטיין וקרמס','חנויות משמשים, יקבים ונוף נהר','שרידי טירות ומנזרים לפי המסלול'],fit:'מתאים לזוגות, צילום ויום רגוע מחוץ לעיר.',tip:'אם נוסעים בלי רכב, לתכנן מראש רכבת/שייט/אוטובוס — החיבורים קובעים את היום.'}},
  'Melk Abbey': { en:{why:'Melk Abbey is a dramatic baroque monastery above the Danube. The reason to go is the combination of architecture, library, church and a river-view setting that feels grand even if you are not into monasteries.',see:['The golden baroque church','The historic library and museum route','Terraces and views over the Danube','A short walk through Melk town'],fit:'Good for culture, architecture and a structured half-day to full-day trip.',tip:'Combine Melk with Wachau/Krems only if you start early; otherwise it deserves its own relaxed visit.'}, he:{why:'מנזר מלק הוא מבנה בארוק ענק מעל הדנובה. הסיבה להגיע היא השילוב של אדריכלות, ספרייה, כנסייה ונוף נהר — גם למי שלא מתלהב ממנזרים.',see:['הכנסייה הבארוקית המוזהבת','הספרייה והמסלול המוזיאלי','מרפסות ותצפיות לדנובה','הליכה קצרה בעיירה מלק'],fit:'מתאים לתרבות, אדריכלות וטיול מסודר של חצי יום עד יום.',tip:'לשלב עם ואכאו רק אם יוצאים מוקדם; אחרת עדיף לתת למלק זמן משלה.'}},
  'Baden bei Wien': { en:{why:'Baden is a soft landing outside Vienna: spa-town streets, parks, cafés and a calmer rhythm. It is close enough to be spontaneous and different enough to feel like a real escape.',see:['Spa architecture and town squares','Kurpark and quiet walking paths','Cafés and wine-town atmosphere','Casino Baden exterior/evening lights if relevant'],fit:'Best for a short low-stress trip, couples and travellers who do not want a long travel day.',tip:'Use it as a half-day reset when you want to leave Vienna but still be back for dinner.'}, he:{why:'באדן ליד וינה היא בריחה קלה מהעיר: רחובות ספא, פארקים, בתי קפה וקצב רגוע. קרובה מספיק לספונטניות אבל שונה מספיק כדי להרגיש טיול.',see:['אדריכלות ספא וכיכרות','פארק Kurpark ושבילים רגועים','בתי קפה ואווירת עיירת יין','אזור הקזינו בערב אם זה מתאים'],fit:'מתאים לחצי יום רגוע, זוגות ומי שלא רוצה נסיעה ארוכה.',tip:'מצוין כיום “איפוס” קצר — לצאת מהעיר ולחזור לוינה לארוחת ערב.'}},
  'Hallstatt': { en:{why:'Hallstatt is the postcard lake village everyone has seen online. It is beautiful, but it is also far and tourist-heavy, so the real reason to go is if that lake-and-mountain image is a personal must.',see:['The classic lakefront viewpoint','Pastel houses squeezed between water and mountain','Salt-mine or skywalk options if time allows','Alpine scenery on the drive/train route'],fit:'Best for car travellers, photographers and first-time Austria visitors who accept a long day.',tip:'Leave very early. If you arrive late, the crowds and travel time can make the day feel less magical.'}, he:{why:'הלשטאט היא כפר האגם המפורסם שכולם ראו בתמונות. היא יפה מאוד אבל רחוקה ועמוסה, ולכן שווה להגיע רק אם תמונת האגם־הרים הזו היא חובה אישית.',see:['נקודת הצילום הקלאסית על האגם','בתים צבעוניים בין הר למים','מכרה מלח או Skywalk אם יש זמן','נוף אלפיני בדרך'],fit:'מתאים במיוחד עם רכב, לצילום ולמי שמוכן ליום ארוך.',tip:'לצאת מוקדם מאוד. הגעה מאוחרת עלולה להפוך את המקום לעמוס ומתיש.'}},
  'Graz': { en:{why:'Graz is Austria with a younger, warmer feel than Vienna: red roofs, a hilltop clock tower, design touches and a food scene that rewards wandering.',see:['Schlossberg and the clock tower','Old town lanes and courtyards','Murinsel and modern river architecture','Cafés and Styrian food stops'],fit:'Good for people who enjoy a real city day rather than only palaces or nature.',tip:'Start with Schlossberg for orientation, then let the old town and food stops fill the day.'}, he:{why:'גראץ היא אוסטריה בתחושה צעירה וחמה יותר מוינה: גגות אדומים, מגדל שעון על גבעה, עיצוב מודרני ואוכל טוב לשיטוט.',see:['Schlossberg ומגדל השעון','סמטאות וחצרות בעיר העתיקה','Murinsel ואדריכלות מודרנית על הנהר','בתי קפה ואוכל שטירי'],fit:'מתאים למי שאוהב יום עירוני אמיתי ולא רק ארמונות או טבע.',tip:'להתחיל בתצפית מה־Schlossberg ואז לרדת לשיטוט ואוכל בעיר.'}},
  'Laxenburg Castle Park': { en:{why:'Laxenburg is a romantic park day: lakes, bridges, lawns and a castle-like pavilion on an island. It feels designed for slow walking rather than sightseeing pressure.',see:['Franzensburg on the lake island','Park paths, bridges and water views','Picnic-style lawns and photo corners','Seasonal boat or garden atmosphere'],fit:'Great for couples, families and anyone needing green space close to Vienna.',tip:'Go when the weather is good; the park is the main experience, not an indoor backup.'}, he:{why:'לקסנבורג הוא יום פארק רומנטי: אגמים, גשרים, מדשאות ומבנה דמוי טירה על אי. זה מקום לשיטוט איטי ולא לרשימת אתרים.',see:['Franzensburg על אי באגם','שבילי פארק, גשרים ונופי מים','מדשאות ופינות צילום','אווירת גנים עונתית'],fit:'מעולה לזוגות, משפחות ומי שרוצה ירוק קרוב לוינה.',tip:'לבחור יום עם מזג אוויר טוב — החוויה היא הפארק עצמו.'}},
  'Semmering Railway': { en:{why:'Semmering is for travellers who like scenery in motion: mountains, historic railway engineering and a route that turns the journey itself into the attraction.',see:['Mountain railway views','Viaducts and forested slopes','Short hikes or viewpoint stops','Alpine resort atmosphere'],fit:'Best for train lovers, scenery and people who want something different from another palace.',tip:'Check train times carefully and do not overpack the day; the travel is part of the experience.'}, he:{why:'זמרינג מתאים למי שאוהב נוף תוך כדי תנועה: הרים, הנדסת רכבת היסטורית ומסלול שבו הדרך היא חלק מהאטרקציה.',see:['נופי רכבת הרריים','גשרים ומדרונות מיוערים','הליכות קצרות או תצפיות','אווירת עיירת נופש אלפינית'],fit:'מתאים לחובבי רכבות, נופים ומי שרוצה משהו אחר מארמון נוסף.',tip:'לבדוק לוחות זמנים ולא לדחוס יותר מדי; הנסיעה עצמה היא החוויה.'}},
  // Vienna food
  'Figlmüller': { en:{why:'Figlmüller is the classic schnitzel name in Vienna. You go for a famous, very thin schnitzel experience rather than experimental food.',see:['Large crispy schnitzel as the main event','Traditional central restaurant atmosphere','A tourist-famous but still iconic Vienna food stop'],fit:'Good for first-time visitors who want the famous schnitzel moment.',tip:'Reserve if possible and do not judge all Viennese food only by this one tourist-heavy classic.'}, he:{why:'פיגלמולר הוא שם קלאסי לשניצל בוינה. מגיעים בשביל חוויית שניצל דק ופריך מאוד, לא בשביל אוכל ניסיוני.',see:['שניצל גדול ופריך כמרכז הארוחה','אווירה מסורתית במרכז העיר','עצירת אוכל אייקונית ומוכרת מאוד לתיירים'],fit:'מתאים למבקרים ראשונים שרוצים את “רגע השניצל” הווינאי.',tip:'כדאי להזמין מראש, ולא להסיק ממנו על כל המטבח הווינאי — זה קלאסיקה מאוד תיירותית.'}},
  'Schnitzelwirt': { en:{why:'Schnitzelwirt is a more casual, value-focused schnitzel stop. It is less polished than the famous names and better when you want a filling local meal without ceremony.',see:['Big schnitzel portions','Simple tavern atmosphere','Good value for hungry travellers'],fit:'Best for budget travellers and casual dinners.',tip:'Come hungry; portions are generous and the place is not about fine dining.'}, he:{why:'שניצלווירט הוא מקום שניצל עממי ומשתלם יותר. פחות נוצץ מהשמות המפורסמים ומתאים כשבא לך אוכל גדול ופשוט בלי טקס.',see:['מנות שניצל גדולות','אווירת טברנה פשוטה','תמורה טובה למטיילים רעבים'],fit:'מתאים למטיילים בתקציב ולארוחה קז׳ואלית.',tip:'לבוא רעבים; זה לא פיין דיינינג אלא אוכל גדול וישיר.'}},
  'Naschmarkt stands': { en:{why:'Naschmarkt is not one restaurant; it is Vienna’s food-market energy. It works when a group cannot agree on one cuisine or when you want to browse before choosing.',see:['Market stalls and casual restaurants','Middle Eastern, Austrian, Asian and snack options','People-watching and outdoor tables'],fit:'Good for mixed groups, lunch and flexible eaters.',tip:'Avoid choosing the first touristy table; walk the market once, then decide.'}, he:{why:'נאשמרקט הוא לא מסעדה אחת אלא אנרגיה של שוק אוכל. מתאים כשקבוצה לא מסכימה על מטבח אחד או כשאוהבים לבחור תוך כדי שיטוט.',see:['דוכנים ומסעדות קז׳ואליות','אפשרויות מזרח תיכוניות, אוסטריות, אסייתיות ונשנושים','אווירת שוק ושולחנות בחוץ'],fit:'מתאים לקבוצות, צהריים ומי שאוהב גמישות.',tip:'לא להתיישב במקום הראשון שנראה תיירותי; לעשות סיבוב ואז לבחור.'}},
  'Café Central': { en:{why:'Café Central is a historic coffeehouse experience, not just coffee. You go for the high ceilings, old Vienna atmosphere and the feeling of stepping into a literary café.',see:['Grand café interior','Classic cakes and coffee','Piano/coffeehouse mood depending on timing'],fit:'Best for first-time Vienna visitors and anyone who wants the old coffeehouse ritual.',tip:'Expect queues at peak times; if you only need coffee, smaller cafés may be more relaxed.'}, he:{why:'קפה סנטרל הוא חוויית בית קפה היסטורית, לא רק קפה. מגיעים בשביל התקרה הגבוהה, האווירה הווינאית הישנה והתחושה של קפה ספרותי.',see:['חלל בית קפה מרשים','עוגות וקפה קלאסיים','אווירת פסנתר/בית קפה לפי השעה'],fit:'מתאים לביקור ראשון בוינה ולמי שרוצה את טקס בית הקפה הווינאי.',tip:'בשעות עומס יש תורים; אם צריך רק קפה מהיר, יש מקומות רגועים יותר.'}},
  'Trześniewski': { en:{why:'Trześniewski is a quick, very Viennese snack stop: tiny open sandwiches, beer and no long meal commitment.',see:['Small open-faced sandwiches with different spreads','Fast counter-service rhythm','A classic central snack culture'],fit:'Good for a light lunch, between museums, or when you want to taste something local without sitting for an hour.',tip:'Order a few different sandwiches; the point is variety.'}, he:{why:'טרז׳נייבסקי הוא עצירת נשנוש וינאית מהירה: כריכים פתוחים קטנים, בירה קטנה, בלי להתחייב לארוחה ארוכה.',see:['כריכים פתוחים קטנים עם ממרחים שונים','שירות מהיר בדלפק','תרבות נשנוש מרכזית וקלאסית'],fit:'מתאים לארוחה קלה בין מוזיאונים או כשרוצים לטעום משהו מקומי מהר.',tip:'להזמין כמה סוגים; הקטע הוא הגיוון.'}},
  'Vollpension': { en:{why:'Vollpension feels like a living room run by grandmas: cakes, retro design and a social idea behind the café.',see:['Homemade-style cakes','Retro living-room atmosphere','A warmer alternative to formal coffeehouses'],fit:'Great for cake, coffee and travellers who prefer charm over polish.',tip:'Choose it when you want a human, cozy break rather than a grand imperial café.'}, he:{why:'וולפנסיון מרגיש כמו סלון של סבתות: עוגות ביתיות, עיצוב רטרו ורעיון חברתי מאחורי המקום.',see:['עוגות בסגנון ביתי','אווירת סלון רטרו','חלופה חמה יותר לבתי הקפה הרשמיים'],fit:'מתאים לעוגה, קפה ומי שמעדיף קסם על פני יוקרה.',tip:'לבחור בו כשמחפשים הפסקה אנושית וחמה ולא בית קפה אימפריאלי.'}},
  // Vienna nightlife
  'Donaukanal Bars': { en:{why:'The Donaukanal is Vienna’s easy summer-evening zone: riverside bars, murals, casual drinks and a less formal mood than the inner city.',see:['Riverside seating and street-art walls','Outdoor drinks in warm weather','A walkable strip where you can change places easily'],fit:'Good for a relaxed first night or groups that do not want a club yet.',tip:'Best in warm weather; in winter it loses much of the atmosphere.'}, he:{why:'תעלת הדנובה היא אזור ערב קליל בוינה: ברים על המים, גרפיטי, שתייה קז׳ואלית ואווירה פחות רשמית מהמרכז.',see:['ישיבה ליד המים וקירות סטריט־ארט','שתייה בחוץ במזג אוויר טוב','רצועה נוחה להחלפת מקומות תוך כדי הליכה'],fit:'מתאים לערב ראשון רגוע או לקבוצה שלא רוצה מועדון.',tip:'הכי טוב במזג אוויר חמים; בחורף חלק מהקסם נעלם.'}},
  'Loos American Bar': { en:{why:'Loos Bar is tiny, architectural and grown-up. It is for one precise cocktail in a classic space, not for a loud night out.',see:['Compact Adolf Loos-designed interior','Classic cocktails','Intimate, serious bar mood'],fit:'Best for couples or cocktail lovers who appreciate design.',tip:'It is small; go early or be ready to wait.'}, he:{why:'לוס בר הוא קטן, אדריכלי ובוגר. זה מקום לקוקטייל מדויק בחלל קלאסי, לא לערב רועש.',see:['חלל קטן שתוכנן על ידי אדולף לוס','קוקטיילים קלאסיים','אווירה אינטימית ורצינית'],fit:'מתאים לזוגות וחובבי קוקטיילים ועיצוב.',tip:'המקום קטן מאוד; להגיע מוקדם או להיות מוכנים להמתין.'}},
  'Grelle Forelle': { en:{why:'Grelle Forelle is the electronic-music choice: dark rooms, serious sound and a club crowd that comes for the music rather than sightseeing.',see:['Techno/electronic club nights','Heavy sound system and late hours','A more underground mood than tourist bars'],fit:'Good for electronic music fans and late-night energy.',tip:'Check the specific lineup; the night depends on the DJ and event.'}, he:{why:'גרלה פורלה היא בחירה לחובבי מוזיקה אלקטרונית: חללים חשוכים, סאונד רציני וקהל שמגיע בשביל המוזיקה.',see:['לילות טכנו/אלקטרוני','מערכת סאונד חזקה ושעות מאוחרות','אווירה יותר אנדרגראונד מברי תיירים'],fit:'מתאים לחובבי אלקטרוני ולילה מאוחר.',tip:'לבדוק ליין־אפ; איכות הערב תלויה באירוע ובדי־ג׳יי.'}},
  'Das Loft Bar': { en:{why:'Das Loft is about the view as much as the drink: a high-floor bar where Vienna becomes part of the evening.',see:['Panoramic city views','Cocktails in a polished hotel-bar setting','A strong sunset or after-dark option'],fit:'Best for couples, birthdays or a more dressed-up drink.',tip:'Reserve for prime times; you are paying partly for the view.'}, he:{why:'דאס לופט הוא בר שבו הנוף חשוב כמעט כמו המשקה: קומה גבוהה שבה וינה הופכת לחלק מהערב.',see:['תצפית פנורמית על העיר','קוקטיילים באווירת בר מלון מוקפדת','אופציה חזקה לשקיעה או לילה'],fit:'מתאים לזוגות, יום הולדת או דרינק יותר אלגנטי.',tip:'להזמין מראש בשעות מבוקשות; חלק מהמחיר הוא הנוף.'}},
  'Volksgarten Club': { en:{why:'Volksgarten is a classic Vienna club name with a central location and polished party feel.',see:['Dance floors and mainstream club nights','Garden/indoor spaces depending on season','A dressed-up social crowd'],fit:'Good for travellers who want a recognizable club night rather than a small bar.',tip:'Check dress code and event type; it changes the experience.'}, he:{why:'פולקסגארטן הוא שם קלאסי בחיי הלילה של וינה, עם מיקום מרכזי ואווירת מסיבה מלוטשת.',see:['רחבות ריקודים ולילות מיינסטרים','חללי גן/פנים לפי העונה','קהל חברתי ומסודר יותר'],fit:'מתאים למי שרוצה מועדון מוכר ולא בר קטן.',tip:'לבדוק קוד לבוש וסוג אירוע; זה משנה את החוויה.'}},
  // Vienna experiences/mustdo
  'Prater Giant Ferris Wheel': { en:{why:'The Giant Ferris Wheel is nostalgic Vienna: slow movement, old amusement-park atmosphere and a view that feels more romantic than extreme.',see:['Classic cabins above the Prater','Views toward the city skyline','Old-school amusement-park mood'],fit:'Good for couples, families and first-time Vienna visitors.',tip:'It is more about atmosphere than adrenaline; go near golden hour if possible.'}, he:{why:'הגלגל הענק בפראטר הוא וינה נוסטלגית: תנועה איטית, אווירת פארק שעשועים ישן ונוף יותר רומנטי מאקסטרימי.',see:['קרונות קלאסיים מעל הפראטר','תצפית לקו העיר','אווירת פארק שעשועים של פעם'],fit:'מתאים לזוגות, משפחות ומבקרים ראשונים.',tip:'זו חוויה של אווירה יותר מאדרנלין; עדיף לקראת שקיעה.'}},
  'Schönbrunn Palace gardens': { en:{why:'Schönbrunn’s gardens let you feel the imperial scale without needing to spend the whole day inside rooms. The walk to the Gloriette is the payoff.',see:['Formal gardens and long palace axes','Gloriette viewpoint','Fountains, lawns and palace façades'],fit:'Great for first-time visitors, families and anyone who wants a big Vienna landmark outdoors.',tip:'Even if you skip the palace interior, do not skip the climb/view toward the Gloriette.'}, he:{why:'גני שנברון נותנים את תחושת הגודל האימפריאלי גם בלי לבלות יום שלם בתוך חדרים. העלייה לגלורייט היא השיא.',see:['גנים פורמליים וצירי ארמון ארוכים','תצפית מהגלורייט','מזרקות, מדשאות וחזיתות הארמון'],fit:'מתאים לביקור ראשון, משפחות ומי שרוצה אתר גדול באוויר הפתוח.',tip:'גם אם מוותרים על פנים הארמון, לא לוותר על העלייה לתצפית.'}},
  'Belvedere Palace': { en:{why:'Belvedere combines palace gardens with one of Vienna’s strongest art stops. The draw is not only the building but the Klimt-centered collection inside.',see:['Upper Belvedere façade and gardens','Klimt’s The Kiss if visiting the museum','Baroque symmetry and city-facing views'],fit:'Best for art lovers and travellers who want culture without a full museum marathon.',tip:'Book museum entry if Klimt matters to you; otherwise the gardens still make a good short stop.'}, he:{why:'בלוודר משלב גני ארמון עם אחד ממוקדי האמנות החשובים בוינה. המשיכה היא לא רק המבנה אלא גם אוסף קלימט בפנים.',see:['חזית וגני בלוודר העליון','הנשיקה של קלימט אם נכנסים למוזיאון','סימטריה בארוקית ותצפיות לעיר'],fit:'מתאים לחובבי אמנות ולמי שרוצה תרבות בלי מרתון מוזיאון.',tip:'אם קלימט חשוב לך, להזמין כניסה; אם לא, גם הגנים שווים עצירה קצרה.'}},
  'St. Stephen’s Cathedral': { en:{why:'Stephansdom is the vertical anchor of central Vienna. Its tiled roof, towers and square around it make it the place where the old city seems to gather.',see:['Patterned roof tiles','Gothic nave and towers','Stephansplatz street life around the cathedral'],fit:'Essential for first-time visitors and anyone starting a walk through the old centre.',tip:'Look up at the roof from outside before deciding whether to climb or enter.'}, he:{why:'קתדרלת סטפנוס היא העוגן האנכי של מרכז וינה. הגג הצבעוני, המגדלים והכיכר סביב יוצרים את נקודת הכובד של העיר העתיקה.',see:['רעפי הגג הצבעוניים','חלל גותי ומגדלים','חיי הרחוב בסטפנספלאץ'],fit:'חובה למבקרים ראשונים ולמי שמתחיל סיור במרכז.',tip:'להביט בגג מבחוץ לפני שמחליטים אם לטפס או להיכנס.'}},
  'Ringstrasse walk': { en:{why:'The Ringstrasse is Vienna’s imperial stage set: parliament, opera, museums and grand façades on one circular boulevard.',see:['State Opera, Parliament and Rathaus exteriors','Museum quarter edges and grand avenues','A sense of how Vienna presents power and culture'],fit:'Good for orientation and first-day city understanding.',tip:'Do it in sections rather than forcing the entire ring at once.'}, he:{why:'הרינגשטראסה היא הבמה האימפריאלית של וינה: פרלמנט, אופרה, מוזיאונים וחזיתות ענק לאורך שדרה מעגלית.',see:['האופרה, הפרלמנט והעירייה מבחוץ','אזורי מוזיאונים ושדרות רחבות','הבנה איך וינה מציגה כוח ותרבות'],fit:'מתאים להתמצאות ביום הראשון.',tip:'לעשות מקטעים, לא להכריח את כל הטבעת בבת אחת.'}},

  // Strasbourg day trips
  'Colmar': { en:{why:'Colmar is the Alsace postcard: canals, half-timbered houses, colourful lanes and a softer pace than Strasbourg.',see:['Little Venice canal area','Colourful half-timbered streets','Covered market and wine-town corners','Photo stops around the old centre'],fit:'Best for romantic walks, photos and an easy train day.',tip:'Arrive early or late afternoon to avoid the most crowded middle hours.'}, he:{why:'קולמר היא גלויה אלזסית: תעלות, בתי עץ צבעוניים, סמטאות וקצב רך יותר משטרסבורג.',see:['אזור “ונציה הקטנה”','רחובות בתי עץ צבעוניים','שוק מקורה ופינות יין','נקודות צילום בעיר העתיקה'],fit:'מתאים לזוגות, צילום ויום רכבת קל.',tip:'להגיע מוקדם או אחר הצהריים כדי לברוח מהעומס של אמצע היום.'}},
  'Riquewihr': { en:{why:'Riquewihr is a tiny wine village that looks almost unreal: medieval walls, coloured houses and vineyard slopes around it.',see:['Main street inside the old walls','Wine shops and Alsatian façades','Vineyard views outside the village','Small-scale village atmosphere'],fit:'Best by car or organized route; excellent for couples and wine-country photos.',tip:'Do not expect a big town; the charm is in the small preserved village scale.'}, he:{why:'ריקוויר הוא כפר יין קטן שנראה כמעט לא אמיתי: חומות, בתים צבעוניים וכרמים סביב.',see:['הרחוב הראשי בתוך החומות','חנויות יין וחזיתות אלזסיות','נופי כרמים מחוץ לכפר','אווירת כפר קטנה ושמורה'],fit:'הכי טוב ברכב או מסלול מאורגן; מעולה לזוגות וצילום.',tip:'לא לצפות לעיר גדולה; הקסם הוא בקנה המידה הקטן והשמור.'}},
  'Château du Haut-Kœnigsbourg': { en:{why:'Haut-Kœnigsbourg is the castle day trip that actually feels like a fortress: high above the plain, with walls, towers and broad views across Alsace.',see:['Restored medieval fortress rooms','Ramparts and tower views','Forest and Rhine plain scenery','A strong castle atmosphere for photos'],fit:'Best for history, families and car travellers exploring Alsace.',tip:'Pair it with a wine village only if you have a car and enough daylight.'}, he:{why:'או־קניגסבורג הוא טיול טירה שמרגיש באמת כמו מבצר: גבוה מעל המישור, עם חומות, מגדלים ותצפיות רחבות על אלזס.',see:['חדרי מבצר משוחזרים','חומות ותצפיות ממגדלים','נופי יער ומישור הריין','אווירת טירה חזקה לצילום'],fit:'מתאים להיסטוריה, משפחות ומטיילים ברכב.',tip:'לשלב עם כפר יין רק אם יש רכב ומספיק אור יום.'}},
  'Baden-Baden': { en:{why:'Baden-Baden is a polished German spa town: elegant streets, thermal-bath culture, casino glamour and Black Forest edges.',see:['Kurhaus and casino exterior/interior if visiting','Spa-town parks and promenades','Thermal baths if planned','Black Forest gateway atmosphere'],fit:'Good for couples, spa lovers and a more elegant cross-border day.',tip:'If baths or casino matter, check dress code, booking and opening rules before leaving.'}, he:{why:'באדן־באדן היא עיירת ספא גרמנית אלגנטית: רחובות מוקפדים, תרבות מרחצאות, קזינו וזיקה ליער השחור.',see:['Kurhaus והקזינו מבחוץ/מבפנים אם נכנסים','פארקים וטיילות ספא','מרחצאות תרמיים אם מתכננים','אווירת שער ליער השחור'],fit:'מתאים לזוגות, אוהבי ספא ויום חוצה גבול אלגנטי.',tip:'אם מרחצאות או קזינו חשובים, לבדוק הזמנה, קוד לבוש ושעות מראש.'}},
  'Europa-Park': { en:{why:'Europa-Park is not a sightseeing stop; it is a full entertainment day. You go if rides, themed zones and family energy are the priority.',see:['Roller coasters and themed European areas','Family attractions and shows','A full-day amusement-park rhythm'],fit:'Best for families, teens and groups who want action rather than quiet villages.',tip:'Treat it as the whole day and buy/check tickets before you travel.'}, he:{why:'אירופה פארק הוא לא אתר לראות — זה יום בידור מלא. נוסעים אם מתקנים, אזורי נושא ואנרגיה משפחתית הם המטרה.',see:['רכבות הרים ואזורים לפי מדינות אירופה','אטרקציות למשפחות ומופעים','קצב של פארק שעשועים ליום שלם'],fit:'מתאים למשפחות, נוער וקבוצות שרוצות אקשן.',tip:'לתכנן אותו כיום מלא ולבדוק/לקנות כרטיסים לפני הנסיעה.'}},
  'Obernai': { en:{why:'Obernai gives you Alsace charm without committing to a long journey: old walls, squares, timbered houses and wine-route atmosphere close to Strasbourg.',see:['Historic centre and market square','Ramparts and small lanes','Alsatian houses and wine-route mood'],fit:'Good for a short public-travel or car trip when Colmar feels too much.',tip:'Use it as an easy half-day, especially if you want to return to Strasbourg for dinner.'}, he:{why:'אוברנה נותנת קסם אלזסי בלי נסיעה ארוכה: חומות, כיכרות, בתי עץ ואווירת דרך היין קרוב לשטרסבורג.',see:['המרכז ההיסטורי וכיכר השוק','חומות וסמטאות','בתי אלזס ואווירת יין'],fit:'מתאים לחצי יום קל אם קולמר מרגישה רחוקה מדי.',tip:'מצוין כחצי יום רגוע עם חזרה לשטרסבורג לארוחת ערב.'}},
  'Eguisheim': { en:{why:'Eguisheim is a circular wine village with colourful lanes wrapping around the centre. It is small, photogenic and made for slow wandering.',see:['Concentric village lanes','Flowered half-timbered houses','Wine-cellar signs and small squares','Photo corners at almost every turn'],fit:'Best by car, for couples and photography-focused travellers.',tip:'Combine with Colmar/Riquewihr only if you are driving; public transport can be slow.'}, he:{why:'אגיסהיים הוא כפר יין עגול עם סמטאות צבעוניות סביב המרכז. קטן, פוטוגני ומיועד לשיטוט איטי.',see:['סמטאות מעגליות','בתי עץ עם פרחים','שלטי יקבים וכיכרות קטנות','פינות צילום כמעט בכל סיבוב'],fit:'הכי מתאים ברכב, לזוגות ולחובבי צילום.',tip:'לשלב עם קולמר/ריקוויר רק אם יש רכב; תחבורה ציבורית עלולה להיות איטית.'}},
  // Strasbourg food
  'La Corde à Linge': { en:{why:'La Corde à Linge works because of location and mood: a casual Petite France terrace where Alsatian-style comfort food meets canal views.',see:['Spätzle-style dishes and regional plates','Outdoor tables in Petite France','A lively but not formal meal stop'],fit:'Good for first-time Strasbourg visitors who want food and scenery together.',tip:'The setting is part of the value; reserve or avoid peak times if you want a relaxed table.'}, he:{why:'לה קורד אה לינג מצליחה בגלל המיקום והאווירה: טרסה קז׳ואלית בפטיט פראנס עם אוכל אלזסי־נוח ונוף תעלות.',see:['מנות שפצלה ואוכל אזורי','שולחנות בחוץ בפטיט פראנס','ארוחה תוססת אבל לא רשמית'],fit:'מתאים למבקרים ראשונים שרוצים אוכל ונוף יחד.',tip:'המיקום הוא חלק מהחוויה; להזמין או להימנע משעות עומס.'}},
  'Maison Kammerzell': { en:{why:'Maison Kammerzell is a meal inside a Strasbourg landmark: ornate timbered façade outside, historic dining atmosphere inside.',see:['One of the city’s most photographed façades','Alsatian classics in a heritage setting','Cathedral-square location'],fit:'Best when you want the restaurant itself to feel like part of the sightseeing.',tip:'It is not the cheapest option; choose it for setting and history as much as food.'}, he:{why:'Maison Kammerzell היא ארוחה בתוך אחד המבנים האייקוניים של שטרסבורג: חזית עץ מפורטת מבחוץ ואווירה היסטורית בפנים.',see:['אחת החזיתות המצולמות בעיר','קלאסיקות אלזסיות בסביבה היסטורית','מיקום ליד הקתדרלה'],fit:'מתאים כשרוצים שהמסעדה עצמה תהיה חלק מהסיור.',tip:'זה לא המקום הכי זול; בוחרים בו בשביל התפאורה וההיסטוריה לא פחות מהאוכל.'}},
  'Au Pont Corbeau': { en:{why:'Au Pont Corbeau is the winstub choice: old Alsatian tavern atmosphere, regional dishes and a more traditional feel than a generic brasserie.',see:['Wood-panelled winstub interior','Choucroute, tarte flambée and regional plates','A strong local-food identity'],fit:'Best for travellers who came to Alsace to taste Alsace.',tip:'Book ahead; traditional small restaurants fill quickly.'}, he:{why:'או פון קורבו הוא בחירת ה־winstub: טברנה אלזסית ישנה, מנות אזוריות ותחושה מסורתית יותר מבראסרי רגילה.',see:['חלל עץ של טברנה אלזסית','שוקרוט, טארט פלמבה ומנות אזוריות','זהות אוכל מקומית חזקה'],fit:'מתאים למי שהגיע לאלזס כדי לטעום אלזס.',tip:'להזמין מראש; מסעדות מסורתיות קטנות מתמלאות מהר.'}},
  'Binchstub Broglie': { en:{why:'Binchstub is about tarte flambée done simply and well: thin, crisp, shareable and ideal when you want Alsace without a heavy meal.',see:['Classic and creative tarte flambée','Casual tables and quick service feel','A good group-sharing format'],fit:'Good for budget-conscious dinners and groups.',tip:'Order several versions to share; one flavour is not the point.'}, he:{why:'Binchstub היא סביב טארט פלמבה פשוט וטוב: דק, פריך, מתאים לחלוקה ומעולה כשרוצים אלזס בלי ארוחה כבדה.',see:['טארט פלמבה קלאסי וגרסאות יצירתיות','שולחנות קז׳ואליים ושירות מהיר','פורמט טוב לחלוקה בקבוצה'],fit:'מתאים לארוחה לא יקרה ולקבוצות.',tip:'להזמין כמה סוגים לחלוקה; הגיוון הוא העניין.'}},
  // Strasbourg nightlife
  'Krutenau bars': { en:{why:'Krutenau is Strasbourg’s casual student-night neighbourhood: small bars, mixed crowds and a less postcard-perfect mood than Petite France.',see:['Cluster of easygoing bars','Student/local atmosphere','Good area for moving between places'],fit:'Best for a flexible casual night rather than one fancy venue.',tip:'Start with one bar and let the street decide the next stop.'}, he:{why:'קרוטנו הוא אזור לילה סטודנטיאלי וקז׳ואלי בשטרסבורג: ברים קטנים, קהל מעורב ואווירה פחות גלויה־תיירותית מפטיט פראנס.',see:['ריכוז ברים קלילים','אווירה מקומית/סטודנטיאלית','אזור נוח לעבור בין מקומות'],fit:'מתאים לערב גמיש וקז׳ואלי, לא למקום יוקרתי אחד.',tip:'להתחיל בבר אחד ולתת לרחוב לבחור את הבא.'}},
  'Petite France night walk': { en:{why:'Petite France at night is not nightlife in the club sense; it is the romantic quiet version of Strasbourg, with reflections, bridges and half-timbered houses lit softly.',see:['Canal reflections','Illuminated timbered houses','Quiet bridges and photo corners'],fit:'Best for couples, photographers and a low-cost evening.',tip:'Go after dinner when day-trip crowds thin out.'}, he:{why:'פטיט פראנס בלילה היא לא חיי לילה של מועדון; זו הגרסה הרומנטית והשקטה של שטרסבורג, עם השתקפויות, גשרים ובתי עץ מוארים.',see:['השתקפויות בתעלות','בתי עץ מוארים ברכות','גשרים שקטים ופינות צילום'],fit:'מתאים לזוגות, צילום וערב בלי עלות.',tip:'ללכת אחרי ארוחת ערב כשהעומס של היום יורד.'}},
  'Code Bar': { en:{why:'Code Bar is for cocktails rather than beer-hopping: a more crafted, sit-down evening when you want drinks to be the main event.',see:['Cocktail menu and bar presentation','Small-bar atmosphere','Better for conversation than dancing'],fit:'Good for couples and cocktail-focused travellers.',tip:'Check opening hours and reserve if you want a specific time.'}, he:{why:'Code Bar מתאים לערב קוקטיילים ולא לדילוג בין בירות: ערב ישיבה מוקפד יותר כשהמשקאות הם המרכז.',see:['תפריט קוקטיילים והגשה מוקפדת','אווירת בר קטן','יותר טוב לשיחה מאשר לריקודים'],fit:'מתאים לזוגות וחובבי קוקטיילים.',tip:'לבדוק שעות ולהזמין אם חשוב זמן מסוים.'}},
  'Académie de la Bière': { en:{why:'Académie de la Bière is a beer-first Strasbourg stop: better when you want choice, casual energy and something less formal than wine bars.',see:['Beer selection and casual tables','Local/student-friendly atmosphere','Simple food pairing possibilities'],fit:'Good for groups and relaxed beer nights.',tip:'Choose it when conversation and beer matter more than design.'}, he:{why:'Académie de la Bière הוא מקום של בירה לפני הכול: מתאים כשמחפשים מבחר, אנרגיה קז׳ואלית ופחות רשמיות מברי יין.',see:['מבחר בירות ושולחנות קז׳ואליים','אווירה מקומית/סטודנטיאלית','אפשרות לאוכל פשוט ליד הבירה'],fit:'מתאים לקבוצות ולערב בירה רגוע.',tip:'לבחור בו כששיחה ובירה חשובות יותר מעיצוב.'}},
  // Strasbourg experiences/mustdo
  'Strasbourg Boat Tour': { en:{why:'A boat tour explains Strasbourg quickly: from the water you understand the island city, Petite France, Neustadt and the European quarter in one continuous route.',see:['Petite France from the canals','Covered Bridges and Vauban Dam area','Neustadt and European institutions depending on route','Audio commentary that gives structure to the city'],fit:'Excellent for first-day orientation and travellers who want context without walking all day.',tip:'Do it early in the trip; it makes the city easier to understand afterward.'}, he:{why:'שייט בשטרסבורג מסביר את העיר מהר: מהמים מבינים את העיר־אי, פטיט פראנס, נוישטאדט והרובע האירופי במסלול אחד רציף.',see:['פטיט פראנס מהתעלות','הגשרים המקורים וסכר וובאן','נוישטאדט והמוסדות האירופיים לפי המסלול','הדרכה קולית שנותנת הקשר לעיר'],fit:'מצוין ליום הראשון ולמי שרוצה להבין בלי ללכת כל היום.',tip:'לעשות בתחילת הטיול; אחר כך העיר מובנת הרבה יותר.'}},
  'Cathedral Platform View': { en:{why:'The cathedral platform turns Strasbourg from lanes into a map: rooftops, river lines, the Black Forest direction and the scale of the old city.',see:['Rooftops of Grande Île','Cathedral stonework up close','Long views toward the region on clear days'],fit:'Best for people who like viewpoints and do not mind stairs.',tip:'Go when visibility is good; the climb is less rewarding in heavy rain or haze.'}, he:{why:'תצפית הקתדרלה הופכת את שטרסבורג ממבוך סמטאות למפה: גגות, קווי נהר, כיוון היער השחור וקנה המידה של העיר העתיקה.',see:['גגות ה־Grande Île','אבני הקתדרלה מקרוב','נוף רחוק ביום בהיר'],fit:'מתאים לחובבי תצפיות שלא נרתעים ממדרגות.',tip:'לעלות כשיש ראות טובה; בגשם או אובך התמורה נמוכה יותר.'}},
  'Strasbourg Cathedral': { en:{why:'Strasbourg Cathedral is the city’s anchor: pink sandstone, gothic height and a façade so detailed it can hold you in place before you even enter.',see:['Gothic façade and carved details','Astronomical clock area if visiting inside','Cathedral square life around it'],fit:'Essential for first-time visitors and architecture lovers.',tip:'Look at it once in daylight and once at night; it changes completely.'}, he:{why:'קתדרלת שטרסבורג היא העוגן של העיר: אבן חול ורודה, גובה גותי וחזית כל כך מפורטת שאפשר לעמוד מולה הרבה לפני שנכנסים.',see:['חזית גותית ופרטי גילוף','אזור השעון האסטרונומי אם נכנסים','חיי הכיכר סביב הקתדרלה'],fit:'חובה למבקרים ראשונים וחובבי אדריכלות.',tip:'לראות אותה פעם ביום ופעם בלילה; היא משתנה לגמרי.'}},
  'Petite France': { en:{why:'Petite France is the image most people carry home from Strasbourg: canals, timbered houses and bridges packed into a walkable historic quarter.',see:['Canals and reflections','Half-timbered houses','Bridges, locks and photo viewpoints','Slow lanes for wandering'],fit:'Best for first-time visitors, couples and photographers.',tip:'Visit early morning or after dinner for a softer, less crowded experience.'}, he:{why:'פטיט פראנס היא התמונה שרוב האנשים לוקחים משטרסבורג: תעלות, בתי עץ וגשרים ברובע היסטורי קטן ונגיש.',see:['תעלות והשתקפויות','בתי עץ אלזסיים','גשרים, סכרים ונקודות צילום','סמטאות לשיטוט איטי'],fit:'מתאים לביקור ראשון, זוגות וצלמים.',tip:'לבקר מוקדם בבוקר או אחרי ארוחת ערב לחוויה רכה ופחות עמוסה.'}},
  'Covered Bridges': { en:{why:'The Covered Bridges area gives Strasbourg a fortified, river-city feel. It is where the postcard prettiness gets a little more medieval and architectural.',see:['Bridge towers and water channels','Views toward Petite France','Good sunset and blue-hour photo angles'],fit:'Good for walkers, photographers and anyone already near Petite France.',tip:'Combine with Vauban Dam viewpoint rather than treating it as a separate trip.'}, he:{why:'אזור הגשרים המקורים נותן לשטרסבורג תחושת עיר מבוצרת על מים. כאן היופי הגלוי מקבל צד יותר ימי־ביניימי ואדריכלי.',see:['מגדלי גשר ותעלות מים','מבט לכיוון פטיט פראנס','זוויות צילום טובות לשקיעה ושעה כחולה'],fit:'מתאים להולכים ברגל, צלמים ומי שכבר באזור פטיט פראנס.',tip:'לשלב עם תצפית סכר וובאן ולא כיעד נפרד.'}},
  'Vauban Dam viewpoint': { en:{why:'The Vauban Dam viewpoint is one of the best free ways to understand Strasbourg’s water-and-fortification layout.',see:['Panorama over Petite France','Covered Bridges from above','River channels and old defensive structure'],fit:'Best for short city walks and photography.',tip:'Go near sunset if the weather is clear.'}, he:{why:'תצפית סכר וובאן היא אחת הדרכים החינמיות הטובות להבין את מבנה המים והביצורים של שטרסבורג.',see:['פנורמה על פטיט פראנס','הגשרים המקורים מלמעלה','תעלות ומבנה הגנה ישן'],fit:'מתאים להליכה קצרה בעיר ולצילום.',tip:'להגיע לקראת שקיעה ביום בהיר.'}}
};


// v32: Clean Vienna guide database. Overrides all generic Vienna card texts.
const V32_VIENNA_CLEAN_GUIDE_CONTENT = {
  "Bratislava": {
    "en": {
      "why": "Bratislava is the easiest way to add another country to a Vienna trip without turning the day into a marathon. The old town is compact, the castle looks over the Danube, and the mood is smaller, cheaper and more relaxed than imperial Vienna.",
      "see": [
        "Bratislava Castle and Danube views",
        "Old Town lanes, main square and cafés",
        "A different capital-city atmosphere in one short day"
      ],
      "fit": "Best for travellers who want a light cross-border day, not a heavy museum itinerary.",
      "tip": "Start at the castle for orientation, then spend the rest of the day walking downhill into the old town."
    },
    "he": {
      "why": "ברטיסלבה היא הדרך הכי קלה להוסיף עוד מדינה לטיול בוינה בלי להפוך את היום למרתון. העיר העתיקה קטנה, הטירה משקיפה על הדנובה והאווירה זולה, רגועה ופחות אימפריאלית מוינה.",
      "see": [
        "טירת ברטיסלבה ותצפית לדנובה",
        "סמטאות העיר העתיקה, הכיכר המרכזית ובתי קפה",
        "תחושה של עיר בירה אחרת ביום קצר אחד"
      ],
      "fit": "מתאים למי שרוצה טיול חוץ קליל למדינה נוספת, לא יום מוזיאונים כבד.",
      "tip": "להתחיל בטירה ואז לרדת ברגל למרכז העתיק — כך מבינים את העיר מהר."
    }
  },
  "Wachau Valley": {
    "en": {
      "why": "The Wachau is the Danube at its most photogenic: vineyard slopes, river bends, abbeys, ruined castles and small wine villages. It gives the Vienna trip a countryside chapter instead of another palace day.",
      "see": [
        "Danube bends and vineyard terraces",
        "Dürnstein, Krems or small wine villages",
        "Apricot shops, wine taverns and river viewpoints"
      ],
      "fit": "Great for couples, photographers and slow-travel days; less ideal if you hate planning connections.",
      "tip": "If you rely on public transport, plan train/boat/bus links before leaving — the route is the whole day."
    },
    "he": {
      "why": "עמק ואכאו הוא הדנובה בגרסה הכי מצולמת שלה: מדרונות כרמים, פיתולי נהר, מנזרים, טירות הרוסות וכפרי יין קטנים. הוא מוסיף לטיול פרק כפרי ולא עוד יום ארמונות.",
      "see": [
        "פיתולי הדנובה ומדרונות כרמים",
        "דורנשטיין, קרמס או כפרי יין קטנים",
        "חנויות משמשים, טברנות יין ותצפיות נהר"
      ],
      "fit": "מעולה לזוגות, צילום ויום רגוע; פחות למי שלא רוצה לתכנן חיבורים.",
      "tip": "אם נוסעים בתחבורה ציבורית, לתכנן מראש רכבת/שייט/אוטובוס — הדרך היא חלק מהחוויה."
    }
  },
  "Melk Abbey": {
    "en": {
      "why": "Melk Abbey is a baroque statement above the Danube. You go for the golden church, the grand library, the terraces and the feeling of walking through a monastery that was built to impress.",
      "see": [
        "The baroque church and museum route",
        "The historic library and painted halls",
        "Danube views from the abbey terraces"
      ],
      "fit": "Best for architecture, culture and a structured half-day or full-day from Vienna.",
      "tip": "Do not rush it as only a photo stop; the interior is the reason Melk works."
    },
    "he": {
      "why": "מנזר מלק הוא הצהרת בארוק ענקית מעל הדנובה. מגיעים בשביל הכנסייה המוזהבת, הספרייה, המרפסות והתחושה שמדובר במנזר שנבנה כדי להרשים.",
      "see": [
        "הכנסייה הבארוקית והמסלול המוזיאלי",
        "הספרייה ההיסטורית והאולמות המצוירים",
        "תצפיות לדנובה ממרפסות המנזר"
      ],
      "fit": "מתאים לאדריכלות, תרבות וטיול מסודר של חצי יום עד יום.",
      "tip": "לא להתייחס אליו רק כעצירת צילום; הפנים של המנזר הוא הסיבה להגיע."
    }
  },
  "Baden bei Wien": {
    "en": {
      "why": "Baden is Vienna’s easy spa-town escape: elegant streets, parks, cafés, thermal heritage and a slower rhythm. It is close enough for a spontaneous half day and different enough to feel like leaving the city.",
      "see": [
        "Spa architecture and quiet squares",
        "Kurpark paths and garden corners",
        "Casino Baden and evening lights if staying later"
      ],
      "fit": "Best for a calm half-day, couples and travellers who want a reset without long travel.",
      "tip": "Use Baden when you want to leave Vienna but still return for dinner."
    },
    "he": {
      "why": "באדן ליד וינה היא בריחת הספא הקלה של העיר: רחובות אלגנטיים, פארקים, בתי קפה, מורשת מרחצאות וקצב איטי יותר. היא קרובה מספיק לחצי יום ספונטני ושונה מספיק כדי להרגיש יציאה מהעיר.",
      "see": [
        "אדריכלות ספא וכיכרות שקטות",
        "שבילי Kurpark ופינות גן",
        "קזינו באדן ואורות ערב אם נשארים מאוחר"
      ],
      "fit": "מתאים לחצי יום רגוע, זוגות ומי שרוצה איפוס בלי נסיעה ארוכה.",
      "tip": "לבחור בבאדן כשרוצים לצאת מוינה אבל לחזור לארוחת ערב בעיר."
    }
  },
  "Hallstatt": {
    "en": {
      "why": "Hallstatt is the famous lake-and-mountain postcard of Austria. It is far and often crowded, so it is worth it only if that alpine village image is personally important to your trip.",
      "see": [
        "The classic lakefront viewpoint",
        "Pastel houses pressed between mountain and water",
        "Salt-mine or skywalk options if time allows"
      ],
      "fit": "Best for car travellers, photographers and first-time Austria visitors who accept a very long day.",
      "tip": "Leave extremely early; arriving late turns beauty into crowds and logistics."
    },
    "he": {
      "why": "הלשטאט היא גלויה אוסטרית מפורסמת של אגם והרים. היא רחוקה ולעיתים עמוסה, ולכן שווה רק אם תמונת הכפר האלפיני הזו חשובה לך באמת בטיול.",
      "see": [
        "נקודת הצילום הקלאסית על שפת האגם",
        "בתים צבעוניים דחוסים בין הר למים",
        "מכרה מלח או Skywalk אם יש זמן"
      ],
      "fit": "מתאים במיוחד עם רכב, לצילום ולמי שמוכן ליום ארוך מאוד.",
      "tip": "לצאת מוקדם מאוד; הגעה מאוחרת הופכת יופי לעומס ולוגיסטיקה."
    }
  },
  "Graz": {
    "en": {
      "why": "Graz feels younger and warmer than Vienna: red roofs, courtyards, a hilltop clock tower and a stronger everyday food-and-design energy. It is a real city day, not just a monument stop.",
      "see": [
        "Schlossberg and the clock tower",
        "Old town courtyards and red rooftops",
        "Murinsel, cafés and Styrian food stops"
      ],
      "fit": "Good for travellers who like walking cities, food and design more than royal palaces.",
      "tip": "Start from Schlossberg to understand the city, then wander without over-scheduling."
    },
    "he": {
      "why": "גראץ מרגישה צעירה וחמה יותר מוינה: גגות אדומים, חצרות, מגדל שעון על גבעה ואנרגיה יומיומית של אוכל ועיצוב. זה יום עירוני אמיתי, לא רק עצירת מונומנט.",
      "see": [
        "Schlossberg ומגדל השעון",
        "חצרות העיר העתיקה וגגות אדומים",
        "Murinsel, בתי קפה ואוכל שטירי"
      ],
      "fit": "מתאים למי שאוהב ערים להליכה, אוכל ועיצוב יותר מארמונות.",
      "tip": "להתחיל מה־Schlossberg כדי להבין את העיר ואז לשוטט בלי לדחוס."
    }
  },
  "Laxenburg Castle Park": {
    "en": {
      "why": "Laxenburg is a romantic park landscape built for slow wandering: lakes, bridges, lawns and Franzensburg sitting like a storybook castle on an island.",
      "see": [
        "Franzensburg on the lake island",
        "Long park paths, bridges and water views",
        "Picnic lawns and quiet photo corners"
      ],
      "fit": "Great for couples, families and green space close to Vienna.",
      "tip": "Choose it on a good-weather day; the park itself is the attraction."
    },
    "he": {
      "why": "לקסנבורג הוא נוף פארק רומנטי שנבנה לשיטוט איטי: אגמים, גשרים, מדשאות ו־Franzensburg שנראה כמו טירת אגדות על אי.",
      "see": [
        "Franzensburg על אי באגם",
        "שבילי פארק ארוכים, גשרים ונופי מים",
        "מדשאות ופינות צילום שקטות"
      ],
      "fit": "מעולה לזוגות, משפחות וירוק קרוב לוינה.",
      "tip": "לבחור ביום עם מזג אוויר טוב; הפארק עצמו הוא האטרקציה."
    }
  },
  "Klosterneuburg Abbey": {
    "en": {
      "why": "Klosterneuburg Abbey is close to Vienna but feels like a different chapter: monastery, wine culture, imperial history and views over the Danube edge of the city.",
      "see": [
        "Abbey architecture and courtyards",
        "Wine-cellar heritage depending on tours",
        "Views and a calmer town setting"
      ],
      "fit": "Good for a short culture trip when you do not want a full day away.",
      "tip": "Check tour times; the abbey is more rewarding when you enter, not just view the outside."
    },
    "he": {
      "why": "מנזר קלוסטרנויבורג קרוב לוינה אבל מרגיש כמו פרק אחר: מנזר, תרבות יין, היסטוריה קיסרית ונוף בקצה הדנובה של העיר.",
      "see": [
        "אדריכלות מנזר וחצרות",
        "מורשת מרתפי יין לפי סיורים",
        "תצפיות ואווירת עיירה רגועה"
      ],
      "fit": "מתאים לטיול תרבות קצר כשלא רוצים יום מלא מחוץ לעיר.",
      "tip": "לבדוק שעות סיורים; המקום משתלם יותר כשנכנסים ולא רק מצלמים מבחוץ."
    }
  },
  "Semmering Railway": {
    "en": {
      "why": "Semmering is a scenery-in-motion day: historic mountain railway engineering, viaducts, forested slopes and alpine air. Here the journey is part of the destination.",
      "see": [
        "Mountain railway views",
        "Viaducts and forested valleys",
        "Short hikes or resort-town atmosphere"
      ],
      "fit": "Best for train lovers, landscapes and travellers bored by another palace.",
      "tip": "Do not overpack the route; the slow unfolding of the landscape is the point."
    },
    "he": {
      "why": "זמרינג הוא יום של נוף בתנועה: הנדסת רכבת הררית היסטורית, גשרים, מדרונות מיוערים ואוויר אלפיני. כאן הדרך היא חלק מהיעד.",
      "see": [
        "נופי רכבת הרריים",
        "גשרים ועמקים מיוערים",
        "הליכות קצרות או אווירת עיירת נופש"
      ],
      "fit": "מתאים לחובבי רכבות, נופים ומי שמאס בעוד ארמון.",
      "tip": "לא לדחוס יותר מדי; ההיפתחות האיטית של הנוף היא העיקר."
    }
  },
  "Eisenstadt": {
    "en": {
      "why": "Eisenstadt is Haydn’s city: a quiet small capital shaped by the Esterházy family, palace culture and classical-music history. It is gentler than Vienna but still very Austrian.",
      "see": [
        "Esterházy Palace exterior/interior if open",
        "Haydn-related sites and music history",
        "A compact old-town walk"
      ],
      "fit": "Good for music lovers and travellers who enjoy smaller towns with one strong story.",
      "tip": "Pair the palace with a café stop; the town works best at a relaxed pace."
    },
    "he": {
      "why": "אייזנשטאדט היא העיר של היידן: בירה קטנה ושקטה שעוצבה על ידי משפחת אסטרהאזי, תרבות ארמונות והיסטוריה של מוזיקה קלאסית. היא עדינה יותר מוינה אבל עדיין אוסטרית מאוד.",
      "see": [
        "ארמון Esterházy מבחוץ/מבפנים אם פתוח",
        "אתרי היידן והיסטוריה מוזיקלית",
        "הליכה קומפקטית בעיר העתיקה"
      ],
      "fit": "מתאים לחובבי מוזיקה ולמי שאוהב עיירות קטנות עם סיפור חזק אחד.",
      "tip": "לשלב את הארמון עם עצירת קפה; העיר עובדת בקצב רגוע."
    }
  },
  "Carnuntum": {
    "en": {
      "why": "Carnuntum is not another ruin field. A reconstructed Roman quarter lets you walk into houses, baths and rooms that show daily life on the Danube frontier almost 2,000 years ago.",
      "see": [
        "Reconstructed Roman houses on the original site",
        "Public baths, kitchens and painted rooms",
        "Museum Carnuntinum and the wider Roman frontier story"
      ],
      "fit": "Excellent for history, families and travellers who want a hands-on ancient-world visit.",
      "tip": "Go in the morning on hot days; much of the experience is open-air."
    },
    "he": {
      "why": "קרנונטום הוא לא עוד שדה חורבות. רובע רומי משוחזר מאפשר להיכנס לבתים, מרחצאות וחדרים שמראים את חיי היומיום בגבול הדנובה לפני כמעט 2,000 שנה.",
      "see": [
        "בתים רומיים משוחזרים באתר המקורי",
        "מרחצאות, מטבחים וחדרים מצוירים",
        "Museum Carnuntinum וסיפור גבול האימפריה הרומית"
      ],
      "fit": "מצוין להיסטוריה, משפחות ומי שרוצה ביקור מוחשי בעולם העתיק.",
      "tip": "בימים חמים להגיע בבוקר; חלק גדול מהחוויה פתוח לשמש."
    }
  },
  "Neusiedler See": {
    "en": {
      "why": "Neusiedler See is Austria’s big shallow steppe lake: reeds, birds, cycling paths, wine villages and wide horizons that feel nothing like central Vienna.",
      "see": [
        "Lake views, reed beds and open sky",
        "Cycling or walking routes",
        "Wine villages and relaxed lakeside stops"
      ],
      "fit": "Best for nature, cycling, wine and a slower outdoor day.",
      "tip": "Wind and season matter; check weather before committing the day."
    },
    "he": {
      "why": "אגם נויזידל הוא אגם הערבה הגדול והרדוד של אוסטריה: קני סוף, ציפורים, שבילי אופניים, כפרי יין ואופקים רחבים שלא מזכירים את מרכז וינה.",
      "see": [
        "נופי אגם, קני סוף ושמיים פתוחים",
        "מסלולי אופניים או הליכה",
        "כפרי יין ועצירות רגועות ליד המים"
      ],
      "fit": "מתאים לטבע, אופניים, יין ויום חוץ איטי.",
      "tip": "רוח ועונה משנות את החוויה; לבדוק מזג אוויר לפני שמקדישים יום."
    }
  },
  "Krems an der Donau": {
    "en": {
      "why": "Krems is a Danube town with wine-country texture: old streets, river access and a useful base for tasting the Wachau without trying to cover everything.",
      "see": [
        "Old town lanes and squares",
        "Danube-side walks",
        "Wine bars and nearby vineyard routes"
      ],
      "fit": "Good for travellers who want Wachau flavor with easier logistics than tiny villages.",
      "tip": "Use Krems as a base point rather than only a quick stop."
    },
    "he": {
      "why": "קרמס היא עיירת דנובה עם מרקם של אזור יין: רחובות עתיקים, גישה לנהר ובסיס נוח לטעום את ואכאו בלי לכסות הכול.",
      "see": [
        "סמטאות וכיכרות בעיר העתיקה",
        "הליכות ליד הדנובה",
        "ברי יין ומסלולי כרמים קרובים"
      ],
      "fit": "מתאים למי שרוצה טעם של ואכאו עם לוגיסטיקה קלה יותר מכפרים קטנים.",
      "tip": "להשתמש בקרמס כבסיס קטן ולא רק כעצירה מהירה."
    }
  },
  "Dürnstein": {
    "en": {
      "why": "Dürnstein is the Wachau’s storybook village: blue abbey tower, stone lanes, vineyards and castle ruins linked to Richard the Lionheart above the river.",
      "see": [
        "The blue abbey tower by the Danube",
        "Narrow village streets and wine shops",
        "Castle-ruin hike and river views"
      ],
      "fit": "Best for photos, wine-country mood and a compact village experience.",
      "tip": "If you hike to the ruins, wear proper shoes; the view is the reward."
    },
    "he": {
      "why": "דורנשטיין הוא כפר האגדה של ואכאו: מגדל מנזר כחול, סמטאות אבן, כרמים ושרידי טירה הקשורים לריצ׳רד לב הארי מעל הנהר.",
      "see": [
        "מגדל המנזר הכחול ליד הדנובה",
        "סמטאות כפר וחנויות יין",
        "עלייה לשרידי הטירה ותצפיות נהר"
      ],
      "fit": "מתאים לצילום, אווירת אזור יין וחוויית כפר קומפקטית.",
      "tip": "אם עולים לשרידי הטירה — נעליים נוחות; הנוף הוא התמורה."
    }
  },
  "Mayerling": {
    "en": {
      "why": "Mayerling is a quiet but dramatic history stop: the former hunting lodge tied to one of the Habsburg monarchy’s most famous tragedies.",
      "see": [
        "The memorial chapel and historic site",
        "Context around Crown Prince Rudolf",
        "A darker, more reflective Habsburg story"
      ],
      "fit": "Best for history travellers, not for someone looking for a cheerful day out.",
      "tip": "Combine it with the Vienna Woods or Baden rather than making it the only stop."
    },
    "he": {
      "why": "מאיירלינג הוא אתר היסטורי שקט אבל דרמטי: בית הציד לשעבר הקשור לאחת הטרגדיות המפורסמות של בית הבסבורג.",
      "see": [
        "קפלת הזיכרון והאתר ההיסטורי",
        "הקשר לסיפור יורש העצר רודולף",
        "צד קודר ומהורהר יותר של ההיסטוריה ההבסבורגית"
      ],
      "fit": "מתאים לחובבי היסטוריה, לא למי שמחפש יום שמח וקליל.",
      "tip": "לשלב עם יערות וינה או באדן ולא להפוך אותו לעצירה יחידה."
    }
  },
  "Forchtenstein Castle": {
    "en": {
      "why": "Forchtenstein Castle is a stronghold rather than a palace: thick walls, hilltop presence and Esterházy collections that feel more defensive and mysterious than imperial Vienna.",
      "see": [
        "Fortress architecture and hill views",
        "Historic collections and armoury atmosphere",
        "A Burgenland countryside setting"
      ],
      "fit": "Good for castle lovers and car-based travellers.",
      "tip": "Check opening days before driving; it is less flexible than an urban sight."
    },
    "he": {
      "why": "טירת פורכטנשטיין היא מבצר יותר מארמון: חומות עבות, נוכחות על גבעה ואוספי אסטרהאזי שמרגישים הגנתיים ומסתוריים יותר מוינה הקיסרית.",
      "see": [
        "אדריכלות מבצר ונוף גבעה",
        "אוספים היסטוריים ואווירת נשקייה",
        "נוף כפרי של בורגנלנד"
      ],
      "fit": "מתאים לחובבי טירות ולמטיילים עם רכב.",
      "tip": "לבדוק ימי פתיחה לפני נסיעה; זה לא אתר עירוני גמיש."
    }
  },
  "Mariazell": {
    "en": {
      "why": "Mariazell is a mountain pilgrimage town with a basilica, alpine air and a sense of old Austrian devotion. The journey is longer but gives a very different landscape from Vienna.",
      "see": [
        "Mariazell Basilica",
        "Mountain-town streets and views",
        "Pilgrimage atmosphere and local gingerbread stops"
      ],
      "fit": "Best for spiritual history, mountain scenery and car travellers.",
      "tip": "Treat it as a full-day trip; rushing Mariazell makes little sense."
    },
    "he": {
      "why": "מריאצל היא עיירת עלייה לרגל בהרים עם בזיליקה, אוויר אלפיני ותחושת מסורת אוסטרית ישנה. הדרך ארוכה יותר אבל הנוף שונה לגמרי מוינה.",
      "see": [
        "בזיליקת מריאצל",
        "רחובות עיירת הרים ונופים",
        "אווירת עלייה לרגל ועצירות ג׳ינג׳רברד מקומיות"
      ],
      "fit": "מתאים להיסטוריה רוחנית, נוף הררי ומטיילים עם רכב.",
      "tip": "להתייחס לזה כיום מלא; אין טעם למהר למריאצל."
    }
  },
  "Sopron": {
    "en": {
      "why": "Sopron is a Hungarian border-town day with medieval streets, lower prices and a different Central European flavor just beyond Austria.",
      "see": [
        "Firewatch Tower and old town",
        "Hungarian cafés and wine-country feel",
        "A compact cross-border walk"
      ],
      "fit": "Good for travellers who like small towns and cross-border variety.",
      "tip": "Bring ID/passport and check mobile roaming even though the border is easy."
    },
    "he": {
      "why": "שופרון היא עיירת גבול הונגרית עם רחובות ימי־ביניים, מחירים נמוכים יותר וטעם מרכז־אירופי אחר ממש מעבר לאוסטריה.",
      "see": [
        "מגדל Firewatch והעיר העתיקה",
        "בתי קפה הונגריים ואווירת אזור יין",
        "הליכה קומפקטית במדינה אחרת"
      ],
      "fit": "מתאים למי שאוהב עיירות קטנות וגיוון בין מדינות.",
      "tip": "לקחת תעודה/דרכון ולבדוק נדידה סלולרית למרות שהגבול קל."
    }
  },
  "Göttweig Abbey": {
    "en": {
      "why": "Göttweig Abbey rises over the Wachau like a terrace above the Danube. It is quieter than Melk and rewards visitors with views, baroque interiors and a calmer monastery experience.",
      "see": [
        "Abbey terraces and Danube views",
        "Baroque interiors depending on access",
        "A quieter alternative to Melk"
      ],
      "fit": "Good for drivers, viewpoint lovers and culture without the biggest crowds.",
      "tip": "Pair it with Krems or Dürnstein for a balanced Wachau day."
    },
    "he": {
      "why": "מנזר גוטווייג מתנשא מעל ואכאו כמו מרפסת מעל הדנובה. הוא שקט יותר ממלק ומתגמל בתצפיות, פנים בארוקי וחוויית מנזר רגועה יותר.",
      "see": [
        "מרפסות מנזר ותצפיות לדנובה",
        "פנים בארוקי לפי זמינות",
        "חלופה שקטה יותר למלק"
      ],
      "fit": "מתאים עם רכב, לחובבי תצפיות ותרבות בלי ההמונים הגדולים.",
      "tip": "לשלב עם קרמס או דורנשטיין ליום ואכאו מאוזן."
    }
  },
  "Schloss Hof": {
    "en": {
      "why": "Schloss Hof is a baroque estate built for spectacle: palace, gardens, courtyards and countryside close to the Slovak border. It feels like an imperial day out without staying in Vienna.",
      "see": [
        "Baroque palace and formal gardens",
        "Estate courtyards and seasonal displays",
        "A wide countryside setting near the border"
      ],
      "fit": "Good for families, garden lovers and car-based day trips.",
      "tip": "Check seasonal events; the estate changes character through the year."
    },
    "he": {
      "why": "שלוס הוף הוא אחוזת בארוק שנבנתה לרושם: ארמון, גנים, חצרות וכפריות ליד הגבול הסלובקי. זה יום אימפריאלי בלי להישאר בוינה.",
      "see": [
        "ארמון בארוק וגנים פורמליים",
        "חצרות אחוזה ותצוגות עונתיות",
        "מרחב כפרי רחב ליד הגבול"
      ],
      "fit": "מתאים למשפחות, חובבי גנים וטיולי רכב.",
      "tip": "לבדוק אירועים עונתיים; האחוזה משתנה לאורך השנה."
    }
  },
  "Wiener Wiaz Haus": {
    "en": {
      "why": "Wiener Wiaz Haus is the kind of place to choose when you want hearty Viennese cooking without turning dinner into a luxury event. The value is in schnitzel, goulash-style comfort and a local tavern mood.",
      "see": [
        "Cuisine: Traditional Viennese tavern",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Wiener Wiaz Haus מתאים כשרוצים אוכל וינאי ביתי בלי להפוך את הארוחה לאירוע יוקרה. הערך הוא בשניצל, תבשילים ואווירת בית אוכל מקומי.",
      "see": [
        "סוג מטבח: בית אוכל וינאי מסורתי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Gasthaus Pöschl": {
    "en": {
      "why": "Gasthaus Pöschl is small, central and respected for focused Austrian cooking. It feels more like a proper local meal than a tourist checklist restaurant.",
      "see": [
        "Cuisine: Austrian bistro",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Gasthaus Pöschl קטן, מרכזי ומוערך בזכות מטבח אוסטרי ממוקד. זה מרגיש יותר כמו ארוחה מקומית אמיתית ופחות כמו מסעדת סימון וי לתיירים.",
      "see": [
        "סוג מטבח: ביסטרו אוסטרי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Figlmüller": {
    "en": {
      "why": "Figlmüller is famous for the oversized, thin, crisp schnitzel. It is touristy, but it gives first-time visitors the classic Vienna schnitzel moment.",
      "see": [
        "Cuisine: Classic schnitzel",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "פיגלמולר מפורסם בזכות שניצל ענק, דק ופריך. הוא תיירותי, אבל נותן למבקר ראשון את רגע השניצל הקלאסי של וינה.",
      "see": [
        "סוג מטבח: שניצל קלאסי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Schnitzelwirt": {
    "en": {
      "why": "Schnitzelwirt is a simpler, louder, more casual schnitzel stop. You go for generous portions and less polished, more everyday energy.",
      "see": [
        "Cuisine: Casual schnitzel",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Schnitzelwirt הוא מקום פשוט, רועש וקז׳ואלי יותר לשניצל. מגיעים בשביל מנות גדולות ואנרגיה יומיומית פחות מלוטשת.",
      "see": [
        "סוג מטבח: שניצל קז׳ואלי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Naschmarkt stands": {
    "en": {
      "why": "Naschmarkt is not one restaurant but a food playground: snacks, produce, Middle Eastern plates, cafés and quick decisions when nobody agrees on one cuisine.",
      "see": [
        "Cuisine: Market food",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "נאשמרקט הוא לא מסעדה אחת אלא מגרש אוכל: נשנושים, דוכנים, מנות מזרח־תיכוניות, בתי קפה ופתרון כשאף אחד לא מסכים על מטבח אחד.",
      "see": [
        "סוג מטבח: אוכל שוק",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Bitzi": {
    "en": {
      "why": "Bitzi works when you want a modern casual meal rather than another heavy Austrian plate. It is useful for a lighter stop between sightseeing blocks.",
      "see": [
        "Cuisine: Modern casual bites",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Bitzi מתאים כשרוצים ארוחה מודרנית וקלילה יותר ולא עוד צלחת אוסטרית כבדה. הוא שימושי לעצירה בין חלקי יום.",
      "see": [
        "סוג מטבח: ביסטרו מודרני קליל",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Trześniewski": {
    "en": {
      "why": "Trześniewski is a Vienna institution for tiny open sandwiches with spreads. It is quick, unusual, cheap-ish and perfect when you want a snack with history.",
      "see": [
        "Cuisine: Open sandwiches",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Trześniewski הוא מוסד וינאי של כריכונים פתוחים עם ממרחים. זה מהיר, קצת מוזר, יחסית זול ומושלם כשצריך נשנוש עם היסטוריה.",
      "see": [
        "סוג מטבח: כריכונים פתוחים",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Leberkas-Pepi": {
    "en": {
      "why": "Leberkas-Pepi is where to try Leberkäse like locals eat it: warm, simple, salty and fast. This is not elegant dining; it is practical street-food Austria.",
      "see": [
        "Cuisine: Austrian fast food",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Leberkas-Pepi הוא מקום לטעום Leberkäse כמו מקומיים: חם, פשוט, מלוח ומהיר. זו לא ארוחה אלגנטית אלא אוסטריה של אוכל רחוב פרקטי.",
      "see": [
        "סוג מטבח: פאסט פוד אוסטרי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Café Hawelka": {
    "en": {
      "why": "Café Hawelka is about atmosphere more than perfect service: smoky literary memory, old Vienna mood and a coffeehouse that still feels lived-in.",
      "see": [
        "Cuisine: Old coffeehouse",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Café Hawelka הוא בעיקר אווירה: זיכרון ספרותי, וינה ישנה ובית קפה שמרגיש חי ולא מוזיאון מלוטש.",
      "see": [
        "סוג מטבח: בית קפה ותיק",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Café Central": {
    "en": {
      "why": "Café Central is the myth of Viennese café culture in one room: writers, politics, cakes, marble and slow time.",
      "see": [
        "Coffeehouse mythology",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "Café Central הוא המיתוס של תרבות בתי הקפה הווינאית בחדר אחד: סופרים, פוליטיקה, עוגות, שיש וזמן איטי.",
      "see": [
        "מיתולוגיית בית קפה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Gmoakeller": {
    "en": {
      "why": "Gmoakeller is a strong choice for traditional Austrian dishes in a serious but comfortable setting, especially if you want something more grounded than tourist schnitzel fame.",
      "see": [
        "Cuisine: Classic Austrian",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Gmoakeller מתאים לאוכל אוסטרי מסורתי באווירה רצינית אבל נוחה, במיוחד אם רוצים משהו יותר מבוסס מהשם התיירותי של השניצל.",
      "see": [
        "סוג מטבח: אוסטרי קלאסי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Glacis Beisl": {
    "en": {
      "why": "Glacis Beisl combines Austrian comfort food with a relaxed garden feel near MuseumsQuartier, making it useful after museums or for a softer evening meal.",
      "see": [
        "Cuisine: Garden beisl",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Glacis Beisl משלב אוכל אוסטרי מנחם עם תחושת גינה רגועה ליד MuseumsQuartier — טוב אחרי מוזיאונים או לארוחת ערב רכה יותר.",
      "see": [
        "סוג מטבח: בייזל עם גינה",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Neni am Naschmarkt": {
    "en": {
      "why": "Neni brings Middle Eastern sharing plates into the Vienna market scene: hummus, grilled dishes, salads and a lively table atmosphere.",
      "see": [
        "Cuisine: Middle Eastern / Israeli",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Neni מכניסה מנות מזרח־תיכוניות לשוק הווינאי: חומוס, גריל, סלטים ואווירת שולחן חיה.",
      "see": [
        "סוג מטבח: מזרח־תיכוני / ישראלי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "UBox Würstelstand": {
    "en": {
      "why": "UBox is a practical Würstelstand stop: sausages, bread, mustard and a quick local bite when you do not want a full restaurant.",
      "see": [
        "Cuisine: Sausage stand",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "UBox הוא דוכן Würstelstand פרקטי: נקניקיות, לחם, חרדל וביס מקומי מהיר כשלא רוצים מסעדה מלאה.",
      "see": [
        "סוג מטבח: דוכן נקניקיות",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Swing Kitchen": {
    "en": {
      "why": "Swing Kitchen is useful when you want vegan burgers, wraps and fast comfort food without searching too much. It is easy, predictable and good for mixed groups.",
      "see": [
        "Cuisine: Vegan fast food",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Swing Kitchen מתאים כשרוצים המבורגרים טבעוניים, ראפים ואוכל מנחם מהיר בלי לחפש יותר מדי. קל, צפוי וטוב לקבוצות מעורבות.",
      "see": [
        "סוג מטבח: פאסט פוד טבעוני",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Miznon Vienna": {
    "en": {
      "why": "Miznon Vienna is loud, casual and built around pita, vegetables and messy sharing. Choose it when you want energy, not quiet fine dining.",
      "see": [
        "Cuisine: Israeli pita food",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "מזנון וינה רועש, קז׳ואלי ובנוי סביב פיתה, ירקות ושיתוף מבולגן. לבחור בו כשרוצים אנרגיה ולא ארוחת שף שקטה.",
      "see": [
        "סוג מטבח: פיתה ישראלית",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Bitzinger Würstelstand": {
    "en": {
      "why": "Bitzinger is the classic late or quick Vienna sausage stop near major sights. It is not fancy; it is the point where sightseeing turns into a hot snack.",
      "see": [
        "Cuisine: Iconic sausage kiosk",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "ביצינגר הוא דוכן נקניקיות קלאסי לעצירה מהירה או מאוחרת ליד אתרים מרכזיים. זה לא מפואר — זו בדיוק הנקודה שבה סיור הופך לנשנוש חם.",
      "see": [
        "סוג מטבח: דוכן נקניקיות אייקוני",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Gasthaus Rebhuhn": {
    "en": {
      "why": "Gasthaus Rebhuhn feels more neighborhood than postcard. It is good when you want Austrian food with a calmer, less central-tourist rhythm.",
      "see": [
        "Cuisine: Neighborhood Austrian",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Gasthaus Rebhuhn מרגיש יותר שכונתי מגלויה תיירותית. טוב כשרוצים אוכל אוסטרי בקצב רגוע ופחות מרכז־תיירים.",
      "see": [
        "סוג מטבח: אוסטרי שכונתי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Vollpension": {
    "en": {
      "why": "Vollpension is a retro café built around “grandma” cakes, breakfast and homey nostalgia. It works when you want charm more than formal Viennese elegance.",
      "see": [
        "Cuisine: Grandma-style café",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Vollpension הוא קפה רטרו סביב עוגות “של סבתא”, ארוחות בוקר ונוסטלגיה ביתית. טוב כשרוצים קסם ולא אלגנטיות וינאית פורמלית.",
      "see": [
        "סוג מטבח: קפה בסגנון סבתא",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Bruder": {
    "en": {
      "why": "Bruder is for a more creative Vienna meal: seasonal plates, house-made drinks and a younger food-culture feeling than classic schnitzel houses.",
      "see": [
        "Cuisine: Creative modern food",
        "What to check before going: menu, opening hours and whether reservation is needed",
        "Best use: choose it when this food style matches your day, not only because it is nearby"
      ],
      "fit": "Food card: useful when you want to know the cuisine, vibe and reason before walking there.",
      "tip": "If you are hungry now, open Maps first and check current reviews plus walking time."
    },
    "he": {
      "why": "Bruder מתאים לארוחה וינאית יצירתית יותר: מנות עונתיות, משקאות ביתיים ותחושת אוכל צעירה יותר מבתי השניצל הקלאסיים.",
      "see": [
        "סוג מטבח: מטבח מודרני יצירתי",
        "לפני שהולכים: לבדוק תפריט, שעות והאם צריך הזמנה",
        "שימוש נכון: לבחור כשסגנון האוכל מתאים ליום, לא רק כי זה קרוב"
      ],
      "fit": "כרטיס אוכל: שימושי כשצריך להבין מטבח, אופי וסיבה לפני שהולכים.",
      "tip": "אם רעבים עכשיו, לפתוח מפה ולבדוק ביקורות עדכניות וזמן הליכה."
    }
  },
  "Donaukanal Bars": {
    "en": {
      "why": "A relaxed outdoor evening along the canal: drinks, street art, summer energy and moving between places instead of committing to one bar.",
      "see": [
        "Night style: Riverside casual bars",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "ערב חוץ רגוע לאורך התעלה: שתייה, סטריט־ארט, אנרגיית קיץ ותנועה בין מקומות במקום להתחייב לבר אחד.",
      "see": [
        "סגנון ערב: ברי תעלה קז׳ואליים",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Bermuda Triangle": {
    "en": {
      "why": "A dense central nightlife pocket with pubs and bars close together. It is convenient when the group wants options, not a precise reservation.",
      "see": [
        "Night style: Central pub crawl area",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "אזור חיי לילה צפוף במרכז עם פאבים וברים קרובים זה לזה. נוח כשהקבוצה רוצה אפשרויות ולא הזמנה מדויקת.",
      "see": [
        "סגנון ערב: אזור פאבים מרכזי",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Prater DOME": {
    "en": {
      "why": "A big, high-energy club choice near Prater: mainstream party mood, multiple rooms and a younger crowd.",
      "see": [
        "Night style: Large club",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בחירה גדולה ואנרגטית ליד פראטר: אווירת מסיבה מיינסטרימית, כמה חללים וקהל צעיר.",
      "see": [
        "סגנון ערב: מועדון גדול",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Loos American Bar": {
    "en": {
      "why": "A tiny architectural jewel by Adolf Loos: dark wood, mirrors, classic cocktails and a feeling of stepping into a design landmark.",
      "see": [
        "Night style: Historic cocktail bar",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "פנינה אדריכלית קטנה של אדולף לוס: עץ כהה, מראות, קוקטיילים קלאסיים ותחושה שנכנסים לאתר עיצוב.",
      "see": [
        "סגנון ערב: בר קוקטיילים היסטורי",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Krypt Bar": {
    "en": {
      "why": "A stylish underground cocktail bar for a darker, more intimate evening rather than a loud pub night.",
      "see": [
        "Night style: Hidden cocktail bar",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בר קוקטיילים תת־קרקעי ומעוצב לערב אינטימי וכהה יותר, לא לילה רועש של פאב.",
      "see": [
        "סגנון ערב: בר קוקטיילים נסתר",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Travel Shack Vienna": {
    "en": {
      "why": "An easy social bar for travellers, games and a loud casual night. Not elegant, but good if you want to meet people.",
      "see": [
        "Night style: International backpacker bar",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בר חברתי קל למטיילים, משחקים ולילה קז׳ואלי ורועש. לא אלגנטי, אבל טוב אם רוצים להכיר אנשים.",
      "see": [
        "סגנון ערב: בר תרמילאים בינלאומי",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "25hours Rooftop": {
    "en": {
      "why": "Rooftop drinks with city views and a playful hotel-bar vibe. Choose it for sunset or first drink, not for underground nightlife.",
      "see": [
        "Night style: Rooftop drinks",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "דרינקים על גג עם נוף ואווירת מלון צעירה. לבחור לשקיעה או דרינק ראשון, לא למסיבת אנדרגראונד.",
      "see": [
        "סגנון ערב: דרינק על גג",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Das Loft Bar": {
    "en": {
      "why": "A high-floor bar for panoramic Vienna views, polished cocktails and a more dressed-up evening above the city.",
      "see": [
        "Night style: Skyline cocktail view",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בר בקומה גבוהה עם נוף פנורמי לוינה, קוקטיילים מוקפדים וערב אלגנטי יותר מעל העיר.",
      "see": [
        "סגנון ערב: בר קוקטיילים עם נוף",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Volksgarten Club": {
    "en": {
      "why": "A well-known central club for dancing, mixed music nights and a more polished Vienna party scene.",
      "see": [
        "Night style: Classic club night",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "מועדון מרכזי מוכר לריקודים, ערבי מוזיקה מעורבים וסצנת מסיבות וינאית מלוטשת יותר.",
      "see": [
        "סגנון ערב: מועדון קלאסי",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Grelle Forelle": {
    "en": {
      "why": "One of Vienna’s serious electronic-music clubs: darker, louder and more music-focused than casual drinking spots.",
      "see": [
        "Night style: Techno / electronic club",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "אחד ממועדוני המוזיקה האלקטרונית הרציניים של וינה: כהה, חזק וממוקד מוזיקה יותר ממקומות שתייה קז׳ואליים.",
      "see": [
        "סגנון ערב: טכנו / אלקטרוני",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Flex": {
    "en": {
      "why": "A long-running alternative club near the canal with electronic/indie nights and less polished energy.",
      "see": [
        "Night style: Alternative club by canal",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "מועדון אלטרנטיבי ותיק ליד התעלה עם ערבי אלקטרוני/אינדי ואנרגיה פחות מלוטשת.",
      "see": [
        "סגנון ערב: מועדון אלטרנטיבי ליד התעלה",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Celeste": {
    "en": {
      "why": "Celeste is a smaller underground-feeling spot for DJs, live sets and a more local music crowd.",
      "see": [
        "Night style: Underground music bar",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "Celeste הוא מקום קטן יותר עם תחושת אנדרגראונד, דיג׳ייז, הופעות וקהל מוזיקה מקומי יותר.",
      "see": [
        "סגנון ערב: בר מוזיקה אנדרגראונד",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Kleinod Bar": {
    "en": {
      "why": "Kleinod is a refined cocktail choice: better for a stylish drink and conversation than for a wild party.",
      "see": [
        "Night style: Elegant cocktails",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "Kleinod הוא מקום קוקטיילים מעודן: מתאים לדרינק מסוגנן ושיחה יותר ממסיבה פרועה.",
      "see": [
        "סגנון ערב: קוקטיילים אלגנטיים",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Needle Vinyl Bar": {
    "en": {
      "why": "A music-forward bar where records and cocktails shape the mood. Good when you want sound and style without a club.",
      "see": [
        "Night style: Vinyl and cocktails",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בר שבו תקליטים וקוקטיילים מייצרים את האווירה. טוב כשרוצים סאונד וסטייל בלי מועדון.",
      "see": [
        "סגנון ערב: ויניל וקוקטיילים",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "If Dogs Run Free": {
    "en": {
      "why": "A creative cocktail bar with personality, better for people who enjoy bartender-led drinks and a slightly artsy mood.",
      "see": [
        "Night style: Creative cocktail bar",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בר קוקטיילים עם אופי, מתאים למי שאוהב משקאות בהובלת ברמנים ואווירה קצת אמנותית.",
      "see": [
        "סגנון ערב: בר קוקטיילים יצירתי",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "1516 Brewing": {
    "en": {
      "why": "A brewpub night: beer, pub food and a casual international crowd. Choose it when beer matters more than views.",
      "see": [
        "Night style: Brewpub",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "ערב של בר־מבשלת: בירה, אוכל פאב וקהל בינלאומי קז׳ואלי. לבחור כשבירה חשובה יותר מנוף.",
      "see": [
        "סגנון ערב: בר־מבשלת בירה",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Beaver Brewing": {
    "en": {
      "why": "Craft beer without too much ceremony: good for groups, burgers/snacks and trying something beyond standard lager.",
      "see": [
        "Night style: Craft beer pub",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "בירת קראפט בלי טקסיות: טוב לקבוצות, המבורגר/נשנושים וטעימות מעבר ללאגר רגיל.",
      "see": [
        "סגנון ערב: פאב קראפט",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Sass Music Club": {
    "en": {
      "why": "Sass is for a proper electronic late night with dancing, not a sightseeing-drinks stop.",
      "see": [
        "Night style: House / electronic club",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "Sass מתאים ללילה אלקטרוני אמיתי עם ריקודים, לא לעצירת דרינק תיירותית.",
      "see": [
        "סגנון ערב: מועדון האוס / אלקטרוני",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Josef Cocktailbar": {
    "en": {
      "why": "Josef is a cocktail-first bar with a more mature, focused drinking experience. Choose it for quality over noise.",
      "see": [
        "Night style: Serious cocktails",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "Josef הוא בר שקודם כול מתמקד בקוקטיילים וחוויית שתייה בוגרת יותר. לבחור באיכות על פני רעש.",
      "see": [
        "סגנון ערב: קוקטיילים רציניים",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "MuseumsQuartier evening": {
    "en": {
      "why": "MuseumsQuartier at night is a public-space evening: people sitting outside, cultural buildings around you and an easy urban atmosphere.",
      "see": [
        "Night style: Outdoor cultural hangout",
        "What to expect: the atmosphere is the main reason to choose it",
        "Check current event/music schedule before going"
      ],
      "fit": "Choose this when the night style matches your mood; do not treat all nightlife cards as the same.",
      "tip": "For clubs and cocktail bars, check dress code/reservations/current events before leaving."
    },
    "he": {
      "why": "MuseumsQuartier בערב הוא מרחב ציבורי חי: אנשים יושבים בחוץ, מבני תרבות סביב ואווירה עירונית קלה.",
      "see": [
        "סגנון ערב: בילוי חוץ תרבותי",
        "מה לצפות: האווירה היא הסיבה המרכזית לבחור בו",
        "לבדוק אירוע/מוזיקה עדכניים לפני שיוצאים"
      ],
      "fit": "לבחור כשסגנון הערב מתאים למצב הרוח; לא להתייחס לכל חיי הלילה אותו דבר.",
      "tip": "במועדונים וברי קוקטיילים לבדוק קוד לבוש/הזמנה/אירוע לפני שיוצאים."
    }
  },
  "Prater Giant Ferris Wheel": {
    "en": {
      "why": "The Giant Ferris Wheel is less about adrenaline and more about old Vienna nostalgia: wooden cabins, city views and the feeling of entering a symbol rather than an amusement ride.",
      "see": [
        "A slow classic ride above Vienna",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "הגלגל הענק בפראטר הוא פחות אדרנלין ויותר נוסטלגיה וינאית: קרונות עץ, נופי עיר ותחושה שנכנסים לסמל ולא למתקן שעשועים.",
      "see": [
        "סיבוב קלאסי איטי מעל וינה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Schönbrunn Palace gardens": {
    "en": {
      "why": "The gardens show Schönbrunn’s scale better than a quick palace photo: long axes, fountains, Gloriette views and the daily-life fantasy of an imperial summer residence.",
      "see": [
        "Imperial gardens and palace scale",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "הגנים מראים את קנה המידה של שנברון טוב יותר מתמונה מהירה: צירים ארוכים, מזרקות, תצפית גלורייטה ופנטזיית מעון הקיץ הקיסרי.",
      "see": [
        "גנים אימפריאליים וקנה מידה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Belvedere Palace": {
    "en": {
      "why": "Belvedere combines art and architecture: baroque palace symmetry outside and Klimt’s golden Vienna inside.",
      "see": [
        "Klimt and palace symmetry",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "בלוודר משלב אמנות ואדריכלות: סימטריה בארוקית בחוץ ו״וינה הזהובה״ של קלימט בפנים.",
      "see": [
        "קלימט וסימטריית ארמון",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Danube Canal street art": {
    "en": {
      "why": "The canal gives Vienna a younger urban edge: murals, bars, water, concrete and a break from imperial polish.",
      "see": [
        "Urban Vienna edge",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "התעלה נותנת לוינה צד עירוני צעיר יותר: גרפיטי, ברים, מים, בטון והפסקה מהליטוש הקיסרי.",
      "see": [
        "הצד העירוני הצעיר",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Vienna State Opera standing tickets": {
    "en": {
      "why": "Standing tickets turn the opera from expensive fantasy into a practical Vienna experience. You get the building, the music and the ritual without paying premium seats.",
      "see": [
        "Opera without the luxury price",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "כרטיסי עמידה הופכים את האופרה מחלום יקר לחוויה וינאית מעשית: המבנה, המוזיקה והטקס בלי לשלם על מושבי פרימיום.",
      "see": [
        "אופרה בלי מחיר יוקרה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Spanish Riding School": {
    "en": {
      "why": "The riding school keeps a court tradition alive in real time, with precision, ritual and horses trained like performers.",
      "see": [
        "Court tradition alive",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "בית הספר הספרדי לרכיבה משמר מסורת חצר בזמן אמת, עם דיוק, טקסיות וסוסים שמאומנים כמו אמנים.",
      "see": [
        "מסורת חצר חיה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Kunsthistorisches Museum": {
    "en": {
      "why": "This museum shows collecting as power: masterpieces, imperial halls and a building that is itself part of the experience.",
      "see": [
        "Art collection as empire",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "המוזיאון הזה מציג איסוף ככוח: יצירות מופת, אולמות אימפריאליים ומבנה שהוא עצמו חלק מהחוויה.",
      "see": [
        "אוסף אמנות ככוח",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Hundertwasserhaus": {
    "en": {
      "why": "Hundertwasserhaus is a necessary contrast: colorful, uneven and organic in a city that can feel very formal.",
      "see": [
        "Playful anti-imperial Vienna",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "Hundertwasserhaus הוא ניגוד הכרחי: צבעוני, לא אחיד ואורגני בעיר שלפעמים מרגישה פורמלית מאוד.",
      "see": [
        "וינה צבעונית נגד פורמליות",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Naschmarkt food walk": {
    "en": {
      "why": "A Naschmarkt walk is for tasting Vienna’s multicultural side: produce, spices, cafés, snacks and quick food decisions in one long market strip.",
      "see": [
        "Food market wandering",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "הליכה בנאשמרקט נועדה לטעום את הצד הרב־תרבותי של וינה: ירקות, תבלינים, בתי קפה, נשנושים והחלטות אוכל מהירות ברצועת שוק אחת.",
      "see": [
        "שיטוט שוק אוכל",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Ring Tram scenic loop": {
    "en": {
      "why": "The Ring gives a comfortable first orientation: parliament, opera, museums and grand boulevards without walking yourself tired.",
      "see": [
        "Easy city orientation",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "הטבעת נותנת התמצאות ראשונה נוחה: פרלמנט, אופרה, מוזיאונים ושדרות גדולות בלי להתיש את הרגליים.",
      "see": [
        "התמצאות עירונית קלה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Danube Tower view": {
    "en": {
      "why": "The Danube Tower shows Vienna as a modern city with river, suburbs and skyline, not only as old-town monuments.",
      "see": [
        "High modern viewpoint",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "מגדל הדנובה מראה את וינה כעיר מודרנית עם נהר, פרברים וקו רקיע — לא רק מונומנטים בעיר העתיקה.",
      "see": [
        "תצפית מודרנית גבוהה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Grinzing wine taverns": {
    "en": {
      "why": "Grinzing is about the Heuriger ritual: local wine, simple food, leafy lanes and an evening that feels village-like inside the capital.",
      "see": [
        "Heuriger evening",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "גרינציג הוא טקס ה־Heuriger: יין מקומי, אוכל פשוט, סמטאות ירוקות וערב שמרגיש כמו כפר בתוך הבירה.",
      "see": [
        "ערב הויריגר",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Stadtpark walk": {
    "en": {
      "why": "Stadtpark is a soft break between sights: greenery, water, music statues and a calm reset inside the city.",
      "see": [
        "Soft green break",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "שטאדטפארק הוא הפסקה רכה בין אתרים: ירוק, מים, פסלי מוזיקה ואיפוס רגוע בתוך העיר.",
      "see": [
        "הפסקה ירוקה רכה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Central Cemetery music graves": {
    "en": {
      "why": "The Central Cemetery turns music history into a physical walk among graves of composers and cultural figures. It is reflective, not spooky.",
      "see": [
        "Vienna’s music memory",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "בית הקברות המרכזי הופך היסטוריית מוזיקה להליכה פיזית בין קברי מלחינים ודמויות תרבות. זה מהורהר, לא מפחיד.",
      "see": [
        "זיכרון המוזיקה של וינה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Albertina Museum": {
    "en": {
      "why": "Albertina combines major exhibitions with a palace setting, so the visit feels both cultural and architectural.",
      "see": [
        "Art in a Habsburg setting",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "אלברטינה משלבת תערוכות חשובות עם סביבה של ארמון, ולכן הביקור מרגיש גם תרבותי וגם אדריכלי.",
      "see": [
        "אמנות בתוך הקשר הבסבורגי",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "House of Music": {
    "en": {
      "why": "The House of Music is good when classical Vienna needs to become interactive: sound, composers and playful exhibits instead of another quiet hall.",
      "see": [
        "Interactive sound museum",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "בית המוזיקה טוב כשצריך להפוך את וינה הקלאסית לאינטראקטיבית: צליל, מלחינים ותצוגות משחקיות במקום עוד אולם שקט.",
      "see": [
        "מוזיאון סאונד אינטראקטיבי",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Rathausplatz evening": {
    "en": {
      "why": "Rathausplatz changes with seasons: films, markets, lights or events. It is a good evening check because Vienna often stages public life there.",
      "see": [
        "Open-air city square",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "Rathausplatz משתנה לפי עונה: סרטים, שווקים, אורות או אירועים. זו בדיקת ערב טובה כי וינה מרבה לקיים שם חיים ציבוריים.",
      "see": [
        "כיכר ערב פתוחה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Vienna coffeehouse crawl": {
    "en": {
      "why": "A coffeehouse crawl turns cafés into sightseeing: each stop has a different mood, pastry case and rhythm of waiting, reading and watching.",
      "see": [
        "Coffeehouse culture sampler",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "סיור בתי קפה הופך קפה לאתר תיירות: לכל עצירה אופי אחר, ויטרינת עוגות וקצב של המתנה, קריאה וצפייה באנשים.",
      "see": [
        "טעימת תרבות בתי קפה",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "Prater amusement park": {
    "en": {
      "why": "Prater is Vienna letting loose: lights, rides, snacks and old amusement-park energy alongside the famous wheel.",
      "see": [
        "Playful Vienna",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "פראטר הוא הצד המשוחרר של וינה: אורות, מתקנים, נשנושים ואנרגיית פארק שעשועים ישן סביב הגלגל הענק.",
      "see": [
        "וינה משחקית",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "MAK design museum": {
    "en": {
      "why": "MAK is for people who like objects, design, furniture and applied arts — a quieter but sharper alternative to the blockbuster museums.",
      "see": [
        "Design and applied arts",
        "What to notice: not only the object, but the mood around it",
        "Use it to add texture to the trip beyond standard sightseeing"
      ],
      "fit": "Good when you want an experience, not just another location pin.",
      "tip": "Check opening/event times; several Vienna experiences change by day or season."
    },
    "he": {
      "why": "MAK מתאים למי שאוהב חפצים, עיצוב, ריהוט ואמנות שימושית — חלופה שקטה וחדה יותר למוזיאוני הענק.",
      "see": [
        "עיצוב ואמנות שימושית",
        "מה לשים לב: לא רק האובייקט אלא האווירה סביבו",
        "להשתמש בזה כדי להוסיף עומק לטיול מעבר לאתרים רגילים"
      ],
      "fit": "מתאים כשרוצים חוויה ולא רק עוד נקודה במפה.",
      "tip": "לבדוק שעות/אירועים; חוויות רבות בוינה משתנות לפי יום או עונה."
    }
  },
  "St. Stephen’s Cathedral": {
    "en": {
      "why": "Stephansdom is the landmark that organizes Vienna around it: gothic stone, roof tiles, bells and a square that never really sleeps.",
      "see": [
        "The city’s vertical anchor",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "קתדרלת סטפן היא הסימן שמארגן סביבו את וינה: אבן גותית, רעפי גג, פעמונים וכיכר שלא באמת נרדמת.",
      "see": [
        "העוגן האנכי של העיר",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Schönbrunn Palace": {
    "en": {
      "why": "Schönbrunn is where the Habsburgs turned power into gardens, rooms and long views. It explains imperial Vienna better than almost any single site.",
      "see": [
        "Imperial summer fantasy",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "שנברון הוא המקום שבו ההבסבורגים הפכו כוח לגנים, חדרים ומבטים ארוכים. הוא מסביר את וינה הקיסרית טוב כמעט מכל אתר יחיד.",
      "see": [
        "פנטזיית הקיץ הקיסרית",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Belvedere Klimt": {
    "en": {
      "why": "Seeing Klimt at Belvedere connects the palace city with Vienna’s modern artistic identity — gold, symbolism and a very different kind of glamour.",
      "see": [
        "The golden Vienna moment",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "קלימט בבלוודר מחבר את עיר הארמונות עם הזהות האמנותית המודרנית של וינה — זהב, סימבוליזם וזוהר מסוג אחר.",
      "see": [
        "רגע וינה הזהובה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Ringstrasse walk": {
    "en": {
      "why": "The Ringstrasse is Vienna presenting itself: opera, parliament, museums, university and boulevards built to impress.",
      "see": [
        "Vienna as a stage",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "הרינגשטראסה היא וינה שמציגה את עצמה: אופרה, פרלמנט, מוזיאונים, אוניברסיטה ושדרות שנבנו להרשים.",
      "see": [
        "וינה כבמה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Hofburg Palace": {
    "en": {
      "why": "Hofburg is not one building but the old machinery of empire sitting inside the modern city. It gives scale to Vienna’s political past.",
      "see": [
        "Power in the city centre",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "הופבורג אינו רק בניין אלא מכונת האימפריה הישנה בתוך העיר המודרנית. הוא נותן קנה מידה לעבר הפוליטי של וינה.",
      "see": [
        "כוח במרכז העיר",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Vienna State Opera": {
    "en": {
      "why": "The opera house is where Vienna’s music identity becomes visible architecture. Even from outside, it tells you what the city values.",
      "see": [
        "The music-city symbol",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "בית האופרה הוא המקום שבו זהות המוזיקה של וינה הופכת לאדריכלות נראית. גם מבחוץ הוא אומר מה העיר מעריכה.",
      "see": [
        "סמל עיר המוזיקה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Naschmarkt": {
    "en": {
      "why": "Naschmarkt is a must because it breaks the palace rhythm: smells, stalls, cafés and international food in one long urban strip.",
      "see": [
        "The everyday food strip",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "נאשמרקט הוא חובה כי הוא שובר את קצב הארמונות: ריחות, דוכנים, בתי קפה ואוכל בינלאומי ברצועה עירונית אחת.",
      "see": [
        "רצועת האוכל היומיומית",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Prater Ferris Wheel": {
    "en": {
      "why": "The Ferris wheel is not the most thrilling ride; it is the old amusement icon that makes Vienna feel nostalgic and cinematic.",
      "see": [
        "Old amusement icon",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "הגלגל הענק הוא לא המתקן הכי מרגש; הוא אייקון השעשועים הישן שנותן לוינה תחושה נוסטלגית וקולנועית.",
      "see": [
        "אייקון שעשועים ישן",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Graben and Kohlmarkt": {
    "en": {
      "why": "These streets show Vienna’s polished centre: shop windows, façades, cafés and the ceremonial feeling of walking through the inner city.",
      "see": [
        "Elegant old-city walk",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "הרחובות האלה מראים את המרכז המלוטש של וינה: חלונות ראווה, חזיתות, בתי קפה ותחושה טקסית של הליכה בעיר הפנימית.",
      "see": [
        "הליכה אלגנטית בעיר העתיקה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "MuseumsQuartier": {
    "en": {
      "why": "MuseumsQuartier is culture turned social: museum buildings, courtyards, outdoor seating and a younger city rhythm.",
      "see": [
        "Culture without formality",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "MuseumsQuartier הוא תרבות שהפכה למרחב חברתי: מוזיאונים, חצרות, ישיבה בחוץ וקצב עירוני צעיר יותר.",
      "see": [
        "תרבות בלי פורמליות",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Karlskirche": {
    "en": {
      "why": "Karlskirche is dramatic from the outside: dome, columns, reflecting water and one of Vienna’s best photo compositions.",
      "see": [
        "Baroque drama at the water",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "Karlskirche דרמטית מבחוץ: כיפה, עמודים, מים משתקפים ואחת מקומפוזיציות הצילום היפות בעיר.",
      "see": [
        "דרמת בארוק ליד מים",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Danube Canal": {
    "en": {
      "why": "The canal gives you the city’s informal side: street art, bars, water and people using public space without ceremony.",
      "see": [
        "Urban edge beside old Vienna",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "התעלה נותנת את הצד הלא פורמלי של העיר: סטריט־ארט, ברים, מים ואנשים שמשתמשים במרחב בלי טקסיות.",
      "see": [
        "קצה עירוני ליד וינה הישנה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Rathausplatz": {
    "en": {
      "why": "Rathausplatz matters because it changes: markets, film festivals, lights, skating or events. It is Vienna’s public living room.",
      "see": [
        "Seasonal public Vienna",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "Rathausplatz חשוב כי הוא משתנה: שווקים, פסטיבלי סרטים, אורות, החלקה או אירועים. זה הסלון הציבורי של וינה.",
      "see": [
        "הסלון הציבורי העונתי",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Albertina": {
    "en": {
      "why": "Albertina works because it combines strong exhibitions with palace rooms and a central terrace feeling above the old city.",
      "see": [
        "Art above the city",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "אלברטינה עובדת כי היא משלבת תערוכות חזקות עם חדרי ארמון ותחושת מרפסת מרכזית מעל העיר העתיקה.",
      "see": [
        "אמנות מעל העיר",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Stadtpark Strauss statue": {
    "en": {
      "why": "The Strauss statue is touristy, but it captures Vienna’s music identity in one easy golden image inside a pleasant park.",
      "see": [
        "The golden photo stop",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "פסל שטראוס תיירותי, אבל הוא תופס את זהות המוזיקה של וינה בתמונה זהובה אחת בתוך פארק נעים.",
      "see": [
        "עצירת צילום מוזיקלית זהובה",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  },
  "Grinzing evening": {
    "en": {
      "why": "Grinzing turns the evening into wine, courtyards and village lanes without leaving Vienna completely. It is a softer alternative to clubs.",
      "see": [
        "Wine village inside the city",
        "Why it matters: it explains a major part of Vienna’s identity",
        "Best approach: give it a specific time slot instead of rushing past"
      ],
      "fit": "MustDo means it creates memory, context or orientation — not just another famous address.",
      "tip": "Go early, late, or with a clear reason; peak midday can flatten even great places."
    },
    "he": {
      "why": "גרינציג הופך את הערב ליין, חצרות וסמטאות כפריות בלי לצאת לגמרי מוינה. זו חלופה רכה למועדונים.",
      "see": [
        "כפר יין בתוך העיר",
        "למה זה חשוב: הוא מסביר חלק מרכזי בזהות של וינה",
        "גישה נכונה: לתת לו זמן מוגדר ולא לחלוף לידו"
      ],
      "fit": "MustDo אומר שהוא יוצר זיכרון, הקשר או התמצאות — לא עוד כתובת מפורסמת.",
      "tip": "להגיע מוקדם, מאוחר או עם סיבה ברורה; עומס צהריים יכול לשטח גם מקום מעולה."
    }
  }
};
Object.assign(EUROPE_REAL_GUIDE_CONTENT, V32_VIENNA_CLEAN_GUIDE_CONTENT);

function enrichedGuideForEurope(item){
  const lang = getLang();
  const pack = EUROPE_REAL_GUIDE_CONTENT[item?.name];
  if(pack) return pack[lang] || pack.en || pack.he;
  return null;
}

const V47_REAL_GUIDE_OVERRIDES = {
  "Lokál Dlouhááá": {
    "he": {
      "why": "Lokál Dlouhááá הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של פאב־מסעדה צ׳כי: בירה פילזנר טרייה, גולאש, שניצל ומנות ביתיות באווירת אולם בירה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: פאב־מסעדה צ׳כי",
        "מה מיוחד: בירה פילזנר טרייה, גולאש, שניצל ומנות ביתיות באווירת אולם בירה",
        "אווירה: רועש, מקומי, מתאים לארוחה צ׳כית ראשונה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. רועש, מקומי, מתאים לארוחה צ׳כית ראשונה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Lokál Dlouhááá is not just another food pin in Prague. It is recommended because it gives a clear Czech pub food experience: fresh Pilsner, goulash, schnitzel and comfort dishes in a beer-hall mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Czech pub food",
        "What stands out: fresh Pilsner, goulash, schnitzel and comfort dishes in a beer-hall mood",
        "Vibe: lively, local-feeling, good for a first Czech meal",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. lively, local-feeling, good for a first Czech meal.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Naše Maso": {
    "he": {
      "why": "Naše Maso הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של ביסטרו קצבים: בשר איכותי, נקניקיות, כריכים והמבורגר בדלפק קטן ומהיר. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: ביסטרו קצבים",
        "מה מיוחד: בשר איכותי, נקניקיות, כריכים והמבורגר בדלפק קטן ומהיר",
        "אווירה: מהיר, צפוף, ממוקד בבשר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, צפוף, ממוקד בבשר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Naše Maso is not just another food pin in Prague. It is recommended because it gives a clear butcher bistro experience: quality meat, sausages, sandwiches and burgers from a small butcher counter. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: butcher bistro",
        "What stands out: quality meat, sausages, sandwiches and burgers from a small butcher counter",
        "Vibe: fast, tight and meat-focused",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, tight and meat-focused.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Kantýna": {
    "he": {
      "why": "Kantýna הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מסעדת בשר צ׳כית מודרנית: בחירת נתחים בדלפק, טרטר, בירה וחלל גדול עם אנרגיה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מסעדת בשר צ׳כית מודרנית",
        "מה מיוחד: בחירת נתחים בדלפק, טרטר, בירה וחלל גדול עם אנרגיה",
        "אווירה: תוסס, בשרי, טוב לקבוצה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. תוסס, בשרי, טוב לקבוצה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Kantýna is not just another food pin in Prague. It is recommended because it gives a clear modern Czech meat hall experience: counter-selected cuts, steak tartare, beer and a large energetic room. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: modern Czech meat hall",
        "What stands out: counter-selected cuts, steak tartare, beer and a large energetic room",
        "Vibe: lively, meat-heavy, good for groups",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. lively, meat-heavy, good for groups.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Havelská Koruna": {
    "he": {
      "why": "Havelská Koruna הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של קפיטריה צ׳כית זולה: מנות צ׳כיות יומיומיות במחיר נמוך יחסית ובשירות מהיר. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: קפיטריה צ׳כית זולה",
        "מה מיוחד: מנות צ׳כיות יומיומיות במחיר נמוך יחסית ובשירות מהיר",
        "אווירה: פשוט, יעיל, לא רומנטי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. פשוט, יעיל, לא רומנטי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Havelská Koruna is not just another food pin in Prague. It is recommended because it gives a clear budget Czech cafeteria experience: everyday Czech dishes at low prices with fast service. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: budget Czech cafeteria",
        "What stands out: everyday Czech dishes at low prices with fast service",
        "Vibe: simple, efficient, not romantic",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. simple, efficient, not romantic.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Sisters Bistro": {
    "he": {
      "why": "Sisters Bistro הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של כריכים פתוחים צ׳כיים: chlebíčky צבעוניים שמתאימים לארוחה קלה ולא כבדה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: כריכים פתוחים צ׳כיים",
        "מה מיוחד: chlebíčky צבעוניים שמתאימים לארוחה קלה ולא כבדה",
        "אווירה: קליל, מרכזי, טוב לצהריים קצר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קליל, מרכזי, טוב לצהריים קצר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Sisters Bistro is not just another food pin in Prague. It is recommended because it gives a clear Czech open-faced sandwiches experience: colorful chlebíčky for a light local bite. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Czech open-faced sandwiches",
        "What stands out: colorful chlebíčky for a light local bite",
        "Vibe: light, central, good for a short lunch",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. light, central, good for a short lunch.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Mincovna": {
    "he": {
      "why": "Mincovna הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של צ׳כי מודרני: מנות צ׳כיות קלאסיות בלב העיר העתיקה עם ביצוע מסודר יותר ממסעדת תיירים אקראית. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: צ׳כי מודרני",
        "מה מיוחד: מנות צ׳כיות קלאסיות בלב העיר העתיקה עם ביצוע מסודר יותר ממסעדת תיירים אקראית",
        "אווירה: מרכזי, נוח, מתאים כשאין כוח לחפש",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מרכזי, נוח, מתאים כשאין כוח לחפש.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Mincovna is not just another food pin in Prague. It is recommended because it gives a clear modern Czech experience: classic Czech dishes in Old Town with a more reliable execution than a random tourist restaurant. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: modern Czech",
        "What stands out: classic Czech dishes in Old Town with a more reliable execution than a random tourist restaurant",
        "Vibe: central, convenient, reliable",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. central, convenient, reliable.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "U Parlamentu": {
    "he": {
      "why": "U Parlamentu הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של צ׳כי מסורתי: מנות בירה וצ׳כיות קרובות לעיר העתיקה, בלי תחושה יוקרתית מדי. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: צ׳כי מסורתי",
        "מה מיוחד: מנות בירה וצ׳כיות קרובות לעיר העתיקה, בלי תחושה יוקרתית מדי",
        "אווירה: קז׳ואלי, עממי, טוב לבירה ואוכל",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קז׳ואלי, עממי, טוב לבירה ואוכל.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "U Parlamentu is not just another food pin in Prague. It is recommended because it gives a clear traditional Czech experience: Czech beer-food dishes close to Old Town without a luxury feeling. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: traditional Czech",
        "What stands out: Czech beer-food dishes close to Old Town without a luxury feeling",
        "Vibe: casual, pub-like, good for beer and food",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. casual, pub-like, good for beer and food.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Luka Lu": {
    "he": {
      "why": "Luka Lu הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בלקני: עיצוב צבעוני ומנות בלקניות שמציעות הפסקה מהאוכל הצ׳כי הכבד. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בלקני",
        "מה מיוחד: עיצוב צבעוני ומנות בלקניות שמציעות הפסקה מהאוכל הצ׳כי הכבד",
        "אווירה: חם, צבעוני, זוגי/חברתי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. חם, צבעוני, זוגי/חברתי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Luka Lu is not just another food pin in Prague. It is recommended because it gives a clear Balkan experience: colorful décor and Balkan dishes as a break from heavy Czech food. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Balkan",
        "What stands out: colorful décor and Balkan dishes as a break from heavy Czech food",
        "Vibe: warm, colorful, social",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. warm, colorful, social.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Banh Mi Makers": {
    "he": {
      "why": "Banh Mi Makers הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של וייטנאמי מהיר: באן־מי, קערות וטעמים חדים ומהירים — שימושי כשצריך אוכל קל ולא כבד. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: וייטנאמי מהיר",
        "מה מיוחד: באן־מי, קערות וטעמים חדים ומהירים — שימושי כשצריך אוכל קל ולא כבד",
        "אווירה: מהיר, זול יחסית, לא רשמי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, זול יחסית, לא רשמי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Banh Mi Makers is not just another food pin in Prague. It is recommended because it gives a clear Vietnamese fast casual experience: banh mi, bowls and bright quick flavors — useful for a light break. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Vietnamese fast casual",
        "What stands out: banh mi, bowls and bright quick flavors — useful for a light break",
        "Vibe: fast, relatively cheap, informal",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, relatively cheap, informal.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Café Louvre": {
    "he": {
      "why": "Café Louvre הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בית קפה היסטורי אירופי: חלל קפה ותיק עם עוגות, קפה וארוחות קלות שמחזיר לאווירת פראג הישנה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בית קפה היסטורי אירופי",
        "מה מיוחד: חלל קפה ותיק עם עוגות, קפה וארוחות קלות שמחזיר לאווירת פראג הישנה",
        "אווירה: קלאסי, נוח להפסקה, מתאים גם למשפחה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קלאסי, נוח להפסקה, מתאים גם למשפחה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Café Louvre is not just another food pin in Prague. It is recommended because it gives a clear historic European café experience: old-style café room with cakes, coffee and light meals in an old-Prague mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: historic European café",
        "What stands out: old-style café room with cakes, coffee and light meals in an old-Prague mood",
        "Vibe: classic, good for a break, family-friendly",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. classic, good for a break, family-friendly.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Eska Karlín": {
    "he": {
      "why": "Eska Karlín הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מאפייה־מסעדה צ׳כית מודרנית: לחם, מאפים ומטבח צ׳כי עדכני בשכונת Karlín הצעירה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מאפייה־מסעדה צ׳כית מודרנית",
        "מה מיוחד: לחם, מאפים ומטבח צ׳כי עדכני בשכונת Karlín הצעירה",
        "אווירה: עכשווי, איכותי, מחוץ לעיר העתיקה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. עכשווי, איכותי, מחוץ לעיר העתיקה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Eska Karlín is not just another food pin in Prague. It is recommended because it gives a clear modern Czech bakery-restaurant experience: bread, baking and updated Czech cooking in the younger Karlín district. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: modern Czech bakery-restaurant",
        "What stands out: bread, baking and updated Czech cooking in the younger Karlín district",
        "Vibe: modern, polished, outside Old Town",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. modern, polished, outside Old Town.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Mr. HotDoG": {
    "he": {
      "why": "Mr. HotDoG הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של נקניקיות ואמריקאי קז׳ואל: אוכל מהיר מנחם, טוב כשצריך משהו פשוט בלי ארוחה צ׳כית כבדה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: נקניקיות ואמריקאי קז׳ואל",
        "מה מיוחד: אוכל מהיר מנחם, טוב כשצריך משהו פשוט בלי ארוחה צ׳כית כבדה",
        "אווירה: קז׳ואלי, מהיר, לא טקסי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קז׳ואלי, מהיר, לא טקסי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Mr. HotDoG is not just another food pin in Prague. It is recommended because it gives a clear hot dogs and casual American experience: comfort fast food when you want something simple and not a heavy Czech meal. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: hot dogs and casual American",
        "What stands out: comfort fast food when you want something simple and not a heavy Czech meal",
        "Vibe: casual, quick, no ceremony",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. casual, quick, no ceremony.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Pho Vietnam Tuan & Lan": {
    "he": {
      "why": "Pho Vietnam Tuan & Lan הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של פו וייטנאמי: מרק פו מחמם וזול יחסית, חלק מהנוכחות הווייטנאמית החזקה באוכל של פראג. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: פו וייטנאמי",
        "מה מיוחד: מרק פו מחמם וזול יחסית, חלק מהנוכחות הווייטנאמית החזקה באוכל של פראג",
        "אווירה: פשוט, יעיל, טוב ליום קר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. פשוט, יעיל, טוב ליום קר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Pho Vietnam Tuan & Lan is not just another food pin in Prague. It is recommended because it gives a clear Vietnamese pho experience: warming, relatively cheap pho reflecting Prague’s strong Vietnamese food scene. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Vietnamese pho",
        "What stands out: warming, relatively cheap pho reflecting Prague’s strong Vietnamese food scene",
        "Vibe: simple, efficient, good on a cold day",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. simple, efficient, good on a cold day.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Manifesto Market": {
    "he": {
      "why": "Manifesto Market הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של שוק אוכל מודרני: כמה דוכנים במקום אחד — פתרון טוב כשכל אחד רוצה משהו אחר. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: שוק אוכל מודרני",
        "מה מיוחד: כמה דוכנים במקום אחד — פתרון טוב כשכל אחד רוצה משהו אחר",
        "אווירה: צעיר, פתוח, קבוצתי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. צעיר, פתוח, קבוצתי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Manifesto Market is not just another food pin in Prague. It is recommended because it gives a clear modern food market experience: several food stalls in one place — useful when people want different things. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: modern food market",
        "What stands out: several food stalls in one place — useful when people want different things",
        "Vibe: young, open, group-friendly",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. young, open, group-friendly.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "U Kroka": {
    "he": {
      "why": "U Kroka הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אוכל צ׳כי ביתי: מנות צ׳כיות נדיבות ליד Vyšehrad, טוב לשלב אחרי מסלול רגוע יותר מחוץ לעומס העיר העתיקה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אוכל צ׳כי ביתי",
        "מה מיוחד: מנות צ׳כיות נדיבות ליד Vyšehrad, טוב לשלב אחרי מסלול רגוע יותר מחוץ לעומס העיר העתיקה",
        "אווירה: שכונתי, נעים, פחות תיירותי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. שכונתי, נעים, פחות תיירותי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "U Kroka is not just another food pin in Prague. It is recommended because it gives a clear Czech comfort food experience: generous Czech dishes near Vyšehrad, good after a calmer route outside Old Town. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Czech comfort food",
        "What stands out: generous Czech dishes near Vyšehrad, good after a calmer route outside Old Town",
        "Vibe: neighborhood feel, comfortable, less touristy",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. neighborhood feel, comfortable, less touristy.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Bistro Monk": {
    "he": {
      "why": "Bistro Monk הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בראנץ׳ וקפה: ארוחות בוקר/בראנץ׳ מסודרות במרכז, טוב לפתיחת יום לפני הליכה ארוכה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בראנץ׳ וקפה",
        "מה מיוחד: ארוחות בוקר/בראנץ׳ מסודרות במרכז, טוב לפתיחת יום לפני הליכה ארוכה",
        "אווירה: נעים, בוקר, מתאים לזוגות",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. נעים, בוקר, מתאים לזוגות.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Bistro Monk is not just another food pin in Prague. It is recommended because it gives a clear brunch and café experience: structured breakfast/brunch in the center, useful before a walking day. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: brunch and café",
        "What stands out: structured breakfast/brunch in the center, useful before a walking day",
        "Vibe: pleasant, breakfast-focused, good for couples",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. pleasant, breakfast-focused, good for couples.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Kuchyň": {
    "he": {
      "why": "Kuchyň הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של צ׳כי עם נוף: אוכל צ׳כי ליד אזור הטירה עם נוף שמוסיף ערך מעבר לצלחת. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: צ׳כי עם נוף",
        "מה מיוחד: אוכל צ׳כי ליד אזור הטירה עם נוף שמוסיף ערך מעבר לצלחת",
        "אווירה: נופי, מתאים אחרי טירה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. נופי, מתאים אחרי טירה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Kuchyň is not just another food pin in Prague. It is recommended because it gives a clear Czech food with a view experience: Czech food near the castle area where the view adds value beyond the plate. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Czech food with a view",
        "What stands out: Czech food near the castle area where the view adds value beyond the plate",
        "Vibe: view-focused, good after the castle",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. view-focused, good after the castle.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Maitrea": {
    "he": {
      "why": "Maitrea הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של צמחוני אסייתי־אירופי: מנות צמחוניות יצירתיות בחלל רגוע ליד העיר העתיקה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: צמחוני אסייתי־אירופי",
        "מה מיוחד: מנות צמחוניות יצירתיות בחלל רגוע ליד העיר העתיקה",
        "אווירה: רגוע, זן, מתאים להפסקה מאוכל כבד",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. רגוע, זן, מתאים להפסקה מאוכל כבד.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Maitrea is not just another food pin in Prague. It is recommended because it gives a clear vegetarian Asian-European experience: creative vegetarian dishes in a calm space near Old Town. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: vegetarian Asian-European",
        "What stands out: creative vegetarian dishes in a calm space near Old Town",
        "Vibe: calm, Zen-like, good break from heavy food",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. calm, Zen-like, good break from heavy food.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Kavárna co hledá jméno": {
    "he": {
      "why": "Kavárna co hledá jméno הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בית קפה / בראנץ׳ צעיר: קפה ובראנץ׳ באווירה יותר מקומית ועכשווית, לא בית קפה היסטורי כבד. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בית קפה / בראנץ׳ צעיר",
        "מה מיוחד: קפה ובראנץ׳ באווירה יותר מקומית ועכשווית, לא בית קפה היסטורי כבד",
        "אווירה: צעיר, נינוח, מתאים לבוקר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. צעיר, נינוח, מתאים לבוקר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Kavárna co hledá jméno is not just another food pin in Prague. It is recommended because it gives a clear young café / brunch experience: coffee and brunch with a more local contemporary mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: young café / brunch",
        "What stands out: coffee and brunch with a more local contemporary mood",
        "Vibe: young, relaxed, good for morning",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. young, relaxed, good for morning.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Bakeshop Praha": {
    "he": {
      "why": "Bakeshop Praha הוא לא עוד שם ברשימת אוכל בפראג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מאפייה וקפה: מאפים, כריכים וקפה קרוב לעיר העתיקה — עצירה שימושית כשהיום עמוס. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מאפייה וקפה",
        "מה מיוחד: מאפים, כריכים וקפה קרוב לעיר העתיקה — עצירה שימושית כשהיום עמוס",
        "אווירה: מהיר, מתוק, נוח",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, מתוק, נוח.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Bakeshop Praha is not just another food pin in Prague. It is recommended because it gives a clear bakery and café experience: pastries, sandwiches and coffee close to Old Town — useful on a busy day. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: bakery and café",
        "What stands out: pastries, sandwiches and coffee close to Old Town — useful on a busy day",
        "Vibe: quick, sweet, convenient",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. quick, sweet, convenient.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Wiener Wiaz Haus": {
    "he": {
      "why": "Wiener Wiaz Haus הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של גסטהאוס וינאי: שניצל, תבשילים ומנות אוסטריות באווירה מקומית ולא יוקרתית. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: גסטהאוס וינאי",
        "מה מיוחד: שניצל, תבשילים ומנות אוסטריות באווירה מקומית ולא יוקרתית",
        "אווירה: מקומי, כבד, מתאים לארוחת ערב",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מקומי, כבד, מתאים לארוחת ערב.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Wiener Wiaz Haus is not just another food pin in Vienna. It is recommended because it gives a clear Viennese gasthaus experience: schnitzel, stews and Austrian dishes in a local non-luxury mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Viennese gasthaus",
        "What stands out: schnitzel, stews and Austrian dishes in a local non-luxury mood",
        "Vibe: local, hearty, good for dinner",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. local, hearty, good for dinner.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Gasthaus Pöschl": {
    "he": {
      "why": "Gasthaus Pöschl הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של גסטהאוס אוסטרי: מסעדה קטנה ומקומית יותר עם אוכל וינאי ברור ולא תפריט תיירותי ענק. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: גסטהאוס אוסטרי",
        "מה מיוחד: מסעדה קטנה ומקומית יותר עם אוכל וינאי ברור ולא תפריט תיירותי ענק",
        "אווירה: קומפקטי, מקומי, פופולרי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קומפקטי, מקומי, פופולרי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Gasthaus Pöschl is not just another food pin in Vienna. It is recommended because it gives a clear Austrian gasthaus experience: small local-feeling place with clear Viennese food rather than a huge tourist menu. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Austrian gasthaus",
        "What stands out: small local-feeling place with clear Viennese food rather than a huge tourist menu",
        "Vibe: compact, local, popular",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. compact, local, popular.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Figlmüller": {
    "he": {
      "why": "Figlmüller הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של שניצל וינאי: שניצל ענק ומפורסם שהפך כמעט לאתר תיירות בפני עצמו. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: שניצל וינאי",
        "מה מיוחד: שניצל ענק ומפורסם שהפך כמעט לאתר תיירות בפני עצמו",
        "אווירה: קלאסי, תיירותי, חובה לחובבי שניצל",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קלאסי, תיירותי, חובה לחובבי שניצל.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Figlmüller is not just another food pin in Vienna. It is recommended because it gives a clear Viennese schnitzel experience: a huge famous schnitzel that has become almost an attraction by itself. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Viennese schnitzel",
        "What stands out: a huge famous schnitzel that has become almost an attraction by itself",
        "Vibe: classic, touristy, must for schnitzel fans",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. classic, touristy, must for schnitzel fans.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Schnitzelwirt": {
    "he": {
      "why": "Schnitzelwirt הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של שניצל עממי: מנות גדולות במחירים נוחים יותר, פחות יוקרתי ויותר אוכל של ממש. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: שניצל עממי",
        "מה מיוחד: מנות גדולות במחירים נוחים יותר, פחות יוקרתי ויותר אוכל של ממש",
        "אווירה: עממי, זול יחסית, כבד",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. עממי, זול יחסית, כבד.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Schnitzelwirt is not just another food pin in Vienna. It is recommended because it gives a clear budget schnitzel experience: large portions at fairer prices, less elegant and more about eating well. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: budget schnitzel",
        "What stands out: large portions at fairer prices, less elegant and more about eating well",
        "Vibe: simple, good value, hearty",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. simple, good value, hearty.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Naschmarkt stands": {
    "he": {
      "why": "Naschmarkt stands הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של שוק אוכל בינלאומי: דוכנים, אוכל מזרח־תיכוני/ים־תיכוני, קפה ומוצרים — מתאים כשלא רוצים מסעדה אחת. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: שוק אוכל בינלאומי",
        "מה מיוחד: דוכנים, אוכל מזרח־תיכוני/ים־תיכוני, קפה ומוצרים — מתאים כשלא רוצים מסעדה אחת",
        "אווירה: מגוון, פתוח, מתאים לצהריים",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מגוון, פתוח, מתאים לצהריים.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Naschmarkt stands is not just another food pin in Vienna. It is recommended because it gives a clear international food market experience: stalls, Mediterranean/Middle Eastern food, coffee and market products when you do not want one fixed restaurant. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: international food market",
        "What stands out: stalls, Mediterranean/Middle Eastern food, coffee and market products when you do not want one fixed restaurant",
        "Vibe: varied, open-air, good for lunch",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. varied, open-air, good for lunch.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Trześniewski": {
    "he": {
      "why": "Trześniewski הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של כריכונים וינאיים: כריכים קטנים עם ממרחים — עצירה מהירה וקלאסית בלב העיר. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: כריכונים וינאיים",
        "מה מיוחד: כריכים קטנים עם ממרחים — עצירה מהירה וקלאסית בלב העיר",
        "אווירה: מהיר, מקומי, מתאים לנשנוש",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, מקומי, מתאים לנשנוש.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Trześniewski is not just another food pin in Vienna. It is recommended because it gives a clear Viennese open sandwiches experience: tiny open sandwiches with spreads — a fast classic central stop. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Viennese open sandwiches",
        "What stands out: tiny open sandwiches with spreads — a fast classic central stop",
        "Vibe: fast, local, snack-friendly",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, local, snack-friendly.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Leberkas-Pepi": {
    "he": {
      "why": "Leberkas-Pepi הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אוכל רחוב אוסטרי: Leberkäse בלחמנייה — פתרון מהיר, מלוח ומשביע כמו “סנדוויץ׳ מקומי”. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אוכל רחוב אוסטרי",
        "מה מיוחד: Leberkäse בלחמנייה — פתרון מהיר, מלוח ומשביע כמו “סנדוויץ׳ מקומי”",
        "אווירה: מהיר, זול, לא בריאותי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, זול, לא בריאותי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Leberkas-Pepi is not just another food pin in Vienna. It is recommended because it gives a clear Austrian street food experience: Leberkäse in a roll — salty, fast and filling local street food. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Austrian street food",
        "What stands out: Leberkäse in a roll — salty, fast and filling local street food",
        "Vibe: fast, cheap, not health food",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, cheap, not health food.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Café Hawelka": {
    "he": {
      "why": "Café Hawelka הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בית קפה וינאי היסטורי: אווירת קפה ישנה, שולחנות צפופים וקינוחים — פחות מושלם ויותר אותנטי. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בית קפה וינאי היסטורי",
        "מה מיוחד: אווירת קפה ישנה, שולחנות צפופים וקינוחים — פחות מושלם ויותר אותנטי",
        "אווירה: היסטורי, צפוף, אופי חזק",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. היסטורי, צפוף, אופי חזק.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Café Hawelka is not just another food pin in Vienna. It is recommended because it gives a clear historic Viennese café experience: old café atmosphere, tight tables and desserts — less polished, more authentic. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: historic Viennese café",
        "What stands out: old café atmosphere, tight tables and desserts — less polished, more authentic",
        "Vibe: historic, crowded, strong character",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. historic, crowded, strong character.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Café Central": {
    "he": {
      "why": "Café Central הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בית קפה קיסרי: בית קפה מפואר מ־1876 המזוהה עם תרבות הקפה הווינאית והיסטוריה אינטלקטואלית. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בית קפה קיסרי",
        "מה מיוחד: בית קפה מפואר מ־1876 המזוהה עם תרבות הקפה הווינאית והיסטוריה אינטלקטואלית",
        "אווירה: מפואר, תיירותי, יפה מאוד",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מפואר, תיירותי, יפה מאוד.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Café Central is not just another food pin in Vienna. It is recommended because it gives a clear imperial coffeehouse experience: grand 1876 café tied to Viennese coffeehouse culture and intellectual history. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: imperial coffeehouse",
        "What stands out: grand 1876 café tied to Viennese coffeehouse culture and intellectual history",
        "Vibe: grand, touristy, beautiful",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. grand, touristy, beautiful.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Gmoakeller": {
    "he": {
      "why": "Gmoakeller הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אוכל אוסטרי קלאסי: גסטהאוס ותיק עם מנות אוסטריות מסורתיות בלי להפוך את הארוחה להצגה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אוכל אוסטרי קלאסי",
        "מה מיוחד: גסטהאוס ותיק עם מנות אוסטריות מסורתיות בלי להפוך את הארוחה להצגה",
        "אווירה: קלאסי, בוגר, מתאים לערב",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קלאסי, בוגר, מתאים לערב.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Gmoakeller is not just another food pin in Vienna. It is recommended because it gives a clear classic Austrian experience: longstanding gasthaus with traditional Austrian dishes without turning dinner into a show. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: classic Austrian",
        "What stands out: longstanding gasthaus with traditional Austrian dishes without turning dinner into a show",
        "Vibe: classic, mature, good for dinner",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. classic, mature, good for dinner.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Glacis Beisl": {
    "he": {
      "why": "Glacis Beisl הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בייזל מודרני: אוכל אוסטרי באווירה נעימה ליד MuseumsQuartier, טוב אחרי מוזיאונים. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בייזל מודרני",
        "מה מיוחד: אוכל אוסטרי באווירה נעימה ליד MuseumsQuartier, טוב אחרי מוזיאונים",
        "אווירה: נעים, תרבותי, מרכזי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. נעים, תרבותי, מרכזי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Glacis Beisl is not just another food pin in Vienna. It is recommended because it gives a clear modern Beisl experience: Austrian food in a pleasant setting near MuseumsQuartier, good after museums. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: modern Beisl",
        "What stands out: Austrian food in a pleasant setting near MuseumsQuartier, good after museums",
        "Vibe: pleasant, cultural, central",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. pleasant, cultural, central.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Neni am Naschmarkt": {
    "he": {
      "why": "Neni am Naschmarkt הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מזרח־תיכוני בשוק: חומוס, סלטים ומנות לחלוקה בתוך אזור Naschmarkt. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מזרח־תיכוני בשוק",
        "מה מיוחד: חומוס, סלטים ומנות לחלוקה בתוך אזור Naschmarkt",
        "אווירה: צבעוני, קבוצתי, לא אוסטרי קלאסי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. צבעוני, קבוצתי, לא אוסטרי קלאסי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Neni am Naschmarkt is not just another food pin in Vienna. It is recommended because it gives a clear Middle Eastern at the market experience: hummus, salads and sharing dishes inside the Naschmarkt area. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Middle Eastern at the market",
        "What stands out: hummus, salads and sharing dishes inside the Naschmarkt area",
        "Vibe: colorful, social, not classic Austrian",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. colorful, social, not classic Austrian.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "UBox Würstelstand": {
    "he": {
      "why": "UBox Würstelstand הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של דוכן נקניקיות: נקניקייה וינאית מהירה ליד תחבורה — יותר שימושי מאשר חוויה מסעדתית. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: דוכן נקניקיות",
        "מה מיוחד: נקניקייה וינאית מהירה ליד תחבורה — יותר שימושי מאשר חוויה מסעדתית",
        "אווירה: מהיר, זול, לדרך",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, זול, לדרך.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "UBox Würstelstand is not just another food pin in Vienna. It is recommended because it gives a clear sausage stand experience: quick Viennese sausage by transit — useful more than atmospheric. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: sausage stand",
        "What stands out: quick Viennese sausage by transit — useful more than atmospheric",
        "Vibe: fast, cheap, on the go",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, cheap, on the go.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Swing Kitchen": {
    "he": {
      "why": "Swing Kitchen הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של טבעוני מהיר: בורגרים ומנות טבעוניות מהירות — טוב כשצריך פתרון לאוכלים טבעוני/צמחוני. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: טבעוני מהיר",
        "מה מיוחד: בורגרים ומנות טבעוניות מהירות — טוב כשצריך פתרון לאוכלים טבעוני/צמחוני",
        "אווירה: מהיר, מודרני, נגיש",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, מודרני, נגיש.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Swing Kitchen is not just another food pin in Vienna. It is recommended because it gives a clear vegan fast food experience: vegan burgers and fast dishes — useful for vegan/vegetarian travelers. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: vegan fast food",
        "What stands out: vegan burgers and fast dishes — useful for vegan/vegetarian travelers",
        "Vibe: fast, modern, easy",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, modern, easy.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Miznon Vienna": {
    "he": {
      "why": "Miznon Vienna הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של ישראלי־ים־תיכוני: פיתות, ירקות ואוכל צבעוני — פתרון קליל יותר משניצל וגולאש. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: ישראלי־ים־תיכוני",
        "מה מיוחד: פיתות, ירקות ואוכל צבעוני — פתרון קליל יותר משניצל וגולאש",
        "אווירה: צעיר, רועש, קז׳ואלי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. צעיר, רועש, קז׳ואלי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Miznon Vienna is not just another food pin in Vienna. It is recommended because it gives a clear Israeli-Mediterranean experience: pitas, vegetables and colorful food — a lighter alternative to schnitzel and goulash. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Israeli-Mediterranean",
        "What stands out: pitas, vegetables and colorful food — a lighter alternative to schnitzel and goulash",
        "Vibe: young, loud, casual",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. young, loud, casual.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Bitzinger Würstelstand": {
    "he": {
      "why": "Bitzinger Würstelstand הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של דוכן נקניקיות אייקוני: נקניקיות ליד האופרה — עצירה וינאית קלאסית אחרי מופע או הליכה במרכז. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: דוכן נקניקיות אייקוני",
        "מה מיוחד: נקניקיות ליד האופרה — עצירה וינאית קלאסית אחרי מופע או הליכה במרכז",
        "אווירה: מהיר, מרכזי, לילה מאוחר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מהיר, מרכזי, לילה מאוחר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Bitzinger Würstelstand is not just another food pin in Vienna. It is recommended because it gives a clear iconic sausage stand experience: sausages near the opera — classic Vienna stop after a show or central walk. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: iconic sausage stand",
        "What stands out: sausages near the opera — classic Vienna stop after a show or central walk",
        "Vibe: fast, central, late-night useful",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. fast, central, late-night useful.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Gasthaus Rebhuhn": {
    "he": {
      "why": "Gasthaus Rebhuhn הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של גסטהאוס שכונתי: מטבח אוסטרי נעים יותר מחוץ למרכז הכי תיירותי. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: גסטהאוס שכונתי",
        "מה מיוחד: מטבח אוסטרי נעים יותר מחוץ למרכז הכי תיירותי",
        "אווירה: שכונתי, רגוע, ארוחת ערב",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. שכונתי, רגוע, ארוחת ערב.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Gasthaus Rebhuhn is not just another food pin in Vienna. It is recommended because it gives a clear neighborhood gasthaus experience: Austrian cooking with a more neighborhood feel outside the most touristy core. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: neighborhood gasthaus",
        "What stands out: Austrian cooking with a more neighborhood feel outside the most touristy core",
        "Vibe: neighborhood, relaxed, dinner",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. neighborhood, relaxed, dinner.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Vollpension": {
    "he": {
      "why": "Vollpension הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של קפה ועוגות ביתיות: בית קפה חברתי עם עוגות ביתיות באווירת “סבתא וינאית”. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: קפה ועוגות ביתיות",
        "מה מיוחד: בית קפה חברתי עם עוגות ביתיות באווירת “סבתא וינאית”",
        "אווירה: חמים, מתוק, חברתי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. חמים, מתוק, חברתי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Vollpension is not just another food pin in Vienna. It is recommended because it gives a clear homestyle cakes café experience: social café with homemade cakes in a “Viennese grandma” mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: homestyle cakes café",
        "What stands out: social café with homemade cakes in a “Viennese grandma” mood",
        "Vibe: warm, sweet, social",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. warm, sweet, social.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Bruder": {
    "he": {
      "why": "Bruder הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מודרני וקוקטיילים: אוכל עכשווי, תסיסה/שימור וקוקטיילים — יותר חוויה קולינרית צעירה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מודרני וקוקטיילים",
        "מה מיוחד: אוכל עכשווי, תסיסה/שימור וקוקטיילים — יותר חוויה קולינרית צעירה",
        "אווירה: יצירתי, לא קלאסי, ערב מיוחד",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. יצירתי, לא קלאסי, ערב מיוחד.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Bruder is not just another food pin in Vienna. It is recommended because it gives a clear modern food and cocktails experience: contemporary food, fermentation/preservation and cocktails — a younger culinary experience. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: modern food and cocktails",
        "What stands out: contemporary food, fermentation/preservation and cocktails — a younger culinary experience",
        "Vibe: creative, not classic, special evening",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. creative, not classic, special evening.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Bitzi": {
    "he": {
      "why": "Bitzi הוא לא עוד שם ברשימת אוכל בוינה. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מקומי קליל: עצירת אוכל קלה יחסית כשלא רוצים מסעדה כבדה או שוק עמוס. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מקומי קליל",
        "מה מיוחד: עצירת אוכל קלה יחסית כשלא רוצים מסעדה כבדה או שוק עמוס",
        "אווירה: קליל, נגיש, ביניים",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קליל, נגיש, ביניים.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Bitzi is not just another food pin in Vienna. It is recommended because it gives a clear casual local food experience: a lighter food stop when you do not want a heavy restaurant or busy market. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: casual local food",
        "What stands out: a lighter food stop when you do not want a heavy restaurant or busy market",
        "Vibe: light, accessible, in-between",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. light, accessible, in-between.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "La Corde à Linge": {
    "he": {
      "why": "La Corde à Linge הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אלזסי קז׳ואלי: מיקום חזק בפטיט פראנס ומנות אלזסיות/צרפתיות באווירה נגישה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אלזסי קז׳ואלי",
        "מה מיוחד: מיקום חזק בפטיט פראנס ומנות אלזסיות/צרפתיות באווירה נגישה",
        "אווירה: מרכזי, תיירותי אבל שימושי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מרכזי, תיירותי אבל שימושי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "La Corde à Linge is not just another food pin in Strasbourg. It is recommended because it gives a clear casual Alsatian experience: strong Petite France location with Alsatian/French dishes in an accessible mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: casual Alsatian",
        "What stands out: strong Petite France location with Alsatian/French dishes in an accessible mood",
        "Vibe: central, touristy but useful",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. central, touristy but useful.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Maison Kammerzell": {
    "he": {
      "why": "Maison Kammerzell הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אלזסי היסטורי: אכילה בתוך אחד המבנים המפורסמים בעיר ליד הקתדרלה — החוויה היא גם אדריכלות. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אלזסי היסטורי",
        "מה מיוחד: אכילה בתוך אחד המבנים המפורסמים בעיר ליד הקתדרלה — החוויה היא גם אדריכלות",
        "אווירה: היסטורי, יקר יותר, מיוחד",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. היסטורי, יקר יותר, מיוחד.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Maison Kammerzell is not just another food pin in Strasbourg. It is recommended because it gives a clear historic Alsatian experience: dining inside one of the city’s famous historic buildings near the cathedral — architecture is part of the meal. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: historic Alsatian",
        "What stands out: dining inside one of the city’s famous historic buildings near the cathedral — architecture is part of the meal",
        "Vibe: historic, pricier, special",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. historic, pricier, special.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Au Pont Corbeau": {
    "he": {
      "why": "Au Pont Corbeau הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של ווינסטוב אלזסי: מטבח אלזסי מסורתי באווירת טברנה מקומית — choucroute, tarte flambée ויין אזורי. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: ווינסטוב אלזסי",
        "מה מיוחד: מטבח אלזסי מסורתי באווירת טברנה מקומית — choucroute, tarte flambée ויין אזורי",
        "אווירה: מסורתי, חמים, אוכל מקומי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מסורתי, חמים, אוכל מקומי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Au Pont Corbeau is not just another food pin in Strasbourg. It is recommended because it gives a clear Alsatian winstub experience: traditional Alsatian winstub mood — choucroute, tarte flambée and regional wine. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Alsatian winstub",
        "What stands out: traditional Alsatian winstub mood — choucroute, tarte flambée and regional wine",
        "Vibe: traditional, warm, local food",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. traditional, warm, local food.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Binchstub Broglie": {
    "he": {
      "why": "Binchstub Broglie הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של Flammekueche: טארט פלמבה/Flammekueche במרכז — הדרך הישירה לטעום את המאפה האלזסי הדק. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: Flammekueche",
        "מה מיוחד: טארט פלמבה/Flammekueche במרכז — הדרך הישירה לטעום את המאפה האלזסי הדק",
        "אווירה: קז׳ואלי, מקומי, טוב לקבוצה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קז׳ואלי, מקומי, טוב לקבוצה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Binchstub Broglie is not just another food pin in Strasbourg. It is recommended because it gives a clear flammekueche experience: tarte flambée / flammekueche in the center — the direct way to taste Alsace’s thin baked specialty. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: flammekueche",
        "What stands out: tarte flambée / flammekueche in the center — the direct way to taste Alsace’s thin baked specialty",
        "Vibe: casual, local, group-friendly",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. casual, local, group-friendly.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Le Tire-Bouchon": {
    "he": {
      "why": "Le Tire-Bouchon הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של ווינסטוב קלאסי: אוכל אלזסי ליד הקתדרלה, טוב כשרוצים חוויה מסורתית בלי להתרחק מהמרכז. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: ווינסטוב קלאסי",
        "מה מיוחד: אוכל אלזסי ליד הקתדרלה, טוב כשרוצים חוויה מסורתית בלי להתרחק מהמרכז",
        "אווירה: מסורתי, מרכזי, עשיר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מסורתי, מרכזי, עשיר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Le Tire-Bouchon is not just another food pin in Strasbourg. It is recommended because it gives a clear classic winstub experience: Alsatian food near the cathedral, useful when you want tradition without leaving the center. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: classic winstub",
        "What stands out: Alsatian food near the cathedral, useful when you want tradition without leaving the center",
        "Vibe: traditional, central, hearty",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. traditional, central, hearty.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Chez Yvonne": {
    "he": {
      "why": "Chez Yvonne הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אלזסי מסורתי: ווינסטוב ותיק עם מנות אזוריות ואווירה קלאסית יותר. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אלזסי מסורתי",
        "מה מיוחד: ווינסטוב ותיק עם מנות אזוריות ואווירה קלאסית יותר",
        "אווירה: ותיק, מסורתי, לא מהיר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. ותיק, מסורתי, לא מהיר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Chez Yvonne is not just another food pin in Strasbourg. It is recommended because it gives a clear traditional Alsatian experience: longstanding winstub with regional dishes and classic atmosphere. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: traditional Alsatian",
        "What stands out: longstanding winstub with regional dishes and classic atmosphere",
        "Vibe: established, traditional, not fast",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. established, traditional, not fast.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Au Brasseur": {
    "he": {
      "why": "Au Brasseur הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של מבשלת בירה ואוכל אלזסי: בירה מקומית, אוכל פשוט ומיקום נוח — מתאים לארוחה לא מחייבת. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: מבשלת בירה ואוכל אלזסי",
        "מה מיוחד: בירה מקומית, אוכל פשוט ומיקום נוח — מתאים לארוחה לא מחייבת",
        "אווירה: קז׳ואלי, בירה, קבוצתי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קז׳ואלי, בירה, קבוצתי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Au Brasseur is not just another food pin in Strasbourg. It is recommended because it gives a clear brewery and Alsatian food experience: local beer, simple food and convenient location — good for a low-commitment meal. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: brewery and Alsatian food",
        "What stands out: local beer, simple food and convenient location — good for a low-commitment meal",
        "Vibe: casual, beer-focused, group-friendly",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. casual, beer-focused, group-friendly.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Flam’s": {
    "he": {
      "why": "Flam’s הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של Flammekueche אלזסי: התמחות בטארט פלמבה: בצק דק, שמנת, בצל ובייקון/גבינות — אוכל אלזסי ברור ונגיש. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: Flammekueche אלזסי",
        "מה מיוחד: התמחות בטארט פלמבה: בצק דק, שמנת, בצל ובייקון/גבינות — אוכל אלזסי ברור ונגיש",
        "אווירה: קליל, מקומי, מתאים לפעם ראשונה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קליל, מקומי, מתאים לפעם ראשונה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Flam’s is not just another food pin in Strasbourg. It is recommended because it gives a clear Alsatian flammekueche experience: specialized in tarte flambée: thin dough, cream, onions and bacon/cheese — clear accessible Alsatian food. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Alsatian flammekueche",
        "What stands out: specialized in tarte flambée: thin dough, cream, onions and bacon/cheese — clear accessible Alsatian food",
        "Vibe: light, local, good first taste",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. light, local, good first taste.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "L’Épicerie": {
    "he": {
      "why": "L’Épicerie הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של כריכים/טארטינים: טארטינים, גבינות ויין באווירה קטנה — מתאים להפסקה לא כבדה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: כריכים/טארטינים",
        "מה מיוחד: טארטינים, גבינות ויין באווירה קטנה — מתאים להפסקה לא כבדה",
        "אווירה: קטן, ביתי, לא פורמלי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קטן, ביתי, לא פורמלי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "L’Épicerie is not just another food pin in Strasbourg. It is recommended because it gives a clear tartines and casual plates experience: tartines, cheese and wine in a small setting — good for a lighter stop. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: tartines and casual plates",
        "What stands out: tartines, cheese and wine in a small setting — good for a lighter stop",
        "Vibe: small, homely, informal",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. small, homely, informal.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Bistrot Coco": {
    "he": {
      "why": "Bistrot Coco הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של ביסטרו צרפתי: ביסטרו נעים למי שרוצה ארוחה צרפתית מסודרת יותר ולא רק tarte flambée. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: ביסטרו צרפתי",
        "מה מיוחד: ביסטרו נעים למי שרוצה ארוחה צרפתית מסודרת יותר ולא רק tarte flambée",
        "אווירה: נעים, זוגי, מעט יותר מוקפד",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. נעים, זוגי, מעט יותר מוקפד.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Bistrot Coco is not just another food pin in Strasbourg. It is recommended because it gives a clear French bistro experience: pleasant bistro for a more composed French meal beyond tarte flambée. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: French bistro",
        "What stands out: pleasant bistro for a more composed French meal beyond tarte flambée",
        "Vibe: pleasant, couple-friendly, more polished",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. pleasant, couple-friendly, more polished.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Meiselocker": {
    "he": {
      "why": "Meiselocker הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של צרפתי־אלזסי: מנות אזוריות בסביבה מרכזית, מתאים כחלופה פחות צפויה למסעדות ליד הקתדרלה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: צרפתי־אלזסי",
        "מה מיוחד: מנות אזוריות בסביבה מרכזית, מתאים כחלופה פחות צפויה למסעדות ליד הקתדרלה",
        "אווירה: מסורתי, מרכזי, רגוע",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מסורתי, מרכזי, רגוע.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Meiselocker is not just another food pin in Strasbourg. It is recommended because it gives a clear French-Alsatian experience: regional dishes in a central setting, useful as a less obvious alternative near the core. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: French-Alsatian",
        "What stands out: regional dishes in a central setting, useful as a less obvious alternative near the core",
        "Vibe: traditional, central, calm",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. traditional, central, calm.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Le Clou": {
    "he": {
      "why": "Le Clou הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של ווינסטוב אלזסי: מקום קלאסי למנות כמו choucroute, בשר, תפוחי אדמה ויין אלזסי. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: ווינסטוב אלזסי",
        "מה מיוחד: מקום קלאסי למנות כמו choucroute, בשר, תפוחי אדמה ויין אלזסי",
        "אווירה: כבד, מקומי, חורפי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. כבד, מקומי, חורפי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Le Clou is not just another food pin in Strasbourg. It is recommended because it gives a clear Alsatian winstub experience: classic place for choucroute, meat, potatoes and Alsatian wine. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: Alsatian winstub",
        "What stands out: classic place for choucroute, meat, potatoes and Alsatian wine",
        "Vibe: hearty, local, winter-friendly",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. hearty, local, winter-friendly.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "La Hache": {
    "he": {
      "why": "La Hache הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בראסרי צרפתי: בראסרי מודרני יותר, מתאים כשמחפשים אוכל צרפתי נגיש במרכז. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בראסרי צרפתי",
        "מה מיוחד: בראסרי מודרני יותר, מתאים כשמחפשים אוכל צרפתי נגיש במרכז",
        "אווירה: עכשווי, מרכזי, נוח",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. עכשווי, מרכזי, נוח.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "La Hache is not just another food pin in Strasbourg. It is recommended because it gives a clear French brasserie experience: more modern brasserie, useful for accessible French food in the center. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: French brasserie",
        "What stands out: more modern brasserie, useful for accessible French food in the center",
        "Vibe: modern, central, convenient",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. modern, central, convenient.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Pizz’arOme": {
    "he": {
      "why": "Pizz’arOme הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של פיצה: אופציה פשוטה כשצריך אוכל מוכר וזול יותר בין אתרים. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: פיצה",
        "מה מיוחד: אופציה פשוטה כשצריך אוכל מוכר וזול יותר בין אתרים",
        "אווירה: קל, משפחתי, לא אלזסי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קל, משפחתי, לא אלזסי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Pizz’arOme is not just another food pin in Strasbourg. It is recommended because it gives a clear pizza experience: simple option when you need familiar and cheaper food between sights. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: pizza",
        "What stands out: simple option when you need familiar and cheaper food between sights",
        "Vibe: easy, family-friendly, not Alsatian",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. easy, family-friendly, not Alsatian.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Le Thomasien": {
    "he": {
      "why": "Le Thomasien הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של צרפתי קז׳ואל: עצירה צרפתית פשוטה באזור המרכז, טובה כשלא רוצים תפריט כבד מדי. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: צרפתי קז׳ואל",
        "מה מיוחד: עצירה צרפתית פשוטה באזור המרכז, טובה כשלא רוצים תפריט כבד מדי",
        "אווירה: קז׳ואלי, מרכזי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קז׳ואלי, מרכזי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Le Thomasien is not just another food pin in Strasbourg. It is recommended because it gives a clear casual French experience: simple French stop in the center when you do not want a heavy menu. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: casual French",
        "What stands out: simple French stop in the center when you do not want a heavy menu",
        "Vibe: casual, central",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. casual, central.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "PUR etc.": {
    "he": {
      "why": "PUR etc. הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של בריא ומהיר: מנות קלילות יותר, קערות/סלטים — הפסקה טובה מאוכל אלזסי כבד. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: בריא ומהיר",
        "מה מיוחד: מנות קלילות יותר, קערות/סלטים — הפסקה טובה מאוכל אלזסי כבד",
        "אווירה: בריא, מהיר, יום עמוס",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. בריא, מהיר, יום עמוס.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "PUR etc. is not just another food pin in Strasbourg. It is recommended because it gives a clear healthy fast casual experience: lighter bowls/salads — a break from heavy Alsatian food. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: healthy fast casual",
        "What stands out: lighter bowls/salads — a break from heavy Alsatian food",
        "Vibe: healthy, quick, busy-day useful",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. healthy, quick, busy-day useful.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Café Bretelles": {
    "he": {
      "why": "Café Bretelles הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של קפה ובראנץ׳: קפה איכותי, מאפים ובראנץ׳ באווירה צעירה ופחות מסורתית. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: קפה ובראנץ׳",
        "מה מיוחד: קפה איכותי, מאפים ובראנץ׳ באווירה צעירה ופחות מסורתית",
        "אווירה: קפה, בוקר, צעיר",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קפה, בוקר, צעיר.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Café Bretelles is not just another food pin in Strasbourg. It is recommended because it gives a clear coffee and brunch experience: quality coffee, pastries and brunch in a younger less traditional mood. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: coffee and brunch",
        "What stands out: quality coffee, pastries and brunch in a younger less traditional mood",
        "Vibe: coffee, breakfast, young",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. coffee, breakfast, young.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "What the Cake": {
    "he": {
      "why": "What the Cake הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של קינוחים וקפה: מקום לקפה ועוגה, טוב להפסקה מתוקה ולא לארוחה כבדה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: קינוחים וקפה",
        "מה מיוחד: מקום לקפה ועוגה, טוב להפסקה מתוקה ולא לארוחה כבדה",
        "אווירה: מתוק, קליל, הפסקה",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מתוק, קליל, הפסקה.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "What the Cake is not just another food pin in Strasbourg. It is recommended because it gives a clear cakes and café experience: coffee and cake stop, good for a sweet break rather than a full meal. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: cakes and café",
        "What stands out: coffee and cake stop, good for a sweet break rather than a full meal",
        "Vibe: sweet, light, break stop",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. sweet, light, break stop.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Stück Burger": {
    "he": {
      "why": "Stück Burger הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של המבורגר: פתרון מוכר ופשוט כשלא רוצים מטבח אזורי או ילדים צריכים משהו קל. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: המבורגר",
        "מה מיוחד: פתרון מוכר ופשוט כשלא רוצים מטבח אזורי או ילדים צריכים משהו קל",
        "אווירה: קל, משפחתי, לא מקומי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. קל, משפחתי, לא מקומי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "Stück Burger is not just another food pin in Strasbourg. It is recommended because it gives a clear burgers experience: familiar easy choice when you do not want regional food or children need something simple. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: burgers",
        "What stands out: familiar easy choice when you do not want regional food or children need something simple",
        "Vibe: easy, family-friendly, not local",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. easy, family-friendly, not local.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "La Fignette": {
    "he": {
      "why": "La Fignette הוא לא עוד שם ברשימת אוכל בשטרסבורג. זה מקום שמומלץ כי הוא נותן חוויה ברורה של אלזסי מסורתי: מנות אלזסיות באווירה מקומית, טובה לטעימת מטבח אזורי בלי פורמליות גבוהה. לפני שהולכים אליו יודעים אם זו עצירה מהירה, ארוחה מקומית, בית קפה היסטורי או מקום לאווירה.",
      "see": [
        "מטבח: אלזסי מסורתי",
        "מה מיוחד: מנות אלזסיות באווירה מקומית, טובה לטעימת מטבח אזורי בלי פורמליות גבוהה",
        "אווירה: מסורתי, נעים, אזורי",
        "לבדוק שעות, תפריט ועומס כשיש אינטרנט"
      ],
      "fit": "מתאים למי שרוצה לבחור אוכל לפי אופי וסוג מטבח, לא רק לפי המרחק במפה. מסורתי, נעים, אזורי.",
      "tip": "אם המקום מלא, לפתוח מפה ולחפש חלופה קרובה באותו סגנון במקום להתפשר על מלכודת תיירים."
    },
    "en": {
      "why": "La Fignette is not just another food pin in Strasbourg. It is recommended because it gives a clear traditional Alsatian experience: Alsatian dishes in a local mood, good for regional food without high formality. Before going, you know whether it is a quick stop, a local meal, a historic café or an atmosphere place.",
      "see": [
        "Cuisine: traditional Alsatian",
        "What stands out: Alsatian dishes in a local mood, good for regional food without high formality",
        "Vibe: traditional, pleasant, regional",
        "Check live hours, menu and crowding while online"
      ],
      "fit": "Best when you want to choose by food style and mood, not only by map distance. traditional, pleasant, regional.",
      "tip": "If it is full, search nearby for the same food style instead of settling for the nearest tourist trap."
    }
  },
  "Letná Beer Garden": {
    "he": {
      "why": "Letná Beer Garden מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בירה עם תצפית. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — בירה פשוטה באוויר פתוח מעל הגשרים של פראג.",
      "see": [
        "סוג מקום: בירה עם תצפית",
        "מוזיקה/אופי: רגוע, שקיעה, לא מועדון",
        "מה מיוחד: בירה פשוטה באוויר פתוח מעל הגשרים של פראג",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בירה עם תצפית. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Letná Beer Garden is recommended for the evening because it is not just a bar; it represents beer garden with a view. The value is knowing in advance what kind of night you are choosing — open-air beer above Prague’s bridges.",
      "see": [
        "Type: beer garden with a view",
        "Music/mood: relaxed, sunset, not a club",
        "What stands out: open-air beer above Prague’s bridges",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want beer garden with a view. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Náplavka Riverside": {
    "he": {
      "why": "Náplavka Riverside מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג טיילת נהר בערב. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — הליכה, דוכנים ושתייה קלה ליד הוולטאבה.",
      "see": [
        "סוג מקום: טיילת נהר בערב",
        "מוזיקה/אופי: קז׳ואלי, חוץ, תלוי עונה",
        "מה מיוחד: הליכה, דוכנים ושתייה קלה ליד הוולטאבה",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש טיילת נהר בערב. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Náplavka Riverside is recommended for the evening because it is not just a bar; it represents riverside evening strip. The value is knowing in advance what kind of night you are choosing — walking, stalls and casual drinks by the Vltava.",
      "see": [
        "Type: riverside evening strip",
        "Music/mood: casual, outdoor, seasonal",
        "What stands out: walking, stalls and casual drinks by the Vltava",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want riverside evening strip. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Hemingway Bar": {
    "he": {
      "why": "Hemingway Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בר קוקטיילים איכותי. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — קוקטיילים מוקפדים ואווירה אינטימית לדייט או ערב שקט.",
      "see": [
        "סוג מקום: בר קוקטיילים איכותי",
        "מוזיקה/אופי: לואונג׳, שקט, בוגר",
        "מה מיוחד: קוקטיילים מוקפדים ואווירה אינטימית לדייט או ערב שקט",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בר קוקטיילים איכותי. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Hemingway Bar is recommended for the evening because it is not just a bar; it represents serious cocktail bar. The value is knowing in advance what kind of night you are choosing — crafted cocktails and intimate atmosphere for a date or quiet evening.",
      "see": [
        "Type: serious cocktail bar",
        "Music/mood: lounge, quiet, mature",
        "What stands out: crafted cocktails and intimate atmosphere for a date or quiet evening",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want serious cocktail bar. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Anonymous Bar": {
    "he": {
      "why": "Anonymous Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג קוקטיילים תיאטרליים. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — חוויה משחקית עם הגשה דרמטית וסיפור סביב המשקה.",
      "see": [
        "סוג מקום: קוקטיילים תיאטרליים",
        "מוזיקה/אופי: קוקטיילים, חוויה, לא רגיל",
        "מה מיוחד: חוויה משחקית עם הגשה דרמטית וסיפור סביב המשקה",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש קוקטיילים תיאטרליים. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Anonymous Bar is recommended for the evening because it is not just a bar; it represents theatrical cocktails. The value is knowing in advance what kind of night you are choosing — playful experience with dramatic presentation around the drink.",
      "see": [
        "Type: theatrical cocktails",
        "Music/mood: cocktails, experience, unusual",
        "What stands out: playful experience with dramatic presentation around the drink",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want theatrical cocktails. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Dva Kohouti": {
    "he": {
      "why": "Dva Kohouti מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מבשלת קראפט. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — בירה מקומית צעירה בשכונת Karlín עם אווירת עמידה וחצר.",
      "see": [
        "סוג מקום: מבשלת קראפט",
        "מוזיקה/אופי: קראפט, צעיר, חברים",
        "מה מיוחד: בירה מקומית צעירה בשכונת Karlín עם אווירת עמידה וחצר",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מבשלת קראפט. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Dva Kohouti is recommended for the evening because it is not just a bar; it represents craft brewery. The value is knowing in advance what kind of night you are choosing — young local beer scene in Karlín with a standing-yard mood.",
      "see": [
        "Type: craft brewery",
        "Music/mood: craft beer, young, friends",
        "What stands out: young local beer scene in Karlín with a standing-yard mood",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want craft brewery. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "U Sudu": {
    "he": {
      "why": "U Sudu מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מרתף ברים. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — חללים תת־קרקעיים עם תחושה יותר מחוספסת ופחות מלוטשת.",
      "see": [
        "סוג מקום: מרתף ברים",
        "מוזיקה/אופי: בר, צעיר, קצת כאוטי",
        "מה מיוחד: חללים תת־קרקעיים עם תחושה יותר מחוספסת ופחות מלוטשת",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מרתף ברים. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "U Sudu is recommended for the evening because it is not just a bar; it represents cellar bar. The value is knowing in advance what kind of night you are choosing — underground rooms with a rougher, less polished feel.",
      "see": [
        "Type: cellar bar",
        "Music/mood: bar, young, a little chaotic",
        "What stands out: underground rooms with a rougher, less polished feel",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want cellar bar. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Jazz Dock": {
    "he": {
      "why": "Jazz Dock מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מוזיקה חיה על הנהר. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — הופעות ג׳אז/בלוז ליד המים במקום ישיבה מסודר.",
      "see": [
        "סוג מקום: מוזיקה חיה על הנהר",
        "מוזיקה/אופי: ג׳אז, הופעות, רגוע",
        "מה מיוחד: הופעות ג׳אז/בלוז ליד המים במקום ישיבה מסודר",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מוזיקה חיה על הנהר. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Jazz Dock is recommended for the evening because it is not just a bar; it represents live music by the river. The value is knowing in advance what kind of night you are choosing — jazz/blues performances by the water in a seated venue.",
      "see": [
        "Type: live music by the river",
        "Music/mood: jazz, concerts, calm",
        "What stands out: jazz/blues performances by the water in a seated venue",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want live music by the river. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Lucerna Music Bar": {
    "he": {
      "why": "Lucerna Music Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מועדון מוזיקה מרכזי. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — מסיבות רטרו/הופעות שמייצרות ערב ריקודים ברור.",
      "see": [
        "סוג מקום: מועדון מוזיקה מרכזי",
        "מוזיקה/אופי: רטרו, פופ, ריקודים",
        "מה מיוחד: מסיבות רטרו/הופעות שמייצרות ערב ריקודים ברור",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מועדון מוזיקה מרכזי. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Lucerna Music Bar is recommended for the evening because it is not just a bar; it represents central music club. The value is knowing in advance what kind of night you are choosing — retro parties/concerts that make a clear dancing night.",
      "see": [
        "Type: central music club",
        "Music/mood: retro, pop, dancing",
        "What stands out: retro parties/concerts that make a clear dancing night",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want central music club. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Cross Club": {
    "he": {
      "why": "Cross Club מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מועדון אלטרנטיבי. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — עיצוב מתכתי־תעשייתי ומוזיקה אלקטרונית/אלטרנטיבית.",
      "see": [
        "סוג מקום: מועדון אלטרנטיבי",
        "מוזיקה/אופי: אלקטרוני, אלטרנטיבי, צעיר",
        "מה מיוחד: עיצוב מתכתי־תעשייתי ומוזיקה אלקטרונית/אלטרנטיבית",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מועדון אלטרנטיבי. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Cross Club is recommended for the evening because it is not just a bar; it represents alternative club. The value is knowing in advance what kind of night you are choosing — industrial-metal design and electronic/alternative music.",
      "see": [
        "Type: alternative club",
        "Music/mood: electronic, alternative, young",
        "What stands out: industrial-metal design and electronic/alternative music",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want alternative club. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "BeerGeek Bar": {
    "he": {
      "why": "BeerGeek Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בר בירת קראפט. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — עשרות ברזים/בקבוקים וטעם של סצנת בירה, לא מסיבה.",
      "see": [
        "סוג מקום: בר בירת קראפט",
        "מוזיקה/אופי: קראפט, טעימות, שיחה",
        "מה מיוחד: עשרות ברזים/בקבוקים וטעם של סצנת בירה, לא מסיבה",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בר בירת קראפט. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "BeerGeek Bar is recommended for the evening because it is not just a bar; it represents craft beer bar. The value is knowing in advance what kind of night you are choosing — many taps/bottles and beer-geek culture, not a club.",
      "see": [
        "Type: craft beer bar",
        "Music/mood: craft, tasting, conversation",
        "What stands out: many taps/bottles and beer-geek culture, not a club",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want craft beer bar. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Roxy Prague": {
    "he": {
      "why": "Roxy Prague מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מועדון אלקטרוני. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — ליין־אפים מתחלפים וקהל שמגיע בשביל מוזיקה וריקוד.",
      "see": [
        "סוג מקום: מועדון אלקטרוני",
        "מוזיקה/אופי: אלקטרוני, ריקודים, לילה ארוך",
        "מה מיוחד: ליין־אפים מתחלפים וקהל שמגיע בשביל מוזיקה וריקוד",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מועדון אלקטרוני. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Roxy Prague is recommended for the evening because it is not just a bar; it represents electronic club. The value is knowing in advance what kind of night you are choosing — changing lineups and a crowd that comes for music and dancing.",
      "see": [
        "Type: electronic club",
        "Music/mood: electronic, dancing, late night",
        "What stands out: changing lineups and a crowd that comes for music and dancing",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want electronic club. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Karlovy Lázně": {
    "he": {
      "why": "Karlovy Lázně מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מועדון תיירותי רב־קומות. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — כמה קומות וסגנונות מוזיקה — קל להבנה אבל פחות מקומי.",
      "see": [
        "סוג מקום: מועדון תיירותי רב־קומות",
        "מוזיקה/אופי: פופ/דאנס, תיירותי",
        "מה מיוחד: כמה קומות וסגנונות מוזיקה — קל להבנה אבל פחות מקומי",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מועדון תיירותי רב־קומות. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Karlovy Lázně is recommended for the evening because it is not just a bar; it represents tourist multi-floor club. The value is knowing in advance what kind of night you are choosing — several floors and music styles — easy to understand but less local.",
      "see": [
        "Type: tourist multi-floor club",
        "Music/mood: pop/dance, touristy",
        "What stands out: several floors and music styles — easy to understand but less local",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want tourist multi-floor club. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Donaukanal Bars": {
    "he": {
      "why": "Donaukanal Bars מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג ברים על התעלה. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — שתייה לאורך Donaukanal באווירה עירונית צעירה ופתוחה.",
      "see": [
        "סוג מקום: ברים על התעלה",
        "מוזיקה/אופי: קיץ, חוץ, רגוע",
        "מה מיוחד: שתייה לאורך Donaukanal באווירה עירונית צעירה ופתוחה",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש ברים על התעלה. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Donaukanal Bars is recommended for the evening because it is not just a bar; it represents canal bars. The value is knowing in advance what kind of night you are choosing — drinks along the Donaukanal in a young urban open-air mood.",
      "see": [
        "Type: canal bars",
        "Music/mood: summer, outdoor, relaxed",
        "What stands out: drinks along the Donaukanal in a young urban open-air mood",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want canal bars. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Loos American Bar": {
    "he": {
      "why": "Loos American Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בר קוקטיילים אדריכלי. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — חלל קטן שתוכנן על ידי Adolf Loos, יותר קלאסיקה מאשר מסיבה.",
      "see": [
        "סוג מקום: בר קוקטיילים אדריכלי",
        "מוזיקה/אופי: קוקטיילים, שקט, היסטורי",
        "מה מיוחד: חלל קטן שתוכנן על ידי Adolf Loos, יותר קלאסיקה מאשר מסיבה",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בר קוקטיילים אדריכלי. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Loos American Bar is recommended for the evening because it is not just a bar; it represents architectural cocktail bar. The value is knowing in advance what kind of night you are choosing — small space designed by Adolf Loos, more classic than party.",
      "see": [
        "Type: architectural cocktail bar",
        "Music/mood: cocktails, quiet, historic",
        "What stands out: small space designed by Adolf Loos, more classic than party",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want architectural cocktail bar. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Das Loft Bar": {
    "he": {
      "why": "Das Loft Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בר גג עם נוף. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — נוף גבוה על וינה, מתאים לערב אלגנטי או דרינק שקיעה.",
      "see": [
        "סוג מקום: בר גג עם נוף",
        "מוזיקה/אופי: לואונג׳, נוף, יקר יותר",
        "מה מיוחד: נוף גבוה על וינה, מתאים לערב אלגנטי או דרינק שקיעה",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בר גג עם נוף. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Das Loft Bar is recommended for the evening because it is not just a bar; it represents rooftop bar with a view. The value is knowing in advance what kind of night you are choosing — high view over Vienna, good for an elegant drink or sunset.",
      "see": [
        "Type: rooftop bar with a view",
        "Music/mood: lounge, view, pricier",
        "What stands out: high view over Vienna, good for an elegant drink or sunset",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want rooftop bar with a view. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Grelle Forelle": {
    "he": {
      "why": "Grelle Forelle מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מועדון טכנו. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — מקום לאוהבי מוזיקה אלקטרונית רצינית, לא בר מזדמן.",
      "see": [
        "סוג מקום: מועדון טכנו",
        "מוזיקה/אופי: טכנו/האוס, לילה מאוחר",
        "מה מיוחד: מקום לאוהבי מוזיקה אלקטרונית רצינית, לא בר מזדמן",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מועדון טכנו. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Grelle Forelle is recommended for the evening because it is not just a bar; it represents techno club. The value is knowing in advance what kind of night you are choosing — venue for serious electronic music lovers, not a casual bar.",
      "see": [
        "Type: techno club",
        "Music/mood: techno/house, late night",
        "What stands out: venue for serious electronic music lovers, not a casual bar",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want techno club. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Flex": {
    "he": {
      "why": "Flex מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מועדון ליד התעלה. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — מוסד ותיק לסצנת מועדונים/הופעות ליד Donaukanal.",
      "see": [
        "סוג מקום: מועדון ליד התעלה",
        "מוזיקה/אופי: אלטרנטיבי, הופעות, מועדון",
        "מה מיוחד: מוסד ותיק לסצנת מועדונים/הופעות ליד Donaukanal",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מועדון ליד התעלה. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Flex is recommended for the evening because it is not just a bar; it represents canal-side club. The value is knowing in advance what kind of night you are choosing — long-running club/concert venue by Donaukanal.",
      "see": [
        "Type: canal-side club",
        "Music/mood: alternative, concerts, club",
        "What stands out: long-running club/concert venue by Donaukanal",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want canal-side club. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Kleinod Bar": {
    "he": {
      "why": "Kleinod Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג קוקטיילים אלגנטיים. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — בר מעוצב למי שרוצה קוקטייל איכותי ולא ערב רועש.",
      "see": [
        "סוג מקום: קוקטיילים אלגנטיים",
        "מוזיקה/אופי: קוקטיילים, דייט, אלגנטי",
        "מה מיוחד: בר מעוצב למי שרוצה קוקטייל איכותי ולא ערב רועש",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש קוקטיילים אלגנטיים. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Kleinod Bar is recommended for the evening because it is not just a bar; it represents elegant cocktails. The value is knowing in advance what kind of night you are choosing — designed bar for quality cocktails, not a loud night.",
      "see": [
        "Type: elegant cocktails",
        "Music/mood: cocktails, date, elegant",
        "What stands out: designed bar for quality cocktails, not a loud night",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want elegant cocktails. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Krutenau bars": {
    "he": {
      "why": "Krutenau bars מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג אזור ברים סטודנטיאלי. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — שכונה צעירה עם ברים קטנים, אוכל ותחושת ערב מקומית.",
      "see": [
        "סוג מקום: אזור ברים סטודנטיאלי",
        "מוזיקה/אופי: קז׳ואלי, צעיר, הליכה",
        "מה מיוחד: שכונה צעירה עם ברים קטנים, אוכל ותחושת ערב מקומית",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש אזור ברים סטודנטיאלי. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Krutenau bars is recommended for the evening because it is not just a bar; it represents student bar district. The value is knowing in advance what kind of night you are choosing — young district with small bars, food and local evening energy.",
      "see": [
        "Type: student bar district",
        "Music/mood: casual, young, walkable",
        "What stands out: young district with small bars, food and local evening energy",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want student bar district. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Code Bar": {
    "he": {
      "why": "Code Bar מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג קוקטיילים. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — בר קוקטיילים לאווירה יותר מוקפדת במרכז שטרסבורג.",
      "see": [
        "סוג מקום: קוקטיילים",
        "מוזיקה/אופי: קוקטיילים, דייט",
        "מה מיוחד: בר קוקטיילים לאווירה יותר מוקפדת במרכז שטרסבורג",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש קוקטיילים. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Code Bar is recommended for the evening because it is not just a bar; it represents cocktail bar. The value is knowing in advance what kind of night you are choosing — cocktail bar for a more polished evening in central Strasbourg.",
      "see": [
        "Type: cocktail bar",
        "Music/mood: cocktails, date",
        "What stands out: cocktail bar for a more polished evening in central Strasbourg",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want cocktail bar. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Académie de la Bière": {
    "he": {
      "why": "Académie de la Bière מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בירה ואוכל. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — בירה, אוכל פשוט ואווירה שמתאימה לפתיחת ערב בלי פורמליות.",
      "see": [
        "סוג מקום: בירה ואוכל",
        "מוזיקה/אופי: בירה, קז׳ואל, קבוצות",
        "מה מיוחד: בירה, אוכל פשוט ואווירה שמתאימה לפתיחת ערב בלי פורמליות",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בירה ואוכל. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Académie de la Bière is recommended for the evening because it is not just a bar; it represents beer and casual food. The value is knowing in advance what kind of night you are choosing — beer, simple food and an easy start to the evening.",
      "see": [
        "Type: beer and casual food",
        "Music/mood: beer, casual, groups",
        "What stands out: beer, simple food and an easy start to the evening",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want beer and casual food. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Le Grincheux": {
    "he": {
      "why": "Le Grincheux מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג בר יין/בירה קטן. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — אווירה קטנה ויותר מקומית, טובה לשיחה ולא לריקודים.",
      "see": [
        "סוג מקום: בר יין/בירה קטן",
        "מוזיקה/אופי: שיחה, שתייה, רגוע",
        "מה מיוחד: אווירה קטנה ויותר מקומית, טובה לשיחה ולא לריקודים",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש בר יין/בירה קטן. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Le Grincheux is recommended for the evening because it is not just a bar; it represents small wine/beer bar. The value is knowing in advance what kind of night you are choosing — small local mood, better for talking than dancing.",
      "see": [
        "Type: small wine/beer bar",
        "Music/mood: conversation, drinks, calm",
        "What stands out: small local mood, better for talking than dancing",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want small wine/beer bar. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "La Laiterie": {
    "he": {
      "why": "La Laiterie מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מוזיקה חיה. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — אולם הופעות חשוב בעיר — הערך תלוי בליינאפ של אותו ערב.",
      "see": [
        "סוג מקום: מוזיקה חיה",
        "מוזיקה/אופי: הופעות, רוק/אלקטרוני",
        "מה מיוחד: אולם הופעות חשוב בעיר — הערך תלוי בליינאפ של אותו ערב",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מוזיקה חיה. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "La Laiterie is recommended for the evening because it is not just a bar; it represents live music venue. The value is knowing in advance what kind of night you are choosing — major concert venue where the value depends on the lineup.",
      "see": [
        "Type: live music venue",
        "Music/mood: concerts, rock/electronic",
        "What stands out: major concert venue where the value depends on the lineup",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want live music venue. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Aedaen Place": {
    "he": {
      "why": "Aedaen Place מומלץ לערב כי הוא לא רק ‘בר’: הוא מייצג מתחם אוכל/בר/תרבות. הערך למטייל הוא להבין מראש איזה לילה הוא מקבל — חלל רב־שימושי עם ברים, אוכל ואווירה עכשווית.",
      "see": [
        "סוג מקום: מתחם אוכל/בר/תרבות",
        "מוזיקה/אופי: קוקטיילים, אוכל, צעיר",
        "מה מיוחד: חלל רב־שימושי עם ברים, אוכל ואווירה עכשווית",
        "לבדוק שעות, ליינאפ או הזמנה כשיש אינטרנט"
      ],
      "fit": "מתאים למי שמחפש מתחם אוכל/בר/תרבות. לא כל מקום לילה מתאים לכל מצב רוח.",
      "tip": "בסוף שבוע לבדוק מראש אם יש תור, כרטיס או אירוע מיוחד."
    },
    "en": {
      "why": "Aedaen Place is recommended for the evening because it is not just a bar; it represents food-bar-culture complex. The value is knowing in advance what kind of night you are choosing — multi-use space with bars, food and contemporary mood.",
      "see": [
        "Type: food-bar-culture complex",
        "Music/mood: cocktails, food, young",
        "What stands out: multi-use space with bars, food and contemporary mood",
        "Check hours, lineup or reservation while online"
      ],
      "fit": "Best if you want food-bar-culture complex. Not every nightlife spot fits every mood.",
      "tip": "On weekends, check if there is a line, ticket or special event."
    }
  },
  "Strasbourg Cathedral": {
    "he": {
      "why": "קתדרלת שטרסבורג היא הלב הוויזואלי וההיסטורי של העיר: חזית גותית עצומה, אבן ורודה ושעון אסטרונומי שמסביר למה המקום הוא חובה גם למי שלא נכנס בדרך כלל לכנסיות.",
      "see": [
        "חזית גותית מפורטת",
        "השעון האסטרונומי",
        "כיכר הקתדרלה",
        "אפשרות לעלות לתצפית אם פתוח"
      ],
      "fit": "מתאים לכל ביקור ראשון בשטרסבורג, היסטוריה וצילום.",
      "tip": "לחזור גם בלילה — התאורה משנה את התחושה של הכיכר."
    },
    "en": {
      "why": "Strasbourg Cathedral is the visual and historical core of the city: a vast Gothic façade, pink sandstone and an astronomical clock that make it essential even for travelers who rarely visit churches.",
      "see": [
        "Detailed Gothic façade",
        "Astronomical clock",
        "Cathedral square",
        "Possible platform climb if open"
      ],
      "fit": "Essential for first-time Strasbourg, history and photography.",
      "tip": "Return at night too; the lighting changes the square."
    }
  },
  "Petite France": {
    "he": {
      "why": "פטיט פראנס הוא האזור הכי ציורי בשטרסבורג: תעלות, גשרים ובתי חצי־עץ שהופכים את אלזס למוחשית. זה מקום חובה כי הוא נותן את התמונה שהרבה אנשים מדמיינים לפני שהם מגיעים.",
      "see": [
        "תעלות וגשרים",
        "בתי חצי־עץ",
        "נקודות צילום ליד המים",
        "הליכת ערב רומנטית"
      ],
      "fit": "זוגות, צילום, טיול רגוע בתוך העיר.",
      "tip": "מוקדם בבוקר או אחרי שקיעה יש פחות עומס ואור יפה יותר."
    },
    "en": {
      "why": "Petite France is Strasbourg’s most picturesque quarter: canals, bridges and half-timbered houses that make Alsace feel tangible. It is a must because it gives the postcard image many travelers came for.",
      "see": [
        "Canals and bridges",
        "Half-timbered houses",
        "Waterfront photo spots",
        "Romantic evening walk"
      ],
      "fit": "Couples, photography, slow city walking.",
      "tip": "Early morning or after sunset gives fewer crowds and better light."
    }
  },
  "Batorama boat tour": {
    "he": {
      "why": "שייט Batorama עוזר להבין את שטרסבורג מהמים: העיר העתיקה, הגשרים, הסכרים והרובע האירופי מתחברים למסלול אחד במקום להיראות כמו נקודות מנותקות.",
      "see": [
        "תעלות Ill",
        "פטיט פראנס מהמים",
        "הרובע האירופי",
        "גשרים וסכרים"
      ],
      "fit": "מתאים ליום ראשון בעיר, משפחות ומי שרוצה סקירה בלי הרבה הליכה.",
      "tip": "להעדיף שעה עם אור יפה; בגשם זו עדיין יכולה להיות פעילות טובה אם הסירה מקורה."
    },
    "en": {
      "why": "A Batorama cruise helps you understand Strasbourg from the water: the old town, bridges, dams and European Quarter become one coherent route rather than scattered points.",
      "see": [
        "Ill canals",
        "Petite France from the water",
        "European Quarter",
        "Bridges and dams"
      ],
      "fit": "Good for a first city day, families and low-walking overview.",
      "tip": "Choose good light; in rain it can still work if the boat is covered."
    }
  },
  "St. Stephen’s Cathedral": {
    "he": {
      "why": "סטפנסדום הוא העוגן של וינה: גג צבעוני, מגדל גבוה וכיכר שממנה העיר הקיסרית מתחילה להתפענח. זה לא עוד כנסייה אלא נקודת התמצאות מרכזית.",
      "see": [
        "החזית והמגדל",
        "הגג הצבעוני",
        "Stephansplatz",
        "אפשרות לעלות לתצפית"
      ],
      "fit": "חובה לביקור ראשון, היסטוריה והתמצאות בעיר.",
      "tip": "להגיע גם בבוקר וגם בערב אם אפשר — הכיכר משנה אופי."
    },
    "en": {
      "why": "Stephansdom is Vienna’s anchor: colored roof tiles, a tall tower and a square from which the imperial city starts to make sense. It is not just another church; it is the main orientation point.",
      "see": [
        "Façade and tower",
        "Colorful tiled roof",
        "Stephansplatz",
        "Possible tower view"
      ],
      "fit": "A must for first-time visitors, history and orientation.",
      "tip": "See it by day and evening if possible; the square changes mood."
    }
  },
  "Schönbrunn Palace": {
    "he": {
      "why": "שנברון הוא המקום שבו מבינים את וינה ההבסבורגית: ארמון קיסרי, גנים עצומים ותצפית Gloriette. הוא דורש זמן כי הערך נמצא גם בגנים, לא רק בחדרים.",
      "see": [
        "חזית הארמון",
        "הגנים",
        "Gloriette",
        "סיור חדרים אם מזמינים"
      ],
      "fit": "מתאים לחצי יום, משפחות, זוגות ואדריכלות.",
      "tip": "אם אין זמן לסיור פנים, עדיין שווה להגיע לגנים ולתצפית."
    },
    "en": {
      "why": "Schönbrunn explains Habsburg Vienna: imperial palace, vast gardens and the Gloriette viewpoint. It needs time because the gardens are as important as the rooms.",
      "see": [
        "Palace façade",
        "Gardens",
        "Gloriette",
        "Interior tour if booked"
      ],
      "fit": "Good for a half-day, families, couples and architecture.",
      "tip": "If short on time, gardens and Gloriette still justify the visit."
    }
  },
  "Belvedere Palace": {
    "he": {
      "why": "בלוודר משלב ארמון בארוק, גנים ואמנות — בעיקר Klimt. זה יעד חזק כי הוא נותן גם יופי חיצוני וגם תוכן מוזיאוני.",
      "see": [
        "ארמון וגנים",
        "The Kiss של Klimt אם נכנסים",
        "תצפית לאורך הגן",
        "צילום חזית"
      ],
      "fit": "אמנות, אדריכלות, יום גשום חלקית.",
      "tip": "להחליט מראש אם נכנסים למוזיאון או רק עושים גנים — זה משנה את זמן הביקור."
    },
    "en": {
      "why": "Belvedere combines Baroque palace, gardens and art — especially Klimt. It works because it gives both exterior beauty and museum substance.",
      "see": [
        "Palace and gardens",
        "Klimt’s The Kiss if entering",
        "Garden axis view",
        "Façade photos"
      ],
      "fit": "Art, architecture and partly rainy days.",
      "tip": "Decide in advance museum vs gardens; it changes the time needed."
    }
  },
  "Charles Bridge at sunrise": {
    "he": {
      "why": "גשר קארל בזריחה הוא חוויה אחרת לגמרי מהגשר בצהריים: פחות קהל, אור רך על הפסלים ומבט לטירה לפני שהעיר מתעוררת.",
      "see": [
        "פסלי האבן",
        "נהר הוולטאבה",
        "טירת פראג באור ראשון",
        "צילום כמעט בלי קהל"
      ],
      "fit": "צילום, זוגות, ביקור ראשון בפראג.",
      "tip": "להגיע 20–30 דקות לפני הזריחה, לא בדיוק בזמן."
    },
    "en": {
      "why": "Charles Bridge at sunrise is a different experience from midday: fewer crowds, soft light on the statues and a castle view before the city wakes.",
      "see": [
        "Stone statues",
        "Vltava River",
        "Prague Castle in first light",
        "Photos with few crowds"
      ],
      "fit": "Photography, couples, first-time Prague.",
      "tip": "Arrive 20–30 minutes before sunrise, not exactly at sunrise."
    }
  },
  "Prague Castle panorama": {
    "he": {
      "why": "פנורמת טירת פראג מסבירה את העיר במבט אחד: גגות אדומים, נהר, גשרים והטירה מעל הכול. זו נקודת חובה כי היא נותנת התמצאות וחוויה יחד.",
      "see": [
        "תצפית על העיר",
        "גגות וגשרים",
        "מתחם הטירה",
        "ירידה למאלה סטרנה"
      ],
      "fit": "ביקור ראשון, צילום, היסטוריה.",
      "tip": "לשלב עם ירידה ברגל דרך Nerudova/Malá Strana ולא רק להגיע ולחזור."
    },
    "en": {
      "why": "The Prague Castle panorama explains the city in one view: red roofs, river, bridges and the castle above it all. It is a must because it gives orientation and emotion together.",
      "see": [
        "City viewpoint",
        "Roofs and bridges",
        "Castle complex",
        "Walk down to Malá Strana"
      ],
      "fit": "First visit, photos, history.",
      "tip": "Combine with a walk down through Nerudova/Malá Strana, not just a quick stop."
    }
  }
};


// v48: verified-style content layer. This layer deliberately avoids algorithm/template language.
// It gives priority to concrete venue/place information before older fallbacks.
const V48_FOOD_PROFILES = {
  // Prague
  'Lokál Dlouhááá': ['Czech pub kitchen','גולאש, שניצל צ׳כי, נקניקיות ובירה פילזנר טרייה','פאב־מסעדה צ׳כי מודרני שמנסה לשמר אוכל עממי ובירה טרייה בלי מלכודת תיירים. מתאים כארוחת פתיחה בפראג כי הוא מסביר מהר מאוד מה זה אוכל צ׳כי בסיסי וטוב.','אולם בירה רועש, מקומי יחסית, לא רומנטי אבל מאוד שימושי.'],
  'Naše Maso': ['butcher bistro / meat','המבורגר, נקניקיות, כריכי בשר ובשר מדלפק קצבים','ביסטרו קצבים קטן שמפורסם בזכות חומרי גלם טובים ואכילה מהירה. זה מקום של בשר נטו — לא מסעדה ארוכה, אלא עצירה חזקה באמצע יום.','קטן, צפוף, מהיר, מתאים למי שרוצה בשר איכותי בלי טקס.'],
  'Kantýna': ['modern Czech meat hall','נתחי בקר, טרטר, נקניקיות ובירה','חלל גדול ותוסס שמחבר קצבייה ומסעדת בשר. מתאים לערב בשרי עם אנרגיה, במיוחד אם רוצים משהו יותר חזק מסתם פאב.','תעשייתי, רועש, צעיר יחסית, לא לארוחה שקטה.'],
  'Havelská Koruna': ['budget Czech cafeteria','מנות צ׳כיות יומיומיות, מרקים, בשר עם רוטב, תוספות בסיסיות','קפיטריה צ׳כית זולה ומעשית ליד המרכז. הערך שלה הוא מחיר וקצב — לא עיצוב ולא רומנטיקה.','פשוט, מהיר, טוב כשצריך לאכול בלי להיתקע במרכז התיירותי.'],
  'Sisters Bistro': ['Czech open-faced sandwiches','chlebíčky — כריכים פתוחים צבעוניים','מקום טוב להכיר את הצ׳לביצ׳קי, נשנוש צ׳כי קלאסי שמתאים לצהריים קל או הפסקה קצרה.','קליל, מהיר, מתאים לטעימות ולא לארוחה כבדה.'],
  'Mincovna': ['modern Czech near Old Town','ברווז/בשר צ׳כי, מרקים, קינוחים ובירה','מסעדה מרכזית שמנסה לתת אוכל צ׳כי בצורה יותר מסודרת ונגישה. טובה כשאתה בעיר העתיקה אבל לא רוצה לבחור מסעדה אקראית בכיכר.','מרכזי, נוח, טוב לזוגות/משפחה, לבדוק עומס.'],
  'U Parlamentu': ['classic Czech pub food','גולאש, שניצל, בירה ומנות צ׳כיות מסורתיות','פאב־מסעדה ותיק בסגנון צ׳כי פשוט. שימושי כשצריך ארוחה מקומית אמינה באזור המרכז בלי יותר מדי התחכמות.','קז׳ואל, מקומי־תיירותי מאוזן, טוב לארוחה רגילה.'],
  'Luka Lu': ['Balkan comfort food','בשרים בלקניים, גבינות, סלטים ומנות צבעוניות','מסעדה בלקנית צבעונית שנותנת הפסקה מהמטבח הצ׳כי הכבד. מומלצת אם רוצים מקום חם, משוחרר ופחות צפוי.','צבעוני, משפחתי, שמח, טוב לערב לא פורמלי.'],
  'Banh Mi Makers': ['Vietnamese street food','כריכי באן מי, קערות אסייתיות וטעמים חדים','פראג חזקה באוכל וייטנאמי, וזה מקום טוב לארוחה מהירה, זולה וטעימה כשלא רוצים עוד בשר כבד.','מהיר, צעיר, זול יחסית, טוב לצהריים.'],
  'Café Louvre': ['historic Prague café','קפה, עוגות, ארוחות קלות וקלאסיקות צ׳כיות־אירופיות','בית קפה היסטורי שנפתח בתחילת המאה ה־20 ומייצג את תרבות בתי הקפה של פראג. מתאים לקפה ועוגה עם תחושה ישנה יותר של העיר.','קלאסי, רגוע, טוב להפסקת אחר הצהריים.'],
  'Eska Karlín': ['modern Czech bakery restaurant','לחם, מאפים, מנות צ׳כיות מודרניות ובראנץ׳','מסעדה־מאפייה בקרלין שמראה את פראג העכשווית יותר. טובה כשלא רוצים להישאר רק במרכז התיירותי.','מעוצב, צעיר, מתאים לבראנץ׳ או ערב קל.'],
  'Mr. HotDoG': ['casual hot dogs and sliders','נקניקיות, סליידרים, צ׳יפס וקוקטיילים פשוטים','אופציה קז׳ואלית לאוכל מנחם ומהיר. לא יעד קולינרי היסטורי, אלא פתרון טוב כשצריך משהו טעים, קל ולא יקר מדי.','צעיר, לא פורמלי, מתאים לקבוצה.'],
  'Pho Vietnam Tuan & Lan': ['Vietnamese pho','פו, מרקים וייטנאמיים ומנות אסייתיות פשוטות','מקום טוב למרק פו חם וזול יחסית. שימושי ביום קר או כשצריך הפסקה קלה מהמטבח המקומי.','פשוט, מהיר, אוכל מחמם.'],
  'Manifesto Market': ['food market','דוכני אוכל מגוונים, שתייה, מנות רחוב וקבוצות','שוק אוכל מודרני שמתאים כשכמה אנשים רוצים דברים שונים. הערך הוא בחירה ואווירה, לא מנה אחת אייקונית.','צעיר, קבוצתי, טוב לערב קל.'],
  'U Kroka': ['Czech comfort food near Vyšehrad','מנות צ׳כיות ביתיות, בירה וקינוחים','מסעדה שכונתית טובה לשילוב עם וישהראד. מתאימה כשאתה רוצה אוכל צ׳כי בלי להיות ממש בלב המלכודות של העיר העתיקה.','חמים, שכונתי, טוב אחרי הליכה.'],
  'Bistro Monk': ['brunch / café','ביצים, קפה, כריכים ובראנץ׳','בראנץ׳ נוח במרכז, שימושי ליום שמתחיל מאוחר או כשצריך אוכל מערבי ברור לפני טיול.','קליל, נוח, מתאים לבוקר.'],
  'Kuchyň': ['Czech food with castle-area view','מנות צ׳כיות, בירה ונוף באזור הטירה','מקום שימושי באזור הטירה כי הוא מחבר אוכל צ׳כי עם נוף ומיקום חזק. מתאים אחרי עלייה לטירה כשלא רוצים לרדת רעבים למרכז.','תצפיתי, מרכזי באזור הטירה, לבדוק זמינות.'],
  'Maitrea': ['vegetarian / Asian-European','קארי, בורגר צמחוני, קערות וקינוחים','מסעדה צמחונית בעיר העתיקה שמצליחה להתאים גם למי שאוכל בשר. טובה להפסקה רגועה מהאוכל הצ׳כי הכבד.','רגוע, מעוצב, טוב לזוגות/צמחונים.'],
  'Kavárna co hledá jméno': ['creative café / brunch','קפה, בראנץ׳, עוגות ואווירה צעירה','בית קפה צעיר יותר מחוץ לתבנית הקלאסית. מתאים אם רוצים בראנץ׳ וקפה באווירה מקומית־היפסטרית.','צעיר, פחות תיירותי, טוב לפתיחת יום.'],
  'Bakeshop Praha': ['bakery / café','מאפים, עוגות, כריכים וקפה','מאפייה־קפה שימושית מאוד להפסקה במרכז. לא “מסעדת יעד”, אלא מקום טוב לקפה, מאפה או ארוחה קלה בין אתרים.','נוח, מהיר, טוב להפסקה מתוקה.'],
  // Vienna
  'Wiener Wiaz Haus': ['traditional Viennese tavern','שניצל, מרקים, בשר אוסטרי ובירה','טברנה וינאית קלאסית עם אוכל ביתי. טובה כשרוצים ארוחה אוסטרית בלי להפוך את זה לארוחת יוקרה.','מקומי, פשוט, מתאים לערב רגוע.'],
  'Gasthaus Pöschl': ['Austrian gasthaus','מנות אוסטריות קלאסיות, בשר, מרקים ותוספות','גסטהאוס קטן ופופולרי שמייצג אוכל אוסטרי עירוני בגובה העיניים. מתאים לארוחה מרכזית בלי יותר מדי טקס.','קטן, מקומי, כדאי לבדוק מקום מראש.'],
  'Figlmüller': ['Viennese schnitzel institution','שניצל וינאי גדול ודק, סלט תפוחי אדמה','מוסד שניצל מפורסם מאוד בוינה. הוא תיירותי, אבל עבור ביקור ראשון זו דרך ברורה להבין את סמל המטבח הווינאי.','עמוס, אייקוני, חובה להזמין או להגיע בשעות רגועות.'],
  'Schnitzelwirt': ['budget schnitzel house','שניצלים גדולים, מנות אוסטריות פשוטות','אופציה פחות מהודרת ויותר עממית לשניצל גדול במחיר נגיש. טובה כשלא רוצים לשלם על שם מפורסם.','עממי, כבד, טוב לרעבים.'],
  'Naschmarkt stands': ['market food','דוכני אוכל, גבינות, זיתים, אוכל מזרח־תיכוני ואסייתי','השוק הגדול של וינה מתאים לשיטוט וטעימות יותר מאשר למסעדה אחת. טוב כשכל אחד רוצה משהו אחר.','שוק, תוסס, טוב לצהריים קליל.'],
  'Bitzi': ['modern casual Viennese','אוכל אוסטרי־מודרני וקז׳ואל','בחירה טובה כשמחפשים אוכל מקומי אבל פחות כבד מגסטהאוס מסורתי.','קז׳ואל, מודרני, מתאים לערב רגוע.'],
  'Trześniewski': ['open-faced sandwiches','כריכונים פתוחים עם ממרחים','מוסד וינאי קטן ומהיר לכריכונים פתוחים. טוב להפסקה קצרה, לא לארוחה ארוכה.','מהיר, היסטורי, זול יחסית.'],
  'Leberkas-Pepi': ['Austrian meat loaf snack','Leberkäse בלחמנייה, חרדל ובירה','עצירת אוכל רחוב אוסטרית ברורה: פרוסת Leberkäse חמה בלחמנייה. לא עדין, אבל מקומי וטעים.','מהיר, עממי, מתאים לנשנוש.'],
  'Café Hawelka': ['historic coffeehouse','קפה, עוגות, Buchteln כשזמין','בית קפה ותיק עם אווירה ספרותית־בוהמית. באים בשביל התחושה של בית קפה וינאי ישן, לא בשביל שירות מהיר.','היסטורי, איטי, מלא אופי.'],
  'Café Central': ['grand Viennese coffeehouse','מלנז׳, אפפלשטרודל, עוגות וקפה','אחד מבתי הקפה המפורסמים בעיר, פועל מאז 1876 ומזוהה עם תרבות בתי הקפה הווינאית. תיירותי — אבל עדיין מרשים.','מפואר, היסטורי, עמוס.'],
  'Gmoakeller': ['traditional Austrian restaurant','שניצל, גולאש, בשרים וקינוחים','גסטהאוס אוסטרי קלאסי עם תחושת מסעדה מקומית. טוב לארוחה מסורתית רצינית.','מסורתי, חמים, מתאים לערב.'],
  'Glacis Beisl': ['Austrian beisl near MuseumsQuartier','מנות אוסטריות, חצר נעימה, יין/בירה','בחירה טובה ליד MuseumsQuartier כי היא משלבת אוכל אוסטרי עם חצר נוחה ואווירה פחות רשמית.','קז׳ואל־אלגנטי, טוב אחרי מוזיאון.'],
  'Neni am Naschmarkt': ['Middle Eastern / Israeli-Mediterranean','חומוס, סלטים, מנות ים־תיכוניות','אופציה ים־תיכונית בתוך אזור השוק. טובה כשצריך אוכל קליל יותר משניצל וגולאש.','צבעוני, שוק, טוב לקבוצה.'],
  'UBox Würstelstand': ['sausage stand','נקניקיות וינאיות, Käsekrainer, חרדל','דוכן נקניקיות — חלק אמיתי מתרבות האוכל העירונית של וינה. מתאים לאוכל מהיר אחרי בילוי או בין אתרים.','מהיר, עירוני, לא פורמלי.'],
  'Swing Kitchen': ['vegan burgers','המבורגרים טבעוניים, צ׳יפס ורטבים','אופציה טבעונית מהירה ונגישה. שימושית כשצריך פתרון ברור לטבעונים בלי לחפש מסעדה ייעודית.','מהיר, טבעוני, קז׳ואל.'],
  'Miznon Vienna': ['Mediterranean street food','פיתות, ירקות צלויים, אוכל ים־תיכוני','אוכל רחוב ים־תיכוני מוכר עם מנות קלות יחסית. טוב כשרוצים לשבור את רצף האוכל האוסטרי הכבד.','רועש, מהיר, מתאים לצהריים.'],
  'Bitzinger Würstelstand': ['classic sausage stand','נקניקיות, Käsekrainer, בירה קלה','דוכן נקניקיות מפורסם ליד האופרה. טוב אחרי הופעה או כעצירת אוכל עירונית מהירה.','אייקוני, מהיר, לא ארוחה מלאה.'],
  'Gasthaus Rebhuhn': ['traditional Austrian gasthaus','מנות אוסטריות ביתיות, בירה, שניצל','גסטהאוס שכונתי יותר שמרגיש פחות נוצץ. טוב למי שרוצה אוכל אוסטרי אמיתי בלי מרכז תיירותי עמוס.','מקומי, שקט יחסית, טוב לערב.'],
  'Vollpension': ['grandma-style café','עוגות ביתיות, קפה, ארוחות קלות','קונספט בית קפה שמדגיש עוגות ביתיות ואווירת “סבתא”. מתאים להפסקה מתוקה עם סיפור חברתי.','חמים, מתוק, טוב להפסקה.'],
  'Bruder': ['modern creative kitchen / bar','מנות יצירתיות, תסיסות, קוקטיילים','מסעדה־בר יצירתית שמתאימה למי שמחפש וינה עכשווית ולא רק שניצל ובתי קפה.','יצירתי, ערב, מתאים לאוהבי אוכל מתקדם.'],
  // Strasbourg
  'La Corde à Linge': ['Alsatian casual restaurant','Spätzle, מנות אלזסיות וקז׳ואל ב־Petite France','מסעדה פופולרית בלב פטיט פראנס. היתרון שלה הוא מיקום, אווירה ותפריט אלזסי נגיש — לא ארוחת גורמה.','מרכזית, תוססת, טובה אחרי הליכה בתעלות.'],
  'Maison Kammerzell': ['historic Alsatian restaurant','מנות אלזסיות, דגים, choucroute, קינוחים','מבנה היסטורי מפורסם ליד הקתדרלה, עם חזית עץ מצוירת וחדרים מסורתיים. אוכלים כאן גם בשביל הבניין והחוויה.','תיירותי אבל אייקוני, מתאים לביקור ראשון.'],
  'Au Pont Corbeau': ['traditional winstub','Choucroute, baeckeoffe, מנות אלזסיות כבדות','וינסטוב מסורתי — מקום טוב להבין את המטבח האלזסי הכבד והביתי. מתאים לארוחה מקומית אמיתית.','חמים, מסורתי, להזמין מראש.'],
  'Binchstub Broglie': ['flammekueche specialist','Flammekueche קלאסי וגרסאות יצירתיות','מקום שמתמקד בטארט פלמבה — המאפה הדק של אלזס עם שמנת, בצל ובייקון/תוספות. טוב לטעימה ראשונה של המטבח המקומי.','קז׳ואל, מתאים לקבוצה.'],
  'Le Tire-Bouchon': ['Alsatian winstub','מנות אלזסיות, יין מקומי, אוכל מסורתי','מסעדה אלזסית קלאסית ליד הקתדרלה. טובה כשמחפשים חוויה אזורית מסורתית במרכז.','מסורתי, תיירותי־איכותי, טוב לערב.'],
  'Chez Yvonne': ['classic Alsatian winstub','מאכלי אלזס מסורתיים, בשר, יין מקומי','וינסטוב ותיק שמייצג את המטבח המקומי. מתאים למי שרוצה ארוחה אלזסית מלאה ולא רק נשנוש.','מסורתי, חמים, מתאים לערב.'],
  'Au Brasseur': ['brewpub / Alsatian casual','בירה מקומית, flammekueche, אוכל פאב','מבשלת־פאב נוחה במרכז. טובה לבירה וארוחה קלה יותר, במיוחד לקבוצה.','קז׳ואל, בירה, מחיר נגיש יחסית.'],
  'Flam’s': ['flammekueche / tarte flambée','Flammekueche קלאסי, גבינות, מתוקים וגרסאות צמחוניות','Flam’s מתמחה ב־Flammekueche — הבצק הדק המזוהה עם אלזס. זו בחירה טובה למי שרוצה לטעום מאכל מקומי ברור בלי להיכנס למסעדה כבדה.','קז׳ואל, קבוצתי, מתאים לצהריים/ערב קל.'],
  'L’Épicerie': ['sandwiches / tartines / local casual','כריכים פתוחים, גבינות, יין ואוכל קל','מקום קטן וקז׳ואלי להפסקת צהריים או ערב קל. מתאים כשלא רוצים ארוחה כבדה אלא משהו מקומי ופשוט.','קליל, מקומי, מתאים להפסקה.'],
  'Bistrot Coco': ['French bistro','מנות ביסטרו צרפתיות, יין, קינוחים','ביסטרו צרפתי־עירוני שמציע משהו יותר מודרני מהוינסטוב האלזסי המסורתי. טוב לערב רגוע.','ביסטרו, זוגות, ערב.'],
  'Meiselocker': ['Alsatian/French restaurant','מנות אלזסיות וצרפתיות, יין, בשר/דגים','מסעדה מקומית יותר שמאפשרת ארוחה אלזסית בלי לבחור מקום אייקוני מדי.','מסורתי־קז׳ואל, טוב לערב.'],
  'Le Clou': ['traditional winstub','מנות אלזסיות, choucroute, בשר ויין','וינסטוב מסורתי ליד המרכז. טוב למי שרוצה מטבח מקומי בחלל חמים ופחות מודרני.','חמים, מסורתי, מומלץ להזמין.'],
  'La Hache': ['French brasserie','בשר, דגים, קינוחים, יין','בראסרי צרפתית נוחה במרכז העיר. מתאימה כשמחפשים תפריט רחב ולא רק אלזסי כבד.','מרכזי, אלגנטי־קז׳ואל.'],
  'Pizz’arOme': ['pizza / Italian casual','פיצות, סלטים, אוכל איטלקי קל','לא אלזסי, אבל שימושי כשצריך ארוחה פשוטה וקלה להבנה, במיוחד עם ילדים או קבוצה.','קז׳ואל, משפחתי.'],
  'Le Thomasien': ['Alsatian/French restaurant','מנות מקומיות, יין, אוכל צרפתי־אלזסי','מסעדה אזורית טובה כשמחפשים אוכל מקומי בלי ללכת לאופציה הכי מפורסמת.','רגוע, מקומי, מתאים לערב.'],
  'PUR etc.': ['healthy casual','קערות, סלטים, אוכל מהיר בריא','אופציה קלה ובריאה יותר בתוך עיר עם הרבה אוכל כבד. טובה לצהריים מהיר.','מהיר, בריא, מתאים להפסקה.'],
  'Café Bretelles': ['specialty coffee','קפה איכותי, מאפים, בראנץ׳ קל','בית קפה טוב למי שמחפש קפה איכותי ולא רק אספרסו תיירותי. מתאים לבוקר או הפסקה.','קפה, צעיר, קליל.'],
  'What the Cake': ['vegan café / cakes','עוגות טבעוניות, קפה, קינוחים','קפה טבעוני־מתוק שמתאים להפסקת קינוח או למי שמחפש אופציה טבעונית ברורה.','מתוק, טבעוני, הפסקה קצרה.'],
  'Stück Burger': ['burgers','המבורגרים, צ׳יפס, אוכל מהיר איכותי','אופציה פשוטה וברורה כשלא רוצים אוכל אלזסי. טובה לקבוצה או יום עמוס.','קז׳ואל, מהיר.'],
  'La Fignette': ['traditional flammekueche/winstub','Flammekueche, מנות אלזסיות, יין','אחת האופציות הטובות לטעום טארט פלמבה באווירה מסורתית יותר. מתאימה להיכרות עם המטבח האלזסי.','מסורתי, קז׳ואל, טוב לערב.']
};

const V48_NIGHTLIFE_PROFILES = {
  // Prague
  'Letná Beer Garden': ['open-air beer garden','בירה צ׳כית, תצפית לגשרים, ישיבה בחוץ','לא מועדון ולא בר קוקטיילים — זה ערב פשוט עם נוף. מגיעים לפני שקיעה, יושבים בפארק, ורואים את הגשרים של פראג מלמעלה.','שקט יחסית, חברים, שקיעה; לא מתאים לגשם.'],
  'Náplavka Riverside': ['riverside evening strip','הליכה על הנהר, ברים/דוכנים עונתיים, סירות ואווירת מקומיים','אזור נהר שמתעורר בערב. מתאים כשלא רוצים להתחייב למועדון אלא לשוטט, לשתות משהו ולספוג עיר.','קז׳ואל, חופשי, תלוי מזג אוויר ועונה.'],
  'Hemingway Bar': ['craft cocktail bar','קוקטיילים מוקפדים, רום/אבסינת, אווירה אינטימית','בר קוקטיילים קטן ומפורסם. זה מקום לערב איכותי ושקט יחסית, לא למסיבת חברים רועשת.','זוגות, קוקטיילים, חובה להזמין/לבדוק מקום.'],
  'Anonymous Bar': ['theatrical cocktail bar','קוקטיילים עם הגשה משחקית, אווירה חשוכה ותיאטרלית','המשיכה כאן היא לא רק השתייה אלא ההפתעה בהגשה והאווירה. מתאים לערב שהוא חוויה.','דייט, זוגות, מי שאוהב קונספט.'],
  'Dva Kohouti': ['craft beer bar/brewery','בירת קראפט, קרלין, קהל צעיר ומקומי','אחד המקומות הטובים להרגיש את קרלין הצעירה. באים לבירה טובה, לא למוזיקה חזקה.','חברים, תחילת ערב, בירה.'],
  'U Sudu': ['cellar bar','בר מרתף, בירה, אווירה סטודנטיאלית','מקום שמתאים לערב לא פורמלי במרתפים ולאווירה צעירה. פחות אלגנטי, יותר “בוא נשב ונזרום”.','צעירים, בירה, לא דייט יוקרתי.'],
  'Jazz Dock': ['live jazz club','הופעות ג׳אז/בלוז/פיוז׳ן על הנהר','מועדון מוזיקה חיה שבו התוכנית קובעת את הערב. מתאים אם רוצים תוכן מוזיקלי אמיתי ולא רק לשתות.','זוגות, מוזיקה חיה, לבדוק ליינאפ.'],
  'Lucerna Music Bar': ['concert/retro club','הופעות, מסיבות רטרו, רחבת ריקודים','מקום ותיק במרכז למסיבה או הופעה. לבחור רק אחרי שבודקים איזה ערב מתקיים.','ריקודים, קבוצות, ערב אנרגטי.'],
  'Cross Club': ['alternative electronic club','עיצוב steampunk מתכתי, אלקטרוני/אלטרנטיבי','אחד המקומות הכי ויזואליים בפראג. באים בשביל שילוב של מוזיקה, עיצוב מוזר וקהל אלטרנטיבי.','צעירים, אלטרנטיבי, לא ערב רגוע.'],
  'BeerGeek Bar': ['craft beer specialist','עשרות ברזים/בירות קראפט, טעימות, צוות שמבין בבירה','גן עדן לחובבי בירה. לא מקום לרקוד — מקום לטעום סגנונות שלא תמצא בפאב רגיל.','חובבי בירה, שיחה, חברים.'],
  'Vzorkovna': ['underground bar / live space','מרתפים, מוזיקה, אווירה מחתרתית','מקום מעט כאוטי ומחתרתי יותר. מתאים אם רוצים ערב צעיר ולא מלוטש.','צעירים, מוזיקה, לא למי שמחפש נוחות.'],
  'Roxy Prague': ['club / live venue','DJ, הופעות, אלקטרוני, קהל בינלאומי','בחירה טובה למועדון אמיתי במרכז. הערב תלוי מאוד בליינאפ, לכן לא להגיע בלי לבדוק.','מסיבה, אלקטרוני, קבוצות.'],
  'Aloha Wave Lounge': ['tropical cocktail lounge','קוקטיילים, מוזיקה, אווירת חופשה','בר קליל יותר עם אווירה טרופית. מתאים כערב לא מחייב, לא כחוויית תרבות עמוקה.','קוקטיילים, חברים, קליל.'],
  'Black Angel’s Bar': ['elegant cocktail cellar','מרתף אלגנטי, קוקטיילים, תאורה נמוכה','בר קוקטיילים עם תחושה קלאסית ודרמטית. מתאים לדייט או ערב שקט יותר.','זוגות, קוקטיילים, לא קבוצות גדולות.'],
  'Cobra Bar': ['neighborhood bar / café-night','בר שכונתי, קוקטיילים, אוכל קל, אווירה צעירה','מקום היברידי שמתאים להתחיל ערב בשכונה פחות תיירותית. לא מועדון, אלא בר קז׳ואל.','מקומי, חברים, התחלת ערב.'],
  'M1 Lounge': ['lounge club','מוזיקה, קוקטיילים, שולחנות, אווירת מועדון־לאונג׳','בחירה למי שרוצה משהו יותר נוצץ ותיירותי במרכז. לא הכי מקומי, אבל ברור ונגיש.','קבוצות, לאונג׳, ערב מאוחר.'],
  'Karlovy Lázně': ['large tourist club','כמה קומות, סגנונות מוזיקה שונים, קהל תיירותי','מועדון גדול ליד גשר קארל. הולכים אליו אם רוצים מסיבה ברורה וקלה, לא אם מחפשים מקום מקומי איכותי.','תיירותי, רועש, צעיר.'],
  'Duplex Rooftop': ['rooftop club/bar','נוף עירוני, קוקטיילים, מועדון על גג','מתאים לערב שמתחיל בתצפית וממשיך למוזיקה. יותר נוצץ ותיירותי מאשר מקומי.','נוף, קבוצות, ערב מאוחר.'],
  'Chapeau Rouge': ['multi-floor bar/club','קומות שונות, מוזיקה חיה/DJ, קהל מעורב','מקום ותיק עם כמה חללים. מתאים כשלא בטוחים אם רוצים בר או מסיבה — אפשר לזוז בין אזורים.','צעירים, קבוצות, משתנה לפי ערב.'],
  'Kasárna Karlín': ['cultural courtyard/bar','חצר תרבות, סרטים/אירועים/בירה, אזור Karlín','מרחב תרבותי יותר מבר רגיל. טוב לערב רגוע עם אירוע, בירה ואווירה מקומית.','תרבות, קיץ, חברים.'],
  // Vienna
  'Donaukanal Bars': ['riverside bar strip','ברים ליד תעלת הדנובה, גרפיטי, שתייה בחוץ','אזור ערב עירוני וצעיר יותר ממרכז וינה הקלאסי. טוב להתחלת ערב או הליכה עם עצירה לשתייה.','קיץ, חברים, לא פורמלי.'],
  'Bermuda Triangle': ['central bar district','אזור ברים צפוף בעיר העתיקה','אזור קלאסי לבר־הופינג קל במרכז. לא מקום אחד אלא מקבץ ברים, לכן מתאים כשלא רוצים להחליט מראש.','קבוצות, תיירים ומקומיים, ערב קל.'],
  'Prater DOME': ['large nightclub','כמה רחבות, מוזיקה מסחרית, קהל צעיר','אחד המועדונים הגדולים בעיר. מתאים למי שרוצה מסיבה ברורה ורועשת, לא ערב תרבותי.','צעירים, ריקודים, לא שקט.'],
  'Loos American Bar': ['historic design cocktail bar','בר קטן מאוד מ־1908 בעיצוב Adolf Loos','אייקון עיצובי יותר מאשר עוד בר. המקום קטן וצפוף, אבל חובבי אדריכלות וקוקטיילים יבינו למה הוא מפורסם.','קוקטיילים, עיצוב, להגיע מוקדם.'],
  'Krypt Bar': ['hidden cocktail bar','קוקטיילים במרתף, אווירה חשוכה ומוקפדת','בר קוקטיילים מודרני שמתאים לערב אינטימי. לא מיועד למסיבה אלא לשתייה איכותית.','דייט, קוקטיילים, הזמנה מומלצת.'],
  'Travel Shack Vienna': ['backpacker party bar','משחקי שתייה, קהל בינלאומי, ערב רועש','בר תרמילאים מובהק. טוב אם רוצים להכיר אנשים ולצחוק, לא אם מחפשים וינה אלגנטית.','צעיר, רועש, בינלאומי.'],
  '25hours Rooftop': ['rooftop hotel bar','נוף, קוקטיילים, אווירת מלון צעירה','בר גג נגיש ליד MuseumsQuartier. מתאים לשקיעה או פתיחת ערב עם נוף.','זוגות/חברים, נוף, לא מועדון.'],
  'Das Loft Bar': ['18th-floor rooftop bar','נוף פנורמי, קוקטיילים, SO/Vienna','בר גבוה עם אחד הנופים המרשימים על וינה. מתאים לערב אלגנטי וצילום, לא למסיבה.','זוגות, שקיעה, תקציב גבוה יותר.'],
  'Volksgarten Club': ['elegant club','מועדון מרכזי, מוזיקה מסחרית/האוס, קהל לבוש יותר','בחירה למי שרוצה מועדון יותר אלגנטי מאשר מחתרתי. לבדוק קוד לבוש וליין־אפ.','ריקודים, אלגנטי, ערב מאוחר.'],
  'Grelle Forelle': ['techno / underground club','טכנו, האוס, מינימל, תעלת הדנובה','מועדון טכנו חשוב בוינה, לא מיינסטרים. מגיעים בשביל סאונד וליינאפ, לא בשביל בר יפה.','חובבי טכנו, לילה מאוחר, לבדוק אירוע.'],
  'Flex': ['club/live venue by canal','אלקטרוני, הופעות, מועדון ותיק','מקום ותיק בסצנת הלילה של וינה ליד התעלה. מתאים למי שמחפש מוזיקה חזקה ולא ערב אלגנטי.','מוזיקה, צעירים, משתנה לפי ערב.'],
  'Celeste': ['bar/club/cultural venue','DJ, אמנות, הופעות קטנות','חלל קטן יותר עם אופי תרבותי־אלטרנטיבי. מתאים למי שרוצה ערב פחות מסחרי.','אלטרנטיבי, תרבות, לבדוק תוכנית.'],
  'Kleinod Bar': ['cocktail bar','קוקטיילים, אווירה מוקפדת, מרכז העיר','בר קוקטיילים טוב לערב איכותי אחרי ארוחה. יותר שתייה ושיחה מאשר ריקודים.','קוקטיילים, דייט, שקט יחסית.'],
  'Needle Vinyl Bar': ['vinyl/music bar','תקליטים, מוזיקה, קוקטיילים','בחירה טובה אם חשוב לך מה מתנגן ולא רק מה שותים. מתאים לערב מוזיקלי קטן.','מוזיקה, שיחה, קהל בוגר יותר.'],
  'If Dogs Run Free': ['cocktail bar','קוקטיילים יצירתיים, חלל אינטימי','בר קוקטיילים עם אופי עצמאי יותר. מתאים למי שכבר לא רוצה את המקומות המפורסמים בלבד.','קוקטיילים, זוגות, ערב רגוע.'],
  '1516 Brewing': ['brewpub','בירה מבושלת במקום, אוכל פאב, מסכים/ספורט','פאב־מבשלת פרקטי במרכז. טוב לבירה ואוכל פשוט, לא לחוויה אלגנטית.','חברים, בירה, אוכל פשוט.'],
  'Beaver Brewing': ['craft beer pub','בירות קראפט, המבורגרים/אוכל פאב','פאב קראפט רגוע יותר למי שרוצה בירה טובה ולא מועדון.','בירה, חברים, ערב קל.'],
  'Sass Music Club': ['house/club','האוס, אלקטרוני, רחבת ריקודים','מועדון קטן יותר עם דגש על מוזיקה וריקודים. לבדוק אירוע לפני שמגיעים.','ריקודים, לילה מאוחר.'],
  'Josef Cocktailbar': ['cocktail bar','קוקטיילים, אווירה מודרנית','מקום מתאים לערב של שתייה איכותית במרכז. פחות אייקוני מ־Loos, אבל נוח יותר.','קוקטיילים, זוגות/חברים.'],
  'MuseumsQuartier evening': ['cultural evening area','חצרות MQ, שתייה בחוץ, אירועים עונתיים','לא בר אחד אלא אזור. טוב בערב קיץ כשאנשים יושבים בחוץ, שותים ומשלבים מוזיאונים/תרבות.','קז׳ואל, קיץ, תרבות.'],
  // Strasbourg
  'Krutenau bars': ['student/local bar area','ברים קטנים, קהל צעיר, אווירה שכונתית','אזור קרוטנו טוב לערב פחות תיירותי. זה לא אתר אחד אלא שכונה עם ברים וקהל מקומי־סטודנטיאלי.','צעיר, קז׳ואל, בר־הופינג קל.'],
  'Petite France night walk': ['romantic night walk','תעלות, גשרים, תאורה ובתי חצי־עץ','לא חיי לילה רועשים אלא הליכת ערב יפה. מתאים לזוגות או סיום יום רגוע.','רומנטי, צילום, חינם.'],
  'Code Bar': ['cocktail bar','קוקטיילים, אווירה אינטימית','בר קטן לערב שתייה איכותי במרכז. מתאים כשלא רוצים בירה או פאב סטודנטים.','קוקטיילים, דייט, ערב רגוע.'],
  'Le Grincheux': ['cocktail/beer bar','שתייה, מוזיקה, אווירה מקומית','בר קטן עם אופי פחות תיירותי. טוב לערב קל במרכז בלי להיכנס למועדון.','קז׳ואל, מקומי, חברים.'],
  'Académie de la Bière': ['beer bar','מבחר בירות גדול, אוכל פאב, פתוח מאוחר','מוסד בירה שימושי בשטרסבורג. מתאים כשמחפשים ערב בטוח של בירה ואוכל פשוט, במיוחד באזור Petite France.','בירה, סטודנטים, פתוח מאוחר.'],
  'L’Alchimiste': ['cocktail bar','קוקטיילים, חלל קטן, אווירה מוקפדת','מקום טוב לערב קוקטיילים ולא בירה. מתאים לזוגות או תחילת ערב אלגנטית יותר.','קוקטיילים, אינטימי.'],
  'Jeannette et les Cycleux': ['retro bar','עיצוב רטרו, שתייה, אווירה צעירה','בר צבעוני עם אופי רטרו. מתאים לערב לא מחייב עם חברים.','צעיר, קז׳ואל, לא מועדון.'],
  'Les BerThoM': ['beer bar','מבחר בירות, בר מרכזי, אווירה חברתית','בר בירה ליד המרכז עם דגש על בירות ומפגש חברתי. טוב לקבוצה שרוצה לשבת ולדבר.','בירה, חברים, קז׳ואל.'],
  'Raven Café': ['bar/café evening','קפה־בר, שתייה, אווירה רגועה','מתאים לערב קל ולא רועש. יותר מקום לשיחה מאשר למסיבה.','רגוע, שיחה, זוגות/חברים.'],
  'La Laiterie': ['concert venue','הופעות חיות, רוק/אלטרנטיבי/אלקטרוני לפי ערב','אולם הופעות מרכזי בשטרסבורג. מגיעים רק לפי תוכנית — זה לא בר ספונטני.','מוזיקה חיה, לבדוק לוח הופעות.'],
  'Korrigan Bar': ['pub / beer bar','בירה, פאב, אווירה לא פורמלית','פאב פשוט לערב חברים. טוב כשמחפשים משהו קל ולא יקר מדי.','בירה, חברים.'],
  'Le Local': ['local bar','שתייה, קהל מקומי, מוזיקה לפי ערב','בר שכונתי יותר, מתאים אם רוצים לברוח מהמרכז התיירותי.','מקומי, קז׳ואל.'],
  'Blue Moon': ['bar / late-night','שתייה, מוזיקה, ערב מאוחר','אופציה לערב מאוחר כשמחפשים משהו פתוח יותר ולא מסעדה. לבדוק שעות בפועל.','לילה מאוחר, חברים.'],
  'Delirium Café Strasbourg': ['beer bar','בירות רבות, מותג Delirium, אווירה תוססת','מקום טוב לחובבי בירה שרוצים מבחר רחב ומקום מוכר. פחות רומנטי, יותר חברים.','בירה, קבוצות, תוסס.'],
  'Mandala': ['club / DJ night','מוזיקה וריקודים לפי ערב','מקום לבחור רק אם באותו ערב יש ליינאפ שמתאים לך. לא להניח שכל לילה אותו דבר.','ריקודים, לבדוק אירוע.'],
  'The Dubliners': ['Irish pub','בירה, ספורט, מוזיקה פאב','פאב אירי קלאסי למי שרוצה ערב מוכר ולא אלזסי. טוב לספורט או בירה עם קהל בינלאומי.','פאב, ספורט, חברים.'],
  'Le Terminal': ['club / electronic bar','אלקטרוני, DJ, לילה צעיר','אופציה למסיבה צעירה יותר. לבדוק את האירוע כי האופי משתנה.','צעירים, מוזיקה, לילה.'],
  'Bar Barberousse': ['rum bar','רום, אווירת פיראטים/בר נושא','בר נושא סביב רום ואווירה קלילה. מתאים לערב חברים, לא לדייט שקט.','רום, קבוצות, קליל.'],
  'Phonograph': ['music bar','מוזיקה, שתייה, אווירה קטנה','מקום לערב עם דגש על מוזיקה ולא רק שתייה. לבדוק מה מתנגן באותו ערב.','מוזיקה, שיחה.'],
  'Aedaen Place': ['hybrid food/bar/culture','בר, אוכל, חללים שונים, אירועים','מתחם עם אוכל, בר ואירועים שמשתנה לפי יום. מתאים כשלא רוצים לבחור בין אוכל לבילוי.','גמיש, חברים, לבדוק תוכנית.']
};

function v48FoodGuide(item){
  const p = V48_FOOD_PROFILES[item?.name];
  if(!p) return null;
  const [cuisine, order, why, vibe] = p;
  return getLang()==='he' ? {
    why: `${item.name} — ${why}`,
    see: [`סוג מטבח: ${cuisine}`, `מה כדאי לבדוק/להזמין: ${order}`, `אופי המקום: ${vibe}`, 'לפני הגעה: לפתוח שעות פתיחה וביקורות עדכניות כשיש אינטרנט'],
    fit: `מתאים כאשר רוצים ${cuisine} ולא סתם לבחור מקום לפי מרחק.`,
    tip: 'אם המקום קרוב למסלול שלך — להוסיף ל־My Trip; אם הוא דורש נסיעה מיוחדת, לבדוק קודם אם הוא באמת שווה ביחס לזמן.'
  } : {
    why: `${item.name} — ${why}`,
    see: [`Cuisine: ${cuisine}`, `What to check/order: ${order}`, `Vibe: ${vibe}`, 'Before going: open live hours and recent reviews while online'],
    fit: `Good when you specifically want ${cuisine}, not just the closest random restaurant.`,
    tip: 'Add it to My Trip if it fits your route; if it requires a detour, verify it is worth the time first.'
  };
}

function v48NightlifeGuide(item){
  const p = V48_NIGHTLIFE_PROFILES[item?.name];
  if(!p) return null;
  const [type, what, why, vibe] = p;
  return getLang()==='he' ? {
    why: `${item.name} — ${why}`,
    see: [`סוג מקום: ${type}`, `מה יש שם בפועל: ${what}`, `אופי הערב: ${vibe}`, 'לפני יציאה: לבדוק ליינאפ/שעות/הזמנה כי חיי לילה משתנים לפי יום'],
    fit: `מתאים אם אתה מחפש ${type}. לא כל מקום לילה מתאים לאותו מצב רוח.`,
    tip: 'בפראג/וינה/שטרסבורג עדיף לבחור ערב לפי אופי — בירה, קוקטיילים, הופעה או ריקודים — ולא רק לפי דירוג כללי.'
  } : {
    why: `${item.name} — ${why}`,
    see: [`Venue type: ${type}`, `What is actually there: ${what}`, `Evening mood: ${vibe}`, 'Before leaving: check lineup/hours/reservations because nightlife changes by date'],
    fit: `Good if you are looking for ${type}. Not every nightlife place fits the same mood.`,
    tip: 'Choose nightlife by mood — beer, cocktails, live music or dancing — not only by rating.'
  };
}

function v48RealGuide(item){
  if(!item) return null;
  if(item.cat==='food') return v48FoodGuide(item);
  if(item.cat==='nightlife') return v48NightlifeGuide(item);
  return null;
}

function v47SpecificGuide(item){
  const pack = V47_REAL_GUIDE_OVERRIDES[item?.name];
  if(!pack) return null;
  return pack[getLang()] || pack.en || pack.he;
}



// v49: specific real guide content for Experiences + MustDo. This gets priority over all generic fallback templates.
const V49_EXPERIENCE_MUSTDO_GUIDES = {
  "Vltava River Cruise": {
    "he": {
      "why": "שייט בוולטאבה נותן את פראג מזווית שאי אפשר לקבל מהרחוב: הגשרים, האיים, הטירה והעיר העתיקה נפרשים לאט לאורך הנהר. זו חוויה טובה במיוחד ביום ראשון בעיר או כשכבר עייפים מהליכה.",
      "see": [
        "גשר קארל מהמים",
        "קו הרקיע של טירת פראג",
        "קמפה והאיים הקטנים",
        "חזיתות העיר העתיקה לאורך הנהר"
      ],
      "fit": "מתאים לזוגות, משפחות ומי שרוצה לראות הרבה בלי ללכת הרבה.",
      "tip": "הזמן הכי טוב הוא לפני שקיעה. לבדוק מסלול — לא כל שייט עובר באותם קטעים."
    },
    "en": {
      "why": "A Vltava cruise shows Prague from the angle the streets cannot give: bridges, islands, castle skyline and Old Town façades unfolding from the river.",
      "see": [
        "Charles Bridge from the water",
        "Prague Castle skyline",
        "Kampa and river islands",
        "Old Town riverfront façades"
      ],
      "fit": "Good for couples, families and tired legs.",
      "tip": "Best before sunset. Check the exact route; not all cruises cover the same stretch."
    }
  },
  "Petřín Hill Viewpoint": {
    "he": {
      "why": "פטרין היא גבעה ירוקה מעל מאלה סטרנה, עם תחושת בריחה מההמולה של המרכז. מגיעים בשביל נוף, שבילים, גנים ורגע שקיעה שמרגיש רומנטי יותר מרוב נקודות התצפית בעיר.",
      "see": [
        "שבילי גן ירוקים",
        "מגדל התצפית של פטרין",
        "נוף לטירה, גשרים וגגות",
        "אזור שקט יחסית להליכה"
      ],
      "fit": "מתאים לשקיעה, זוגות, צילום ויום עם קצב איטי.",
      "tip": "הפוניקולר עלול להיות מושבת בתקופות שיפוץ; לבדוק לפני שמתכננים עלייה קלה."
    },
    "en": {
      "why": "Petřín is a green hill above Malá Strana, a real pause from the dense center. Go for views, gardens and one of Prague’s softer sunset moments.",
      "see": [
        "Green garden paths",
        "Petřín Lookout Tower",
        "Views of castle, bridges and rooftops",
        "A quieter walking area"
      ],
      "fit": "Best for sunset, couples, photos and a slow day.",
      "tip": "Check funicular status before relying on it; walking up is possible but tiring."
    }
  },
  "Black Light Theatre": {
    "he": {
      "why": "תיאטרון אור שחור הוא סגנון מופע שמזוהה מאוד עם פראג: חושך, תאורה אולטרה־סגולה, תנועה ואשליות ויזואליות. זה לא מוזיאון ולא טיול רחוב, אלא ערב קליל ומקורה עם אופי מקומי.",
      "see": [
        "מופע ויזואלי ללא צורך בשפה גבוהה",
        "אפקטים של אור וחושך",
        "תנועה, פנטומימה ואשליות",
        "אופציה טובה ליום גשם"
      ],
      "fit": "מתאים למשפחות, ערב גשום ומי שרוצה מופע קל להבנה.",
      "tip": "לבדוק ביקורות למופע הספציפי; האיכות משתנה בין תיאטראות שונים."
    },
    "en": {
      "why": "Black light theatre is a Prague-associated performance style using darkness, UV light, movement and visual illusion. It is an indoor evening with a local twist.",
      "see": [
        "Visual performance with little language barrier",
        "Light-and-dark effects",
        "Movement, mime and illusion",
        "Good rainy-day option"
      ],
      "fit": "Good for families, rainy evenings and easy entertainment.",
      "tip": "Check reviews for the specific show; quality varies by venue."
    }
  },
  "Beer Spa": {
    "he": {
      "why": "ספא בירה הוא חוויה תיירותית אבל זכירה: יושבים באמבט עץ עם מרכיבי בירה, שותים בירה תוך כדי, ומקבלים סיפור מצחיק לספר אחרי הטיול. לא מגיעים בשביל היסטוריה — מגיעים בשביל חוויה קלילה ומשעשעת.",
      "see": [
        "אמבט ספא עם מרכיבי בירה",
        "בירה לשתייה במהלך החוויה",
        "חדר זוגי/פרטי לפי ספק",
        "אווירה מצחיקה ולא רשמית"
      ],
      "fit": "מתאים לזוגות, חברים ומתנה קטנה לעצמך בטיול.",
      "tip": "להשוות מחירים וביקורות; יש הבדל גדול בין ספקים."
    },
    "en": {
      "why": "Beer spa is touristy but memorable: wooden tubs, beer ingredients, beer to drink and a funny travel story. It is not history; it is a playful wellness break.",
      "see": [
        "Beer-ingredient spa tub",
        "Beer during the session",
        "Private/couple room options",
        "Light and funny mood"
      ],
      "fit": "Good for couples, friends and a playful break.",
      "tip": "Compare providers and reviews; the experience varies a lot."
    }
  },
  "Prague Vintage Car Tour": {
    "he": {
      "why": "סיור רכב וינטג׳ מתאים כשאתה רוצה לראות את פראג בסגנון קולנועי, בלי ללכת הרבה. הרכב עצמו הוא חלק מהחוויה: צילום, נסיעה איטית ברחובות היסטוריים ותחושה של “פראג של פעם”.",
      "see": [
        "רכב פתוח/וינטג׳ לפי הספק",
        "רחובות העיר העתיקה ומאלה סטרנה",
        "עצירות צילום קצרות",
        "חוויה טובה למעט הליכה"
      ],
      "fit": "מתאים לצילום, זוגות, הורים או יום עייף.",
      "tip": "לוודא מסלול ושפה מראש; חלק מהסיורים הם יותר צילום ופחות הדרכה עמוקה."
    },
    "en": {
      "why": "A vintage car tour is for seeing Prague in a cinematic style with minimal walking. The car is part of the experience: photos, slow streets and old-Prague mood.",
      "see": [
        "Vintage/open car depending on provider",
        "Old Town and Malá Strana streets",
        "Short photo stops",
        "Low-walking sightseeing"
      ],
      "fit": "Good for photos, couples, parents or tired days.",
      "tip": "Confirm route and language; some tours are more photo ride than deep guiding."
    }
  },
  "E-bike Old Town Tour": {
    "he": {
      "why": "סיור אי־בייק מאפשר לכסות יותר אזורים בפחות זמן: נהר, גשרים, שכונות ותצפיות. זה מתאים כשאתה רוצה להבין את מבנה העיר בלי ללכת עשרות אלפי צעדים.",
      "see": [
        "מסלול רכוב בין אזורים מרכזיים",
        "הסברים קצרים בתחנות",
        "אפשרות להגיע לתצפיות בלי מאמץ גדול",
        "חוויה פעילה יותר מסיור רגלי"
      ],
      "fit": "מתאים למי שנוח לו ברכיבה עירונית ולקבוצות שרוצות קצב.",
      "tip": "לבדוק ביטוח, קסדה ותנאי תנועה; לא מתאים לכל אחד במרכז צפוף."
    },
    "en": {
      "why": "An e-bike tour covers more ground with less walking: river, bridges, districts and viewpoints. Good for understanding the city layout quickly.",
      "see": [
        "Ride between central areas",
        "Short explanations at stops",
        "Easier access to viewpoints",
        "More active than a walking tour"
      ],
      "fit": "Good if you are comfortable riding in a city.",
      "tip": "Check helmet, insurance and traffic conditions; central Prague can be busy."
    }
  },
  "Prague Castle Viewpoints": {
    "he": {
      "why": "התצפיות סביב טירת פראג מסבירות למה העיר כל כך מצולמת: גגות אדומים, נהר, גשרים ומגדלים בשכבות. זו לא רק “עוד תצפית” אלא דרך להבין את המבנה של פראג.",
      "see": [
        "מבט על מאלה סטרנה",
        "גגות העיר העתיקה",
        "גשרי הוולטאבה",
        "שילוב עם רחוב Nerudova או אזור הטירה"
      ],
      "fit": "מתאים לצילום, ביקור ראשון והתמצאות בעיר.",
      "tip": "להגיע מוקדם או לקראת ערב; באמצע היום האזור יכול להיות עמוס מאוד."
    },
    "en": {
      "why": "Castle-side viewpoints explain why Prague is so photographed: red roofs, river, bridges and towers layered together.",
      "see": [
        "Views over Malá Strana",
        "Old Town rooftops",
        "Vltava bridges",
        "Pairs well with Nerudova Street or Castle area"
      ],
      "fit": "Good for photos, first visit and orientation.",
      "tip": "Go early or toward evening; midday can be crowded."
    }
  },
  "Vyšehrad Sunset Walk": {
    "he": {
      "why": "וישהראד נותן שקיעה רגועה יותר מהטירה: חומות, פארק, בית קברות היסטורי ונוף לנהר. זה מקום שמרגיש פחות תיירותי ויותר מקומי.",
      "see": [
        "חומות המבצר",
        "נוף לוולטאבה",
        "בזיליקת פטר ופול מבחוץ",
        "בית הקברות ההיסטורי של דמויות צ׳כיות"
      ],
      "fit": "מתאים לשקיעה, הליכה שקטה ומי שרוצה לברוח מהעיר העתיקה.",
      "tip": "לשלב עם ארוחה ב־U Kroka או הליכה חזרה לאורך הנהר."
    },
    "en": {
      "why": "Vyšehrad gives a calmer sunset than the Castle: fortress walls, parkland, cemetery and river views with a more local feel.",
      "see": [
        "Fortress walls",
        "Vltava views",
        "St Peter and Paul Basilica exterior",
        "Historic cemetery of Czech figures"
      ],
      "fit": "Good for sunset, quiet walking and avoiding Old Town crowds.",
      "tip": "Pair it with dinner nearby or a river walk back."
    }
  },
  "Letná Metronome View": {
    "he": {
      "why": "המטרונום של לטנה הוא נקודת תצפית רחבה מעל שורת הגשרים של פראג. המקום מרגיש צעיר וחופשי יותר, עם סקייטרים, בירה בפארק ונוף פתוח.",
      "see": [
        "שורת הגשרים על הוולטאבה",
        "תצפית לגגות העיר",
        "אזור פארק לטנה",
        "אווירה צעירה ופחות רשמית"
      ],
      "fit": "מתאים לשקיעה, בירה בפארק וצילום רחב של העיר.",
      "tip": "לא לבוא במיוחד בגשם; הערך כאן הוא נוף ואווירה פתוחה."
    },
    "en": {
      "why": "The Letná Metronome gives a wide view over Prague’s bridge line. The area feels young and informal, with skaters, park beer and open city views.",
      "see": [
        "Vltava bridge line",
        "Rooftop views",
        "Letná park area",
        "Young informal atmosphere"
      ],
      "fit": "Good for sunset, park beer and wide city photos.",
      "tip": "Not worth a special trip in rain; the value is open-air view and mood."
    }
  },
  "Paddle Boats on Vltava": {
    "he": {
      "why": "סירות פדלים בוולטאבה הן חוויה קלילה שמוסיפה משחקיות ליום: לא היסטוריה עמוקה, אלא שעה על המים עם מבט קרוב לגשרים ולאיים.",
      "see": [
        "חתירה/פדלים באזור הנהר",
        "מבט לגשר קארל והאיים לפי מיקום",
        "חוויה רגועה לזוגות או משפחות",
        "צילום מהמים"
      ],
      "fit": "מתאים למזג אוויר טוב, זוגות ומשפחות.",
      "tip": "לעשות רק כשהשמש טובה והרוח לא חזקה; אחרת זה פחות כיף."
    },
    "en": {
      "why": "Pedal boats on the Vltava add a playful hour on the water: not deep history, but close views of bridges and islands.",
      "see": [
        "Pedal boat on the river",
        "Bridge and island views depending on dock",
        "Easy couple/family activity",
        "Photos from water level"
      ],
      "fit": "Good in nice weather for couples and families.",
      "tip": "Do it when weather is pleasant; wind or rain weakens the experience."
    }
  },
  "Mirror Maze Petřín": {
    "he": {
      "why": "מבוך המראות בפטרין הוא אטרקציה קטנה ונוסטלגית, יותר מצחיקה מאשר מרשימה. היא טובה כשכבר נמצאים בגבעה ורוצים עצירה קצרה לילדים או רגע קליל.",
      "see": [
        "חדר מראות מעוותות",
        "מבנה בסגנון טירה קטנה",
        "שילוב עם גבעת פטרין",
        "עצירה קצרה ולא פעילות מרכזית"
      ],
      "fit": "מתאים למשפחות וילדים. פחות מתאים כמטרה בלעדית למבוגרים.",
      "tip": "לא לנסוע במיוחד רק לזה; לשלב עם פטרין והתצפית."
    },
    "en": {
      "why": "The Petřín Mirror Maze is small and nostalgic — more funny than impressive. It works best as a short stop while already on the hill.",
      "see": [
        "Distorting mirror room",
        "Small castle-like building",
        "Pairs with Petřín Hill",
        "Short stop, not main activity"
      ],
      "fit": "Best for families and children. Not a standalone adult highlight.",
      "tip": "Do not cross town only for it; combine with Petřín views."
    }
  },
  "Museum of Senses": {
    "he": {
      "why": "מוזיאון החושים הוא אטרקציה מקורה וצילומית עם אשליות, חדרים אינטראקטיביים ומשחקים ויזואליים. הוא שימושי במיוחד כפתרון לגשם או לילדים.",
      "see": [
        "אשליות אופטיות",
        "חדרים אינטראקטיביים",
        "נקודות צילום לרשתות",
        "פעילות קצרה במרכז"
      ],
      "fit": "מתאים למשפחות, יום גשם ומי שרוצה משהו קליל.",
      "tip": "לא לצפות למוזיאון היסטורי; זה יותר משחק וצילום."
    },
    "en": {
      "why": "Museum of Senses is an indoor, photo-friendly attraction with illusions and interactive rooms. It is especially useful as a rain plan or with kids.",
      "see": [
        "Optical illusions",
        "Interactive rooms",
        "Photo spots",
        "Short central activity"
      ],
      "fit": "Good for families, rain and light entertainment.",
      "tip": "Do not expect a historical museum; it is more playful and visual."
    }
  },
  "Jewish Quarter Walk": {
    "he": {
      "why": "הרובע היהודי של פראג הוא אחד האזורים ההיסטוריים החשובים בעיר: בתי כנסת, בית קברות עתיק וסיפור יהודי שנמשך מאות שנים. זו הליכה שנותנת עומק ולא רק צילום.",
      "see": [
        "בתי כנסת היסטוריים",
        "בית הקברות היהודי העתיק",
        "רחובות Josefov",
        "הקשר להיסטוריה יהודית אירופית"
      ],
      "fit": "מתאים להיסטוריה, תרבות ומי שרוצה להבין שכבות עמוקות בעיר.",
      "tip": "לבדוק כרטיסים וסגירות בשבתות/חגים יהודיים."
    },
    "en": {
      "why": "Prague’s Jewish Quarter is one of the city’s most meaningful historical areas: synagogues, Old Jewish Cemetery and centuries of Jewish history.",
      "see": [
        "Historic synagogues",
        "Old Jewish Cemetery",
        "Josefov streets",
        "European Jewish history context"
      ],
      "fit": "Best for history, culture and a deeper layer of Prague.",
      "tip": "Check tickets and closures on Saturdays/Jewish holidays."
    }
  },
  "Tram 22 Scenic Ride": {
    "he": {
      "why": "קו 22 הוא “סיור זול” דרך פראג: חשמלית רגילה שעוברת באזורים יפים ומובילה לכיוון הטירה. זו דרך טובה לראות את העיר כשעייפים מהליכה.",
      "see": [
        "נסיעה דרך שכונות היסטוריות",
        "גישה לאזור הטירה",
        "מבט מהחלון על פראג יומיומית",
        "עלות נמוכה יחסית"
      ],
      "fit": "מתאים ליום עייף, תחבורה ציבורית וחוויית עיר מקומית.",
      "tip": "לעלות מחוץ לשעות עומס אם רוצים ליהנות מהנסיעה ולא רק להידחס."
    },
    "en": {
      "why": "Tram 22 is a cheap scenic ride through Prague, passing attractive areas and climbing toward the Castle. It is useful when your legs are tired.",
      "see": [
        "Ride through historic districts",
        "Access to Castle area",
        "Daily city views from the window",
        "Low-cost experience"
      ],
      "fit": "Good for tired days and public-transport exploration.",
      "tip": "Ride outside peak hours if you want to enjoy it."
    }
  },
  "Dancing House Rooftop": {
    "he": {
      "why": "הבית הרוקד הוא עצירת אדריכלות מודרנית מול הנהר, בניגוד חד לפראג הגותית והבארוקית. הגג נותן זווית נחמדה על הנהר והעיר.",
      "see": [
        "חזית הבניין של Gehry/Milunić",
        "נוף לנהר",
        "צילום אדריכלי",
        "שילוב עם הליכת נהר"
      ],
      "fit": "מתאים לאדריכלות, צילום ועצירה קצרה.",
      "tip": "לשלב עם Náplavka או הליכה לאורך הנהר; לא לבנות עליו פעילות ארוכה."
    },
    "en": {
      "why": "Dancing House is a modern architectural stop by the river, contrasting with Prague’s gothic and baroque core. The rooftop adds a pleasant river view.",
      "see": [
        "Gehry/Milunić façade",
        "River view",
        "Architecture photos",
        "Pairs with a riverside walk"
      ],
      "fit": "Good for architecture, photos and a short stop.",
      "tip": "Pair it with Náplavka or the river walk; it is not a long activity."
    }
  },
  "Franz Kafka Head": {
    "he": {
      "why": "ראש קפקא המסתובב של דייוויד צ׳רני הוא פסל מודרני שמחבר בין פראג הספרותית, אמנות ציבורית והומור צ׳כי עוקצני. זו עצירת צילום קצרה אבל זכירה.",
      "see": [
        "פסל מתכתי מסתובב",
        "חיבור לסופר פרנץ קפקא",
        "אזור קניות/מרכזי",
        "מופע תנועה קצר"
      ],
      "fit": "מתאים לצילום, אמנות ציבורית ועצירה בין תחנות.",
      "tip": "לבדוק מתי הפסל בתנועה; לא שווה להמתין זמן רב."
    },
    "en": {
      "why": "David Černý’s rotating Kafka Head links literary Prague with public art and Czech irony. It is short, visual and memorable.",
      "see": [
        "Rotating metal sculpture",
        "Reference to Franz Kafka",
        "Central shopping area",
        "Short kinetic display"
      ],
      "fit": "Good for photos and a quick public-art stop.",
      "tip": "Check movement timing; do not wait too long."
    }
  },
  "Strahov Monastery Library": {
    "he": {
      "why": "ספריית מנזר סטרחוב היא מהחללים ההיסטוריים היפים בפראג: תקרות מצוירות, ארונות ספרים עתיקים ותחושת ידע אירופית ישנה. זו חוויה שקטה יותר מתצפית רגילה.",
      "see": [
        "אולם תאולוגי ופילוסופי",
        "תקרות מצוירות",
        "אוסף ספרים עתיקים",
        "שילוב עם תצפית סטרחוב"
      ],
      "fit": "מתאים לאדריכלות, ספרים, היסטוריה ויום גשם.",
      "tip": "לבדוק גישה וצילום; לא תמיד אפשר להיכנס לכל חלל."
    },
    "en": {
      "why": "Strahov Monastery Library is one of Prague’s most beautiful historic interiors: painted ceilings, old bookcases and old-European scholarship.",
      "see": [
        "Theological and Philosophical Halls",
        "Painted ceilings",
        "Historic book collections",
        "Pairs with Strahov viewpoint"
      ],
      "fit": "Good for architecture, books, history and rainy days.",
      "tip": "Check access and photo rules; not all spaces may be open."
    }
  },
  "Kampa Island Walk": {
    "he": {
      "why": "קמפה היא הליכה רכה ליד הנהר, עם תעלות, אמנות, גשרים קטנים ומעבר נעים בין גשר קארל למאלה סטרנה. היא נותנת פראג רגועה יותר.",
      "see": [
        "תעלות קטנות",
        "פסלים ואמנות ציבורית",
        "מבט לגשר קארל מהצד",
        "שבילים ליד הנהר"
      ],
      "fit": "מתאים לזוגות, צילום והפסקה שקטה מהעומס.",
      "tip": "לשלב עם Lennon Wall או קפה באזור; לא לרוץ דרכה מהר."
    },
    "en": {
      "why": "Kampa is a soft riverside walk with canals, public art and small bridges between Charles Bridge and Malá Strana.",
      "see": [
        "Small canals",
        "Public art and sculpture",
        "Side views of Charles Bridge",
        "Riverside paths"
      ],
      "fit": "Good for couples, photos and a calmer pause.",
      "tip": "Pair with Lennon Wall or a nearby café; do not rush it."
    }
  },
  "Náplavka Saturday Market": {
    "he": {
      "why": "שוק שבת בנאפלבקה הוא מקום לראות את פראג היומיומית: דוכני אוכל, קפה, מאפים, ירקות ואנשים מקומיים לאורך הנהר. זו חוויה שמרגישה פחות כמו אתר תיירות.",
      "see": [
        "דוכני אוכל ומאפים",
        "קפה ליד הנהר",
        "קהל מקומי",
        "הליכה לאורך הוולטאבה"
      ],
      "fit": "מתאים לשבת בבוקר, אוכל קל ואווירה מקומית.",
      "tip": "לבדוק אם השוק פעיל בעונה/יום הביקור; להגיע בבוקר ולא מאוחר מדי."
    },
    "en": {
      "why": "Náplavka Saturday Market shows everyday Prague: food stalls, coffee, pastries, produce and locals along the river.",
      "see": [
        "Food and pastry stalls",
        "Coffee by the river",
        "Local crowd",
        "Vltava riverside walk"
      ],
      "fit": "Good for Saturday morning and local atmosphere.",
      "tip": "Check if the market is active that date; go in the morning."
    }
  },
  "Old Town Underground": {
    "he": {
      "why": "העיר התחתית של פראג חושפת שכבות נסתרות מתחת לרחובות: מרתפים, חדרים נמוכים וסיפורים מימי הביניים. זו דרך להבין שפראג בנויה על היסטוריה מתחת לרגליים.",
      "see": [
        "חללים תת־קרקעיים",
        "סיפורי ימי הביניים",
        "סיור מודרך מקורה",
        "הקשר לעיר העתיקה"
      ],
      "fit": "מתאים ליום גשם, היסטוריה ומי שרוצה מעבר למה שרואים ברחוב.",
      "tip": "לבחור סיור עם מדריך טוב; בלי הסבר המקום מאבד ערך."
    },
    "en": {
      "why": "Old Town Underground reveals layers beneath Prague’s streets: cellars, low rooms and medieval stories under your feet.",
      "see": [
        "Underground spaces",
        "Medieval stories",
        "Indoor guided tour",
        "Old Town context"
      ],
      "fit": "Good for rain, history and deeper city layers.",
      "tip": "Choose a good guided tour; without explanation the spaces lose meaning."
    }
  },
  "Prater Giant Ferris Wheel": {
    "he": {
      "why": "הגלגל הענק בפראטר הוא אחד הסמלים הוותיקים של וינה מאז סוף המאה ה־19. לא מדובר במתקן אקסטרים, אלא בחוויה נוסטלגית: קרון איטי, נוף רחב, וינה שנראית כמו דגם מלמעלה.",
      "see": [
        "הגלגל הענק ההיסטורי",
        "נוף על וינה והפראטר",
        "אווירת פארק שעשועים ישן",
        "צילום טוב לקראת ערב"
      ],
      "fit": "מתאים למשפחות, זוגות ומי שרוצה חוויה קלה עם נוף.",
      "tip": "לעלות בשעת אור רכה; בלילה האווירה יפה אבל רואים פחות פרטים."
    },
    "en": {
      "why": "The Prater Giant Ferris Wheel is a late-19th-century Vienna icon. It is not a thrill ride; it is slow, nostalgic and gives a broad city view.",
      "see": [
        "Historic Ferris wheel",
        "Views over Vienna and Prater",
        "Old amusement-park atmosphere",
        "Good evening photos"
      ],
      "fit": "Good for families, couples and an easy view experience.",
      "tip": "Go in soft light; at night the mood is nice but details are harder to see."
    }
  },
  "Schönbrunn Palace gardens": {
    "he": {
      "why": "גני שנברון הם הצד הפתוח של הארמון הקיסרי: צירים סימטריים, מזרקות, גבעה ותצפית גלורייט. גם בלי להיכנס לחדרי הארמון, הגנים מסבירים את קנה המידה של הכוח ההבסבורגי.",
      "see": [
        "שבילי הגנים הקיסריים",
        "מזרקות ופסלים",
        "תצפית ה־Gloriette",
        "חזית הארמון מבחוץ"
      ],
      "fit": "מתאים ליום יפה, זוגות, משפחות וצילום.",
      "tip": "לעלות ל־Gloriette אם יש כוח; משם מבינים את כל המתחם."
    },
    "en": {
      "why": "Schönbrunn gardens are the open-air face of imperial power: symmetry, fountains, hill views and the Gloriette. Even without palace rooms, the scale is clear.",
      "see": [
        "Imperial garden axes",
        "Fountains and sculptures",
        "Gloriette viewpoint",
        "Palace exterior"
      ],
      "fit": "Good for nice weather, couples, families and photos.",
      "tip": "Walk up to the Gloriette if you can; it explains the whole site."
    }
  },
  "Belvedere Palace": {
    "he": {
      "why": "בלוודר הוא שילוב של ארמון בארוק, גנים ואמנות. הוא חשוב במיוחד בגלל אוסף קלימט, כולל “הנשיקה”, אבל גם החצר והחזיתות נותנות חוויה וינאית מפוארת.",
      "see": [
        "Upper Belvedere",
        "גני הארמון",
        "ציורי Klimt לפי תצוגה",
        "חזיתות בארוקיות"
      ],
      "fit": "מתאים לאמנות, אדריכלות ויום גשם חלקי.",
      "tip": "אם הזמן קצר — לבחור מראש אם באים בשביל האמנות בפנים או בשביל הגנים והצילום."
    },
    "en": {
      "why": "Belvedere combines baroque palace, gardens and art. It is especially important for Klimt, including The Kiss, but the palace setting matters too.",
      "see": [
        "Upper Belvedere",
        "Palace gardens",
        "Klimt paintings depending on display",
        "Baroque façades"
      ],
      "fit": "Good for art, architecture and partly rainy days.",
      "tip": "If time is short, decide whether your focus is art inside or gardens/photos outside."
    }
  },
  "Danube Canal street art": {
    "he": {
      "why": "תעלת הדנובה מציגה את וינה הפחות קיסרית: גרפיטי, ברים עונתיים, הליכה ליד מים וקהל צעיר. זה ניגוד טוב לארמונות ולמוזיאונים.",
      "see": [
        "קירות גרפיטי",
        "ברים עונתיים על התעלה",
        "הליכה ליד מים",
        "אווירה צעירה יותר"
      ],
      "fit": "מתאים לערב קל, צילום רחוב וקצת וינה מודרנית.",
      "tip": "הכי טוב במזג אוויר טוב; בחורף או גשם האזור פחות חי."
    },
    "en": {
      "why": "The Danube Canal shows less-imperial Vienna: graffiti, seasonal bars, waterfront walking and a younger crowd — a useful contrast to palaces.",
      "see": [
        "Graffiti walls",
        "Seasonal canal bars",
        "Waterfront walk",
        "Younger atmosphere"
      ],
      "fit": "Good for a relaxed evening and street photography.",
      "tip": "Best in good weather; winter or rain makes it quieter."
    }
  },
  "Vienna State Opera standing tickets": {
    "he": {
      "why": "כרטיסי עמידה לאופרה הם דרך נגישה יחסית לטעום מוסד תרבות מהחשובים בעולם בלי לשלם מחיר מלא. החוויה היא גם המבנה, גם הקהל וגם המוזיקה.",
      "see": [
        "בית האופרה מבפנים",
        "הופעת אופרה/בלט לפי ערב",
        "טקסיות וינאית",
        "אפשרות מחיר נמוך יחסית"
      ],
      "fit": "מתאים לחובבי תרבות ולמי שמוכן לעמוד.",
      "tip": "להבין מראש את הכללים: מתי קונים, איפה עומדים וכמה זמן ההופעה."
    },
    "en": {
      "why": "Standing tickets are a more accessible way to experience one of the world’s great opera houses without paying full seat prices.",
      "see": [
        "Opera house interior",
        "Opera/ballet depending on night",
        "Viennese cultural ritual",
        "Lower-cost access"
      ],
      "fit": "Good for culture lovers willing to stand.",
      "tip": "Understand the rules: buying time, standing area and performance length."
    }
  },
  "Spanish Riding School": {
    "he": {
      "why": "בית הספר הספרדי לרכיבה הוא חובה למי שרוצה לראות מסורת חצר קיסרית חיה: סוסי ליפיצן, אולם בארוק ואימון/מופע שממשיך מאות שנים של תרבות רכיבה.",
      "see": [
        "סוסי Lipizzaner",
        "אולם רכיבה בארוקי",
        "אימון או הופעה לפי כרטיס",
        "קשר להיסטוריה ההבסבורגית"
      ],
      "fit": "חובה לחובבי תרבות, סוסים ומסורת.",
      "tip": "להבדיל בין אימון בוקר, סיור ומופע מלא — אלו חוויות שונות."
    },
    "en": {
      "why": "The Spanish Riding School is a living imperial tradition: Lipizzaner horses, baroque hall and classical riding culture.",
      "see": [
        "Lipizzaner horses",
        "Baroque riding hall",
        "Training or performance depending on ticket",
        "Habsburg cultural context"
      ],
      "fit": "Must for culture, horses and tradition.",
      "tip": "Morning exercise, guided tour and full performance are different experiences."
    }
  },
  "Kunsthistorisches Museum": {
    "he": {
      "why": "המוזיאון לתולדות האמנות הוא חובה כי הוא מציג את הטעם והאוספים של האימפריה ההבסבורגית ברמה עצומה. המבנה עצמו כמעט מתחרה ביצירות.",
      "see": [
        "אולמות מונומנטליים",
        "ציורי מאסטרים",
        "אוסף עתיקות",
        "בית קפה מרשים"
      ],
      "fit": "חובה לחובבי אמנות והיסטוריה.",
      "tip": "לבחור מראש אגפים; אחרת תצא מותש ולא תזכור כלום."
    },
    "en": {
      "why": "The Kunsthistorisches Museum is a must because it shows the Habsburg imperial collections at monumental scale. The building nearly competes with the art.",
      "see": [
        "Monumental halls",
        "Master paintings",
        "Antiquities",
        "Impressive museum café"
      ],
      "fit": "Must for art and history lovers.",
      "tip": "Choose sections first; otherwise it becomes overwhelming."
    }
  },
  "Hundertwasserhaus": {
    "he": {
      "why": "Hundertwasserhaus הוא חובה כי הוא שובר את וינה המסודרת: קווים לא ישרים, צבע, צמחייה ואדריכלות שמסרבת להיות סימטרית. זו תמונת נגד לארמונות.",
      "see": [
        "חזית צבעונית",
        "צמחייה על הבניין",
        "קווים עקומים",
        "אזור צילום קצר"
      ],
      "fit": "חובה לחובבי אדריכלות מיוחדת וצילום.",
      "tip": "זה אתר חיצוני בעיקר; לבוא כעצירה קצרה ולא פעילות ארוכה."
    },
    "en": {
      "why": "Hundertwasserhaus is a must because it breaks Vienna’s order: irregular lines, color, greenery and anti-symmetrical architecture.",
      "see": [
        "Colorful façade",
        "Greenery on the building",
        "Curved lines",
        "Short photo stop"
      ],
      "fit": "Must for unusual architecture and photos.",
      "tip": "It is mainly an exterior stop; keep it short."
    }
  },
  "Naschmarkt food walk": {
    "he": {
      "why": "Naschmarkt הוא שוק האוכל הידוע של וינה, שילוב של דוכנים, מסעדות, תבלינים וקהל מקומי/תיירותי. זו דרך טובה להבין את וינה דרך אוכל ולא רק דרך ארמונות.",
      "see": [
        "דוכני תבלינים ומעדנים",
        "מסעדות קטנות",
        "קפה/מאפה",
        "אווירת שוק עירוני"
      ],
      "fit": "מתאים לצהריים, טעימות וקבוצות עם טעמים שונים.",
      "tip": "לאכול במקומות עם תחלופה גבוהה; להיזהר ממקומות שנראים תיירותיים מדי."
    },
    "en": {
      "why": "Naschmarkt is Vienna’s best-known food market: stalls, spices, small restaurants and a mixed local/visitor crowd. It explains the city through food.",
      "see": [
        "Spice and deli stalls",
        "Small restaurants",
        "Coffee/pastry stops",
        "Urban market atmosphere"
      ],
      "fit": "Good for lunch, tasting and groups with different tastes.",
      "tip": "Choose busy places with turnover; avoid overly touristy-looking traps."
    }
  },
  "Ring Tram scenic loop": {
    "he": {
      "why": "מסלול הרינג סביב המרכז מאפשר לראות את וינה הקיסרית בקו אחד: אופרה, פרלמנט, בית העירייה, מוזיאונים ושדרות רחבות. זה שימושי כהיכרות מהירה עם העיר.",
      "see": [
        "מבני Ringstrasse",
        "אופרה ופרלמנט מבחוץ",
        "מוזיאונים וכיכרות",
        "נסיעה קלה בלי הרבה הליכה"
      ],
      "fit": "מתאים ליום ראשון בעיר, גשם קל או התמצאות.",
      "tip": "להשתמש בזה כהקדמה ואז לבחור איפה לרדת ולחזור בהמשך."
    },
    "en": {
      "why": "A Ringstrasse tram ride gives a quick line through imperial Vienna: opera, parliament, city hall, museums and grand boulevards.",
      "see": [
        "Ringstrasse buildings",
        "Opera and Parliament exteriors",
        "Museums and squares",
        "Easy low-walking orientation"
      ],
      "fit": "Good for first day, light rain or orientation.",
      "tip": "Use it as an overview, then return to the stops that interest you."
    }
  },
  "Danube Tower view": {
    "he": {
      "why": "מגדל הדנובה נותן תצפית גבוהה על וינה, הדנובה והאזורים החדשים יותר של העיר. זו חוויה שונה מתצפיות הארמונות כי היא מציגה עיר מודרנית ורחבה.",
      "see": [
        "מבט פנורמי מגובה רב",
        "נהר הדנובה",
        "הפארק סביב המגדל",
        "אופציה למסעדה/קפה לפי זמינות"
      ],
      "fit": "מתאים לנוף, צילום ומי שכבר ראה את המרכז.",
      "tip": "לבדוק ראות לפני שמגיעים; ביום ערפילי הערך יורד מאוד."
    },
    "en": {
      "why": "Danube Tower gives a high view over Vienna, the Danube and newer parts of the city — a different perspective from palace viewpoints.",
      "see": [
        "High panoramic view",
        "Danube River",
        "Park around the tower",
        "Restaurant/café option if available"
      ],
      "fit": "Good for views, photos and repeat visitors.",
      "tip": "Check visibility first; haze can ruin the value."
    }
  },
  "Grinzing wine taverns": {
    "he": {
      "why": "גרינצינג היא שכונת יין בקצה וינה, עם Heuriger – טברנות יין מקומיות. מגיעים בשביל ערב אוסטרי רגוע של יין, אוכל פשוט ואווירה מחוץ למרכז.",
      "see": [
        "טברנות יין Heuriger",
        "יין מקומי צעיר",
        "אוכל אוסטרי פשוט",
        "אווירת כפר בתוך העיר"
      ],
      "fit": "מתאים לערב רגוע, זוגות וחובבי יין.",
      "tip": "לבדוק מי פתוח באותו יום; לא כל Heuriger פתוח כל ערב."
    },
    "en": {
      "why": "Grinzing is Vienna’s wine-tavern district, known for Heuriger. Go for a relaxed Austrian evening of local wine, simple food and village mood within the city.",
      "see": [
        "Heuriger wine taverns",
        "Young local wine",
        "Simple Austrian food",
        "Village-like mood"
      ],
      "fit": "Good for relaxed evenings, couples and wine lovers.",
      "tip": "Check which taverns are open that day; not all open every evening."
    }
  },
  "Stadtpark walk": {
    "he": {
      "why": "Stadtpark הוא פארק מרכזי קליל עם פסל יוהאן שטראוס המוזהב, שבילי הליכה ותחושה וינאית רגועה. זו עצירה טובה בין אתרים, לא יעד ליום שלם.",
      "see": [
        "פסל Strauss המפורסם",
        "שבילים וירק",
        "עצירת מנוחה במרכז",
        "צילום אייקוני קצר"
      ],
      "fit": "מתאים להפסקה, משפחות וצילום קצר.",
      "tip": "להוסיף אותו כשעוברים באזור; לא לנסוע במיוחד מרחוק."
    },
    "en": {
      "why": "Stadtpark is an easy central park with the golden Johann Strauss monument, paths and a calm Viennese pause.",
      "see": [
        "Famous Strauss statue",
        "Green walking paths",
        "Central rest stop",
        "Short iconic photo"
      ],
      "fit": "Good for a break, families and quick photos.",
      "tip": "Add it when nearby; do not cross town just for it."
    }
  },
  "Central Cemetery music graves": {
    "he": {
      "why": "בית הקברות המרכזי של וינה הוא לא רק בית קברות — הוא אתר תרבות, במיוחד בזכות קברי מלחינים כמו בטהובן, שוברט וברהמס. זה מקום שקט שמחבר את וינה למוזיקה שלה.",
      "see": [
        "חלקת המלחינים",
        "שבילים רחבים ושקטים",
        "אדריכלות קבורה מרשימה",
        "הקשר למוזיקה קלאסית"
      ],
      "fit": "מתאים לחובבי מוזיקה, היסטוריה ומקומות שקטים.",
      "tip": "הוא רחוק יחסית מהמרכז; לשלב רק אם הנושא באמת מעניין אותך."
    },
    "en": {
      "why": "Vienna Central Cemetery is a cultural site, especially because of composer graves like Beethoven, Schubert and Brahms. It links Vienna to its music history.",
      "see": [
        "Composer graves",
        "Quiet broad paths",
        "Funerary architecture",
        "Classical music context"
      ],
      "fit": "Good for music lovers, history and quiet places.",
      "tip": "It is outside the center; go only if the theme interests you."
    }
  },
  "Albertina Museum": {
    "he": {
      "why": "האלברטינה משלבת מיקום מרכזי ליד האופרה עם אוסף אמנות גדול ותערוכות מתחלפות. זו בחירה טובה כשאתה רוצה מוזיאון איכותי בלי להתרחק מהמסלול.",
      "see": [
        "אוסף גרפי/אמנות מודרנית לפי תצוגה",
        "תערוכות מתחלפות",
        "מרפסת/אזור צילום בחוץ",
        "קרבה לאופרה"
      ],
      "fit": "מתאים ליום גשם, אמנות ומיקום נוח.",
      "tip": "לבדוק תערוכה נוכחית; הערך משתנה לפי מה שמוצג."
    },
    "en": {
      "why": "Albertina combines a central location by the Opera with major art collections and changing exhibitions. It is a quality museum without detour.",
      "see": [
        "Graphic/modern collections depending on display",
        "Temporary exhibitions",
        "Exterior terrace/photo area",
        "Close to Opera"
      ],
      "fit": "Good for rain, art and central planning.",
      "tip": "Check the current exhibition; it changes the value."
    }
  },
  "House of Music": {
    "he": {
      "why": "בית המוזיקה הוא מוזיאון אינטראקטיבי שמנסה להפוך את וינה המוזיקלית לחוויה משחקית: צלילים, מלחינים, ניסויים ואודיו. זה טוב יותר ממוזיאון יבש לילדים או למי שאוהב אינטראקציה.",
      "see": [
        "תחנות אינטראקטיביות",
        "סיפורי מלחינים",
        "משחקים סביב צליל",
        "אפשרות טובה ליום גשם"
      ],
      "fit": "מתאים למשפחות, ילדים וחובבי מוזיקה.",
      "tip": "לא להגיע אם אתה מחפש מוזיאון קלאסי שקט; זה יותר חווייתי."
    },
    "en": {
      "why": "House of Music turns musical Vienna into an interactive experience: sound experiments, composers and audio play.",
      "see": [
        "Interactive stations",
        "Composer stories",
        "Sound experiments",
        "Good rainy-day option"
      ],
      "fit": "Good for families, kids and music lovers.",
      "tip": "Do not expect a quiet classical museum; it is experiential."
    }
  },
  "Rathausplatz evening": {
    "he": {
      "why": "רחבת בית העירייה משתנה לפי עונה: שווקים, הקרנות, פסטיבלים ואווירת ערב. הערך הוא לא רק המבנה אלא מה שקורה סביבו.",
      "see": [
        "חזית בית העירייה",
        "אירועים עונתיים",
        "אווירת ערב פתוחה",
        "שילוב עם Ringstrasse"
      ],
      "fit": "מתאים לערב קל ולבדיקת אירועים בזמן אמת.",
      "tip": "לפני שיוצאים לבדוק אם יש אירוע — בלי אירוע זה בעיקר צילום ומעבר."
    },
    "en": {
      "why": "Rathausplatz changes by season: markets, screenings, festivals and evening atmosphere. The value is often the event, not only the building.",
      "see": [
        "City Hall façade",
        "Seasonal events",
        "Open evening mood",
        "Pairs with Ringstrasse"
      ],
      "fit": "Good for a light evening and live-event checking.",
      "tip": "Check if something is on; without an event it is mostly a photo/pass-through."
    }
  },
  "Vienna coffeehouse crawl": {
    "he": {
      "why": "סיור בתי קפה הוא דרך להבין את וינה דרך טקס: מלנג׳, עוגה, עיתון, מלצרים וחללים היסטוריים. כל בית קפה נותן אופי אחר.",
      "see": [
        "Café Central / Landtmann / Demel לפי בחירה",
        "קפה וינאי וקינוחים",
        "אדריכלות פנים",
        "קצב איטי של ישיבה"
      ],
      "fit": "מתאים ליום גשם, זוגות וחובבי קינוחים.",
      "tip": "לא לנסות יותר מדי בתי קפה ביום אחד; שניים טובים מספיק."
    },
    "en": {
      "why": "A coffeehouse crawl explains Vienna through ritual: Melange, cake, newspapers, waiters and historic rooms. Each café has a different character.",
      "see": [
        "Café Central / Landtmann / Demel depending on route",
        "Viennese coffee and desserts",
        "Historic interiors",
        "Slow sitting culture"
      ],
      "fit": "Good for rain, couples and dessert lovers.",
      "tip": "Do not overdo it; two good cafés are enough."
    }
  },
  "Prater amusement park": {
    "he": {
      "why": "פראטר הוא פארק שעשועים עירוני חופשי בכניסה, עם מתקנים בתשלום, אוכל מהיר ואווירה נוסטלגית. הוא מראה צד קליל של וינה.",
      "see": [
        "מתקני לונה פארק",
        "דוכני אוכל",
        "הגלגל הענק",
        "אווירה עממית יותר מהמרכז הקיסרי"
      ],
      "fit": "מתאים למשפחות, ערב קליל וצעירים.",
      "tip": "לבדוק אילו מתקנים פתוחים בעונה; לא כל הפארק פעיל באותה מידה כל השנה."
    },
    "en": {
      "why": "Prater is an urban amusement park with free entry and paid rides, snacks and nostalgic energy. It shows Vienna’s playful side.",
      "see": [
        "Amusement rides",
        "Snack stalls",
        "Giant Ferris Wheel",
        "More casual mood than imperial center"
      ],
      "fit": "Good for families, light evenings and younger travelers.",
      "tip": "Check seasonal opening; not all rides operate equally year-round."
    }
  },
  "MAK design museum": {
    "he": {
      "why": "MAK מתמקד בעיצוב, אמנות שימושית, ריהוט וחפצים — פחות “ציורים מפורסמים” ויותר איך אסתטיקה נכנסת לחיים. זו אלטרנטיבה חכמה למוזיאוני הענק.",
      "see": [
        "עיצוב ואמנות שימושית",
        "ריהוט וחפצים היסטוריים",
        "תערוכות עכשוויות",
        "חלל שקט יחסית"
      ],
      "fit": "מתאים לעיצוב, אדריכלות ויום גשם.",
      "tip": "לבחור אם זה באמת תחום שמעניין אותך; אחרת מוזיאונים קלאסיים יהיו מתגמלים יותר."
    },
    "en": {
      "why": "MAK focuses on design, applied arts, furniture and objects — less famous painting, more how aesthetics enters daily life.",
      "see": [
        "Design and applied arts",
        "Furniture and historic objects",
        "Contemporary exhibitions",
        "Quieter museum atmosphere"
      ],
      "fit": "Good for design, architecture and rain.",
      "tip": "Go if design interests you; otherwise the classic museums may be stronger."
    }
  },
  "St. Stephen’s Cathedral": {
    "he": {
      "why": "קתדרלת סטפן היא הלב האנכי של וינה: גג רעפים צבעוני, מגדלים גותיים וכיכר שמרגישה כמו מרכז העיר האמיתי. זה אתר חובה כי הוא נותן מיד את קנה המידה והזהות של וינה.",
      "see": [
        "חזית גותית מפורטת",
        "גג רעפים צבעוני",
        "פנים הקתדרלה",
        "כיכר Stephansplatz"
      ],
      "fit": "מתאים לכל ביקור ראשון בוינה.",
      "tip": "להגיע גם בערב; התאורה והאווירה בכיכר משתנות לגמרי."
    },
    "en": {
      "why": "St. Stephen’s Cathedral is Vienna’s vertical heart: tiled roof, gothic towers and the square that feels like the city’s true center.",
      "see": [
        "Detailed Gothic façade",
        "Colorful tiled roof",
        "Cathedral interior",
        "Stephansplatz"
      ],
      "fit": "Essential for any first visit.",
      "tip": "Return in the evening; the lighting changes the mood."
    }
  },
  "Schönbrunn Palace": {
    "he": {
      "why": "שנברון הוא הארמון שמסביר את וינה הקיסרית: מגורי קיץ של ההבסבורגים, גנים עצומים ותכנון שמציג כוח, סדר וטקס. זה לא רק ארמון יפה — זו הצהרת כוח פוליטית.",
      "see": [
        "חזית הארמון",
        "חדרים קיסריים לפי כרטיס",
        "גנים ומזרקות",
        "תצפית Gloriette"
      ],
      "fit": "חובה לביקור ראשון, במיוחד למי שרוצה להבין את ההבסבורגים.",
      "tip": "להגיע מוקדם. התורים והמרחקים בתוך המתחם גוזלים זמן."
    },
    "en": {
      "why": "Schönbrunn explains imperial Vienna: Habsburg summer residence, vast gardens and a layout designed to project power and ceremony.",
      "see": [
        "Palace façade",
        "Imperial rooms with ticket",
        "Gardens and fountains",
        "Gloriette viewpoint"
      ],
      "fit": "Must-do for first-time visitors interested in Habsburg Vienna.",
      "tip": "Go early; queues and walking distances consume time."
    }
  },
  "Belvedere Klimt": {
    "he": {
      "why": "בלוודר הוא חובה בעיקר בזכות קלימט ו“הנשיקה”, אבל גם כי הוא משלב ארמון בארוק עם אמנות שמגדירה את וינה המודרנית. זה חיבור בין אימפריה לאסתטיקה.",
      "see": [
        "The Kiss של Klimt לפי תצוגה",
        "אולמות הארמון",
        "גני בלוודר",
        "אוסף אמנות אוסטרית"
      ],
      "fit": "מתאים לאמנות, זוגות ויום גשם.",
      "tip": "להזמין כרטיס מראש אם “הנשיקה” חשובה לך."
    },
    "en": {
      "why": "Belvedere is a must mainly for Klimt and The Kiss, but also because it links baroque palace space with modern Viennese art.",
      "see": [
        "Klimt’s The Kiss depending on display",
        "Palace halls",
        "Belvedere gardens",
        "Austrian art collection"
      ],
      "fit": "Good for art, couples and rain.",
      "tip": "Book ahead if The Kiss is a priority."
    }
  },
  "Ringstrasse walk": {
    "he": {
      "why": "הרינגשטראסה הוא שיעור פתוח בהיסטוריה של וינה: שדרה שנבנתה במקום חומות העיר, עם אופרה, פרלמנט, מוזיאונים ובית עירייה. הליכה כאן מסבירה איך וינה הפכה לעיר אימפריאלית מודרנית.",
      "see": [
        "האופרה",
        "הפרלמנט",
        "Rathaus",
        "מוזיאוני התאומים ושדרות רחבות"
      ],
      "fit": "מתאים להתמצאות, אדריכלות ויום ראשון בעיר.",
      "tip": "אפשר לעשות חלק בהליכה וחלק בחשמלית כדי לא להתעייף."
    },
    "en": {
      "why": "Ringstrasse is an open lesson in Vienna’s history: a boulevard built where city walls once stood, lined with opera, parliament, museums and city hall.",
      "see": [
        "State Opera",
        "Parliament",
        "Rathaus",
        "Twin museums and broad boulevards"
      ],
      "fit": "Good for orientation, architecture and first-day planning.",
      "tip": "Mix walking with tram sections to avoid fatigue."
    }
  },
  "Hofburg Palace": {
    "he": {
      "why": "הופבורג הוא מתחם השלטון ההבסבורגי בלב וינה — לא בניין אחד אלא עיר של ארמונות, חצרות, מוזיאונים וטקסים. חובה כי הוא מסביר את מרכז הכוח של האימפריה.",
      "see": [
        "חצרות הארמון",
        "מוזיאונים לפי בחירה",
        "אזור הספרייה הלאומית",
        "מעבר אל Heldenplatz"
      ],
      "fit": "מתאים להיסטוריה, אדריכלות וביקור ראשון.",
      "tip": "לא לנסות את כל המוזיאונים ביום אחד; לבחור נושא."
    },
    "en": {
      "why": "Hofburg is the Habsburg power complex at Vienna’s center — not one building, but a city of palaces, courtyards and museums.",
      "see": [
        "Palace courtyards",
        "Museums depending on choice",
        "National Library area",
        "Heldenplatz"
      ],
      "fit": "Good for history, architecture and first visit.",
      "tip": "Do not try every museum in one day; choose a theme."
    }
  },
  "Vienna State Opera": {
    "he": {
      "why": "האופרה של וינה היא סמל תרבותי חי, לא רק בניין יפה. גם אם לא נכנסים להופעה, החזית והמיקום שלה על הרינג מראים את המקום של מוזיקה בחיי העיר.",
      "see": [
        "חזית בית האופרה",
        "אפשרות סיור/הופעה",
        "אווירת ערב סביב המבנה",
        "קירבה לאלברטינה והרינג"
      ],
      "fit": "חובה לחובבי תרבות ומוזיקה.",
      "tip": "אם אין תקציב לכרטיס מלא, לבדוק כרטיסי עמידה או סיור."
    },
    "en": {
      "why": "Vienna State Opera is a living cultural symbol, not just a façade. Even outside, it shows how central music is to the city.",
      "see": [
        "Opera façade",
        "Tour/performance option",
        "Evening atmosphere around building",
        "Close to Albertina and Ring"
      ],
      "fit": "Must for culture and music lovers.",
      "tip": "If full tickets are costly, check standing tickets or guided tours."
    }
  },
  "Naschmarkt": {
    "he": {
      "why": "נאשמרקט הוא שוק האוכל המרכזי של וינה, מקום שבו העיר נהיית פחות פורמלית: דוכנים, תבלינים, מאפים, מסעדות וערבוב מטבחים.",
      "see": [
        "דוכני אוכל ותבלינים",
        "מסעדות קלילות",
        "טעימות וקפה",
        "אווירת שוק עירוני"
      ],
      "fit": "חובה למי שאוהב אוכל או רוצה הפסקה פחות מוזיאלית.",
      "tip": "להגיע רעבים אבל לבחור בזהירות; לא כל מקום בשוק שווה באותה מידה."
    },
    "en": {
      "why": "Naschmarkt is Vienna’s main food market, where the city becomes less formal: stalls, spices, pastries, restaurants and mixed cuisines.",
      "see": [
        "Food and spice stalls",
        "Casual restaurants",
        "Tasting and coffee",
        "Urban market mood"
      ],
      "fit": "Must for food lovers and a less museum-like break.",
      "tip": "Come hungry but choose carefully; not every stall is equal."
    }
  },
  "Prater Ferris Wheel": {
    "he": {
      "why": "הגלגל הענק בפראטר הוא אחד הדימויים המזוהים עם וינה. גם אם הנסיעה קצרה, היא נותנת שילוב של נוסטלגיה, נוף ותחושת עיר שעוד יודעת לשחק.",
      "see": [
        "הגלגל הענק",
        "נוף לפראטר ולעיר",
        "אווירת פארק שעשועים",
        "צילום אייקוני"
      ],
      "fit": "מתאים למשפחות וזוגות.",
      "tip": "אם כבר בפראטר, לשלב עם הליכה קצרה בפארק ולא רק לעלות וללכת."
    },
    "en": {
      "why": "The Prater Ferris Wheel is one of Vienna’s most recognizable images, combining nostalgia, view and playful city energy.",
      "see": [
        "Giant wheel",
        "Views over Prater and city",
        "Amusement-park mood",
        "Iconic photo"
      ],
      "fit": "Good for families and couples.",
      "tip": "If you go, walk a little in Prater too; do not only ride and leave."
    }
  },
  "Café Central": {
    "he": {
      "why": "קפה סנטרל הוא יותר מבית קפה: זה סמל לתרבות בתי הקפה של וינה, מקום שמזוהה עם אינטלקטואלים, עיתונים, עוגות וישיבה איטית. מגיעים בשביל הטקס.",
      "see": [
        "חלל היסטורי גבוה",
        "קפה וינאי",
        "Apfelstrudel / עוגות",
        "אווירת בית קפה קלאסי"
      ],
      "fit": "חובה למי שרוצה להבין את תרבות הקפה של וינה.",
      "tip": "התור יכול להיות ארוך; אם אין זמן, יש בתי קפה היסטוריים אחרים."
    },
    "en": {
      "why": "Café Central is more than a café: it represents Vienna’s coffeehouse culture of writers, newspapers, cakes and slow sitting.",
      "see": [
        "Grand historic interior",
        "Viennese coffee",
        "Apfelstrudel / cakes",
        "Classic café atmosphere"
      ],
      "fit": "Must for understanding Viennese café culture.",
      "tip": "Lines can be long; if short on time, consider other historic cafés."
    }
  },
  "Graben and Kohlmarkt": {
    "he": {
      "why": "Graben ו־Kohlmarkt הם הצירים האלגנטיים של המרכז: חנויות יוקרה, חזיתות קלאסיות, עמוד הדבר והליכה שמחברת את סטפנסדום להופבורג.",
      "see": [
        "עמוד הדבר Graben",
        "חנויות וקונדיטוריות",
        "חזיתות היסטוריות",
        "הליכה לכיוון Hofburg"
      ],
      "fit": "חובה להתמצאות במרכז ההיסטורי.",
      "tip": "לעבור כאן בדרך בין אתרים; לא חייבים לקנות כלום."
    },
    "en": {
      "why": "Graben and Kohlmarkt are elegant central axes: luxury shops, historic façades, Plague Column and the walk from Stephansdom toward Hofburg.",
      "see": [
        "Graben Plague Column",
        "Shops and pastry stops",
        "Historic façades",
        "Walk toward Hofburg"
      ],
      "fit": "Essential for central orientation.",
      "tip": "Use it as a connector between sites; shopping is optional."
    }
  },
  "MuseumsQuartier": {
    "he": {
      "why": "רובע המוזיאונים הוא הצד התרבותי־עכשווי של וינה: חצרות פתוחות, מוזיאונים, ישיבה בחוץ וקהל צעיר. הוא מראה שהעיר היא לא רק אימפריה ישנה.",
      "see": [
        "חצרות MQ",
        "Leopold/MUMOK לפי עניין",
        "ישיבה בחוץ",
        "אווירה צעירה ותרבותית"
      ],
      "fit": "חובה למי שאוהב אמנות עכשווית או מרחב עירוני חי.",
      "tip": "גם בלי מוזיאון, שווה לעצור בחצר אם נמצאים באזור."
    },
    "en": {
      "why": "MuseumsQuartier is Vienna’s contemporary cultural side: courtyards, museums, outdoor seating and a younger crowd.",
      "see": [
        "MQ courtyards",
        "Leopold/MUMOK depending on interest",
        "Outdoor seating",
        "Young cultural atmosphere"
      ],
      "fit": "Must for contemporary art or lively urban space.",
      "tip": "Even without a museum ticket, the courtyards are worth a stop."
    }
  },
  "Karlskirche": {
    "he": {
      "why": "Karlskirche היא אחת הכנסיות הבארוקיות היפות בווינה, עם כיפה גדולה, עמודים בהשראה רומית ובריכה שמייצרת השתקפות נהדרת. היא חזקה במיוחד לצילום.",
      "see": [
        "חזית בארוקית",
        "כיפה ועמודים",
        "בריכת השתקפות",
        "כיכר שקטה יחסית"
      ],
      "fit": "חובה לחובבי אדריכלות וצילום.",
      "tip": "להגיע לקראת ערב כשהחזית והמים נותנים צילום טוב יותר."
    },
    "en": {
      "why": "Karlskirche is one of Vienna’s most beautiful baroque churches, with a dome, Roman-inspired columns and a reflecting pool.",
      "see": [
        "Baroque façade",
        "Dome and columns",
        "Reflecting pool",
        "Relatively calm square"
      ],
      "fit": "Must for architecture and photography.",
      "tip": "Go toward evening for better reflections and light."
    }
  },
  "Danube Canal": {
    "he": {
      "why": "תעלת הדנובה היא וינה הפחות רשמית: גרפיטי, ברים, אופניים והליכה לאורך מים. חובה אם רוצים לראות צד צעיר יותר מהעיר.",
      "see": [
        "גרפיטי וקירות צבעוניים",
        "ברים עונתיים",
        "הליכת מים",
        "חיבור לאזורי בילוי"
      ],
      "fit": "מתאים לערב, צעירים וצילום רחוב.",
      "tip": "לבוא במזג אוויר טוב ובשעות שהברים פתוחים."
    },
    "en": {
      "why": "The Danube Canal is less formal Vienna: graffiti, bars, bikes and waterfront walking. Essential if you want a younger city layer.",
      "see": [
        "Graffiti walls",
        "Seasonal bars",
        "Waterfront walking",
        "Links to nightlife areas"
      ],
      "fit": "Good for evening, younger travelers and street photos.",
      "tip": "Go in good weather when bars are active."
    }
  },
  "Rathausplatz": {
    "he": {
      "why": "Rathausplatz הוא כיכר אירועים ענקית מול בית העירייה. בחורף שוק חג, בקיץ הקרנות ואירועים — זה מקום שמראה את וינה כעיר חיה, לא רק מוזיאון.",
      "see": [
        "בית העירייה הנאו־גותי",
        "אירועים עונתיים",
        "רחבה פתוחה",
        "קרבה לרינג"
      ],
      "fit": "חובה אם יש אירוע עונתי בזמן הביקור.",
      "tip": "לבדוק לוח אירועים; בלי אירוע הערך קצר יותר."
    },
    "en": {
      "why": "Rathausplatz is a major event square in front of City Hall: winter markets, summer screenings and seasonal festivals.",
      "see": [
        "Neo-Gothic City Hall",
        "Seasonal events",
        "Open square",
        "Close to Ringstrasse"
      ],
      "fit": "Must if an event is on during your visit.",
      "tip": "Check the event calendar; without events it is a shorter stop."
    }
  },
  "Albertina": {
    "he": {
      "why": "האלברטינה היא מוזיאון מרכזי ונוח שמחבר בין אמנות, ארמון ומיקום מושלם ליד האופרה. חובה אם רוצים אמנות טובה בלי לצאת מהמרכז.",
      "see": [
        "אוספי אמנות ותערוכות",
        "חדרים היסטוריים לפי כרטיס",
        "מרפסת צילום",
        "קרבה לאופרה"
      ],
      "fit": "חובה לחובבי אמנות עם זמן מוגבל.",
      "tip": "לבדוק את התערוכה הנוכחית — היא קובעת אם זה MustDo עבורך."
    },
    "en": {
      "why": "Albertina is a central museum linking art, palace rooms and a perfect location by the Opera. A strong art stop without leaving the center.",
      "see": [
        "Art collections and exhibitions",
        "Historic rooms depending on ticket",
        "Photo terrace",
        "Close to Opera"
      ],
      "fit": "Must for art lovers with limited time.",
      "tip": "Check current exhibitions; they decide how essential it is for you."
    }
  },
  "Stadtpark Strauss statue": {
    "he": {
      "why": "פסל שטראוס המוזהב ב־Stadtpark הוא אחת התמונות הקלאסיות של וינה המוזיקלית. זו עצירה קצרה שמחברת את העיר לוולסים ולדימוי הרומנטי שלה.",
      "see": [
        "פסל יוהאן שטראוס",
        "פארק עירוני נעים",
        "צילום אייקוני",
        "הליכה קצרה במרכז"
      ],
      "fit": "חובה קטנה לחובבי מוזיקה וצילום.",
      "tip": "לשלב כעצירת מעבר; לא צריך להקדיש לזה הרבה זמן."
    },
    "en": {
      "why": "The golden Strauss statue in Stadtpark is one of the classic images of musical Vienna, linking the city to waltz culture.",
      "see": [
        "Johann Strauss statue",
        "Pleasant city park",
        "Iconic photo",
        "Short central walk"
      ],
      "fit": "Small must-do for music and photos.",
      "tip": "Use it as a passing stop; no need for a long visit."
    }
  },
  "Grinzing evening": {
    "he": {
      "why": "ערב בגרינצינג מציג את וינה של יין וטברנות Heuriger. זו חוויה שונה מהמרכז: פחות ארמון, יותר שולחן, יין, אוכל פשוט ומוזיקה/אווירה מקומית.",
      "see": [
        "טברנות יין",
        "אוכל אוסטרי פשוט",
        "רחובות שכונה שקטים",
        "אפשרות מוזיקה לפי מקום"
      ],
      "fit": "חובה למי שרוצה ערב מקומי יותר ולא רק בר בעיר.",
      "tip": "לבדוק איזה Heuriger פתוח; לא כולם פעילים כל ערב."
    },
    "en": {
      "why": "A Grinzing evening shows Vienna’s wine-tavern side: less palace, more table, wine, simple food and local mood.",
      "see": [
        "Wine taverns",
        "Simple Austrian food",
        "Quiet district streets",
        "Possible music depending on tavern"
      ],
      "fit": "Must if you want a more local evening than central bars.",
      "tip": "Check which Heuriger is open; not all operate every evening."
    }
  },
  "Strasbourg Boat Tour": {
    "he": {
      "why": "שייט בשטרסבורג הוא אחת הדרכים הכי טובות להבין את העיר מהר: Grande Île, פטיט פראנס, Neustadt והרובע האירופי מתחברים למסלול אחד על נהר Ill. זה נותן מסגרת לפני שמטיילים ברגל.",
      "see": [
        "Petite France מהמים",
        "Neustadt – הרובע הגרמני־קיסרי",
        "מוסדות אירופיים",
        "הסברים באוזניות לפי שפה"
      ],
      "fit": "מתאים ליום ראשון בעיר, משפחות ומי שרוצה להבין את המבנה שלה.",
      "tip": "לעשות בתחילת הביקור; אחר כך ההליכה בעיר ברורה יותר."
    },
    "en": {
      "why": "A Strasbourg boat tour is one of the fastest ways to understand the city: Grande Île, Petite France, Neustadt and European Quarter linked by the Ill River.",
      "see": [
        "Petite France from the water",
        "Neustadt imperial district",
        "European institutions",
        "Audio commentary in several languages"
      ],
      "fit": "Good for first day, families and orientation.",
      "tip": "Do it early in the visit; the city makes more sense afterward."
    }
  },
  "Cathedral Platform View": {
    "he": {
      "why": "תצפית הקתדרלה נותנת מבט על גגות שטרסבורג, התעלות והמרקם הצפוף של העיר העתיקה. העלייה במדרגות הופכת את הנוף למשהו שהרווחת במאמץ.",
      "see": [
        "גגות Grande Île",
        "מבט על הקתדרלה מקרוב",
        "תעלות ורחובות מלמעלה",
        "צילום פנורמי"
      ],
      "fit": "מתאים לצילום, היסטוריה ומי שלא מפחד ממדרגות.",
      "tip": "לבדוק שעות ומזג אוויר; ביום ערפילי לא שווה להתאמץ."
    },
    "en": {
      "why": "The cathedral platform gives rooftop views over Strasbourg, canals and the dense old-town fabric. The stair climb makes the view feel earned.",
      "see": [
        "Grande Île rooftops",
        "Close cathedral details",
        "Canals and streets from above",
        "Panoramic photos"
      ],
      "fit": "Good for photos and those comfortable with stairs.",
      "tip": "Check hours and weather; haze reduces the value."
    }
  },
  "Petite France canals": {
    "he": {
      "why": "תעלות פטיט פראנס הן התמונה הרומנטית של שטרסבורג: מים, גשרים, בתי חצי־עץ ומרפסות פרחים. זה המקום שבו אלזס מרגישה הכי גלויה בעיר.",
      "see": [
        "תעלות וגשרים קטנים",
        "בתי חצי־עץ",
        "נקודות צילום ליד המים",
        "הליכה איטית ללא יעד קשיח"
      ],
      "fit": "מתאים לזוגות, צילום וערב רגוע.",
      "tip": "הכי יפה מוקדם בבוקר או אחרי שקיעה כשהעומס יורד."
    },
    "en": {
      "why": "Petite France canals are Strasbourg’s romantic postcard: water, small bridges, half-timbered houses and flowered balconies.",
      "see": [
        "Canals and small bridges",
        "Half-timbered houses",
        "Waterfront photo spots",
        "Slow aimless walking"
      ],
      "fit": "Best for couples, photos and relaxed evenings.",
      "tip": "Most beautiful early morning or after sunset when crowds thin."
    }
  },
  "European Quarter walk": {
    "he": {
      "why": "הרובע האירופי מציג שטרסבורג אחרת: לא רק אלזס ציורית, אלא עיר עם תפקיד פוליטי באירופה. כאן נמצאים מוסדות כמו הפרלמנט האירופי ומועצת אירופה.",
      "see": [
        "מבני מוסדות אירופיים",
        "אדריכלות מודרנית יותר",
        "הליכה רחבה ופתוחה",
        "הקשר לעיר כבירה אירופית"
      ],
      "fit": "מתאים למי שמתעניין בפוליטיקה, אירופה ואדריכלות מודרנית.",
      "tip": "לשלב עם פארק Orangerie או שייט; האזור פחות “קסום” לבד."
    },
    "en": {
      "why": "The European Quarter shows another Strasbourg: not just picturesque Alsace, but a city with a political role in Europe.",
      "see": [
        "European institutional buildings",
        "More modern architecture",
        "Wide open walking areas",
        "European-capital context"
      ],
      "fit": "Good for politics, Europe and modern architecture.",
      "tip": "Pair with Orangerie Park or boat tour; alone it is less charming."
    }
  },
  "Covered Bridges sunset": {
    "he": {
      "why": "הגשרים המקורים וסכר Vauban נותנים את אחת מנקודות השקיעה הטובות בעיר: מגדלים, מים, גגות וכניסה דרמטית לפטיט פראנס.",
      "see": [
        "Ponts Couverts",
        "מגדלי ההגנה",
        "Vauban Dam nearby",
        "שקיעה על התעלות"
      ],
      "fit": "מתאים לצילום, זוגות והליכת ערב.",
      "tip": "לעלות ל־Vauban Dam viewpoint אם פתוח — הזווית משם חזקה יותר."
    },
    "en": {
      "why": "Covered Bridges and Vauban Dam create one of the best sunset corners in Strasbourg: towers, water, rooftops and a dramatic entry to Petite France.",
      "see": [
        "Ponts Couverts",
        "Defensive towers",
        "Nearby Vauban Dam",
        "Sunset over canals"
      ],
      "fit": "Good for photos, couples and evening walk.",
      "tip": "Go up to Vauban Dam viewpoint if open; the angle is stronger."
    }
  },
  "Batorama cruise": {
    "he": {
      "why": "Batorama היא מפעילת השייט המזוהה עם שטרסבורג, עם סיור של כ־70 דקות לאורך נקודות מרכזיות בעיר. היתרון הוא הסבר מובנה בכמה שפות ותנועה נוחה גם ביום גשם.",
      "see": [
        "Grande Île",
        "Petite France",
        "Neustadt",
        "European institutions לפי מסלול"
      ],
      "fit": "מתאים למשפחות, יום ראשון בעיר וגשם קל.",
      "tip": "להזמין שעה שמתאימה לתוכנית; חלק מהסירות מקורות ומחוממות/ממוזגות."
    },
    "en": {
      "why": "Batorama is Strasbourg’s well-known boat operator, with about 70-minute tours linking major city areas and multilingual audio commentary.",
      "see": [
        "Grande Île",
        "Petite France",
        "Neustadt",
        "European institutions depending on route"
      ],
      "fit": "Good for families, first day and light rain.",
      "tip": "Choose a time that fits your day; many boats are covered and climate-controlled."
    }
  },
  "Alsace wine tasting": {
    "he": {
      "why": "טעימת יין באלזס מכניסה לטיול את אחד הסיפורים החשובים של האזור: ריזלינג, גוורצטרמינר, כרמים וכפרי יין. גם בתוך העיר אפשר לקבל טעימה בלי לנסוע לכל דרך היין.",
      "see": [
        "יינות לבנים אלזסיים",
        "הסבר על זנים מקומיים",
        "אפשרות גבינות/נשנושים",
        "חיבור לכפרי היין באזור"
      ],
      "fit": "מתאים לזוגות, חובבי יין וערב רגוע.",
      "tip": "אם מתכננים גם טיול רכב בכפרי יין, לשמור טעימה גדולה לשם."
    },
    "en": {
      "why": "Alsace wine tasting brings in one of the region’s core stories: Riesling, Gewürztraminer, vineyards and wine villages.",
      "see": [
        "Alsatian white wines",
        "Local grape explanations",
        "Possible cheese/snack pairing",
        "Context for wine villages"
      ],
      "fit": "Good for couples, wine lovers and relaxed evenings.",
      "tip": "If you plan a wine-route car day, save the bigger tasting for there."
    }
  },
  "Bike tour along Ill river": {
    "he": {
      "why": "סיור אופניים לאורך נהר Ill מתאים כי שטרסבורג שטוחה יחסית, ירוקה ומלאה שבילי מים. זו דרך לראות יותר שכונות בלי תחושה של מרתון הליכה.",
      "see": [
        "שבילים ליד הנהר",
        "מעבר בין Grande Île לאזורים ירוקים",
        "אפשרות להגיע לרובע האירופי",
        "קצב קליל יותר מהליכה"
      ],
      "fit": "מתאים למי שנוח לו ברכיבה עירונית וליום מזג אוויר טוב.",
      "tip": "לוודא אופניים תקינים, קסדה/ביטוח ומסלול שמתרחק מכבישים עמוסים."
    },
    "en": {
      "why": "A bike tour along the Ill works because Strasbourg is flat, green and water-based. It covers more city without a walking marathon.",
      "see": [
        "Riverside paths",
        "Links between Grande Île and greener areas",
        "Possible European Quarter access",
        "Lighter pace than walking"
      ],
      "fit": "Good for confident city cyclists and nice weather.",
      "tip": "Check bike condition, insurance/helmet and route away from heavy traffic."
    }
  },
  "Christmas market route": {
    "he": {
      "why": "מסלול שוק חג המולד הוא חובה עונתית כי הוא משנה את כל העיר: אורות, דוכנים, ריחות תבלינים ועץ חג ענק. זו חוויה שלא קיימת באותו אופן בקיץ.",
      "see": [
        "Place Kléber",
        "דוכני יין חם ומאפים",
        "קישוטי רחוב",
        "כיכרות שוק שונות"
      ],
      "fit": "חובה בדצמבר/עונת חג המולד.",
      "tip": "ללכת בשעות מוקדמות יותר כדי להימנע מעומס סוף יום."
    },
    "en": {
      "why": "The Christmas market route is a seasonal must because it transforms the city: lights, stalls, spice smells and the huge Christmas tree.",
      "see": [
        "Place Kléber",
        "Mulled wine and pastry stalls",
        "Street decorations",
        "Different market squares"
      ],
      "fit": "Must in Christmas season.",
      "tip": "Go earlier to avoid peak evening crowds."
    }
  },
  "Orangerie Park": {
    "he": {
      "why": "פארק אורנז׳רי הוא נשימה ירוקה בעיר, עם אגם, שבילים וחסידות שמזוהות עם אלזס. חובה אם צריך הפסקה מהעיר העתיקה או אם מטיילים עם ילדים.",
      "see": [
        "אגם ושבילים",
        "מדשאות",
        "חסידות אם נמצאות",
        "קרבה לרובע האירופי"
      ],
      "fit": "מתאים למשפחות, פיקניק ומנוחה.",
      "tip": "לשלב עם הרובע האירופי; שניהם באותו כיוון."
    },
    "en": {
      "why": "Orangerie Park is Strasbourg’s green breath: lake, paths and storks associated with Alsace. Essential if you need a pause or travel with kids.",
      "see": [
        "Lake and paths",
        "Lawns",
        "Storks if present",
        "Close to European Quarter"
      ],
      "fit": "Good for families, picnic and rest.",
      "tip": "Pair with European Quarter; they are in the same direction."
    }
  },
  "Museum of Modern Art": {
    "he": {
      "why": "המוזיאון לאמנות מודרנית הוא חובה למי שרוצה לאזן את העיר העתיקה עם תרבות מודרנית. המבנה ליד הנהר והתערוכות נותנים הפסקה חכמה מהסמטאות.",
      "see": [
        "אמנות מודרנית ועכשווית",
        "תערוכות מתחלפות",
        "מבנה ליד הנהר",
        "קירבה לפטיט פראנס"
      ],
      "fit": "מתאים לחובבי אמנות ויום גשם.",
      "tip": "לבדוק תערוכה לפני שמחליטים אם זה חובה עבורך."
    },
    "en": {
      "why": "The Museum of Modern Art is essential if you want to balance old-town charm with modern culture.",
      "see": [
        "Modern and contemporary art",
        "Changing exhibitions",
        "Riverside building",
        "Near Petite France"
      ],
      "fit": "Good for art lovers and rainy days.",
      "tip": "Check the current exhibition before deciding how essential it is."
    }
  },
  "Astronomical Clock visit": {
    "he": {
      "why": "השעון האסטרונומי בתוך קתדרלת שטרסבורג הוא שילוב של מכניקה, אמונה, זמן ואמנות. הוא לא רק “שעון יפה” אלא אובייקט שמראה איך מדע ודת נפגשו בעיר.",
      "see": [
        "מנגנון השעון",
        "דמויות נעות לפי שעה",
        "פנים הקתדרלה",
        "הקשר אסטרונומי־דתי"
      ],
      "fit": "מתאים להיסטוריה, משפחות וסקרנות טכנית.",
      "tip": "לבדוק שעות הדגמה; להגיע סתם עלול לפספס את הרגע המרכזי."
    },
    "en": {
      "why": "The astronomical clock inside Strasbourg Cathedral combines mechanics, faith, time and art — not just a pretty clock.",
      "see": [
        "Clock mechanism",
        "Moving figures at set times",
        "Cathedral interior",
        "Astronomy-religion context"
      ],
      "fit": "Good for history, families and technical curiosity.",
      "tip": "Check demonstration times; otherwise you may miss the main moment."
    }
  },
  "Canal photography walk": {
    "he": {
      "why": "הליכת צילום לאורך התעלות נותנת דרך איטית ומדויקת לראות את שטרסבורג: השתקפויות, גשרים, חזיתות ובתי חצי־עץ. זה טוב במיוחד בשעות אור רך.",
      "see": [
        "השתקפויות במים",
        "גשרים קטנים",
        "חזיתות חצי־עץ",
        "פינות פחות עמוסות סביב Petite France"
      ],
      "fit": "מתאים לצילום, זוגות והליכה רגועה.",
      "tip": "להתחיל מוקדם בבוקר כדי לקבל מים שקטים ופחות אנשים."
    },
    "en": {
      "why": "A canal photography walk is a slow way to see Strasbourg: reflections, bridges, façades and half-timbered houses.",
      "see": [
        "Water reflections",
        "Small bridges",
        "Half-timbered façades",
        "Quieter corners around Petite France"
      ],
      "fit": "Good for photography, couples and slow walking.",
      "tip": "Start early for calmer water and fewer people."
    }
  },
  "German border day hop": {
    "he": {
      "why": "שטרסבורג יושבת ממש על גבול גרמניה, ולכן קפיצה קצרה לצד השני נותנת תחושה של מעבר תרבותי מהיר: שפה, שילוט, אוכל ואווירה משתנים בלי יום נסיעה גדול.",
      "see": [
        "מעבר נהר/גבול לאזור Kehl",
        "תחושת גרמניה קרובה",
        "חנויות/קפה בצד השני",
        "הליכה או חשמלית לפי מסלול"
      ],
      "fit": "מתאים לסקרנות, משפחות ויום קליל.",
      "tip": "לא לצפות ליעד תיירותי גדול; הערך הוא החוויה של מעבר הגבול."
    },
    "en": {
      "why": "Strasbourg sits directly on the German border, so a short hop gives a quick cultural shift: language, signs, food and mood change fast.",
      "see": [
        "Cross toward Kehl area",
        "Nearby Germany feeling",
        "Shops/cafés across the border",
        "Walk or tram depending on route"
      ],
      "fit": "Good for curiosity, families and an easy detour.",
      "tip": "Do not expect a major attraction; the value is the border experience."
    }
  },
  "Thermal spa Baden-Baden": {
    "he": {
      "why": "מרחצאות באדן־באדן הם חוויית ספא גרמנית קלאסית: מים תרמיים, שקט וטקס רחצה מסודר. זו חוויה שמתאימה יותר ליום רכב או תכנון מראש.",
      "see": [
        "מרחצאות תרמיים",
        "אווירת ספא אלגנטית",
        "אפשרות יום רגוע מחוץ לעיר",
        "שילוב עם פארקים/קזינו"
      ],
      "fit": "מתאים לזוגות, מנוחה ויום רכב.",
      "tip": "לבדוק כללים, לבוש, שעות וכרטיסים; תרבות מרחצאות משתנה לפי מקום."
    },
    "en": {
      "why": "Baden-Baden thermal baths are a classic German spa experience: thermal water, quiet and a structured bathing ritual.",
      "see": [
        "Thermal baths",
        "Elegant spa mood",
        "Relaxed out-of-town day",
        "Pairs with parks/casino"
      ],
      "fit": "Good for couples, rest and car day.",
      "tip": "Check rules, clothing policy, hours and tickets."
    }
  },
  "Casino Baden-Baden": {
    "he": {
      "why": "הקזינו של באדן־באדן הוא לא רק הימורים אלא אולם היסטורי אלגנטי שמזוהה עם עיירת הספא. גם למי שלא מהמר, יש עניין באדריכלות ובאווירה.",
      "see": [
        "אולמות קזינו היסטוריים",
        "Kurhaus מבחוץ",
        "אווירת ערב אלגנטית",
        "שילוב עם ספא/פארקים"
      ],
      "fit": "מתאים לערב אלגנטי או ביקור אדריכלי.",
      "tip": "לבדוק קוד לבוש וגיל כניסה; לא להגיע ספונטנית בלי לדעת כללים."
    },
    "en": {
      "why": "Baden-Baden Casino is not only gambling; it is a historic elegant hall tied to the spa-town identity.",
      "see": [
        "Historic casino rooms",
        "Kurhaus exterior",
        "Elegant evening mood",
        "Pairs with spa/parks"
      ],
      "fit": "Good for elegant evening or architecture interest.",
      "tip": "Check dress code and entry age rules first."
    }
  },
  "Vauban Dam viewpoint": {
    "he": {
      "why": "סכר Vauban הוא המקום שממנו רואים את פטיט פראנס והגשרים המקורים בפריים אחד. חובה לצילום כי הוא מסדר את כל הסיפור הוויזואלי של האזור.",
      "see": [
        "גג תצפית מעל הסכר",
        "נוף לגשרים המקורים",
        "פטיט פראנס מלמעלה",
        "צילום פנורמי"
      ],
      "fit": "חובה לצילום והתמצאות.",
      "tip": "לעלות לגג אם פתוח; זו הזווית שלא מקבלים מהרחוב."
    },
    "en": {
      "why": "Vauban Dam viewpoint frames Petite France and the Covered Bridges together, making it one of the best photo/orientation points.",
      "see": [
        "Rooftop over the dam",
        "Covered Bridges view",
        "Petite France from above",
        "Panoramic photo"
      ],
      "fit": "Must for photos and orientation.",
      "tip": "Go up to the roof if open; street level is not the same."
    }
  },
  "Riverside picnic": {
    "he": {
      "why": "פיקניק ליד הנהר מתאים כשמזג האוויר טוב ורוצים לעצור את הקצב: לקנות מאפה/גבינה/שתייה ולשבת ליד המים במקום עוד מסעדה.",
      "see": [
        "ישיבה ליד Ill",
        "מאפים וגבינות מקומיות",
        "הפסקה בלי הזמנה",
        "אווירה רגועה"
      ],
      "fit": "מתאים לזוגות, משפחות ותקציב נמוך.",
      "tip": "לקנות מראש בשוק/מאפייה ולבחור מקום מוצל ונקי."
    },
    "en": {
      "why": "A riverside picnic works when weather is good and you want to slow down: buy pastry/cheese/drinks and sit by the water instead of another restaurant.",
      "see": [
        "Sitting by the Ill",
        "Local pastries and cheese",
        "Break without reservation",
        "Calm mood"
      ],
      "fit": "Good for couples, families and low budget.",
      "tip": "Buy ahead from a bakery/market and choose a shaded clean spot."
    }
  },
  "Cathedral light show seasonally": {
    "he": {
      "why": "מופעי תאורה על הקתדרלה מתקיימים בעונות/אירועים מסוימים והופכים את החזית למסך ענק. זו חוויה חזקה אם היא פעילה בזמן הביקור.",
      "see": [
        "חזית הקתדרלה מוארת",
        "מוזיקה/אנימציה לפי אירוע",
        "קהל בכיכר",
        "אווירת ערב עונתית"
      ],
      "fit": "מתאים לערב, צילום ומשפחות.",
      "tip": "לבדוק תאריכים רשמיים; זה לא קורה כל השנה."
    },
    "en": {
      "why": "Seasonal cathedral light shows turn the façade into a huge screen. If active during your visit, it can be a strong evening experience.",
      "see": [
        "Illuminated cathedral façade",
        "Music/animation depending on event",
        "Crowd in square",
        "Seasonal evening mood"
      ],
      "fit": "Good for evening, photos and families.",
      "tip": "Check official dates; it is not year-round."
    }
  },
  "Local bakery crawl": {
    "he": {
      "why": "סיור מאפיות קטן בשטרסבורג הוא דרך טעימה להבין את אלזס: kougelhopf, טארטים, מאפים חמאתיים ולחמים. זה נותן תרבות מקומית בלי מוזיאון.",
      "see": [
        "מאפים אלזסיים",
        "קפה קצר",
        "חלונות ראווה של מאפיות",
        "עצירות קטנות בין אתרים"
      ],
      "fit": "מתאים לבוקר, משפחות וחובבי מתוק.",
      "tip": "לקנות מעט בכל מקום; אחרת נהיים כבדים מהר מדי."
    },
    "en": {
      "why": "A small bakery crawl in Strasbourg is a tasty way to understand Alsace: kougelhopf, tarts, buttery pastries and breads.",
      "see": [
        "Alsatian pastries",
        "Short coffee stops",
        "Bakery windows",
        "Small stops between sites"
      ],
      "fit": "Good for mornings, families and sweet lovers.",
      "tip": "Buy small portions at each place; it adds up quickly."
    }
  },
  "Strasbourg Cathedral": {
    "he": {
      "why": "קתדרלת שטרסבורג היא הסמל החד־משמעי של העיר: גותית, גבוהה, מפורטת ובעלת נוכחות שמכתיבה את כל המרכז. חובה כי היא נותנת את “רגע הוואו” הראשון.",
      "see": [
        "חזית אבן מפורטת",
        "פנים הקתדרלה",
        "השעון האסטרונומי",
        "כיכר הקתדרלה"
      ],
      "fit": "חובה לכל ביקור ראשון בשטרסבורג.",
      "tip": "לחזור גם בלילה; התאורה משנה לגמרי את החזית."
    },
    "en": {
      "why": "Strasbourg Cathedral is the city’s defining symbol: high, gothic, detailed and dominant. It delivers the first major wow moment.",
      "see": [
        "Detailed stone façade",
        "Cathedral interior",
        "Astronomical clock",
        "Cathedral square"
      ],
      "fit": "Essential for any first visit.",
      "tip": "Return at night; lighting transforms the façade."
    }
  },
  "Petite France": {
    "he": {
      "why": "פטיט פראנס היא החלק הכי ציורי של העיר: תעלות, גשרים, בתי חצי־עץ והיסטוריה של רובע בעלי מלאכה. חובה כי זה הדימוי שאנשים זוכרים משטרסבורג.",
      "see": [
        "תעלות וגשרים",
        "בתי חצי־עץ",
        "רחובות צרים",
        "נקודות צילום ליד המים"
      ],
      "fit": "חובה לזוגות, צילום וביקור ראשון.",
      "tip": "לבוא מוקדם או אחרי שקיעה כדי להרגיש את המקום בלי עומס."
    },
    "en": {
      "why": "Petite France is the city’s most picturesque quarter: canals, bridges, half-timbered houses and old artisan history.",
      "see": [
        "Canals and bridges",
        "Half-timbered houses",
        "Narrow streets",
        "Waterfront photo points"
      ],
      "fit": "Must for couples, photos and first visit.",
      "tip": "Go early or after sunset to avoid the heaviest crowds."
    }
  },
  "Covered Bridges": {
    "he": {
      "why": "הגשרים המקורים והמגדלים הם שרידי מערכת ההגנה של העיר, והם יוצרים כניסה דרמטית לפטיט פראנס. חובה כי הם נותנים לשטרסבורג עומק היסטורי ולא רק יופי.",
      "see": [
        "מגדלי הגנה",
        "גשרים מעל המים",
        "מבט לפטיט פראנס",
        "שילוב עם Vauban Dam"
      ],
      "fit": "מתאים להיסטוריה, צילום והליכת ערב.",
      "tip": "לשלב עם Vauban Dam viewpoint לאותה חוויה חזקה יותר."
    },
    "en": {
      "why": "The Covered Bridges and towers are remnants of the city’s defensive system, giving Petite France a dramatic historic entrance.",
      "see": [
        "Defensive towers",
        "Bridges over water",
        "Views toward Petite France",
        "Pairs with Vauban Dam"
      ],
      "fit": "Good for history, photos and evening walk.",
      "tip": "Combine with Vauban Dam viewpoint for the strongest angle."
    }
  },
  "Batorama boat tour": {
    "he": {
      "why": "שייט Batorama הוא חובה למי שרוצה להבין את שטרסבורג בלי להתפזר: הוא מחבר בין העיר העתיקה, פטיט פראנס, Neustadt והמוסדות האירופיים במסלול אחד עם הסבר.",
      "see": [
        "Grande Île",
        "Petite France",
        "Neustadt",
        "הרובע האירופי לפי מסלול"
      ],
      "fit": "חובה ליום ראשון או משפחות.",
      "tip": "לעשות בתחילת הביקור, לפני שמחליטים איפה להעמיק ברגל."
    },
    "en": {
      "why": "Batorama is a must if you want to understand Strasbourg efficiently: Old Town, Petite France, Neustadt and European institutions in one narrated route.",
      "see": [
        "Grande Île",
        "Petite France",
        "Neustadt",
        "European Quarter depending on route"
      ],
      "fit": "Must for first day or families.",
      "tip": "Do it early, before deciding where to explore on foot."
    }
  },
  "European Parliament area": {
    "he": {
      "why": "אזור הפרלמנט האירופי מציג את שטרסבורג כבירה אירופית, לא רק עיר אלזסית יפה. חובה למי שרוצה להבין למה לעיר יש חשיבות פוליטית.",
      "see": [
        "מבנה הפרלמנט האירופי מבחוץ",
        "מוסדות אירופיים סמוכים",
        "אדריכלות מודרנית",
        "הליכה רחבה ליד נהר/פארק"
      ],
      "fit": "מתאים למתעניינים באירופה, פוליטיקה ואדריכלות מודרנית.",
      "tip": "לשלב עם Orangerie Park; האזור פחות תיירותי לבד."
    },
    "en": {
      "why": "The European Parliament area shows Strasbourg as a European political capital, not only a pretty Alsatian city.",
      "see": [
        "European Parliament exterior",
        "Nearby European institutions",
        "Modern architecture",
        "Wide walks near river/park"
      ],
      "fit": "Good for Europe, politics and modern architecture.",
      "tip": "Pair with Orangerie Park; alone it is less charming."
    }
  },
  "Place Kléber": {
    "he": {
      "why": "Place Kléber היא הכיכר המרכזית הגדולה של שטרסבורג, נקודת מפגש עירונית ושער לקניות, אירועים ושוק חג המולד. חובה להתמצאות בעיר.",
      "see": [
        "הכיכר המרכזית",
        "חנויות ורחובות סביב",
        "אירועים עונתיים",
        "עץ חג מולד בעונה"
      ],
      "fit": "מתאים להתמצאות, קניות ואירועים.",
      "tip": "לאכול לאו דווקא בכיכר עצמה; להשתמש בה כנקודת עוגן."
    },
    "en": {
      "why": "Place Kléber is Strasbourg’s main central square, a meeting point and gateway to shopping, events and Christmas season.",
      "see": [
        "Main square",
        "Surrounding shopping streets",
        "Seasonal events",
        "Christmas tree in season"
      ],
      "fit": "Good for orientation, shopping and events.",
      "tip": "Use it as an anchor; do not assume the best food is right on the square."
    }
  },
  "Astronomical Clock": {
    "he": {
      "why": "השעון האסטרונומי בקתדרלה הוא מפגש של מכניקה, אמונה וזמן. חובה כי הוא מוסיף לקתדרלה רובד טכני וסיפורי, לא רק אדריכלי.",
      "see": [
        "מנגנון השעון",
        "דמויות נעות לפי שעה",
        "פנים הקתדרלה",
        "הקשר היסטורי־מדעי"
      ],
      "fit": "מתאים למשפחות, היסטוריה וסקרנות.",
      "tip": "לבדוק שעות הדגמה; אחרת תראה רק את האובייקט בלי הרגע החי."
    },
    "en": {
      "why": "The astronomical clock combines mechanics, faith and time, adding a technical/story layer to the cathedral beyond architecture.",
      "see": [
        "Clock mechanism",
        "Moving figures at set times",
        "Cathedral interior",
        "Historical-scientific context"
      ],
      "fit": "Good for families, history and curiosity.",
      "tip": "Check demonstration times; otherwise you miss the living moment."
    }
  },
  "Alsatian winstub dinner": {
    "he": {
      "why": "ארוחת Winstub אלזסית היא חובה קולינרית: מסעדה מסורתית עם עץ, יין מקומי ומנות כמו choucroute או flammekueche. כאן מבינים את האזור דרך הצלחת.",
      "see": [
        "אווירת פונדק אלזסי",
        "מנות מקומיות כבדות יחסית",
        "יין לבן אלזסי",
        "חום ועץ במקום עיצוב מודרני"
      ],
      "fit": "חובה לחובבי אוכל מקומי.",
      "tip": "לבחור מקום עם ביקורות טובות ולא רק הכי קרוב לקתדרלה."
    },
    "en": {
      "why": "An Alsatian winstub dinner is a culinary must: wood, local wine and dishes like choucroute or flammekueche — the region on a plate.",
      "see": [
        "Traditional Alsatian inn mood",
        "Hearty local dishes",
        "Alsatian white wine",
        "Warm wood interior"
      ],
      "fit": "Must for local-food lovers.",
      "tip": "Choose by solid reviews, not just proximity to the cathedral."
    }
  },
  "Krutenau evening": {
    "he": {
      "why": "Krutenau הוא אזור סטודנטיאלי/צעיר יחסית עם ברים, מסעדות ואווירת ערב פחות תיירותית. חובה אם רוצים לראות איפה העיר חיה אחרי שעות היום.",
      "see": [
        "ברים ומסעדות קטנות",
        "קהל צעיר יותר",
        "הליכה לא רשמית בערב",
        "קרבה למרכז אך פחות גלויה"
      ],
      "fit": "מתאים לערב קל, סטודנטים ואווירה מקומית.",
      "tip": "לבחור בר לפי מצב רוח; האזור משתנה מאוד ממקום למקום."
    },
    "en": {
      "why": "Krutenau is a younger/student-feeling district with bars, restaurants and a less touristy evening mood.",
      "see": [
        "Small bars and restaurants",
        "Younger crowd",
        "Informal evening walk",
        "Close to center but less obvious"
      ],
      "fit": "Good for casual evening and local mood.",
      "tip": "Pick by mood; venues differ a lot."
    }
  },
  "Maison Kammerzell photo stop": {
    "he": {
      "why": "Maison Kammerzell הוא אחד הבתים המפורסמים בשטרסבורג, ממש ליד הקתדרלה, עם חזית חצי־עץ עשירה בפרטים. גם אם לא אוכלים שם, זו עצירת צילום חובה.",
      "see": [
        "חזית היסטורית מפורטת",
        "מיקום ליד הקתדרלה",
        "פרטי עץ וקישוטים",
        "צילום קלאסי של העיר"
      ],
      "fit": "חובה לצילום ואדריכלות.",
      "tip": "להסתכל על הפרטים, לא רק לצלם מרחוק."
    },
    "en": {
      "why": "Maison Kammerzell is one of Strasbourg’s most famous houses, right by the cathedral, with a richly decorated half-timbered façade.",
      "see": [
        "Detailed historic façade",
        "Location by cathedral",
        "Woodwork and ornaments",
        "Classic city photo"
      ],
      "fit": "Must for photos and architecture.",
      "tip": "Look at the details, not only the wide shot."
    }
  },
  "Ill river walk": {
    "he": {
      "why": "הליכה לאורך נהר Ill מחברת בין שטרסבורג היפה לשטרסבורג היומיומית: מים, גשרים, חזיתות ומעברים שקטים. חובה כדי להבין שהעיר בנויה סביב הנהר.",
      "see": [
        "הליכה ליד מים",
        "גשרים קטנים",
        "חזיתות לאורך הנהר",
        "חיבור בין אזורים בעיר"
      ],
      "fit": "מתאים לכל אחד כמעט, במיוחד ביום יפה.",
      "tip": "לעשות חלק מהמסלול מוקדם בבוקר או בערב לאור רך."
    },
    "en": {
      "why": "A walk along the Ill links picturesque Strasbourg with everyday Strasbourg: water, bridges, façades and quieter passages.",
      "see": [
        "Waterfront walk",
        "Small bridges",
        "Riverfront façades",
        "Links between city areas"
      ],
      "fit": "Good for almost everyone in nice weather.",
      "tip": "Do part of it early morning or evening for softer light."
    }
  },
  "Cathedral platform": {
    "he": {
      "why": "תצפית הקתדרלה היא חובה אם רוצים לראות את העיר מלמעלה ולא רק ללכת בתוכה. המדרגות דורשות מאמץ, אבל הגגות, הכיכרות והנהר מתחברים בתמונה אחת.",
      "see": [
        "מבט על גגות העיר",
        "פרטי הקתדרלה מקרוב",
        "נהר ותעלות מרחוק",
        "צילום פנורמי"
      ],
      "fit": "חובה למי שיכול לעלות מדרגות ואוהב תצפיות.",
      "tip": "לא לעלות ביום ערפל או גשם חזק; זה מוריד את הערך."
    },
    "en": {
      "why": "The cathedral platform is essential if you want to see Strasbourg from above, not only walk through it.",
      "see": [
        "City rooftops",
        "Cathedral details up close",
        "River/canals from above",
        "Panoramic photos"
      ],
      "fit": "Must if you can handle stairs and love viewpoints.",
      "tip": "Avoid fog or heavy rain; it reduces the value."
    }
  },
  "Neustadt district": {
    "he": {
      "why": "Neustadt הוא הרובע הגרמני־קיסרי שנבנה אחרי 1871, והוא מסביר את הסיפור הכפול של שטרסבורג בין צרפת לגרמניה. חובה למי שרוצה מעבר לגלויות.",
      "see": [
        "שדרות רחבות",
        "מבנים גרמניים־קיסריים",
        "כיכרות ומוסדות",
        "שוני ברור מהעיר העתיקה"
      ],
      "fit": "חובה לחובבי היסטוריה ואדריכלות.",
      "tip": "לקרוא קצת על חילופי השלטון בעיר; אחרת מפספסים את המשמעות."
    },
    "en": {
      "why": "Neustadt is the German imperial district built after 1871, explaining Strasbourg’s French-German double story beyond postcards.",
      "see": [
        "Wide boulevards",
        "German imperial buildings",
        "Squares and institutions",
        "Clear contrast with Old Town"
      ],
      "fit": "Must for history and architecture lovers.",
      "tip": "Read briefly about the city’s changing rule; it adds meaning."
    }
  },
  "Saint-Thomas Church": {
    "he": {
      "why": "כנסיית סן־תומא היא עצירה שקטה יותר מהקתדרלה, עם חשיבות פרוטסטנטית ואנדרטת מרשל סקס. חובה למי שרוצה שכבה דתית/היסטורית פחות עמוסה.",
      "see": [
        "פנים כנסייה רגוע",
        "אנדרטת Marshal Saxe",
        "אדריכלות גותית/רומנסקית",
        "אווירה שקטה יותר"
      ],
      "fit": "מתאים להיסטוריה, מוזיקה/עוגב ושקט.",
      "tip": "לשלב בדרך לפטיט פראנס; לא צריך להקדיש שעה ארוכה."
    },
    "en": {
      "why": "Saint-Thomas Church is a quieter historic stop than the cathedral, with Protestant importance and the Marshal Saxe monument.",
      "see": [
        "Calmer church interior",
        "Marshal Saxe monument",
        "Gothic/Romanesque architecture",
        "Quieter atmosphere"
      ],
      "fit": "Good for history, organ/music interest and calm.",
      "tip": "Pair it on the way to Petite France; no need for a long visit."
    }
  },
  "Ponts Couverts sunset": {
    "he": {
      "why": "שקיעה בגשרים המקורים היא רגע צילום חזק: מים, מגדלים, גגות ופטיט פראנס באור רך. חובה אם אתה רוצה תמונה אחת שמסכמת את העיר.",
      "see": [
        "מגדלי Ponts Couverts",
        "מים ותעלות",
        "אור שקיעה על הבתים",
        "Vauban Dam nearby"
      ],
      "fit": "חובה לצילום וזוגות.",
      "tip": "להגיע 20–30 דקות לפני השקיעה כדי לבחור זווית."
    },
    "en": {
      "why": "Sunset at Ponts Couverts is a strong photo moment: water, towers, rooftops and Petite France in soft light.",
      "see": [
        "Ponts Couverts towers",
        "Water and canals",
        "Sunset light on houses",
        "Nearby Vauban Dam"
      ],
      "fit": "Must for photos and couples.",
      "tip": "Arrive 20–30 minutes before sunset to choose your angle."
    }
  },
  "Alsace wine village day": {
    "he": {
      "why": "יום כפרי יין באלזס הוא חובה אם יש רכב או טיול מאורגן: הוא מוציא אותך מהעיר אל כרמים, בתים צבעוניים וטעימות שמסבירות את הזהות האזורית.",
      "see": [
        "כפרי יין כמו Riquewihr/Eguisheim",
        "כרמים ונוף פתוח",
        "טעימות יין",
        "אוכל אלזסי מקומי"
      ],
      "fit": "חובה למי שנשאר יותר מיום־יומיים ויש לו דרך נוחה לצאת מהעיר.",
      "tip": "לא לעשות עם נהיגה וטעימות בלי תכנון נהג/תחבורה בטוחה."
    },
    "en": {
      "why": "An Alsace wine-village day is essential if you have a car or organized tour: vineyards, colorful villages and tastings explain the region’s identity.",
      "see": [
        "Wine villages like Riquewihr/Eguisheim",
        "Vineyards and open views",
        "Wine tastings",
        "Local Alsatian food"
      ],
      "fit": "Must if staying longer and you can leave the city comfortably.",
      "tip": "Do not combine driving and tasting without a safe-driver plan."
    }
  }
};

function v49ExperienceMustDoGuide(item){
  if(!item || !['experiences','mustdo'].includes(item.cat)) return null;
  const pack = V49_EXPERIENCE_MUSTDO_GUIDES[item.name];
  if(!pack) return null;
  return pack[getLang()] || pack.en || pack.he || null;
}

function guideContentFor(item){
  const routeGuide = carGuideFor(item);
  if(routeGuide) return {why: routeGuide.why, see: (routeGuide.stops||[]).map(s=>`${s.name}: ${s.text}`), fit: routeGuide.bestFor, tip: routeGuide.tip};
  const lang=getLang();
  const title=titleFor(item);
  const v49Guide = v49ExperienceMustDoGuide(item);
  if(v49Guide) return v49Guide;
  const v48Guide = v48RealGuide(item);
  if(v48Guide) return v48Guide;
  const v47Guide = v47SpecificGuide(item);
  if(v47Guide) return v47Guide;
  const europeRich = enrichedGuideForEurope(item);
  if(europeRich) return europeRich;
  const pragueRich = item && item.city === 'prague' ? (PRAGUE_REAL_GUIDE_CONTENT[item.name]?.[lang] || PRAGUE_REAL_GUIDE_CONTENT[item.name]?.en) : null;
  if(pragueRich) return pragueRich;
  const rich = RICH_GUIDE_CONTENT[item.name]?.[lang] || RICH_GUIDE_CONTENT[item.name]?.en;
  if(rich) return rich;
  const old = GUIDE_CONTENT[item.name]?.[lang] || GUIDE_CONTENT[item.name]?.en;
  if(old && old.why && !String(old.why).includes('not just another pin') && !String(old.why).includes('עוד סיכה')) return old;
  const city=cityNameFor(item.city||activeCity());
  const tags=(item.tags||[]).map(tagFor).slice(0,4).join(', ');
  const cuisine=textFor(item.cuisine)|| (lang==='he'?'מטבח מקומי':'local food');
  const vibe=textFor(item.vibe)|| (lang==='he'?'אווירה קז׳ואלית':'casual atmosphere');
  if(lang==='he'){
    if(item.cat==='food') return {
      why:`${title} מציע ${cuisine} באווירה של ${vibe}. הערך למטייל הוא להבין מראש מה אוכלים כאן, האם זה מתאים להפסקה קצרה או לארוחה רגועה, ומה לבדוק לפני שמגיעים.`,
      see:[`מטבח: ${cuisine}`,`אופי המקום: ${vibe}`,'תפריט וביקורות לפתיחה כשיש אינטרנט','אפשרות להוסיף ל־My Trip רק אם זה מתאים למסלול שלך'],
      fit:'מתאים כשחשוב לדעת מראש מה אוכלים, כמה בערך זה עולה, והאם המקום מתאים לקצב הטיול שלך.',
      tip:'לפני יציאה לפתוח ביקורות עדכניות ושעות פתיחה; במסעדות טובות בעיר העתיקה עומס משתנה מהר.'
    };
    if(item.cat==='nightlife') return {
      why:`${title} הוא אפשרות ערב ב${city} עם אופי ברור: שתייה, מוזיקה, הליכת לילה, קוקטיילים או אווירה מקומית. הכרטיס צריך לעזור להבין איזה סוג ערב תקבל לפני שיוצאים.`,
      see:['סוג אווירה ברור לפני הגעה','אפשרות לשלב עם אוכל קרוב','נקודת סיום נוחה ליום טיול','בדיקת אירועים/מוזיקה כשיש אינטרנט'],
      fit:'מתאים לפי מצב רוח: ערב שקט, קוקטיילים, בירה, הופעה או מסיבה. לא כל מקום לילה מתאים לכל אחד.',
      tip:'לבדוק מראש אם צריך הזמנה, דמי כניסה או אם הערב הספציפי מתאים לסגנון שלך.'
    };
    if(item.cat==='experiences') return {
      why:`${title} נבחר כחוויה כי הוא מוסיף לטיול רגע שאפשר לזכור: תצפית, שייט, מופע, פעילות או זווית אחרת על ${city}. זה לא רק “מקום לראות”, אלא משהו שעושה את היום פחות שגרתי.`,
      see:['החוויה המרכזית של המקום','מה רואים או עושים בפועל','האם זה מתאים לגשם/ערב/זוגות/משפחה','כרטיסים או שעות פתיחה לבדיקה אונליין'],
      fit:'מתאים כשאתה רוצה להוסיף ערך מעבר להליכה בין אתרים: רגע מיוחד, צילום, מופע או פעילות.',
      tip:'לא לבנות יום שלם סביב חוויה בלי לבדוק זמינות, מזג אוויר ושעות פתיחה.'
    };
    if(item.cat==='mustdo') return {
      why:`${title} הוא נקודת חובה כי הוא מייצר את תחושת “הייתי באמת ב${city}”: אייקון, תצפית, רחוב, כיכר או רגע צילום שקשה להחליף במשהו אחר.`,
      see:['הסמל או הזווית המרכזית של המקום','נקודות צילום',`הקשר לעיר ${city}`,'אפשרות לשלב עם תחנות קרובות'],
      fit:'מתאים במיוחד לביקור ראשון ולמי שרוצה לוודא שלא פספס את העוגנים החשובים של העיר.',
      tip:'לשלב עם מקומות קרובים ולא לנסוע במיוחד רק לנקודה אחת אם היא רחוקה מהמסלול.'
    };
    return {
      why:`${title} נבחר כטיול יום מ${city} כי הוא נותן סיבה אמיתית לצאת מהמלון: ${tags || 'נוף, היסטוריה, טבע או עיר אחרת'}. הוא אמור להוסיף לטיול עומק שלא מקבלים בעוד סיבוב במרכז העיר.`,
      see:['נקודת העניין המרכזית של היעד','הליכה או תצפית לפי אופי המקום','עצירת אוכל/קפה אם יש זמן','בדיקת מסלול חזרה לפני שיוצאים'],
      fit:'מתאים אם זמן הנסיעה הגיוני ביחס למספר ימי השהייה שלך ואם היעד תואם את מצב הרוח של אותו יום.',
      tip:'לפני יציאה לפתוח ניווט חי ולבדוק זמן חזרה אחרון, במיוחד בתחבורה ציבורית.'
    };
  }
  if(item.cat==='food') return {why:`${title} offers ${cuisine} in a ${vibe}. The value is knowing what you will eat, whether it fits a quick break or a relaxed meal, and what to verify before going.`,see:[`Cuisine: ${cuisine}`,`Vibe: ${vibe}`,'Open menu and live reviews while online','Add only if it fits your route'],fit:'Good when you want to know what you are eating and how it fits the day.',tip:'Check live hours and reviews before leaving.'};
  if(item.cat==='nightlife') return {why:`${title} is an evening option in ${city} with a clear mood: drinks, music, a night walk, cocktails or local atmosphere.`,see:['Clear evening mood','Nearby food pairing','Possible end point for the day','Events/music check while online'],fit:'Pick by mood: quiet drink, beer, concert, dance or walk.',tip:'Check reservations, entry fee and today’s program.'};
  if(item.cat==='experiences') return {why:`${title} is included because it can turn a regular travel day into a memory: view, cruise, show, playful activity or a different angle on ${city}.`,see:['Main experience','What you actually see or do','Weather/evening/family fit','Tickets or hours to verify online'],fit:'Good when you want more than just walking between sights.',tip:'Check availability, weather and opening hours before building the day around it.'};
  if(item.cat==='mustdo') return {why:`${title} is a must-do because it gives the “I was really in ${city}” feeling: icon, view, square, street or classic photo moment.`,see:['Main icon or angle','Photo spots',`Connection to ${city}`,'Nearby stops to combine'],fit:'Best for first-time visitors and anyone who does not want to miss the city anchors.',tip:'Combine with nearby places instead of traveling across town for one isolated stop.'};
  return {why:`${title} was selected as a day trip from ${city} because it gives you a real reason to leave the hotel: ${tags || 'views, history, nature or another town'}.`,see:['Main point of interest','Walk or viewpoint depending on the place','Food/coffee stop if time allows','Return route check before leaving'],fit:'Good if travel time makes sense for your stay length and the place fits your mood.',tip:'Open live navigation and check return options before leaving.'};
}

function foodProfileFor(item){ return FOOD_PROFILE[item.name] || null; }
function visibleTagsFor(item){
  const mode = activePackageMode();
  let tags = [...(item.tags || [])];
  if(mode !== 'car') tags = tags.filter(t => !['car-friendly','car-best','parking'].includes(t));
  if(mode === 'car') tags = tags.filter(t => t !== 'central').concat(item.parking ? ['parking'] : []);
  if(mode !== 'car' && !tags.includes('public-friendly')) tags.push('public-friendly');
  return [...new Set(tags)];
}


// v33: Car Route Packs - when the user chooses Travel By Car, day trips become full-day route plans
// instead of loose points on a map. Each pack contains logical stops, nearby food choices and route notes.
const CAR_ROUTE_PACKS = {
  prague: [
    routePack('prg-car-karlovy-vary', 'prague', 'Karlovy Vary Spa Road', 50.2319, 12.8720, 2.0, 9, ['spa','architecture','coffee','parking'], {
      en: {
        title: 'Karlovy Vary Spa Road',
        subtitle: 'A full car day through the Czech spa-town mood: colonnades, hot springs, viewpoints and classic cafés.',
        why: 'This route makes sense by car because Karlovy Vary is not just one attraction. The value is moving slowly between the spa promenade, hot-spring colonnades, cafés and the Diana viewpoint without being tied to a train return window.',
        stops: [
          stop('Krušovice Brewery / road break', 'Optional road stop if you want to break the drive and add Czech beer culture before the spa town.', 50.1749, 13.7751, '20–35 min'),
          stop('Mill Colonnade and Hot Spring Colonnade', 'The core of Karlovy Vary: covered walkways, mineral springs and the city’s elegant spa architecture.', 50.2228, 12.8838, '1.5–2h'),
          stop('Diana Lookout Tower', 'A forested viewpoint above the town. It gives the route a visual finish instead of only walking the promenade.', 50.2191, 12.8728, '45–75 min')
        ],
        food: [
          foodStop('Restaurant Promenáda', 'Classic / polished Czech-European', 'Good if you want a more elegant lunch in the spa-town style.', '€€€'),
          foodStop('Le Marché Karlovy Vary', 'Modern European', 'Better for a slower food-focused stop rather than a quick bite.', '€€€'),
          foodStop('Grandhotel Pupp Café', 'Coffee / dessert', 'Use this as a historic café stop even if you do not eat a full meal.', '€€')
        ],
        parking: 'Use central paid parking and walk the spa promenade. Do not try to move the car between every colonnade.',
        bestFor: 'Couples, architecture, relaxed full-day travel, café stops.',
        tip: 'Taste the mineral springs, but do it slowly. The flavor is strong and part of the experience, not a normal drink.'
      },
      he: {
        title: 'מסלול הספא של קרלובי וארי',
        subtitle: 'יום רכב מלא לעיירת ספא צ׳כית: קולונדות, מעיינות חמים, תצפית ובתי קפה קלאסיים.',
        why: 'זה מסלול שמתאים לרכב כי קרלובי וארי היא לא “נקודה אחת”. הערך הוא לנוע בנחת בין טיילת הספא, המעיינות, בתי הקפה ותצפית Diana בלי להיות תלוי בשעת רכבת חזרה.',
        stops: [
          stop('מבשלת Krušovice / עצירת דרך', 'עצירה אופציונלית לשבירת הנסיעה ולהוספת תרבות בירה צ׳כית לפני עיירת הספא.', 50.1749, 13.7751, '20–35 דקות'),
          stop('Mill Colonnade ו־Hot Spring Colonnade', 'הלב של קרלובי וארי: קולונדות מקורות, מעיינות מינרליים ואדריכלות ספא אלגנטית.', 50.2228, 12.8838, '1.5–2 שעות'),
          stop('Diana Lookout Tower', 'תצפית מיוערת מעל העיר שנותנת למסלול סיום ויזואלי ולא רק הליכה בטיילת.', 50.2191, 12.8728, '45–75 דקות')
        ],
        food: [
          foodStop('Restaurant Promenáda', 'צ׳כי־אירופאי קלאסי / אלגנטי', 'מתאים אם רוצים ארוחת צהריים יותר מוקפדת באווירת עיירת ספא.', '€€€'),
          foodStop('Le Marché Karlovy Vary', 'אירופאי מודרני', 'מתאים לעצירה איטית יותר למי שמחפש אוכל איכותי ולא רק ביס מהיר.', '€€€'),
          foodStop('Grandhotel Pupp Café', 'קפה / קינוח', 'עצירת קפה היסטורית גם אם לא אוכלים ארוחה מלאה.', '€€')
        ],
        parking: 'להשתמש בחניה בתשלום במרכז וללכת ברגל בטיילת. לא להזיז את הרכב בין כל קולונדה.',
        bestFor: 'זוגות, אדריכלות, יום רגוע, קפה וקינוחים.',
        tip: 'לטעום מהמעיינות לאט. הטעם מינרלי וחזק — זו חוויה, לא שתייה רגילה.'
      }
    }),
    routePack('prg-car-kutna-hora', 'prague', 'Kutná Hora Bones & Silver Route', 49.9484, 15.2682, 1.3, 7, ['UNESCO','history','parking'], {
      en: { title:'Kutná Hora Bones & Silver Route', subtitle:'A compact history day: bone chapel, Gothic cathedral and a medieval silver-town story.', why:'Kutná Hora works well by car because the important stops are spread enough that a flexible route saves energy. The day has a clear theme: wealth from silver, Gothic power and the strange beauty of Sedlec Ossuary.', stops:[stop('Sedlec Ossuary','The famous bone chapel. It is small, intense and should be treated as a historical site, not just a photo gimmick.',49.9619,15.2888,'35–50 min'),stop('Cathedral of St. Barbara','A major Gothic church built for the mining town’s identity and wealth. This is the architectural anchor of the day.',49.9446,15.2631,'45–75 min'),stop('Italian Court / old town walk','Adds the silver-minting and medieval-town layer so the day is not only the ossuary.',49.9489,15.2685,'45–90 min')], food:[foodStop('Dačický Restaurant','Czech pub food','Good for a traditional lunch after the cathedral walk. Order hearty Czech dishes rather than trying to keep it fancy.','€€'),foodStop('Factory Bistro','Casual modern bistro','Better for a lighter or quicker stop.','€€'),foodStop('Café 21','Coffee / cake','Use this as a short break in the old town.','€')], parking:'Park once near Sedlec for the ossuary, then drive or park near the old town/cathedral area.', bestFor:'History, UNESCO, half-to-full day without a very long drive.', tip:'Do the ossuary early if possible; it is much stronger when it is not crowded.'},
      he: { title:'מסלול העצמות והכסף של קוטנה הורה', subtitle:'יום היסטורי מרוכז: כנסיית עצמות, קתדרלה גותית וסיפור של עיר כסף מימי הביניים.', why:'קוטנה הורה מתאימה לרכב כי התחנות החשובות מספיק מפוזרות כדי שרכב יחסוך עייפות. יש ליום נושא ברור: עושר ממכרות כסף, כוח גותי והיופי המוזר של כנסיית העצמות.', stops:[stop('Sedlec Ossuary','כנסיית העצמות המפורסמת. קטנה, חזקה וצריך להתייחס אליה כאתר היסטורי — לא רק גימיק לצילום.',49.9619,15.2888,'35–50 דקות'),stop('קתדרלת St. Barbara','כנסייה גותית גדולה שנבנתה סביב הזהות והעושר של עיר המכרות. זו העוגן האדריכלי של היום.',49.9446,15.2631,'45–75 דקות'),stop('Italian Court / הליכה בעיר העתיקה','מוסיף את שכבת מטבעות הכסף והעיר מימי הביניים כדי שהיום לא יהיה רק כנסיית העצמות.',49.9489,15.2685,'45–90 דקות')], food:[foodStop('Dačický Restaurant','אוכל צ׳כי בפאב מסורתי','מתאים לארוחה צ׳כית אחרי הקתדרלה. להזמין מנות ביתיות וכבדות יותר.', '€€'),foodStop('Factory Bistro','ביסטרו מודרני וקז׳ואלי','טוב לעצירה קלילה ומהירה יותר.', '€€'),foodStop('Café 21','קפה / עוגה','עצירת קפה קצרה בעיר העתיקה.', '€')], parking:'חניה אחת באזור Sedlec לכנסיית העצמות ואז מעבר ברכב/חניה באזור העיר העתיקה והקתדרלה.', bestFor:'היסטוריה, UNESCO, יום לא ארוך מדי מחוץ לפראג.', tip:'להגיע לכנסיית העצמות מוקדם; היא חזקה יותר כשאין עומס.'}
    }),
    routePack('prg-car-cesky-krumlov', 'prague', 'Český Krumlov South Bohemia Route', 48.8127, 14.3175, 2.6, 10, ['romantic','castle','long-day'], {
      en:{title:'Český Krumlov South Bohemia Route',subtitle:'A long but memorable car day: castle views, river bends, old lanes and South Bohemian food.',why:'This route is worth it only if you want a full fairy-tale town day. By car you can make the long distance smarter by adding Hluboká Castle or a proper food stop instead of treating Krumlov as a rushed dot.',stops:[stop('Hluboká Castle','A white romantic castle that works as a strong first stop and breaks the long drive south.',49.0523,14.4415,'45–90 min'),stop('Český Krumlov Castle Viewpoint','The classic high view over the red roofs and river bend. This is why the town feels different from Prague.',48.8129,14.3152,'45–75 min'),stop('Old Town and Vltava river bend','Slow lanes, bridges and river views. The town is small but the atmosphere is the point.',48.8107,14.3150,'2–3h')],food:[foodStop('Papa’s Living Restaurant','Italian / riverside casual','Good if you want a relaxed river-side meal with broad appeal.', '€€'),foodStop('Krčma v Šatlavské ulici','Medieval-style Czech grill','Choose it for atmosphere and meat-heavy Czech food, not for a quiet light lunch.', '€€'),foodStop('MLS Creperie','Dessert / quick sweet stop','Useful between viewpoints and the old town walk.', '€')],parking:'Use official edge-of-town parking and walk in. Do not try to enter the historic core by car.',bestFor:'Couples, photography, long scenic days.',tip:'Leave early and avoid returning too late; the drive back is long after a heavy walking day.'},
      he:{title:'מסלול דרום בוהמיה וצ׳סקי קרומלוב',subtitle:'יום רכב ארוך אבל זכור: תצפיות טירה, נהר מתעקל, סמטאות ואוכל דרום־בוהמי.',why:'המסלול שווה רק אם רוצים יום מלא של עיירת אגדה. ברכב אפשר להפוך את המרחק לחכם יותר עם עצירה בטירת Hluboká או ארוחה טובה, במקום לנסוע לקרומלוב כנקודה חפוזה.',stops:[stop('טירת Hluboká','טירה לבנה ורומנטית שמייצרת עצירה חזקה ושוברת את הנסיעה דרומה.',49.0523,14.4415,'45–90 דקות'),stop('תצפית טירת Český Krumlov','המבט הקלאסי על הגגות האדומים ועיקול הנהר. זו הסיבה שהעיירה מרגישה אחרת מפראג.',48.8129,14.3152,'45–75 דקות'),stop('העיר העתיקה ועיקול הוולטאבה','סמטאות איטיות, גשרים ונוף נהר. העיירה קטנה אבל האווירה היא העיקר.',48.8107,14.3150,'2–3 שעות')],food:[foodStop('Papa’s Living Restaurant','איטלקי / קז׳ואל ליד הנהר','מתאים לארוחה רגועה ליד המים עם תפריט רחב.', '€€'),foodStop('Krčma v Šatlavské ulici','גריל צ׳כי בסגנון ימי ביניים','לבחור בשביל האווירה והאוכל הבשרי, לא בשביל צהריים קלילים ושקטים.', '€€'),foodStop('MLS Creperie','קינוח / עצירה מתוקה','טוב בין תצפיות לשיטוט בעיר.', '€')],parking:'להשתמש בחניונים הרשמיים בשולי העיר וללכת פנימה. לא להיכנס עם רכב לגרעין ההיסטורי.',bestFor:'זוגות, צילום, יום נופי ארוך.',tip:'לצאת מוקדם ולא לחזור מאוחר מדי; הנהיגה חזרה ארוכה אחרי יום הליכה.'}
    }),
    routePack('prg-car-karlstejn-velka', 'prague', 'Karlštejn & Velká Amerika Loop', 49.96, 14.204, 0.9, 6, ['castle','quarry','short-day','parking'], {
      en: { title:'Karlštejn & Velká Amerika Loop', subtitle:'A short star-trip from Prague: medieval castle first, dramatic quarry viewpoint after.', why:'This is the logical short car day when you want something outside Prague but not a full expedition. Karlštejn gives the historic castle story, while Velká Amerika adds a completely different visual punch — a turquoise flooded quarry that feels far from the city.', stops:[stop('Karlštejn Castle','Classic castle climb and medieval atmosphere close to Prague.',49.9394,14.1883,'1.5–2.5h'),stop('Velká Amerika viewpoint','Flooded limestone quarry; the visual reason to add this route.',49.96,14.204,'30–60 min'),stop('Beroun old town','Practical food and coffee stop before returning.',49.964,14.073,'45–75 min')], food:[foodStop('Blackdog Beroun','Burgers / casual','Good road-trip food when you do not want heavy Czech lunch.','€€'),foodStop('Local Czech pub in Beroun','Czech local','Better for traditional dishes near the loop.','€€'),foodStop('Castle village café','Coffee / cake','Use before or after the castle climb.','€')], parking:'Use official village/viewpoint parking only; avoid improvised roadside parking.', bestFor:'Short car day, couples, castle views, photography.', tip:'Do the castle first and the quarry later; the quarry is a viewpoint, not a swimming stop.' },
      he: { title:'לולאת Karlštejn ו־Velká Amerika', subtitle:'טיול כוכב קצר מפראג: קודם טירה מימי הביניים ואז מחצבה דרמטית.', why:'זה יום רכב קצר והגיוני כשרוצים לצאת מפראג בלי להפוך את היום למסע ארוך. Karlštejn נותנת את סיפור הטירה ההיסטורית, ו־Velká Amerika מוסיפה מכת נוף אחרת לגמרי — מחצבת טורקיז שנראית רחוקה מהעיר.', stops:[stop('טירת Karlštejn','עלייה קלאסית לטירה ואווירת ימי ביניים קרוב לפראג.',49.9394,14.1883,'1.5–2.5 שעות'),stop('תצפית Velká Amerika','מחצבת גיר מוצפת; הסיבה הוויזואלית להוסיף את המסלול.',49.96,14.204,'30–60 דקות'),stop('העיר Beroun','עצירת אוכל וקפה פרקטית לפני החזרה.',49.964,14.073,'45–75 דקות')], food:[foodStop('Blackdog Beroun','המבורגרים / קז׳ואל','אוכל דרך טוב כשלא רוצים ארוחה צ׳כית כבדה.','€€'),foodStop('Local Czech pub in Beroun','צ׳כי מקומי','טוב יותר למנות מסורתיות באזור הלולאה.','€€'),foodStop('Castle village café','קפה / עוגה','עצירה לפני או אחרי העלייה לטירה.','€')], parking:'להשתמש רק בחניות מוסדרות בכפר ובתצפית; לא לחנות באלתור בשולי כביש.', bestFor:'יום רכב קצר, זוגות, טירות, צילום.', tip:'לעשות את הטירה קודם ואת המחצבה אחר כך; זו תצפית, לא מקום רחצה.' }
    }),
    routePack('prg-car-pruhonice-sazava', 'prague', 'Průhonice Park & Sázava Monastery Day', 50.0, 14.557, 0.8, 6, ['park','monastery','easy','parking'], {
      en: { title:'Průhonice Park & Sázava Monastery Day', subtitle:'A softer green day: landscaped park, lakes, river monastery and countryside food.', why:'Choose this route when you want beauty without a tiring drive. Průhonice is a slow garden-and-lake experience, while Sázava adds a quiet historical layer beside the river.', stops:[stop('Průhonice Park','Large landscaped park with lakes, bridges and seasonal flowers.',50.0,14.557,'1.5–2.5h'),stop('Sázava Monastery','Historic monastery by the river; a calm cultural layer.',49.872,14.895,'45–75 min'),stop('Sázava river pause','Short walk or coffee near the river before heading back.',49.872,14.895,'20–40 min')], food:[foodStop('Průhonice village restaurant','Czech / casual','Practical lunch close to the park.','€€'),foodStop('Park café','Café / light food','Good for cake or coffee before leaving.','€'),foodStop('Sázava local pub','Countryside Czech','Use if lunch near the monastery fits better.','€€')], parking:'Both areas are easier by car than by public transport; use official car parks.', bestFor:'Families, easy walking, low-stress days, nature without hiking.', tip:'Do not overload it. The value is the calm pace.' },
      he: { title:'יום Průhonice Park ומנזר Sázava', subtitle:'יום ירוק ורך: פארק נופי, אגמים, מנזר על הנהר ואוכל כפרי.', why:'לבחור במסלול הזה כשרוצים יופי בלי נסיעה מעייפת. Průhonice הוא חוויית גנים ואגמים איטית, ו־Sázava מוסיף שכבה היסטורית שקטה ליד הנהר.', stops:[stop('Průhonice Park','פארק נופי גדול עם אגמים, גשרים ופריחה עונתית.',50.0,14.557,'1.5–2.5 שעות'),stop('מנזר Sázava','מנזר היסטורי ליד הנהר; שכבה תרבותית רגועה.',49.872,14.895,'45–75 דקות'),stop('עצירת נהר Sázava','הליכה קצרה או קפה ליד הנהר לפני החזרה.',49.872,14.895,'20–40 דקות')], food:[foodStop('Průhonice village restaurant','צ׳כי / קז׳ואל','ארוחת צהריים פרקטית ליד הפארק.','€€'),foodStop('Park café','קפה / אוכל קל','טוב לקפה או עוגה לפני שיוצאים.','€'),foodStop('Sázava local pub','אוכל כפרי צ׳כי','מתאים אם רוצים לאכול ליד המנזר.','€€')], parking:'שני האזורים נוחים יותר ברכב מאשר בתחבורה ציבורית; להשתמש בחניות רשמיות.', bestFor:'משפחות, הליכה קלה, יום רגוע, טבע בלי טרק.', tip:'לא להעמיס. הערך הוא הקצב הרגוע.' }
    }),
    routePack('prg-car-terezin-melnik', 'prague', 'Terezín Memorial & Mělník River Route', 50.511, 14.1505, 1.0, 7, ['history','river','serious','parking'], {
      en: { title:'Terezín Memorial & Mělník River Route', subtitle:'A serious history visit balanced with a softer river-and-wine town.', why:'Terezín is emotionally heavy, so the route should not end there. Mělník gives a calmer second half: river views, wine-town atmosphere and a place to process the memorial before returning.', stops:[stop('Terezín Memorial','A painful World War II site; visit with time and respect.',50.511,14.1505,'2–3h'),stop('Mělník viewpoint','View over the meeting of the Vltava and Elbe rivers.',50.3505,14.4741,'45–75 min'),stop('Mělník old town','Short walk, coffee or wine stop before returning.',50.3505,14.4741,'45–75 min')], food:[foodStop('Mělník wine restaurant','Czech / wine town','Good after Terezín when you want a calmer sit-down meal.','€€'),foodStop('Café in Mělník square','Coffee / cake','Light emotional reset after the memorial.','€'),foodStop('Simple lunch near Terezín','Practical Czech','Only if you need to eat before continuing.','€')], parking:'Parking is straightforward at both stops compared with Prague.', bestFor:'History-focused travelers; not a light fun day.', tip:'Keep the day respectful; do not combine it with party/nightlife plans.' },
      he: { title:'מסלול אתר הזיכרון Terezín ונהרות Mělník', subtitle:'ביקור היסטורי כבד שמאוזן בעיירת נהרות ויין רגועה יותר.', why:'Terezín כבד רגשית, ולכן לא נכון לסיים שם את היום. Mělník נותנת חצי שני רגוע יותר: תצפית נהרות, אווירת עיירת יין ומקום לעכל את אתר הזיכרון לפני החזרה.', stops:[stop('אתר הזיכרון Terezín','אתר כואב ממלחמת העולם השנייה; לבקר בזמן ובכבוד.',50.511,14.1505,'2–3 שעות'),stop('תצפית Mělník','מבט על מפגש נהרות הוולטאבה והאלבה.',50.3505,14.4741,'45–75 דקות'),stop('העיר העתיקה Mělník','הליכה קצרה, קפה או יין לפני החזרה.',50.3505,14.4741,'45–75 דקות')], food:[foodStop('Mělník wine restaurant','צ׳כי / עיירת יין','מתאים אחרי Terezín כשצריך ארוחה רגועה.','€€'),foodStop('Café in Mělník square','קפה / עוגה','עצירה קלה לאיפוס אחרי אתר הזיכרון.','€'),foodStop('Simple lunch near Terezín','צ׳כי פרקטי','רק אם צריך לאכול לפני שממשיכים.','€')], parking:'החניה פשוטה בשתי התחנות יחסית לפראג.', bestFor:'מטיילים שרוצים היסטוריה; לא יום קליל ושמח.', tip:'לשמור על אופי מכבד; לא לשלב עם תוכניות בילוי.' }
    }),
    routePack('prg-car-bohemian-paradise', 'prague', 'Bohemian Paradise Rocks Route', 50.514, 15.17, 1.5, 8, ['nature','hiking','car-best','parking'], {
      en: { title:'Bohemian Paradise Rocks Route', subtitle:'A landscape day with sandstone towers, forest trails and castle viewpoints.', why:'This is the Prague escape for people who want nature instead of another town. A car matters because the viewpoints, trailheads and food stops are spread across the region.', stops:[stop('Prachov Rocks','Sandstone formations and forest paths; the main walking stop.',50.467,15.283,'2–3h'),stop('Hrubá Skála viewpoint','Castle-and-rock landscape view that gives the region its postcard look.',50.544,15.193,'30–60 min'),stop('Jičín town square','Practical old-town food stop before or after the rocks.',50.437,15.351,'45–75 min')], food:[foodStop('Restaurant in Jičín','Czech / casual','Best practical lunch base for the rock area.','€€'),foodStop('Trailhead kiosk','Simple snacks','Use only as a quick bite.','€'),foodStop('Castle-area restaurant','Regional / view stop','Check opening hours before relying on it.','€€')], parking:'Use official trailhead parking only; avoid forest-road parking.', bestFor:'Nature, hiking, active day, photography.', tip:'Wear shoes with grip; sandstone paths can be slippery after rain.' },
      he: { title:'מסלול הסלעים של Bohemian Paradise', subtitle:'יום נוף עם מגדלי אבן חול, שבילי יער ותצפיות טירה.', why:'זו הבריחה מפראג למי שרוצה טבע במקום עוד עיר. רכב חשוב כאן כי התצפיות, תחילת השבילים ועצירות האוכל מפוזרות באזור.', stops:[stop('Prachov Rocks','תצורות אבן חול ושבילי יער; תחנת ההליכה המרכזית.',50.467,15.283,'2–3 שעות'),stop('תצפית Hrubá Skála','נוף טירה וסלעים שנותן לאזור מראה של גלויה.',50.544,15.193,'30–60 דקות'),stop('כיכר Jičín','עצירת אוכל בעיר עתיקה לפני או אחרי הסלעים.',50.437,15.351,'45–75 דקות')], food:[foodStop('Restaurant in Jičín','צ׳כי / קז׳ואל','בסיס הצהריים הכי פרקטי לאזור הסלעים.','€€'),foodStop('Trailhead kiosk','נשנושים פשוטים','מתאים רק לביס מהיר.','€'),foodStop('Castle-area restaurant','אזורי / עצירת נוף','לבדוק שעות לפני שמסתמכים על זה.','€€')], parking:'להשתמש רק בחניוני שבילים רשמיים; לא לחנות בדרכי יער.', bestFor:'טבע, הליכה, יום פעיל, צילום.', tip:'נעליים עם אחיזה; שבילי אבן חול מחליקים אחרי גשם.' }
    }),
    routePack('prg-car-pilsen', 'prague', 'Pilsen Beer & Old Square Route', 49.7384, 13.3736, 1.2, 6, ['beer','city','easy','parking'], {
      en: { title:'Pilsen Beer & Old Square Route', subtitle:'An easy westbound city day for beer culture, a grand square and Czech urban life outside Prague.', why:'Pilsen is useful when you want a city day without Prague crowds. The route connects beer history, a real town square and easier food stops.', stops:[stop('Pilsner Urquell Brewery area','The beer-history anchor of the day.',49.747,13.386,'1.5–2.5h'),stop('Republic Square','Large central square and orientation point.',49.7475,13.3776,'45–75 min'),stop('Great Synagogue exterior','Strong architectural stop that adds another city layer.',49.7465,13.3738,'20–40 min')], food:[foodStop('Na Spilce','Czech brewery restaurant','The obvious beer-and-food match near the brewery.','€€'),foodStop('Lokál Pod Divadlem','Czech pub','Reliable central Czech dishes.','€€'),foodStop('Republic Square café','Coffee / dessert','Good reset between brewery and city walk.','€')], parking:'Use city garages. Do not drink and drive after brewery tasting.', bestFor:'Friends, beer culture, easy city day.', tip:'If tasting beer, assign a non-drinking driver or return by train.' },
      he: { title:'מסלול הבירה והכיכר של פילזן', subtitle:'יום עירוני קל מערבה לתרבות בירה, כיכר גדולה וחיים צ׳כיים מחוץ לפראג.', why:'פילזן טובה כשרוצים יום עירוני בלי עומסי פראג. המסלול מחבר היסטוריית בירה, כיכר עיר אמיתית ועצירות אוכל נוחות.', stops:[stop('אזור מבשלת Pilsner Urquell','עוגן היסטוריית הבירה של היום.',49.747,13.386,'1.5–2.5 שעות'),stop('Republic Square','כיכר מרכזית גדולה ונקודת התמצאות.',49.7475,13.3776,'45–75 דקות'),stop('חזית Great Synagogue','עצירה אדריכלית חזקה שמוסיפה שכבה עירונית.',49.7465,13.3738,'20–40 דקות')], food:[foodStop('Na Spilce','מסעדת מבשלה צ׳כית','החיבור הברור בין בירה לאוכל ליד המבשלה.','€€'),foodStop('Lokál Pod Divadlem','פאב צ׳כי','מנות צ׳כיות אמינות במרכז.','€€'),foodStop('Republic Square café','קפה / קינוח','עצירת איפוס בין המבשלה לעיר.','€')], parking:'להשתמש בחניוני העיר. לא לשתות ולנהוג אחרי טעימות במבשלה.', bestFor:'חברים, תרבות בירה, יום עירוני קל.', tip:'אם טועמים בירה, לקבוע נהג שלא שותה או לחזור ברכבת.' }
    })
  ],
  vienna: [
    routePack('vie-car-wachau', 'vienna', 'Wachau Danube & Wine Route', 48.3890, 15.5430, 1.3, 8, ['wine','danube','abbey','parking'], {
      en:{title:'Wachau Danube & Wine Route',subtitle:'The most logical Vienna car day: abbey, Danube bends, wine villages and apricot desserts.',why:'Wachau is where a car adds real value. You can connect Melk, Dürnstein, viewpoints and food stops without turning the day into a train timetable puzzle.',stops:[stop('Melk Abbey','A huge baroque abbey above the Danube. It gives the route a grand opening and historical weight.',48.2297,15.3319,'75–120 min'),stop('Dürnstein village','Blue church tower, lanes, wine shops and the Richard the Lionheart legend above the village.',48.3950,15.5197,'60–90 min'),stop('Danube viewpoint / vineyard road','Use the car for one scenic pause between villages rather than only driving point to point.',48.3987,15.5256,'20–40 min')],food:[foodStop('Loibnerhof','Austrian / Wachau wine-country','A stronger food stop if you want regional cooking and wine-country atmosphere.', '€€€'),foodStop('Hofmeisterei Hirtzberger','Refined regional cooking','Best for a planned, slower lunch; check opening/reservation.', '€€€'),foodStop('Local apricot dessert stop','Café / bakery','Wachau is known for apricots; use a bakery/café stop for Marillen desserts.', '€')],parking:'Park outside small village cores. In Dürnstein, expect limited spaces in high season.',bestFor:'Couples, wine, scenery, first serious car day from Vienna.',tip:'Do not overload the route. Melk + Dürnstein + one meal is already a complete day.'},
      he:{title:'מסלול הדנובה והיין של Wachau',subtitle:'יום הרכב הכי הגיוני מווינה: מנזר, פיתולי דנובה, כפרי יין וקינוחי משמש.',why:'ב־Wachau רכב באמת מוסיף ערך. אפשר לחבר את Melk, Dürnstein, תצפיות ועצירות אוכל בלי להפוך את היום לפאזל רכבות.',stops:[stop('מנזר Melk','מנזר בארוק ענק מעל הדנובה. נותן פתיחה מרשימה ומשקל היסטורי למסלול.',48.2297,15.3319,'75–120 דקות'),stop('הכפר Dürnstein','מגדל כנסייה כחול, סמטאות, חנויות יין והאגדה על ריצ׳רד לב הארי מעל הכפר.',48.3950,15.5197,'60–90 דקות'),stop('תצפית דנובה / דרך כרמים','להשתמש ברכב לעצירת נוף אחת בין הכפרים ולא רק לנסוע מנקודה לנקודה.',48.3987,15.5256,'20–40 דקות')],food:[foodStop('Loibnerhof','אוסטרי / אזור יין Wachau','עצירת אוכל חזקה אם רוצים בישול אזורי ואווירת כרמים.', '€€€'),foodStop('Hofmeisterei Hirtzberger','מטבח אזורי מוקפד','מתאים לארוחת צהריים מתוכננת ואיטית; לבדוק פתיחה והזמנה.', '€€€'),foodStop('עצירת קינוח משמש מקומית','קפה / מאפייה','האזור ידוע במשמשים; כדאי לעצור לקינוחי Marillen.', '€')],parking:'לחנות מחוץ לגרעיני הכפרים. בדירנשטיין החניה מוגבלת בעונה.',bestFor:'זוגות, יין, נוף, יום רכב ראשון רציני מווינה.',tip:'לא להעמיס. Melk + Dürnstein + ארוחה אחת הם כבר יום שלם.'}
    }),
    routePack('vie-car-carnuntum', 'vienna', 'Carnuntum Roman Frontier Route', 48.1120, 16.8630, 1.0, 6, ['roman','history','family','parking'], {
      en:{title:'Carnuntum Roman Frontier Route',subtitle:'A focused history day east of Vienna: reconstructed Roman houses, frontier archaeology and a Danube-side town stop.',why:'Carnuntum is not another museum room. The reason to go is that you can walk through reconstructed Roman life near the old Danube frontier and understand Vienna’s region before modern Austria.',stops:[stop('Carnuntum Roman City Quarter','Reconstructed Roman houses, baths and everyday life. This is the heart of the route.',48.1120,16.8630,'2–3h'),stop('Museum Carnuntinum','Adds artifacts and context so the site feels like a real city, not just reconstructed walls.',48.1158,16.8652,'45–75 min'),stop('Hainburg an der Donau','A compact old town by the Danube for a walk, coffee or meal after the Roman site.',48.1460,16.9456,'45–90 min')],food:[foodStop('Restaurant in Hainburg old town','Austrian / Central European','Good practical lunch after Carnuntum; choose Hainburg if you want a real town stop.', '€€'),foodStop('Heuriger / wine tavern nearby','Wine tavern / cold plates','Works if open and you want a local countryside feel.', '€€'),foodStop('Café stop in Hainburg','Coffee / cake','Easy option if the day is more sightseeing than dining.', '€')],parking:'Carnuntum is car-friendly with visitor parking; Hainburg is easier than central Vienna.',bestFor:'History lovers, families, people who want a meaningful short car day.',tip:'Read the site order before arrival; the experience is stronger when you understand that this was a frontier city, not a theme park.'},
      he:{title:'מסלול הגבול הרומי של Carnuntum',subtitle:'יום היסטוריה ממוקד ממזרח לווינה: בתים רומיים משוחזרים, ארכיאולוגיה ועיירת דנובה.',why:'Carnuntum הוא לא עוד חדר מוזיאון. הסיבה להגיע היא שאפשר ללכת בתוך חיי יום־יום רומיים משוחזרים ליד גבול הדנובה ולהבין את האזור של וינה הרבה לפני אוסטריה המודרנית.',stops:[stop('הרובע הרומי המשוחזר Carnuntum','בתים, מרחצאות וחיי יום־יום רומיים משוחזרים. זה הלב של המסלול.',48.1120,16.8630,'2–3 שעות'),stop('Museum Carnuntinum','מוסיף ממצאים והקשר כדי שהאתר ירגיש כמו עיר אמיתית ולא רק קירות משוחזרים.',48.1158,16.8652,'45–75 דקות'),stop('Hainburg an der Donau','עיירה קטנה על הדנובה להליכה, קפה או ארוחה אחרי האתר הרומי.',48.1460,16.9456,'45–90 דקות')],food:[foodStop('מסעדה בעיר העתיקה של Hainburg','אוסטרי / מרכז אירופאי','עצירת צהריים פרקטית אחרי Carnuntum; לבחור בהיינבורג אם רוצים עיירה אמיתית במסלול.', '€€'),foodStop('Heuriger / טברנת יין באזור','יין / מנות קרות','מתאים אם פתוח ורוצים תחושה כפרית מקומית.', '€€'),foodStop('קפה ב־Hainburg','קפה / עוגה','אפשרות קלה אם היום יותר היסטוריה מאוכל.', '€')],parking:'Carnuntum נוח לרכב עם חניית מבקרים; Hainburg פשוטה בהרבה ממרכז וינה.',bestFor:'חובבי היסטוריה, משפחות, מי שרוצה יום רכב קצר עם משמעות.',tip:'להבין מראש את סדר האתר; החוויה חזקה יותר כשמבינים שזו הייתה עיר גבול ולא פארק שעשועים.'}
    }),
    routePack('vie-car-hallstatt', 'vienna', 'Hallstatt Lakes Route', 47.5622, 13.6493, 3.4, 11, ['lake','mountain','iconic','long-day'], {
      en:{title:'Hallstatt Lakes Route',subtitle:'A very long but iconic alpine day: lake viewpoints, old village lanes and a serious early start.',why:'Hallstatt is not the most efficient day trip from Vienna, but it is one of Austria’s strongest images. By car, the route becomes more realistic because you can stop at lakes and control timing.',stops:[stop('Traunsee / Gmunden road break','Use the lake area as a scenic pause so the route is not just a long highway push.',47.9180,13.7990,'20–45 min'),stop('Hallstatt classic viewpoint','The famous lakefront view with village, church and mountain behind it.',47.5622,13.6493,'30–45 min'),stop('Hallstatt old village / lake walk','Slow walk through the village and along the water. This is the emotional core of the day.',47.5613,13.6480,'1.5–2.5h'),stop('Skywalk or salt mine option','Only add this if you started early; otherwise it makes the day too heavy.',47.5628,13.6424,'1.5–3h')],food:[foodStop('Braugasthof Hallstatt','Austrian / local inn','Classic local choice for a proper meal near the lake.', '€€'),foodStop('Seecafé Hallstatt','Coffee / lake view','Better for coffee and cake with scenery than for a heavy meal.', '€€'),foodStop('Rudolfsturm','View restaurant','Use it if you go up toward the Skywalk and want the view to be part of lunch.', '€€€')],parking:'Use official Hallstatt parking lots and shuttle/walk system. Do not expect easy parking inside the village.',bestFor:'Photography, first-time Austria, travelers who accept a very long day.',tip:'Leave before sunrise if possible. If you arrive at midday, crowds can damage the whole experience.'},
      he:{title:'מסלול האגמים של Hallstatt',subtitle:'יום אלפיני ארוך מאוד אבל אייקוני: תצפיות אגם, סמטאות כפר ויציאה מוקדמת באמת.',why:'Hallstatt הוא לא טיול היום הכי יעיל מווינה, אבל הוא אחד הדימויים החזקים של אוסטריה. ברכב המסלול נהיה ריאלי יותר כי אפשר לעצור באגמים ולשלוט בזמנים.',stops:[stop('Traunsee / Gmunden עצירת דרך','להשתמש באזור האגם כעצירת נוף כדי שהנסיעה לא תהיה רק כביש ארוך.',47.9180,13.7990,'20–45 דקות'),stop('נקודת הצילום הקלאסית של Hallstatt','המבט המפורסם על הכפר, הכנסייה, האגם וההר.',47.5622,13.6493,'30–45 דקות'),stop('הכפר העתיק והליכה ליד האגם','שיטוט איטי בכפר ולאורך המים. זה הלב הרגשי של היום.',47.5613,13.6480,'1.5–2.5 שעות'),stop('Skywalk או מכרה מלח','להוסיף רק אם יצאתם מוקדם; אחרת זה הופך את היום לכבד מדי.',47.5628,13.6424,'1.5–3 שעות')],food:[foodStop('Braugasthof Hallstatt','אוסטרי / פונדק מקומי','בחירה קלאסית לארוחה מסודרת ליד האגם.', '€€'),foodStop('Seecafé Hallstatt','קפה / נוף אגם','יותר מתאים לקפה ועוגה עם נוף מאשר לארוחה כבדה.', '€€'),foodStop('Rudolfsturm','מסעדת תצפית','מתאים אם עולים לכיוון ה־Skywalk ורוצים שהנוף יהיה חלק מהארוחה.', '€€€')],parking:'להשתמש בחניונים הרשמיים ובמערכת השאטל/הליכה. לא לצפות לחניה נוחה בתוך הכפר.',bestFor:'צילום, ביקור ראשון באוסטריה, מי שמוכן ליום ארוך מאוד.',tip:'לצאת לפני הזריחה אם אפשר. הגעה בצהריים יכולה להרוס את החוויה בגלל עומס.'}
    }),
    routePack('vie-car-laxenburg-baden', 'vienna', 'Laxenburg Park & Baden Spa Loop', 48.0686, 16.3567, 0.6, 6, ['park','spa','easy','parking'], {
      en: { title:'Laxenburg Park & Baden Spa Loop', subtitle:'A short elegant day: imperial park, lake paths and a classic spa town.', why:'This route is ideal when you want a beautiful day without a long drive. Laxenburg gives palace-park scenery; Baden adds cafés, spa-town streets and a softer Vienna-region mood.', stops:[stop('Laxenburg Castle Park','Imperial park with lakes, bridges and Franzensburg views.',48.0686,16.3567,'1.5–2.5h'),stop('Baden old town','Spa-town streets and café culture.',48.0058,16.2326,'1–1.5h'),stop('Kurpark Baden','Green park stop that fits the spa mood.',48.009,16.235,'30–60 min')], food:[foodStop('Café Central Baden','Coffee / cake','Classic spa-town café pause.','€€'),foodStop('Local Heuriger','Wine tavern','Good if open and you want countryside food.','€€'),foodStop('Laxenburg park café','Light food','Simple break inside/near the park.','€')], parking:'Both stops are car-friendly with official paid parking.', bestFor:'Easy day, couples, families, light walking.', tip:'Use it as a low-stress day between heavier city days.' },
      he: { title:'לולאת פארק Laxenburg ועיירת הספא Baden', subtitle:'יום אלגנטי קצר: פארק קיסרי, שבילי אגם ועיירת ספא קלאסית.', why:'זה מסלול אידיאלי כשרוצים יום יפה בלי נהיגה ארוכה. Laxenburg נותן נופי פארק וארמון; Baden מוסיפה בתי קפה, רחובות ספא ואווירה רכה של אזור וינה.', stops:[stop('פארק טירת Laxenburg','פארק קיסרי עם אגמים, גשרים ונוף ל־Franzensburg.',48.0686,16.3567,'1.5–2.5 שעות'),stop('העיר העתיקה Baden','רחובות עיירת ספא ותרבות בתי קפה.',48.0058,16.2326,'1–1.5 שעות'),stop('Kurpark Baden','עצירת פארק ירוקה שמתאימה לאווירת הספא.',48.009,16.235,'30–60 דקות')], food:[foodStop('Café Central Baden','קפה / עוגה','עצירת קפה קלאסית בעיירת ספא.','€€'),foodStop('Local Heuriger','טברנת יין','טוב אם פתוח ורוצים אוכל כפרי.','€€'),foodStop('Laxenburg park café','אוכל קל','הפסקה פשוטה בפארק או לידו.','€')], parking:'שתי התחנות נוחות לרכב עם חניה רשמית בתשלום.', bestFor:'יום קל, זוגות, משפחות, הליכה קלה.', tip:'להשתמש בו כיום רגוע בין ימי עיר כבדים יותר.' }
    }),
    routePack('vie-car-bratislava', 'vienna', 'Bratislava Cross-Border Day', 48.1486, 17.1077, 1.0, 7, ['cross-border','city','easy','parking'], {
      en: { title:'Bratislava Cross-Border Day', subtitle:'Add another country in one day: castle views, old town lanes and Slovak food.', why:'Bratislava changes the rhythm of the trip. In about an hour you leave imperial Vienna and get a smaller, rougher and more relaxed Central European capital.', stops:[stop('Bratislava Castle','Main viewpoint over the Danube and old town.',48.1421,17.1002,'45–75 min'),stop('Old Town and Michael’s Gate','Compact lanes and classic city walk.',48.1459,17.1067,'1.5–2h'),stop('Blue Church','Small but memorable Art Nouveau stop.',48.1436,17.1167,'20–35 min')], food:[foodStop('Slovak Pub','Slovak traditional','Good for local dishes in a casual setting.','€€'),foodStop('Urban House','Modern café / brunch','Good for lighter city food.','€€'),foodStop('Mondieu','Coffee / dessert','Reliable central café stop.','€€')], parking:'Use central garages and verify rental-car cross-border rules.', bestFor:'Easy city day, old-town walk, another country.', tip:'Check rental insurance before crossing into Slovakia.' },
      he: { title:'יום חוצה גבול לברטיסלבה', subtitle:'להוסיף מדינה נוספת ביום אחד: תצפית טירה, סמטאות ואוכל סלובקי.', why:'ברטיסלבה משנה את הקצב של הטיול. בערך בשעה יוצאים מווינה הקיסרית ומקבלים בירה מרכז־אירופית קטנה, מחוספסת ורגועה יותר.', stops:[stop('טירת ברטיסלבה','תצפית מרכזית על הדנובה והעיר העתיקה.',48.1421,17.1002,'45–75 דקות'),stop('העיר העתיקה ושער Michael','סמטאות קומפקטיות והליכת עיר קלאסית.',48.1459,17.1067,'1.5–2 שעות'),stop('הכנסייה הכחולה','עצירה קטנה וזכורה בסגנון אר נובו.',48.1436,17.1167,'20–35 דקות')], food:[foodStop('Slovak Pub','סלובקי מסורתי','טוב למנות מקומיות באווירה קז׳ואלית.','€€'),foodStop('Urban House','קפה מודרני / בראנץ׳','טוב לאוכל עירוני קל יותר.','€€'),foodStop('Mondieu','קפה / קינוח','עצירת קפה מרכזית ואמינה.','€€')], parking:'להשתמש בחניונים מרכזיים ולבדוק כללי מעבר גבול ברכב שכור.', bestFor:'יום עירוני קל, עיר עתיקה, מדינה נוספת.', tip:'לבדוק ביטוח השכרה לפני מעבר לסלובקיה.' }
    }),
    routePack('vie-car-neusiedler-see', 'vienna', 'Neusiedler See Lake & Wine Route', 47.83, 16.75, 1.1, 7, ['lake','wine','flat','parking'], {
      en: { title:'Neusiedler See Lake & Wine Route', subtitle:'Open-sky lake landscapes, reed beds, wine villages and slow countryside rhythm.', why:'This route is not about one famous monument. It is for a different Austrian mood: lake air, flat horizons, wine villages and a relaxed road-trip pace.', stops:[stop('Rust or Mörbisch','Wine/lake village atmosphere and stork rooftops in season.',47.801,16.671,'1–1.5h'),stop('Lake reed viewpoint','Short nature pause to feel the flat lake landscape.',47.83,16.75,'30–60 min'),stop('Eisenstadt old town','Optional palace-town stop on the way back.',47.8464,16.527,'45–75 min')], food:[foodStop('Heuriger in Rust','Wine tavern','Best match for local wine and simple plates.','€€'),foodStop('Fish restaurant by the lake','Fish / lake food','Good if the meal should match the setting.','€€'),foodStop('Café in Eisenstadt','Coffee / cake','Easy return-way stop.','€')], parking:'Generally easier than mountain/village routes, but check lake-season crowds.', bestFor:'Wine, lake scenery, couples, slow day.', tip:'Bring sun protection; the lake area is exposed.' },
      he: { title:'מסלול אגם Neusiedler See ויין', subtitle:'נופי אגם פתוחים, קני סוף, כפרי יין וקצב כפרי איטי.', why:'זה לא מסלול של אנדרטה מפורסמת אחת. זה בשביל אווירה אוסטרית אחרת: אוויר אגם, אופק שטוח, כפרי יין וקצב נסיעה רגוע.', stops:[stop('Rust או Mörbisch','אווירת כפר יין/אגם וגגות עם חסידות בעונה.',47.801,16.671,'1–1.5 שעות'),stop('תצפית קני סוף באגם','עצירת טבע קצרה לנוף האגם השטוח.',47.83,16.75,'30–60 דקות'),stop('העיר העתיקה Eisenstadt','עצירת עיירת ארמון אופציונלית בדרך חזרה.',47.8464,16.527,'45–75 דקות')], food:[foodStop('Heuriger in Rust','טברנת יין','הכי מתאים ליין מקומי וצלחות פשוטות.','€€'),foodStop('Fish restaurant by the lake','דגים / אוכל אגם','טוב אם רוצים שהאוכל יתאים לנוף.','€€'),foodStop('Café in Eisenstadt','קפה / עוגה','עצירה קלה בדרך חזרה.','€')], parking:'בדרך כלל קל יותר ממסלולי הרים/כפרים, אבל לבדוק עומס בעונת האגם.', bestFor:'יין, נופי אגם, זוגות, יום איטי.', tip:'להביא הגנה משמש; האזור חשוף.' }
    }),
    routePack('vie-car-semmering', 'vienna', 'Semmering Railway Mountain Route', 47.643, 15.829, 1.3, 7, ['mountain','railway','view','parking'], {
      en: { title:'Semmering Railway Mountain Route', subtitle:'Mountain air, historic railway engineering and viewpoints without driving deep into the Alps.', why:'Semmering gives you elevation and scenery within a reasonable Vienna day. The story is the railway landscape: 19th-century engineering crossing mountains.', stops:[stop('Semmering pass area','Mountain village atmosphere and railway viewpoints.',47.643,15.829,'1–1.5h'),stop('20-Schilling-Blick','Classic viewpoint linked with the railway scenery.',47.642,15.82,'30–60 min'),stop('Payerbach/Reichenau','Lower-valley coffee or soft walk stop.',47.694,15.862,'45–75 min')], food:[foodStop('Mountain inn','Austrian / alpine','Good for warm mountain-style lunch.','€€'),foodStop('Café in Reichenau','Coffee / cake','Easy return stop.','€'),foodStop('Local gasthaus','Austrian local','Choose by live hours and reviews.','€€')], parking:'Use official viewpoint or railway parking; weather changes quickly.', bestFor:'Views, engineering, mountain mood, moderate walking.', tip:'Skip in fog; the views are the reason to choose it.' },
      he: { title:'מסלול ההרים והרכבת של Semmering', subtitle:'אוויר הרים, הנדסת רכבת היסטורית ותצפיות בלי להיכנס עמוק לאלפים.', why:'Semmering נותן גובה ונוף ביום סביר מווינה. הסיפור הוא נוף הרכבת: הנדסה מהמאה ה־19 שחוצה הרים.', stops:[stop('אזור מעבר Semmering','אווירת כפר הררי ותצפיות רכבת.',47.643,15.829,'1–1.5 שעות'),stop('תצפית 20-Schilling-Blick','תצפית קלאסית הקשורה לנוף הרכבת.',47.642,15.82,'30–60 דקות'),stop('Payerbach/Reichenau','עצירת קפה או הליכה רכה בעמק.',47.694,15.862,'45–75 דקות')], food:[foodStop('Mountain inn','פונדק אוסטרי / אלפיני','טוב לארוחת הרים מחממת.','€€'),foodStop('Café in Reichenau','קפה / עוגה','עצירה קלה בדרך חזרה.','€'),foodStop('Local gasthaus','אוסטרי מקומי','לבחור לפי שעות וביקורות בזמן אמת.','€€')], parking:'להשתמש בחניות תצפית/רכבת רשמיות; מזג האוויר משתנה מהר.', bestFor:'נוף, הנדסה, אווירת הרים, הליכה בינונית.', tip:'לוותר בערפל; התצפיות הן הסיבה לבחור בו.' }
    })
  ],
  strasbourg: [
    routePack('sxb-car-alsace-villages', 'strasbourg', 'Alsace Villages & Wine Route', 48.1660, 7.2970, 1.2, 8, ['alsace','wine','village','parking'], {
      en:{title:'Alsace Villages & Wine Route',subtitle:'The classic car day from Strasbourg: Eguisheim, Riquewihr, vineyard roads and Colmar-style colour.',why:'This is exactly where a car matters. The villages are close to each other but public transport between them is slow, so driving turns scattered postcards into one coherent Alsace day.',stops:[stop('Eguisheim','Circular lanes, flowered half-timbered houses and one of the most compact village walks in Alsace.',48.0420,7.3070,'45–75 min'),stop('Riquewihr','A walled wine village with a single strong main street, wine shops and colourful façades.',48.1660,7.2970,'60–90 min'),stop('Colmar old town / Little Venice','The larger finish: canals, colourful houses and more food options than the small villages.',48.0794,7.3585,'1.5–2.5h')],food:[foodStop('Wistub Brenner, Colmar','Alsatian / traditional','Good for tarte flambée, choucroute-style plates and a local-food finish.', '€€'),foodStop('La Soï, Colmar','Tarte flambée specialist','Focused, casual and useful when you want one clear Alsace dish.', '€€'),foodStop('Village bakery / kougelhopf stop','Bakery / sweets','Add a bakery stop in a village instead of making every pause a restaurant.', '€')],parking:'Use village edge parking. Historic centers are small; walking in is part of the experience.',bestFor:'Couples, photography, wine villages, first Alsace car day.',tip:'Do not try to visit every village. Three stops done slowly are better than six rushed ones.'},
      he:{title:'מסלול כפרי היין של אלזס',subtitle:'יום הרכב הקלאסי משטרסבורג: Eguisheim, Riquewihr, דרכי כרמים וצבעים של Colmar.',why:'כאן בדיוק רכב משנה את החוויה. הכפרים קרובים זה לזה אבל תחבורה ציבורית ביניהם איטית, ולכן נסיעה ברכב הופכת גלויה מפוזרת ליום אלזסי אחד הגיוני.',stops:[stop('Eguisheim','סמטאות מעגליות, בתי עץ עם פרחים ואחד השיטוטים הכפריים המרוכזים באלזס.',48.0420,7.3070,'45–75 דקות'),stop('Riquewihr','כפר יין מוקף חומה עם רחוב ראשי חזק, חנויות יין וחזיתות צבעוניות.',48.1660,7.2970,'60–90 דקות'),stop('Colmar old town / Little Venice','הסיום הגדול יותר: תעלות, בתים צבעוניים ויותר אפשרויות אוכל מהכפרים הקטנים.',48.0794,7.3585,'1.5–2.5 שעות')],food:[foodStop('Wistub Brenner, Colmar','אלזסי / מסורתי','טוב ל־tarte flambée, מנות choucroute ואוכל מקומי לסיום היום.', '€€'),foodStop('La Soï, Colmar','מומחה tarte flambée','ממוקד וקז׳ואלי כשמחפשים מנה אלזסית ברורה אחת.', '€€'),foodStop('מאפייה בכפר / kougelhopf','מאפייה / מתוקים','להוסיף עצירת מאפה בכפר במקום להפוך כל עצירה למסעדה.', '€')],parking:'להשתמש בחניות בשולי הכפרים. המרכזים קטנים וההליכה פנימה היא חלק מהחוויה.',bestFor:'זוגות, צילום, כפרי יין, יום רכב ראשון באלזס.',tip:'לא לנסות לכסות כל כפר. שלוש עצירות איטיות עדיפות על שש חפוזות.'}
    }),
    routePack('sxb-car-baden-baden', 'strasbourg', 'Baden-Baden Black Forest Spa Route', 48.7606, 8.2398, 1.1, 7, ['germany','spa','casino','parking'], {
      en:{title:'Baden-Baden Black Forest Spa Route',subtitle:'A cross-border car day: elegant spa town, casino architecture, parks and a Black Forest taste.',why:'Baden-Baden gives a different atmosphere from Alsace: German spa elegance, grand hotels, parks and a casino-town mood. By car it can be paired with a short Black Forest viewpoint or lake stop.',stops:[stop('Baden-Baden old spa center','Elegant streets, spa buildings and the classic resort-town feeling.',48.7606,8.2398,'1.5–2h'),stop('Kurhaus and Casino exterior','The architectural symbol of Baden-Baden, even if you do not enter the casino.',48.7582,8.2408,'30–45 min'),stop('Lichtentaler Allee','A calm park walk that softens the day after the town center.',48.7553,8.2460,'45–75 min')],food:[foodStop('Rizzi WineBistro','Modern / stylish bistro','Good if you want a polished lunch or early dinner in town.', '€€€'),foodStop('Le Bistro Baden-Baden','French-German casual','A practical central option with broad appeal.', '€€'),foodStop('Café König','Historic café / cakes','Use it for cake and coffee in classic spa-town style.', '€€')],parking:'Use central garages. The town is walkable once parked.',bestFor:'Couples, spa-town mood, Germany day trip, casino/park atmosphere.',tip:'Check spa/casino rules before arrival if you plan to enter; otherwise treat the town as architecture, parks and food.'},
      he:{title:'מסלול הספא והיער השחור של Baden-Baden',subtitle:'יום רכב חוצה גבול: עיירת ספא אלגנטית, קזינו, פארקים ונגיעה ביער השחור.',why:'Baden-Baden נותנת אווירה אחרת מאלזס: אלגנטיות ספא גרמנית, מלונות גדולים, פארקים ותחושת עיירת קזינו. ברכב אפשר לשלב גם תצפית או עצירת יער קצרה.',stops:[stop('מרכז הספא של Baden-Baden','רחובות אלגנטיים, מבני ספא ואווירת עיירת נופש קלאסית.',48.7606,8.2398,'1.5–2 שעות'),stop('Kurhaus וחזית הקזינו','הסמל האדריכלי של Baden-Baden גם אם לא נכנסים לקזינו.',48.7582,8.2408,'30–45 דקות'),stop('Lichtentaler Allee','הליכת פארק רגועה שמאזנת את מרכז העיירה.',48.7553,8.2460,'45–75 דקות')],food:[foodStop('Rizzi WineBistro','ביסטרו מודרני / אלגנטי','מתאים לצהריים או ערב מוקדם ברמה גבוהה יותר.', '€€€'),foodStop('Le Bistro Baden-Baden','צרפתי־גרמני קז׳ואל','אפשרות מרכזית ופרקטית עם תפריט רחב.', '€€'),foodStop('Café König','קפה היסטורי / עוגות','עצירת קפה ועוגה בסגנון עיירת ספא קלאסית.', '€€')],parking:'להשתמש בחניונים מרכזיים. אחרי שחונים, העיירה נוחה להליכה.',bestFor:'זוגות, אווירת ספא, יום גרמניה, פארקים וקזינו.',tip:'לבדוק כללי ספא/קזינו אם מתכננים להיכנס; אחרת להתייחס לעיירה כאדריכלות, פארקים ואוכל.'}
    }),
    routePack('sxb-car-haut-koenigsbourg', 'strasbourg', 'Haut-Kœnigsbourg Castle & Wine Road', 48.2495, 7.3445, 1.0, 7, ['castle','wine','view','parking'], {
      en:{title:'Haut-Kœnigsbourg Castle & Wine Road',subtitle:'A fortress above Alsace plus village food stops: strong views, history and wine-road atmosphere.',why:'This route is logical by car because the castle sits above the plain and pairs naturally with nearby wine villages. It gives the day a clear structure: fortress first, village lunch, vineyard mood after.',stops:[stop('Château du Haut-Kœnigsbourg','A restored mountain fortress with towers, rooms and broad views across the Alsace plain.',48.2495,7.3445,'1.5–2.5h'),stop('Ribeauvillé or Bergheim','Choose one wine village for lunch and a slow walk rather than rushing through both.',48.1950,7.3190,'60–90 min'),stop('Vineyard road viewpoint','A short scenic pause between castle and village that makes the route feel connected.',48.2020,7.3280,'15–30 min')],food:[foodStop('Winstub in Ribeauvillé','Alsatian / wine village food','Good for tarte flambée, local wine and a slower village lunch.', '€€'),foodStop('Auberge-style restaurant near the castle','Regional / practical lunch','Useful if you want to eat close to the castle before dropping into villages.', '€€'),foodStop('Village pâtisserie stop','Bakery / dessert','A light alternative if lunch is too heavy for a driving day.', '€')],parking:'Castle parking exists but can fill. Villages are best handled with edge parking.',bestFor:'Castle lovers, families, views and wine-road photography.',tip:'Do the castle before lunch; after a heavy Alsatian meal, climbing towers feels less fun.'},
      he:{title:'מסלול טירת Haut-Kœnigsbourg ודרך היין',subtitle:'מבצר מעל אלזס ועוד כפרי יין: תצפיות, היסטוריה ואווירת כרמים.',why:'זה מסלול הגיוני ברכב כי הטירה יושבת מעל המישור ומשתלבת טבעית עם כפרי יין קרובים. היום מקבל מבנה ברור: מבצר, ארוחת כפר, ואז אווירת כרמים.',stops:[stop('Château du Haut-Kœnigsbourg','מבצר הררי משוחזר עם מגדלים, חדרים ותצפיות רחבות על מישור אלזס.',48.2495,7.3445,'1.5–2.5 שעות'),stop('Ribeauvillé או Bergheim','לבחור כפר יין אחד לארוחה ושיטוט איטי במקום לרוץ בין שניהם.',48.1950,7.3190,'60–90 דקות'),stop('תצפית דרך כרמים','עצירת נוף קצרה בין הטירה לכפר שמחברת את המסלול.',48.2020,7.3280,'15–30 דקות')],food:[foodStop('Winstub ב־Ribeauvillé','אלזסי / אוכל כפר יין','טוב ל־tarte flambée, יין מקומי וארוחה איטית בכפר.', '€€'),foodStop('מסעדת Auberge ליד הטירה','אזורי / צהריים פרקטי','מתאים אם רוצים לאכול קרוב לטירה לפני הירידה לכפרים.', '€€'),foodStop('פטיסרי בכפר','מאפייה / קינוח','חלופה קלה אם ארוחה כבדה מדי ליום נהיגה.', '€')],parking:'יש חניה בטירה אך היא יכולה להתמלא. בכפרים עדיף חניה בשוליים.',bestFor:'חובבי טירות, משפחות, תצפיות וצילום דרך היין.',tip:'לעשות את הטירה לפני הצהריים; אחרי ארוחה אלזסית כבדה, טיפוס במגדלים פחות כיף.'}
    }),
    routePack('sxb-car-colmar-eguisheim', 'strasbourg', 'Colmar & Eguisheim Storybook Route', 48.0794, 7.3585, 1.0, 7, ['alsace','village','romantic','parking'], {
      en: { title:'Colmar & Eguisheim Storybook Route', subtitle:'Canals, half-timbered houses, wine-village lanes and strong photo value.', why:'This route works because Colmar and Eguisheim give two versions of Alsace: a famous canal town and a smaller circular wine village. Together they justify leaving Strasbourg for the day.', stops:[stop('Eguisheim','Circular wine village with colorful houses and intimate lanes.',48.042,7.307,'1–1.5h'),stop('Colmar Little Venice','Canals, bridges and the most photogenic old-town area.',48.0794,7.3585,'2–3h'),stop('Covered market / old town','Food and local products before the drive back.',48.079,7.358,'45–75 min')], food:[foodStop('Wistub Brenner','Alsatian traditional','Good for tarte flambée and regional plates.','€€'),foodStop('La Soï','Tarte flambée','Casual and focused classic Alsace bite.','€€'),foodStop('Pâtisserie Gilg','Pastry / dessert','Sweet stop instead of heavy lunch.','€')], parking:'Park outside the old centers; do not cross Colmar by car.', bestFor:'Couples, photography, first Alsace day.', tip:'Start with Eguisheim and reach Colmar for lunch or afternoon light.' },
      he: { title:'מסלול Colmar ו־Eguisheim מהאגדות', subtitle:'תעלות, בתי עץ, סמטאות כפרי יין וערך צילום גבוה.', why:'המסלול עובד כי Colmar ו־Eguisheim נותנות שתי גרסאות של אלזס: עיר תעלות מפורסמת וכפר יין עגול וקטן. יחד הן מצדיקות יציאה משטרסבורג ליום.', stops:[stop('Eguisheim','כפר יין מעגלי עם בתים צבעוניים וסמטאות אינטימיות.',48.042,7.307,'1–1.5 שעות'),stop('ונציה הקטנה של Colmar','תעלות, גשרים והאזור המצולם ביותר בעיר העתיקה.',48.0794,7.3585,'2–3 שעות'),stop('השוק המקורה / העיר העתיקה','אוכל ומוצרים מקומיים לפני החזרה.',48.079,7.358,'45–75 דקות')], food:[foodStop('Wistub Brenner','אלזסי מסורתי','טוב ל־tarte flambée ומנות אזוריות.','€€'),foodStop('La Soï','מומחי tarte flambée','ביס אלזסי קלאסי, קז׳ואל וממוקד.','€€'),foodStop('Pâtisserie Gilg','פטיסרי / קינוח','עצירה מתוקה במקום ארוחה כבדה.','€')], parking:'לחנות מחוץ למרכזים העתיקים; לא לחצות את Colmar ברכב.', bestFor:'זוגות, צילום, יום אלזס ראשון.', tip:'להתחיל ב־Eguisheim ולהגיע ל־Colmar לצהריים או אור אחר הצהריים.' }
    }),
    routePack('sxb-car-riquewihr-ribeauville', 'strasbourg', 'Riquewihr & Ribeauvillé Wine Villages Route', 48.166, 7.297, 1.1, 7, ['wine','village','parking'], {
      en: { title:'Riquewihr & Ribeauvillé Wine Villages Route', subtitle:'A pure wine-road day: colorful villages, vineyard views and Alsatian food.', why:'This is the route for the Alsace postcard feeling. The car lets you connect villages that are awkward by public transport and stop for vineyard views between them.', stops:[stop('Riquewihr','Famous compact wine village with colorful lanes.',48.166,7.297,'1–1.5h'),stop('Ribeauvillé','Larger village with more food options and castle views above.',48.195,7.319,'1–1.5h'),stop('Vineyard viewpoint','Short pause to feel the wine landscape, not just streets.',48.18,7.31,'15–30 min')], food:[foodStop('Winstub in Riquewihr','Alsatian / wine village','Classic local lunch if not too crowded.','€€'),foodStop('Restaurant in Ribeauvillé','Alsatian broader choice','Better if you want more seating options.','€€'),foodStop('Kougelhopf bakery','Bakery / sweet','Small local sweet stop.','€')], parking:'Village parking fills fast; arrive early or accept a short walk.', bestFor:'Wine villages, photography, couples, slow day.', tip:'Two villages plus a viewpoint is enough. Do not rush five villages.' },
      he: { title:'מסלול כפרי היין Riquewihr ו־Ribeauvillé', subtitle:'יום דרך יין נקי: כפרים צבעוניים, כרמים ואוכל אלזסי.', why:'זה המסלול לתחושת הגלויה של אלזס. הרכב מאפשר לחבר כפרים שקשה להגיע אליהם בתחבורה ציבורית ולעצור לתצפיות כרמים ביניהם.', stops:[stop('Riquewihr','כפר יין קומפקטי ומפורסם עם סמטאות צבעוניות.',48.166,7.297,'1–1.5 שעות'),stop('Ribeauvillé','כפר גדול יותר עם יותר אפשרויות אוכל ונוף טירות מעל.',48.195,7.319,'1–1.5 שעות'),stop('תצפית כרמים','עצירה קצרה להרגיש את נוף היין, לא רק רחובות.',48.18,7.31,'15–30 דקות')], food:[foodStop('Winstub in Riquewihr','אלזסי / כפר יין','ארוחה מקומית קלאסית אם לא עמוס.','€€'),foodStop('Restaurant in Ribeauvillé','אלזסי / מבחר רחב','טוב אם רוצים יותר אפשרויות ישיבה.','€€'),foodStop('Kougelhopf bakery','מאפייה / מתוק','עצירה מתוקה מקומית קטנה.','€')], parking:'חניות הכפרים מתמלאות מהר; להגיע מוקדם או לקבל הליכה קצרה.', bestFor:'כפרי יין, צילום, זוגות, יום איטי.', tip:'שני כפרים ותצפית מספיקים. לא לרוץ בין חמישה כפרים.' }
    }),
    routePack('sxb-car-europa-park', 'strasbourg', 'Europa-Park Family Day Route', 48.2683, 7.7202, 0.8, 10, ['family','theme-park','parking'], {
      en: { title:'Europa-Park Family Day Route', subtitle:'A full entertainment day built around one major theme park.', why:'This is not a sightseeing route. It is a practical car day for a full attraction where the value is arriving early, staying flexible and driving back when tired.', stops:[stop('Europa-Park entrance','Arrive early; first hour matters for popular rides.',48.2683,7.7202,'full day'),stop('Themed areas loop','Plan by zones instead of crossing randomly.',48.2683,7.7202,'4–7h'),stop('Evening exit','Leave before everyone if you want an easier drive back.',48.2683,7.7202,'30–60 min')], food:[foodStop('Park food courts','Fast / practical','Convenient, not culinary value.','€€'),foodStop('Hotel resort restaurant','Broader choice','Calmer meal if staying late.','€€€'),foodStop('Rust village restaurant','Local / outside park','Good if you prefer eating after leaving.','€€')], parking:'Use official park parking and save your parking location.', bestFor:'Families, thrill rides, full-day entertainment.', tip:'Commit to the full day; it is not worth it as a half-day.' },
      he: { title:'מסלול יום משפחתי ל־Europa-Park', subtitle:'יום בידור מלא סביב פארק שעשועים גדול.', why:'זה לא מסלול נופים. זה יום רכב פרקטי לאטרקציה מלאה שבה הערך הוא להגיע מוקדם, להישאר גמישים ולחזור כשעייפים.', stops:[stop('כניסת Europa-Park','להגיע מוקדם; השעה הראשונה חשובה למתקנים פופולריים.',48.2683,7.7202,'יום מלא'),stop('לולאת אזורי נושא','לתכנן לפי אזורים ולא לחצות אקראית.',48.2683,7.7202,'4–7 שעות'),stop('יציאה בערב','לצאת לפני כולם אם רוצים חזרה קלה יותר.',48.2683,7.7202,'30–60 דקות')], food:[foodStop('Park food courts','מהיר / פרקטי','נוח, לא ערך קולינרי.','€€'),foodStop('Hotel resort restaurant','מבחר רחב','ארוחה רגועה אם נשארים מאוחר.','€€€'),foodStop('Rust village restaurant','מקומי / מחוץ לפארק','טוב אם מעדיפים לאכול אחרי שיוצאים.','€€')], parking:'להשתמש בחניה הרשמית ולשמור מיקום חניה.', bestFor:'משפחות, מתקנים, בידור יום מלא.', tip:'להתחייב ליום מלא; זה לא משתלם כחצי יום.' }
    }),
    routePack('sxb-car-black-forest', 'strasbourg', 'Black Forest Waterfalls & Lake Route', 48.132, 8.233, 1.7, 8, ['black-forest','nature','parking'], {
      en: { title:'Black Forest Waterfalls & Lake Route', subtitle:'A nature-heavy cross-border route with waterfalls, forest roads and a lake stop.', why:'This route gives a different landscape from Alsace: darker forest, winding roads and a more mountain feeling. It is best by car because the worthwhile stops are spread out.', stops:[stop('Triberg Waterfalls','Classic Black Forest waterfall stop; expect stairs and walking.',48.132,8.233,'1.5–2h'),stop('Scenic forest road','Short viewpoint/forest pause to make the drive part of the day.',48.25,8.2,'20–40 min'),stop('Mummelsee','Small lake stop for cake, coffee and mountain air.',48.597,8.202,'45–75 min')], food:[foodStop('Black Forest inn','German regional','Best for schnitzel, trout or hearty local food.','€€'),foodStop('Mummelsee café','Cake / coffee','Use for Black Forest cake style stop.','€€'),foodStop('Triberg town restaurant','Practical lunch','Convenient after the waterfall walk.','€€')], parking:'Mountain/forest parking can be busy; check weather and payment options.', bestFor:'Nature, driving scenery, active day.', tip:'Skip in heavy fog or rain; the route depends on views and walking.' },
      he: { title:'מסלול מפלים ואגם ביער השחור', subtitle:'מסלול טבע חוצה גבול עם מפלים, דרכי יער ועצירת אגם.', why:'המסלול נותן נוף אחר מאלזס: יער כהה, כבישים מתפתלים ותחושה הררית יותר. הוא מתאים לרכב כי התחנות הטובות מפוזרות.', stops:[stop('מפלי Triberg','עצירת מפלים קלאסית; לצפות למדרגות והליכה.',48.132,8.233,'1.5–2 שעות'),stop('דרך יער נופית','עצירת תצפית/יער קצרה שהופכת את הנסיעה לחלק מהיום.',48.25,8.2,'20–40 דקות'),stop('Mummelsee','אגם קטן לקפה, עוגה ואוויר הרים.',48.597,8.202,'45–75 דקות')], food:[foodStop('Black Forest inn','גרמני אזורי','טוב לשניצל, פורל או אוכל מקומי ביתי.','€€'),foodStop('Mummelsee café','עוגה / קפה','עצירה בסגנון עוגת יער שחור.','€€'),foodStop('Triberg town restaurant','צהריים פרקטי','נוח אחרי הליכת המפלים.','€€')], parking:'חניות יער/הר יכולות להיות עמוסות; לבדוק מזג אוויר ואמצעי תשלום.', bestFor:'טבע, נהיגה נופית, יום פעיל.', tip:'לוותר בערפל או גשם כבד; המסלול תלוי בנוף והליכה.' }
    })
  ]
};

function routePack(id, city, name, lat, lng, drive, totalHours, tags, guide){
  return {id, city, cat:'trips', type:'routePack', name, lat, lng, drive, transit:99, parking:true, tags:['route-pack','car-friendly',...tags], totalHours, guide, title:{en:guide.en.title, he:guide.he.title}, description:{en:guide.en.subtitle, he:guide.he.subtitle}, imagePrompt:aiImagePromptFor(city,'car route',name,tags)};
}
function stop(name, text, lat, lng, duration){ return {name, text, lat, lng, duration}; }
function foodStop(name, cuisine, why, price){ return {name, cuisine, why, price}; }
function carGuideFor(item){ const g=item?.guide; if(!g) return null; return g[getLang()] || g.en || g.he; }
function isRoutePack(item){ return item && item.type === 'routePack'; }

const seed = {
  prague: {
    trips: [['Karlštejn Castle',49.9394,14.1883,.8,1.0,'castle easy half-day'],['Kutná Hora',49.9484,15.2682,1.3,1.2,'UNESCO history train'],['Karlovy Vary',50.2319,12.872,1.9,2.2,'spa full-day'],['Český Krumlov',48.8127,14.3175,2.5,2.9,'romantic long-day'],['Dresden',51.0504,13.7373,1.8,2.2,'cross-border museums'],['Terezín',50.511,14.1505,.9,1.2,'history memorial'],['Konopiště Castle',49.7794,14.6568,.9,1.4,'castle'],['Pilsen',49.7384,13.3736,1.1,1.3,'beer city'],['Bohemian Paradise',50.53,15.2,1.5,2.5,'nature car-best'],['Křivoklát Castle',50.0376,13.872,1.0,1.6,'castle forest'],['Mělník',50.3505,14.4741,.7,1.2,'wine river'],['Poděbrady',50.1424,15.1188,.8,1.0,'spa easy'],['Tábor',49.4144,14.6578,1.2,1.6,'old-town'],['České Budějovice',48.9747,14.4747,1.9,2.3,'beer old-square'],['Liberec',50.7663,15.0543,1.3,1.8,'mountain city'],['Český ráj rocks',50.514,15.170,1.4,2.6,'hiking car-best'],['Lidice Memorial',50.143,14.188,.45,1.0,'serious history'],['Velká Amerika Quarry',49.960,14.204,.65,1.4,'view nature'],['Průhonice Park',50.000,14.557,.35,.7,'park easy'],['Sázava Monastery',49.872,14.895,.8,1.5,'history river']],
    food:['Lokál Dlouhááá','Naše Maso','Kantýna','Havelská Koruna','Sisters Bistro','Mincovna','U Parlamentu','Luka Lu','Banh Mi Makers','Café Louvre','Eska Karlín','Mr. HotDoG','Pho Vietnam Tuan & Lan','Manifesto Market','U Kroka','Bistro Monk','Kuchyň','Maitrea','Kavárna co hledá jméno','Bakeshop Praha'],
    nightlife:['Letná Beer Garden','Náplavka Riverside','Hemingway Bar','Anonymous Bar','Dva Kohouti','U Sudu','Jazz Dock','Lucerna Music Bar','Cross Club','BeerGeek Bar','Vzorkovna','Roxy Prague','Aloha Wave Lounge','Black Angel’s Bar','Cobra Bar','M1 Lounge','Karlovy Lázně','Duplex Rooftop','Chapeau Rouge','Kasárna Karlín'],
    experiences:['Vltava River Cruise','Petřín Hill Viewpoint','Black Light Theatre','Beer Spa','Prague Vintage Car Tour','E-bike Old Town Tour','Prague Castle Viewpoints','Vyšehrad Sunset Walk','Letná Metronome View','Paddle Boats on Vltava','Mirror Maze Petřín','Museum of Senses','Jewish Quarter Walk','Tram 22 Scenic Ride','Dancing House Rooftop','Franz Kafka Head','Strahov Monastery Library','Kampa Island Walk','Náplavka Saturday Market','Old Town Underground'],
    mustdo:['Charles Bridge at sunrise','Old Town Square at night','Prague Castle panorama','Astronomical Clock area','Vyšehrad Fortress','Petřín sunset','Letná view over bridges','Jewish Quarter','Kampa Island','Powder Tower','Wenceslas Square','National Theatre riverside','Dancing House photo stop','Strahov Monastery view','Nerudova Street','Lennon Wall','Municipal House','Vltava riverside walk','Malá Strana lanes','Clementinum viewpoint']
  },
  vienna: {
    trips: [['Bratislava',48.1486,17.1077,1.0,1.1,'cross-border easy'],['Wachau Valley',48.389,15.543,1.2,1.5,'wine danube'],['Melk Abbey',48.2297,15.3319,1.2,1.4,'abbey danube'],['Baden bei Wien',48.0058,16.2326,.45,.7,'spa easy'],['Hallstatt',47.5622,13.6493,3.3,4.0,'lake iconic car'],['Graz',47.0707,15.4395,2.2,2.6,'city food'],['Laxenburg Castle Park',48.0686,16.3567,.35,.6,'park romantic'],['Klosterneuburg Abbey',48.305,16.325,.35,.5,'abbey wine'],['Semmering Railway',47.643,15.829,1.2,1.6,'mountain railway'],['Eisenstadt',47.8464,16.527,.55,1.2,'palace'],['Carnuntum',48.112,16.863,.55,1.1,'roman history'],['Neusiedler See',47.83,16.75,1.0,1.8,'lake'],['Krems an der Donau',48.410,15.602,1.1,1.4,'danube town'],['Dürnstein',48.395,15.520,1.2,1.8,'village wine'],['Mayerling',48.045,16.098,.55,1.3,'history'],['Forchtenstein Castle',47.711,16.346,1.0,1.8,'castle car'],['Mariazell',47.773,15.317,1.8,2.8,'mountain pilgrimage'],['Sopron',47.681,16.584,1.1,1.8,'hungary'],['Göttweig Abbey',48.366,15.612,1.1,1.6,'abbey view'],['Schloss Hof',48.215,16.936,.8,1.5,'palace']],
    food:['Wiener Wiaz Haus','Gasthaus Pöschl','Figlmüller','Schnitzelwirt','Naschmarkt stands','Bitzi','Trześniewski','Leberkas-Pepi','Café Hawelka','Café Central','Gmoakeller','Glacis Beisl','Neni am Naschmarkt','UBox Würstelstand','Swing Kitchen','Miznon Vienna','Bitzinger Würstelstand','Gasthaus Rebhuhn','Vollpension','Bruder'],
    nightlife:['Donaukanal Bars','Bermuda Triangle','Prater DOME','Loos American Bar','Krypt Bar','Travel Shack Vienna','25hours Rooftop','Das Loft Bar','Volksgarten Club','Grelle Forelle','Flex','Celeste','Kleinod Bar','Needle Vinyl Bar','If Dogs Run Free','1516 Brewing','Beaver Brewing','Sass Music Club','Josef Cocktailbar','MuseumsQuartier evening'],
    experiences:['Prater Giant Ferris Wheel','Schönbrunn Palace gardens','Belvedere Palace','Danube Canal street art','Vienna State Opera standing tickets','Spanish Riding School','Kunsthistorisches Museum','Hundertwasserhaus','Naschmarkt food walk','Ring Tram scenic loop','Danube Tower view','Grinzing wine taverns','Stadtpark walk','Central Cemetery music graves','Albertina Museum','House of Music','Rathausplatz evening','Vienna coffeehouse crawl','Prater amusement park','MAK design museum'],
    mustdo:['St. Stephen’s Cathedral','Schönbrunn Palace','Belvedere Klimt','Ringstrasse walk','Hofburg Palace','Vienna State Opera','Naschmarkt','Prater Ferris Wheel','Kunsthistorisches Museum','Café Central','Graben and Kohlmarkt','MuseumsQuartier','Karlskirche','Hundertwasserhaus','Danube Canal','Rathausplatz','Spanish Riding School','Albertina','Stadtpark Strauss statue','Grinzing evening']
  },
  strasbourg: {
    trips: [['Colmar',48.0794,7.3585,.9,.6,'alsace romantic train'],['Riquewihr',48.166,7.297,1.1,1.9,'wine village car'],['Château du Haut-Kœnigsbourg',48.2495,7.3445,.9,1.8,'castle car'],['Baden-Baden',48.7606,8.2398,.95,1.5,'spa casino'],['Europa-Park',48.2683,7.7202,.75,1.8,'theme-park'],['Obernai',48.463,7.481,.45,.55,'alsace easy'],['Eguisheim',48.042,7.307,1.0,1.4,'village wine'],['Kaysersberg',48.139,7.263,1.1,1.7,'village'],['Freiburg im Breisgau',47.999,7.842,1.0,1.4,'germany city'],['Black Forest Triberg',48.132,8.233,1.6,2.5,'waterfalls car'],['Saverne',48.741,7.362,.55,.5,'canal castle'],['Molsheim',48.540,7.493,.35,.45,'wine town'],['Mont Sainte-Odile',48.437,7.404,.75,1.7,'view monastery'],['Sélestat',48.259,7.454,.55,.35,'library town'],['Basel',47.5596,7.5886,1.6,1.3,'switzerland'],['Nancy',48.692,6.184,1.8,1.6,'art nouveau'],['Heidelberg',49.3988,8.6724,1.8,2.1,'germany romantic'],['Mummelsee',48.597,8.202,1.2,2.4,'lake black-forest'],['Gengenbach',48.404,8.014,.75,1.2,'black-forest town'],['Wissembourg',49.037,7.946,1.0,1.2,'border town']],
    food:['La Corde à Linge','Maison Kammerzell','Au Pont Corbeau','Binchstub Broglie','Le Tire-Bouchon','Chez Yvonne','Au Brasseur','Flam’s','L’Épicerie','Bistrot Coco','Meiselocker','Le Clou','La Hache','Pizz’arOme','Le Thomasien','PUR etc.','Café Bretelles','What the Cake','Stück Burger','La Fignette'],
    nightlife:['Krutenau bars','Petite France night walk','Code Bar','Le Grincheux','Académie de la Bière','L’Alchimiste','Jeannette et les Cycleux','Les BerThoM','Raven Café','La Laiterie','Korrigan Bar','Le Local','Blue Moon','Delirium Café Strasbourg','Mandala','The Dubliners','Le Terminal','Bar Barberousse','Phonograph','Aedaen Place'],
    experiences:['Strasbourg Boat Tour','Cathedral Platform View','Petite France canals','European Quarter walk','Covered Bridges sunset','Batorama cruise','Alsace wine tasting','Bike tour along Ill river','Christmas market route','Orangerie Park','Museum of Modern Art','Astronomical Clock visit','Canal photography walk','German border day hop','Thermal spa Baden-Baden','Casino Baden-Baden','Vauban Dam viewpoint','Riverside picnic','Cathedral light show seasonally','Local bakery crawl'],
    mustdo:['Strasbourg Cathedral','Petite France','Covered Bridges','Vauban Dam viewpoint','Batorama boat tour','European Parliament area','Place Kléber','Astronomical Clock','Orangerie Park','Alsatian winstub dinner','Krutenau evening','Maison Kammerzell photo stop','Ill river walk','Cathedral platform','Museum of Modern Art','Neustadt district','Saint-Thomas Church','Christmas market route','Ponts Couverts sunset','Alsace wine village day']
  }
};

let currentTab='trips', packOffset=0, userLocation=null;
const $=id=>document.getElementById(id);
function load(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function getSaved(){return load(STORAGE.saved,[])}; function setSaved(v){save(STORAGE.saved,v);updateRouteOptions()}
function getTrip(){return load(STORAGE.trip,[])}; function setTrip(v){save(STORAGE.trip,v);updateRouteOptions()}
function getLikes(){return load(STORAGE.likes,{})}; function setLikes(v){save(STORAGE.likes,v)}
function getRecs(){return load(STORAGE.recs,[])}; function setRecs(v){save(STORAGE.recs,v)}
function hotel(){return load(STORAGE.hotel,{name:'Hotel address', query:''})}
function activeMode(){return $('modeSelect').value}
function activePackageMode(){return load(STORAGE.packageMode,'public')}
function setPackageMode(mode){save(STORAGE.packageMode, mode); if(mode==='car') $('modeSelect').value='car'; if(mode==='public' && $('modeSelect').value==='car') $('modeSelect').value='transit'; syncPackageButtons(); packOffset=0; render();}
function activeOrigin(){
  const savedCity = load('dtf_last_city_v17','prague');
  return $('originSelect')?.value || originIdForCity(savedCity);
}
function activeCity(){
  const o = activeOrigin();
  return CITY_BY_ORIGIN[o] || load('dtf_last_city_v17','prague');
}
function originIdForCity(city){
  return ({prague:'pragueAirport', vienna:'viennaAirport', strasbourg:'strasbourgAirport'})[city] || 'current';
}
function setActiveGuideCity(city){
  if(!CITIES[city]) return;
  save('dtf_last_city_v17', city);
  if($('offlineCitySelect')) $('offlineCitySelect').value = city;
  if($('originSelect')) $('originSelect').value = originIdForCity(city);
}

function syncRouteBuilderToCity(city){
  if(!CITIES[city]) return;
  setActiveGuideCity(city);
  const dest = $('destinationSelect');
  updateRouteOptions();
  const pts = routePoints();
  if(dest) dest.value = pts.some(p => p.id === dest.value) ? dest.value : 'centre';
  if($('hotelWrap')) $('hotelWrap').classList.toggle('hidden', dest?.value !== 'hotel');
}

function originPoint(){const c=CITIES[activeCity()]; return {...c.airport, query:`${c.airport.lat},${c.airport.lng}`, name:c.airportName}}
function modeNotice(){
  const city=CITIES[activeCity()].name;
  const packageMode=activePackageMode();
  const routeMode=activeMode();
  const lang = localStorage.getItem('dtf_language_v19') === 'he' ? 'he' : 'en';
  const routeModeLabel = {
    en: {transit:'Transit', uber:'Uber', bolt:'Bolt', car:'Car / Waze'},
    he: {transit:'תחבורה ציבורית', uber:'Uber', bolt:'Bolt', car:'רכב / Waze'}
  }[lang][routeMode] || routeMode;
  const text = packageMode==='car'
    ? (lang === 'he'
      ? `טיול ברכב: מחסניות ${city} נותנות עדיפות למקומות שמתאימים לרכב, ניווט Waze/Google, אוכל עם נוחות חניה ומגבלת זמן הנהיגה שבחרת.`
      : `Travel By Car: ${city} packs prioritize car-reachable places, Waze/Google driving actions, parking-friendly food, and the selected driving-time limit.`)
    : (lang === 'he'
      ? `טיול בתחבורה ציבורית: מחסניות ${city} נותנות עדיפות למקומות שמתאימים לתחבורה ציבורית / Uber / Bolt, עם גישה קרובה ופשוטה יותר.`
      : `Public Travels: ${city} packs prioritize places suitable for public transport / Uber / Bolt, with closer and easier access.`);
  $('modeNotice').textContent = lang === 'he'
    ? `סוג נסיעה במסלול: ${routeModeLabel}. ${text}`
    : `Route travel mode: ${routeModeLabel}. ${text}`;
  const carControls=$('carPackageControls');
  if(carControls) carControls.classList.toggle('hidden', packageMode !== 'car');
  const packageText=$('packageModeText');
  if(packageText) packageText.textContent = packageMode==='car'
    ? 'Car packs are sorted by the selected distance order and limited by driving time each way.'
    : 'Public packs are limited to places that are practical without a car and sorted by proximity to your current location or city centre.';
  syncPackageButtons();
  syncTabsForPackageMode();
}
function syncPackageButtons(){
  const mode=activePackageMode();
  const pub=$('publicTravelBtn'), car=$('carTravelBtn');
  if(pub) pub.classList.toggle('active', mode==='public');
  if(car) car.classList.toggle('active', mode==='car');
}

function syncTabsForPackageMode(){
  const packageMode = activePackageMode();
  const allowedTabs = packageMode === 'car'
    ? ['trips', 'mytrip', 'saved']
    : ['trips', 'food', 'nightlife', 'experiences', 'mustdo', 'recommendations', 'mytrip', 'saved'];

  document.querySelectorAll('.tab').forEach(btn => {
    const tab = btn.dataset.tab;
    const visible = allowedTabs.includes(tab);
    btn.classList.toggle('hidden', !visible);
    if (packageMode === 'car' && tab === 'trips') {
      btn.textContent = getLang() === 'he' ? 'מסלולי רכב' : 'Route Packs';
    } else if (packageMode !== 'car' && tab === 'trips') {
      btn.textContent = getLang() === 'he' ? 'מסלולים בעיר' : 'City routes';
    }
  });

  if (!allowedTabs.includes(currentTab)) currentTab = 'trips';
  document.querySelectorAll('.tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === currentTab));
}

function livelyDescription(city,cat,name,tags=[],profile=null){
  const cityEn=CITIES[city]?.name || city;
  const cityHe=cityNameFor(city);
  const titleHe=TITLE_HE[name] || name;
  const cuisineEn=profile?.cuisine?.en || 'local food';
  const cuisineHe=profile?.cuisine?.he || 'מטבח מקומי';
  const en={
    trips:`${name} is not just another pin on the map. It is a ${cityEn} day-trip option chosen because it gives you a clear reason to leave the hotel: a different town, a view, history, nature or a stronger local feeling than staying in the center all day. Check the travel time before you commit.`,
    food:`${name} is a ${cuisineEn} option selected for practical travel use: understandable food style, reasonable value and an easy decision before you move across town. Use it when you want to know what you are eating before you arrive, not only where it is located.`,
    nightlife:`${name} is an evening option with a specific role in the trip: drinks, music, riverside atmosphere, dancing or a late walk. Pick it when the mood fits; do not treat every nightlife place as the same kind of night.`,
    experiences:`${name} is here because it can turn a normal day into a memory: view, river, show, playful activity or a special Prague/Vienna/Strasbourg moment. Check weather, tickets and opening hours before you build the day around it.`,
    mustdo:`${name} is a must-do style stop because it gives you the “I was really here” feeling: a view, photo, historic icon, atmosphere or classic walk. It is best added near other nearby stops, not used as a single isolated destination.`
  }[cat] || `${name} is a selected place in ${cityEn}.`;
  const he={
    trips:`${titleHe} הוא לא עוד סיכה במפה. זה יעד טיול יום שנבחר כי יש סיבה אמיתית לצאת מהמלון: עיר אחרת, נוף, היסטוריה, טבע או תחושה מקומית חזקה יותר מלהישאר כל היום במרכז. לפני שמחליטים — לבדוק זמן נסיעה בפועל.`,
    food:`${titleHe} הוא מקום אוכל מסוג ${cuisineHe}, שנבחר לשימוש מעשי בטיול: להבין מראש מה אוכלים, מה רמת המחיר, והאם זה מתאים לפני שנוסעים לשם. המטרה היא לא רק “איפה זה”, אלא האם שווה לעצור שם.`,
    nightlife:`${titleHe} הוא אפשרות ערב עם תפקיד ברור בטיול: שתייה, מוזיקה, אווירת נהר, ריקודים או הליכת לילה. לבחור לפי מצב רוח — לא כל מקום חיי לילה נותן את אותה חוויה.`,
    experiences:`${titleHe} נמצא כאן כי הוא יכול להפוך יום רגיל לזיכרון: תצפית, נהר, מופע, פעילות קלילה או רגע מיוחד בעיר. לבדוק מזג אוויר, כרטיסים ושעות פתיחה לפני שבונים סביבו יום שלם.`,
    mustdo:`${titleHe} הוא עצירת “חובה” כי הוא נותן תחושה של באמת הייתי כאן: נוף, צילום, אייקון היסטורי, אווירה או הליכה קלאסית. הכי נכון לשלב אותו עם נקודות קרובות ולא כיעד בודד ומנותק.`
  }[cat] || `${titleHe} הוא מקום שנבחר באזור ${cityHe}.`;
  return {en,he};
}


function inferDifficulty(cat, drive, transit, tags=[]){
  if(cat==='nightlife' || cat==='food') return 'easy';
  if(tags.includes('hiking') || tags.includes('mountain') || (drive||0) > 2.5 || (transit||0) > 2.5) return 'hard';
  if((drive||0) > 1.2 || (transit||0) > 1.5) return 'medium';
  return 'easy';
}
function inferFamilyFriendly(cat, tags=[]){
  if(cat==='nightlife') return 1;
  if(tags.includes('theme-park') || tags.includes('park') || tags.includes('castle') || cat==='experiences') return 4;
  if(cat==='food') return 3;
  return 3;
}
function inferRainyDay(cat, tags=[]){
  if(cat==='food' || cat==='nightlife') return true;
  if(tags.includes('museum') || tags.includes('show') || tags.includes('indoor') || tags.includes('abbey') || tags.includes('palace')) return true;
  return false;
}
function inferRomantic(cat, tags=[]){
  if(tags.includes('romantic') || tags.includes('wine') || tags.includes('river') || tags.includes('view') || tags.includes('lake')) return 5;
  if(cat==='nightlife' || cat==='food' || cat==='mustdo') return 3;
  return 2;
}
function inferBudgetLevel(price, tags=[]){
  if(price) return price;
  if(tags.includes('free')) return 'free';
  if(tags.includes('budget') || tags.includes('good-value')) return '€';
  return '€€';
}
function inferVisitDuration(cat, drive, transit, tags=[]){
  if(cat==='trips') return tags.includes('long-day') || (drive||0)>2.2 || (transit||0)>2.5 ? 'full day' : ((drive||0)>1 || (transit||0)>1.2 ? 'half to full day' : '2-5h');
  if(cat==='food') return '45-90m';
  if(cat==='nightlife') return '1-3h';
  if(cat==='experiences') return '45m-2h';
  return '30-90m';
}

function makePlace(city,cat,name,lat,lng,drive,transit,tags,note,parking=false){
  const tagList=tags.split(' ').filter(Boolean);
  const profile = cat === 'food' ? (FOOD_PROFILE[name] || null) : null;
  const generatedDesc = livelyDescription(city, cat, name, tagList, profile);
  const descEn = PLACE_DESCRIPTIONS.en[name] || generatedDesc.en;
  const descHe = PLACE_DESCRIPTIONS.he[name] || generatedDesc.he;
  return {
    id:`${city}-${cat}-${slug(name)}`,
    city,cat,name,lat,lng,drive,transit,
    tags:tagList,
    note,
    title: { en: name, he: TITLE_HE[name] || name },
    description: { en: descEn, he: descHe },
    imagePrompt: aiImagePromptFor(city,cat,name,tagList),
    parking,
    difficulty: inferDifficulty(cat, drive, transit, tagList),
    familyFriendly: inferFamilyFriendly(cat, tagList),
    rainyDay: inferRainyDay(cat, tagList),
    romantic: inferRomantic(cat, tagList),
    budgetLevel: inferBudgetLevel(profile?.price || null, tagList),
    visitDuration: inferVisitDuration(cat, drive, transit, tagList),
    cuisine: profile?.cuisine || null,
    price: profile?.price || null,
    vibe: profile?.vibe || null
  };
}
function buildDescription(city,cat,name,tags,note){
  return {
    en: PLACE_DESCRIPTIONS.en[name] || note || `${name} is a curated place in ${CITIES[city]?.name || 'this city'}.`,
    he: PLACE_DESCRIPTIONS.he[name] || buildHebrewDescription(city,cat,name,tags,note)
  };
}

function buildImage(city,cat,name,tags=[]){
  const palettes={
    trips:['#0ea5e9','#2563eb','#7c3aed'],
    food:['#ec4899','#f43f5e','#f59e0b'],
    nightlife:['#111827','#7c3aed','#06b6d4'],
    experiences:['#14b8a6','#22c55e','#84cc16'],
    mustdo:['#6366f1','#a855f7','#f472b6'],
    recommendations:['#0891b2','#0f766e','#8b5cf6']
  };
  const p=palettes[cat] || ['#0f172a','#38bdf8','#8b5cf6'];
  const icon={trips:'🏞️',food:'🍜',nightlife:'🎶',experiences:'✨',mustdo:'⭐',recommendations:'📍'}[cat] || '📍';
  const label=(name||'Place').replace(/[&<>]/g,'').slice(0,34);
  const sub=(tags||[]).slice(0,2).join(' • ').replace(/[&<>]/g,'').slice(0,34);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="440" viewBox="0 0 900 440">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p[0]}"/><stop offset="0.58" stop-color="${p[1]}"/><stop offset="1" stop-color="${p[2]}"/></linearGradient>
      <radialGradient id="r" cx="70%" cy="20%" r="65%"><stop offset="0" stop-color="#ffffff" stop-opacity=".42"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
      <filter id="shadow"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#000" flood-opacity=".38"/></filter>
    </defs>
    <rect width="900" height="440" rx="34" fill="url(#g)"/>
    <rect width="900" height="440" rx="34" fill="url(#r)"/>
    <circle cx="740" cy="88" r="135" fill="#fff" opacity=".16"/>
    <circle cx="115" cy="365" r="185" fill="#020617" opacity=".18"/>
    <path d="M0 325 C120 250 240 385 390 305 C560 215 675 350 900 255 L900 440 L0 440 Z" fill="#020617" opacity=".30"/>
    <path d="M620 320 C690 260 760 260 835 325" stroke="#fff" stroke-width="10" opacity=".35" fill="none" stroke-linecap="round"/>
    <text x="64" y="130" font-family="Arial, sans-serif" font-size="76" filter="url(#shadow)">${icon}</text>
    <text x="64" y="218" font-family="Arial, sans-serif" font-size="48" font-weight="900" fill="#fff" filter="url(#shadow)">${label}</text>
    <text x="66" y="272" font-family="Arial, sans-serif" font-size="25" font-weight="800" fill="#f8fafc" opacity=".95">${sub || CITIES[city]?.name || 'DayTripFlow'}</text>
    <rect x="64" y="328" width="255" height="42" rx="21" fill="#fff" opacity=".18"/>
    <text x="84" y="356" font-family="Arial, sans-serif" font-size="19" font-weight="800" fill="#fff" opacity=".95">Curated travel card</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
function imageFor(item){
  // v22: generated AI-style local visual. Replace with item.imagePath WebP later without changing card code.
  if(item.imagePath) return item.imagePath;
  return buildImage(item.city || activeCity(), item.cat || 'recommendations', titleFor(item) || item.query || 'Place', (item.tags || []).map(tagFor));
}
function descriptionFor(item){
  return guideContentFor(item).why || textFor(item.description) || textFor(item.note) || (getLang()==='he' ? 'מקום מומלץ. בדוק שעות פתיחה, כרטיסים וביקורות עדכניות לפני ההגעה.' : 'Curated place. Check live opening hours, tickets and reviews before going.');
}

function slug(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function buildData(){const out=[]; for(const [city,obj] of Object.entries(seed)){ obj.trips.forEach(t=>out.push(makePlace(city,'trips',t[0],t[1],t[2],t[3],t[4],t[5],`Day trip option from ${CITIES[city].name}.`, t[5].includes('car')))); ['food','nightlife','experiences','mustdo'].forEach(cat=>{ const base=CITIES[city].centre; obj[cat].forEach((name,i)=>{ const lat=base.lat+((i%5)-2)*0.009; const lng=base.lng+(Math.floor(i/5)-2)*0.012; const carFriendly = (cat==='food' && i%3===0); let tag = cat==='food' ? (carFriendly?'budget good-value parking':'budget good-value central walkable') : 'central popular walkable';
        const fp = cat==='food' ? (FOOD_PROFILE[name] || null) : null;
        if(fp){
          const c = (fp.cuisine.en || '').toLowerCase();
          if(c.includes('czech')) tag += ' czech local';
          if(c.includes('austrian') || c.includes('viennese')) tag += ' austrian local';
          if(c.includes('alsatian')) tag += ' alsatian french local';
          if(c.includes('vietnam')) tag += ' vietnamese asian';
          if(c.includes('vegetarian')) tag += ' vegetarian';
          if(c.includes('meat') || c.includes('butcher')) tag += ' meat';
          if(c.includes('café') || c.includes('cafe')) tag += ' cafe';
          if(c.includes('market')) tag += ' market';
          if(c.includes('bakery')) tag += ' pastry';
        }
        out.push(makePlace(city,cat,name,lat,lng,0.15+i/100,0.15+i/90,tag,livelyDescription(city,cat,name,tag.split(' ').filter(Boolean),fp).en,carFriendly)); }); }); } return out; }

const DATA = buildData();


// v46: Public Travel is city-first. These packs are designed for fast metro/tram/walking,
// usually under 60 minutes between stops and never built around 2-hour outbound rides.
const PUBLIC_CITY_TRIPS = [
  ['prague','Old Town • Charles Bridge • Kampa Core Walk',50.0865,14.4114,'central public-friendly walkable mustdo photo history city-route'],
  ['prague','Prague Castle • Malá Strana Downhill Route',50.0911,14.4016,'central public-friendly castle view history city-route'],
  ['prague','Vyšehrad Fortress • Riverside Calm Route',50.0647,14.4170,'central public-friendly view river history city-route'],
  ['prague','Jewish Quarter • Old Town Context Walk',50.0900,14.4180,'central public-friendly history walkable city-route'],
  ['prague','Petřín • Strahov • Castle View Route',50.0835,14.3956,'central public-friendly viewpoint romantic city-route'],
  ['prague','Letná View • Beer Garden • Metronome Route',50.0967,14.4206,'central public-friendly view beer sunset city-route'],
  ['prague','Dancing House • Náplavka • Riverside Route',50.0755,14.4140,'central public-friendly river evening food city-route'],
  ['prague','National Museum • Wenceslas • Lucerna Route',50.0796,14.4300,'central public-friendly museum city city-route'],
  ['prague','Kampa • Lennon Wall • Malá Strana Corners',50.0853,14.4068,'central public-friendly photo romantic city-route'],
  ['prague','Tram 22 Scenic Prague Route',50.0911,14.4016,'public-friendly tram castle view city-route'],

  ['vienna','Stephansdom • Graben • Hofburg Classic Walk',48.2085,16.3731,'central public-friendly walkable mustdo history city-route'],
  ['vienna','Ringstrasse • Opera • Parliament Route',48.2080,16.3630,'central public-friendly architecture history city-route'],
  ['vienna','Schönbrunn Palace Gardens Public Half-Day',48.1845,16.3122,'public-friendly palace park history city-route'],
  ['vienna','Belvedere • Karlsplatz • Naschmarkt Route',48.1912,16.3806,'public-friendly palace market food city-route'],
  ['vienna','MuseumsQuartier • Hofburg Culture Route',48.2039,16.3618,'central public-friendly museums palace city-route'],
  ['vienna','Prater • Giant Wheel • Danube Canal Evening',48.2167,16.3959,'public-friendly evening view nightlife city-route'],
  ['vienna','Hundertwasserhaus • Stadtpark • Canal Route',48.2114,16.3935,'public-friendly architecture park photo city-route'],
  ['vienna','Coffeehouse Vienna • Central • Hawelka Route',48.2085,16.3650,'central public-friendly cafe history city-route'],
  ['vienna','Karlskirche • Musikverein • Secession Route',48.1982,16.3714,'central public-friendly music architecture city-route'],
  ['vienna','Grinzing Wine Tavern Light Evening',48.2540,16.3580,'public-friendly tram wine evening city-route'],

  ['strasbourg','Cathedral • Petite France Essential Walk',48.5819,7.7506,'central public-friendly walkable mustdo history city-route'],
  ['strasbourg','Batorama Boat • Old Town Orientation',48.5819,7.7502,'central public-friendly boat old-town city-route'],
  ['strasbourg','European Quarter Tram • Orangerie Route',48.5969,7.7682,'public-friendly tram europe architecture park city-route'],
  ['strasbourg','Krutenau Food • Bars • Student Quarter Walk',48.5794,7.7595,'central public-friendly food nightlife city-route'],
  ['strasbourg','Covered Bridges • Vauban Dam Sunset Route',48.5797,7.7396,'central public-friendly sunset photo city-route'],
  ['strasbourg','Neustadt • Republic Square Architecture Route',48.5865,7.7550,'central public-friendly architecture history city-route'],
  ['strasbourg','Orangerie Park • European Institutions Easy Route',48.5940,7.7740,'public-friendly park europe family city-route'],
  ['strasbourg','Saint-Thomas • Ill River Quiet Walk',48.5798,7.7458,'central public-friendly church river walkable city-route'],
  ['strasbourg','Modern Art Museum • Barrage Vauban Route',48.5790,7.7360,'central public-friendly museum view city-route'],
  ['strasbourg','Christmas Market Core Route',48.5830,7.7460,'central public-friendly seasonal mustdo city-route']
].map(([city,name,lat,lng,tags]) => makePlace(
  city,
  'trips',
  name,
  lat,
  lng,
  0.1,
  0.25,
  tags,
  `${name} is a fast in-city public travel route designed for metro, tram, walking, Moovit or short taxi hops — not a long regional day trip.`,
  false
));

Object.assign(EUROPE_REAL_GUIDE_CONTENT, {
  'Old Town • Charles Bridge • Kampa Core Walk': {
    he:{why:'זה מסלול הליבה של פראג, בלי נסיעה ארוכה: כיכר העיר העתיקה, סמטאות האבן, גשר קארל וקמפה. כאן מבינים למה פראג כל כך מצולמת — מגדלים, פסלים, נהר וטירה באותו קו ראייה. המסלול נוח בתחבורה ציבורית והליכה, ולכן הוא צריך להופיע לפני כל טיול רחוק.',see:['כיכר העיר העתיקה והשעון האסטרונומי מהמאה ה־15','גשר קארל מהמאה ה־14 והפסלים שעליו','Kampa Island ותעלות קטנות ליד הנהר','מבט לטירת פראג מעל הוולטאבה'],fit:'מתאים ליום ראשון בעיר, צילום, זוגות והיכרות בסיסית עם פראג.',tip:'לעשות מוקדם בבוקר או בערב. בשעות צהריים גשר קארל עמוס מאוד.'},
    en:{why:'This is Prague’s core route without a long ride: Old Town Square, stone lanes, Charles Bridge and Kampa. It explains why Prague is so photogenic — towers, statues, river and castle in one visual line. It is exactly what public travel should prioritize before any far day trip.',see:['Old Town Square and the 15th-century Astronomical Clock','14th-century Charles Bridge and its statues','Kampa Island and small riverside canals','Castle view above the Vltava'],fit:'Best for first day, photography, couples and basic orientation.',tip:'Do it early morning or evening. Charles Bridge is heavily crowded at midday.'}
  },
  'Prague Castle • Malá Strana Downhill Route': {
    he:{why:'מסלול שמתחיל בצד הגבוה של פראג ויורד דרך ההיסטוריה: טירת פראג, קתדרלת ויטוס, סמטאות מאלה סטרנה וגשר קארל. הטירה הייתה מרכז שלטון בוהמי וצ׳כי במשך מאות שנים, ולכן זה לא רק נוף — זה המקום שמסביר את הכוח הפוליטי והדתי של העיר.',see:['אזור טירת פראג וקתדרלת St. Vitus','תצפיות לגגות ולנהר','Nerudova Street ומאלה סטרנה','ירידה נוחה לכיוון גשר קארל'],fit:'מתאים למי שרוצה היסטוריה, תצפיות ומסלול חצי יום בלי רכב.',tip:'להגיע בחשמלית למעלה ולרדת ברגל. זה הרבה יותר נוח מאשר לטפס מהמרכז.'},
    en:{why:'Start high and walk down through Prague’s power story: Prague Castle, St. Vitus Cathedral, Malá Strana lanes and Charles Bridge. The castle was the seat of Bohemian and Czech rulers for centuries, so this is not only a view — it explains the city’s political and religious weight.',see:['Prague Castle area and St. Vitus Cathedral','Rooftop and river viewpoints','Nerudova Street and Malá Strana','Downhill walk toward Charles Bridge'],fit:'Good for history, viewpoints and a half-day without a car.',tip:'Take tram up and walk down. It is easier and more scenic.'}
  },
  'Vyšehrad Fortress • Riverside Calm Route': {
    he:{why:'וישהראד מציג פראג פחות עמוסה: מבצר על גבעה, פארק, תצפיות לנהר ובית קברות שבו קבורים דמויות תרבות צ׳כיות. לפי המסורת זה אחד המקומות העתיקים בסיפור של פראג. הערך שלו הוא שקט, נוף והיסטוריה בלי לחץ של מרכז העיר.',see:['חומות ותצפיות על הוולטאבה','בזיליקת Peter and Paul','בית הקברות ההיסטורי Slavín','ירידה רגועה לכיוון הנהר ונאפלאבקה'],fit:'מתאים ליום רגוע, צילום, זוגות ומי שכבר ראה את העיר העתיקה.',tip:'לשלב עם הליכה ב־Náplavka או קפה ליד הנהר.'},
    en:{why:'Vyšehrad shows a quieter Prague: hilltop fortress, park paths, river views and the cemetery of major Czech cultural figures. It is one of the older layers in Prague’s story. The value is calm, view and history without Old Town pressure.',see:['Fortress walls and Vltava views','Peter and Paul Basilica','Slavín historic cemetery','Easy walk down toward Náplavka'],fit:'Good for a calm day, photos, couples and travelers who already saw Old Town.',tip:'Pair it with Náplavka or a riverside café.'}
  },
  'Jewish Quarter • Old Town Context Walk': {
    he:{why:'הרובע היהודי של פראג נותן עומק שאי אפשר לקבל רק מתצפיות. Josefov היה במשך מאות שנים מרכז יהודי חשוב באירופה, עם בתי כנסת, בית קברות עתיק וסיפורים כמו הגולם. זה מסלול קצר יחסית אבל משמעותי מאוד.',see:['אזור Josefov','בית הקברות היהודי העתיק אם נכנסים לאתרים','בתי הכנסת ההיסטוריים','חיבור לעיר העתיקה ולסמטאות סביב'],fit:'מתאים להיסטוריה, זהות, תרבות וביקור משמעותי יותר.',tip:'אם רוצים להיכנס לאתרים, לבדוק שעות וכרטיסים; לא הכול פתוח בכל יום.'},
    en:{why:'Prague’s Jewish Quarter gives depth you cannot get from viewpoints alone. Josefov was a major Jewish center in Europe for centuries, with synagogues, the Old Jewish Cemetery and stories such as the Golem. Short, central, but meaningful.',see:['Josefov area','Old Jewish Cemetery if entering sites','Historic synagogues','Connection to Old Town lanes'],fit:'Best for history, identity, culture and a more meaningful visit.',tip:'If entering sites, check opening days and tickets first.'}
  },
  'Petřín • Strahov • Castle View Route': {
    he:{why:'זה מסלול תצפיות ורומנטיקה בתוך פראג: גבעת פטרין, אזור Strahov ומבט רחב על העיר. פטרין היה אזור גנים ונופש עירוני, ו־Strahov מוסיף שכבה מנזרית־תרבותית. מתאים כשלא רוצים מוזיאון אבל כן רוצים להבין את העיר מלמעלה.',see:['גבעת פטרין ותצפיות','אזור Strahov Monastery מבחוץ/ספרייה אם פתוח','שבילי גן ונקודות צילום','מבט לכיוון הטירה והעיר העתיקה'],fit:'מתאים לזוגות, שקיעה, צילום והליכה בינונית.',tip:'לבדוק אם הפוניקולר פעיל; אם לא, העלייה ברגל דורשת מאמץ.'},
    en:{why:'A viewpoint-and-romance route inside Prague: Petřín Hill, Strahov area and wide city views. Petřín has long been an urban leisure hill, while Strahov adds a monastic-cultural layer. Good when you want the city from above without a museum-heavy day.',see:['Petřín Hill viewpoints','Strahov Monastery area / library if open','Garden paths and photo points','Views toward castle and Old Town'],fit:'Best for couples, sunset, photos and medium walking.',tip:'Check funicular status; walking up takes effort.'}
  },
  'Letná View • Beer Garden • Metronome Route': {
    he:{why:'לטנה היא הדרך הקלה לקבל תמונת “גלויות” של פראג: גשרים על הוולטאבה, גגות העיר והאוויר הפתוח של הפארק. אחר כך אפשר לשבת לבירה בלי להפוך את הערב למסעדה כבדה. זה מסלול עירוני קצר עם תמורה גבוהה.',see:['תצפית המטרונום','הגשרים של פראג בקו אחד','Letná Park','Beer Garden לפי מזג האוויר'],fit:'מתאים לשקיעה, חברים, ערב קל וצילום.',tip:'לא מתאים לגשם. ביום יפה זה אחד הערבים הפשוטים והטובים בעיר.'},
    en:{why:'Letná is the easiest way to get the postcard bridge view of Prague: Vltava bridges, rooftops and open park air. Then you can sit for beer without turning the evening into a heavy restaurant plan.',see:['Metronome viewpoint','Prague bridges in one line','Letná Park','Beer Garden when weather allows'],fit:'Good for sunset, friends, easy evening and photography.',tip:'Not for rain. In good weather it is one of Prague’s simplest great evenings.'}
  },
  'Dancing House • Náplavka • Riverside Route': {
    he:{why:'מסלול נהר קל שמחבר פראג מודרנית עם אווירה מקומית: Dancing House, טיילת Náplavka, סירות, דוכנים או ברים לפי עונה. זה מתאים במיוחד כשלא רוצים עוד כנסייה או טירה אלא ערב עירוני נינוח.',see:['Dancing House מבחוץ','טיילת Náplavka','גשרי הוולטאבה','אוכל/שתייה קלילה לפי עונה'],fit:'מתאים לערב קל, הליכה אחרי אוכל, זוגות וחברים.',tip:'הכי טוב בסוף יום או בערב. בשבתות לפעמים יש שוק/אווירה חזקה יותר.'},
    en:{why:'A light river route connecting modern Prague with local atmosphere: Dancing House, Náplavka embankment, boats, stands or bars depending on season. Good when you do not want another church or castle.',see:['Dancing House exterior','Náplavka riverside','Vltava bridges','Casual food/drinks depending on season'],fit:'Good for an easy evening, post-meal walk, couples and friends.',tip:'Best late day or evening. Saturdays can have more market energy.'}
  },
  'National Museum • Wenceslas • Lucerna Route': {
    he:{why:'כיכר ואצלב היא לא רק רחוב קניות — היא מקום של אירועים פוליטיים וציבוריים מרכזיים בצ׳כיה המודרנית. עם המוזיאון הלאומי ופסאז׳ Lucerna מקבלים מסלול שמסביר את פראג של המאה ה־20, לא רק ימי הביניים.',see:['National Museum מבחוץ/בפנים','Wenceslas Square','Lucerna Passage והפסל ההפוך','חנויות וקפה באזור'],fit:'מתאים ליום גשם חלקי, היסטוריה מודרנית וקניות קלות.',tip:'אם נכנסים למוזיאון, לא להעמיס עוד מוזיאון באותו יום.'},
    en:{why:'Wenceslas Square is not only shopping; it is a stage of modern Czech public and political history. With the National Museum and Lucerna Passage, this route shows 20th-century Prague, not just medieval Prague.',see:['National Museum exterior/interior','Wenceslas Square','Lucerna Passage and inverted horse statue','Shops and cafés nearby'],fit:'Good for partial rain, modern history and light shopping.',tip:'If entering the museum, do not overload the same day with another museum.'}
  },
  'Kampa • Lennon Wall • Malá Strana Corners': {
    he:{why:'קמפה ומאלה סטרנה נותנים את פראג הרכה: תעלות, גשרים קטנים, קיר לנון, חצרות וסמטאות ליד הנהר. זה מסלול קצר שנועד לגלות פינות חמד ולא רק את האתרים הגדולים.',see:['Kampa Island','Lennon Wall','תעלות קטנות ליד Certovka','סמטאות מאלה סטרנה'],fit:'מתאים לצילום, זוגות, הליכה קלה ומי שאוהב פינות קטנות.',tip:'לא להתייחס לקיר לנון כיעד יחיד; הוא עובד רק כחלק מהמסלול.'},
    en:{why:'Kampa and Malá Strana show Prague’s softer side: canals, small bridges, Lennon Wall, courtyards and lanes near the river. A short route for hidden corners rather than major monuments.',see:['Kampa Island','Lennon Wall','Small Čertovka canal corners','Malá Strana lanes'],fit:'Good for photos, couples, easy walking and small discoveries.',tip:'Do not treat Lennon Wall as the destination; it works as part of the route.'}
  },
  'Tram 22 Scenic Prague Route': {
    he:{why:'קו 22 הוא “סיור זול” בפראג: הוא עובר דרך אזורים יפים ומוביל לכיוון הטירה. זה פתרון טוב כשעייפים מהליכה אבל עדיין רוצים לראות את העיר דרך חלון מקומי.',see:['נסיעה בחשמלית דרך אזורים היסטוריים','גישה נוחה לאזור הטירה','נוף עירוני משתנה','אפשרות לרדת בתחנות לפי כוח וזמן'],fit:'מתאים ליום עייף, גשם קל או מי שרוצה תחבורה ציבורית כחלק מהחוויה.',tip:'לא לנסוע עד הסוף בלי מטרה. לבחור תחנה אחת או שתיים ולרדת.'},
    en:{why:'Tram 22 is a low-cost scenic Prague ride: it passes attractive areas and takes you toward the castle. Good when you are tired of walking but still want to see the city through a local window.',see:['Tram ride through historic areas','Easy access to castle district','Changing city scenery','Hop-off options depending on energy'],fit:'Good for tired days, light rain or making public transport part of the experience.',tip:'Do not just ride end-to-end; pick one or two stops to get off.'}
  },

  'Stephansdom • Graben • Hofburg Classic Walk': {
    he:{why:'זה מסלול הליבה של וינה: קתדרלת סטפנוס, רחובות Graben ו־Kohlmarkt והופבורג. הוא מחבר בין וינה הדתית, המסחרית והקיסרית בלי נסיעה ארוכה. ה־Hofburg היה מרכז שלטון הבסבורג במשך מאות שנים ולכן זה מסלול שמסביר את העיר, לא רק מצלם אותה.',see:['St. Stephen’s Cathedral והגג הצבעוני','Graben ו־Kohlmarkt','Hofburg Palace מבחוץ','כיכרות וחזיתות קיסריות'],fit:'מתאים ליום ראשון בוינה, היכרות בסיסית, היסטוריה וצילום.',tip:'לעצור לקפה באמצע. וינה עובדת טוב בקצב איטי, לא בריצה בין נקודות.'},
    en:{why:'Vienna’s core route: St. Stephen’s Cathedral, Graben/Kohlmarkt and the Hofburg. It connects religious, commercial and imperial Vienna without a long ride. Hofburg was the Habsburg power center for centuries, so this route explains the city, not just photographs it.',see:['St. Stephen’s Cathedral and colored roof','Graben and Kohlmarkt','Hofburg exterior','Imperial squares and façades'],fit:'Best for first day in Vienna, orientation, history and photos.',tip:'Stop for coffee midway. Vienna works best slowly.'}
  },
  'Ringstrasse • Opera • Parliament Route': {
    he:{why:'רינגשטראסה היא חלון הראווה של וינה מהמאה ה־19: שדרה שנבנתה במקום החומות הישנות ובה ריכזו אופרה, פרלמנט, מוזיאונים ובנייני יוקרה. המסלול מראה את וינה כעיר אימפריאלית מודרנית.',see:['Vienna State Opera','Parliament ו־Rathaus מבחוץ','בנייני Ringstrasse','פארקים וכיכרות לאורך השדרה'],fit:'מתאים לאדריכלות, היסטוריה עירונית וצילום.',tip:'אפשר לעשות חלק ברגל וחלק בחשמלית כדי לא להתעייף.'},
    en:{why:'Ringstrasse is Vienna’s 19th-century showcase boulevard, built where old city walls once stood. Opera, Parliament, museums and grand buildings show Vienna as a modern imperial capital.',see:['Vienna State Opera','Parliament and Rathaus exteriors','Ringstrasse architecture','Parks and squares along the boulevard'],fit:'Good for architecture, urban history and photography.',tip:'Mix walking and tram so it does not become exhausting.'}
  },
  'Schönbrunn Palace Gardens Public Half-Day': {
    he:{why:'שנברון היה ארמון הקיץ של הבסבורגים ואחד הסמלים הגדולים של וינה. הוא מושלם לתחבורה ציבורית כי מגיעים במטרו ומקבלים ארמון, גנים ותצפית Gloriette בלי רכב. זה חצי יום בעיר, לא טיול חוץ.',see:['חזית ארמון שנברון','הגנים הסימטריים','Gloriette ותצפית על העיר','אפשרות כניסה לחדרי הארמון'],fit:'מתאים למשפחות, זוגות, היסטוריה וגנים.',tip:'גם בלי כניסה פנימה, הגנים והתצפית שווים. להזמין כרטיסים מראש אם רוצים סיור חדרים.'},
    en:{why:'Schönbrunn was the Habsburg summer palace and one of Vienna’s great symbols. It is perfect by public transport: metro access, palace, gardens and Gloriette viewpoint without a car.',see:['Schönbrunn façade','Formal gardens','Gloriette viewpoint','Optional palace rooms'],fit:'Good for families, couples, history and gardens.',tip:'Even without entering, the gardens and view are worthwhile. Book ahead for palace rooms.'}
  },
  'Belvedere • Karlsplatz • Naschmarkt Route': {
    he:{why:'זה מסלול שמחבר ארמון, אמנות ואוכל: Belvedere נבנה כארמון בארוקי של הנסיך אויגן מסבויה, היום הוא מזוהה גם עם קלימט. Karlsplatz מוסיף אדריכלות ו־Naschmarkt נותן עצירת אוכל נוחה.',see:['Upper/Lower Belvedere וגנים','אפשרות לראות את “הנשיקה” של קלימט אם נכנסים','Karlsplatz ו־Karlskirche','Naschmarkt לאוכל'],fit:'מתאים לתרבות, אוכל, יום גשם חלקי וזוגות.',tip:'להחליט מראש אם נכנסים למוזיאון. בלי כניסה — זה מסלול גנים ושוק, לא יום מוזיאון.'},
    en:{why:'A route connecting palace, art and food: Belvedere was built as Prince Eugene of Savoy’s Baroque palace and is now strongly linked with Klimt. Karlsplatz adds architecture, Naschmarkt adds food.',see:['Upper/Lower Belvedere and gardens','Klimt’s The Kiss if entering','Karlsplatz and Karlskirche','Naschmarkt food stop'],fit:'Good for culture, food, partial rain and couples.',tip:'Decide ahead if you enter the museum; otherwise keep it as gardens + market.'}
  },
  'MuseumsQuartier • Hofburg Culture Route': {
    he:{why:'מסלול תרבות מרכזי שמחבר את Hofburg עם MuseumsQuartier. זה אזור שבו רואים איך וינה עברה מאימפריה למרכז תרבות מודרני: ארמונות, מוזיאונים, חצרות וקפה.',see:['Hofburg ו־Heldenplatz','MuseumsQuartier והחצרות','אפשרות Albertina או Kunsthistorisches','בתי קפה קרובים'],fit:'מתאים ליום עם מזג אוויר לא יציב, תרבות ואדריכלות.',tip:'לבחור מוזיאון אחד. שני מוזיאונים גדולים ביום אחד הופכים את המסלול לכבד מדי.'},
    en:{why:'A central culture route connecting Hofburg with MuseumsQuartier. It shows Vienna’s shift from empire to modern cultural capital: palaces, museums, courtyards and cafés.',see:['Hofburg and Heldenplatz','MuseumsQuartier courtyards','Albertina or Kunsthistorisches option','Nearby cafés'],fit:'Good for unstable weather, culture and architecture.',tip:'Pick one museum; two major museums in one day is too heavy.'}
  },
  'Prater • Giant Wheel • Danube Canal Evening': {
    he:{why:'פראטר נותן את הצד המשחקי של וינה: גלגל ענק היסטורי, פארק שעשועים ואווירה לא רשמית. שילוב עם תעלת הדנובה מוסיף ברים וסטריט־ארט, כך שזה מסלול ערב עירוני שלא דורש נסיעה ארוכה.',see:['Prater Giant Ferris Wheel מ־1897','אזור פארק פראטר','Danube Canal וברים','סטריט־ארט ואווירת ערב'],fit:'מתאים לערב קל, חברים, משפחות מוקדם יותר וצילום.',tip:'להתחיל בפראטר לפני חושך מלא ואז להמשיך לתעלה אם רוצים אווירה צעירה יותר.'},
    en:{why:'Prater shows Vienna’s playful side: the historic Giant Ferris Wheel, amusement park mood and informal energy. Pairing it with Danube Canal adds bars and street art for an easy urban evening.',see:['1897 Giant Ferris Wheel','Prater park area','Danube Canal bars','Street art and evening mood'],fit:'Good for easy evening, friends, families earlier and photos.',tip:'Start at Prater before full dark, then move to the canal for a younger mood.'}
  },
  'Hundertwasserhaus • Stadtpark • Canal Route': {
    he:{why:'מסלול שמראה וינה פחות קלאסית: Hundertwasserhaus עם קירות צבעוניים וקווים לא ישרים, Stadtpark עם פסל שטראוס ותעלת הדנובה עם אווירה מודרנית. טוב כשנמאס מארמונות בלבד.',see:['Hundertwasserhaus מבחוץ','Stadtpark ופסל יוהאן שטראוס','הליכה לכיוון התעלה','אדריכלות וצילום'],fit:'מתאים לצילום, אדריכלות ויום קליל.',tip:'Hundertwasserhaus הוא בעיקר צילום מבחוץ; אל לבנות עליו לבד מסלול ארוך.'},
    en:{why:'A route showing less-classical Vienna: Hundertwasserhaus with color and irregular lines, Stadtpark with Strauss, and the Danube Canal’s modern mood. Good when palaces are enough for one day.',see:['Hundertwasserhaus exterior','Stadtpark and Johann Strauss statue','Walk toward the canal','Architecture and photos'],fit:'Good for photography, architecture and a lighter day.',tip:'Hundertwasserhaus is mainly an exterior photo stop; do not build the whole day around it alone.'}
  },
  'Coffeehouse Vienna • Central • Hawelka Route': {
    he:{why:'בתי הקפה הם חלק מהזהות של וינה, לא רק מקום לשתות. Café Central קשור לדמויות ספרות, פוליטיקה ותרבות; Hawelka נותן תחושה ותיקה ובוהמית יותר. זה מסלול שמסביר את וינה דרך שולחן קפה.',see:['Café Central והאולם ההיסטורי','Café Hawelka או בית קפה קלאסי אחר','עוגות כמו Apfelstrudel / Sachertorte','הליכה קצרה במרכז בין בתי קפה'],fit:'מתאים ליום גשם, זוגות, תרבות וקצב איטי.',tip:'לא חייבים לאכול ארוחה מלאה. קפה ועוגה מספיקים כדי לקבל את החוויה.'},
    en:{why:'Coffeehouses are part of Vienna’s identity, not just places to drink. Café Central is tied to literary, political and cultural history; Hawelka gives an older bohemian feeling. This route explains Vienna through a café table.',see:['Café Central historic hall','Café Hawelka or another classic café','Apfelstrudel / Sachertorte style desserts','Short central walk between cafés'],fit:'Good for rain, couples, culture and slow travel.',tip:'No need for a full meal. Coffee and cake are enough for the experience.'}
  },
  'Karlskirche • Musikverein • Secession Route': {
    he:{why:'מסלול שמחבר את וינה של מוזיקה, אמנות ואדריכלות: Karlskirche הבארוקית, Musikverein שמזוהה עם קונצרט השנה החדשה, ו־Secession שמייצג את המודרניזם הווינאי. הכל קרוב ונוח בתחבורה ציבורית.',see:['Karlskirche מבחוץ/בפנים','Musikverein מבחוץ או קונצרט אם יש','Secession Building','Karlsplatz'],fit:'מתאים למוזיקה, אדריכלות ותרבות בלי יום ארוך.',tip:'אם יש קונצרט בערב, להפוך את זה למסלול אחר הצהריים שמסתיים במוזיקה.'},
    en:{why:'A compact route connecting Vienna’s music, art and architecture: Baroque Karlskirche, Musikverein of New Year’s Concert fame, and Secession as Viennese modernism. Close and public-friendly.',see:['Karlskirche exterior/interior','Musikverein exterior or concert','Secession Building','Karlsplatz'],fit:'Good for music, architecture and culture without a long day.',tip:'If there is an evening concert, make this an afternoon route ending in music.'}
  },
  'Grinzing Wine Tavern Light Evening': {
    he:{why:'גרינציג נותן תחושת כפר יין בתוך וינה: Heuriger, יין מקומי, חצרות ואווירה רגועה. זה לא “חיי לילה” רועשים אלא ערב אוסטרי קליל שנגיש בחשמלית/תחבורה ציבורית.',see:['רחובות Grinzing','Heuriger – טברנת יין מקומית','אוכל אוסטרי פשוט','אווירה כפרית בערב'],fit:'מתאים לזוגות, חברים, יין וערב רגוע.',tip:'לבדוק שעות של Heuriger ספציפי. לא כל מקום פתוח כל ערב.'},
    en:{why:'Grinzing gives a wine-village feeling inside Vienna: heuriger taverns, local wine, courtyards and relaxed atmosphere. It is not loud nightlife; it is an easy Austrian evening by tram/public transport.',see:['Grinzing streets','Heuriger wine tavern','Simple Austrian food','Village-like evening mood'],fit:'Good for couples, friends, wine and a calm night.',tip:'Check the specific heuriger opening days; not every place opens every night.'}
  },

  'Cathedral • Petite France Essential Walk': {
    he:{why:'זה מסלול הבסיס של שטרסבורג: קתדרלה גותית ענקית, סמטאות, תעלות ו־Petite France. הוא מוכיח שלא צריך לנסוע רחוק כדי לקבל חוויה חזקה — העיר עצמה מלאה היסטוריה אלזסית וגרמנית־צרפתית.',see:['קתדרלת שטרסבורג והחזית המפורטת','השעון האסטרונומי אם נכנסים','Petite France והתעלות','בתי חצי־עץ וגשרים'],fit:'מתאים ליום ראשון, צילום, זוגות והיכרות עם העיר.',tip:'לחזור לאזור גם בערב. האור על הקתדרלה והתעלות משנה את החוויה.'},
    en:{why:'Strasbourg’s essential route: huge Gothic cathedral, lanes, canals and Petite France. It proves you do not need a long ride to get a strong experience — the city itself is packed with Alsatian and Franco-German history.',see:['Strasbourg Cathedral façade','Astronomical clock if entering','Petite France canals','Half-timbered houses and bridges'],fit:'Best for first day, photos, couples and city orientation.',tip:'Return in the evening; light changes the cathedral and canals.'}
  },
  'Batorama Boat • Old Town Orientation': {
    he:{why:'שייט Batorama/תעלות הוא דרך קלה להבין את מבנה שטרסבורג: העיר העתיקה, נהר Ill, הגשרים והרובע האירופי. זה מתאים במיוחד כשיש מעט זמן או כשלא רוצים ללכת הרבה.',see:['תעלות ונהר Ill','חזיתות העיר העתיקה','מעברים דרך אזורי מים וגשרים','אפשרות לראות את הרובע האירופי לפי מסלול'],fit:'מתאים למשפחות, זוגות, יום ראשון בעיר ויום עייף.',tip:'לבדוק שעה ושפה של ההסברים. לשלב עם הליכה קצרה לפני או אחרי.'},
    en:{why:'A Batorama/canal boat ride is an easy way to understand Strasbourg’s structure: Old Town, Ill River, bridges and European Quarter. Good when time is short or walking energy is low.',see:['Canals and Ill River','Old Town façades','Water passages and bridges','European Quarter depending on route'],fit:'Good for families, couples, first day and tired days.',tip:'Check departure time and commentary language. Pair with a short walk before or after.'}
  },
  'European Quarter Tram • Orangerie Route': {
    he:{why:'הרובע האירופי מראה למה שטרסבורג היא לא רק עיר ציורית: כאן יושבים מוסדות אירופה, והפארק Orangerie מוסיף ירוק ורוגע. המסלול נוח בחשמלית ולא דורש רכב.',see:['European Parliament מבחוץ','Council of Europe / מוסדות סביב','Parc de l’Orangerie','אדריכלות מודרנית מול עיר עתיקה'],fit:'מתאים למי שרוצה להבין את התפקיד הפוליטי של העיר וגם לנוח בפארק.',tip:'לשלב את המוסדות עם Orangerie; אחרת זה עלול להרגיש כמו רק בנייני משרדים.'},
    en:{why:'The European Quarter shows why Strasbourg is not only picturesque: EU institutions are based here, and Orangerie Park adds green calm. Easy by tram, no car needed.',see:['European Parliament exterior','Council of Europe / nearby institutions','Parc de l’Orangerie','Modern architecture contrasted with Old Town'],fit:'Good for understanding the city’s political role and resting in a park.',tip:'Pair institutions with Orangerie; otherwise it can feel like only office buildings.'}
  },
  'Krutenau Food • Bars • Student Quarter Walk': {
    he:{why:'Krutenau הוא הצד הצעיר והיומיומי יותר של שטרסבורג: ברים, מסעדות קז׳ואל, סטודנטים ורחובות פחות “גלויה”. זה מסלול טוב לאוכל וערב בלי להיתקע בתחבורה מאוחרת.',see:['רחובות Krutenau','ברים קטנים ומסעדות קז׳ואל','אווירה סטודנטיאלית','הליכה קצרה חזרה למרכז'],fit:'מתאים לאוכל, ערב רגוע, חברים וזוגות.',tip:'לבחור מקום אוכל אחד ומקום שתייה אחד. לא צריך לרוץ בין יותר מדי תחנות.'},
    en:{why:'Krutenau is Strasbourg’s younger, everyday side: bars, casual restaurants, students and less postcard-perfect streets. Good for food and evening without late-night transport risk.',see:['Krutenau streets','Small bars and casual restaurants','Student atmosphere','Short walk back toward center'],fit:'Good for food, relaxed evening, friends and couples.',tip:'Pick one food stop and one drink stop; no need to over-hop.'}
  },
  'Covered Bridges • Vauban Dam Sunset Route': {
    he:{why:'Ponts Couverts ו־Barrage Vauban נותנים את אחד הנופים העירוניים היפים בשטרסבורג: תעלות, מגדלים וגגות העיר העתיקה. זה מסלול קצר, נוח, מושלם לשקיעה ולא דורש תחבורה ארוכה.',see:['הגשרים המקורים','Barrage Vauban ותצפית אם פתוח','תעלות העיר','אור שקיעה על Petite France'],fit:'מתאים לצילום, זוגות וסיום יום רגוע.',tip:'להגיע לפני השקיעה. אחרי שהאור נעלם חלק גדול מהקסם יורד.'},
    en:{why:'Ponts Couverts and Barrage Vauban give one of Strasbourg’s best urban views: canals, towers and Old Town rooftops. Short, easy, perfect for sunset, no long transit needed.',see:['Covered Bridges','Barrage Vauban viewpoint if open','City canals','Sunset light over Petite France'],fit:'Best for photos, couples and a calm end of day.',tip:'Arrive before sunset; after the light fades much of the magic drops.'}
  },
  'Neustadt • Republic Square Architecture Route': {
    he:{why:'Neustadt מספר את התקופה הגרמנית של שטרסבורג אחרי 1871, כשהעיר הפכה לחלק מהאימפריה הגרמנית. השדרות, הכיכרות והמבנים המונומנטליים מסבירים למה העיר היא שילוב צרפתי־גרמני ולא רק אלזס ציורית.',see:['Place de la République','מבני Neustadt הגדולים','שדרות רחבות ואדריכלות גרמנית־אימפריאלית','חיבור חזרה למרכז העתיק'],fit:'מתאים לחובבי היסטוריה עירונית, אדריכלות והקשר צרפתי־גרמני.',tip:'לקרוא מראש 2 דקות על 1871 ואלזס־לורן; המסלול נהיה הרבה יותר מעניין.'},
    en:{why:'Neustadt tells Strasbourg’s German imperial period after 1871. Its boulevards, squares and monumental buildings explain why the city feels Franco-German, not only picturesque Alsace.',see:['Place de la République','Large Neustadt buildings','Broad boulevards and imperial architecture','Connection back to Old Town'],fit:'Good for urban history, architecture and Franco-German context.',tip:'Read briefly about 1871 and Alsace-Lorraine; the route becomes much richer.'}
  },
  'Orangerie Park • European Institutions Easy Route': {
    he:{why:'פארק Orangerie הוא מקום טוב לנשום בתוך שטרסבורג: אגם, שבילים, חסידות ואווירה משפחתית. יחד עם מוסדות אירופה לידו זה מסלול קל שמאזן בין פוליטיקה, טבע קטן ומנוחה.',see:['Parc de l’Orangerie','אגם ושבילים','אזור מוסדות אירופה','אפשרות קפה/פיקניק'],fit:'מתאים למשפחות, ילדים, יום רגוע או הפסקה אחרי העיר העתיקה.',tip:'לא לצפות לאטרקציית ענק. הערך הוא רוגע, ירוק ונוחות.'},
    en:{why:'Orangerie Park is where Strasbourg breathes: lake, paths, storks and family atmosphere. Combined with nearby European institutions it balances politics, greenery and rest.',see:['Parc de l’Orangerie','Lake and paths','European institutions area','Café/picnic option'],fit:'Good for families, children, calm days and a break from Old Town.',tip:'Do not expect a huge attraction; the value is calm, green space and ease.'}
  },
  'Saint-Thomas • Ill River Quiet Walk': {
    he:{why:'כנסיית Saint-Thomas וסביבת נהר Ill נותנים מסלול שקט יותר מהקתדרלה ו־Petite France. הכנסייה קשורה למסורת הפרוטסטנטית של העיר, וההליכה סביב הנהר מראה שטרסבורג פחות עמוסה.',see:['Saint-Thomas Church','הליכה ליד נהר Ill','גשרים קטנים וסמטאות','אווירה שקטה יותר מהמרכז העמוס'],fit:'מתאים למי שכבר ראה את האתרים המרכזיים ורוצה שכבה שקטה יותר.',tip:'טוב כמעבר בין המרכז ל־Petite France בלי ללכת באותו רחוב תיירותי.'},
    en:{why:'Saint-Thomas Church and the Ill River area give a quieter route than the cathedral and Petite France. The church connects to Strasbourg’s Protestant tradition, while the river walk shows a softer city layer.',see:['Saint-Thomas Church','Ill River walk','Small bridges and lanes','Quieter mood than the central crowds'],fit:'Good after the main sights, when you want a calmer layer.',tip:'Use it as a quiet connector between the center and Petite France.'}
  },
  'Modern Art Museum • Barrage Vauban Route': {
    he:{why:'מסלול שמחבר אמנות מודרנית עם תצפית עירונית: Musée d’Art Moderne נמצא ליד Barrage Vauban, כך שאפשר לשלב מוזיאון, גשרים ונוף בלי תחבורה מסובכת.',see:['Museum of Modern and Contemporary Art','Barrage Vauban','Ponts Couverts','נוף ל־Petite France'],fit:'מתאים ליום גשם חלקי, אמנות, צילום ותצפית.',tip:'אם לא נכנסים למוזיאון, עדיין שווה להגיע בשביל Vauban והתצפית.'},
    en:{why:'A route combining modern art with an urban viewpoint: the Modern and Contemporary Art Museum sits near Barrage Vauban, so you can pair museum, bridges and view without complex transport.',see:['Museum of Modern and Contemporary Art','Barrage Vauban','Ponts Couverts','View toward Petite France'],fit:'Good for partial rain, art, photos and a viewpoint.',tip:'Even without entering the museum, Vauban and the view are worthwhile.'}
  },
  'Christmas Market Core Route': {
    he:{why:'שטרסבורג מכונה בירת חג המולד, ובחורף השווקים במרכז הם חוויה בפני עצמה: אורות, דוכנים, יין חם וכיכרות מלאות. זה מסלול עונתי בלבד, אבל כשהוא פעיל הוא אחד הדברים החזקים בעיר.',see:['Place Kléber והעץ הגדול','Place Broglie ושווקים','רחובות מוארים סביב הקתדרלה','מאכלים ושתייה חמה'],fit:'מתאים לחורף, זוגות, משפחות וצילום ערב.',tip:'בעונה צפוף מאוד. להגיע מוקדם יחסית ולשמור על ארנק/טלפון.'},
    en:{why:'Strasbourg is nicknamed the Capital of Christmas, and in winter the central markets become a major experience: lights, stalls, mulled wine and crowded squares. Seasonal, but one of the city’s strongest draws when active.',see:['Place Kléber and the large tree','Place Broglie markets','Lit streets around the cathedral','Food and hot drinks'],fit:'Best for winter, couples, families and evening photos.',tip:'It gets very crowded. Go relatively early and watch your belongings.'}
  }
});

DATA.unshift(...PUBLIC_CITY_TRIPS);


function getOfflinePacks(){ return load(STORAGE.offlinePacks, {}); }
function setOfflinePacks(v){ save(STORAGE.offlinePacks, v); }
function packItemsForCity(city){
  return DATA.filter(x => x.city === city).map(x => ({
    id:x.id, city:x.city, cat:x.cat, name:x.name, title:x.title || null,
    lat:x.lat, lng:x.lng, drive:x.drive, transit:x.transit,
    tags:x.tags || [], cuisine:x.cuisine || null, price:x.price || null,
    vibe:x.vibe || null, note:x.note || null, description:x.description || null,
    imagePrompt:x.imagePrompt || null, parking:!!x.parking
  }));
}
function offlinePackSummary(city){
  const packs = getOfflinePacks();
  const pack = packs[city];
  if(!pack) return null;
  return pack;
}
function refreshOfflineStatus(){
  const el = $('offlinePackStatus');
  if(!el) return;
  const city = $('offlineCitySelect')?.value || activeCity();
  const pack = offlinePackSummary(city);
  if(!pack){
    el.innerHTML = `<span class="offline-bad">${cityLabel(city)} is not saved offline yet.</span>`;
    return;
  }
  const date = new Date(pack.savedAt).toLocaleString(getLang()==='he'?'he-IL':'en-US');
  el.innerHTML = `<span class="offline-good">${cityLabel(city)} is ready offline.</span><br>${pack.itemsCount} places · ${pack.language.toUpperCase()} · ${pack.packLevel} · saved ${date}`;
}
function saveCityOfflinePack(){
  const city = $('offlineCitySelect')?.value || activeCity();
  syncRouteBuilderToCity(city);
  const packLevel = $('offlinePackLevel')?.value || 'text';
  const packs = getOfflinePacks();
  const cityItems = packItemsForCity(city);
  packs[city] = {
    version:'v48',
    city,
    cityName:CITIES[city]?.name || city,
    language:getLang(),
    packLevel,
    savedAt:new Date().toISOString(),
    itemsCount:cityItems.length,
    items:cityItems,
    myTrip:getTrip().filter(x => x.city === city),
    savedOffline:getSaved().filter(x => x.city === city),
    likes:getLikes()
  };
  setOfflinePacks(packs);
  refreshOfflineStatus();
}
function clearCityOfflinePack(){
  const city = $('offlineCitySelect')?.value || activeCity();
  const packs = getOfflinePacks();
  delete packs[city];
  setOfflinePacks(packs);
  refreshOfflineStatus();
}
function cityLabel(city){ return getLang()==='he' ? (CITY_HE[city] || CITIES[city]?.name || city) : (CITIES[city]?.name || city); }
function ttsAvailable(){ return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window; }
function stripHtml(text){ return String(text || '').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim(); }
function speechTextFor(item){
  const g = guideContentFor(item);
  const lang = getLang();
  const title = titleFor(item);
  const cuisine = item.cat === 'food' ? `${lang==='he'?'סוג מטבח':'Cuisine'}: ${textFor(item.cuisine) || ''}. ${item.price ? (lang==='he'?'מחיר':'Price') + ': ' + item.price + '. ' : ''}` : '';
  const see = (g.see || []).join(lang==='he' ? '. ' : '. ');
  if(lang === 'he'){
    return stripHtml(`${title}. ${cuisine} למה כדאי להגיע: ${g.why}. מה רואים או עושים שם: ${see}. למי זה מתאים: ${g.fit}. טיפ חשוב: ${g.tip}.`);
  }
  return stripHtml(`${title}. ${cuisine} Why go: ${g.why}. What you will see or do: ${see}. Who it fits: ${g.fit}. Useful tip: ${g.tip}.`);
}
function speakItem(item){
  if(!ttsAvailable()){
    alert(getLang()==='he' ? 'הקראה קולית לא נתמכת בדפדפן הזה.' : 'Text-to-speech is not supported in this browser.');
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(speechTextFor(item));
  u.lang = getLang()==='he' ? 'he-IL' : 'en-US';
  u.rate = getLang()==='he' ? 0.92 : 0.96;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}
function stopSpeaking(){ if(ttsAvailable()) window.speechSynthesis.cancel(); }
function distanceKm(a,b){ if(!a||!b||a.lat==null||b.lat==null) return null; const R=6371,dLat=(b.lat-a.lat)*Math.PI/180,dLng=(b.lng-a.lng)*Math.PI/180,s1=Math.sin(dLat/2),s2=Math.sin(dLng/2),c=s1*s1+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*s2*s2; return 2*R*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)); }
function fmtDistance(km){ if(km==null) return 'distance: GPS/offline unknown'; return km<1?`${Math.round(km*1000)} m`:`${km.toFixed(1)} km`; }
function originQuery(){const p=originPoint(); return p.query || `${p.lat},${p.lng}`}
function placeQuery(p){return p.query || `${p.lat},${p.lng}`}
function openUrl(url){window.open(url,'_blank','noopener')}
function googleMode(){return activePackageMode()==='car'?'driving':'transit'}
function googleDirections(p){openUrl(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originQuery())}&destination=${encodeURIComponent(placeQuery(p))}&travelmode=${googleMode()}`)}
function googleSearch(p){openUrl(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery(p))}`)}
function moovit(p){openUrl(`https://moovitapp.com/index/en/public_transit-search?to=${encodeURIComponent(p.name||p.query)}`)}
function waze(p){openUrl(`https://waze.com/ul?ll=${p.lat},${p.lng}&navigate=yes`)}
function uber(p){openUrl(`https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.name||'Destination')}`)}
function bolt(){openUrl('https://bolt.eu/en/')}
function visibleItems(){
  const city=activeCity(), packageMode=activePackageMode(), days=Number($('stayDays').value)||3, driveLimit=Number($('driveHours')?.value)||5;
  if(currentTab==='saved') return getSaved();
  if(currentTab==='mytrip') return getTrip();
  if(currentTab==='recommendations') return getRecs().filter(x=>x.city===city);
  const base=userLocation || CITIES[city].centre;
  const likes=getLikes();

  // Car mode: Day trips are full Route Packs, not loose POIs.
  if(packageMode==='car' && currentTab==='trips'){
    let packs=(CAR_ROUTE_PACKS[city]||[]).filter(x=>x.drive<=driveLimit);
    packs=packs.map(x=>({...x,score:likes[x.id]||0,distance:distanceKm(base,x)}));
    const sortOrder=$('sortOrder')?.value || 'near';
    packs.sort((a,b)=>{
      const da=a.distance??999, db=b.distance??999;
      if(sortOrder==='far') return db-da || (a.drive||99)-(b.drive||99);
      return da-db || (a.drive||99)-(b.drive||99);
    });
    const size=Math.min(Math.max(days,1),20,packs.length);
    const safeOffset = packs.length ? (packOffset % packs.length) : 0;
    const rotated=[...packs.slice(safeOffset),...packs.slice(0,safeOffset)];
    return rotated.slice(0,size);
  }

  let items=DATA.filter(x=>x.city===city && x.cat===currentTab);
  if(packageMode==='car'){
    items=items.filter(x=>x.parking || x.cat==='trips');
    if(currentTab==='trips') items=items.filter(x=>x.drive<=driveLimit);
  } else {
    items=items.filter(x=>x.transit<=1.8 || x.cat!=='trips');
    // v43: in Public Travels, day-trip tab means practical in-city/public routes, not long out-of-city rides.
    if(currentTab==='trips') items=items.filter(x=>x.transit<=0.8 && !(x.tags||[]).includes('car-best'));
  }
  items=items.map(x=>({...x,score:likes[x.id]||0,distance:distanceKm(base,x)}));
  const sortOrder=$('sortOrder')?.value || 'near';
  items.sort((a,b)=>{
    const da=a.distance??999, db=b.distance??999;
    if(packageMode==='car' && sortOrder==='far') return db-da || (b.score||0)-(a.score||0);
    return da-db || (b.score||0)-(a.score||0);
  });
  if(items.length === 0 && currentTab === 'trips') {
    // v43 fallback: still keep public mode city-first. Do not bring back 1-2h public day trips.
    items = DATA.filter(x=>x.city===city && x.cat==='trips' && (packageMode==='car' || (x.transit<=0.8 && !(x.tags||[]).includes('car-best'))))
      .map(x=>({...x,score:likes[x.id]||0,distance:distanceKm(base,x)}))
      .sort((a,b)=> packageMode==='car' ? (a.drive||99)-(b.drive||99) : (a.transit||99)-(b.transit||99));
  }
  const size=Math.min(Math.max(days,1),20,items.length);
  const safeOffset = items.length ? (packOffset % items.length) : 0;
  const rotated=[...items.slice(safeOffset),...items.slice(0,safeOffset)];
  return rotated.slice(0,size);
}
function uniqueById(items){ const seen=new Set(); return items.filter(x=>{ if(seen.has(x.id)) return false; seen.add(x.id); return true; }); }
function routePoints(){
  const city=activeCity(), c=CITIES[city], h=hotel();
  const core=[
    {id:'centre',name:getLang()==='he'?`מרכז ${cityNameFor(city)}`:`${c.name} City Centre`,...c.centre, group:'Core'},
    {id:'hotel',name:h.query?(getLang()==='he'?`מלון: ${h.query}`:`Hotel: ${h.query}`):(getLang()==='he'?'כתובת מלון':'Hotel address'),query:h.query||'',lat:null,lng:null, group:'Core'}
  ];
  const tripItems=getTrip().filter(x=>x.city===city).map(x=>({...x, group:'My Trip'}));
  const savedItems=getSaved().filter(x=>x.city===city).map(x=>({...x, group:'Saved offline'}));
  return uniqueById([...core, ...tripItems, ...savedItems]);
}
function groupedOptions(points){
  const groups=['Core','My Trip','Saved offline'];
  return groups.map(g=>{
    const arr=points.filter(p=>p.group===g);
    if(!arr.length) return '';
    return `<optgroup label="${g}">${arr.map(p=>`<option value="${p.id}">${titleFor(p)}</option>`).join('')}</optgroup>`;
  }).join('');
}
function openSelectedRoute(){ const d=findDest(); const mode=activeMode(); if(mode==='car'){ if(Number.isFinite(d.lat)) waze(d); else googleDirections(d); return; } if(mode==='transit'){ moovit(d); return; } if(mode==='uber'){ if(Number.isFinite(d.lat)) uber(d); else googleDirections(d); return; } if(mode==='bolt'){ bolt(); return; } googleDirections(d); }
function updateRouteOptions(){
  const savedCity = load('dtf_last_city_v17','prague');
  const currentOrigin=$('originSelect').value || originIdForCity(savedCity);
  $('originSelect').innerHTML=AIRPORT_ORIGINS.map(o=>`<option value="${o.id}">${o.label}</option>`).join('');
  $('originSelect').value=AIRPORT_ORIGINS.some(o=>o.id===currentOrigin)?currentOrigin:originIdForCity(savedCity);
  save('dtf_last_city_v17', activeCity());
  if($('offlineCitySelect')) $('offlineCitySelect').value = activeCity();
  const pts=routePoints();
  const currentDest=$('destinationSelect').value;
  $('destinationSelect').innerHTML=groupedOptions(pts);
  $('destinationSelect').value=pts.some(p=>p.id===currentDest)?currentDest:'centre';
  $('hotelWrap').classList.toggle('hidden',$('destinationSelect').value!=='hotel');
  modeNotice();
}
function findDest(){ const id=$('destinationSelect').value; return routePoints().find(p=>p.id===id) || {name:'Destination',query:id}; }
function safeJson(o){return JSON.stringify(o).replaceAll("'","&#39;")}
function isIn(list,id){return list.some(x=>x.id===id)}
function flash(message){
  let el=document.getElementById('dtfToast');
  if(!el){
    el=document.createElement('div');
    el.id='dtfToast';
    el.style.cssText='position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:99999;background:#0f172a;color:#f8fafc;border:1px solid rgba(148,163,184,.45);box-shadow:0 12px 40px rgba(0,0,0,.35);border-radius:999px;padding:11px 16px;font-weight:800;font-size:14px;opacity:0;transition:opacity .18s ease;pointer-events:none;';
    document.body.appendChild(el);
  }
  el.textContent=message;
  el.style.opacity='1';
  clearTimeout(window.__dtfToastTimer);
  window.__dtfToastTimer=setTimeout(()=>{el.style.opacity='0'},1400);
}
function saveOffline(item){const a=getSaved(); if(!isIn(a,item.id)){setSaved([...a,item]); flash(getLang()==='he'?'נשמר לאופליין':'Saved offline')}else{flash(getLang()==='he'?'כבר שמור לאופליין':'Already saved offline')} render()}
function addTrip(item){const a=getTrip(); if(!isIn(a,item.id)){setTrip([...a,item]); flash(getLang()==='he'?'נוסף ל־My Trip':'Added to My Trip')}else{flash(getLang()==='he'?'כבר נמצא ב־My Trip':'Already in My Trip')} render()}
function removeSaved(id){setSaved(getSaved().filter(x=>x.id!==id)); flash(getLang()==='he'?'נמחק מהאופליין':'Removed offline'); render()}
function removeTrip(id){setTrip(getTrip().filter(x=>x.id!==id)); flash(getLang()==='he'?'נמחק מהטיול שלי':'Removed from My Trip'); render()}
function clearSaved(){if(confirm('Clear all saved offline items?')){setSaved([]);flash(getLang()==='he'?'כל השמורים נמחקו':'Saved offline cleared');render()}}
function clearTrip(){if(confirm('Clear My Trip?')){setTrip([]);flash(getLang()==='he'?'הטיול נוקה':'My Trip cleared');render()}}
function vote(id,delta){const l=getLikes(); l[id]=(l[id]||0)+delta; setLikes(l); flash(delta>0?(getLang()==='he'?'סומן לייק':'Liked'):(getLang()==='he'?'סומן פחות מתאים':'Marked as less relevant')); render()}
function addCustom(){ return; }

function toggleMore(id){
  const el = document.getElementById(`more-${id}`);
  if(!el) return;
  const open = !el.classList.contains('hidden');
  el.classList.toggle('hidden', open);
}
function tellMoreLabel(){ return getLang()==='he' ? '📖 ספר לי עוד' : '📖 Tell me more'; }
function readGuideLabel(){ return getLang()==='he' ? '🔊 הקרא הסבר' : '🔊 Read guide'; }
function stopGuideLabel(){ return getLang()==='he' ? '⏹ עצור' : '⏹ Stop'; }
function actions(item){
  const packageMode=activePackageMode();
  const coords=Number.isFinite(item.lat)&&Number.isFinite(item.lng);
  let navBtns='';
  if(packageMode==='car') navBtns=`${coords?`<button class="icon-btn" title="Waze from current origin" onclick='waze(${safeJson(item)})'>🚗</button>`:''}<button class="map-action-btn google-map-btn" title="Open in Google Maps" onclick='googleDirections(${safeJson(item)})'>🗺️ Google Maps</button>`;
  else navBtns=`<button class="icon-btn" title="Moovit / public travel" onclick='moovit(${safeJson(item)})'>🚇</button>${coords?`<button class="icon-btn" title="Waze" onclick='waze(${safeJson(item)})'>🚗</button>`:''}<button class="map-action-btn google-map-btn" title="Open in Google Maps" onclick='googleDirections(${safeJson(item)})'>🗺️ Google Maps</button><button class="icon-btn" title="Uber" onclick='uber(${safeJson(item)})'>🚕</button><button class="icon-btn" title="Bolt" onclick="bolt()">⚡</button>`;
  return `${navBtns}<button class="icon-btn like" title="Like" onclick="vote('${item.id}',1)">👍</button><button class="icon-btn unlike" title="Unlike" onclick="vote('${item.id}',-1)">👎</button><button class="add-trip-btn" title="Add to My Trip" onclick='addTrip(${safeJson(item)})'>➕ ${getLang()==='he'?'הוסף לטיול שלי':'Add to My Trip'}</button><button class="icon-btn save" title="Save offline" onclick='saveOffline(${safeJson(item)})'>💾</button>${currentTab==='mytrip'?`<button class="icon-btn remove" title="Remove from My Trip" onclick="removeTrip('${item.id}')">🗑️</button>`:''}${currentTab==='saved'?`<button class="icon-btn remove" title="Remove offline" onclick="removeSaved('${item.id}')">🗑️</button>`:''}`
}
function routePackCard(item){
  const g = carGuideFor(item);
  const base=userLocation || CITIES[activeCity()].centre;
  const km=distanceKm(base,item);
  const score=getLikes()[item.id]||0;
  const lang=getLang();
  const labels = lang==='he'
    ? {route:'מסלול רכב יומי', total:'זמן כולל משוער', drive:'נהיגה לכל כיוון', stops:'תחנות במסלול', food:'איפה לאכול באזור', parking:'חניה ולוגיקה', best:'למי זה מתאים', tip:'טיפ מסלול', nav:'ניווט ליעד הראשי'}
    : {route:'Car day route', total:'Estimated total day', drive:'Drive each way', stops:'Route stops', food:'Where to eat nearby', parking:'Parking & route logic', best:'Best for', tip:'Route tip', nav:'Navigate to main destination'};
  const stopsHtml=(g.stops||[]).map((s,i)=>`<li><strong>${i+1}. ${s.name}</strong><span>${s.duration||''}</span><p>${s.text}</p>${Number.isFinite(s.lat)?`<button class="icon-btn" onclick='waze({lat:${s.lat},lng:${s.lng},name:${JSON.stringify(s.name)}})'>🚗</button><button class="map-action-btn google-map-btn" onclick='googleDirections({lat:${s.lat},lng:${s.lng},name:${JSON.stringify(s.name)}})'>🗺️ Google Maps</button>`:''}</li>`).join('');
  const foodHtml=(g.food||[]).map(f=>`<li><strong>${f.name}</strong><span>${f.price||''} · ${f.cuisine||''}</span><p>${f.why}</p></li>`).join('');
  return `<article class="card guide-card route-pack-card">
    <img class="place-image" src="${imageFor(item)}" alt="${titleFor(item)}" loading="lazy" />
    <div class="card-body">
      <div class="card-topline"><span class="category-pill">${labels.route}</span><span class="distance-pill">${fmtDistance(km)}</span></div>
      <h3>${titleFor(item)}</h3>
      <p class="card-hook">${g.subtitle}</p>
      <div class="route-summary"><span>🚗 ${labels.drive}: ${item.drive.toFixed(1)}h</span><span>🕒 ${labels.total}: ${item.totalHours}h</span><span>⭐ score ${score}</span></div>
      <section class="guide-section"><strong>${lang==='he'?'למה המסלול הזה הגיוני?':'Why this route makes sense'}</strong><p>${g.why}</p></section>
      <section class="route-block"><strong>${labels.stops}</strong><ol class="route-stops">${stopsHtml}</ol></section>
      <section class="route-block"><strong>${labels.food}</strong><ul class="food-stops">${foodHtml}</ul></section>
      <section class="guide-grid"><div><strong>${labels.parking}</strong><p>${g.parking}</p></div><div><strong>${labels.best}</strong><p>${g.bestFor}</p></div></section>
      <section class="guide-section"><strong>${labels.tip}</strong><p>${g.tip}</p></section>
      <div class="compact-actions main-card-actions">
        <button class="icon-btn" title="${labels.nav}" onclick='waze(${safeJson(item)})'>🚗</button>
        <button class="map-action-btn google-map-btn" title="Open in Google Maps" onclick='googleDirections(${safeJson(item)})'>🗺️ Google Maps</button>
        <button class="icon-btn speak" onclick='speakItem(${safeJson(item)})'>${readGuideLabel()}</button>
        <button class="icon-btn stop-speak" onclick="stopSpeaking()">${stopGuideLabel()}</button>
        <button class="icon-btn like" onclick="vote('${item.id}',1)">👍</button>
        <button class="icon-btn unlike" onclick="vote('${item.id}',-1)">👎</button>
        <button class="add-trip-btn" onclick='addTrip(${safeJson(item)})'>➕ ${lang==='he'?'הוסף לטיול שלי':'Add to My Trip'}</button>
        <button class="icon-btn save" onclick='saveOffline(${safeJson(item)})'>💾</button>
        ${currentTab==='mytrip'?`<button class="icon-btn remove" onclick="removeTrip('${item.id}')">🗑️</button>`:''}${currentTab==='saved'?`<button class="icon-btn remove" onclick="removeSaved('${item.id}')">🗑️</button>`:''}
      </div>
    </div>
  </article>`;
}

function card(item){
  if(isRoutePack(item)) return routePackCard(item);
  const base=userLocation || CITIES[activeCity()].centre;
  const km=distanceKm(base,item);
  const score=getLikes()[item.id]||0;
  const mode=activePackageMode();
  const g=guideContentFor(item);
  const travelText = mode === 'car'
    ? (item.drive ? `${item.drive.toFixed(1)}h drive each way` : 'Driving time unknown')
    : (item.transit ? `${item.transit.toFixed(1)}h public travel` : 'Public travel: verify online');
  const cuisineLine = item.cat === 'food'
    ? `<div class="food-profile"><strong>${getLang()==='he'?'סוג מטבח':'Cuisine'}:</strong> ${textFor(item.cuisine) || (getLang()==='he'?'מטבח מקומי':'Local food')} ${item.price ? ` · <strong>${getLang()==='he'?'מחיר':'Price'}:</strong> ${item.price}` : ''} ${item.vibe ? ` · ${textFor(item.vibe)}` : ''}</div>`
    : '';
  const sectionTitle = getLang()==='he'
    ? {why:'למה המלצנו על המקום?', see:'מה רואים / עושים שם?', fit:'למי זה מתאים?', tip:'טיפ חשוב', details:'הסבר מורחב'}
    : {why:'Why we recommend it', see:'What you’ll see / do', fit:'Who it fits', tip:'Useful tip', details:'Deeper guide'};
  const seeList = (g.see||[]).map(x=>`<li>${x}</li>`).join('');
  const shortIntro = g.why || textFor(item.description) || textFor(item.note) || '';
  const moreId = `more-${item.id}`;
  return `<article class="card guide-card">
    <img class="place-image" src="${imageFor(item)}" alt="${titleFor(item) || 'Place'}" loading="lazy" />
    <div class="card-body">
      <div class="card-topline"><span class="category-pill">${catNameFor(item.cat)}</span><span class="distance-pill">${fmtDistance(km)}</span></div>
      <h3>${titleFor(item)}</h3>
      <div class="meta">${travelText} · score <span class="score">${score}</span></div>
      ${cuisineLine}
      <p class="card-hook">${shortIntro}</p>
      <div class="compact-actions main-card-actions">
        <button class="tell-more-btn" onclick="toggleMore('${item.id}')">${tellMoreLabel()}</button>
        ${actions(item)}
      </div>
      <section id="${moreId}" class="more-guide hidden">
        <div class="more-guide-header"><strong>${sectionTitle.details}</strong><div><button class="icon-btn speak" title="Read guide aloud" onclick='speakItem(${safeJson(item)})'>${readGuideLabel()}</button><button class="icon-btn stop-speak" title="Stop reading" onclick="stopSpeaking()">${stopGuideLabel()}</button></div></div>
        <section class="guide-section"><strong>${sectionTitle.why}</strong><p>${g.why}</p></section>
        ${seeList ? `<section class="guide-section"><strong>${sectionTitle.see}</strong><ul>${seeList}</ul></section>` : ''}
        <section class="guide-grid"><div><strong>${sectionTitle.fit}</strong><p>${g.fit}</p></div><div><strong>${sectionTitle.tip}</strong><p>${g.tip}</p></div></section>
        <div>${visibleTagsFor(item).map(t=>`<span class="tag">${tagFor(t)}</span>`).join('')}</div>
      </section>
    </div>
  </article>`
}

function moreLabel(){ const car=activePackageMode()==='car'; const labels= car ? {trips:(getLang()==='he'?'עוד מסלולי רכב':'More route packs')} : {trips:(getLang()==='he'?'עוד טיולי יום':'More trips'),food:(getLang()==='he'?'עוד אוכל':'More food'),nightlife:(getLang()==='he'?'עוד חיי לילה':'More nightlife'),experiences:(getLang()==='he'?'עוד חוויות':'More experiences'),mustdo:(getLang()==='he'?'עוד חובה לעשות':'More MustDo'),recommendations:(getLang()==='he'?'עוד המלצות':'More recommendations')}; return labels[currentTab]||'More'; }
function showMoreForCurrentTab(){
  const days = Number($('stayDays').value) || 3;
  const step = Math.max(days, 1);
  packOffset += step;
  render();
}
function render(){
  updateRouteOptions();
  refreshOfflineStatus();
  syncTabsForPackageMode();
  const items=visibleItems();
  const packageMode=activePackageMode();
  const lang=getLang();
  let head='';
  if(currentTab==='saved') {
    head=`<div class="danger-row"><strong>${items.length} ${lang==='he'?'שמורים אופליין':'saved offline'}</strong><button class="icon-btn remove" onclick="clearSaved()">${lang==='he'?'נקה הכל':'Clear all'}</button></div>`;
  }
  if(currentTab==='mytrip') {
    head=`<div class="danger-row"><strong>${items.length} ${lang==='he'?'פריטים בטיול שלי':'places in My Trip'}</strong><button class="icon-btn remove" onclick="clearTrip()">${lang==='he'?'נקה טיול':'Clear trip'}</button></div><div class="offline-note">${lang==='he'?'מפות אופליין מלאות עדיין לא נשמרות כאן כאריחי מפה. האפליקציה שומרת את חבילת הטיול, התוכן והקישורים; למפות מלאות יש להוריד מפה באפליקציית Google Maps או להשתמש בעתיד במנוע OSM.':'Offline maps are not real map tiles yet. This stores your chosen trip pack and links. For full offline maps, use Google Maps offline download externally or build later with OSM/vector tiles.'}</div>`;
  }
  const canMore = packageMode === 'car' ? currentTab === 'trips' : !['saved','mytrip'].includes(currentTab);
  if(canMore) {
    const noun = packageMode === 'car' && currentTab === 'trips' ? (lang==='he'?'מסלולי רכב':'route pack(s)') : (lang==='he'?'מקומות':'place(s)');
    head+=`<div class="pack-row"><strong>${lang==='he'?'מוצגים':'Showing'} ${items.length} ${noun} ${lang==='he'?'לפי':'for'} ${$('stayDays').value} ${lang==='he'?'ימי שהייה':'day(s)'}</strong><button class="mini-main" onclick="showMoreForCurrentTab()">${moreLabel()}</button></div>`;
  }
  $('list').innerHTML=items.length? head+items.map(card).join('') : head+`<p class="empty">${lang==='he'?'אין עדיין פריטים מתאימים.':'No matching places yet.'}</p>`;
}
function initGps(){ if(!navigator.geolocation){render();return} navigator.geolocation.getCurrentPosition(p=>{userLocation={lat:p.coords.latitude,lng:p.coords.longitude};render()},()=>render(),{enableHighAccuracy:false,maximumAge:600000,timeout:5000}) }

$('originSelect').addEventListener('change',()=>{ save('dtf_last_city_v17', activeCity()); if($('offlineCitySelect')) $('offlineCitySelect').value = activeCity(); packOffset=0; updateRouteOptions(); render(); }); $('modeSelect').addEventListener('change',()=>{packOffset=0;render()}); $('destinationSelect').addEventListener('change',()=>updateRouteOptions()); $('driveHours').addEventListener('change',()=>{packOffset=0;render()}); $('sortOrder').addEventListener('change',()=>{packOffset=0;render()}); $('stayDays').addEventListener('change',()=>{packOffset=0;render()}); if($('addCustom')) $('addCustom').addEventListener('click',addCustom); $('saveHotel').addEventListener('click',()=>{const q=$('hotelAddress').value.trim(); if(q){save(STORAGE.hotel,{name:'Hotel address',query:q});render()}});
$('publicTravelBtn').addEventListener('click',()=>setPackageMode('public'));
$('carTravelBtn').addEventListener('click',()=>setPackageMode('car'));
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active')); b.classList.add('active'); currentTab=b.dataset.tab; packOffset=0; render()}));
window.addEventListener('dtf-language-changed',()=>render());

if($('saveOfflinePack')) $('saveOfflinePack').addEventListener('click', saveCityOfflinePack);
if($('checkOfflinePack')) $('checkOfflinePack').addEventListener('click', refreshOfflineStatus);
if($('clearOfflinePack')) $('clearOfflinePack').addEventListener('click', clearCityOfflinePack);
if($('offlineCitySelect')) $('offlineCitySelect').addEventListener('change',()=>{
  const city = $('offlineCitySelect').value;
  packOffset = 0;
  syncRouteBuilderToCity(city);
  refreshOfflineStatus();
  render();
});
window.addEventListener('online', refreshOfflineStatus);
window.addEventListener('offline', refreshOfflineStatus);


// Expose handlers for inline onclick buttons. This keeps Route Pack card buttons working even if app.js is loaded as a module or browser scoping changes.
Object.assign(window, {
  waze, googleDirections, googleSearch, moovit, uber, bolt,
  speakItem, stopSpeaking, vote, addTrip, saveOffline, removeTrip, removeSaved,
  clearTrip, clearSaved, showMoreForCurrentTab, toggleMore, openSelectedRoute,
  setPackageMode
});
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js').catch(()=>{})}
$('originSelect').innerHTML=AIRPORT_ORIGINS.map(o=>`<option value="${o.id}">${o.label}</option>`).join(''); $('originSelect').value = originIdForCity(load('dtf_last_city_v17','prague')); if($('offlineCitySelect')) $('offlineCitySelect').value=activeCity(); initGps(); render();
