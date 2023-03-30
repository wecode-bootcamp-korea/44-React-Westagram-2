import React from 'react';
import './NavProfile.scss';
import '../../../../styles/common.scss';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineBookmark } from 'react-icons/hi';
import { IoIosSettings } from 'react-icons/io';

const NavProfile = ({ isActive }) => {
  // const modalHandler = isActive => {
  //   return isActive ? false : true;
  // };

  return (
    <div className="profileModal">
      <div className="manuSelect">
        <FaRegUserCircle />
        프로필
      </div>
      <div className="manuSelect">
        <HiOutlineBookmark />
        저장됨
      </div>
      <div className="manuSelect">
        <IoIosSettings />
        설정
      </div>
      <div className="logout">로그아웃</div>
    </div>
  );
};

export default NavProfile;
