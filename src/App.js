import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Article from "./components/DetailArticle/index";


export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:slug" component={Article} />
    </Switch>
  )
}
