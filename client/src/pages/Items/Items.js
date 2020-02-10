import React from "react";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

const Items = ({ items, classes }) => {
  return (
    <Box className={classes.itemsContainer}>
      <ItemGrid items={items} />
    </Box>
  );
};
Items.propTypes = {
  items: PropTypes.object,
  classes: PropTypes.object
};

export default withStyles(styles)(Items);
