/*class FormValidator{
  constructor(formSelector){
    this._formSelector = formSelector;
    this._elementForm = document.querySelector(this._formSelector).content.querySelector('.popup__form')
    this._inputSelector =  this._elementForm.querySelector('.popup__popup-form') ;
    this._submitButtonSelector = this._elementForm.querySelector('.popup__save-button') ;
    this._inactiveButtonClass = this._elementForm.querySelector('popup__save-button_invalid') ;
    this._inputErrorClass = this._elementForm.querySelector('popup__popup-form_type_error');
    this._errorClass = this._elementForm.querySelector('popup__error');
  }
  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._elementForm));
    formList.forEach(() => {
      setEventListeners();
    });
  
  };
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = profileForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  };
  _hideInputError = (inputElement) => {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputElement.validationMessage);
    } else {
      hideInputError(inputElement);
    }
  };
  setSubmitButtonState = (saveButton, isActive) => {
    if (isActive) {
      saveButton.removeAttribute("disabled");
      saveButton.classList.remove(this._inactiveButtonClass);
    } else {
      saveButton.setAttribute("disabled", true);
      saveButton.classList.add(this._inactiveButtonClass);
    }
};

  _setEventListeners = () => {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const saveButton = this._formSelector.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(inputElement);
  
        if (this._formSelector.checkValidity()) {
          setSubmitButtonState(saveButton, true);
        } else {
          setSubmitButtonState(saveButton, false);
        }
      });
    });
  };

  enableValidation()

}*/
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__popup-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__popup-form_type_error',
  errorClass: 'popup__error'
}
// валидация красная линия

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((profileForm) => {
    setEventListeners(profileForm, settings);
  });

};

const showInputError = (profileForm, inputElement, errorMessage, settings) => {
  const errorElement = profileForm.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (profileForm, inputElement, settings) => {
  const errorElement = profileForm.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (profileForm, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(profileForm, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(profileForm, inputElement, settings);
  }
};

const setEventListeners = (profileForm, settings) => {
  const inputList = Array.from(profileForm.querySelectorAll(settings.inputSelector));
  const saveButton = profileForm.querySelector(settings.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(profileForm, inputElement, settings);

      if (profileForm.checkValidity()) {
        setSubmitButtonState(saveButton, true, settings);
      } else {
        setSubmitButtonState(saveButton, false, settings);
      }
    });
  });
};


enableValidation(settings);


// валидация кнопки

const setSubmitButtonState = (saveButton, isActive, settings) => {
    if (isActive) {
      saveButton.removeAttribute("disabled");
      saveButton.classList.remove(settings.inactiveButtonClass);
    } else {
      saveButton.setAttribute("disabled", true);
      saveButton.classList.add(settings.inactiveButtonClass);
    }
}







