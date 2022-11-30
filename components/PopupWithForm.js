import  Popup  from './Popup.js';
import { settings } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;

        this._form = this._popupSelector.querySelectorAll(settings.formSelector)
        this._inputList = Array.from(this._popupSelector.querySelectorAll(settings.inputSelector));
        this._inputs = {};
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', () => this._handleSubmitForm(evt));
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this._inputs[input.name] = [input.value];
        });
    }

    _handleSubmitForm(evt) {
        this._submitForm(evt, this._getInputValues());
    }

    close() {
        super.close();
        this._form.reset();
    }
}