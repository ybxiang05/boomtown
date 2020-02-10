import React from "react";
import ItemCard from "../ItemCard";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => <ItemCard item={state} className={classes.cardPreview} />}
    </ItemPreviewContext.Consumer>
  );
};

ShareItemPreview.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ShareItemPreview);
