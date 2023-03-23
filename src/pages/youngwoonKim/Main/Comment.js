import React from 'react';
import './Comment.scss';

function Comment({ comment }) {
  return (
    <li className="comment">
      <div>
        <b>youngwoon_&nbsp;</b> {comment}
      </div>
      <p>삭제</p>
    </li>
  );
}

export default Comment;
