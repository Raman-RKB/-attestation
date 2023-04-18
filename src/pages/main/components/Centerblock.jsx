/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Playlistitem from "./Playlistitem";
import Filterbutton from './Filterbutton';
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
    CenterblockFilter,
    CenterblockContent,
    ContentTitle,
    Col01,
    Col02,
    Col03,
    Col04,
    PlaylistTitleSvg,
    ContentPlaylist,
    FilterTitle
} from '../css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';

const Centerblock = () => {
    const [showPlaylistitem, setPlaylistitem] = useState(false);
    const [dispatchTracks, setDispatchTracks] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { data, isLoading, error } = useGetAllTracksQuery();
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const alltracks = useSelector(state => state.allTracks);
    const navigate = useNavigate();

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds - minutes * 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
        SearchTracks(data, searchInputValue)
    }

    const SearchTracks = async (data, keyword) => {
        const regex = new RegExp(keyword, 'i');
        const results = data.filter(track =>
            regex.test(track?.album) ||
            regex.test(track?.author) ||
            regex.test(track?.name)
        );
        setSearchResults(results);
    }

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
        } else if (!data?.length) {
            navigate('/');
        }
    }, [data, isLoading, error]);

    useEffect(() => {
        if (searchInputValue.length) {
            dispatch(pushAllTracksToStore(searchResults));
        } else {
            dispatch(pushAllTracksToStore(data));
        }
    }, [searchResults]);

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
            <CenterblockTracksTitle theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>Треки</CenterblockTracksTitle>
            <CenterblockFilter>
                <FilterTitle theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>Искать по:</FilterTitle>
                <Filterbutton class="button-author" text="исполнителю" popupId="ID кнопки исполнителя" />
                <Filterbutton class="button-year" text="году выпуска" popupId="ID кнопки года выпуска" />
                <Filterbutton class="button-genre" text="жанру" popupId="ID кнопки жанра" />
            </CenterblockFilter>
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
                            {alltracks && alltracks.map((track) => (
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