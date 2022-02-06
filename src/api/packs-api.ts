import {ICardsPackCreate, ICardsPackUpdate, IPacksResponse} from '../utils/types/types';
import {instance} from './api';

export const packsAPI = {

    fetchPacks(): Promise<IPacksResponse> {
        return instance
            .get<IPacksResponse>(`/cards/pack`)
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