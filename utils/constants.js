export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__popup-form',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__popup-form_type_error',
  errorClass: 'popup__error',
  cardTemplateSelector: '.cardTemplate',
  container: '.elements',
  imagePopup: '#imagepopup'

}

//edit button 
export const profilePopUp = document.querySelector(".popup");
export const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
export const buttonClosePopupProfile = profilePopUp.querySelector(".popup__close-button");
export const userName = document.querySelector(".profile__user-name");
export const userAbout = document.querySelector(".profile__user-about");
export const profileForm = document.getElementById("popup-form");

export const nameInput = profileForm.querySelector("#form-name");
export const jobInput = profileForm.querySelector("#form-job");




//add button
export const cardPopUp = document.getElementById("addpopup");
export const butttonOpenPopupCard = document.querySelector(".profile__add-button");
export const buttonClosePopupCard = document.getElementById("closeaddbutton");
export const cardForm = document.getElementById("addpopup-form");
export const placeInput = cardForm.querySelector("#form-place");
export const imageInput = cardForm.querySelector("#form-image");




export const buttonCloseImagePopup = document.getElementById('closeimagebutton');