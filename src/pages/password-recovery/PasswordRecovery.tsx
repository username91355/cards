import React, {useState} from 'react';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import s from "./PasswordRecovery.module.css";
import {SuperLink} from "../../components/common/SuperLink/SuperLink";
import mail from './../../assets/img/mail.png';

const PasswordRecovery = () => {

    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);

    const recovery = () => {

    }

    return (
        <div className={s.recovery__wrapper}>
            <h2>Education cards</h2>
            <h3 className={s.recovery__title}>Password recovery</h3>
            <div>
                <SuperInput className={s.recovery__input}
                            value={email}
                            onChangeText={setEmail}
                            type={'email'}
                            label={'Enter email'}/>
                <div className={s.recovery__error}>{emailError}</div>
            </div>
            <div className={s.recovery__text}>* Enter your email address,
                and we will send you further instructions
            </div>
            <div className={s.recovery__buttons}>
                <SuperButton title={'Send instructions'}
                             type={'primary'}/>
            </div>
            <div className={s.recovery__login_box}>
                <p>Did you remember your password?</p>
                <SuperLink to='/login' children={'Try logging in'}/>
            </div>
        </div>
    );
};

const checkEmail: React.FC = () => {
    return (
        <div className={s.checkEmail__wrapper}>
            <h2>Education cards</h2>
            <h3 className={s.checkEmail__title}>Password recovery</h3>
            <img className={s.checkEmail__img} src={mail} alt="image"/>
            <div className={s.checkEmail__text}>We`ve sent an Email with instruction to</div>
            <div>{'test@mail.com'}</div>
            <div className={s.checkEmail__login_box}>
                <SuperLink to='/login' children={'Return to login page'}/>
            </div>
        </div>
    );
}

export default PasswordRecovery;