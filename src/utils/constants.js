export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__popup-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__popup-form_type_error',
  errorClass: 'popup__error',
  cardTemplateSelector: '.cardTemplate',
  container: '.elements',
  imagePopup: '#imagepopup',
  profileAddSubmitButton: '#save-card-button'
}

export const profileForm = document.getElementById("popup-form");
export const profileFormName = profileForm.name;
export const profileFormInfo = profileForm.info;

export const profileAddButton = document.querySelector(".profile__add-button");
export const profileEditButton = document.querySelector(".profile__edit-button");



