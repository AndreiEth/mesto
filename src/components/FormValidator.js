export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;

    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._saveButton = this._form.querySelector(this._settings.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }
  

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => this._onInput(inputElement));
  });

  this._form.addEventListener('submit', () => this._onSubmit());
  

  }

  _onSubmit() {
    this._checkFormValidity();
    this._resetValidation();
  }

  _onInput(inputElement) {
    this._checkInputValidity (inputElement);
    this._checkFormValidity();
  }

  
  _resetValidation() {
    this._setSubmitButtonState(); 

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

  }
  
  _checkFormValidity() {
    if (this._form.checkValidity()) {
      this._setSubmitButtonState(true);
    } else {
      this._setSubmitButtonState(false);
    }
  }

  _setSubmitButtonState (isActive) {
    
    if (isActive) {
      this._saveButton.removeAttribute("disabled");
      this._saveButton.classList.remove(this._settings.inactiveButtonClass);
    } else {
      this._saveButton.setAttribute("disabled", true);
      this._saveButton.classList.add(this._settings.inactiveButtonClass);
    }
   }

   _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
  };
  
  }














