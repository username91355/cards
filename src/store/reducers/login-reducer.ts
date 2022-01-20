import {Nullable} from "../../utils/types/types";
import {ThunkType} from "../store";
import {cardsAPI} from "../../components/api/api";

const iState = {
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
}

export const loginReducer = (state: any = iState, action: any) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

const setUserData = (payload: any) => ({type: 'SET_DATA', payload})

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    try {
        const response = await cardsAPI.login(email, password, rememberMe)
        dispatch(setUserData(response.data))
    } catch (err) {
        console.log(err)
    }
}