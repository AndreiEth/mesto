import './index.css';
import { settings, profileFormName, profileFormAbout, profileAddButton, profileEditButton, avatarEditButton, avatarImage } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import { api } from '../api/api';
import CardList from '../components/CardList';

// create list of cards by class CardList

const cardList = new CardList();

// create new card 

const createCard = (cardData, handleCardClick) => {
    const userId = userInfo.getId();

    const canRemove = cardData.owner._id === userId;
    const isLiked = (cardData.likes || []).some((like) => like._id === userId);

    const card = cardList.createCard({
        data: cardData,
        selector: settings.cardTemplateSelector,
        handleCardClick,
        handleRemove,
        handleLike,
        canRemove,
        isLiked,
    });
    return card;
};

// create userInfo by class

const userInfo = new UserInfo({
    name: '.profile__user-name',
    about: '.profile__user-about',
    avatar: '.profile__avatar',
});

// create new popup with zoomed picture

const imageWithPopup = new PopupWithImage(settings.imagePopup);
imageWithPopup.setEventListeners();


// click on image creating popup with image and name

const handleCardClick = (cardData) => imageWithPopup.open(cardData.link, cardData.name);

// click on bin creating popup with confiramtion 

const handleRemove = (cardData) => popupWithConfirmation.open(cardData);

// click on like 

const handleLike = ({ cardData, isLiked }) => {
    const request = isLiked ? api.like(cardData._id) : api.dislike(cardData._id);

    request.then((json) => {
        const card = cardList.getCardById(json._id);
        card.updateData(json);
    })
    request.catch((res) => {
        handleLike.setError(`Произошла ошибка запроса: HTTP ${res.status}.`);
    })
    
};

// add several cards by Section class

let section;

Promise.all([api.getMe(), api.getCards()])
    .then(([me, cards]) => {
        userInfo.setUserInfo({ name: me.name, about: me.about });
        userInfo.setAvatar(me.avatar);
        userInfo.setId(me._id);

        section = new Section({
            items: cards,
            renderer: cardData => {
                return createCard(cardData, handleCardClick).getCurrentCard();
            }
        }, '.elements');
        section.renderItems();
    });

// create popup with adding card

const popupAddCard = new PopupWithForm('#add-popup', (formValue) => {
    popupAddCard.setLoading(true);
    popupAddCard.setError(``);

    api.createCard(formValue)
        .then((json) => {
            const card = createCard(json, handleCardClick);
            section.addItem(card.getCurrentCard(), true);
            popupAddCard.close();
        })
        .catch((res) => {
            popupAddCard.setError(`Произошла ошибка запроса: HTTP ${res.status}.`);
        })
        .finally(() => {
            popupAddCard.setLoading(false);
        });
});
popupAddCard.setEventListeners();

// create popup with editing profile info

const popupEditProfile = new PopupWithForm('#edit-popup', (formValue) => {
    popupEditProfile.setLoading(true);
    popupEditProfile.setError(``);

    api.setMe(formValue)
        .then((json) => {
            userInfo.setUserInfo({ about: json.about, name: json.name });
            popupEditProfile.close();
        })
        .catch((res) => {
            popupEditProfile.setError(`Произошла ошибка запроса: HTTP ${res.status}.`);
        })
        .finally(() => {
            popupEditProfile.setLoading(false);
        })
});
popupEditProfile.setEventListeners();

// create popup with avatar editing 

const avatarPopup = new PopupWithForm('#avatar-popup', (formValue) => {
    avatarPopup.setLoading(true);
    avatarPopup.setError(``);

    api.setAvatar(formValue.link)
        .then((json) => {
            userInfo.setAvatar(json.avatar);
            avatarPopup.close();
        })
        .catch((res) => {
            avatarPopup.setError(`Произошла ошибка запроса: HTTP ${res.status}.`);
        })
        .finally(() => {
            avatarPopup.setLoading(false);
        })
});
avatarPopup.setEventListeners();

// create popup with confirmation of deleting card

const popupWithConfirmation = new PopupWithConfirmation('#bin-popup', (cardData) => {
    api.removeCard(cardData._id)
        .then(() => {
            cardList.removeCardById(cardData._id);
            popupWithConfirmation.close();
        })
        .catch((res) => {
            popupWithConfirmation.setError(`Произошла ошибка запроса: HTTP ${res.status}.`);
        })
});
popupWithConfirmation.setEventListeners();


// set Listeners on buttons

profileAddButton.addEventListener('click', () => {
    popupAddCard.open();
});
profileEditButton.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo();
    profileFormName.value = currentUserInfo.name;
    profileFormAbout.value = currentUserInfo.about;
    popupEditProfile.open();
});

avatarEditButton.addEventListener('click', () => {

    avatarPopup.open();
});


// form & input validation 
const profileFormValidator = new FormValidator(settings, profileForm);
const cardFormValidator = new FormValidator(settings, cardForm);
const avatarFormValidator = new FormValidator(settings, avatarForm);
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();