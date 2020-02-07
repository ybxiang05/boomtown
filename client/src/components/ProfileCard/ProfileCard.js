import React from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withStyles } from "@material-ui/core/styles";
import ItemGrid from "../ItemGrid";
import ItemCard from "../ItemCard";
import styles from "./styles";

const ProfileCard = ({ user, classes }) => {
  // const { user } = data;
  return (
    // console.log(user),

    <Container className={classes.profileCard}>
      <Card>
        <CardContent>
          <Gravatar email={user.email} />
          <Typography variant="h1">{user.fullname}</Typography>
          {user.items.length === 1 ? (
            <Typography>
              {user.items.length} item shared {user.borrowed.length} borrowed{" "}
            </Typography>
          ) : (
            <Typography>
              {user.items.length} items shared {user.borrowed.length} borrowed{" "}
            </Typography>
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

export default withStyles(styles)(ProfileCard);
