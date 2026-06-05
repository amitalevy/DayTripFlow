/* DayTripFlow i18n patch v19
   Adds English/Hebrew UI language switching without changing place names.
   Saves selection to localStorage and switches document direction to RTL for Hebrew.
*/
(function () {
  const KEY = 'dtf_language_v19';
  const DEFAULT_LANG = 'en';

  const he = {
    'Language': 'שפה',
    'English': 'English',
    'עברית': 'עברית',
    'Offline-first travel assistant': 'עוזר טיולים אופליין',
    'Prepare Offline Pack': 'הכן חבילת אופליין',
    'Save the selected city guide on this phone before the trip. Text, guide cards, My Trip, likes and saved places stay local on the device. No cloud or external DB is required.': 'שמור את מדריך העיר שנבחר בטלפון לפני הטיול. הטקסטים, כרטיסי המדריך, My Trip, לייקים ומקומות שמורים נשארים מקומית במכשיר. אין צורך בענן או במסד נתונים חיצוני.',
    'Offline city pack': 'חבילת עיר לאופליין',
    'Pack content': 'תוכן החבילה',
    'Text guide + coordinates': 'מדריך טקסט + נ״צ',
    'Text guide + local visuals': 'מדריך טקסט + תמונות מקומיות',
    '📦 Save city offline': '📦 שמור עיר לאופליין',
    'Offline status will appear here.': 'סטטוס אופליין יופיע כאן.',
    'Important: this saves the guide data, coordinates and local card visuals. Live transit times, Uber/Bolt prices and Google/Waze map tiles still require the external apps or a separately downloaded offline map.': 'חשוב: זה שומר את נתוני המדריך, הנ״צ והתמונות המקומיות של הכרטיסים. זמני תחבורה חיים, מחירי Uber/Bolt ואריחי מפה של Google/Waze עדיין דורשים את האפליקציות החיצוניות או הורדת מפה אופליין בנפרד.',
    'Choose trip package type': 'בחר סוג חבילת טיול',
    'Public Travels': 'טיול בתחבורה ציבורית',
    'Travel By Car': 'טיול ברכב',
    'Driving time each way': 'זמן נהיגה לכל כיוון',
    'Sort places': 'מיון מקומות',
    'Nearest first': 'הקרוב קודם',
    'Farthest first': 'הרחוק קודם',
    'Showing': 'מציג',
    'More': 'עוד',
    'Core': 'בסיס',
    'Hotel address': 'כתובת מלון',
    'Save hotel': 'שמור מלון',
    'Public transport / Moovit': 'תחבורה ציבורית / Moovit',
    'Car / Waze': 'רכב / Waze',
    'Up to 1 hour each way': 'עד שעה לכל כיוון',
    'Up to 2 hours each way': 'עד שעתיים לכל כיוון',
    'Up to 3 hours each way': 'עד 3 שעות לכל כיוון',
    'Up to 4 hours each way': 'עד 4 שעות לכל כיוון',
    'Up to 5 hours each way': 'עד 5 שעות לכל כיוון',
    'Clear all saved offline items?': 'למחוק את כל הפריטים השמורים לאופליין?',
    'Clear My Trip?': 'למחוק את כל הטיול שלי?',
    'Waze from current origin': 'Waze מנקודת המוצא הנוכחית',
    'Google driving from current origin': 'גוגל נהיגה מנקודת המוצא הנוכחית',
    'Moovit / public travel': 'Moovit / תחבורה ציבורית',
    'Google public travel from current origin': 'גוגל תחבורה ציבורית מנקודת המוצא הנוכחית',

    'DayTripFlow Europe': 'DayTripFlow אירופה',
    'Choose your starting point and travel mode. The app shows only relevant places for that city and mode.': 'בחר נקודת מוצא וסוג נסיעה. האפליקציה מציגה רק מקומות רלוונטיים לעיר ולסוג הטיול שבחרת.',
    'Route Builder': 'בניית מסלול',
    'Origin': 'נקודת מוצא',
    'Travel mode': 'סוג נסיעה',
    'Public transport / Moovit': 'תחבורה ציבורית / Moovit',
    'Uber': 'Uber',
    'Bolt': 'Bolt',
    'Car / Waze': 'רכב / Waze',
    'Hotel / base address': 'כתובת מלון / בסיס',
    'Save hotel': 'שמור מלון',
    'Destination': 'יעד',
    'Driving time each way for car day trips': 'זמן נהיגה לכל כיוון לטיולי רכב',
    'Up to 1 hour each way': 'עד שעה לכל כיוון',
    'Up to 2 hours each way': 'עד שעתיים לכל כיוון',
    'Up to 3 hours each way': 'עד 3 שעות לכל כיוון',
    'Up to 4 hours each way': 'עד 4 שעות לכל כיוון',
    'Up to 5 hours each way': 'עד 5 שעות לכל כיוון',
    'Open selected route': 'פתח מסלול נבחר',
    'Stay days': 'ימי שהייה',
    '1 day': 'יום 1',
    '2 days': '2 ימים',
    '3 days': '3 ימים',
    '4 days': '4 ימים',
    '5 days': '5 ימים',
    '6 days': '6 ימים',
    '7 days': '7 ימים',
    'Add custom place from Google Maps / address to My Trip': 'הוסף מקום מותאם מגוגל מפות / כתובת ל־My Trip',
    '➕ Add custom place to My Trip': '➕ הוסף מקום מותאם ל־My Trip',
    'Day trips': 'טיולי יום',
    'Food': 'אוכל',
    'Nightlife': 'חיי לילה',
    'Experiences': 'חוויות',
    'MustDo': 'חובה לעשות',
    'My recommendations': 'ההמלצות שלי',
    'My Trip': 'הטיול שלי',
    'Saved offline': 'שמורים לאופליין',
    'Current Location': 'מיקום נוכחי',
    'Prague Airport': 'שדה התעופה פראג',
    'Vienna Airport': 'שדה התעופה וינה',
    'Strasbourg Airport': 'שדה התעופה שטרסבורג',
    'City Centre': 'מרכז העיר',
    'Hotel Address': 'כתובת מלון',
    'My Trip places': 'מקומות מהטיול שלי',
    'Saved offline places': 'מקומות שמורים לאופליין',
    'More trips': 'עוד טיולים',
    'More food': 'עוד אוכל',
    'More nightlife': 'עוד חיי לילה',
    'More experiences': 'עוד חוויות',
    'More MustDo': 'עוד חובה לעשות',
    'More recommendations': 'עוד המלצות',
    'Add to My Trip': 'הוסף לטיול שלי',
    'Clear all': 'מחק הכל',
    'Clear trip': 'מחק את הטיול',
    'No matching places yet.': 'אין עדיין מקומות שמתאימים לסינון.',
    'No offline items saved yet.': 'אין עדיין פריטים שמורים לאופליין.',
    'saved offline': 'שמורים לאופליין',
    'places in My Trip': 'מקומות בטיול שלי',
    'place(s)': 'מקומות',
    'day(s)': 'ימים',
    'Distance: enable GPS': 'מרחק: הפעל GPS',
    'approx drive each way': 'נהיגה משוערת לכל כיוון',
    'transit': 'תחבורה ציבורית',
    'drive': 'נהיגה',
    'score': 'דירוג',
    'Map': 'מפה',
    'Google driving': 'גוגל נהיגה',
    'Google transit': 'גוגל תחבורה',
    'Save offline': 'שמור לאופליין',
    'Remove from My Trip': 'הסר מהטיול שלי',
    'Remove offline': 'הסר מאופליין',
    'Waze': 'Waze',
    'Moovit': 'Moovit',
    'Like': 'לייק',
    'Unlike': 'לא אהבתי',
    'User-added place. Open Map while online, then save/use in My Trip.': 'מקום שהמשתמש הוסיף. פתח מפה כשיש אינטרנט ואז שמור/השתמש ב־My Trip.',
    'Car mode note: shown because it is marked as parking/car-friendly starter data.': 'הערת מצב רכב: מוצג כי המקום מסומן כנוח יחסית לרכב/חניה במאגר הראשוני.',
    'Travel By Car:': 'טיול ברכב:',
    'Public Travels:': 'טיול בתחבורה ציבורית:',
    'packs prioritize car-reachable places, Waze/Google driving actions, parking-friendly food, and the selected driving-time limit.': 'המחסניות נותנות עדיפות למקומות נגישים ברכב, פעולות Waze/Google, אוכל נוח לחניה ומגבלת זמן הנהיגה שבחרת.',
    'packs prioritize places suitable for public transport / Uber / Bolt, with closer and easier access.': 'המחסניות נותנות עדיפות למקומות שמתאימים לתחבורה ציבורית / Uber / Bolt עם גישה קלה וקרובה יותר.',
    'Offline maps are not real map tiles yet. This stores your chosen trip pack and links. For full offline maps, use Google Maps offline download externally or build later with OSM/vector tiles.': 'מפות אופליין אמיתיות עדיין לא קיימות כאן. כרגע נשמרים חבילת הטיול והקישורים. למפות אופליין מלאות השתמש בהורדה באפליקציית Google Maps או נבנה בהמשך עם OSM/vector tiles.'
  };

  const placeholdersHe = {
    'Paste hotel name or address': 'הדבק שם מלון או כתובת',
    'Paste Maps link, place name or address': 'הדבק קישור מפות, שם מקום או כתובת'
  };

  function getLang() {
    const stored = localStorage.getItem(KEY);
    return stored === 'he' || stored === 'en' ? stored : DEFAULT_LANG;
  }

  function translateTextNode(node, lang) {
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (lang === 'en') {
      if (node.__dtfOriginalText) node.nodeValue = node.__dtfOriginalText;
      return;
    }
    if (!node.__dtfOriginalText) node.__dtfOriginalText = raw;
    const originalTrimmed = node.__dtfOriginalText.trim();
    const translated = he[originalTrimmed];
    if (translated) {
      const prefix = node.__dtfOriginalText.match(/^\s*/)[0];
      const suffix = node.__dtfOriginalText.match(/\s*$/)[0];
      node.nodeValue = prefix + translated + suffix;
    }
  }

  function walkText(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => translateTextNode(node, lang));
  }

  function translateAttrs(lang) {
    document.querySelectorAll('[placeholder]').forEach(el => {
      if (!el.dataset.originalPlaceholder) el.dataset.originalPlaceholder = el.getAttribute('placeholder') || '';
      const original = el.dataset.originalPlaceholder;
      el.setAttribute('placeholder', lang === 'he' ? (placeholdersHe[original] || original) : original);
    });
    document.querySelectorAll('[title]').forEach(el => {
      if (!el.dataset.originalTitle) el.dataset.originalTitle = el.getAttribute('title') || '';
      const original = el.dataset.originalTitle;
      el.setAttribute('title', lang === 'he' ? (he[original] || original) : original);
    });
  }

  let lastAppliedLang = null;

  function applyLang(lang) {
    const changed = lang !== lastAppliedLang;
    lastAppliedLang = lang;
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang === 'he' ? 'he' : 'en';
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'he');
    const select = document.getElementById('languageSelect');
    if (select && select.value !== lang) select.value = lang;
    walkText(document.body, lang);
    translateAttrs(lang);
    if (changed) window.dispatchEvent(new CustomEvent('dtf-language-changed', { detail: { lang } }));
  }

  let pending = false;
  function scheduleApply() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      applyLang(getLang());
    });
  }

  function init() {
    const select = document.getElementById('languageSelect');
    if (select) {
      select.value = getLang();
      select.addEventListener('change', () => applyLang(select.value));
    }
    applyLang(getLang());
    const observer = new MutationObserver(scheduleApply);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
