import React from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withStyles } from "@material-ui/core/styles";
import ItemGrid from "../ItemGrid";
import ItemCard from "../ItemCard";
import styles from "./styles";

const ProfileCard = ({ classes }) => {
  return (
    <Container className={classes.profileCard}>
      <Card>
        <CardContent>
          <Gravatar />
          <Typography>{}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(ProfileCard);
