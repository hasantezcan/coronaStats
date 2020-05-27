import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
  if(!confirmed) {
    return 'Loading..';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        
        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Total Cases </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} separator="," duration={1.2}/>
            </Typography>
            <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of infected cases of COVID-19 </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Recoverd </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} separator="," duration={1.2}/>
            </Typography>
            <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of recovered cases of COVID-19 </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.deaths) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Deaths </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} separator="," duration={1.2}/>
            </Typography>
            <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of deaths caused by COVID-19 </Typography>
          </CardContent>
        </Grid>

      </Grid>
    </div>
  );
};

export default Cards;
