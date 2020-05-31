import React from 'react'
import { Card, Typography } from "@material-ui/core";

import styles from './CountryCards.module.css'

const CountryCards = ({countryData, country}) => {

    return (
        <div>
            {
            country ? 
                (
                <Card className={styles.card}>
                    <img className={styles.flag} src={countryData.flag} alt="" />
                    <div className={styles.content}>
                        <h3 noWrap>{countryData.name}</h3>
                        <p title={`Capital City of ${countryData.name}`} className={styles.capitalCity}>{countryData.capital}</p>
                    </div>
                </Card>
                )
                : null 
            }
        </div>
    );
}

export default CountryCards;