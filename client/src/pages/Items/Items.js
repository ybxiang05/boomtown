import React from "react";
import styles from "./styles";
import Container from "@material-ui/core/Container";
import ItemGrid from "../../components/ItemGrid";
import { withStyles } from "@material-ui/core/styles";

const Items = ({ items, classes }) => {
  // console.log(props);

  return (
    <Container maxWidth="xl" className={classes.itemsContainer}>
      <ItemGrid items={{ items, classes }} />
    </Container>
  );
};

export default withStyles(styles)(Items);
