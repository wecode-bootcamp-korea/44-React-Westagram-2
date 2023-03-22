/* eslint-disabled  */

import React, { useState } from 'react';

import './MainShin.scss';
import '../../../styles/common.scss';

const Main = () => {
  const [inputComment, setInputComment] = useState('');
  // const [replyButton, setReplyButton] = useState(disabled)
  const [commentArray, setCommentArray] = useState(['어디냐?', '글내려라']);

  return (
    <>
      <nav>
        <div className="navLeft">
          <img className="instarIcon" src={'/images/instagram.png'} />
          <hr className="v-Line" />
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
      <div id="main">
        {/* <!-- 프로필 박스 --> */}
        {/* <!-- <div id="searchBox">
              asd
          </div> --> */}
        <div className="articleBody">
          <article className="feeds">
            {/* <!-- 피드 상단 --> */}

            <div className="articleHead">
              <div>
                <div className="profileFeed">
                  <img className="profileFeedImg" src="images/good6.jpg" />
                  <div className="PeopleName">
                    <span className="textBold">Hyomins-013</span>
                    <span className="subGray">효민입니다.</span>
                  </div>
                </div>
              </div>
              <img className="iconStyle" src="images/dots.png" />
            </div>

            {/* <!-- 피드 이미지 --> */}

            <div>
              <img
                className="articleFeedImg"
                src="images/695986339.887071.JPG"
              />
            </div>
            {/* <!-- 댓글, 좋아요 등 아이콘들 --> */}
            <div className="reaction">
              <div className="articleFeedIcon">
                <div>
                  <img className="iconStyle" src="images/heart.png" />
                  <img
                    className="iconStyle"
                    src="images/free-icon-speech-bubble-151789.png"
                  />
                  <img className="iconStyle" src="images/ribbon.png" />
                </div>
                <img className="iconStyle" src="images/upload.png" />
              </div>
              <div>
                <div className="articleLikeInfo">
                  <img
                    className="profilePic"
                    src="images/KakaoTalk_Photo_2023-03-13-20-33-24.jpeg"
                  />
                  <span className="textBold">minjun</span>
                  <span>님 </span>
                  <span className="textBold"> 외 10명</span>
                  <span>이 좋아합니다.</span>
                </div>
                <div className="commentAndFeedTime">
                  <ul className="commentList">
                    {commentArray.map(function (a, i) {
                      return (
                        <li className="comment" key={i}>
                          <span className="textBold">someone</span>
                          <span> {commentArray[i]} </span>
                          <img className="smallHeart" src="images/heart.png" />
                          <span
                            className="miniSubGray"
                            onClick={() => {
                              let copyComment = [...commentArray];
                              copyComment.splice(i, 1);
                              setCommentArray(copyComment);
                            }}
                          >
                            댓글삭제
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <span className="feedTimeCount">42분전</span>
                </div>
              </div>
            </div>
            <div className="commentDiv">
              <input
                id="commentInput"
                onChange={e => {
                  setInputComment(e.target.value);
                }}
                value={inputComment}
                type="text"
                name="commentInput"
                placeholder="댓글달기..."
              />
              <button
                id="commentReply"
                type="submit"
                onClick={() => {
                  let copyComment = [...commentArray];
                  copyComment.unshift(inputComment);
                  setCommentArray(copyComment);
                  setInputComment('');
                }}
              >
                게시
              </button>
            </div>
          </article>
        </div>

        {/* <!-- 메인 오른쪽, 스토리와 연관사람 추천--> */}

        <div className="mainRight">
          <div className="profileCard">
            <img className="myProfile" src="images/good6.jpg" />
            <div className="PeopleName">
              <span className="textBold">Hyomins-013</span>
              <span className="subGray">효민입니다.</span>
            </div>
          </div>

          <div className="storyDiv">
            <div className="allView">
              <span className="subGray">스토리</span>
              <span className="find-more">모두보기</span>
            </div>
            <ul>
              <li>
                <div className="miniProfileCard">
                  <div className="storyRedCircle">
                    <img className="myProfile" src="images/good6.jpg" />
                  </div>
                  <div className="PeopleName">
                    <span className="miniTextBold">Hyomins-013</span>
                    <span className="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="miniProfileCard">
                  <div className="storyRedCircle">
                    <img className="myProfile" src="images/good6.jpg" />
                  </div>
                  <div className="PeopleName">
                    <span className="miniTextBold">Hyomins-013</span>
                    <span className="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="miniProfileCard">
                  <div className="storyRedCircle">
                    <img className="myProfile" src="images/good6.jpg" />
                  </div>
                  <div className="PeopleName">
                    <span className="miniTextBold">Hyomins-013</span>
                    <span className="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="miniProfileCard">
                  <div className="storyRedCircle">
                    <img className="myProfile" src="images/good6.jpg" />
                  </div>
                  <div className="PeopleName">
                    <span className="miniTextBold">Hyomins-013</span>
                    <span className="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="recommendDiv">
            <div className="allView">
              <span className="subGray">회원님을 위한 추천</span>
              <span className="find-more">모두보기</span>
            </div>
            <div className="miniProfileCard">
              <img className="myProfile" src="images/good6.jpg" />
              <div className="PeopleName">
                <span className="miniTextBold">Hyomins-013</span>
                <span className="miniSubGray">효민입니다.</span>
              </div>
              <button type="submit">팔로우</button>
            </div>
            <div className="miniProfileCard">
              <img className="myProfile" src="images/good6.jpg" />
              <div className="PeopleName">
                <span className="miniTextBold">Hyomins-013</span>
                <span className="miniSubGray">효민입니다.</span>
              </div>
              <button type="submit">팔로우</button>
            </div>
          </div>

          <div className="instaInfo">
            <p>Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ </p>
            <p>채용정보 ∙ 개인정보처리방침 ∙ 약관 ∙ </p>
            <p>디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어</p>
            <br />
            <br />
            <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
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
