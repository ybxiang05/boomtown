import { createStyles } from "@material-ui/core";

const styles = createStyles({
  input: {
    display: "none"
  },
  title: {
    fontWeight: "bold"
  },
  formContainer: {
    display: "flex",
    flexFlow: "column wrap",
    width: "45%",
    padding: "3rem"
  },
  tagsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "2rem auto"
  },
  icons: {
    transform: "translateY(7px)",
    margin: "auto 5px auto 2px"
  },
  inputField: {
    margin: "1rem 0"
  }
});

export default styles;
