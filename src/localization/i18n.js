import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { getItem, setItem } from "../utils/AsyncStorageService";

const localize = new I18n({
  en: { Hi: "Hi!" }, //english
  es: { Hi: "Hola!" }, //espanol
  tr: { Hi: "Merhaba!" }, //turkish
});

localize.enableFallback = true;

export const setLocalizeLocale = async (code) => {
  try {
    await setItem("language", code);
    localize.locale = code;
    return localize.translations[code];
  } catch (error) {
    localize.locale = "en"
    localize.defaultLocale = "en"
    console.error("Error setting language:", error);
    return null;
  }
};


export const initLanguage = async () => {
  try {
    const languageCode = await getItem("language");
    const defaultLanguage = getLocales()[0].languageCode;

    localize.locale = isValidLanguage(languageCode) 
    ? languageCode 
    : (isValidLanguage(defaultLanguage) ? defaultLanguage : 'en');

    localize.defaultLocale = localize.locale; 

  } catch (error) {
    localize.locale = "en"
    localize.defaultLocale = "en"
    console.error("Error initializing language:", error);
  }
};

const validLanguageCodes = ['en', 'es','tr']; // Geçerli dil kodları

// Geçerli dil kodunu kontrol eden fonksiyon
export const isValidLanguage = (languageCode) => {
  return validLanguageCodes.includes(languageCode);
};

export const getLocalizedStrings = () => {
  return localize.translations[localize.locale];
};

export default localize;
