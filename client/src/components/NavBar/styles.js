import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      // marginRight: theme.spacing(2)
    },
    navLogo: {
      height: "50px"
    },
    title: {
      flexGrow: 1
    },
    link: {
      color: "black",
      alignItems: "center"
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between"
    },
    shareButton: {
      textTransform: "uppercase"
    },
    circIcon: {
      transform: "translateY(7px)"
    }
  });

export default styles;
