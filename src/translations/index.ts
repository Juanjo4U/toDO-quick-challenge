import I18n from "i18n-js";
import { translations } from "./languages";

const defaultLanguage = navigator.language;

if (defaultLanguage) I18n.locale = defaultLanguage;

I18n.defaultLocale = 'es';
I18n.fallbacks = true;
I18n.translations = translations

export default I18n;
export const T = (txt: string) => I18n.t(txt);