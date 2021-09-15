export default class Movies {
    constructor(type) {
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '3e6e2ef61d4b19645d93d55c93096241';
        this.type = type;
        this.data = [];
    }

    async getData() {
        const endpoint = `${this.baseUrl + this.type}?api_key=${this.apiKey}`;
        await fetch(endpoint)
            .then((response) => response.json())
            .then((data) => { 
                // console.log(data.results);
                this.filterData(data.results)});
    }

    filterData = (data) =>{
        data.forEach((movie) => {
            this.data.push({
                title:movie.title,
                image:'https://image.tmdb.org/t/p/w500'+movie.poster_path,
                id:movie.id,
                overview:movie.overview,
                release_date:movie.release_date,
                vote_average:movie.vote_average,
            });
        });
    }
}