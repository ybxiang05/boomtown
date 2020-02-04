import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    card: {
      minWidth: "390px"
    },
    gravatar: {
      borderRadius: "30px",
      marginRight: "15px"
    },
    borrowButton: {
      border: "1px solid black"
    },
    userInfo: {
      display: "flex",
      marginBottom: "2rem"
    }
  });

export default styles;
