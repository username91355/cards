import React, {ChangeEvent} from 'react';
import s from './Register.module.css';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';

interface IProps {
    error: string | null
    email: string
    password: string
    confirmPassword: string
    emailChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    passwordChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    passwordConfirmChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    register: () => void
    cancel: () => void
}

const Register: React.FC<IProps> = props => {

    const {
        error,
        email,
        password,
        confirmPassword,
        emailChangeHandler,
        passwordChangeHandler,
        passwordConfirmChangeHandler,
        register,
        cancel,
    } = props;

    return (
        <div className={s.register__wrapper}>
            <div>
                <h2 className={s.register__title}>Create an account</h2>
                <SuperInput value={email}
                            onChange={emailChangeHandler}
                            className={s.register__input}
                            type={'email'}
                            label={'Enter email'}/>
                <SuperInput value={password}
                            onChange={passwordChangeHandler}
                            className={s.register__input}
                            type={'password'}
                            label={'Enter password'}/>
                <SuperInput value={confirmPassword}
                            onChange={passwordConfirmChangeHandler}
                            className={s.register__input}
                            type={'password'}
                            label={'Confirm password'}/>
                <span className={s.register__error}>{error}</span>
            </div>
            <div className={s.register__buttons}>
                <SuperButton title={'Cancel'}
                             type={'secondary'}
                             onClick={cancel}/>
                <SuperButton title={'Register'}
                             type={'primary'}
                             onClick={register}/>
            </div>
        </div>
    );
};

export default Register;