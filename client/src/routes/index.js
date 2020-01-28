import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Items from "../pages/Items/Items";
import Profile from "../pages/Profile/Profile";
import Share from "../pages/Share/Share";

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <Switch>
      {/**
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
      <Route exact path="/items">
        <Items />
      </Route>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/share" component={Share} />
      <Redirect from="*" to="/items" />
    </Switch>
  </Fragment>
);
