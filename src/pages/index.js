import './index.css'; 
import { initialCards } from '../utils/cardList.js';
import { settings, profileFormName, profileFormInfo, profileAddButton, profileEditButton, profileAddSubmitButton } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';


// create new card by class Card

const createCard = (cardData, handleCardClick) => {
    return new Card(cardData, settings.cardTemplateSelector, handleCardClick);
}

// create userInfo by class

const userInfo = new UserInfo({ name: '.profile__user-name', info: '.profile__user-about' });

// create new popup with zoomed picture

const imageWithPopup = new PopupWithImage(settings.imagePopup);
imageWithPopup.setEventListeners();

// click on image creating popup with image and name

const handleCardClick = (cardData) => imageWithPopup.open(cardData.link, cardData.name);

// add several cards by Section class

const section = new Section({
    items: initialCards,
    renderer: cardData => {
        return createCard(cardData, handleCardClick).getCurrentCard();
    }
},
    '.elements'
);

section.renderer();

// create popup with adding card

const addPopup = new PopupWithForm('#add-popup', (formValue) => {
    const card = createCard(formValue, handleCardClick);
    section.addItem(card.getCurrentCard(), true);
    addPopup.close();
});
addPopup.setEventListeners();

// create popup with editing profile info
 
const editPopup = new PopupWithForm('#edit-popup', (formValue) => {
    userInfo.setUserInfo(formValue);
    editPopup.close();
});
editPopup.setEventListeners();

 // set Listeners on buttons
profileAddButton.addEventListener('click', () => {
    profileAddSubmitButton.classList.add(settings.inactiveButtonClass);
    profileAddSubmitButton.setAttribute("disabled", true);
    addPopup.open();
});
profileEditButton.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo();
    profileFormName.value = currentUserInfo.name;
    profileFormInfo.value = currentUserInfo.info;
    editPopup.open();
});


// form & input validation 
const profileFormValidator = new FormValidator(settings, profileForm);
const cardFormValidator = new FormValidator(settings, cardForm);
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();























