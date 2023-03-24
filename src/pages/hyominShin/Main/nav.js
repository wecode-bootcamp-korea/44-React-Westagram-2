import React from 'react';
import './nav.scss';
import '../../../styles/common.scss';

const Nav = () => {
  return (
    <nav className="header">
      <div className="navLeft">
        <img className="instarIcon" src="/images/instagram.png" />
        <hr className="vLine" />
        <span className="navWestagram">westagram</span>
      </div>
      {/* <!--<input id="commentInput" type="search" className="input-search" placeholder="검색">--> */}
      <div className="searchForm">
        <input className="searchInput" type="search" placeholder="검색" />
      </div>
      <div className="navIcon">
        <img className="iconStyle" src="images/explore.png" />
        <img className="iconStyle" src="images/heart.png" />
        <img className="iconStyle" src="images/profile.png" />
      </div>
    </nav>
  );
};

export default Nav;
