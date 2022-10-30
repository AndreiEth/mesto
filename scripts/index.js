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
const inactiveButton = cardForm.querySelector("#savebuttoncard");


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

const imageArea = document.getElementById('imagepopup');
const buttonCloseImagePopup = document.getElementById('closeimagebutton');
const imagePopUp = document.querySelector('.popup__image-zoom');
const imageInfo = document.querySelector('.popup__image-name');

const container = document.querySelector(".elements");
const template = document.querySelector(".template");



// open nad close pop up functions
function openPopUp(popUp) {
    popUp.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);  
    document.addEventListener('click', closePopupOverlay(popUp));
}

function closePopUp(popUp) {
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


function closeByEscape(evt) {

    if (evt.key === 'Escape') {
      const openedPopup = evt.currentTarget.querySelector('.popup_opened');
      closePopUp(openedPopup);
    }
  } 

  
  
  




//delete card function

const handleDeleteCard = (evt) => {
    const currentEl = evt.target.closest(".element");
    currentEl.remove();
}


// zoom picture

buttonCloseImagePopup.addEventListener("click", function () {
    closePopUp(imageArea);
});



//edit button 
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


//add button 

butttonOpenPopupCard.addEventListener("click", function () {
    openPopUp(cardPopUp);
});

const handleAddForm = (evt) => {
    evt.preventDefault();
    const initialCard = createItemNode(placeInput.value, imageInput.value);
    container.prepend(initialCard);
    closePopUp(cardPopUp);
    placeInput.value = '';
    imageInput.value = '';
}
buttonClosePopupCard.addEventListener("click", function () {
    closePopUp(cardPopUp)
});



// add cards

const render = () => {
    initialCards.forEach((initialCard) => {
        const currentCard = createItemNode(initialCard.name, initialCard.link);
        container.append(currentCard);
    });
    cardForm.addEventListener("submit", handleAddForm);
};
const createItemNode = (name, link) => {
    const currentCard = template.content.cloneNode(true);
    const currentName = currentCard.querySelector(".element__text");
    const currentLink = currentCard.querySelector(".element__image");
    currentName.textContent = name;
    currentLink.src = link;
    currentLink.alt = name;

    const deleteButton = currentCard.querySelector('.element__bin');
    deleteButton.addEventListener('click', handleDeleteCard);

    currentCard.querySelector('.element__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart_active');
    });

    currentLink.addEventListener('click', function () {
        imageInfo.textContent = name;
        imagePopUp.src = link;
        imagePopUp.alt = name;
        openPopUp(imageArea);
    });


    return currentCard;
}

render();




