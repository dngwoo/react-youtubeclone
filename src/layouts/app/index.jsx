import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.css';
import Home from '../../pages/home';
import VideoDetail from '../../pages/video_detail';
import Header from '../header';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(async () => {
    const config = {
      method: 'get',
      url: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyAV5-4j6l5N4-7WckLRuc837EnD8k9xdgc',
    };

    try {
      const { data } = await axios(config);
      setVideos(data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style['main-wrapper']}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home videos={videos} />
            </Route>
            <Route path="/video/:id">
              <VideoDetail videos={videos} />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
