import React from 'react';
import s from './PasswordRecovery.module.css';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperLink} from '../../components/common/SuperLink/SuperLink';

interface IProps {
    email: string
    setEmail: (str: string) => void
    emailError: string | null
    recovery: () => void
}

export const PasswordRecovery: React.FC<IProps> = props => {

    const {email,setEmail,emailError,recovery} = props;

    return (
        <div className={s.recovery__wrapper}>
            <h2>Education cards</h2>
            <h3 className={s.recovery__title}>Password recovery</h3>
            <div>
                <SuperInput className={s.recovery__input}
                            value={email}
                            error={emailError}
                            onChangeText={setEmail}
                            type={'email'}
                            label={'Enter email'}/>
            </div>
            <div className={s.recovery__text}>* Enter your email address,
                and we will send you further instructions
            </div>
            <div className={s.recovery__buttons}>
                <SuperButton title={'Send instructions'}
                             onClick={recovery}
                             type={'primary'}/>
            </div>
            <div className={s.recovery__login_box}>
                <p>Did you remember your password?</p>
                <SuperLink to='/login' children={'Try logging in'}/>
            </div>
        </div>
    );
};