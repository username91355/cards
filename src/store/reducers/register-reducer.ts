import {ThunkType} from '../store';
import {cardsAPI} from '../../components/api/api';
import {Nullable, STATUS} from "../../utils/types/types";
import {ACTIONS} from "../actions";

export const registerIState = {
    registerStatus: STATUS.PENDING as STATUS,
    registerError: null as Nullable<string>,
};

export const registerReducer = (state: any = registerIState, action: any) => {
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

const setRegisterStatus = (registerStatus: STATUS) => ({type: ACTIONS.SET_REGISTER_STATUS, payload: {registerStatus}});
const setRegisterError = (registerError: string) => ({type: ACTIONS.SET_REGISTER_ERROR, payload: {registerError}});

export const register = (email: string, password: string): ThunkType => async dispatch => {
    try {
        dispatch(setRegisterStatus(STATUS.LOADING));

        const response = await cardsAPI.register(email, password);


        if (response.data.addedUser) {
            dispatch(setRegisterStatus(STATUS.SUCCESS));
        } else {
            dispatch(setRegisterStatus(STATUS.ERROR));
            new Error('Something wrong')
        }

    } catch (err: Error | unknown) {
        if (err instanceof Error) {
            setRegisterError(err.message)
        }
    }
}