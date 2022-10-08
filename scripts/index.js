//edit button 
const popUp = document.querySelector(".popup");
const clickEditButton = document.querySelector(".profile__edit-button");
const clickCloseButton = popUp.querySelector(".popup__close-button");
const userName = document.querySelector(".profile__user-name");
const userAbout = document.querySelector(".profile__user-about");
let formElement = document.getElementById("popup-form");
let nameInput = formElement.querySelector(".popup__popup-form_text_name");
let jobInput = formElement.querySelector(".popup__popup-form_text_job");

//add button
const addPopUp = document.getElementById("addpopup")
const clickAddButton = document.querySelector(".profile__add-button");
const clickCloseAddButton = document.getElementById("closeaddbutton");
const elementText = document.querySelector(".element__text");
const elementImage = document.querySelector(".element__image");
let submitAddForm = document.getElementById("addpopup-form");
let placeInput = document.querySelector(".popup__popup-form_text_place");
let imageInput = document.querySelector(".popup__popup-form_text_image");



// close pop up functions
function closePopUp () {
    popUp.classList.remove("popup_opened");
}
function closeAddPopUp () {
    addPopUp.classList.remove("popup_opened");
}

//edit button 
clickEditButton.addEventListener("click", function() {
    popUp.classList.add("popup_opened");
    nameInput.value = userName.textContent;
    jobInput.value = userAbout.textContent;
});
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = jobInput.value;
    closePopUp();
});
clickCloseButton.addEventListener("click", function  () {
    popUp.classList.remove("popup_opened");
});

//add button 

clickAddButton.addEventListener("click", function () {
    addPopUp.classList.add("popup_opened");
});
const handleAddForm = (evt) => {
    evt.preventDefault();
    const initialCard = createItemNode(placeInput.value, imageInput.value);
    container.prepend(initialCard); 
    closeAddPopUp();
    placeInput.value = '';
    imageInput.value = '';
}
clickCloseAddButton.addEventListener("click", function () {
    addPopUp.classList.remove("popup_opened");
});


// add cards

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

const container = document.querySelector(".elements");
const template = document.querySelector(".template");


const render = () => {
    initialCards.forEach((initialCard) => {
        const currentCard = createItemNode(initialCard.name,initialCard.link);
        container.append(currentCard);
    });
    submitAddForm.addEventListener("submit", handleAddForm);
};
const createItemNode = (name,link) => {
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

    currentLink.addEventListener('click', function(){
        imageInfo.textContent = name;
        imagePopUp.src = link;
        imagePopUp.alt = name;
        openImagePopUp ();
    });


    return currentCard;
}

// zoom picture

const openImage = document.getElementById('imagepopup');
const closePic = document.getElementById('closeimagebutton');
const imagePopUp = document.querySelector('.image__zoom');
const imageInfo = document.querySelector('.image__name');

function openImagePopUp () {
    openImage.classList.add("popup__image_active");
}
function closeImagePopUp () {
    openImage.classList.remove("popup__image_active");
}

closePic.addEventListener("click", closeImagePopUp);

//delete function

const handleDeleteCard = (evt) => {
    const currentEl = evt.target.closest(".element");
    currentEl.remove();
}


render();

