export default class Card {
    constructor(options) {
        this._data = options.data;
        this._selector = options.selector
        this._handleCardClick = options.handleCardClick;
        this._handleRemove = options.handleRemove;
        this._canRemove = options.canRemove;
        this._handleLike = options.handleLike;
        this._isLiked = options.isLiked;

        this._getCardElements();
        this._setData();
        this._eventListeners();
        this._showBin();
        this._showIsLiked();
    }

    getCurrentCard() {
        return this._currentCard;
    }

    removeCard() {
        this._currentCard.remove();
    }

    getId() {
        return this._data._id;
    }

    updateData(cardData) {
        this._data = cardData;
        this._setData();
    }

    _getCardElements() {
        this._currentCard = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
        this._image = this._currentCard.querySelector('.element__image');
        this._text = this._currentCard.querySelector('.element__text');
        this._bin = this._currentCard.querySelector('.element__bin');
        this._heart = this._currentCard.querySelector('.element__heart');
        this._likes = this._currentCard.querySelector('.element__like-count');
    }

    _setData() {
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        this._text.textContent = this._data.name;
        this._likes.textContent = this._data.likes.length;
    }

    _eventListeners() {
        this._bin.addEventListener('click', () => this._onBinClick());
        this._heart.addEventListener('click', () => this._onHeartClick());
        this._image.addEventListener('click', () => this._onCardClick());
    }

    _onCardClick() {
        this._handleCardClick({
            'name': this._data.name,
            'link': this._data.link
        })
    }

    _onBinClick() {
        this._handleRemove(this._data);
    }

    _onHeartClick() {
        this._isLiked = !this._isLiked;
        this._showIsLiked();
        this._handleLike({ cardData: this._data, isLiked: this._isLiked });
    }

    _showIsLiked() {
        this._heart.classList.toggle('element__heart_active', this._isLiked);
    }

    _showBin() {
        if (this._canRemove) {
            this._bin.classList.add('element__bin_visible');
        }
    }
}