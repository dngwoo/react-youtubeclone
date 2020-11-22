import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';
import style from './style.module.css';

const Header = () => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const onChangeInput = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);

  const handleSearchClick = useCallback(async (e) => {
    e.preventDefault();
    history.push(`/search?q=${value.trim()}`);
  });

  return (
    <header className={style.header}>
      <div className={style['header__left']}>
        <FontAwesomeIcon icon={faYoutube} className="header__logo" />
        <span>Youtube</span>
      </div>
      <form className={style.form} onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearchengin} />
        </button>
      </form>
    </header>
  );
};

export default Header;
