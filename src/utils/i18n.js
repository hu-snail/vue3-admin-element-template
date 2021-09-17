import { setting } from '@/config/setting';
const { storage, langKey } = setting;

export function getLanguage() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(langKey);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(langKey);
    } else {
      return localStorage.getItem(langKey);
    }
  } else {
    return localStorage.getItem(langKey);
  }
}

export function setLanguage(lang) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(langKey, lang);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(langKey, lang);
    } else {
      return localStorage.setItem(langKey, lang);
    }
  } else {
    return localStorage.setItem(langKey, lang);
  }
}
