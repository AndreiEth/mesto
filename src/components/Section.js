export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    addItem(item, isPrepend) {
        isPrepend
            ? this._containerSelector.prepend(item)
            : this._containerSelector.append(item)
    }
    renderItems() {
        this._items.forEach(item => {
            this.addItem(this._renderer(item));
        });
    }
}