import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/index';
import Article from './components/Article';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:slug" component={Article} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
