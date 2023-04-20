import React from 'react';

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
} from './css/styles';

const User = () => {
    

    return (
        <UserContainer user="none">
            <UsersContainer>
                <UserCard>
                    <UserAvatar />
                    <UserName>John Doe</UserName>
                    <UserRepoCount>Repositories: 10</UserRepoCount>
                </UserCard>
            </UsersContainer>
            <DetailsContainer>
                {/* Отображение деталей пользователя */}
                <UserDetails>
                    <UserDetailLabel>Name:</UserDetailLabel>
                    <div>John Doe</div>
                </UserDetails>
                <UserDetails>
                    <UserDetailLabel>Location:</UserDetailLabel>
                    <div>New York, USA</div>
                </UserDetails>
            </DetailsContainer>
        </UserContainer>
    );
};

export default User;
