import React, { useState } from 'react';
import CommentBoard from './CommentBoard';

function CommentForm() {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function commentSubmit(e) {
    e.preventDefault();
    setCommentList([...commentList, inputValue]);
    setInputValue('');
  }

  return (
    <>
      <CommentBoard commentList={commentList} />
      <form>
        <input value={inputValue} onChange={handleInput} />
        <button onClick={commentSubmit}>게시</button>
      </form>
    </>
  );
}

export default CommentForm;
