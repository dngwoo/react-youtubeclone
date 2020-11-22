import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
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
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    };

    try {
      const { data } = await axios(config);
      setVideos(data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onSearchClick = async (query) => {
    const config = {
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    };

    let searchVideos;
    try {
      const { data } = await axios(config);
      searchVideos = data;
    } catch (error) {
      console.error(error);
    }

    return searchVideos;
  };

  return (
    <div className={style.wrapper}>
      <Router>
        <Header onSearchClick={onSearchClick} />
        <main className={style['main-wrapper']}>
          <Switch>
            <Route exact path="/">
              <Home videos={videos} />
            </Route>
            <Route path="/video/:id">
              <VideoDetail videos={videos} />
            </Route>
          </Switch>
        </main>
      </Router>

    </div>
  );
}

export default App;
