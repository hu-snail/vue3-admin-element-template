import { setting } from '@/config/setting';
const { storage, tokenTableName } = setting;

export function getAccessToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(tokenTableName);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(tokenTableName);
    } else {
      return localStorage.getItem(tokenTableName);
    }
  } else {
    return localStorage.getItem(tokenTableName);
  }
}

export function setAccessToken(accessToken) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(tokenTableName, accessToken);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(tokenTableName, accessToken);
    } else {
      return localStorage.setItem(tokenTableName, accessToken);
    }
  } else {
    return localStorage.setItem(tokenTableName, accessToken);
  }
}

export function removeAccessToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(tokenTableName);
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear();
    } else {
      return localStorage.removeItem(tokenTableName);
    }
  } else {
    return localStorage.removeItem(tokenTableName);
  }
}
