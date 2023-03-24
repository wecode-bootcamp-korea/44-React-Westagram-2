/* eslint-disabled  */

import React, { useState } from 'react';
import Nav from './nav';
import './MainShin.scss';
import '../../../styles/common.scss';
import ArticleBody from './Article/ArticleBody';
import MainRight from './MainRight/MainRight';

const Main = () => {
  const [inputComment, setInputComment] = useState('');
  const [commentArray, setCommentArray] = useState(['글내려라']);

  // const [commentObject, setcommentObject] = useState({
  //   comment: commentArray,
  //   heart: like,
  // });

  return (
    <>
      <Nav />
      <div className="mainBody">
        {/* <!-- 메인 피드 --> */}
        <ArticleBody
          inputComment={inputComment}
          setInputComment={setInputComment}
          commentArray={commentArray}
          setCommentArray={setCommentArray}
          // commentObject={commentObject}
          // setcommentObject={setcommentObject}
        />
        {/* <!-- 메인 오른쪽, 스토리와 연관사람 추천--> */}
        <MainRight />
      </div>
    </>
  );
};

// function Comment(props) {
//   return(
//     <li className="comment">
//       <span className="textBold">someone</span>
//       <span> { props.comment } </span>
//       <img className="smallHeart" src="images/heart.png" />
//       <span className="miniSubGray">댓글삭제</span>
//     </li>
//   )
// }

export default Main;
