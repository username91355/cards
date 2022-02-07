import {ICardsPackCreate, ICardsPackUpdate, IFetchPacks, IPacksResponse} from '../utils/types/types';
import {instance} from './api';

export const packsAPI = {

    fetchPacks(cp: IFetchPacks): Promise<IPacksResponse> {
        const url = `/cards/pack`;
        const sortParams = `?packName=${cp.packName}&sortPacks=${cp.sortPacks}&user_id=${cp.user_id}`;
        const requestParams = `&min=${cp.min}&max=${cp.max}&page=${cp.page}&pageCount=${cp.pageCount}`;
        return instance
            .get<IPacksResponse>(url + sortParams + requestParams)
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Packs request error';
                } else {
                    throw err.message;
                }
            });
    },

    createPack(cardsPack: ICardsPackCreate): Promise<{}> {
        return instance
            .post('/cards/pack', {cardsPack})
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Packs request error';
                } else {
                    throw err.message;
                }
            });
    },

    deletePack(id: string): Promise<{}> {
        return instance
            .delete(`/cards/pack?id=${id}`)
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Packs request error';
                } else {
                    throw err.message;
                }
            });
    },

    updatePack(cardsPack: ICardsPackUpdate): Promise<{}> {
        return instance
            .put(`/cards/pack`, {cardsPack})
            .then(res => res.data)
            .catch(err => {
                if (err.response) {
                    throw err.response.data.error;
                } else if (err.request) {
                    throw 'Packs request error';
                } else {
                    throw err.message;
                }
            });
    },
};