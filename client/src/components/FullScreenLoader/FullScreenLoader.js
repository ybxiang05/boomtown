import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography, Grid, Fade, Container } from "@material-ui/core/";
import styles from "./styles";
import propTypes from "prop-types";

function FullScreenLoader({ classes }) {
  return (
    <Fade>
      <Container className={classes.container}>
        <Grid className={classes.fullLoader}>
          <CircularProgress className={classes.spinner} />
          <Typography className={classes.text} color="primary">
            For it is in receiving that we give.
          </Typography>
        </Grid>
      </Container>
    </Fade>
  );
}

FullScreenLoader.propTypes = {
  classes: propTypes.object
};
export default withStyles(styles)(FullScreenLoader);
