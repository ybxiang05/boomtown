import { createStyles } from "@material-ui/styles";

const styles = theme =>
  createStyles({
    container: {
      backgroundColor: "black"
    },
    cardGrid: {
      width: "100%",
      padding: "0 3% 3% 3%"
    },
    singleCard: {
      width: "400px"
    },
    sharedTitle: {
      fontSize: "2rem",
      fontWeight: "4",
      padding: "3rem 1rem"
    }
  });

export default styles;
