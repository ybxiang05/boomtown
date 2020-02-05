import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Grid from "@material-ui/core/Grid";

const Share = ({ tags, classes }) => {
  return (
    <Grid className={classes.shareContainer}>
      <ShareItemPreview></ShareItemPreview>
      <ShareItemForm tags={tags} />
    </Grid>
  );
};

export default withStyles(styles)(Share);
