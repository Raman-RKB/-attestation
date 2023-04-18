/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
    SidebarItem,
    SidebarLink,
    SidebarImg,
    SidebarItemSkeleton
} from '../css/sideBarStyle';

const Sidebaritem = (props) => {
    return (!props.skeleton ? (
        <SidebarItem>
            <SidebarLink href="#">
                <SidebarImg src={props.source} alt="day's playlist" />
            </SidebarLink>
        </SidebarItem>) : (
        <SidebarItemSkeleton></SidebarItemSkeleton>
    )

    );
};

export default Sidebaritem;