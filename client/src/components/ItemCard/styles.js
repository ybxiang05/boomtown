import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    card: {
      maxWidth: "400px"
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
      marginBottom: "1rem"
    },
    created: {
      margin: 0
    },
    title: {
      fontSize: "20px",
      fontWeight: "5"
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap"
    },
    tags: {
      fontSize: "12px",
      paddingRight: "3px"
    }
  });

export default styles;
