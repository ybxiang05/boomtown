import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    card: {
      maxWidth: "400px",
      height: "500px"
    },
    gravatar: {
      borderRadius: "30px",
      marginRight: "15px"
    },
    borrowButton: {
      border: "1px solid black",
      alignSelf: ""
    },
    userInfo: {
      display: "flex",
      marginBottom: "2rem"
    }
  });

export default styles;
