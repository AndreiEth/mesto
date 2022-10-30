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







