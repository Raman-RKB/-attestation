/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext} from "react";
import { ThemeContext } from '../../../ThemeContext';
import {
    MenuItem,
    MenuLink
} from '../css/NavigationLeftStyle';

const Menuitem = (props) => {
        const { theme } = useContext(ThemeContext);
    return (
        <MenuItem><MenuLink theme={theme === 'dark' ? '#ffffff' : '#000000'}  href="http://">{props.text}</MenuLink></MenuItem>
    );
};

export default Menuitem;