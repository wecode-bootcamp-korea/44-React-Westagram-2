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
import profile2 from '../../../assets/youngwoonKim/main-images/profile2.jpg';
import feedImg from '../../../assets/youngwoonKim/main-images/feedimege.jpg';
import './Feed.scss';
import CommentForm from './CommentForm';

function Feed() {
  return (
    <div className="feed">
      <div className="top">
        <img className="profileImg" src={profile1} alt="profileimage" />
        <h2>canon_mj</h2>
        <FontAwesomeIcon className="icon" icon={faEllipsis} />
      </div>
      <img className="feedImg" src={feedImg} alt="feedimage" />
      <div className="iconArea">
        <FontAwesomeIcon className="heartIcon" icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon className="arrowIcon" icon={faArrowUpFromBracket} />
        <FontAwesomeIcon className="bookmarkIcon" icon={faBookmark} />
      </div>
      <div className="postArea">
        <div className="like">
          <img src={profile2} alt="profileimage" />
          <p>
            <b>ee_tiquettecvide</b>님 <b>외 10명</b>이 좋아합니다.
          </p>
        </div>
        <p className="post">
          <b>kasina_official</b> 스니커즈의 문화와 역사가 바로 여기, 에어맥스...
          <span>더보기</span>
        </p>
      </div>
      <CommentBoard />
      <CommentForm />
    </div>
  );
}

export default Feed;
