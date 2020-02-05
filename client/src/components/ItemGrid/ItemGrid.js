import ItemCard from "../ItemCard";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, makeStyles } from "@material-ui/core/";
import styles from "./styles";

const ItemGrid = ({ items, classes }) => {
  console.log(items);
  return (
    <Grid item className={classes.cardGrid}>
      <Grid container justify="flex-start" spacing={3}>
        {items.items.map(item => {
          //   console.log(item);
          return (
            <Grid item xs={10} className={classes.singleCard} key={item.id}>
              <ItemCard item={item} />
            </Grid>
          );
        })}
        {console.log("hello", items)}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ItemGrid);
