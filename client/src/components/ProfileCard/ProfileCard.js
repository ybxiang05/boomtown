import React from "react";
import { Container, Card, CardContent, Typography, Box } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const ProfileCard = ({ user, classes }) => {
  return (
    <Container className={classes.profileCard}>
      <Card>
        <CardContent>
          <Box className={classes.userInfo}>
            <Gravatar email={user.email} className={classes.gravatar} />
            <Typography variant="h3" color="textSecondary" className={classes.userName}>
              {user.fullname}
            </Typography>
          </Box>
          {user.items.length === 1 ? (
            <h3 className={classes.status}>
              <span className={classes.itemsCount}>{user.items.length}</span> item shared{" "}
              <span className={classes.itemsCount}>{user.borrowed.length}</span> borrowed{" "}
            </h3>
          ) : (
            <h3 className={classes.status}>
              <span className={classes.itemsCount}>{user.items.length}</span> items shared{" "}
              <span className={classes.itemsCount}>{user.borrowed.length}</span> borrowed{" "}
            </h3>
          )}
          {user.bio ? (
            <Typography>"{user.bio}"</Typography>
          ) : (
            <Typography>"No bio provided"</Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    borrowed: PropTypes.array
  })
};

export default withStyles(styles)(ProfileCard);
