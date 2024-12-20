import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default SearchBox;
