import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearUsersData } from '../../Store/store';

import {
    UserContainer,
    UsersContainer,
    UserCard,
    UserAvatar,
    UserName,
    UserRepoCount,
    DetailsContainer,
    UserDetails,
    UserDetailLabel,
    DisplayUser
} from './css/styles';

const User = () => {
    const usersData = useSelector(state => state.usersData);
    const dispatch = useDispatch();

    const closeClick = () => {
        dispatch(clearUsersData());
    }

    return (
        <UserContainer user={usersData?.login ? 'flex' : 'none'}>
            <DisplayUser onClick={closeClick}>&times;</DisplayUser>
            <UsersContainer>
                <UserCard>
                    <UserAvatar src={usersData?.avatar_url} />
                    <UserName>{usersData?.name}</UserName>
                    <UserRepoCount>Repositories: {usersData?.public_repos}</UserRepoCount>
                </UserCard>
            </UsersContainer>
            <DetailsContainer>
                {/* Отображение деталей пользователя */}
                <UserDetails>
                    <UserDetailLabel>Login: </UserDetailLabel>
                    <div> {usersData?.login}</div>
                </UserDetails>
                <UserDetails>
                    <UserDetailLabel>Location: </UserDetailLabel>
                    <div> {usersData?.location}</div>
                </UserDetails>
            </DetailsContainer>
        </UserContainer>
    );
};

export default User;
