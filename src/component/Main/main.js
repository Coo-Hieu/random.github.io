import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Number from "../Randomnumber/randomnumber";
import Wheel from "../Randomwheel/Wheelrandom";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/randomnumber" component={Number} />
      <Route path="/wheelrandom" component={Wheel} />
    </Switch>
  </div>
);

export default Main;
