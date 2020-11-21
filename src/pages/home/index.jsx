import React from 'react';
import style from './style.module.css';

const Home = () => {
  const dummyData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];
  return (
    <div className={style.home}>
      <ul>
        {dummyData.map((val) => (
          <li key={val}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
