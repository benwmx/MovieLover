export default class LocalStorage {
    constructor(itemName){
        window.localStorage.setItem(itemName, JSON.stringify(data));
        this.data = null;
        this.itemName = itemName;
        this.getItems();
    }
    getItems(){
        this.data = JSON.parse(window.localStorage.getItem(this.itemName));
    }

    setItems(){
        window.localStorage.setItem(this.itemName, JSON.stringify(this.data));
    }

    setItems(data){
        this.data = data;
        this.setItems();
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

    setItem(index,newItem){
        this.data[index] = newItem;
        this.setItems();
    }

    getItem(index){
        return this.data[index];
    }
}