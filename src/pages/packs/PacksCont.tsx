import React, {useEffect} from 'react';
import {LargeContainer} from '../../components/lagre-container/LargeContainer';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {TAppState} from '../../store/store';
import {fetchPacks} from '../../store/reducers/packs-reducer';
import {STATUS} from '../../utils/types/types';
import {Preloader} from '../../components/common/Preloader/Preloader';
import {Packs} from './Packs';

export const PacksCont: React.FC = () => {

    const
        dispatch = useDispatch(),
        isAuth = useSelector((state: TAppState) => state.login.isAuth),
        packs = useSelector((state: TAppState) => state.packs.packs),
        packsStatus = useSelector((state: TAppState) => state.packs.status);

    useEffect(() => {
        dispatch(fetchPacks());
    }, [])
    if (!isAuth) return <Navigate to='/login'/>;

    return (
        <LargeContainer>
            {packsStatus === STATUS.LOADING
                ? <Preloader />
                : <Packs packs={packs}/>
            }
        </LargeContainer>
    );
};