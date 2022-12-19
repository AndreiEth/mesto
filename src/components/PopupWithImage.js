import  Popup  from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image-zoom');
        this._text = this._popup.querySelector('.popup__image-name');
    }
    
    open (link, name){
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._text.textContent = name;
    }
}