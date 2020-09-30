import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Number from "../Randomnumber/randomnumber";
import Wheel from "../Randomwheel/Wheelrandom";
import Header from "../MenuTop/Header";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route path="/randomnumber" children={<Number />} />
      <Route path="/wheelrandom" children={<Wheel />} />
    </Switch>
  </div>
);

export default Main;
