import React, { createContext, useState, useEffect, useContext } from 'react';
import localize, { getLocalizedStrings, initLanguage, isValidLanguage, setLocalizeLocale } from '../localization/i18n';

// Creating the Localization context
const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  // State to store the current locale
  const [locale, setLocale] = useState(localize.locale);
  // State to store the localized strings for the current language
  const [strings, setStrings] = useState(getLocalizedStrings());

  // useEffect to initialize the language when the component mounts
  useEffect(() => {
    const initializeLanguage = async () => {
      // Initialize language settings (e.g., check user's language preference)
      await initLanguage();
      setLocale(localize.locale);
      setStrings(getLocalizedStrings());
    };
    initializeLanguage();
  }, []);

  // Function to change the language and update localized strings
  const setLanguage = async (language) => {
    const validLanguage = isValidLanguage(language) ? language : 'en';
  
    const newStrings = await setLocalizeLocale(validLanguage);
    if (newStrings) {
      setLocale(validLanguage);
      setStrings(newStrings);
    }
  };
  
  
  // Providing the current locale, setLanguage function, and localized strings to the context
  return (
    <LocalizationContext.Provider value={{ locale, setLanguage, strings }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Custom hook to use the Localization context in other components
export const useLocalization = () => useContext(LocalizationContext);
