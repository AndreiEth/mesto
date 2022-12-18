import Popup from './Popup.js';
import { settings } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;

        this._form = this._popup.querySelector(settings.formSelector);
        this._inputList = Array.from(this._popup.querySelectorAll(settings.inputSelector));
        this._submitButton = this._popup.querySelector('button[type="submit"]');
        this._submitError = this._popup.querySelector('.popup__submit-error');
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => this._handleSubmitForm(evt));
    }

    close() {
        super.close();
        this._form.reset();
        this.setError('');
    }

    setLoading(isLoading) {
        if (isLoading) {
            this._submitButtonText = this._submitButton.textContent;
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }

    setError(text) {
        this._submitError.textContent = text;
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
}