import ItemCard from "../ItemCard";
import React from "react";
import { Grid, withStyles } from "@material-ui/core/";
import styles from "./styles";
import PropTypes from "prop-types";

const ItemGrid = ({ items, classes }) => {
  return (
    <Grid className={classes.cardGrid}>
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

ItemGrid.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array.isRequired
};

export default withStyles(styles)(ItemGrid);
