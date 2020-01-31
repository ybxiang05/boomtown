import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Items from "../pages/Items";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar.js";

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here - this will be NavLink? */}
    <NavBar />
    <Switch>
      {/**
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
      <Route exact path="/items" component={Items} />
      <Route exact path="/home" component={Home} />

      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/share" component={Share} />
      <Redirect from="*" to="/items" />
    </Switch>
  </Fragment>
);
