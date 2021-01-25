import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../Pages/About";
import Main from "../Pages/Main";

export default function View() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/History">
        <About />
      </Route>
    </Switch>
  );
}
