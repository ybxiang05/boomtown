import React from "react";
import { Card } from "@material-ui/core";
// import ItemCard from "../../ItemCard";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    width: "50%",
    padding: "3rem"
  }
}));

const ShareItemPreview = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <h1>Poop</h1>
      <p>testing testing testting testing testing </p>
    </Card>
  );
};

export default ShareItemPreview;
