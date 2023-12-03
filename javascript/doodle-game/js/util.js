export function setStore(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getStore(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
