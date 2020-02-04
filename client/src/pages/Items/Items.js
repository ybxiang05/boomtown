import React from "react";
import styles from "./styles";
import Container from "@material-ui/core/Container";
import ItemGrid from "../../components/ItemGrid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  itemsContainer: {
    backgroundColor: "black"
  }
});
const Items = props => {
  const classes = useStyles();
  console.log(props);

  return (
    <Container maxWidth="xl" className={classes.itemsContainer}>
      <ItemGrid items={props.items} />
    </Container>
  );
};

export default Items;
