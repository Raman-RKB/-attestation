import React from 'react';

import {
    PageNumberdButton,
} from './css/styles';

// eslint-disable-next-line react/prop-types
const ButtonItem = ({ page, active }) => {

    return (
        <PageNumberdButton clicked={active ? 'rgb(105 100 102)' : '#8e8b8c'}>{page}</PageNumberdButton>
    );
};

export default ButtonItem;
