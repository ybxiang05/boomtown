import React from "react";
import styles from "./styles";
import Container from "@material-ui/core/Container";
import ItemGrid from "../../components/ItemGrid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  itemsContainer: {
    marginTop: "100px"
  }
});
const Items = props => {
  const classes = useStyles();
  console.log(props);

  return (
    <Container maxWidth="lg" className={classes.itemsContainer}>
      <ItemGrid items={props.items} />
    </Container>
  );
};

export default Items;
