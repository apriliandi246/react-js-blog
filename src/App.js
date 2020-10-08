import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Article from "./components/DetailArticle/index";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:slug" component={Article} />
      </Switch>
    );
  }
}

export default App;
