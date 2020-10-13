import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem(props) {
    const { webformatURL, largeImageURL } = props.imageObj;
    const { searchQuery, clickHandler } = props;
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={searchQuery}
                className={styles.ImageGalleryItemImage}
                onClick={clickHandler}
                data-full={largeImageURL}
            />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    imageObj: PropTypes.exact({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    searchQuery: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};
