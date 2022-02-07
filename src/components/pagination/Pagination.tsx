import React, {useState} from 'react';
import s from './Pagination.module.css';

interface IProps {
    currentPage: number
    totalItems: number
    setCurrentPage: (value: number) => void
}

export const Pagination: React.FC<IProps> = props => {

    const
        {currentPage, totalItems, setCurrentPage} = props,
        portionShow = 5,
        totalPortion = Math.ceil(totalItems / portionShow),
        [portionNumber, setPortionNumber] = useState(1),
        leftPortionBorder = (portionNumber - 1) * portionShow + 1,
        rightPortionBorder = portionNumber * portionShow;

    let pages = [];
    for (let i = 1; i <= totalPortion; i++) {
        pages.push(i);
    }

    const leftArrowHandle = () => {
        setPortionNumber(portionNumber - 1);
        setCurrentPage(currentPage - portionShow);
    };

    const rightArrowHandle = () => {
        setPortionNumber(portionNumber + 1);
        setCurrentPage(currentPage + portionShow);
    };

    return (
        <div className={s.pagination}>
            {portionNumber > 1
                && <button className={s.pagination__button}
                           onClick={leftArrowHandle}>{'<'}</button>}
            <div className={s.pagination__pages}>
                {pages
                    .filter(i => i >= leftPortionBorder && i <= rightPortionBorder)
                    .map((p, index) => {
                        return <div key={index} className={currentPage === p
                            ? s.pagination__active : ''}
                                     onClick={() => setCurrentPage(p)}>{p}</div>
                    })
                }
            </div>
            {totalPortion > portionNumber
                && <button className={s.pagination__button}
                           onClick={rightArrowHandle}>{'>'}</button>}
        </div>
    )
};