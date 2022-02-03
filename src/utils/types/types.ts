import {loginIState} from '../../store/reducers/login-reducer';
import {registerIState} from "../../store/reducers/register-reducer";

//common types
export type Nullable<T> = T | null;

//api types
export type TLoginState = typeof loginIState;
export type TRegisterState = typeof registerIState;

//enums
export enum STATUS {
    PENDING,
    LOADING,
    SUCCESS,
    ERROR
}

//for api
export interface IDefaultResponse {
    info: string
    error: string
}

export interface IRegisterResponse {
    addedUser: IUser
}

export interface IUser {
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: Date
    verified: boolean
    __v: number
    _id: string
}