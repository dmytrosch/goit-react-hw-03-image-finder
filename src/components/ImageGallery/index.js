import React from "react";
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
