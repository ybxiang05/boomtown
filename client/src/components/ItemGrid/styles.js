import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    cardGrid: {
      padding: "100px 3%",
      margin: "0 auto"
    },

    singleCard: {
      width: "400px",
      justifySelf: "flex-start"
    }
  });

export default styles;
