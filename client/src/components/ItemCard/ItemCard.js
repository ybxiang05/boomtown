import ItemGrid from "../ItemGrid";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import Gravatar from "react-gravatar";
import { ViewerContext } from "../../context/ViewerProvider";

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

const ItemCard = ({ item, classes, location }) => {
  console.log("yes?", location);
  // const { tags } = item;
  return (
    <ViewerContext.Consumer>
      {({ viewer, loading }) => (
        <Card className={classes.card}>
          <CardActionArea>
            <Link to={item && item.itemowner.id && `/profile/${item && item.itemowner.id}`}>
              <CardMedia
                component="img"
                alt={item && item.title}
                height="225"
                image={item.imageurl ? item.imageurl : "http://place-puppy.com/200x200"}
              />
            </Link>
            <CardContent>
              <Box className={classes.userInfo}>
                <Gravatar
                  email={(item && item.itemowner && item.itemowner.email) || viewer.email}
                  className={classes.gravatar}
                />
                <div>
                  <Typography variant="body1">
                    {(item && item.itemowner && item.itemowner.fullname) || viewer.fullname}
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
      )}
    </ViewerContext.Consumer>
  );
};

export default withRouter(withStyles(styles)(ItemCard));
