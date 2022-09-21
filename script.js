const popUp = document.querySelector(".popup");
const clickEditButton = document.querySelector(".profile__edit-button");
const clickCloseButton = popUp.querySelector(".popup__close-button");
const clickSaveButton = popUp.querySelector(".popup__save-button");
const userName = document.querySelector(".profile__user-name")
const userAbout = document.querySelector(".profile__user-about")
let formElement = popUp.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__form-info_name");
let jobInput = formElement.querySelector(".popup__form-info_job");



function openPopUp() {
    popUp.classList.add("popup_opened");
}
function closePopUp() {
    popUp.classList.remove("popup_opened");
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = jobInput.value;
    closePopUp();
}

clickEditButton.addEventListener("click", openPopUp);
clickCloseButton.addEventListener("click", closePopUp);
clickSaveButton.addEventListener("click", formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);
