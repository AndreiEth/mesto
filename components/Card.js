export default class Card {
    constructor(data, selector, handleCardClick) {
        this._data = data;
        this._selector = selector
        this._handleCardClick = handleCardClick;

        this._cardElements();
        this._setData();
        this._eventListeners();
    }

    getCurrentCard() {
        return this._currentCard;
    }

    _cardElements() {
        this._currentCard = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
        this._image = this._currentCard.querySelector('.element__image');
        this._text = this._currentCard.querySelector('.element__text');
        this._bin = this._currentCard.querySelector('.element__bin');
        this._heart = this._currentCard.querySelector('.element__heart');
    }

    _setData() {
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        this._text.textContent = this._data.name;
    }

    _eventListeners() {
        this._bin.addEventListener('click', () => this._onBinClick());
        this._heart.addEventListener('click', () => this._onHeartClick());
        this._image.addEventListener('click',() => this. _onCardClick());

    }

    _onCardClick() {
        this._handleCardClick({
            'name': this._data.name,
            'link': this._data.link
        })
    }

    _onBinClick() {
        this._currentCard.remove();
        return null;
    }

    _onHeartClick() {
        this._heart.classList.toggle('element__heart_active');
    }
}