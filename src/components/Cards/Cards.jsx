import React from "react";
import { Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';
import CountCard from '../CountCard/CountCard';

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
  if(!confirmed) {
    return 'Loading..';
  }

  return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <CountCard title={"Total Cases"}
            value={confirmed.value}
            description={"Number of infected cases of COVID-19"}
            lastUpdate={lastUpdate}
            style={styles.infected} />

          <CountCard title={"Recoverd"}
            value={recovered.value}
            description={"Number of recovered cases of COVID-19"}
            lastUpdate={lastUpdate}
            style={styles.recovered} />
          
          <CountCard title={"Deaths"}
            value={deaths.value}
            description={"Number of deaths caused by COVID-19"}
            lastUpdate={lastUpdate}
            style={styles.deaths} />
        </Grid>
      </div>
  );
};

export default Cards;
