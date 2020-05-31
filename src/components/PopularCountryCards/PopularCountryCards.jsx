import React from 'react';

import styles from './PopularCountryCards.module.css';

const PopularCountryCards = ({ handleCountryChange }) => {

    return (
        <form className={styles.container} onClick={(e) => handleCountryChange(e.target.id)}>
            <label className={styles.card} id="USA">
                <img src="https://restcountries.eu/data/usa.svg" alt=""/>
                <h2>  </h2>
            </label>
            <label className={styles.card} id="CHN">
                <img src="https://restcountries.eu/data/chn.svg" alt=""/>
                <h2>  </h2>
            </label>
            <label className={styles.card} id="ITA">
                <img src="https://restcountries.eu/data/ita.svg" alt=""/>
                <h2>  </h2>
            </label>
            <label className={styles.card} id="TUR">
                <img src="https://restcountries.eu/data/tur.svg" alt=""/>
                <h2>  </h2>
            </label>
            <label className={styles.card} id="DEU">
                <img src="https://restcountries.eu/data/deu.svg" alt=""/>
                <h2>  </h2>
            </label>
        </form>
    );
}

export default PopularCountryCards;