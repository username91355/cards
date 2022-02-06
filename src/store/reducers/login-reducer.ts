import {IUser, Nullable, STATUS, TLoginState} from '../../utils/types/types';
import {ThunkType} from '../store';
import {ACTIONS} from '../actions';
import { authAPI } from '../../api/auth-api';

export const loginIState = {
    isInit: false as boolean,
    isAuth: false as boolean,
    loginStatus: STATUS.PENDING as STATUS,
    user: null as Nullable<IUser>,
    error: null as Nullable<string>
};

export const loginReducer = (state: TLoginState = loginIState, action: TLoginAction) => {
    switch (action.type) {
        case ACTIONS.SET_LOGIN_ERROR:
        case ACTIONS.SET_AUTH_STATUS:
        case ACTIONS.SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const setUserData = (user: IUser | null) => ({type: ACTIONS.SET_USER_DATA, payload: {user}} as const);
const setAuthStatus = (isAuth: boolean) => ({type: ACTIONS.SET_AUTH_STATUS, payload: {isAuth}} as const);
const setInitStatus = (isInit: boolean) => ({type: ACTIONS.SET_AUTH_STATUS, payload: {isInit}} as const);
const setLoginStatus = (loginStatus: STATUS) => ({type: ACTIONS.SET_LOGIN_STATUS, payload: {loginStatus}} as const);
export const setLoginError = (error: string | null) => ({type: ACTIONS.SET_LOGIN_ERROR, payload: {error}} as const);

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await authAPI.login(email, password, rememberMe);

        dispatch(setUserData(response));
        dispatch(setAuthStatus(true));
        dispatch(setLoginStatus(STATUS.SUCCESS));
    } catch (err: any) {
        dispatch(setLoginError(err));
        dispatch(setLoginStatus(STATUS.ERROR));
    }
};

export const logout = (): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await authAPI.logout();

        if (response.info) {
            dispatch(setAuthStatus(false));
            dispatch(setUserData(null));
            dispatch(setLoginStatus(STATUS.SUCCESS));
        }
    } catch (err: any) {
        dispatch(setLoginError(err));
        dispatch(setLoginStatus(STATUS.ERROR));
    }
};

export const me = (): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await authAPI.me();

        dispatch(setUserData(response));
        dispatch(setAuthStatus(true));
        dispatch(setInitStatus(true));
        dispatch(setLoginStatus(STATUS.SUCCESS));
    } catch (err: any) {
        // dispatch(setLoginError(err));
        dispatch(setInitStatus(true));
        dispatch(setLoginStatus(STATUS.ERROR));

    }
};

//types
export type TLoginAction =
    | TSetUserData
    | TSetAuthStatus
    | TSetInitStatus
    | TSetLoginStatus
    | TSetLoginError
type TSetUserData = ReturnType<typeof setUserData>
type TSetAuthStatus = ReturnType<typeof setAuthStatus>
type TSetInitStatus = ReturnType<typeof setInitStatus>
type TSetLoginStatus = ReturnType<typeof setLoginStatus>
type TSetLoginError = ReturnType<typeof setLoginError>