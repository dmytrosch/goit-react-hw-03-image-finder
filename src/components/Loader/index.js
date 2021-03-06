import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class LoaderComp extends React.Component {
    render() {
        return (
            <div className={styles.Loader}>
                <Loader type="Oval" color="#3f51b5" height={100} width={100} timeout={10000}/>
            </div>
        );
    }
}
