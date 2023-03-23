import React from 'react';
import Aside from './Aside';
import Feed from './Feed';
import './Contents.scss';

function Contents() {
  return (
    <div className="Contents">
      <Feed />
      <Aside />
    </div>
  );
}

export default Contents;
