import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {SmallContainer} from '../../components/small-container/SmallContainer';
import {EnteringNewPassword} from './EnteringNewPassword';
import {validatePasswordLength} from '../../utils/validate/validate';
import {useDispatch} from 'react-redux';
import {setPassword} from '../../store/reducers/register-reducer';

export const EnteringNewPasswordCont = () => {

    const
        dispatch = useDispatch(),
        params = useParams(),
        navigate = useNavigate(),
        [passwordArea, setPasswordArea] = useState(''),
        [passwordError, setPasswordError] = useState<string | null>('');

    const setNewPassword = () => {
        if (validatePasswordLength(passwordArea)) {
            setPasswordError('Password length must be more than 8 characters');
        }

        if (params.token) {
            dispatch(setPassword(passwordArea, params.token));
            navigate('/login');
        }
    };

    const changePasswordArea = (value: string) => {

        if (passwordError) {
            setPasswordError(null);
        }
        setPasswordArea(value);
    }

    return (
        <SmallContainer>
            <EnteringNewPassword password={passwordArea}
                                 passwordError={passwordError}
                                 setPassword={changePasswordArea}
                                 setNewPassword={setNewPassword}/>
        </SmallContainer>
    );
};