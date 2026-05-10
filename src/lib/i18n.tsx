import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "he" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "rtl" | "ltr" };

const dict: Record<string, { he: string; en: string }> = {
  "nav.collection": { he: "קולקציה", en: "Collection" },
  "nav.story": { he: "הסיפור", en: "Story" },
  "nav.pro": { he: "למקצוענים", en: "For Pros" },
  "nav.contact": { he: "צרו קשר", en: "Contact" },

  "hero.line1": { he: "שיער", en: "Hair" },
  "hero.line2": { he: "מתעורר", en: "Awakens" },
  "hero.tag": {
    he: "תוספות שיער טבעי 100%, יבוא ישיר ממדינות מזרח אירופה. עבודת יד, איכות סלון, גימור מושלם.",
    en: "100% natural hair, sourced directly from Eastern Europe. Hand-crafted, salon-grade, finished to perfection.",
  },
  "hero.cta1": { he: "לקולקציה", en: "View Collection" },
  "hero.cta2": { he: "צרו קשר", en: "Get in Touch" },
  "hero.scroll": { he: "גלילה", en: "Scroll" },

  "trust.1": { he: "10+ שנים בענף", en: "10+ years in the craft" },
  "trust.2": { he: "יבוא ישיר ממזרח אירופה", en: "Direct from Eastern Europe" },
  "trust.3": { he: "אמון מאות מספרות", en: "Trusted by hundreds of salons" },

  "pillars.eyebrow": { he: "שני עולמות", en: "Two worlds" },
  "pillars.title": { he: "בית אחד שלם", en: "One complete house" },
  "pillars.tag1": { he: "תוספות", en: "Extensions" },
  "pillars.title1": { he: "טווח רחב של גוונים", en: "A spectrum of tones" },
  "pillars.desc1": {
    he: "מגוון רחב של גוונים, אורכים וטכניקות. שיער שמרגיש כמו שלך.",
    en: "A wide spectrum of tones, lengths and techniques. Hair that feels like yours.",
  },
  "pillars.tag2": { he: "טיפוח", en: "Care" },
  "pillars.title2": { he: "ליין מקצועי", en: "A professional line" },
  "pillars.desc2": {
    he: "ליין מקצועי לשמירה על התוספות במיטבן.",
    en: "A professional line to keep your extensions at their best.",
  },

  "founder.eyebrow": { he: "הסיפור שלנו", en: "Our story" },
  "founder.title1": { he: "מנטשה לארתור", en: "From Natasha" },
  "founder.title2": { he: "הדור הבא", en: "to Arthur" },
  "founder.body": {
    he: "נטשה גודז ייסדה את המותג ברוסיה והביאה אותו לישראל בשנת 2015. כיום היא מנהלת אותו יחד עם בנה ארתור. עסק משפחתי שצמח ממכירות אישיות לאחד המפיצים המובילים בארץ — תמיד עבודת יד, ללא פשרות באיכות.",
    en: "Natasha Godez founded the brand in Russia and brought it to Israel in 2015. Today she runs it with her son Arthur. A family business that grew from personal sales into a leading distributor — always handcrafted, uncompromising in quality.",
  },
  "founder.quote": {
    he: "שיער טבעי הוא לא מוצר. הוא חוויה.",
    en: "Natural hair is not a product. It is an experience.",
  },
  "founder.photo": { he: "נטשה וארתור — תמונה בקרוב", en: "Natasha & Arthur — photo coming soon" },

  "collection.eyebrow": { he: "הקולקציה", en: "The Collection" },
  "collection.title": { he: "גוונים, אורכים, מרקמים", en: "Tones, lengths, textures" },
  "collection.length": { he: "אורך", en: "Length" },
  "collection.price": { he: "צרו קשר למחיר", en: "Contact for price" },

  "pro.eyebrow": { he: "B2B", en: "B2B" },
  "pro.line1": { he: "מספרה?", en: "Salon?" },
  "pro.line2": { he: "סטייליסטית?", en: "Stylist?" },
  "pro.body": {
    he: "אנחנו מספקים מאות אנשי מקצוע בישראל. מחירי סיטונאות, ליווי אישי, אספקה מהירה.",
    en: "We supply hundreds of professionals in Israel. Wholesale pricing, personal account management, fast dispatch.",
  },
  "pro.cta": { he: "פתחו חשבון מקצועי", en: "Open a Pro account" },

  "contact.eyebrow": { he: "מוכנים לשמוע מכם", en: "Ready when you are" },
  "contact.cta": { he: "צרו קשר", en: "Contact now" },

  "footer.tag": { he: "Only Natural Hair", en: "Only Natural Hair" },
  "footer.nav": { he: "ניווט", en: "Navigate" },
  "footer.contact": { he: "צרו קשר", en: "Contact" },
  "footer.address": { he: "נחל סער 21, כרמיאל", en: "Nahal Saar 21, Karmiel" },
  "footer.rights": { he: "כל הזכויות שמורות", en: "All rights reserved" },
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "he" || saved === "en") setLangState(saved);
  }, []);

  const dir = lang === "he" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const c = useContext(I18nContext);
  if (!c) throw new Error("useI18n outside provider");
  return c;
}
