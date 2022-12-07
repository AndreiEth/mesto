import Popup from './Popup.js';
import { settings } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;

        this._form = this._popup.querySelector(settings.formSelector);
        this._inputList = Array.from(this._popup.querySelectorAll(settings.inputSelector));
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => this._handleSubmitForm(evt));
    }

    _getInputValues() {
        const formValues = {};

        this._inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });

         return formValues;
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    }

    close() {
        super.close();
        this._form.reset();
    }
}