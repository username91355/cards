import {register, setRegisterError} from "../../store/reducers/register-reducer";

export const validateEmail = (email: string) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return !reg.test(email);
};

export const validatePasswordLength = (password:string) => password.length < 8;
export const validateConfirmPasswordLength = (password:string, confirmPassword: string) => password !== confirmPassword;