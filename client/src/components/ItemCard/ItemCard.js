import ItemGrid from "../ItemGrid";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import moment from "moment";
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
    borderRadius: "30px"
  },
  borrowButton: {
    border: "1px solid #f9a825"
  }
});

const ItemCard = props => {
  const classes = useStyles();

  console.log("yes?", props);
  const { tags } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image="http://place-puppy.com/200x200"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div></div>
          <Gravatar email={props.owner.email} className={classes.gravatar} />
          <Typography>{props.owner.fullname}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(props.created).fromNow()}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          {props.tags.map(tag => {
            return <span>{tag.title} </span>;
          })}
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.borrowButton}>
          <Button size="small" color="primary">
            Borrow
          </Button>
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
