import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import style from './style.module.css';

const Header = ({ onSearchClick }) => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const onChangeInput = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);

  const handleSearchClick = useCallback(async (e) => {
    e.preventDefault();
    const videos = await onSearchClick(value.trim());
    history.push('/search', videos);
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

Header.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};

export default Header;
