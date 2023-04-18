import React, { useContext, useState } from "react";
import Menuitem from './Menuitem';
import logo from '../img/logo.png'
import logoWhite from '../img/iconWhite/logo.png'
import ThemeWhite from '../img/icon/ThemeWhite.svg'
import ThemeDark from '../img/iconWhite/ThemeDark.svg'
import { ThemeContext } from '../../../ThemeContext';
import { useNavigate } from "react-router-dom";


import {
    MainNav,
    NavLogo,
    LogoImage,
    NavBurger,
    BurgerLine,
    NavMenu,
    MenuList,
} from '../css/NavigationLeftStyle';

const NavigationLeft = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { toggleTheme, theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleBurgerClick = () => {
        setShowMenu(!showMenu);
    };

    const handleTheme = () => {
        toggleTheme();
    };

    const handleMyTracksClick = (event) => {
        const target = event.target
        event.preventDefault()

        if (!localStorage.access_token && target.textContent === 'Мой плейлист') {
            alert('Вам нужно войти, чтобы выбирать трэки')
        } else if (localStorage.access_token && target.textContent === 'Мой плейлист') {
            navigate('/mytracks');
        } else if (target.textContent === 'Войти') {
            navigate('/login');
        } else if (target.textContent === 'Выйти') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            navigate('/login');
        } else if (localStorage.access_token && target.textContent === 'Главная') {
            navigate('/');
        }
    };

    const navActive = `${showMenu ? (theme === 'dark' ? '#1C1C1C' : '#F6F5F3') : (theme === 'dark' ? '#000000' : '#ffffff')}`;

    return (
        <MainNav
            navActive={navActive}
        >
            <NavLogo>
                <LogoImage src={theme === 'dark' ? logo : logoWhite} alt="logo" />
            </NavLogo>
            <NavBurger onClick={handleBurgerClick}>
                <BurgerLine theme={theme === 'dark' ? '#D3D3D3' : '#000000'}></BurgerLine>
                <BurgerLine theme={theme === 'dark' ? '#D3D3D3' : '#000000'}></BurgerLine>
                <BurgerLine theme={theme === 'dark' ? '#D3D3D3' : '#000000'}></BurgerLine>
            </NavBurger>
            {showMenu && (
                <NavMenu >
                    <MenuList onClick={handleMyTracksClick}>
                        <Menuitem text="Главная" />
                        <Menuitem text="Мой плейлист" />
                        <Menuitem text={localStorage.access_token ? 'Выйти' : 'Войти'} />
                        <img src={theme === 'dark' ? ThemeWhite : ThemeDark} onClick={handleTheme} />
                    </MenuList>
                </NavMenu>
            )}
        </MainNav>
    );
};

export default NavigationLeft;
