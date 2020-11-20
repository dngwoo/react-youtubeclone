import './style.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import VideoDetail from '../../pages/video-detail';
import Header from '../header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video/:id" component={VideoDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
