import React from 'react';
import AsideHeader from './AsideHeader';
import Story from './Story';
import AsideFooter from './AsideFooter';
import './Aside.scss';
import Recommend from './Recommend';

function Aside() {
  return (
    <div className="aside">
      <AsideHeader />
      <Story />
      <Recommend />
      <AsideFooter />
    </div>
  );
}

export default Aside;
