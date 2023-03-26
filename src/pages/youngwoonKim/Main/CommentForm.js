import React, { useState } from 'react';
import CommentBoard from './CommentBoard';
import './CommentForm.scss';

function CommentForm() {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function commentSubmit(e) {
    e.preventDefault();
    setCommentList([
      ...commentList,
      { id: commentList.length + 1, value: inputValue },
    ]);
    setInputValue('');
  }

  function commentRemove(targetId) {
    const removeList = commentList.filter(comment => comment.id !== targetId);
    setCommentList(removeList);
  }

  return (
    <>
      <CommentBoard commentList={commentList} commentRemove={commentRemove} />
      <form className="commentForm">
        <input value={inputValue} onChange={handleInput} />
        <button onClick={commentSubmit}>게시</button>
      </form>
    </>
  );
}

export default CommentForm;
