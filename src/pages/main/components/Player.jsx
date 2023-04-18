/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushAllTracksToStore } from '../../../Store/store';
import { usePushTrackToFavoriteByIdMutation } from '../../../services/servises';
import { useRemoveTrackFromFavoriteByIdMutation } from '../../../services/servises';
import { pushLinkToStore } from '../../../Store/store';
import { useGetAllTracksQuery } from '../../../services/servises';
import Prev from '../img/icon/prev.svg';
import Play from '../img/icon/play.svg';
import Pause from '../img/icon/pause.svg';
import Next from '../img/icon/next.svg';
import Repeat from '../img/icon/repeat.svg';
import RepeatActive from '../img/icon/repeatActive.svg';
import Shuffle from '../img/icon/shuffle.svg';
import Note from '../img/icon/note.svg';
import Like from '../img/icon/like.svg';
import LikeActive from '../img/icon/IconLikeLiked.svg';
import Dislike from '../img/icon/dislike.svg';
import DislikeActive from '../img/icon/disLikeActive.svg';
import Volume from '../img/icon/volume.svg';
import ShuffleActive from '../img/icon/shuffleActive.svg';

import VolumeWhite from '../img/iconWhite/volume.svg';
import DislikeWhite from '../img/iconWhite/dislike.svg';
import DislikeWhiteActive from '../img/iconWhite/DislikeWhiteActive.svg';
import LikeWhite from '../img/iconWhite/like.svg';
import LikeWhiteActive from '../img/iconWhite/IconLikeWhiteLiked.svg';
import NoteWhite from '../img/iconWhite/note.svg';
import ShuffleWhite from '../img/iconWhite/shuffle.svg';
import ShuffleWhiteActive from '../img/iconWhite/ShuffleWhiteActive.svg';
import RepeatWhite from '../img/iconWhite/repeat.svg';
import RepeatWhiteActive from '../img/iconWhite/RepeateWhiteActive.svg';
import NextWhite from '../img/iconWhite/next.svg';
import PauseWhite from '../img/iconWhite/pause.svg';
import PlayWhite from '../img/iconWhite/play.svg';
import PrevWhite from '../img/iconWhite/prev.svg';

import {
    Bar,
    BarContent,
    BarPlayerProgress,
    Progress,
    BarPlayerBlock,
    BarPlayer,
    PlayerControls,
    PlayerBtnPrev,
    PlayerBtnPlay,
    PlayerBtnPlaySvg,
    PlayerBtnNext,
    PlayerBtnNextSvg,
    PlayerBtnRepeat,
    PlayerBtnPrevSvg,
    PlayerBtnRepeatSvg,
    PlayerBtnShuffle,
    PlayerBtnShuffleImg,
    PlayerTrackPlay,
    TrackPlayContainSkeleton,
    TrackPlayContainSkeletonSquare,
    TrackPlayContainSkeletonLines,
    TrackPlayContainSkeletonLinesUpperLine,
    TrackPlayContainSkeletonLinesBottomLine,
    TrackPlayContain,
    TrackPlayImage,
    TrackPlayImg,
    TrackPlayAuthor,
    TrackPlayAuthorLink,
    TrackPlayAlbum,
    TrackPlayAlbumLink,
    TrackPlayLikeDis,
    TrackPlayLike,
    TrackPlayLikeImg,
    TrackPlayDislike,
    TrackPlayDislikeImg,
    BarVolumeBlock,
    VolumeContent,
    VolumeImage,
    VolumeIcon,
    VolumeProgress,
    VolumeProgressLine
} from '../css/playerStyle';
import { ThemeContext } from '../../../ThemeContext';

function Player() {
    const [showTrackPlayContain, setShowTrackPlayContain] = useState(false);
    const [showPauseButton, setShowPauseButton] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playTrackLink, setPlayTrackLink] = useState();
    const [repeat, setRepeat] = useState(false);
    const [progressBarClick, setProgressBarClick] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const dispatch = useDispatch();
    const [pushTrackToFvoriteById] = usePushTrackToFavoriteByIdMutation();
    const [removeTrackFromFavoriteById] = useRemoveTrackFromFavoriteByIdMutation();
    const { theme } = useContext(ThemeContext);
    const audioRef = useRef(null);
    const playButtonRef = useRef(null);
    const userId = Number(localStorage.getItem('user_register_id'))
    const trackId = useSelector(state => state.trackId);
    const { data, isLoading, error } = useGetAllTracksQuery();
    const immutabilityAllTracksArr = useSelector(state => state.allTracks);
    let mutabilyAlltracksArr = [...immutabilityAllTracksArr];
    const trackObject = mutabilyAlltracksArr.find(obj => obj.track_file === playTrackLink);

    function handlePlay(reset) {
        if (reset) {
            audioRef.current.play();
            setShowPauseButton(true);
            setIsPlaying(true);
        } else {
            audioRef.current.currentTime = currentTime;
            audioRef.current.play();
            setShowPauseButton(true);
            setIsPlaying(true);
        }
        audioRef.current.addEventListener("ended", handleAudioEnded);
    }

    function handleRepeat() {
        setRepeat(!repeat)
    }

    function handleAudioEnded() {
        if (repeat) {
            audioRef.current.currentTime = 1;
            audioRef.current.play();
        } else {
            audioRef.current.currentTime = '';
        }
    }

    function handleStop() {
        audioRef.current.pause();
        setCurrentTime(audioRef.current.currentTime);
        setShowPauseButton(false);
        setIsPlaying(false);
    }

    function handleTimeUpdate() {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    }

    function handleProgressBarClick(event) {
        const element = event.target;
        const duration = audioRef.current.duration;
        const rect = element.getBoundingClientRect();
        const clickedPercent = (event.clientX - rect.left) / rect.width;
        const timeLap = duration * clickedPercent;
        setCurrentTime(timeLap)
        setProgressBarClick(true)

    }

    function handleEnded() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    function handlePrev() {
        let currentIndex = mutabilyAlltracksArr.findIndex(obj => obj.track_file === playTrackLink);
        if (mutabilyAlltracksArr[currentIndex - 1] !== undefined) {
            let previousObject = mutabilyAlltracksArr[currentIndex - 1].track_file;
            setPlayTrackLink(previousObject)
            dispatch(pushLinkToStore(previousObject));
        } else {
            setPlayTrackLink(mutabilyAlltracksArr[mutabilyAlltracksArr.length - 1].track_file);
            dispatch(pushLinkToStore(mutabilyAlltracksArr[mutabilyAlltracksArr.length - 1].track_file));
        }
    }

    function handleNext() {
        let currentIndex = mutabilyAlltracksArr.findIndex(obj => obj.track_file === playTrackLink);
        if (mutabilyAlltracksArr[currentIndex + 1] !== undefined) {
            let nextObject = mutabilyAlltracksArr[currentIndex + 1].track_file;
            setPlayTrackLink(nextObject)
            dispatch(pushLinkToStore(nextObject));
        } else {
            setPlayTrackLink(mutabilyAlltracksArr[0].track_file);
            dispatch(pushLinkToStore(mutabilyAlltracksArr[0].track_file));
        }
    }

    function handleShuffle() {
        if (shuffle) {
            setShuffle(false)
        } else {
            setShuffle(true)
        }
    }

    const handleLikeClick = async () => {
        if (like) {
            setLike(false)
            setDisLike(true)
        } else {
            setLike(true)
            setDisLike(false)
        }

        await refreshToken()
        pushTrackToFvoriteById(trackObject.id)
    };

    const handleDisLikeClick = async () => {
        if (disLike) {
            setDisLike(false)
            setLike(true)
        } else {
            setDisLike(true)
            setLike(false)
        }

        await refreshToken()
        removeTrackFromFavoriteById(trackObject.id)
    }

    function handleVolumeChange(event) {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowTrackPlayContain(true);
        }, 500);
    }, []);

    useEffect(() => {
        if (mutabilyAlltracksArr && mutabilyAlltracksArr.length) {
            for (let i = 0; i < mutabilyAlltracksArr.length; i++) {
                const track = mutabilyAlltracksArr[i].id;
                if (track === trackId) {
                    setPlayTrackLink(mutabilyAlltracksArr[i].track_file)
                    dispatch(pushLinkToStore(mutabilyAlltracksArr[i].track_file));
                    for (let j = 0; j < mutabilyAlltracksArr[i].stared_user.length; j++) {
                        if (mutabilyAlltracksArr[i].stared_user[j].id === userId) {
                            setLike(true)
                            setDisLike(false)
                        } else {
                            setLike(false)
                            setDisLike(true)
                        }
                    }
                }
            }
        }
    }, [trackId]);

    useEffect(() => {
        if (isLoading) {
            console.log('isLoading')
        } else if (error) {
            console.log('error')
        } else if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                const track = data[i].id;
                if (track === trackId) {
                    for (let j = 0; j < data[i].stared_user.length; j++) {
                        if (data[i].stared_user[j].id === userId) {
                            setLike(true)
                            setDisLike(false)
                        } else {
                            setLike(false)
                            setDisLike(true)
                        }
                    }
                }
            }
        }

    }, [data, isLoading, error, trackId]);

    useEffect(() => {
        if (playTrackLink) {
            handlePlay('reset current time')
        }
    }, [playTrackLink]);

    useEffect(() => {
        if (progressBarClick) {
            handlePlay()
            setProgressBarClick(false)
        }
    }, [currentTime]);

    useEffect(() => {
        mutabilyAlltracksArr.sort(() => Math.random() - 0.5);
        dispatch(pushAllTracksToStore(mutabilyAlltracksArr));
    }, [shuffle]);

    useEffect(() => {
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <Bar display={currentTime === 0 && !showPauseButton ? 'none' : ''} theme={theme === 'white' ? '#ffffff' : '#000000'}>
            <audio ref={audioRef}
                src={playTrackLink}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                // eslint-disable-next-line react/no-unknown-property
                currentTime={currentTime}
            ></audio>

            <BarContent>
                <BarPlayerProgress theme={theme === 'white' ? '#D9D9D9' : '#2E2E2E'} onClick={handleProgressBarClick}>
                    <Progress progress={progress} bgColor='#580EA2' />
                </BarPlayerProgress>
                <BarPlayerBlock>
                    <BarPlayer>
                        <PlayerControls>
                            <PlayerBtnPrev >
                                <PlayerBtnPrevSvg alt="prev" onClick={handlePrev}>
                                    <img src={theme === 'white' ? PrevWhite : Prev} />
                                </PlayerBtnPrevSvg>
                            </PlayerBtnPrev>
                            <PlayerBtnPlay ref={playButtonRef} onClick={!showPauseButton ? handlePlay : handleStop}>
                                <PlayerBtnPlaySvg alt="play">
                                    <img src={!showPauseButton ?
                                        (theme === 'white' ? PlayWhite : Play) :
                                        (theme === 'white' ? PauseWhite : Pause)}>
                                    </img>
                                </PlayerBtnPlaySvg>
                            </PlayerBtnPlay>
                            <PlayerBtnNext>
                                <PlayerBtnNextSvg alt="next" onClick={handleNext}>
                                    <img src={theme === 'white' ? NextWhite : Next}></img>
                                </PlayerBtnNextSvg>
                            </PlayerBtnNext>
                            <PlayerBtnRepeat>
                                <PlayerBtnRepeatSvg alt="repeat" onClick={handleRepeat}>
                                    <img src={theme === 'white' ?
                                        (repeat ? RepeatWhiteActive : RepeatWhite)
                                        :
                                        (repeat ? RepeatActive : Repeat)
                                    }></img>
                                </PlayerBtnRepeatSvg>
                            </PlayerBtnRepeat>
                            <PlayerBtnShuffle>
                                <PlayerBtnShuffleImg alt="shuffle">
                                    <img src={theme === 'white' ?
                                        (shuffle ? ShuffleWhiteActive : ShuffleWhite)
                                        :
                                        (shuffle ? ShuffleActive : Shuffle)}
                                        onClick={handleShuffle}></img>
                                </PlayerBtnShuffleImg>
                            </PlayerBtnShuffle>
                        </PlayerControls>

                        <PlayerTrackPlay>
                            {!showTrackPlayContain ? (
                                <TrackPlayContainSkeleton>
                                    <TrackPlayContainSkeletonSquare></TrackPlayContainSkeletonSquare>
                                    <TrackPlayContainSkeletonLines>
                                        <TrackPlayContainSkeletonLinesUpperLine></TrackPlayContainSkeletonLinesUpperLine>
                                        <TrackPlayContainSkeletonLinesBottomLine></TrackPlayContainSkeletonLinesBottomLine>
                                    </TrackPlayContainSkeletonLines>
                                </TrackPlayContainSkeleton>
                            ) : (
                                <TrackPlayContain>
                                    <TrackPlayImage theme={theme === 'white' ? '#F6F4F4' : '#313131'}>
                                        <TrackPlayImg alt="music">
                                            <img src={theme === 'white' ? NoteWhite : Note}></img>
                                        </TrackPlayImg>
                                    </TrackPlayImage>
                                    <TrackPlayAuthor>
                                        <TrackPlayAuthorLink
                                            theme={theme === 'white' ? '#000000' : '#ffffff'}
                                        >{trackObject?.author}
                                        </TrackPlayAuthorLink>
                                    </TrackPlayAuthor>
                                    <TrackPlayAlbum>
                                        <TrackPlayAlbumLink
                                            theme={theme === 'white' ? '#000000' : '#ffffff'}
                                            href="http://">{trackObject?.album}
                                        </TrackPlayAlbumLink>
                                    </TrackPlayAlbum>
                                </TrackPlayContain>
                            )
                            }
                            <TrackPlayLikeDis>
                                <TrackPlayLike>
                                    <TrackPlayLikeImg alt="like">
                                        <img src={theme === 'white' ?
                                            (like ? LikeWhiteActive : LikeWhite)
                                            :
                                            (like ? LikeActive : Like)}
                                            onClick={handleLikeClick}></img>
                                    </TrackPlayLikeImg>
                                </TrackPlayLike>
                                <TrackPlayDislike>
                                    <TrackPlayDislikeImg alt="dislike">
                                        <img src={theme === 'white' ?
                                            (disLike ? DislikeWhiteActive : DislikeWhite)
                                            :
                                            (disLike ? DislikeActive : Dislike)}
                                            onClick={handleDisLikeClick}></img>
                                    </TrackPlayDislikeImg>
                                </TrackPlayDislike >
                            </TrackPlayLikeDis >
                        </PlayerTrackPlay >
                    </BarPlayer >
                    <BarVolumeBlock>
                        <VolumeContent>
                            <VolumeImage>
                                <VolumeIcon alt="volume">
                                    <img src={theme === 'white' ? VolumeWhite : Volume}></img>
                                </VolumeIcon>
                            </VolumeImage>
                            <VolumeProgress>
                                <VolumeProgressLine
                                    type="range"
                                    name="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    theme={theme === 'white' ? '#C4C4C4' : '#797979'}
                                    themeThumbBackground={theme === 'white' ? '#FFFFFF' : '#1A1A1A'}
                                    themeThumbBorder={theme === 'white' ? '#B1B1B1' : '#FFFFFF'}
                                />
                                <audio src={playTrackLink} ref={audioRef} controls style={{ display: 'none' }} />
                            </VolumeProgress>
                        </VolumeContent>
                    </BarVolumeBlock >
                </BarPlayerBlock >
            </BarContent >
        </Bar >
    );
}

export default Player;