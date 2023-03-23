import React from 'react';
import './CommentBoard.scss';
import Comment from './Comment';

function CommentBoard({ commentList, setCommentList }) {
  return (
    <ul className="commentBoard">
      {commentList &&
        commentList.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
    </ul>
  );
}

export default CommentBoard;
