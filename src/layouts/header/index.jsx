import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import style from './style.module.css';

const Header = () => (
  <header className={style.header}>
    <div className="logo">
      <FontAwesomeIcon icon={faYoutube} />
      <span>Youtube</span>
    </div>
    <form className="form">
      <input type="text" value="Search..." />
    </form>
  </header>
);

export default Header;
