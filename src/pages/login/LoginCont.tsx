import React, {ChangeEvent, useState} from 'react';
import s from './Login.module.css';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {TAppState} from "../../store/store";
import {login} from "../../store/reducers/login-reducer";
import {SuperCheckbox} from "../../components/common/SuperCheckbox/SuperCheckbox";

const LoginCont: React.FC = () => {

    const dispatch = useDispatch();
    const error = useSelector((state: TAppState) => state.login.error);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const submit = () => {
        dispatch(login(email, password, rememberMe))
    }

    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const rememberMeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    return (
        <div className={s.login__wrapper}>
            <h2>Welcome</h2>
            <SuperInput value={email} onChange={emailChangeHandler} type={'email'} label={'Enter your email'}
                        error={error}/>
            <SuperInput value={password} onChange={passwordChangeHandler} type={'password'} label={'Enter password'}
                        error={error}/>
            <SuperCheckbox onChange={rememberMeChangeHandler} checked={rememberMe} children={'Remember me'}/>
            <Link to='/password-recovery'>Forgot password</Link>
            <SuperButton title={'Login'} type={'primary'} onClick={submit}/>
            <p>Don`t have an account?</p>
            <Link to='/registration'>Sign up</Link>
        </div>
    );
};

export default LoginCont;