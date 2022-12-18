import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._submitButton = this._popup.querySelector('.popup__bin-button');
        this._submitData;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', () => this._handleSubmit(this._submitData));
    }

    open(submitData) {
        super.open();
        this._submitData = submitData;
    }

    close() {
        super.close();
        this._submitData = null;
    }
}