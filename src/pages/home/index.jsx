import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Home = ({ videos }) => {
  useEffect(() => {
    console.log(videos);
  });
  return (
    <div className={style.home}>
      <ul>
        {videos.length > 0 && videos.map((val) => (
          <li key={val.id}>
            <Link to={`/video/${val.id}`}>
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

Home.defaultProps = {
  videos: [],
};

Home.propTypes = {
  videos: PropTypes.array,
};

export default Home;
