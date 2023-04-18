/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import Playlistitem from "./Playlistitem";
import Search from '../img/icon/search.svg';
import SearchWhite from '../img/iconWhite/search.svg';
import Watch from '../img/icon/watch.svg';
import WatchWhite from '../img/iconWhite/watch.svg';
import { useGetAllTracksQuery } from '../../../services/servises';
import { pushAllTracksToStore } from '../../../Store/store';

import {
    MainCenterblock,
    CenterblockSearch,
    SearchSvg,
    SearchText,
    CenterblockTracksTitle,
    CenterblockContent,
    ContentTitle,
    Col01,
    Col02,
    Col03,
    Col04,
    PlaylistTitleSvg,
    ContentPlaylist,
} from '../css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';

const Centerblock = () => {
    const [showPlaylistitem, setPlaylistitem] = useState(false);
    const [dispatchTracks, setDispatchTracks] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [resultTracks, setResultTracks] = useState([]);
    const { data, isLoading, error } = useGetAllTracksQuery();
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const userId = Number(localStorage.getItem('user_register_id'))

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds - minutes * 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
        SearchTracks(resultTracks, searchInputValue)
    }

    const SearchTracks = async (resultTracks, keyword) => {
        const regex = new RegExp(keyword, 'i');
        const results = resultTracks.filter(track =>
            regex.test(track?.album) ||
            regex.test(track?.author) ||
            regex.test(track?.name)
        );
        setSearchResults(results);
    }

    useEffect(() => {
        if (data?.length) {
            getTracks()
        }
    }, [data]);

    const getTracks = async () => {
        if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                const track = data[i].stared_user;
                for (let j = 0; j < track.length; j++) {
                    if (track[j].id === userId) {
                        setResultTracks(prevTracks => [...prevTracks, data[i]]);
                    }
                }
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setPlaylistitem(true);
        }, 500);
    }, []);

    useEffect(() => {
        if (isLoading) {
            console.log('isLoading')
        } else if (error) {
            console.log('error')
        } else if (data?.length && !dispatchTracks) {
            dispatch(pushAllTracksToStore(data));
            setDispatchTracks(true);
        }
    }, [data, isLoading, error]);

    useEffect(() => {
        if (searchInputValue.length) {
            setResultTracks(searchResults);
        } else {
            getTracks();
        }
    }, [searchResults]);

    useEffect(() => {
        console.log(resultTracks)
    }, [resultTracks]);

    return (
        <MainCenterblock>
            <CenterblockSearch theme={theme === 'dark' ? '#4E4E4E' : '#D9D9D9'}>
                <SearchSvg>
                    <img src={theme === 'dark' ? Search : SearchWhite} alt="" />
                </SearchSvg>
                <SearchText
                    theme={theme === 'dark' ? '#ffffff' : '#000000'}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                    onChange={handleSearchInputChange}
                />
            </CenterblockSearch>
            <CenterblockTracksTitle theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>Мои треки</CenterblockTracksTitle>
            <CenterblockContent>
                <ContentTitle>
                    <Col01 theme={theme === 'dark' ? '#FFFFFF' : '#B1B1B1'}>Трек</Col01>
                    <Col02 theme={theme === 'dark' ? '#FFFFFF' : '#B1B1B1'}>ИСПОЛНИТЕЛЬ</Col02>
                    <Col03 theme={theme === 'dark' ? '#FFFFFF' : '#B1B1B1'}>АЛЬБОМ</Col03>
                    <Col04>
                        <PlaylistTitleSvg alt="time">
                            <img src={theme === 'dark' ? WatchWhite : Watch} alt="" />
                        </PlaylistTitleSvg>
                    </Col04>
                </ContentTitle>
                <ContentPlaylist>
                    {showPlaylistitem ? (
                        <>
                            {resultTracks && resultTracks.map((track) => (
                                <Playlistitem
                                    id={track.id}
                                    track={track.name}
                                    author={track.author}
                                    album={track.album}
                                    time={formatTime(track.duration_in_seconds)}
                                    span={track.span}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {[...Array(9)].map((_, index) => (
                                <Playlistitem key={index} skeleton='true' />
                            ))}
                        </>
                    )}
                </ContentPlaylist>
            </CenterblockContent>
        </MainCenterblock>
    );
};

export default Centerblock;