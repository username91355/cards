import React from 'react';
import {IPack} from '../../utils/types/types';
import s from './Packs.module.css';
import {Pack} from './pack/Pack';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {useDispatch} from 'react-redux';
import {createPack} from '../../store/reducers/packs-reducer';

interface IProps {
    packs: IPack[]
}

export const Packs: React.FC<IProps> = props => {

    const
        {packs} = props,
        dispatch = useDispatch();

    const createNewPack = () => {
        dispatch(createPack('Relax 2'));
    }

    return (
        <div className={s.packs}>
            <div className={s.packs__search}>
                <SuperInput type={'search'} label={'Search'}/>
                <SuperButton title={'Create new pack'}
                             type={'primary'}
                             onClick={createNewPack}/>
            </div>
            <div className={s.packs__list}>
                {packs.map(i => <Pack key={i._id}
                                      _id={i._id}
                                      user_id={i.user_id}
                                      name={i.name}
                                      cardsCount={i.cardsCount}
                                      user_name={i.user_name}
                                      updated={i.updated}
                />)}
            </div>
        </div>
    );
};