import "./style.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/search" />
        <Route path="/:id" />
      </Switch>
    </Router>
  );
}

export default App;
