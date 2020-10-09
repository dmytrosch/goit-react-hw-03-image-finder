export default function normalize(imageObj) {
    return {
        id: imageObj.id,
        webformatURL: imageObj.webformatURL,
        largeImageURL: imageObj.largeImageURL,
    };
}
