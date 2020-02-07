import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography, Grid, Fade, Container } from "@material-ui/core/";
import styles from "./styles";

function FullScreenLoader({ classes }) {
  return (
    <Container className={classes.container}>
      <Grid className={classes.fullLoader}>
        <CircularProgress className={classes.spinner} />
        <Typography className={classes.text} color="primary">
          For it is in giving that we receive.
        </Typography>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(FullScreenLoader);
