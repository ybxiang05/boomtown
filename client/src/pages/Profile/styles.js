import { createStyles } from "@material-ui/styles";

const styles = theme => ({
  container: {
    backgroundColor: "black"
    // height: "100%"
  },
  cardGrid: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "3%"
  },
  sharedTitle: {
    fontSize: "2rem",
    fontWeight: "4",
    paddingTop: "2rem"
  },
  itemCard: {
    width: "33%"
  }
});

export default styles;
