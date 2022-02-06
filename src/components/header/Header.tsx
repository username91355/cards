import React from 'react';
import s from './Header.module.css';
import {SuperNavLink} from '../common/SuperNavLink/SuperNavLink';
import {SuperButton} from '../common/SuperButton/SuperButton';

interface IProps {
    logoutClickHandler: () => void
}

export const Header: React.FC<IProps> = props => {

    const {logoutClickHandler} = props;

    return (
        <header className={s.header}>
            <nav className={s.header__container}>
                <SuperNavLink to='/profile' children='Profile'/>
                <SuperNavLink to='/packs' children='Packs'/>
                <SuperButton title={'Logout'}
                             type={'primary'}
                             sizeBtn={'small'}
                             onClick={logoutClickHandler}/>
            </nav>
        </header>
    );
};