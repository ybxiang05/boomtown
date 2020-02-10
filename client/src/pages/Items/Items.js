import React from "react";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";
import { Box, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const Items = ({ items, classes }) => {
  return (
    <Box className={classes.itemsContainer}>
      <ItemGrid items={items} />
    </Box>
  );
};
Items.propTypes = {
  items: PropTypes.array,
  classes: PropTypes.object
};

export default withStyles(styles)(Items);
