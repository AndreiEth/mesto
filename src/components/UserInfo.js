export default class UserInfo {
    constructor(selectors) {
        this._userName = document.querySelector(selectors.name);
        this._userAbout = document.querySelector(selectors.about);
        this._avatar = document.querySelector(selectors.avatar);
        this._id;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userAbout.textContent
        }
    }

    setId(id) {
        this._id = id;  
    }

    getId() {
        return this._id;
    }

    setUserInfo(value) {
        this._userName.textContent = value.name;
        this._userAbout.textContent = value.about;
    }

    setAvatar(src) {
        this._avatar.src = src;
    }
}