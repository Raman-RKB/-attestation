import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from '../../services/servises';
import { useGetTokenMutation } from '../../services/servises';

import {
  LoginContainer,
  GlobalStyle,
  PasswordInput,
  EnterButton,
  RegistrationButton,
  LoginEmailInput
} from './css/loginStyle';
import Logo from './img/logo.png';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginUser, { data }] = useLoginUserMutation();
  const [getToken] = useGetTokenMutation();

  const navigate = useNavigate();

  const handleClick = async () => {
    const userData = { password, email };
    getToken(userData)
    loginUser(userData);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (data) {
      navigate(`/`, { replace: true });
    } else {
      console.log('ошибки!!!');
    }
    console.log(data, 'data')
  }, [data]);

  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <img src={Logo} alt="" />
        <LoginEmailInput type="text" placeholder='e-mail' value={email} onChange={handleEmailChange} />
        <PasswordInput type="password" placeholder='Пароль' value={password} onChange={handlePasswordChange} />
        <EnterButton onClick={handleClick}>Войти</EnterButton>
        <NavLink to={`/registration`} replace>
          <RegistrationButton>Зарегистрироваться</RegistrationButton>
        </NavLink>
      </LoginContainer>
    </>
  );
}

export default Login;
