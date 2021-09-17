export default class LocalStorageHelper {
    constructor(itemName){
        this.data = [];
        this.itemName = itemName;
        this.getItems();
    }
    getItems(){
        const dataFromLocalStorage = JSON.parse(localStorage.getItem(this.itemName));
        if(dataFromLocalStorage!==null){
            this.data = dataFromLocalStorage;
        }
    }

    setItems(){
        localStorage.setItem(this.itemName, JSON.stringify(this.data));
    }

    findIndexinData(id){
        index = 0;
        this.data.array.forEach(row => {
            if(row.id === id){
                return(index);
            }
            index++;
        });
        return -1;
    }

    setItem(index, newItem){
        this.data[index] = newItem;
        this.setItems();
    }

    getItem(index){
        return this.data[index];
    }

    pushItem(item){
        this.data.push(item);
        this.setItems();
    }
}