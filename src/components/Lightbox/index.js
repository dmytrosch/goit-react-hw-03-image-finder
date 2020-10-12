import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

export default function Lightbox(props) {
    const imagesForOverlay = props.images.map((image) => {
        return {
            src: image.largeImageURL,
            thumbnail: image.webformatURL,
        };
    });
    return (
        <div className="MyComponent">
            <SRLWrapper images={imagesForOverlay} />
        </div>
    );
}
// function onEscClickHandler(event) {
//     if (event.target.code === "Escape") {
//         instance.close();
//     }
// }
