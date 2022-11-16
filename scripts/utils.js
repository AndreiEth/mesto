export const imageArea = document.getElementById('imagepopup');

export const imagePopUp = document.querySelector('.popup__image-zoom');

export function openPopUp(popUp) {
    popUp.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);  
}

export const imageInfo = document.querySelector('.popup__image-name');

export function closeByEscape(evt) {

    if (evt.key === 'Escape') {
      const openedPopup = evt.currentTarget.querySelector('.popup_opened');
      closePopUp(openedPopup);
    }
  } 

export const closePopupOverlay = (popUp) => {
    popUp.addEventListener('click', function (evt) {
        if(evt.target == evt.currentTarget){
           closePopUp(popUp);
        }
      });
}

export function closePopUp(popUp) {
    popUp.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape); 
}