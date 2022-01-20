import React from 'react';
import s from './Login.module.css';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {Link} from "react-router-dom";

const LoginCont:React.FC = () => {

    return (
        <div className={s.login__wrapper}>
            <h2>Welcome</h2>
            <SuperInput type={'email'} label={'Enter your email'}/>
            <SuperInput type={'password'} label={'Enter password'}/>
            <Link to='/password-recovery'>Forgot password</Link>
            <SuperButton title={'Login'} type={'primary'}/>
            <p>Don`t have an account?</p>
            <Link to='/registration'>Sign up</Link>
        </div>
    );
};

export default LoginCont;