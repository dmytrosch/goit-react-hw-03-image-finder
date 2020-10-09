const searchQuery = "popular";
const page = 1;
const API_KEY = "18005645-026721a3bcbfec7c434912a10";
const API_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export default {
    fetchImages() {
        console.log(API_URL);
        return fetch(API_URL)
            .then((resp) => resp.json())
            .then((resp) => resp.hits);
    },
};
