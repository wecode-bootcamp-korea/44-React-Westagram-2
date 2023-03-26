import React, { useState } from 'react';
import './Comment.scss';

function Comment({ comment, id, commentRemove }) {
  const [heart, setheart] = useState(false);

  function commentLike() {
    if (heart) {
      setheart(false);
    } else {
      setheart(true);
    }
  }

  return (
    <li className="comment">
      <div>
        <b>youngwoon_&nbsp;</b> {comment}
      </div>
      <p className="heartBtn" onClick={commentLike}>
        {heart ? '♥︎' : '♡'}
      </p>
      <p
        className="removeBtn"
        onClick={() => {
          if (window.confirm(`정말 삭제하시겠습니까?`)) {
            commentRemove(id);
          }
        }}
      >
        삭제
      </p>
    </li>
  );
}

export default Comment;
