import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles";
import ItemCard from "../../components/ItemCard";
import ProfileCard from "../../components/ProfileCard";
import { ViewerContext } from "../../context/ViewerProvider";
import FullScreenLoader from "../../components/FullScreenLoader";

const Profile = ({ data, classes }) => {
  return (
    console.log(data),
    (
      <ViewerContext.Consumer>
        {({ loading, viewer }) => {
          if (loading) return <FullScreenLoader />;
          {
            console.log(data);
          }
          return (
            <Grid className={classes.container}>
              <ItemCard />
              <ProfileCard data={data} classes={classes} />
            </Grid>
          );
        }}
      </ViewerContext.Consumer>
    )
  );
};

export default withStyles(styles)(Profile);
