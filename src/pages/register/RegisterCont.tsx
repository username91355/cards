import React, {ChangeEvent, useState} from 'react';
import {SmallContainer} from "../../components/small-container/SmallContainer";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {TAppState} from "../../store/store";
import {Navigate, useNavigate} from "react-router-dom";
import {register} from '../../store/reducers/register-reducer';
import {STATUS} from "../../utils/types/types";

const RegisterCont: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state: TAppState) => state.register.registerError);
    const loginStatus = useSelector((state: TAppState) => state.register.registerStatus);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const passwordConfirmChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onRegister = () => {
        if (password === confirmPassword) {
            dispatch(register(email, password));
        }
    }

    const cancel = () => {
        navigate('/');
    }

    if (loginStatus === STATUS.SUCCESS) return <Navigate to='/login'/>
    return <SmallContainer>
        <Register error={error}
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
};

export default RegisterCont;