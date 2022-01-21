import {ThunkType} from '../store';
import {cardsAPI} from '../../components/api/api';
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

const setRegisterError = (registerError: string) => ({
    type: ACTIONS.SET_REGISTER_ERROR,
    payload: {registerError}
} as const);

export const register = (email: string, password: string): ThunkType => async dispatch => {
    try {
        dispatch(setRegisterStatus(STATUS.LOADING));

        const response = await cardsAPI.register(email, password);
debugger
        if (response.addedUser) {
            dispatch(setRegisterStatus(STATUS.SUCCESS));
        } else {
            dispatch(setRegisterStatus(STATUS.ERROR));
            throw new Error(response);
        }

    } catch (err: Error | unknown) {
        if (err instanceof Error) {
            dispatch(setRegisterError(err.message))
        }
    }
};

//types
type TRegisterActions = | TSetRegisterStatus | TSetRegisterError
type TSetRegisterStatus = ReturnType<typeof setRegisterStatus>
type TSetRegisterError = ReturnType<typeof setRegisterError>