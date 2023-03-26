import React from 'react';
import Header from './Header';
import Contents from './Contents';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="modalBox" />
      <Header />
      <Contents />
      <div className="clearance" />
    </div>
  );
}

export default Main;
