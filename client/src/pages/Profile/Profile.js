import React, { useReducer } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styles from "./styles";
import ItemCard from "../../components/ItemCard";
import ProfileCard from "../../components/ProfileCard";
import { ViewerContext } from "../../context/ViewerProvider";
import FullScreenLoader from "../../components/FullScreenLoader";

const Profile = ({ data, classes }) => {
  const { user } = data;
  return (
    console.log(data),
    (
      // (
      // <ViewerContext.Consumer>
      // {({ loading, viewer }) => {
      // if (loading) return <FullScreenLoader />;
      // {
      // console.log(data);
      // }
      // return (
      <Grid className={classes.container}>
        <ProfileCard user={user} classes={classes} />
        //map through viewer items here
        {user.items.map(item => {
          return (
            <Grid item xs={10} key={item.id}>
              <ItemCard item={item} />
            </Grid>
          );
        })}
        <ItemCard data={data} />
      </Grid>
      // );
      // }}
      // </ViewerContext.Consumer>
      // )
    )
  );
};

export default withStyles(styles)(Profile);
