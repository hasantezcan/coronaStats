import React from 'react'
import { Card } from "@material-ui/core";

import styles from './CountryCards.module.css'

const CountryCards = ({countryData, country}) => {

    return (
        <div>
            {
            country ? 
                (
                <div>
                    <Card className={styles.card}>
                        <img className={styles.flag} src={countryData.flag} alt="" />
                        <div className={styles.content}>
                            <h3>{countryData.name}</h3>
                            <p className={styles.capitalCity}>{countryData.capital} (capital city)</p>
                        </div>
                    </Card>
                </div>
                )
                : null 
            }
        </div>
    );
}

export default CountryCards;