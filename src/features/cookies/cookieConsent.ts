import * as CookieConsent from 'vanilla-cookieconsent'
import type { CookieConsentConfig } from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import './cookieConsentTheme.css'
import { analyticsCookies } from './cookieCatalog'

const COOKIE_POLICY_PATH = '/cookie-policy'

let initialized = false

const analyticsCookieTable = {
  caption: 'Tabela cookies analitycznych',
  headers: {
    name: 'Nazwa',
    domain: 'Domena',
    description: 'Opis',
    expiration: 'Ważność',
  },
  body: analyticsCookies,
}

function createConfig(): CookieConsentConfig {
  return {
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom right',
      },
      preferencesModal: {
        layout: 'box',
      },
    },
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {},
    },
    language: {
      default: 'pl',
      translations: {
        pl: {
          consentModal: {
            title: 'Szanuję Twoją prywatność',
            description:
              'Używam ciasteczek niezbędnych do działania strony oraz opcjonalnych analitycznych. Szczegóły znajdziesz w Polityce Cookies.',
            acceptAllBtn: 'Akceptuję wszystkie',
            acceptNecessaryBtn: 'Tylko niezbędne',
            showPreferencesBtn: 'Ustawienia cookies',
            footer: `<a href="${COOKIE_POLICY_PATH}">Polityka Cookies</a>`,
          },
          preferencesModal: {
            title: 'Ustawienia cookies',
            acceptAllBtn: 'Akceptuję wszystkie',
            acceptNecessaryBtn: 'Tylko niezbędne',
            savePreferencesBtn: 'Zapisz ustawienia',
            closeIconLabel: 'Zamknij',
            sections: [
              {
                title: 'Jak wykorzystuję cookies?',
                description:
                  'Niezbędne cookies są wymagane do poprawnego działania strony. Analityczne cookies pomagają mi zrozumieć, jak korzystasz z serwisu.',
              },
              {
                title: 'Niezbędne cookies',
                description: 'Te pliki są wymagane do działania serwisu i nie można ich wyłączyć.',
                linkedCategory: 'necessary',
              },
              {
                title: 'Analityczne cookies',
                description:
                  'Dzięki nim widzę anonimowe statystyki odwiedzin i mogę ulepszać treści oraz strukturę strony.',
                linkedCategory: 'analytics',
                cookieTable: analyticsCookieTable,
              },
              {
                title: 'Więcej informacji',
                description: `Pełna lista i opis ciasteczek: <a class="cc-link" href="${COOKIE_POLICY_PATH}">Polityka Cookies</a>.`,
              },
            ],
          },
        },
      },
    },
  }
}

export function initCookieConsent() {
  if (initialized) return
  CookieConsent.run(createConfig())
  initialized = true
}

export function showCookiePreferences() {
  CookieConsent.showPreferences()
}
