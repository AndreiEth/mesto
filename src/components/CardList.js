import Card from "./Card";

export default class CardList {
  constructor() {
    this._cards = [];
  }

  createCard(options) {
    const card = new Card(options);
    this._cards.push(card);
    return card;
  }

  removeCardById(cardId) {
    const cardIndex = this._cards.findIndex((card) => card.getId() === cardId);
    this._cards[cardIndex].removeCard();
    this._cards.splice(cardIndex, 1);
  }

  getCardById(cardId) {
    return this._cards.find((card) => card.getId() === cardId);
  }
}