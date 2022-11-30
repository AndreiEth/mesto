export default class Section {
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    addItem(cardData, isPrepend){
        isPrepend 
        ? this._containerSelector.prepend(cardData)
        : this._containerSelector.append(cardData)
    }
    renderer() {
        this._items.forEach(item => {
            this._renderer(item);
          });
    }
}