import React from "react";
import styles from "./App.module.css";

import pixabayAPI from "../utils/pixabayAPI";
import normalize from "../utils/normalize";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery/";
import Button from "./Button";
import Loader from "./Loader";
import SimpleReactLightbox from "simple-react-lightbox";
import Lightbox from "./Lightbox";

export default class App extends React.Component {
    state = {
        searchQuery: "",
        images: [],
        page: 1,
        loading: false,
    };

    searchFormHandler = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.query.value;
        console.log("search", searchQuery);
        this.setState({
            searchQuery,
            page: 1,
            images: [],
        });
    };
    onLoadMoreBtnHandler = () => {
        console.log("here");
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }));
    };
    // onImageClickHandler = (event) => {
    //     const fullSizeUrl = event.target.dataset.full;
    //     lightbox(fullSizeUrl);
    // };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.getImages();
            window.scrollTo({
                top: document.scrollHeight,
                behavior: "smooth",
            });
        }
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.getImages();
        }
    }
    componentDidMount() {
        this.getImages();
    }
    async getImages() {
        const { page, searchQuery } = this.state;
        this.toggleLoadingState();
        const imagesArr = await pixabayAPI.fetchImages(searchQuery, page);
        const normalizedImagesArr = imagesArr.map((img) => normalize(img));
        this.setState((prevState) => ({
            images: [...prevState.images, ...normalizedImagesArr],
        }));
        this.hideSpinner();
    }
    hideSpinner() {
        const intervalId = setInterval(() => {
            const loadingState = document.readyState;
            console.log(loadingState);
            if (loadingState === "complete") {
                clearInterval(intervalId);
                this.toggleLoadingState();
            }
        }, 500);
    }
    toggleLoadingState() {
        console.log(this.state.loading, "loading state");
        this.setState((prevState) => ({
            loading: !prevState.loading,
        }));
    }

    render() {
        const { images, loading } = this.state;
        return (
            <>
                {loading && <Loader />}
                <div
                    className={`${styles.App} App`}
                    data-lay={loading && "semitransparent"}
                >
                    <SimpleReactLightbox>
                        <Lightbox images={images}/>
                        <Searchbar submitHandler={this.searchFormHandler} />
                        <main>
                            {images.length > 0 && (
                                <>
                                    <ImageGallery
                                        images={images}
                                        searchQuery={this.state.searchQuery}
                                        onImageClickHandler={
                                            this.onImageClickHandler
                                        }
                                    />
                                    <Button
                                        handler={this.onLoadMoreBtnHandler}
                                    />
                                </>
                            )}
                        </main>
                    </SimpleReactLightbox>
                </div>
            </>
        );
    }
}
