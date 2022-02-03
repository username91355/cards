import {IUser, Nullable, STATUS, TLoginState} from '../../utils/types/types';
import {ThunkType} from '../store';
import {cardsAPI} from '../../components/api/api';
import {ACTIONS} from '../actions';

export const loginIState = {
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
const setLoginStatus = (loginStatus: STATUS) => ({type: ACTIONS.SET_LOGIN_STATUS, payload: {loginStatus}} as const);
export const setLoginError = (error: string | null) => ({type: ACTIONS.SET_LOGIN_ERROR, payload: {error}} as const);

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await cardsAPI.login(email, password, rememberMe);

        debugger
        dispatch(setUserData(response.data));
        dispatch(setAuthStatus(true));
        dispatch(setLoginStatus(STATUS.SUCCESS));
    } catch (err: any) {
        dispatch(setLoginError(err.response ? err.response.data.error : err.message));
        dispatch(setLoginStatus(STATUS.ERROR));
    }
};

export const logout = (): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await cardsAPI.logout();

        if(response.info) {
            dispatch(setAuthStatus(false));
            dispatch(setUserData(null));
            dispatch(setLoginStatus(STATUS.SUCCESS));
        }
    } catch (err: any) {
        debugger
        dispatch(setLoginError(err));
        dispatch(setLoginStatus(STATUS.ERROR));
    }
};

export const me = (): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await cardsAPI.me();

        dispatch(setUserData(response));
        dispatch(setAuthStatus(true));
        dispatch(setLoginStatus(STATUS.SUCCESS));
    } catch (err: any) {
        dispatch(setLoginError(err));
        dispatch(setLoginStatus(STATUS.ERROR));
    }
};

//types
type TLoginAction =
    | TSetUserData
    | TSetAuthStatus
    | TSetLoginStatus
    | TSetLoginError
type TSetUserData = ReturnType<typeof setUserData>
type TSetAuthStatus = ReturnType<typeof setAuthStatus>
type TSetLoginStatus = ReturnType<typeof setLoginStatus>
type TSetLoginError = ReturnType<typeof setLoginError>