import {Nullable, STATUS, TLoginState} from '../../utils/types/types';
import {ThunkType} from '../store';
import {cardsAPI} from '../../components/api/api';
import {ACTIONS} from '../actions';

export const loginIState = {
    isAuth: false as boolean,
    loginStatus: STATUS.PENDING as STATUS,
    _id: null as Nullable<string>,
    email: null as Nullable<string>,
    name: null as Nullable<string>,
    avatar: null as Nullable<string>,
    publicCardPacksCount: null as Nullable<number>,
    created: null as Nullable<Date>,
    updated: null as Nullable<Date>,
    isAdmin: null as Nullable<boolean>,
    verified: null as Nullable<boolean>,
    rememberMe: null as Nullable<boolean>,
    error: null as Nullable<string>
};

export const loginReducer = (state: TLoginState = loginIState, action: any) => {
    switch (action.type) {
        case ACTIONS.SET_USER_DATA:
        case ACTIONS.SET_LOGIN_ERROR:
        case ACTIONS.SET_AUTH_STATUS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const setUserData = (payload: any) => ({type: ACTIONS.SET_USER_DATA, payload});
const setAuthStatus = (isAuth: boolean) => ({type: ACTIONS.SET_USER_DATA, payload: {isAuth}});
const setLoginStatus = (loginStatus: STATUS) => ({type: ACTIONS.SET_USER_DATA, payload: {loginStatus}});
export const setLoginError = (error: string | null) => ({type: ACTIONS.SET_LOGIN_ERROR, payload: {error}});

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    try {
        dispatch(setLoginStatus(STATUS.LOADING));

        const response = await cardsAPI.login(email, password, rememberMe);

        dispatch(setUserData(response.data));
        dispatch(setAuthStatus(true));
        dispatch(setLoginStatus(STATUS.SUCCESS));
    } catch (err: any) {
        dispatch(setLoginError(err.response ? err.response.data.error : err.message));
        dispatch(setLoginStatus(STATUS.ERROR));
    }
}