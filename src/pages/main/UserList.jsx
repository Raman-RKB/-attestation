import React, { useEffect, useState } from 'react';
import { useGetUserDataQuery } from '../../services/servises';
import { useDispatch } from "react-redux";
import { pushUsersDataToStore } from '../../Store/store';

import {
    UserLogin
} from './css/styles';

// eslint-disable-next-line react/prop-types
const User = ({ login }) => {
    const [userData, setUserData] = useState();
    const { data } = useGetUserDataQuery(userData);
    const dispatch = useDispatch();

    const getUserData = async () => {
        setUserData(login);
    }

    useEffect(() => {
        if (data) {
            dispatch(pushUsersDataToStore(data));
              console.log(data)
        }
    }, [data]);

    return (
        <UserLogin onClick={getUserData}>{login}{data?.login}</UserLogin>
    );
};

export default User;
