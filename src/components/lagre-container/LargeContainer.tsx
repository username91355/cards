import React from 'react';
import s from './LargeContainer.module.css';

interface IProps {
    children: React.ReactElement
}

export const LargeContainer: React.FC<IProps> = ({children}) => {
    return (
        <div className={s.smallContainer__wrapper}>
            {children}
        </div>
    );
};