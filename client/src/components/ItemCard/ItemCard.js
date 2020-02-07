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

const ItemCard = ({ item, classes }) => {
  // console.log("yes?", item);
  // const { tags } = item;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <NavLink to={`/profile/${item && item.itemowner.id}`}>
          <CardMedia
            component="img"
            alt={item && item.title}
            height="225"
            image=" http://place-puppy.com/200x200"
          />
        </NavLink>
        <CardContent>
          <Box className={classes.userInfo}>
            <Gravatar
              email={item && item.itemowner && item.itemowner.email}
              className={classes.gravatar}
            />
            <div>
              <Typography variant="body1">
                {item && item.itemowner && item.itemowner.fullname}
              </Typography>
              <p variant="body1" color="textSecondary" component="p">
                {moment(item && item.created).fromNow()}
              </p>
            </div>
          </Box>

          <Typography gutterBottom variant="h5" component="h2">
            {item && item.title}
          </Typography>

          {item &&
            item.tags &&
            item.tags.map(tag => {
              return (
                <Typography variant="body1" color="textSecondary" key={tag.id}>
                  {tag.title}{" "}
                </Typography>
              );
            })}
          <Typography variant="body1" component="p">
            {item && item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.borrowButton}>
          <Button>Borrow</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
