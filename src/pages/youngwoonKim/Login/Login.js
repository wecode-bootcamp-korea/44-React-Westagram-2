import React from 'react';
import Facebook from './Facebook';
import Forgotpassword from './Forgotpassword';
import LoginForm from './Loginform';
import SignUp from './Signup';
import Westagram from './Westagram';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="fullArea">
        <Westagram />
        <LoginForm />
        <Facebook />
        <Forgotpassword />
      </div>
      <SignUp />
    </div>
  );
}

export default Login;
