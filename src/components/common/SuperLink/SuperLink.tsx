import React from 'react';
import s from './SuperLink.module.css';
import {Link} from 'react-router-dom';

interface IProps {
    to: string
    children: string
    className?: string
}

export const SuperLink: React.FC<IProps> = props => {

    const {
        to,
        children,
        className,
    } = props;

    return <Link className={`${s.superLink} ${className || ''}`} to={to}>{children}</Link>
};