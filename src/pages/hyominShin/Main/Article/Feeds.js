import React, { useState } from 'react';
import ArticleHead from './ArticleHead';
import FeedIcon from './FeedIcon';
import LikeInfo from './LikeInfo';
import './Feeds.scss';
import '../../../../styles/common.scss';

const Feeds = ({ user }) => {
  const [like, setLike] = useState(['images/heart.png']);
  // const [isClicked, setIsClicked] = useState(false);
  const [inputComment, setInputComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  // const heartSwitch = i => {
  //   // setIsClicked(prev => !prev);
  //   let copy = [...like];
  //   copy.map((element, j) => {
  //     if (i === j) {
  //       copy[j] =
  //         element === 'images/heart.png'
  //           ? (copy[i] = 'images/fillheart.png')
  //           : (copy[i] = 'images/heart.png');
  //     }
  //   });
  //   setLike(copy);
  // };

  // console.log(user);

  return (
    <article className="feeds" key={user.id}>
      {/* <!-- 피드 상단 --> */}

      <ArticleHead
        nickName={user.nickName}
        subText={user.subText}
        profileImg={user.profileImg}
      />

      {/* <!-- 피드 이미지 --> */}

      <img className="articleFeedImg" src={user.feedImg} alt="??" />

      {/* <!-- 댓글, 좋아요 등 아이콘들 --> */}
      <div className="reaction">
        <FeedIcon />
        <LikeInfo nickName={user.nickName} profileImg={user.profileImg} />
        <div className="commentAndFeedTime">
          <ul className="commentList">
            {commentArray?.map(function (a, i) {
              return (
                <li className="comment" key={i}>
                  <span className="textBold">someone</span>

                  <span> {commentArray[i]} </span>

                  <img
                    className="smallHeart"
                    src={like[i]}
                    // src={`images/${isClicked ? 'fillheart' : 'heart'}.png`}
                    alt="heart"
                    onClick={() => {
                      let copy = [...like];
                      copy.map((element, j) => {
                        if (i === j) {
                          copy[j] =
                            element === 'images/heart.png'
                              ? (copy[i] = 'images/fillheart.png')
                              : (copy[i] = 'images/heart.png');
                        }
                      });
                      setLike(copy);
                    }}
                  />

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
      <div className="commentDiv">
        <input
          className="commentInput"
          onChange={e => {
            setInputComment(e.target.value);
          }}
          value={inputComment}
          type="text"
          name="commentInput"
          placeholder="댓글달기..."
        />
        <button
          className="commentReply"
          type="submit"
          onClick={() => {
            let copyComment = [...commentArray];
            let copyLike = [...like];
            copyComment.unshift(inputComment);
            setCommentArray(copyComment);
            copyLike.unshift('images/heart.png');
            setLike(copyLike);
            setInputComment('');
          }}
        >
          게시
        </button>
      </div>
    </article>
  );
};

export default Feeds;
