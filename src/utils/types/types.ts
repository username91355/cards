import {loginIState} from '../../store/reducers/login-reducer';

//common types
export type Nullable<T> = T | null;

//api types
export type TLoginState = typeof loginIState;

//enums
export enum STATUS {
    PENDING,
    LOADING,
    SUCCESS,
    ERROR
}