import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
import boomtownLogo from "../../images/boomtown.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <img src={boomtownLogo} className={classes.navLogo} />
          {/* <Typography variant="h6" className={classes.title}> */}
          <div>
            <NavLink to="/share" className={classes.link}>
              <AddCircleIcon className={classes.circIcon} />{" "}
              <span className={classes.shareButton}>share something</span>
            </NavLink>
            {/* </Typography> */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <div>
                <MoreVertIcon onClick={handleClick} />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <NavLink to="/profile" className={classes.link}>
                    <MenuItem onClick={handleClose}>
                      <FingerprintIcon />
                      Your Profile
                    </MenuItem>
                  </NavLink>
                  <NavLink to="/home" className={classes.link}>
                    <MenuItem onClick={handleClose}>
                      <PowerSettingsNewIcon />
                      Sign Out
                    </MenuItem>
                  </NavLink>
                </Menu>
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//
// import React from "react";
// import { Button, Menu, MenuItem } from "@material-ui/core";

// const NavBar = () => (
//   <nav>
//     <NavLink to="/items"></NavLink>
//     <NavLink to="/share">Share Something</NavLink>
//     <Button />
//   </nav>
// );

// export default withRouter(NavBar);