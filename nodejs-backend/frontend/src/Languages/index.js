// ** I18n Imports
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n

  // ** Enables the i18next backend
  .use(Backend)

  // ** Enable automatic language detection
  .use(LanguageDetector)

  // ** Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: "es",
    backend: {
      // ** Translation file path
      loadPath: "/Languages/Locales/{{lng}}.json",
    },
    fallbackLng: "en",
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    resources: {
      es: { translation: require("./Locales/es.json") },
      en: { translation: require("./Locales/en.json") },
    },
  });

export default i18n;
