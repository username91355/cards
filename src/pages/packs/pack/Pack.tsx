import React from 'react';
import s from './Pack.module.css';
import {SuperButton} from '../../../components/common/SuperButton/SuperButton';
import {dateExtract} from '../../../utils/utils';
import {useDispatch} from 'react-redux';
import {deletePack, editPack} from '../../../store/reducers/packs-reducer';


interface IProps {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    updated: string
    user_name: string
}

export const Pack: React.FC<IProps> = props => {

    const {
        _id,
        name,
        cardsCount,
        updated,
        user_name,
    } = props;
    const dispatch = useDispatch();

    const deleteThisPack = () => {
        dispatch(deletePack(_id));
    };

    const editThisPack = () => {
        dispatch(editPack(_id, 'new name'));
    };

    return (
        <div className={s.pack}>
            <div className={s.pack__info}>
                <div>{name}</div>
                <div>{cardsCount}</div>
                <div>{dateExtract(updated)}</div>
                <div>{user_name}</div>
            </div>
            <div className={s.pack__buttons}>
                <SuperButton type={'primary'}
                             title={'Open'}
                             sizeBtn={'small'}/>
                <SuperButton type={'primary'}
                             title={'Edit'}
                             sizeBtn={'small'}
                             onClick={editThisPack}/>
                <SuperButton type={'secondary'}
                             title={'Delete'}
                             sizeBtn={'small'}
                             onClick={deleteThisPack}/>
            </div>
        </div>
    );
};