import ItemGrid from "../ItemGrid";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Gravatar from "react-gravatar";

import {
  Card,
  makeStyles,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    minWidth: "390px"
  },
  gravatar: {
    borderRadius: "30px",
    marginRight: "15px"
  },
  borrowButton: {
    border: "1px solid black"
  },
  userInfo: {
    display: "flex",
    marginBottom: "2rem"
  }
});

const ItemCard = props => {
  const classes = useStyles();

  console.log("yes?", props);
  const { tags } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <NavLink to="/profile/:id">
          <CardMedia
            component="img"
            alt={props.title}
            height="225"
            image="http://place-puppy.com/200x200"
            title="Contemplative Reptile"
          />
        </NavLink>
        <CardContent>
          <Box className={classes.userInfo}>
            <Gravatar email={props.owner.email} className={classes.gravatar} />
            <div>
              <Typography variant="body1">{props.owner.fullname}</Typography>
              <p variant="body1" color="textSecondary" component="p">
                {moment(props.created).fromNow()}
              </p>
            </div>
          </Box>

          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          {props.tags.map(tag => {
            return (
              <Typography variant="body1" color="textSecondary" key={tag.id}>
                {tag.title}{" "}
              </Typography>
            );
          })}
          <Typography variant="body1" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.borrowButton}>
          <Button>Borrow</Button>
        </Box>
      </CardActions>
    </Card>
    // <Card>
    //   <h2>{props.title}</h2>
    //   <p>{props.created}</p>
    //   <p>{props.description}</p>
    //   {/* <ul>
    //     {tags.map(tag => {
    //       return <li>{tag}</li>;
    //     })}
    //   </ul> */}
    // </Card>
  );
};

export default withStyles(styles)(ItemCard);
