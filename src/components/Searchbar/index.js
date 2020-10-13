import React from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={props.submitHandler}>
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                />
            </form>
        </header>
    );
}

Searchbar.propTypes = {
    submitHandler: PropTypes.func.isRequired,
};
