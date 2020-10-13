import React from "react";
import styles from "./Lightbox.module.css";

export default class Lightbox extends React.Component {
    componentDidMount() {
        window.addEventListener("keydown", this.props.closeEsc);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.props.closeEsc);
    }
    render() {
        return (
            <div
                className={styles.Overlay}
                onClick={this.props.onBackDropClick}
            >
                <div className={styles.Modal}>
                    <img src={this.props.imageUrl} alt="" width="800" />
                </div>
            </div>
        );
    }
}
