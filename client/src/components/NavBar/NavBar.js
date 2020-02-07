import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
import boomtownLogo from "../../images/boomtown.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { Mutation } from "react-apollo";

const NavBar = ({ toggleLoggedIn, history, location, match, classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // console.log(location, history);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Mutation mutation={LOGOUT_MUTATION} refetchQueries={[{ query: VIEWER_QUERY }]}>
      {logout => (
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar className={classes.toolBar}>
              <NavLink to="/items">
                <img src={boomtownLogo} className={classes.navLogo} />
              </NavLink>

              <div>
                {location.pathname !== "/share" ? (
                  <NavLink to="/share" className={classes.link}>
                    <AddCircleIcon className={classes.circIcon} />{" "}
                    <span className={classes.shareButton}>share something</span>
                  </NavLink>
                ) : null}
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
                        <MenuItem
                          onClick={() => {
                            handleClose();

                            logout();

                            // history.push("/home");
                          }}
                        >
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
      )}
    </Mutation>
  );
};
export default withRouter(withStyles(styles)(NavBar));
