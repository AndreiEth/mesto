//edit button 
const popUp = document.querySelector(".popup");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = popUp.querySelector(".popup__close-button");
const userName = document.querySelector(".profile__user-name");
const userAbout = document.querySelector(".profile__user-about");
const formElement = document.getElementById("popup-form");
const nameInput = formElement.querySelector("#form-name");
const jobInput = formElement.querySelector("#form-job");




//add button
const addPopUp = document.getElementById("addpopup");
const butttonOpenPopupCard = document.querySelector(".profile__add-button");
const buttonClosePopupCard = document.getElementById("closeaddbutton");
const elementText = document.querySelector(".element__text");
const elementImage = document.querySelector(".element__image");
const submitAddForm = document.getElementById("addpopup-form");
const placeInput = submitAddForm.querySelector("#form-place");
const imageInput = submitAddForm.querySelector("#form-image");
const saveButton = Array.from(document.querySelectorAll('.popup__save-button'));


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
}

function closePopUp(popUp) {
    popUp.classList.remove("popup_opened");
}

document.addEventListener('keydown', function(evt){
    if(evt.key == "Escape"){
        closePopUp(popUp);
        closePopUp(addPopUp);
        closePopUp(imageArea);
    }
});
const closePopupOverlay = (window) => {
    window.addEventListener('click', function (evt) {
        if(evt.target == evt.currentTarget){
           closePopUp(window);
        }
      });
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

document.addEventListener('click', closePopupOverlay(imageArea));

//edit button 
buttonOpenPopupProfile.addEventListener("click", function () {
    nameInput.value = userName.textContent;
    jobInput.value = userAbout.textContent;
    openPopUp(popUp);
});
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = jobInput.value;
    closePopUp(popUp);
});
buttonClosePopupProfile.addEventListener("click", function () {
    closePopUp(popUp);
});
document.addEventListener('click', closePopupOverlay(popUp));


//add button 

butttonOpenPopupCard.addEventListener("click", function () {
    openPopUp(addPopUp);
});

const handleAddForm = (evt) => {
    evt.preventDefault();
    const initialCard = createItemNode(placeInput.value, imageInput.value);
    container.prepend(initialCard);
    closePopUp(addPopUp);
    placeInput.value = '';
    imageInput.value = '';
}
buttonClosePopupCard.addEventListener("click", function () {
    closePopUp(addPopUp)
});
document.addEventListener('click', closePopupOverlay(addPopUp));


// add cards

const render = () => {
    initialCards.forEach((initialCard) => {
        const currentCard = createItemNode(initialCard.name, initialCard.link);
        container.append(currentCard);
    });
    submitAddForm.addEventListener("submit", handleAddForm);
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




