import React from 'react';
import './RelatedSearch.scss';
import wecodeImg from '../../../assets/youngwoonKim/main-images/wecode.png';

function RelatedSearch({ user }) {
  return (
    <div className="relatedSearch">
      <img src={wecodeImg} alt="프로필이미지" />
      <p>{user.id}</p>
    </div>
  );
}

export default RelatedSearch;
