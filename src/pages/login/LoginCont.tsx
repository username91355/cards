import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {TAppState} from '../../store/store';
import Login from './Login';
import {login, setLoginError} from '../../store/reducers/login-reducer';
import {SmallContainer} from "../../components/small-container/SmallContainer";
import {validateEmail, validatePasswordLength} from "../../utils/validate/validate";

const LoginCont: React.FC = () => {

    const
        dispatch = useDispatch(),
        error = useSelector((state: TAppState) => state.login.error),
        isAuth = useSelector((state: TAppState) => state.login.isAuth),
        loginStatus = useSelector((state: TAppState) => state.login.loginStatus),
        [email, setEmail] = useState<string>(''),
        [emailError, setEmailError] = useState<string>(''),
        [password, setPassword] = useState<string>(''),
        [passwordError, setPasswordError] = useState<string>(''),
        [rememberMe, setRememberMe] = useState<boolean>(false)

    const inputEventHandlerWithErrorReset = (func: (value: string) => void, value: string) => {
        if (error) {
            dispatch(setLoginError(null));
        }
        setEmailError('');
        setPasswordError('');
        func(value);
    };

    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        inputEventHandlerWithErrorReset(setEmail, e.currentTarget.value);
    }

    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        inputEventHandlerWithErrorReset(setPassword, e.currentTarget.value);
    }

    const rememberMeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked);
    }

    const submit = () => {

        if (validateEmail(email) || '') {
            setEmailError('Please enter a valid email');
        } else if (validatePasswordLength(password)) {
            setPasswordError('Minimum password length 8 characters');
        } else {
            dispatch(login(email, password, rememberMe));
        }
    }

    if (isAuth) return <Navigate to='/profile'/>;

    return (
        <SmallContainer>
            <Login error={error}
                   emailError={emailError}
                   passwordError={passwordError}
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
    );
};

export default LoginCont;