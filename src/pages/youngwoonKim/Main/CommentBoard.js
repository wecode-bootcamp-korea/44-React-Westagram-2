import React from 'react';
import './CommentBoard.scss';
import Comment from './Comment';

function CommentBoard({ commentList, commentRemove }) {
  return (
    <ul className="commentBoard">
      {commentList &&
        commentList.map(comment => {
          return (
            <Comment
              id={comment.id}
              key={comment.id}
              comment={comment.value}
              commentRemove={commentRemove}
            />
          );
        })}
    </ul>
  );
}

export default CommentBoard;
