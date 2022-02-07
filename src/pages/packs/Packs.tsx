import React from 'react';
import {IPack, STATUS} from '../../utils/types/types';
import s from './Packs.module.css';
import {Pack} from './pack/Pack';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {Preloader} from '../../components/common/Preloader/Preloader';
import {Pagination} from '../../components/pagination/Pagination';

interface IProps {
    packs: IPack[]
    packsStatus: STATUS
    searchString: string
    currentPage: number
    totalItems: number
    setCurrentPage: (value: number) => void
    createPackOpen: () => void
    showMyPacks: () => void
    showAllPacks: () => void
    changeSearchString: (str: string) => void
}

export const Packs: React.FC<IProps> = props => {

    const {
        packs,
        packsStatus,
        searchString,
        currentPage,
        totalItems,
        setCurrentPage,
        createPackOpen,
        showMyPacks,
        showAllPacks,
        changeSearchString
    } = props;

    return (
        <div className={s.packs}>
            <div className={s.packs__search}>
                <SuperInput className={s.packs__search_input}
                            type={'search'}
                            label={'Search'}
                            value={searchString}
                            autoFocus={true}
                            onChangeText={changeSearchString}/>
                <SuperButton title={'Create new pack'}
                             type={'primary'}
                             onClick={createPackOpen}/>
                <div style={{display: 'flex'}}>
                    <SuperButton title={'Show my pack'}
                                 type={'primary'}
                                 sizeBtn={'small'}
                                 onClick={showMyPacks}/>
                    <SuperButton title={'Show all pack'}
                                 type={'primary'}
                                 sizeBtn={'small'}
                                 onClick={showAllPacks}/>
                </div>
            </div>
            <div className={s.packs__list_section}>
                <div className={s.packs__list}>
                    {packsStatus === STATUS.LOADING
                        ? <Preloader/>
                        : <>
                            {
                                packs.map(i => <Pack key={i._id}
                                                     _id={i._id}
                                                     user_id={i.user_id}
                                                     name={i.name}
                                                     cardsCount={i.cardsCount}
                                                     user_name={i.user_name}
                                                     updated={i.updated}
                                />)
                            }
                        </>
                    }
                </div>
                <Pagination currentPage={currentPage}
                            totalItems={totalItems}
                            setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};