import React from 'react';
import s from './SuperButton.module.css';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    title: string
    type: 'primary' | 'secondary' | 'outline'
    sizeBtn?: 'small' | 'medium' | 'large'
}

export const SuperButton: React.FC<IProps> = props => {

    const {
        type,
        title,
        sizeBtn,
        ...restProps
    } = props;

    return <button className={`${s.btn} ${s[type]} ${sizeBtn ? s[sizeBtn] : s.medium}`}
                   {...restProps}>{title}</button>
};