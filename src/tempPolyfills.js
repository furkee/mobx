// eslint-disable-next-line
const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

export default requestAnimationFrame;

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

/**
 * Upon calling, it will inject mock objects to global scope for
 * both local storage and session storage.
*/
export const mockLocalAndSessionStorage = () => {
  global.localStorage = new LocalStorageMock();
  global.sessionStorage = new LocalStorageMock();
};
