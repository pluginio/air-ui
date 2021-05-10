import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ko from './locales/ko.json'
import th from './locales/th.json'
import zh from './locales/zh.json'

const resources: Resource = {
  ar: ar,
  en: en,
  es: es,
  fr: fr,
  ko: ko,
  th: th,
  zh: zh
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  load: 'languageOnly',
  resources,

  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng'
  },

  keySeparator: false,

  interpolation: {
    escapeValue: false
  }
})

export default i18n
