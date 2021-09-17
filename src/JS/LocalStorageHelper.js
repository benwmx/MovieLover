export default class LocalStorageHelper {
  constructor(itemName) {
    this.data = [];
    this.itemName = itemName;
    this.getItems();
  }

  getItems() {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(this.itemName));
    if (dataFromLocalStorage !== null) {
      this.data = dataFromLocalStorage;
    }
  }

  setItems() {
    localStorage.setItem(this.itemName, JSON.stringify(this.data));
  }

  pushItem(item) {
    this.data.push(item);
    this.setItems();
  }
}