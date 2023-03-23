/* eslint-disabled  */
import React, { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import MainShin from '../Main/MainShin';
import '../../../styles/common.scss';
import './LoginShin.scss';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPW, setUserPW] = useState('');
  const [isActive, setIsActive] = useState(false);

  const inId = e => {
    setUserId(e.target.value);
  };

  const inPW = e => {
    setUserPW(e.target.value);
  };

  const navigate = useNavigate();

  const validCheck = () => {
    return userId.includes('@') && userPW.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <div className="body">
      <form className="loginWindow">
        <p className="westaLogo">westagram</p>
        <input
          className="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={e => {
            inId(e);
          }}
          onKeyUp={validCheck}
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="비밀번호"
          onChange={e => {
            inPW(e);
          }}
          onKeyUp={validCheck}
        />
        <button
          className={isActive ? 'onButton' : 'offButton'}
          disabled={isActive}
        >
          로그인
        </button>
        <p className="forgotPW">비밀번호를 잊으셨나요?</p>
      </form>
    </div>
  );
};

export default Login;
