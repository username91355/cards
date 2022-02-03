import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderCont} from '../header/HeaderCont';
import {AppRoutes} from '../routes/AppRoutes';
import {me} from '../../store/reducers/login-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import {TAppState} from '../../store/store';

export const App = () => {

    const
        dispatch = useDispatch(),
        isInit = useSelector((state: TAppState) => state.login.isInit);

    useEffect(() => {
        dispatch(me());
    }, [])

    return (
        <div className='app__wrapper'>
            {!isInit
                ? <Preloader/>
                : <>
                    <HeaderCont/>
                    <AppRoutes/>
                </>
            }
        </div>
    );
};
