export default class AvatarInfo {
    constructor(avatarInput) {
        this._avatarImage = document.querySelector(avatarInput.link);
    }

    getAvatarInfo() {
        return {
            link: this._avatarImage.src,
        }
    }

    setAvatarInfo(value) {
        this._avatarImage.src = value.link;
    }
}