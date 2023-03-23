import React from 'react';
import rogoImg from '../../../assets/youngwoonKim/main-images/wecode.png';
import './AsideHeader.scss';

function AsideHeader() {
  return (
    <div className="asideHeader">
      <img src={rogoImg} alt="이미지" />
      <div>
        <p>wecode_bootcamp</p>
        <p className="wecode">WeCode | 위코드</p>
      </div>
    </div>
  );
}

export default AsideHeader;
