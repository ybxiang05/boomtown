import { createStyles } from "@material-ui/core";

const styles = createStyles({
  input: {
    display: "none"
  },
  formContainer: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50%",
    padding: "3rem"
  },
  tagsContainer: {
    display: "flex",
    flexFlow: "row wrap"
  }
});

export default styles;
