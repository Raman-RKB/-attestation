/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';
import {
    RegistrationContainer,
    GlobalStyle,
    RegistrationLoginInput,
    RegistrationEmailInput,
    RegistrationPasswordInput,
    RepeatPasswordInput,
    RegistrationButtonInRegistrationForm
} from './css/registrationStyle';
import Logo from './img/logo.png';
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from '../../services/servises';

function Registration() {
    const [username, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [registerUser] = useRegisterUserMutation();

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (checkPassword === repeatPassword) {
            setPassword(repeatPassword)
        } else {
            alert("Пароли не совпадают")
        };
    };

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setCheckPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    }

    useEffect(() => {
        const userData = { username, email, password };
        if (password !== '') {
            localStorage.clear()
            registerUser(userData);
            localStorage.setItem("user_register_password", password);
            localStorage.setItem("user_register_login", username);
            navigate(`/login`, { replace: true });
        }
    }, [password]);

    return (
        <>
            <GlobalStyle />
            <RegistrationContainer>
                <img src={Logo} alt="" />
                <RegistrationLoginInput type="text" placeholder='Логин' value={username} onChange={handleLoginChange} />
                <RegistrationEmailInput type="text" placeholder='e-mail' value={email} onChange={handleEmailChange} />
                <RegistrationPasswordInput type="password" placeholder='Пароль' value={checkPassword} onChange={handlePasswordChange} />
                <RepeatPasswordInput type="password" placeholder='Повторите пароль' value={repeatPassword} onChange={handleRepeatPasswordChange} />
                <RegistrationButtonInRegistrationForm onClick={handleRegister}>Зарегистрироваться</RegistrationButtonInRegistrationForm>
            </RegistrationContainer>
        </>
    );
}

export default Registration;