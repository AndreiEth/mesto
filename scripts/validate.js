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
        profileForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(profileForm, settings);
  });
    
  };

const showInputError = (profileForm, inputElement, errorMessage, settings) => {
    const errorElement = profileForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };
  
  const hideInputError = (profileForm, inputElement, settings) => {
    const errorElement = profileForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
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
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(profileForm, inputElement, settings);
      });
    });
  };
  
  
  enableValidation(settings);


  // валидация кнопки
const setSubmitButtonState = (isActive, settings) => {
    saveButton.forEach((saveButton) => {
    if(isActive){
        saveButton.removeAttribute("disabled");
   
    saveButton.classList.remove(settings.inactiveButtonClass);
    }else{
        saveButton.setAttribute("disabled", true);
        saveButton.classList.add(settings.inactiveButtonClass);
       
    }
});
    }

// валидация профиля

const validateProfileInput = (inputElement) => {
const errorElement = profileForm.querySelector(`#${inputElement.id}-error`);
    if(inputElement.checkValidity()){
        errorElement.textContent = "";
        
    }else{
    errorElement.textContent = inputElement.validationMessage;
    
    }
    if(profileForm.checkValidity()){
        setSubmitButtonState(true, settings);
        
    }else{
        setSubmitButtonState(false, settings);
        
    }
    };

const validateProfileForm = (evt) => {
evt.preventDefault();
validateProfileInput(nameInput);
validateProfileInput(jobInput);

if(profileForm.checkValidity()){
    profileForm.reset();
}else{}
};

const validateProfileFormOnPress = (evt) => {
validateProfileInput(evt.target);
}

profileForm.addEventListener('submit', validateProfileForm);
profileForm.addEventListener('input', validateProfileFormOnPress);

// валидация текст с картинкой 

const validateCardInput = (inputElement) => {
    const errorElement = cardForm.querySelector(`#${inputElement.id}-error`);
        if(inputElement.checkValidity()){
            errorElement.textContent = "";
            
        }else{
        errorElement.textContent = inputElement.validationMessage;
        
        }
        if(cardForm.checkValidity()){
            setSubmitButtonState(true, settings);
            
        }else{
            setSubmitButtonState(false, settings);
            
        }
        };
    
    const validateCardForm = (evt) => {
    evt.preventDefault();
    validateCardInput(placeInput);
    validateCardInput(imageInput);
    
    if(cardForm.checkValidity()){
        cardForm.reset();
    }else{}
    };
    
    const validateCardFormOnPress = (evt) => {
    validateCardInput(evt.target);
    }
    
    cardForm.addEventListener('submit', validateCardForm);
    cardForm.addEventListener('input', validateCardFormOnPress);



  
