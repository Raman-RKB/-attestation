/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from '../img/icon/note.svg';
import NoteWhite from '../img/iconWhite/note.svg';
import IconLike from '../img/icon/like.svg';
import IconLikeWhite from '../img/iconWhite/like.svg';
import IconLikeHover from '../img/icon/likeHover.svg';
import IconLikeWhiteHover from '../img/iconWhite/likeWhiteHover.svg';
import IconLikeLiked from '../img/icon/IconLikeLiked.svg';
import IconLikeWhiteLiked from '../img/iconWhite/IconLikeWhiteLiked.svg';
import { usePushTrackToFavoriteByIdMutation } from '../../../services/servises';
import { useRemoveTrackFromFavoriteByIdMutation } from '../../../services/servises';
import { useGetAllTracksQuery } from '../../../services/servises';
import { pushIdToStore } from '../../../Store/store';

import {
    PlaylistItem,
    PlaylistTrack,
    TrackTitle,
    TrackTitleImage,
    TrackTitleSvg,
    TrackTitleLink,
    TrackTitleSpan,
    TrackAuthor,
    TrackAuthorLink,
    TrackAlbum,
    TrackAlbumLink,
    TrackTimeImg,
    TrackTime,
    TrackTimeImgLike,
    TrackTimeText,
    TrackTitleTextSkeleton,
    TrackTitleTextSkeletonSquare,
    TrackTitleTextSkeletonTrack,
    TrackTitleTextSkeletonAuthor,
    TrackTitleTextSkeletonAlbum

} from '../../main/css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';

const Playlistitem = ({ skeleton, track, author, album, time, span, id }) => {
    const { theme } = useContext(ThemeContext);
    const [like, setLike] = useState(false);
    const [activeBackgroundColor, setActiveBackgroundColor] = useState(false);
    const [checkLikeTrack, setCheckLikeTrack] = useState([]);
    const [pushTrackToFavoriteById] = usePushTrackToFavoriteByIdMutation();
    const [removeTrackFromFavoriteById] = useRemoveTrackFromFavoriteByIdMutation();
    const { data, isLoading, error } = useGetAllTracksQuery();
    const userId = Number(localStorage.getItem('user_register_id'))
    const dispatch = useDispatch();
    const playingTrackLink = useSelector(state => state.playingTrackLink);
    const allTracks = useSelector(state => state.allTracks);

    const handleLikeClick = async (id) => {
        if (!like) {
            setLike(true);
            pushTrackToFavoriteById(id)
        } else {
            setLike(false);
            removeTrackFromFavoriteById(id)
        }
    };

    const handlePlayClick = async (id) => {
        dispatch(pushIdToStore(id));
    };

    useEffect(() => {
        if (isLoading) {
            console.log('isLoading')
        } else if (error) {
            console.log('error')
        } else if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    const track = data[i].stared_user;
                    setCheckLikeTrack(track)
                }
            }
        }

    }, [data, isLoading, error, allTracks]);

    useEffect(() => {
        for (let j = 0; j < checkLikeTrack.length; j++) {
            if (checkLikeTrack[j].id === userId) {
                setLike(true);
            } else {
                setLike(false);
            }
        }
    }, [checkLikeTrack]);

    useEffect(() => {
        if (data && data.length && playingTrackLink.length) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].track_file === playingTrackLink && data[i].id === id) {
                    setActiveBackgroundColor(true);
                    return
                } else {
                    setActiveBackgroundColor(false);
                }
            }
        }
    }, [playingTrackLink, allTracks]);

    return (!skeleton ?
        <PlaylistItem>
            <PlaylistTrack backgroundClick={theme === 'dark' ?
                (activeBackgroundColor ? '#2b2929' : 'none')
                :
                (activeBackgroundColor ? 'rgb(209 206 206)' : 'none')
            }>
                <TrackTitle>
                    <TrackTitleImage theme={theme === 'dark' ? '#4E4E4E' : '#F6F4F4'}>
                        <TrackTitleSvg alt="music">
                            <img src={theme === 'dark' ? NoteWhite : Note}></img>
                        </TrackTitleSvg>
                    </TrackTitleImage>
                    <div>
                        <TrackTitleLink
                            onClick={() => handlePlayClick(id)}
                            theme={theme === 'dark' ? '#ffffff' : '#000000'}
                            href="http://">
                            {track}
                            <TrackTitleSpan theme={theme === 'dark' ? '#4E4E4E' : '#B1B1B1'}> {span}</TrackTitleSpan>
                        </TrackTitleLink>
                    </div>
                </TrackTitle>
                <TrackAuthor>
                    <TrackAuthorLink
                        onClick={() => handlePlayClick(id)}
                        theme={theme === 'dark' ? '#ffffff' : '#000000'}
                        href="http://">{author}
                    </TrackAuthorLink>
                </TrackAuthor>
                <TrackAlbum>
                    <TrackAlbumLink
                        onClick={() => handlePlayClick(id)}
                        theme={theme === 'dark' ? '#4E4E4E' : '#B1B1B1'}
                        href="http://">{album}
                    </TrackAlbumLink>
                </TrackAlbum>
                <TrackTime>
                    <TrackTimeImg alt="time">
                        <TrackTimeImgLike
                            onClick={() => handleLikeClick(id)}
                            src={theme === 'dark' ? (like ? IconLikeLiked : IconLike) : (like ? IconLikeWhiteLiked : IconLikeWhite)}>
                        </TrackTimeImgLike>
                    </TrackTimeImg>
                    <TrackTimeText theme={theme === 'dark' ? '#4E4E4E' : '#B1B1B1'}>{time}</TrackTimeText>
                </TrackTime>
            </PlaylistTrack>
        </PlaylistItem>
        :
        <TrackTitleTextSkeleton>
            <TrackTitleTextSkeletonSquare></TrackTitleTextSkeletonSquare>
            <TrackTitleTextSkeletonTrack></TrackTitleTextSkeletonTrack>
            <TrackTitleTextSkeletonAuthor></TrackTitleTextSkeletonAuthor>
            <TrackTitleTextSkeletonAlbum></TrackTitleTextSkeletonAlbum>
        </TrackTitleTextSkeleton>

    );
};

export default Playlistitem;