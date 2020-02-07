import { createStyles } from "@material-ui/core";

const styles = theme => ({
  cardGrid: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "100px 3%"
  },
  singleCard: {
    width: "400px",
    flexBasis: "33%"
  }
});

export default styles;
