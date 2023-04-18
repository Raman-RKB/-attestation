import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainNav = styled.nav`
        width: 244px;
        padding: 20px 0 20px 36px;
        background: ${props => props.navActive};
`;

export const NavLogo = styled.div`
        width: 113.33px;
        height: 43px;
        padding: 13px 0 13px 0;
        background-color: transparent;
        margin-bottom: 20px;
`;

export const LogoImage = styled.img`
        width: 113.33px;
        height: 17px;
        color: #181818;
`;

export const NavBurger = styled.div`
        width: 20px;
        height: 36px;
        padding: 13px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`;

export const BurgerLine = styled.span`
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme};
`;

export const NavMenu = styled.div`
    display: block;
    visibility: visible;
`;

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`;

// ------------------------------------MenuItem-----------------------------------------

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;


export const MenuLink = styled.a`
  color: ${props => props.theme};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    color: white;
        text-decoration: none;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;
