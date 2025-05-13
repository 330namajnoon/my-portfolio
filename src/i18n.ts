import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";

const resources = {
	en: {
		translation: translationEn,
	},
	es: {
		translation: translationEs,
	},
};

i18next
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		fallbackLng: "en",
		debug: false,
		interpolation: {
			escapeValue: false, // React already does escaping
		},
	});

export default i18next;