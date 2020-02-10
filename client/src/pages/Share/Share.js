import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const Share = ({ tags, classes }) => {
  console.log(typeof tags);
  return (
    <Grid className={classes.shareContainer}>
      <ShareItemPreview className={classes.preview} />
      <ShareItemForm tags={tags} />
    </Grid>
  );
};

Share.propTypes = {
  tags: PropTypes.array,
  classes: PropTypes.object
};

export default withStyles(styles)(Share);
