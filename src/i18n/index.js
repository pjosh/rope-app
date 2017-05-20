import { en } from './en'
import { es } from './es'

const supportedLanguages = ['en', 'es'];
const defaultLanguage = 'en';

export const translations = Object.assign({}, en, es);

export function getLocale() {
  const userLang = navigator.language || navigator.userLanguage;

  return supportedLanguages.includes(userLang) ? userLang : defaultLanguage;
}
