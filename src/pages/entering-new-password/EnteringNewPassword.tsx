import React from 'react';
import s from "./EnteringNewPassword.module.css";
import {SuperInput} from "../../components/common/SuperInput/SuperInput";
import {SuperButton} from "../../components/common/SuperButton/SuperButton";

interface IProps {
    password: string
    setPassword: (str: string) => void
    setNewPassword: () => void
}

const EnteringNewPassword: React.FC<IProps> = props => {

    const {password, setPassword,setNewPassword} = props;

    return (
        <div className={s.newPass__wrapper}>
            <h2>Education cards</h2>
            <h3 className={s.newPass__title}>Enter new password</h3>
            <div>
                <SuperInput className={s.newPass__input}
                            value={password}
                            onChangeText={setPassword}
                            type={'password'}
                            label={'Enter new password'}/>
                <div className={s.newPass__error}>{''}</div>
            </div>
            <div className={s.newPass__text}>Create new password
                and we will send you further instruction to email
            </div>
            <div className={s.recovery__buttons}>
                <SuperButton title={'Create new password'}
                             onClick={setNewPassword}
                             type={'primary'}/>
            </div>
        </div>
    );
};

export default EnteringNewPassword;