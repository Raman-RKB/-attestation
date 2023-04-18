// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import Sidebaritem from './Sidebaritem';
import Playlist01 from '../img/playlist01.png';
import Playlist02 from '../img/playlist02.png';
import Playlist03 from '../img/playlist03.png';
import { useNavigate } from "react-router-dom";

import {
    MainSidebar,
    SidebarBlock,
    Sidebarlist,
    SidebarPersonal,
    SidebarPersonalName,
    SidebarAvatar,
    AvatarImg
} from '../css/sideBarStyle';
import { ThemeContext } from '../../../ThemeContext';

const Sidebar = () => {
    const [showSidebaritem, setSidebaritem] = useState(false);
    const [imgSelected, setImgSelected] = useState();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const handleSelectionClick = (event) => {
        const target = event.target
        console.log(target.src)

        if (target.src === 'http://localhost:3000/static/media/playlist01.1f0f03b6028fe76c9c24.png') {
            navigate('/PlaylistOfTheDay');
        } else if (target.src === 'http://localhost:3000/static/media/playlist02.1ebc1a93e700376dd918.png') {
            navigate('/100DanceHits');
        } else if (target.src === 'http://localhost:3000/static/media/playlist03.09e115ca5326c4224eb5.png') {
            navigate('/IndieCharge');
        }
    };

    const handleSidebarAvatarClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event) => {
            const file = event.target.files[0];
            const imgUrl = URL.createObjectURL(file);
            setImgSelected(imgUrl);
            alert('Бэкенда на аватарку нет и я не стал заморачиваться с хранением ссылки между перезагрузками, короче ава временная')
        };
        input.click();
    }


    useEffect(() => {
        setTimeout(() => {
            setSidebaritem(true);
        }, 500);
    }, []);

    return (
        <MainSidebar>
            <SidebarPersonal>
                <SidebarPersonalName
                    theme={theme === 'dark' ? '#ffffff' : '#000000'}>
                    {localStorage.user_register_login}
                </SidebarPersonalName>
                <SidebarAvatar
                    onClick={handleSidebarAvatarClick}
                    theme={theme === 'dark' ? '#4E4E4E' : '#F6F4F4'}>
                    <AvatarImg
                        src={imgSelected ? imgSelected : ''}
                        ava={imgSelected ? '' : 'none'} />
                </SidebarAvatar>
            </SidebarPersonal>
            <SidebarBlock>
                <Sidebarlist onClick={handleSelectionClick}>
                    {showSidebaritem ? (
                        <>
                            <Sidebaritem source={Playlist01} />
                            <Sidebaritem source={Playlist02} />
                            <Sidebaritem source={Playlist03} />
                        </>
                    ) : (
                        <>
                            <Sidebaritem skeleton='true' />
                            <Sidebaritem skeleton='true' />
                            <Sidebaritem skeleton='true' />
                        </>
                    )

                    }

                </Sidebarlist>
            </SidebarBlock>
        </MainSidebar >
    );
};

export default Sidebar;