import { createStyles } from "@material-ui/core";

const styles = createStyles({
  input: {
    display: "none"
  },
  formContainer: {
    display: "flex",
    flexFlow: "column wrap",
    width: "45%",
    padding: "3rem"
  },
  tagsContainer: {
    display: "flex",
    flexFlow: "row wrap"
  },
  icons: {
    transform: "translateY(7px)",
    margin: "auto 5px auto 2px"
  }
});

export default styles;
