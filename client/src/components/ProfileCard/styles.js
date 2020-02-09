import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    profileCard: {
      paddingTop: "100px"
    },
    status: {
      fontSize: "20px",
      fontWeight: "3"
    },
    itemsCount: {
      fontWeight: "bold"
    },
    gravatar: {
      borderRadius: "30px",
      marginRight: "15px"
    },
    userInfo: {
      display: "flex",
      marginBottom: "15px"
    },
    userName: {
      margin: 0
    }
  });

export default styles;
