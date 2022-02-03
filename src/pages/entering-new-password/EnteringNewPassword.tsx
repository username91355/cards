import React from 'react';
import s from "./EnteringNewPassword.module.css";
import {SuperInput} from "../../components/common/SuperInput/SuperInput";
import {SuperButton} from "../../components/common/SuperButton/SuperButton";

const EnteringNewPassword = () => {
    return (
        <div className={s.newPass__wrapper}>
            <h2>Education cards</h2>
            <h3 className={s.newPass__title}>Enter new password</h3>
            <div>
                <SuperInput className={s.newPass__input}
                            type={'password'}
                            label={'Enter new password'}/>
                <div className={s.newPass__error}>{'errr'}</div>
            </div>
            <div className={s.newPass__text}>Create new password
                and we will send you further instruction to email
            </div>
            <div className={s.recovery__buttons}>
                <SuperButton title={'Create new password'}
                             type={'primary'}/>
            </div>
        </div>
    );
};

export default EnteringNewPassword;