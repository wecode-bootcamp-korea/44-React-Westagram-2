import React, { useState } from 'react';
import SearchModal from './SearchModal/SearchModal';
import './nav.scss';
import '../../../styles/common.scss';

const Nav = () => {
  // const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  // const [filtedPeople, setFiltedPeople] = useState([]);
  const [otherPeople, setOtherPeople] = useState([
    {
      id: 1,
      name: 'Jinkyung',
      subText: '당황스럽네요',
      pfImg: '/images/당황스;.jpeg',
    },
    {
      id: 2,
      name: 'React',
      subText: '공부하세요.',
      pfImg: '/images/React.png',
    },
    {
      id: 3,
      name: 'Sanghun',
      subText: '진짜 싫어요!',
      pfImg: '/images/fuckyouCODE.jpeg',
    },
    {
      id: 4,
      name: 'Sanghun2',
      subText: '아이디어 내는 중',
      pfImg: '/images/Sanghun.jpeg',
    },
    {
      id: 5,
      name: 'imcat',
      subText: '야옹',
      pfImg: '/images/고양이.jpeg',
    },
  ]);

  // function newArray(searchText) {
  //   otherPeople.filter(function (a) {
  //     return a.name.includes(searchText);
  //   });
  // }

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
            // setFiltedPeople(newArray(searchText));
          }}
        />
        {searchText !== '' ? (
          <SearchModal
            searchText={searchText}
            otherPeople={otherPeople}
            // filtedPeople={filtedPeople}
            setOtherPeople={setOtherPeople}
          />
        ) : null}
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
