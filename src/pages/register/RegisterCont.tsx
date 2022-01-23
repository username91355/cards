import React, {ChangeEvent, useState} from 'react';
import {SmallContainer} from "../../components/small-container/SmallContainer";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {TAppState} from "../../store/store";
import {Navigate, useNavigate} from "react-router-dom";
import {register, setRegisterError} from '../../store/reducers/register-reducer';
import {Nullable, STATUS} from "../../utils/types/types";

const RegisterCont: React.FC = () => {

    const
        dispatch = useDispatch(),
        navigate = useNavigate(),
        error = useSelector((state: TAppState) => state.register.registerError),
        loginStatus = useSelector((state: TAppState) => state.register.registerStatus),
        [email, setEmail] = useState<string>(''),
        [emailError, setEmailError] = useState<Nullable<string>>(null),
        [password, setPassword] = useState<string>(''),
        [passwordError, setPasswordError] = useState<Nullable<string>>(null),
        [confirmPassword, setConfirmPassword] = useState<string>('');

    const inputEventHandlerWithErrorReset = (func: (value: string) => void, value: string) => {
        setEmailError(null);
        setPasswordError(null);
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

    const validateEmail = (email: string) => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return !reg.test(email);
    };

    const onRegister = () => {

        if (validateEmail(email) || '') {
            setEmailError('Please enter a valid email');
        } else if (password !== confirmPassword) {
            setPasswordError('Password confirmation error');
        } else if (password.length < 8) {
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