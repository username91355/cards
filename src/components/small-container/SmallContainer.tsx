import React from 'react';
import s from './SmallContainer.module.css';

interface IProps {
    children: React.ReactElement
}

export const SmallContainer: React.FC<IProps> = ({children}) => {
    return (
        <div className={s.smallContainer__wrapper}>
            {children}
        </div>
    );
};