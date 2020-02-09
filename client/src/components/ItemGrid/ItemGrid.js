import ItemCard from "../ItemCard";
import React from "react";
import { Grid, withStyles } from "@material-ui/core/";
import styles from "./styles";

const ItemGrid = ({ items, classes }) => {
  return (
    <Grid className={classes.cardGrid} item xs={12}>
      <Grid container justify="center" spacing={2}>
        {items.map(item => {
          return (
            <Grid item className={classes.singleCard} key={item.id}>
              <ItemCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ItemGrid);
