(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__popup-form",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_invalid",inputErrorClass:"popup__popup-form_type_error",errorClass:"popup__error",cardTemplateSelector:".cardTemplate",container:".elements",imagePopup:"#imagepopup",profileAddSubmitButton:"#save-card-button"},e=document.getElementById("popup-form"),n=e.name,r=e.info,o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__edit-button");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._containerSelector=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t,e){e?this._containerSelector.prepend(t):this._containerSelector.append(t)}},{key:"renderer",value:function(){var t=this;this._items.forEach((function(e){t.addItem(t._renderer(e))}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function f(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var p=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=f(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target==e.currentTarget&&t.close()})),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=d(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function d(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function h(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=document.querySelector(".popup__image-zoom"),e._text=document.querySelector(".popup__image-name"),e}return e=u,(n=[{key:"open",value:function(t,e){v(_(u.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._text.textContent=e}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=E(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function C(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(a,e);var n,r,o,i,u=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(o);if(i){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function a(e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=u.call(this,e))._submitForm=n,r._form=r._popup.querySelector(t.formSelector),r._inputList=Array.from(r._popup.querySelectorAll(t.inputSelector)),r}return n=a,(r=[{key:"setEventListeners",value:function(){var t=this;k(O(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){return t._handleSubmitForm(e)}))}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"_handleSubmitForm",value:function(t){t.preventDefault(),this._submitForm(this._getInputValues())}},{key:"close",value:function(){k(O(a.prototype),"close",this).call(this),this._form.reset()}}])&&w(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),a}(p);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e.name),this._userInfo=document.querySelector(e.info)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.info}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var q=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._selector=n,this._handleCardClick=r,this._getCardElements(),this._setData(),this._eventListeners()}var e,n;return e=t,(n=[{key:"getCurrentCard",value:function(){return this._currentCard}},{key:"_getCardElements",value:function(){this._currentCard=document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0),this._image=this._currentCard.querySelector(".element__image"),this._text=this._currentCard.querySelector(".element__text"),this._bin=this._currentCard.querySelector(".element__bin"),this._heart=this._currentCard.querySelector(".element__heart")}},{key:"_setData",value:function(){this._image.src=this._data.link,this._image.alt=this._data.name,this._text.textContent=this._data.name}},{key:"_eventListeners",value:function(){var t=this;this._bin.addEventListener("click",(function(){return t._onBinClick()})),this._heart.addEventListener("click",(function(){return t._onHeartClick()})),this._image.addEventListener("click",(function(){return t._onCardClick()}))}},{key:"_onCardClick",value:function(){this._handleCardClick({name:this._data.name,link:this._data.link})}},{key:"_onBinClick",value:function(){return this._currentCard.remove(),null}},{key:"_onHeartClick",value:function(){this._heart.classList.toggle("element__heart_active")}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,A(r.key),r)}}function F(t,e,n){return(e=A(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t){var e=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===R(e)?e:String(e)}var D=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,"_showInputError",(function(t,e){var n=r._form.querySelector("#".concat(t.id,"-error"));t.classList.add(r._settings.inputErrorClass),n.textContent=e})),F(this,"_hideInputError",(function(t){var e=r._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(r._settings.inputErrorClass),e.textContent=""})),this._settings=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._saveButton=this._form.querySelector(this._settings.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){return t._onInput(e)}))})),this._form.addEventListener("submit",(function(){return t._onSubmit()}))}},{key:"_onSubmit",value:function(){this._checkFormValidity(),this._resetValidation()}},{key:"_onInput",value:function(t){this._checkInputValidity(t),this._checkFormValidity()}},{key:"_resetValidation",value:function(){var t=this;this._setSubmitButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_checkFormValidity",value:function(){this._form.checkValidity()?this._setSubmitButtonState(!0):this._setSubmitButtonState(!1)}},{key:"_setSubmitButtonState",value:function(t){t?(this._saveButton.removeAttribute("disabled"),this._saveButton.classList.remove(this._settings.inactiveButtonClass)):(this._saveButton.setAttribute("disabled",!0),this._saveButton.classList.add(this._settings.inactiveButtonClass))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),N=function(e,n){return new q(e,t.cardTemplateSelector,n)},U=new B({name:".profile__user-name",info:".profile__user-about"}),z=new S(t.imagePopup);z.setEventListeners();var H=function(t){return z.open(t.link,t.name)},M=new c({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){return N(t,H).getCurrentCard()}},".elements");M.renderer();var G=new P("#add-popup",(function(t){var e=N(t,H);M.addItem(e.getCurrentCard(),!0),G.close()}));G.setEventListeners();var J=new P("#edit-popup",(function(t){U.setUserInfo(t),J.close()}));J.setEventListeners(),o.addEventListener("click",(function(){G.open()})),i.addEventListener("click",(function(){var t=U.getUserInfo();n.value=t.name,r.value=t.info,J.open()}));var K=new D(t,profileForm),Q=new D(t,cardForm);K.enableValidation(),Q.enableValidation()})();