export function generateID() {
  return Math.floor(Math.random() * 100000000);
}

export function persistInLocalStorage(state) {
  localStorage.setItem('state', JSON.stringify(state));
}

export function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem('state') || '{}');
}