import React, { useReducer } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import ItemCard from "../../components/ItemCard";
import ProfileCard from "../../components/ProfileCard";

const Profile = ({ data, classes }) => {
  const { user } = data;
  return (
    console.log(data),
    (
      <Grid className={classes.container}>
        <ProfileCard user={user} classes={classes} />
        <Typography variant="h1" color="primary" className={classes.sharedTitle}>
          Shared Items
        </Typography>
        <Grid container justify="flex-start" spacing={3}>
          {user.items.map(item => {
            return (
              <Grid item key={item.id} className={classes.cardGrid}>
                <ItemCard item={item} className={classes.itemCard} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    )
  );
};

export default withStyles(styles)(Profile);
