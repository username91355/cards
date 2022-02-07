import {ACTIONS} from '../actions';
import {ICardsPackCreate, IFetchPacks, IPack, IPacksResponse, STATUS, TPacksState} from '../../utils/types/types';
import {ThunkType} from '../store';
import {packsAPI} from '../../api/packs-api';

export const packsIState = {
    cardPacks: [] as IPack[],
    cardPacksTotalCount: 0 as number,
    maxCardsCount: 100 as number,
    minCardsCount: 0 as number,
    page: 1 as number,
    pageCount: 10 as number,
    searchString: '' as string,
    status: STATUS.PENDING as STATUS
}

export const packsReducer = (state: TPacksState = packsIState, action: TPacksActions) => {
    switch (action.type) {
        case ACTIONS.SET_PACKS_DATA:
        case ACTIONS.SET_CURRENT_PAGE:
        case ACTIONS.SET_SEARCH_STRING:
        case ACTIONS.SET_PACKS_STATUS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const setData = (data: IPacksResponse) => ({type: ACTIONS.SET_PACKS_DATA, payload: {...data}} as const);
export const setSearchString = (searchString: string) => ({
    type: ACTIONS.SET_SEARCH_STRING,
    payload: {searchString}
} as const);
export const setCurrentPage = (page: number) => ({type: ACTIONS.SET_CURRENT_PAGE, payload: {page}} as const);
const setPacksStatus = (status: STATUS) => ({type: ACTIONS.SET_PACKS_STATUS, payload: {status}} as const);

export const fetchPacks = (cardsPack: IFetchPacks): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        const response = await packsAPI.fetchPacks(cardsPack);

        dispatch(setData(response));
        dispatch(setPacksStatus(STATUS.SUCCESS));
    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};

export const createPack = (name: string): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        const cardsPack: ICardsPackCreate = {name};

        await packsAPI.createPack(cardsPack);

    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};

export const deletePack = (id: string): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        await packsAPI.deletePack(id);

    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};

export const editPack = (_id: string, name: string): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        const cardsPack = {_id, name};

        await packsAPI.updatePack(cardsPack);

    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};

export type TPacksActions =
    | TSetPacks
    | TSetCurrentPage
    | TSetSearchString
    | TSetPacksStatus;
type TSetPacks = ReturnType<typeof setData>;
type TSetCurrentPage = ReturnType<typeof setCurrentPage>;
type TSetSearchString = ReturnType<typeof setSearchString>;
type TSetPacksStatus = ReturnType<typeof setPacksStatus>;
