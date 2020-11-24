import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import Home from "./Home";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </BRouter>
  );
}

export default App;
