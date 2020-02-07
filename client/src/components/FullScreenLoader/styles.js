import { createStyles } from "@material-ui/core/styles";

const styles = theme => ({
  spinner: {
    alignSelf: "center"
  },

  fullLoader: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "auto"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    height: "100%",
    backgroundColor: "black"
  }
});

export default styles;
