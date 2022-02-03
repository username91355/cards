import {ThunkType} from '../store';
import {cardsAPI} from '../../api/api';
import {Nullable, STATUS, TRegisterState} from '../../utils/types/types';
import {ACTIONS} from '../actions';

export const registerIState = {
    registerStatus: STATUS.PENDING as STATUS,
    registerError: null as Nullable<string>,
};

export const registerReducer = (state: TRegisterState = registerIState, action: TRegisterActions): TRegisterState => {
    switch (action.type) {
        case ACTIONS.SET_REGISTER_STATUS:
        case ACTIONS.SET_REGISTER_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

const setRegisterStatus = (registerStatus: STATUS) => ({
    type: ACTIONS.SET_REGISTER_STATUS,
    payload: {registerStatus}
} as const);

export const setRegisterError = (registerError: string | null) => ({
    type: ACTIONS.SET_REGISTER_ERROR,
    payload: {registerError}
} as const);

export const register = (email: string, password: string): ThunkType => async dispatch => {
    try {
        dispatch(setRegisterStatus(STATUS.LOADING));

        const response = await cardsAPI.register(email, password);

        if (response.addedUser) {
            dispatch(setRegisterStatus(STATUS.SUCCESS));
        } else {
            throw new Error(response);
        }

    } catch (err: any) {
        dispatch(setRegisterError(err));
        dispatch(setRegisterStatus(STATUS.ERROR));

    }
};

export const setPassword = (password: string, token: string): ThunkType => async dispatch => {
    try {
        const response = await cardsAPI.setPassword(password, token);

    } catch (err: any) {
        console.log(err);
        dispatch(setRegisterStatus(STATUS.ERROR));
    }
};

//types
export type TRegisterActions =
    | TSetRegisterStatus
    | TSetRegisterError;
type TSetRegisterStatus = ReturnType<typeof setRegisterStatus>;
type TSetRegisterError = ReturnType<typeof setRegisterError>;