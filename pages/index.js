import { initialCards } from '../utils/cardList.js';
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
'.elements'
);


// create popup with zoomed image

const PopupImage = new PopupWithImage(settings.imagePopup);


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



















