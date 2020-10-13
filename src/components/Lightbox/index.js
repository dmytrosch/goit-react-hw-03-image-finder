import React from "react";
import PropTypes from "prop-types";
import styles from "./Lightbox.module.css";

export default class Lightbox extends React.Component {
    static propTypes = {
        closeEsc: PropTypes.func.isRequired,
        onBackDropClick: PropTypes.func.isRequired,
        imageUrl: PropTypes.string.isRequired,
    };
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
