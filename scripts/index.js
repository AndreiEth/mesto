import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
import { openPopUp, imageArea } from './utils.js';
import {initialCards} from './CardList.js';

const cardSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__popup-form',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_invalid',
    inputErrorClass: 'popup__popup-form_type_error',
    errorClass: 'popup__error'
  }

//edit button 
const profilePopUp = document.querySelector(".popup");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = profilePopUp.querySelector(".popup__close-button");
const userName = document.querySelector(".profile__user-name");
const userAbout = document.querySelector(".profile__user-about");
const profileForm = document.getElementById("popup-form");
const nameInput = profileForm.querySelector("#form-name");
const jobInput = profileForm.querySelector("#form-job");




//add button
const cardPopUp = document.getElementById("addpopup");
const butttonOpenPopupCard = document.querySelector(".profile__add-button");
const buttonClosePopupCard = document.getElementById("closeaddbutton");
const elementText = document.querySelector(".element__text");
const elementImage = document.querySelector(".element__image");
const cardForm = document.getElementById("addpopup-form");
const placeInput = cardForm.querySelector("#form-place");
const imageInput = cardForm.querySelector("#form-image");
const saveButton = Array.from(document.querySelectorAll('.popup__save-button'));
const saveCardButton = cardForm.querySelector("#save-card-button");




const buttonCloseImagePopup = document.getElementById('closeimagebutton');



const container = document.querySelector(".elements");
const template = document.querySelector(".cardTemplate");



// open & close pop up functions


 function closePopUp(popUp) {
    popUp.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape); 
    
}


 export const closePopupOverlay = (popUp) => {
    popUp.addEventListener('click', function (evt) {
        if(evt.target == evt.currentTarget){
           closePopUp(popUp);
        }
      });
}


buttonCloseImagePopup.addEventListener("click", function () {
    closePopUp(imageArea);
});


export function closeByEscape(evt) {

    if (evt.key === 'Escape') {
      const openedPopup = evt.currentTarget.querySelector('.popup_opened');
      closePopUp(openedPopup);
    }
  } 

//edit profile button 
buttonOpenPopupProfile.addEventListener("click", function () {
    nameInput.value = userName.textContent;
    jobInput.value = userAbout.textContent;
    openPopUp(profilePopUp);
});
profileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = jobInput.value;
    closePopUp(profilePopUp);
});
buttonClosePopupProfile.addEventListener("click", function () {
    closePopUp(profilePopUp);
});


//add card  button 

butttonOpenPopupCard.addEventListener("click", function () {
    openPopUp(cardPopUp);
});

cardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    createCard({name: placeInput.value, link: imageInput.value}, true);
    closePopUp(cardPopUp);
    placeInput.value = '';
    imageInput.value = '';
    
});
buttonClosePopupCard.addEventListener("click", function () {
    closePopUp(cardPopUp);
});


// create new card by class Card

const createCard = (cardData, isPrepend) => {
    const card = new Card(cardData, ".cardTemplate");
    if(isPrepend) {
        container.prepend(card.getCurrentCard());
    } else {
        container.append(card.getCurrentCard());
    }
}

initialCards.forEach((cardData) => {
    createCard(cardData);
});

// form & input validation 
const profileFormValidator = new FormValidator(cardSettings, profileForm);
const cardFormValidator = new FormValidator(cardSettings, cardForm);
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();







