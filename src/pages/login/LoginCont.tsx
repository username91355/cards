import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {TAppState} from '../../store/store';
import Login from './Login';
import {login, setLoginError} from '../../store/reducers/login-reducer';
import {SmallContainer} from "../../components/small-container/SmallContainer";

const LoginCont: React.FC = () => {

    const dispatch = useDispatch();
    const error = useSelector((state: TAppState) => state.login.error);
    const isAuth = useSelector((state: TAppState) => state.login.isAuth);
    const loginStatus = useSelector((state: TAppState) => state.login.loginStatus);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const submit = () => {
        dispatch(login(email, password, rememberMe))
    }


    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLoginError(null))
        setEmail(e.currentTarget.value)
    }

    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLoginError(null))
        setPassword(e.currentTarget.value)
    }

    const rememberMeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLoginError(null))
        setRememberMe(e.currentTarget.checked)
    }

    if (isAuth) return <Navigate to='/profile'/>

    return <SmallContainer>
        <Login error={error}
               email={email}
               password={password}
               rememberMe={rememberMe}
               loginStatus={loginStatus}
               submit={submit}
               emailChangeHandler={emailChangeHandler}
               passwordChangeHandler={passwordChangeHandler}
               rememberMeChangeHandler={rememberMeChangeHandler}
        />
    </SmallContainer>
};

export default LoginCont;