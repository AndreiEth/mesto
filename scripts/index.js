const popUp = document.querySelector(".popup");
const clickEditButton = document.querySelector(".profile__edit-button");
const clickCloseButton = popUp.querySelector(".popup__close-button");
const userName = document.querySelector(".profile__user-name")
const userAbout = document.querySelector(".profile__user-about")
let formElement = document.getElementById("popup-form");
let nameInput = formElement.querySelector(".popup__form-text_name");
let jobInput = formElement.querySelector(".popup__form-text_job");



function openPopUp() {
    popUp.classList.add("popup_opened");
    nameInput.value = userName.textContent;
    jobInput.value = userAbout.textContent;
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
formElement.addEventListener('submit', formSubmitHandler);

