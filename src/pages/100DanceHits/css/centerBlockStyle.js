
import styled, { css } from "styled-components";

export const MainCenterblock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;


export const CenterblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme};
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchSvg = styled.div`
    width: 17px;
    height: 30px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`;

export const SearchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme};

    &::placeholder {
    background-color: transparent;
    color: ${props => props.theme};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    }
`;

export const CenterblockTracksTitle = styled.h2`
        color: ${props => props.theme};
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 72px;
        letter-spacing: -0.8px;
        margin-bottom: 45px;
`;

export const CenterblockFilter = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 51px;

`;

export const CenterblockContent = styled.div`
        display: flex;
        flex-direction: column;
        width: 1107px;
`;

export const ContentTitle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
`;

export const PlaylistTitleColMixin = css`

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 2px;
        color: ${props => props.theme};
        text-transform: uppercase;
`;

export const Col01 = styled.div`
    ${PlaylistTitleColMixin}
    width: 447px;
`;

export const Col02 = styled.div`
    ${PlaylistTitleColMixin}
     width: 321px;
`;

export const Col03 = styled.div`
    ${PlaylistTitleColMixin}
    width: 245px;
`;

export const Col04 = styled.div`
    ${PlaylistTitleColMixin}
    width: 60px;
    text-align: end;
    display: flex;
    justify-content: flex-end;
`;

export const PlaylistTitleSvg = styled.div`
        display: flex;
        width: 12px;
        height: 12px;
        fill: transparent;
        stroke: #696969;
`;

export const ContentPlaylist = styled.div`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
`;

export const FilterTitle = styled.div`
 color: ${props => props.theme};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
`;

// ---------------------------------Filterbutton---------------------------------

export const ActiveItemPopup = styled.div`
    color: ${props => props.color};
    text-decoration: ${props => props.underline};
`;

export const ButtonPopupItemContainer = styled.div`
    gap: 24px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 180px;
    height: 237px;
    margin-left: 34px;
    margin-right: 34px;
    margin-bottom: 34px;
    margin-top: 34px;
    overflow-y: auto;
    color: ${props => props.theme};

    &::-webkit-scrollbar {
    width: 4px;
    display: auto;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-track {
    background-color: #4B4949;
    }
`;

export const FilterButtonContainer = styled.div`
 position: relative;
 margin-left: 10px;
 width: 140.48px;
    height: 38.4px;
`;

export const UkBadge = styled.span`
  background: #ad61ff;
    position: absolute;
    top: -10px;
    right: 120px;
`;

export const buttonMixin = css`
    background: ${props => props.theme};
    border-radius: 12px;
`;

export const ButtonPopup = styled.div`
    ${buttonMixin}
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontsize};
    display: ${props => props.display};
    align-items: ${props => props.alignitems};
    justify-content: ${props => props.justifycontent};
`;

export const FilterButton = styled.div`
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme};
    border: 1px solid ${props => props.theme};
    border-radius: 60px;
    padding: 6px 20px;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
    border-color: ${props => props.themeHover};
    color: ${props => props.themeHover};
    cursor: pointer;
    }

    &:active {
    border-color: ${props => props.themeActive};
    color: ${props => props.themeActive};
    cursor: pointer;
    }
}
`;

export const LabelPopup = styled.label`

    color: ${props => props.theme};

`;

// ---------------------------------Playlistitem---------------------------------

export const PlaylistItem = styled.div`
        width: 100%;
        display: block;
        margin-bottom: 12px;
}
`;

export const PlaylistTrack = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
}
`;

export const TrackTitle = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 447px;
}
`;

export const TrackTitleImage = styled.div`
        width: 51px;
        height: 51px;
        padding: 16px;
        background: ${props => props.theme};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 17px;
}
`;

export const TrackTitleSvg = styled.div`
        width: 18px;
        height: 17px;
        fill: transparent;
        stroke: #4E4E4E;
}
`;

export const TrackTitleLink = styled.a`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme};
}
`;

export const TrackTitleSpan = styled.span`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme};
}
`;

export const TrackAuthor = styled.div`
        width: 321px;
        display: flex;
        justify-content: flex-start;
          color: ${props => props.theme};
}
`;

export const TrackAuthorLink = styled.a`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme};
        text-align: left;
}
`;

export const TrackAlbum = styled.div`
width: 245px;
}
`;

export const TrackAlbumLink = styled.a`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme};
}
`;

export const TrackTimeImg = styled.div`
        width: 14px;
        height: 30px;
        margin-right: 17px;
        fill: transparent;
        stroke: #696969;
}
`;

export const TrackTimeImgLike = styled.img`
        margin-bottom: 4px;
}
`;

export const TrackTime = styled.div`
display: flex;
}
`;

export const TrackTimeText = styled.span`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        color: ${props => props.theme};
}
`;

export const TrackTitleTextSkeleton = styled.div`
    margin-bottom: 10px;
    width: 1107px;
    height: 51px;
    align-items: center;
    display: flex
}
`;

export const TrackTitleTextSkeletonSquare = styled.div`
    width: 51px;
    height: 51px;
    background: #313131;
}
`;

export const TrackTitleTextSkeletonTrack = styled.div`
    width: 356px;
    height: 19px;
    background: #313131;
    margin-left: 14px;
}
`;

export const TrackTitleTextSkeletonAuthor = styled.div`
    width: 271px;
    height: 19px;
    background: #313131;
    margin-left: 60px;
}
`;

export const TrackTitleTextSkeletonAlbum = styled.div`
    width: 305px;
    height: 19px;
    background: #313131;
    margin-left: 50px;
}
`;
