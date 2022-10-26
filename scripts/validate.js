    const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__popup-form',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: '.popup__save-button_invalid',
    inputErrorClass: '.popup__popup-form_type_error',
    errorClass: 'popup__error'
  }
  // валидация кнопки
const setSubmitButtonState = (isActive) => {
    saveButton.forEach((saveButton) => {
    if(isActive){
        saveButton.removeAttribute("disabled");
    saveButton.classList.add("popup__save-button_valid");
    saveButton.classList.remove("popup__save-button_invalid");
    }else{
        saveButton.setAttribute("disabled", true);
        saveButton.classList.add("popup__save-button_invalid");
        saveButton.classList.remove("popup__save-button_valid");
    }
});
    }

// валидация профиля

const validateProfileInput = (inputElement) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if(inputElement.checkValidity()){
        errorElement.textContent = "";
        
    }else{
    errorElement.textContent = inputElement.validationMessage;
    
    }
    if(formElement.checkValidity()){
        setSubmitButtonState(true);
        
    }else{
        setSubmitButtonState(false);
        
    }
    };

const validateProfileForm = (evt) => {
evt.preventDefault();
validateProfileInput(nameInput);
validateProfileInput(jobInput);

if(formElement.checkValidity()){
    formElement.reset();
}else{}
};

const validateProfileFormOnPress = (evt) => {
validateProfileInput(evt.target);
}

formElement.addEventListener('submit', validateProfileForm);
formElement.addEventListener('input', validateProfileFormOnPress);

// валидация текст с картинкой 

const validateCardInput = (inputElement) => {
    const errorElement = submitAddForm.querySelector(`#${inputElement.id}-error`);
        if(inputElement.checkValidity()){
            errorElement.textContent = "";
            
        }else{
        errorElement.textContent = inputElement.validationMessage;
        
        }
        if(inputElement.checkValidity()){
            setSubmitButtonState(true);
            
        }else{
            setSubmitButtonState(false);
            
        }
        };
    
    const validateCardForm = (evt) => {
    evt.preventDefault();
    validateCardInput(placeInput);
    validateCardInput(imageInput);
    
    if(submitAddForm.checkValidity()){
        submitAddForm.reset();
    }else{}
    };
    
    const validateCardFormOnPress = (evt) => {
    validateCardInput(evt.target);
    }
    
    submitAddForm.addEventListener('submit', validateCardForm);
    submitAddForm.addEventListener('input', validateCardFormOnPress);


// валидация красная линия

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__popup-form_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__popup-form_type_error');
    errorElement.classList.remove('popup__error');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__popup-form'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement);
  });
    
  };
  console.log(enableValidation());
