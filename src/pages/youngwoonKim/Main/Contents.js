import React from 'react';
import Aside from './Aside';
import Feed from './Feed';
import './Contents.scss';
import { useEffect } from 'react';
import { useState } from 'react';

function Contents() {
  const [feedList, setFeedList] = useState(0);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => {
        setFeedList(result);
      });
  }, []);

  return (
    <div className="Contents">
      <div className="feedWrap">
        {feedList &&
          feedList.map(inform => {
            return (
              <Feed
                key={inform.id}
                postID={inform.postID}
                postID2={inform.postID2}
                post={inform.post}
                feedImage={inform.feedImage}
              />
            );
          })}
      </div>
      <Aside />
    </div>
  );
}

export default Contents;
