import I18n from 'react-native-i18n';

import fr from './locales/fr';
import en from './locales/en';

I18n.fallbacks = true;
I18n.defaultLocale = "fr-FR";
I18n.locale = "fr-FR";

I18n.translations = {
	en: en,
	fr: fr,
};

export default I18n;

export function switchFr() {
	I18n.defaultLocale = "fr-FR";
	I18n.locale = "fr-FR";
}

export function switchEn() {
	I18n.defaultLocale = "en-US";
	I18n.locale = "en-US";
}
