import React from 'react';
import CommentBoard from './CommentBoard';
import {
  faArrowUpFromBracket,
  faEllipsis,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile1 from '../../../assets/youngwoonKim/main-images/profile1.jpg';
import feedImg from '../../../assets/youngwoonKim/main-images/feedimege.jpg';
import './Feed.scss';
import CommentForm from './CommentForm';

function Feed({ postID, postID2, post, feedImage }) {
  return (
    <div className="feed">
      <div className="top">
        <img className="profileImg" src={profile1} alt="profileimage" />
        <h2>{postID}</h2>
        <FontAwesomeIcon className="icon" icon={faEllipsis} />
      </div>
      <img className="feedImg" src={feedImage} alt="feedimage" />
      <div className="iconArea">
        <FontAwesomeIcon className="heartIcon" icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon className="arrowIcon" icon={faArrowUpFromBracket} />
        <FontAwesomeIcon className="bookmarkIcon" icon={faBookmark} />
      </div>
      <div className="postArea">
        <div className="like">
          <img src={feedImg} alt="profileimage" />
          <p>
            <b>ee_tiquettecvide</b>님 <b>외 10명</b>이 좋아합니다.
          </p>
        </div>
        <p className="post">
          <b>{postID2}</b> {post}
          <span>더보기</span>
        </p>
      </div>
      <CommentBoard />
      <CommentForm />
    </div>
  );
}

export default Feed;
