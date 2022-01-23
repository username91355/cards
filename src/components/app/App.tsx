import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import HeaderCont from "../header/HeaderCont";
import {AppRoutes} from '../routes/AppRoutes';
import {me} from '../../store/reducers/login-reducer';
import {TAppState} from "../../store/store";
import {Preloader} from '../common/Preloader/Preloader';

const App: React.FC = () => {

    const
        dispatch = useDispatch(),
        loginStatus = useSelector((state: TAppState) => state.login.loginStatus);

    useEffect(() => {
        dispatch(me());
    }, []);

    return (
        <div className='app__wrapper'>
            {loginStatus
                ? <Preloader/>
                : <>
                    <HeaderCont/>
                    <AppRoutes/>
                </>
            }
        </div>
    );
}

export default App;
