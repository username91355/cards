import React, {ChangeEvent} from 'react';
import s from "./Login.module.css";
import {SuperInput} from "../../components/common/SuperInput/SuperInput";
import {SuperCheckbox} from "../../components/common/SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../../components/common/SuperButton/SuperButton";
import {STATUS} from "../../utils/types/types";
import {SuperLink} from "../../components/common/SuperLink/SuperLink";

interface IProps {
    error: string | null
    emailError: string
    passwordError: string
    email: string
    password: string
    rememberMe: boolean
    loginStatus: STATUS
    emailChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    passwordChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    rememberMeChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    submit: () => void
}

const Login: React.FC<IProps> = props => {

    const {
        error,
        emailError,
        passwordError,
        email,
        password,
        rememberMe,
        loginStatus,
        emailChangeHandler,
        passwordChangeHandler,
        rememberMeChangeHandler,
        submit,
    } = props;

    return (
        <div className={s.login__wrapper}>
            <h2>Education cards</h2>
            <h3 className={s.login__title}>Welcome</h3>
            <div className={s.login__main_box}>
                <SuperInput value={email}
                            onChange={emailChangeHandler}
                            type={'email'}
                            label={'Enter your email'}
                            error={emailError}
                            className={s.login__input}/>
                <SuperInput value={password}
                            onChange={passwordChangeHandler}
                            type={'password'}
                            label={'Enter password'}
                            error={passwordError}
                            className={s.login__input}/>
                <SuperCheckbox checked={rememberMe}
                               onChange={rememberMeChangeHandler}
                               children={'Remember me'}
                               className={s.login__checkbox}/>
                <div className={s.login__error}>{error}</div>
                <SuperLink className={s.login__main_box_link}
                           to='/password-recovery'
                           children={'Forgot password'}/>
            </div>
            <>
                <SuperButton title={'Login'}
                             type={'primary'}
                             onClick={submit}
                             disabled={loginStatus === STATUS.LOADING}
                             sizeBtn={'large'}/>
                <div className={s.login__registration_box}>
                    <p>Don`t have an account?</p>
                    <SuperLink to='/register' children={'Sign up'}/>
                </div>
            </>
        </div>
    );
};

export default Login;