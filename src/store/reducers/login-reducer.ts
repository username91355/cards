import {Nullable} from "../../utils/types/types";

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
        default:
            return state;
    }
};