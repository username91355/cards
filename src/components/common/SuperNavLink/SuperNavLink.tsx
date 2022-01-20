import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './SuperNavLink.module.css';

interface IProps {
    to: string
    children: string
}

export const SuperNavLink: React.FC<IProps> = props => {

    const {
        to,
        children,
        ...restProps
    } = props;

    return <NavLink to={to}
                    className={({isActive}) => isActive
                        ? `${s.superNavLink} ${s.superNavLink_active}`
                        : s.superNavLink} {...restProps}>{children}</NavLink>
};