import {IUser, Nullable, TProfileState} from '../../utils/types/types';
import {ACTIONS} from '../actions';

export const profileIState = {
    created: null as Nullable<Date>,
    email: null as Nullable<string>,
    isAdmin: null as Nullable<boolean>,
    name: null as Nullable<string>,
    publicCardPacksCount: null as Nullable<number>,
    rememberMe: null as Nullable<boolean>,
    updated: null as Nullable<Date>,
    verified: null as Nullable<boolean>,
    __v: null as Nullable<number>,
    _id: null as Nullable<string>,
};

export const profileReducer = (state: TProfileState = profileIState, action: any) => {
    switch (action.type) {
        case ACTIONS.SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setUserData = (user: IUser) => ({type: ACTIONS.SET_USER_DATA, payload: {...user}} as const);

export type TSetUserData = ReturnType<typeof setUserData>