export default class Movies {
    constructor(type) {
        this.baseUrl = 'https://imdb-api.com/en/API/';
        this.apiKey = 'k_fmzjathd';
        this.type = type;
        this.data = null;
    }

    async getData() {
        const endpoint = `${this.baseUrl + this.type}/${this.apiKey}`;
        await fetch(endpoint)
            .then((response) => response.json())
            .then((data) => { this.data = data.items;});
    }
}