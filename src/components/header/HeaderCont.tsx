import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/reducers/login-reducer';
import {Header} from './Header';

export const HeaderCont: React.FC = () => {

    const dispatch = useDispatch();

    const logoutClickHandler = () => {
        dispatch(logout());
    };

    return (
        <Header logoutClickHandler={logoutClickHandler}/>
    );
};