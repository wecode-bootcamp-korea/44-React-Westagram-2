import React from 'react';
import './ArticleHead.scss';
import '../../../../styles/common.scss';

const ArticleHead = props => {
  return (
    <div className="articleHead">
      <div>
        <div className="profileFeed">
          <img
            className="profileFeedImg"
            src={props.profileImg}
            alt="profile"
          />
          <div className="peopleName">
            <span className="textBold">{props.nickName}</span>
            <span className="subGray">{props.subText}</span>
          </div>
        </div>
      </div>
      <img className="iconStyle" src="images/dots.png" alt="meatballMenu" />
    </div>
  );
};

export default ArticleHead;
