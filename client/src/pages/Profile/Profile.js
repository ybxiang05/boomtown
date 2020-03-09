import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";
import ProfileCard from "../../components/ProfileCard";
import PropTypes from "prop-types";
const Profile = ({ data, classes }) => {
  const { user } = data;
  const { items } = user;
  console.log(user);
  return (
    <Grid className={classes.container}>
      <ProfileCard user={user} />
      <Typography variant="h1" color="primary" className={classes.sharedTitle}>
        Shared Items
      </Typography>
      <Grid className={classes.cardGrid} item xs={12}>
        <ItemGrid items={items} />
      </Grid>
    </Grid>
    //use items grid instead of items card
  );
};
Profile.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object
};

export default withStyles(styles)(Profile);
