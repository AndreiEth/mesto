export default class UserInfo {
    constructor(userNameSelector, userInfoSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        return {
            userName: this._userName.textContent,
            UserInfo: this._userInfo.textContent
        }
    }

    setUserInfo(value) {
        this._userName.textContent = value.inputUserName;
        this._userInfo.textContent = value.inputUserInfo;
    }
}