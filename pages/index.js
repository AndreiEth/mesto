import { initialCards } from '../utils/card.js';
import { settings } from '../utils/constants.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

// add several cards by Section class

const cardList = new Section ({
    items: initialCards,
    renderer: cardData => {
        cardList.addItem(createCard(cardData))
    }
},
settings.container
);


// create new card by class Card

const createCard = (cardData, handleCardClick) => {
    return new Card(cardData, settings.cardTemplateSelector , handleCardClick);
  
}

initialCards.forEach((cardData, handleCardClick) => {
    createCard(cardData, handleCardClick);
});

// form & input validation 
const profileFormValidator = new FormValidator(settings, profileForm);
const cardFormValidator = new FormValidator(settings, cardForm);
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
// open & close pop up functions


buttonCloseImagePopup.addEventListener("click", function () {
    closePopUp(imageArea);
});
closePopupOverlay(imageArea);




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
closePopupOverlay(profilePopUp);


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
closePopupOverlay(cardPopUp);










