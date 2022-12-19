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

    setUserInfo(userInfo) {
        if (userInfo.name){
            this._userName.textContent = userInfo.name;
        };
        if (userInfo.about) {
            this._userAbout.textContent = userInfo.about;
        };
    }

    setAvatar(src) {
        if (src) {
        this._avatar.src = src;
        };
    }
}