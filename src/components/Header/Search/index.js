import React, { useState } from 'react';
import searchIcon from './searchIcon.svg';
import styles from './styles.module.scss';

const Search = ({ onSearchByName }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    onSearchByName(value);
    setValue('');
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search your cocktail"
          value={value}
          onChange={handleChange}
        />
        <button className={styles.searchIcon} type="submit">
          <img src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
