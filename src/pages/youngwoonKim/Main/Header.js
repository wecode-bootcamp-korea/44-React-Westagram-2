import React from 'react';
import SearchBar from './SearchBar';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="flexStart">
        <FontAwesomeIcon className="instaIcon" icon={faInstagram} />
        <span>Westagram</span>
      </div>
      <SearchBar />
      <div className="flexEnd">
        <img
          alt="나침반"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        />
        <img
          className="heart"
          alt="하트"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
        <img
          alt="프로필"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
"
        />
      </div>
    </header>
  );
}

export default Header;
