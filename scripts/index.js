import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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



export const imageArea = document.getElementById('imagepopup');
const buttonCloseImagePopup = document.getElementById('closeimagebutton');
export const imagePopUp = document.querySelector('.popup__image-zoom');
const imageInfo = document.querySelector('.popup__image-name');

const container = document.querySelector(".elements");
const template = document.querySelector(".cardTemplate");



// open and close pop up functions
export function openPopUp(popUp) {
    popUp.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);  
    document.addEventListener('click', closePopupOverlay(popUp));
}

export function closePopUp(popUp) {
    popUp.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape); 
    
}


const closePopupOverlay = (popUp) => {
    popUp.addEventListener('click', function (evt) {
        if(evt.target == evt.currentTarget){
           closePopUp(popUp);
        }
      });
}

buttonCloseImagePopup.addEventListener("click", function () {
    closePopUp(imageArea);
});


function closeByEscape(evt) {

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

// input validation 
[profileForm, cardForm].forEach((form) => {
const formValidator = new FormValidator(cardSettings, form);
formValidator.enableValidation();
});






