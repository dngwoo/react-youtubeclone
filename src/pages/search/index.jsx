import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from '../home/style.module.css';
import useQuery from '../../hooks/useQuery';

const Search = () => {
  const query = useQuery();
  const [videos, setVideos] = useState([]);
  useEffect(async () => {
    const config = {
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    };

    try {
      const { data: { items } } = await axios(config);
      setVideos(items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={style.home}>
      <ul>
        {videos.length > 0 && videos.map((val) => (
          <li key={val.etag}>
            <Link to={`/video/${val.id.videoId}`}>
              <div className={style.thumbnail}>
                <img src={val.snippet.thumbnails.medium.url} alt="thumbnail" />
              </div>
              <div className={style['video-info']}>
                <div className={style.avatar}>avatar</div>
                <div>
                  <p>
                    {val.snippet.title}
                  </p>
                  <span className={style.name}>
                    {val.snippet.channelTitle}
                  </span>
                  <span className={style.etc} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
