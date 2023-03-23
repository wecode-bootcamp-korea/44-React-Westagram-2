import React from 'react';
import './Recommend.scss';
import profile7 from '../../../assets/youngwoonKim/main-images/profile7.jpg';
import profile8 from '../../../assets/youngwoonKim/main-images/profile8.jpg';
import profile9 from '../../../assets/youngwoonKim/main-images/profile9.jpg';
import profile2 from '../../../assets/youngwoonKim/main-images/profile2.jpg';

function Recommend() {
  return (
    <div className="recommend">
      <header>
        <p className="gray">회원님을 위한 추천</p>
        <p>모두 보기</p>
      </header>
      <div className="friendRecommend">
        <img src={profile7} alt="profileimage" />
        <div>
          <p className="id">grailz_official</p>
          <p className="together">_legend_a님 외 2명이 ...</p>
        </div>
        <p className="follow">팔로우</p>
      </div>
      <div className="friendRecommend">
        <img src={profile8} alt="profileimage" />
        <div>
          <p className="id">kasina_official</p>
          <p className="together">ringo.in.seoul님 외 12명이 ...</p>
        </div>
        <p className="follow">팔로우</p>
      </div>
      <div className="friendRecommend">
        <img src={profile9} alt="profileimage" />
        <div>
          <p className="id">sansan_gear</p>
          <p className="together">jimmylee님 외 7명이 ...</p>
        </div>
        <p className="follow">팔로우</p>
      </div>
      <div className="friendRecommend">
        <img src={profile2} alt="profileimage" />
        <div>
          <p className="id">kickturn</p>
          <p className="together">kickturn님 외 3명이 ...</p>
        </div>
        <p className="follow">팔로우</p>
      </div>
    </div>
  );
}

export default Recommend;
