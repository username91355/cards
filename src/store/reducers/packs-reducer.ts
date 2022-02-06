import {ACTIONS} from '../actions';
import {ICardsPackCreate, IPack, STATUS, TPacksState} from '../../utils/types/types';
import {ThunkType} from '../store';
import {packsAPI} from '../../api/packs-api';

export const packsIState = {
    packs: [] as IPack[],
    status: STATUS.PENDING as STATUS
}

export const packsReducer = (state: TPacksState = packsIState, action: TPacksActions) => {
    switch (action.type) {
        case ACTIONS.SET_PACKS_LIST:
        case ACTIONS.SET_PACKS_STATUS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const setPacks = (packs: IPack[]) => ({type: ACTIONS.SET_PACKS_LIST, payload: {packs}} as const);
const setPacksStatus = (status: STATUS) => ({type: ACTIONS.SET_PACKS_STATUS, payload: {status}} as const);

export const fetchPacks = (): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        const response = await packsAPI.fetchPacks();

        dispatch(setPacks(response.cardPacks));
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

        dispatch(fetchPacks());
    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};

export const deletePack = (id: string): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        await packsAPI.deletePack(id);

        dispatch(fetchPacks());
    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};

export const editPack = (_id: string,name: string): ThunkType => async dispatch => {
    try {
        dispatch(setPacksStatus(STATUS.LOADING));

        const cardsPack = {_id, name}

        await packsAPI.updatePack(cardsPack);

        dispatch(fetchPacks());
    } catch (err) {
        console.log(err);
        dispatch(setPacksStatus(STATUS.ERROR));
    }
};


export type TPacksActions =
    | TSetPacks
    | TSetPacksStatus;
type TSetPacks = ReturnType<typeof setPacks>;
type TSetPacksStatus = ReturnType<typeof setPacksStatus>;
