import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from "./CountCard.module.css";

const CountCard = ({ title, value, description, style, lastUpdate}) => {

    return (
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card, `${style}`)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom> {title} </Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} separator="," duration={1.2} />
                </Typography>
                <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2"> {description} </Typography>
            </CardContent>
        </Grid>
    );
};

export default CountCard;
