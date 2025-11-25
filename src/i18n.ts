import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./components/locales/en/translation.json";
import fr from "./components/locales/fr/translation.json";

i18n
    .use(LanguageDetector) // pour détecter automatiquement la langue
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
        },
        fallbackLng: "fr", // langue par défaut
        interpolation: { escapeValue: false },
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });

export default i18n;