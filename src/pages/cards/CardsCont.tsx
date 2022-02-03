import React from 'react';
import {LargeContainer} from '../../components/lagre-container/LargeContainer';
import Cards from './Cards';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {TAppState} from '../../store/store';

export const CardsCont: React.FC = () => {

    const isAuth = useSelector((state: TAppState) => state.login.isAuth);

    if (!isAuth) return <Navigate to='/login'/>;

    return (
        <LargeContainer>
            <Cards/>
        </LargeContainer>
    );
};