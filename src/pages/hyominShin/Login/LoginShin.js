/* eslint-disabled  */
import React, { useState } from 'react';
import { Link, navigate, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/MainShin';
import '../../../styles/common.scss';
import './LoginShin.scss';

const Login = () => {
  return (
    <div className="body">
      <form className="loginWindow">
        <p className="westaLogo">westagram</p>
        <input
          className="idInput"
          type={'text'}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={e => {}}
        />
        <input
          className="passwordInput"
          type={'password'}
          placeholder="비밀번호"
          onChange={e => {}}
        />
        <button className="loginButton" disabled>
          로그인
        </button>
        <p className="forgotPW">비밀번호를 잊으셨나요?</p>
      </form>
    </div>
  );
};

export default Login;
