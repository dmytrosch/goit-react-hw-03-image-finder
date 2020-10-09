import React from "react";
import styles from "./App.module.css";

import pixabayAPI from "../utils/pixabayAPI";
import normalize from "../utils/normalize";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery/";

export default class App extends React.Component {
    state = {
        searchQuery: null,
        images: [],
    };

    searchFormHandler = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.query.value;
        this.setState({
            searchQuery,
        });
    };

    async componentDidMount() {
        const imagesArr = await pixabayAPI.fetchImages();
        const normalizedImagesArr = imagesArr.map((img) => normalize(img));
        console.log(normalizedImagesArr);
        this.setState((prevState) => ({
            images: [...prevState.images, ...normalizedImagesArr],
        }));
    }

    render() {
        const { images } = this.state;
        return (
            <div className={styles.App}>
                <Searchbar submitHandler={this.searchFormHandler} />
                <main>
                    <ImageGallery images={images} searchQuery={this.state.searchQuery}/>
                </main>
            </div>
        );
    }
}
