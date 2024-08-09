// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations using HttpApi
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    supportedLngs: ["en", "km", "zh"], // List your supported languages
    fallbackLng: "en", // Fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to load translation files
    },
  });

export default i18n;
