import styled from "styled-components";

export const MainSidebar = styled.nav`
        max-width: 418px;
        padding: 20px 90px 20px 78px;
`;

export const  SidebarPersonal = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 12px 0 15px 0;
`;

export const  SidebarPersonalName = styled.p`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme};
        margin-right: 16px;
`;

export const SidebarAvatar = styled.div`
        width: 43px;
        height: 43px;
        background-color: ${props => props.theme};
        border-radius: 50%;
`;

export const SidebarBlock = styled.div`
        height: 100%;
        padding: 240px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
`;

export const Sidebarlist = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`;

export const SidebarItem = styled.div`
        width: 250px;
        height: 150px;

        &:not(:last-child) {
            margin-bottom: 30px;
        }
`;

export const SidebarLink = styled.a`
        width: 100%;
        height: 100%;
`;

export const SidebarImg = styled.img`
        width: 100%;
        height: auto;
`;

export const SidebarItemSkeleton = styled.div`
    width: 250px;
    height: 150px;
    background: #313131;
    margin-bottom: 30px;;
`;




