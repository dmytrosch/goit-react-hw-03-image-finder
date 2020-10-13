import React from "react";
import styles from "./App.module.css";

import pixabayAPI from "../utils/pixabayAPI";
import normalize from "../utils/normalize";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery/";
import Button from "./Button";
import Loader from "./Loader";
import Lightbox from "./Lightbox";

export default class App extends React.Component {
    state = {
        searchQuery: "",
        images: [],
        page: 1,
        loading: false,
        overlay: false,
        overlayImg: null,
    };

    searchFormHandler = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.query.value;
        this.setState({
            searchQuery,
            page: 1,
            images: [],
        });
    };
    onLoadMoreBtnHandler = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }));
    };
    onImageClickHandler = (event) => {
        event.preventDefault();
        this.toggleLoadingState();
        const fullSizeUrl = event.target.dataset.full;
        this.setState({
            overlay: true,
            overlayImg: fullSizeUrl,
        });
        this.hideSpinner();
    };
    onEscClickHandler = (event) => {
        console.log("e");
        if (event.code === "Escape") {
            this.setState({
                overlay: false,
            });
        }
    };
    onBackDropClickHandler = (event) => {
        console.log(event.target, event.currentTarget);
        if (event.target === event.currentTarget) {
            this.setState({
                overlay: false,
            });
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.getImages().then(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            });
        }
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.getImages();
        }
    }
    componentDidMount() {
        this.getImages();
    }
    removeOverlay() {
        this.setState({
            overlay: false,
        });
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
            if (loadingState === "complete") {
                clearInterval(intervalId);
                this.toggleLoadingState();
            }
        }, 500);
    }
    toggleLoadingState() {
        this.setState((prevState) => ({
            loading: !prevState.loading,
        }));
    }

    render() {
        const { images, loading, overlayImg, overlay } = this.state;
        return (
            <>
                {loading && <Loader />}
                {overlay && (
                    <Lightbox
                        imageUrl={overlayImg}
                        closeEsc={this.onEscClickHandler}
                        onBackDropClick={this.onBackDropClickHandler}
                    />
                )}
                <div
                    className={`${styles.App}`}
                    data-lay={loading && "semitransparent"}
                >
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
                                <Button handler={this.onLoadMoreBtnHandler} />
                            </>
                        )}
                    </main>
                </div>
            </>
        );
    }
}
