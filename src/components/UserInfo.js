export default class UserInfo {
    constructor(profileInput) {
        this._userName = document.querySelector(profileInput.name);
        this._userInfo = document.querySelector(profileInput.info);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            info: this._userInfo.textContent
        }
    }

    setUserInfo(value) {
        this._userName.textContent = value.name;
        this._userInfo.textContent = value.info;
    }
}