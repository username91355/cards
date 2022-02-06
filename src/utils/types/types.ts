import {loginIState} from '../../store/reducers/login-reducer';
import {packsIState} from '../../store/reducers/packs-reducer';
import {registerIState} from '../../store/reducers/register-reducer';

//common types
export type Nullable<T> = T | null;

//api types
export type TLoginState = typeof loginIState;
export type TRegisterState = typeof registerIState;
export type TPacksState = typeof packsIState;

//enums
export enum STATUS {
    PENDING,
    LOADING,
    SUCCESS,
    ERROR
}

//for api
export interface IDefaultResponse {
    info: string
    error: string
}

export interface IRegisterResponse {
    addedUser: IUser
}

export interface IUser {
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: Date
    verified: boolean
    __v: number
    _id: string
}


export interface IPacksResponse {
    cardPacks: IPack[],
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export interface IPack {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    private: false
    user_name: string
}

export interface ICardsPackUpdate {
    _id: string
    name: string
}

export interface ICardsPackCreate {
    name: string,
    path?: string,
    grade?: number,
    shots?: number,
    rating?: number,
    deckCover?: string,
    isPrivate?: boolean
    type?: string
}