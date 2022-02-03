import React from 'react';
import s from './CheckEmail.module.css';
import mail from '../../assets/img/mail.png';
import {SuperLink} from '../../components/common/SuperLink/SuperLink';
import {SmallContainer} from '../../components/small-container/SmallContainer';

export const CheckEmail: React.FC = () => {

    return (
        <SmallContainer>
            <div className={s.checkEmail__wrapper}>
                <h2>Education cards</h2>
                <h3 className={s.checkEmail__title}>Password recovery instruction
                    was send on your email.</h3>
                <img className={s.checkEmail__img} src={mail} alt="image"/>
                <div className={s.checkEmail__text}>If you didn't receive the email,
                    please check your spam folder.</div>
                <div className={s.checkEmail__login_box}>
                    <SuperLink to='/login' children={'Return to login page'}/>
                </div>
            </div>
        </SmallContainer>
    );
};