import React from "react";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const Items = ({ items, classes }) => {
  return (
    <Box className={classes.itemsContainer}>
      <ItemGrid items={items} />
    </Box>
  );
};

export default withStyles(styles)(Items);
