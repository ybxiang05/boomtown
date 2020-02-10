import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    shareContainer: {
      display: "flex",
      padding: "100px 3rem",
      width: "100%",
      justifyContent: "space-around",
      margin: "0 auto"
    },
    preview: {
      width: "500px"
    }
  });

export default styles;
