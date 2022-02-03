import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {TAppState} from '../../store/store';

export const ProfileCont: React.FC = () => {

    const isAuth = useSelector((state: TAppState) => state.login.isAuth);
    const profile = useSelector((state: TAppState) => state.profile);

    return (
        <div>
            {(!isAuth) && <Navigate to='/login'/>}
            <div>{JSON.stringify(profile)}</div>
        </div>
    );
};