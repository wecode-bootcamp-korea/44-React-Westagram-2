import React, { useState, useRef } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.scss';
import RelatedSearch from './RelatedSearch';
import profile1 from '../../../assets/youngwoonKim/main-images/profile1.jpg';
import profile2 from '../../../assets/youngwoonKim/main-images/profile2.jpg';
import profile3 from '../../../assets/youngwoonKim/main-images/profile3.jpg';
import profile4 from '../../../assets/youngwoonKim/main-images/profile4.jpg';
import profile5 from '../../../assets/youngwoonKim/main-images/profile5.jpg';
import profile6 from '../../../assets/youngwoonKim/main-images/profile6.jpg';
import profile7 from '../../../assets/youngwoonKim/main-images/profile7.jpg';
import profile8 from '../../../assets/youngwoonKim/main-images/profile8.jpg';
import profile9 from '../../../assets/youngwoonKim/main-images/profile9.jpg';
import wecodeImg from '../../../assets/youngwoonKim/main-images/wecode.png';

function SearchBar() {
  const [magnifyingGlass, setMagnifyingGlass] = useState('search');
  const [userInput, setUserInput] = useState('');
  const SearchBox = useRef();

  function MagnifyingGlassRemove() {
    setMagnifyingGlass('search hidden');
  }

  function MagnifyingGlassShow() {
    setMagnifyingGlass('search');
    setUserInput('');
    SearchBox.current.classList.remove('show');
  }

  function userInputChange(e) {
    setUserInput(e.target.value);
    SearchBox.current.classList.add('show');
  }

  const filterList = userInput.length
    ? userList.filter(user => user.id.includes(userInput))
    : [];

  return (
    <div className="SearchBar">
      <div ref={SearchBox} className="searchBoard">
        {filterList.map(user => {
          return <RelatedSearch key={user.id} user={user} />;
        })}
        {userInput && <p className="seeMore">더보기 〉</p>}
      </div>
      <input
        value={userInput}
        type="text"
        placeholder="검색"
        onChange={userInputChange}
        onFocus={MagnifyingGlassRemove}
        onBlur={MagnifyingGlassShow}
      />
      <FontAwesomeIcon className={magnifyingGlass} icon={faMagnifyingGlass} />
    </div>
  );
}

const userList = [
  { id: 'wecode_bootcamp', img: { wecodeImg } },
  { id: 'wecode_founder', img: { wecodeImg } },
  { id: 'wecode_korea', img: { wecodeImg } },
  { id: 'wecode_mento', img: { wecodeImg } },
  { id: 'youngwoon_', img: { profile1 } },
  { id: 'sansan_gear', img: { profile2 } },
  { id: 'shuzang', img: { profile3 } },
  { id: 'whale_one', img: { profile4 } },
  { id: 'grailz_official', img: { profile5 } },
  { id: 'kasina_official', img: { profile6 } },
  { id: 'yum_s', img: { profile7 } },
  { id: 'ee_tiquettecvide', img: { profile8 } },
  { id: 'know_wave', img: { profile9 } },
  { id: 'stu_office', img: { profile5 } },
];

export default SearchBar;
