import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Grid from "@material-ui/core/Grid";
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
// import ShareItemPreview from "../../components/ShareItemPreview";
const useStyles = makeStyles(theme => ({
  shareContainer: {
    display: "flex",
    margin: "100px 3rem"
  }
}));

const Share = ({ tags }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.shareContainer}>
      <ShareItemPreview></ShareItemPreview>
      <ShareItemForm tags={tags} />
    </Grid>
  );
};

export default withStyles(styles)(Share);
