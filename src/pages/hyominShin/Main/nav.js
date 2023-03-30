import React, { useState } from 'react';
import SearchModal from './SearchModal/SearchModal';
import NavProfile from './NavProfile/NavProfile';
import './nav.scss';
import '../../../styles/common.scss';

const Nav = () => {
  // const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isActive, setIsActive] = useState(false);

  const modalSwitching = () => {
    setIsActive(prev => !prev);
  };

  // const showModal = isArctive => {
  //   {
  //     return isActive ? <NavProfile /> : null;
  //   }
  // };

  return (
    <nav className="header">
      <div className="navLeft">
        <img className="instarIcon" src="/images/instagram.png" alt="인스타" />
        <hr className="vLine" />
        <span className="navWestagram">westagram</span>
      </div>
      <div className="searchForm">
        <input
          className="searchInput"
          type="search"
          placeholder="검색"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        {searchText !== '' ? <SearchModal searchText={searchText} /> : null}
      </div>
      <div className="navIcon">
        <img className="iconStyle" src="images/explore.png" alt="?" />
        <img className="iconStyle" src="images/heart.png" alt="?" />
        <img
          className="iconStyle"
          src="images/profile.png"
          alt="?"
          onClick={modalSwitching}
        />
        {isActive ? (
          <>
            <div className="modalBack" onClick={modalSwitching} />
            <NavProfile />
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
