import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
    return (
        <button className={styles.Button} onClick={props.handler}>
            Load more
        </button>
    );
}
