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
    console.error("Error setting language:", error);
    return null;
  }
};

export const initLanguage = async () => {
  try {
    const languageCode = await getItem("language");
    if (!languageCode) {
      const defaultLanguage = getLocales()[0].languageCode;
      localize.locale = defaultLanguage; // Default 
      localize.defaultLocale = defaultLanguage;
    } else {
      localize.locale = languageCode;
    }
  } catch (error) {
    console.error("Error initializing language:", error);
  }
};

export const getLocalizedStrings = () => {
  return localize.translations[localize.locale];
};

export default localize;
