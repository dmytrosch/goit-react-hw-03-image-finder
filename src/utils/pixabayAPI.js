const API_KEY = "18005645-026721a3bcbfec7c434912a10";

export default {
    fetchImages(searchQuery, page) {
        const API_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
        return fetch(API_URL)
            .then((resp) => resp.json())
            .then((resp) => resp.hits);
    },
};
