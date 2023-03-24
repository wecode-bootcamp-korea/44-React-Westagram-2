import React from 'react';
import ArticleHead from './ArticleHead';
import FeedIcon from './FeedIcon';
import LikeInfo from './LikeInfo';
import './ArticleBody.scss';
import '../../../../styles/common.scss';

const ArticleBody = props => {
  return (
    <div className="articleBody">
      <article className="feeds">
        {/* <!-- 피드 상단 --> */}

        <ArticleHead />

        {/* <!-- 피드 이미지 --> */}

        <img className="articleFeedImg" src="images/695986339.887071.JPG" />

        {/* <!-- 댓글, 좋아요 등 아이콘들 --> */}
        <div className="reaction">
          <FeedIcon />
          <LikeInfo />
          <div className="commentAndFeedTime">
            <ul className="commentList">
              {props.commentArray.map(function (a, i) {
                return (
                  <li className="comment" key={i}>
                    <span className="textBold">someone</span>
                    <span> {props.commentArray[i]} </span>
                    <img className="smallHeart" src="images/heart.png" />
                    <span
                      className="miniSubGray"
                      onClick={() => {
                        let copyComment = [...props.commentArray];
                        copyComment.splice(i, 1);
                        props.setCommentArray(copyComment);
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
              props.setInputComment(e.target.value);
            }}
            value={props.inputComment}
            type="text"
            name="commentInput"
            placeholder="댓글달기..."
          />
          <button
            className="commentReply"
            type="submit"
            onClick={() => {
              let copyComment = [...props.commentArray];
              copyComment.unshift(props.inputComment);
              props.setCommentArray(copyComment);
              props.setInputComment('');
            }}
          >
            게시
          </button>
        </div>
      </article>
    </div>
  );
};

export default ArticleBody;
