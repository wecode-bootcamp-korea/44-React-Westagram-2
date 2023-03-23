import React from 'react';
import AsideHeader from './AsideHeader';
import Story from './Story';
import './Aside.scss';
import Recommend from './Recommend';

function Aside() {
  return (
    <div className="aside">
      <AsideHeader />
      <Story />
      <Recommend />
    </div>
  );
}

export default Aside;
