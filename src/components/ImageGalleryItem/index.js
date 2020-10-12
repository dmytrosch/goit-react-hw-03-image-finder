import React from "react";
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
