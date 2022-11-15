import {closePopupOverlay, closeByEscape} from './index.js'

export const imageArea = document.getElementById('imagepopup');

export const imagePopUp = document.querySelector('.popup__image-zoom');

export function openPopUp(popUp) {
    popUp.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);  
    closePopupOverlay(popUp);
}

export const imageInfo = document.querySelector('.popup__image-name');