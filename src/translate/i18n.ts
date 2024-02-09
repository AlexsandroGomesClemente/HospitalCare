import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationJP from './locales/jp/translation.json';


const resources = {
    en: {
      translation: translationEN,
    },
    pt: {
      translation: translationPT,
    },
    jp: {
        translation: translationJP,
      },
  };

  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;