import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import ItemCard from "../../components/ItemCard";
import ProfileCard from "../../components/ProfileCard";

const Profile = ({ data, classes }) => {
  const { user } = data;
  return (
    <Grid className={classes.container}>
      <ProfileCard user={user} classes={classes} />
      <Typography variant="h1" color="primary" className={classes.sharedTitle}>
        Shared Items
      </Typography>
      <Grid className={classes.cardGrid} item xs={12}>
        <Grid container justify="center" spacing={2}>
          {user.items.map(item => {
            return (
              <Grid item key={item.id} className={classes.singleCard}>
                <ItemCard item={item} className={classes.itemCard} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
