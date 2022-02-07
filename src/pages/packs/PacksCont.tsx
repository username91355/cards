import React, {useEffect, useMemo, useState} from 'react';
import {LargeContainer} from '../../components/lagre-container/LargeContainer';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {TAppState} from '../../store/store';
import {fetchPacks, setCurrentPage, setSearchString} from '../../store/reducers/packs-reducer';
import {Packs} from './Packs';
import {IFetchPacks} from '../../utils/types/types';

export const PacksCont: React.FC = () => {

    const
        dispatch = useDispatch(),
        isAuth = useSelector((state: TAppState) => state.login.isAuth),
        userId = useSelector((state:TAppState) => state.profile._id),
        searchString = useSelector((state: TAppState) => state.packs.searchString),
        packs = useSelector((state: TAppState) => state.packs.cardPacks),
        currentPage = useSelector((state: TAppState) => state.packs.page),
        totalItems = useSelector((state: TAppState) => state.packs.cardPacksTotalCount),
        packsStatus = useSelector((state: TAppState) => state.packs.status),
        [onlyMyPacks, setOnlyMyPacks] = useState<string>(''),
        [createPackMode, setCreatePackMode] = useState<boolean>(false);


    const fetchPacksData: IFetchPacks = useMemo(()=> ({
        packName: searchString,
        min: 0,
        max: 100,
        sortPacks: '',
        page: currentPage,
        pageCount: 10,
        user_id: onlyMyPacks || '',
    }), [searchString,onlyMyPacks,currentPage]);

    useEffect(() => {
        dispatch(fetchPacks(fetchPacksData));
    }, [fetchPacksData]);

    const changeSearchString = (str: string) => {
        dispatch(setSearchString(str));
    };

    const showMyPacks = () => {
        setOnlyMyPacks(userId);
    };

    const showAllPacks = () => {
        setOnlyMyPacks('');
    };

    const createPackOpen = () => {
        setCreatePackMode(true);
    };

    const setCurrentPageHandler = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    if (!isAuth) return <Navigate to='/login'/>;

    return (
        <LargeContainer>
            <>{createPackMode && <div>Create new task</div>}
                <Packs packs={packs}
                       packsStatus={packsStatus}
                       searchString={searchString}
                       currentPage={currentPage}
                       totalItems={totalItems}
                       setCurrentPage={setCurrentPageHandler}
                       createPackOpen={createPackOpen}
                       showMyPacks={showMyPacks}
                       showAllPacks={showAllPacks}
                       changeSearchString={changeSearchString}/>
            </>
        </LargeContainer>
    );
};