import React from 'react';
import './SearchModal.scss';
import '../../../../styles/common.scss';

const SearchModal = props => {
  const newArray = OTHER_PEOPLE.filter(function (a) {
    return a.name.includes(props.searchText);
  });

  return (
    <div className="searchModal">
      <ul>
        {/** 이거 a 파라미터 빼먹으면 쌩난리 치는데 왜그런거지 */}
        {newArray.map(function (a, i) {
          return (
            <li className="profileCard" key={i}>
              <img
                className="myProfile"
                src={newArray[i].pfImg}
                alt="대충 프로필"
              />
              <div className="peopleName">
                <span className="textBold">{newArray[i].name}</span>
                <span className="subGray">{newArray[i].subText}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const OTHER_PEOPLE = [
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
];

export default SearchModal;
