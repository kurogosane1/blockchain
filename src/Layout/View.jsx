import React from "react";
import { Route, Switch } from "react-router-dom";
import History from "../Pages/History";
import HelpCenter from "../Pages/HelpCenter";
import Main from "../Pages/Main";
import Settings from "../Pages/Settings";
import Invest from "../Pages/Invest";
import Market from "../Pages/Market";

export default function View() {
  //This where the components are being viewed at. So inorder for the components to show , then they must be entered here
  return (
    <Switch>
      <Route exact path="/">
        <Main style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/History">
        <History style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/Help">
        <HelpCenter style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/Settings">
        <Settings style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/Invest">
        <Invest style={{ minheight: "100vh" }} />
      </Route>
      <Route path="/Market">
        <Market style={{ minheight: "100vh" }} />
      </Route>
    </Switch>
  );
}
