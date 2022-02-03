import React, {ChangeEvent, useState} from 'react';
import {SmallContainer} from "../../components/small-container/SmallContainer";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {TAppState} from "../../store/store";
import {Navigate, useNavigate} from "react-router-dom";
import {register, setRegisterError} from '../../store/reducers/register-reducer';
import {STATUS} from "../../utils/types/types";
import {validateConfirmPasswordLength, validateEmail, validatePasswordLength} from '../../utils/validate/validate';

const RegisterCont: React.FC = () => {

    const
        dispatch = useDispatch(),
        navigate = useNavigate(),
        error = useSelector((state: TAppState) => state.register.registerError),
        loginStatus = useSelector((state: TAppState) => state.register.registerStatus),
        [email, setEmail] = useState<string>(''),
        [emailError, setEmailError] = useState<string>(''),
        [password, setPassword] = useState<string>(''),
        [passwordError, setPasswordError] = useState<string>(''),
        [confirmPassword, setConfirmPassword] = useState<string>('');

    const inputEventHandlerWithErrorReset = (func: (value: string) => void, value: string) => {
        setEmailError('');
        setPasswordError('');
        dispatch(setRegisterError(null));
        func(value);
    };

    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        inputEventHandlerWithErrorReset(setEmail, e.currentTarget.value);
    };

    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        inputEventHandlerWithErrorReset(setPassword, e.currentTarget.value);
    };

    const passwordConfirmChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        inputEventHandlerWithErrorReset(setConfirmPassword, e.currentTarget.value);
    };

    const onRegister = () => {

        if (validateEmail(email) || '') {
            setEmailError('Please enter a valid email');
        } else if (validateConfirmPasswordLength(password, confirmPassword)) {
            setPasswordError('Password confirmation error');
        } else if (validatePasswordLength(password)) {
            setPasswordError('Minimum password length 8 characters');
        } else {
            dispatch(register(email, password));
        }
    };

    const cancel = () => {
        navigate('/');
    };

    if (loginStatus === STATUS.SUCCESS) return <Navigate to='/login'/>;

    return (
        <SmallContainer>
            <Register error={error}
                      emailError={emailError}
                      passwordError={passwordError}
                      email={email}
                      password={password}
                      confirmPassword={confirmPassword}
                      loginStatus={loginStatus}
                      emailChangeHandler={emailChangeHandler}
                      passwordChangeHandler={passwordChangeHandler}
                      passwordConfirmChangeHandler={passwordConfirmChangeHandler}
                      register={onRegister}
                      cancel={cancel}
            />
        </SmallContainer>
    );
};

export default RegisterCont;