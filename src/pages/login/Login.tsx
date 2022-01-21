import React, {ChangeEvent} from 'react';
import s from "./Login.module.css";
import {SuperInput} from "../../components/common/SuperInput/SuperInput";
import {SuperCheckbox} from "../../components/common/SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../../components/common/SuperButton/SuperButton";
import {STATUS} from "../../utils/types/types";
import {SuperLink} from "../../components/common/SuperLink/SuperLink";

interface IProps {
    error: string | null
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
            <h2>Welcome</h2>
            <SuperInput value={email}
                        onChange={emailChangeHandler}
                        type={'email'}
                        label={'Enter your email'}
                        error={error}/>
            <SuperInput value={password}
                        onChange={passwordChangeHandler}
                        type={'password'}
                        label={'Enter password'}
                        error={error}/>
            <SuperCheckbox checked={rememberMe}
                           onChange={rememberMeChangeHandler}
                           children={'Remember me'}
            />
            <SuperLink to='/password-recovery' children={'Forgot password'}/>
            <SuperButton title={'Login'}
                         type={'primary'}
                         onClick={submit}
                         disabled={loginStatus === STATUS.LOADING}/>
            <p>Don`t have an account?</p>
            <SuperLink to='/registration' children={'Sign up'}/>
        </div>
    );
};

export default Login;