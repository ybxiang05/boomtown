import React from "react";
import { withStyles, AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import styles from "./styles";
import { Link, withRouter } from "react-router-dom";
import boomtownLogo from "../../images/boomtown.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

const NavBar = ({ location, classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
              <Link to="/items">
                <img src={boomtownLogo} alt="Boomtown Logo" className={classes.navLogo} />
              </Link>

              <div>
                {location.pathname !== "/share" ? (
                  <Link to="/share" className={classes.link}>
                    <AddCircleIcon className={classes.circIcon} />{" "}
                    <span className={classes.shareButton}>share something</span>
                  </Link>
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
                      <Link to="/profile" className={classes.link}>
                        <MenuItem onClick={handleClose}>
                          <FingerprintIcon />
                          Your Profile
                        </MenuItem>
                      </Link>
                      <Link to="/home" className={classes.link}>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            logout();
                          }}
                        >
                          <PowerSettingsNewIcon />
                          Sign Out
                        </MenuItem>
                      </Link>
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

NavBar.propTypes = {
  location: PropTypes.object,
  classes: PropTypes.object
};
export default withRouter(withStyles(styles)(NavBar));
