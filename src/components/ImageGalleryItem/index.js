import React from "react";
import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem(props) {
    const { webformatURL } = props.imageObj;
    const { searchQuery } = props;
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={searchQuery}
                className={styles.ImageGalleryItemImage}
            />
        </li>
    );
}
