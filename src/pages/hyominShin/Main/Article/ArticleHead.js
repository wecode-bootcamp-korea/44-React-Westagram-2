import React, { useState } from 'react';
import './ArticleHead.scss';
import '../../../../styles/common.scss';

const ArticleHead = () => {
  return (
    <div className="articleHead">
      <div>
        <div className="profileFeed">
          <img className="profileFeedImg" src="images/good6.jpg" />
          <div className="peopleName">
            <span className="textBold">Hyomins-013</span>
            <span className="subGray">효민입니다.</span>
          </div>
        </div>
      </div>
      <img className="iconStyle" src="images/dots.png" />
    </div>
  );
};

export default ArticleHead;
