import React from 'react';
import './AsideFooter.scss';

function AsideFooter() {
  return (
    <div className="asidefooter">
      {footerList.map(content => {
        return <span key={content}>{content}</span>;
      })}
      <p>©️ 2019 WESTAGRAM</p>
    </div>
  );
}

export default AsideFooter;

const footerList = [
  'Westagram 정보•',
  '지원•',
  '홍보 센터•',
  'API•',
  '채용 정보•',
  '개인정보처리방침•',
  '약관•',
  '디렉토리•',
  '프로필• ',
  '해시태크•',
  '언어',
];
