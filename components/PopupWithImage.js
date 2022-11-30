import  Popup  from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = document.querySelector('.element__image');
        this._text = document.querySelector('.element__text');
    }
    open (link, name){
        this._image.src = link;
        this._image.alt = name;
        this._text.textContent = name;
    }
}