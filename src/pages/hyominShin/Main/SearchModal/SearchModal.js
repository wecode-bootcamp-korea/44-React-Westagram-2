import React from 'react';
import './SearchModal.scss';
import '../../../../styles/common.scss';

const SearchModal = props => {
  const newArray = props.otherPeople.filter(function (a) {
    return a.name.includes(props.searchText);
  });

  return (
    <div className="searchModal">
      <ul>
        {/** 이거 a 파라미터 빼먹으면 쌩난리 치는데 왜그런거임 */}
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

export default SearchModal;
