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
class Card {

    static _template = document.querySelector('#template')

    constructor (info, cardElement) {
      this._info = info;
      this._cardElement = cardElement;
    }
    
    createItemNode (name, link)  {
        this._currentCard = Card._template.querySelector('.element').content.cloneNode(true);
        this._nameCard = this._currentCard.querySelector(this._cardElement.nameCard);
        this._image = this._currentCard.querySelector(this._cardElement.image);
        this._nameCard.textContent = name;
        this._image.src = link;
        this._image.alt = name;
    
        this._deleteButton = this._currentCard.querySelector('.element__bin');
        this._deleteButton.addEventListener('click', handleDeleteCard);
    
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