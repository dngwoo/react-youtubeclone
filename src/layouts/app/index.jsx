import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './style.module.css';
import Home from '../../pages/home';
import VideoDetail from '../../pages/video-detail';
import Header from '../header';

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video/:id" component={VideoDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
