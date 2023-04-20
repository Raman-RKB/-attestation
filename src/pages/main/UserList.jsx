import React from 'react';

import {
    UserLogin
} from './css/styles';

// eslint-disable-next-line react/prop-types
const User = ({ login }) => {

    return (
        <UserLogin>{login}</UserLogin>
    );
};

export default User;
