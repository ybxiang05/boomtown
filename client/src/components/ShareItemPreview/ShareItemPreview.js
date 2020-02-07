import React from "react";
import ItemCard from "../ItemCard";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => <ItemCard item={state} className={classes.cardPreview} />}
    </ItemPreviewContext.Consumer>
  );
};

export default withStyles(styles)(ShareItemPreview);
