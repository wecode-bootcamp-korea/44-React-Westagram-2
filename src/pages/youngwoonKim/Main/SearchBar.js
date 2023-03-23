import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="검색" />
      <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
    </div>
  );
}

export default SearchBar;
