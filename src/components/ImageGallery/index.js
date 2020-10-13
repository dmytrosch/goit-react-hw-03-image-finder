import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

import ImageGalleryItem from "../ImageGalleryItem/";

export default function ImageGallery(props) {
    return (
        <ul className={styles.ImageGallery}>
            {props.images.map((image) => (
                <ImageGalleryItem
                    key={image.id}
                    imageObj={image}
                    searchQuery={props.searchQuery}
                    clickHandler={props.onImageClickHandler}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    searchQuery: PropTypes.string.isRequired,
    onImageClickHandler: PropTypes.func.isRequired,
};
