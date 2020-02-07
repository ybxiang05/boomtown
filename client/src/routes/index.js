import React, { Fragment, Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Items from "../pages/Items";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar.js";
import PRoute from "../components/PrivateRoute";
import { ViewerContext } from "../context/ViewerProvider";
import FullScreenLoader from "../components/FullScreenLoader";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <FullScreenLoader />;
      console.log(viewer);
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" name="home" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <PRoute exact path="/items" component={Items} />
            <PRoute exact path="/profile" component={Profile} />
            <PRoute exact path="/profile/:id" component={Profile} />
            <PRoute exact path="/share" component={Share} />
            <Redirect from="*" to="/items" />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
