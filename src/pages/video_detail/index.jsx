/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import style from './style.module.css';

const VideoDetail = ({ videos }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  const { id } = useParams();
  const filterVideos = videos.filter((val) => val.id.videoId !== id);
  const video = videos.filter((val) => val.id.videoId === id);

  return (
    <div className={style['video-detail-wrapper']}>
      <div className={style['video-detail']}>
        <YouTube videoId={id} opts={opts} className={style.video} />
        <div className={style['video-info']}>
          <span>{video.snippet.title}</span>
          <span>비디오 설명</span>
        </div>
      </div>
      <ul>
        {filterVideos.length > 0 && filterVideos.map((val) => (
          <li key={val.id.videoId}>
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

export default VideoDetail;
