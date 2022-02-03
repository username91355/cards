import React, {useState} from 'react';
import {SmallContainer} from '../../components/small-container/SmallContainer';
import {PasswordRecovery} from './PasswordRecovery';
import {useNavigate} from 'react-router-dom';
import {cardsAPI} from '../../api/api';

export const PasswordRecoveryCont: React.FC = () => {

    const
        navigate = useNavigate(),
        [email, setEmail] = useState<string>(''),
        [emailError, setEmailError] = useState<string | null>(null);

    const recovery = () => {
        cardsAPI.forgotPassword(email).then(() => {
            navigate('/check-email');
        });
    };

    const changeEmail = (str: string) => {
        if (emailError) {
            setEmailError(null);
        }
        setEmail(str);
    };

    return (
        <SmallContainer>
            <PasswordRecovery
                email={email}
                setEmail={changeEmail}
                emailError={emailError}
                recovery={recovery}/>
        </SmallContainer>
    );
};