import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import style from './style.module.css';

const Header = () => {
  const [value, setValue] = useState('');
  const onChangeInput = useCallback((e) => {
    setValue(e.target.currentValue);
  }, []);

  return (
    <header className={style.header}>
      <div className={style['header__left']}>
        <FontAwesomeIcon icon={faYoutube} className="header__logo" />
        <span>Youtube</span>
      </div>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChangeInput}
        />
        <button type="button">
          <FontAwesomeIcon icon={faSearchengin} />
        </button>
      </form>
    </header>
  );
};

export default Header;
