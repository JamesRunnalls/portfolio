import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from ".//home";
import NotFound from "./notfound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
