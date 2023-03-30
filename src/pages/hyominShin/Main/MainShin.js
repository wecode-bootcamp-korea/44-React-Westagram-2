/* eslint-disabled  */

import React, { useState, useEffect } from 'react';
import Nav from './nav';
import './MainShin.scss';
import '../../../styles/common.scss';
import ArticleBody from './Article/ArticleBody';
import MainRight from './MainRight/MainRight';

const Main = () => {
  const [userList, setUserList] = useState([]);
  // const {id, nickName, subText, profileImg, feedImg, comments, likes} = userList;
  // 그 뭐지 객체구조 분해 할당 한거임

  // MockData 불러온거
  useEffect(() => {
    fetch('/data/userData.json')
      .then(response => response.json())
      .then(userData => setUserList(userData));
  }, []);

  return (
    <>
      <Nav />
      <div className="mainBody">
        {/* <!-- 메인 피드 --> */}
        <ArticleBody user={userList} />

        {/* <!-- 메인 오른쪽, 스토리와 연관사람 추천--> */}
        <MainRight />
      </div>
    </>
  );
};

export default Main;
