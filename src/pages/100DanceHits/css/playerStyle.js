import styled, { css } from "styled-components";

export const BtnIconMixin = css`
:hover {
    fill: transparent;
    stroke: #ACACAC;
    cursor: pointer;
}
:active {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;

}
`;

export const Bar = styled.div`
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme};
`;

export const BarContent = styled.div`
        display: flex;
        flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme};
`;

export const Progress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => props.progress}%;
  background-color: #580EA2;
`;

export const BarPlayerBlock = styled.div`
        height: 73px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`;

export const BarPlayer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
`;

export const PlayerControls = styled.div`
        display: flex;
        flex-direction: row;
        padding: 0 27px 0 31px;
`;

export const PlayerBtnPrev = styled.div`
        display: flex;
        align-items: center;
        margin-right: 23px;
         ${BtnIconMixin}
`;

export const PlayerBtnPrevSvg = styled.div`
    margin-bottom: 5px;
        width: 15px;
        height: 14px;
`;

export const PlayerBtnPlay = styled.div`
        display: flex;
        align-items: flex-end;
        padding-left: 10px;
        cursor: pointer;
        margin-right: 23px;
`;

export const PlayerBtnPlaySvg = styled.div`
        width: 22px;
        height: 20px;
        fill: #D9D9D9;
`;

export const PlayerBtnNext = styled.div`
        margin-right: 28px;
        fill: #a53939;
        ${BtnIconMixin}
`;

export const PlayerBtnNextSvg = styled.div`
        width: 15px;
        height: 14px;
        fill: inherit;
        stroke: #D9D9D9;
`;

export const PlayerBtnRepeat = styled.div`
       margin-right: 24px;
        ${BtnIconMixin}
`;

export const PlayerBtnRepeatSvg = styled.div`
        width: 18px;
        height: 12px;
        fill: transparent;
        stroke: #696969;
`;

export const PlayerBtnShuffle = styled.div`
margin-bottom: 7px;
        display: flex;
        align-items: center;
        ${BtnIconMixin}
}
`;

export const PlayerBtnShuffleImg = styled.div`
        width: 19px;
        height: 12px;
        fill: transparent;
        stroke: #696969;
}
`;

export const PlayerTrackPlay = styled.div`
        display: flex;
        flex-direction: row;;
}
`;

export const TrackPlayContainSkeleton = styled.div`
    display: flex;
    align-items: center;
}
`;

export const TrackPlayContainSkeletonSquare = styled.div`
    width: 51px;
    height: 51px;
    background: #313131;
}
`;

export const TrackPlayContainSkeletonLines = styled.div`
    margin-left: 12px;
}
`;

export const TrackPlayContainSkeletonLinesUpperLine = styled.div`
    width: 59px;
    height: 15px;
    background: #313131;
    margin-bottom: 7px;
}
`;

export const TrackPlayContainSkeletonLinesBottomLine = styled.div`
    width: 59px;
    height: 15px;
    background: #313131;
}
`;

export const TrackPlayContain = styled.div`
        width: auto;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-areas: 'image author' 'image album';
        align-items: center;
}
`;

export const TrackPlayImage = styled.div`
        width: 51px;
        height: 51px;
        background-color: ${props => props.theme};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        grid-area: image;
}
`;

export const TrackPlayImg = styled.div`
        width: 18px;
        height: 17px;
        fill: transparent;
        stroke: #4E4E4E;
}
`;

export const TrackPlayAuthor = styled.div`
        grid-area: author;
        min-width: 49px;
}
`;

export const TrackPlayAuthorLink = styled.a`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme};
        white-space: nowrap;
}
`;

export const TrackPlayAlbum = styled.div`
        grid-area: album;
        min-width: 49px;
}
`;

export const TrackPlayAlbumLink = styled.div`
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: ${props => props.theme};
}
`;

export const TrackPlayLikeDis = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3.34px;
}
`;

export const TrackPlayLike = styled.div`
padding: 5px;
${BtnIconMixin}
`;

export const TrackPlayLikeImg = styled.div`
        width: 14px;
        height: 12px;
        fill: transparent;
        stroke: #696969;
            fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
`;

export const TrackPlayDislike = styled.div`
        margin-left: 28.5px;
        padding: 5px;
        ${BtnIconMixin}
`;

export const TrackPlayDislikeImg = styled.div`
        width: 14.34px;
        height: 13px;
        fill: transparent;
        stroke: #696969;
            fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
`;

export const BarVolumeBlock = styled.div`
        width: auto;
        display: flex;
        align-items: center;
        padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
`;

export const VolumeImage = styled.div`
        width: 13px;
        height: 30px;
        margin-right: 17px;
`;

export const VolumeIcon = styled.div`
        width: 13px;
        height: 18px;
        fill: transparent;
`;

export const VolumeProgress = styled.div`
        width: 109px;
        cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-image: linear-gradient(to right, red 50%, transparent 50%);
    border-radius: 50%;
  }
`;









