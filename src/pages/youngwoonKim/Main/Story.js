import React from 'react';
import './Story.scss';
import profile3 from '../../../assets/youngwoonKim/main-images/profile3.jpg';
import profile4 from '../../../assets/youngwoonKim/main-images/profile4.jpg';
import profile5 from '../../../assets/youngwoonKim/main-images/profile5.jpg';
import profile6 from '../../../assets/youngwoonKim/main-images/profile6.jpg';

function Story() {
  return (
    <div className="story">
      <header>
        <p className="gray">스토리</p>
        <p>모두 보기</p>
      </header>
      <div className="friendStory">
        <img src={profile3} alt="profileimage" />
        <div>
          <p className="id">shuzzang_</p>
          <p className="time">16분 전</p>
        </div>
      </div>
      <div className="friendStory">
        <img src={profile4} alt="profileimage" />
        <div>
          <p className="id">ho_jxng</p>
          <p className="time">3시간 전</p>
        </div>
      </div>
      <div className="friendStory">
        <img src={profile5} alt="profileimage" />
        <div>
          <p className="id">whale_One</p>
          <p className="time">20시간 전</p>
        </div>
      </div>
      <div className="friendStory">
        <img src={profile6} alt="profileimage" />
        <div>
          <p className="id">yum_s</p>
          <p className="time">16분 전</p>
        </div>
      </div>
    </div>
  );
}

export default Story;
