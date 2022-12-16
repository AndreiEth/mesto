export default class Api {
    constructor(options) {
      this.options = options;
    }
  
    getCards() {
      return this.request('/cards');
    }
  
    getProfile() {
      return this.request('/users/me');
    }
  
    request(path, init = {}) {
      return fetch(this.options.baseUrl + path, {
        ...init,
        headers: {
          ...this.options.headers,
          ...init.headers,
        },
      });
    }
  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
    headers: {
      'authorization': 'a835ebe3-157b-4140-922b-a5f49168fcac',
      'Content-Type': 'application/json',
    },
  });