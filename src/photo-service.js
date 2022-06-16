const BASE_URL = "https://pixabay.com/api/"
const KEY = '27897235-d7c53493320d0870f17cf5746'

export default class PhotoApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    fetchPhotos() {
       
        const url = `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3&page=${this.page}`;
       return fetch(url)
          .then(response =>  response.json())
          .then(({hits}) => {
            this.page += 1 
            return hits
        })
    }
    
    resetPage() {
        this.page = 1 
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}

