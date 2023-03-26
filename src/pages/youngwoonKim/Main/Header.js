import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

function Header() {
  const [menubox, setMenuBox] = useState('menuBox');
  const [modalbox, setModalBox] = useState('modalBox');

  function menuBoxOpen() {
    setMenuBox('menuBox show');
    setModalBox('modalBox show');
  }

  function menuBoxClose() {
    setMenuBox('menuBox');
    setModalBox('modalBox');
  }

  return (
    <>
      <div className={modalbox} onClick={menuBoxClose} />
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
            onClick={menuBoxOpen}
            className="profile"
            alt="프로필"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
"
          />
        </div>
        <div className={menubox}>
          <div className="iconBox">
            <div className="menu">
              <FontAwesomeIcon className="menuIcon" icon={faUser} />
              <span>프로필</span>
            </div>
            <div className="menu">
              <FontAwesomeIcon
                className="menuIcon faBookmark"
                icon={faBookmark}
              />
              <span>저장됨</span>
            </div>
            <div className="menu">
              <FontAwesomeIcon className="menuIcon" icon={faGear} />
              <span className="faGear">설정</span>
            </div>
          </div>
          <p>로그아웃</p>
        </div>
      </header>
    </>
  );
}

export default Header;
