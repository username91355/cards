import React from 'react';
import s from './NotFound.module.css';
import {SuperLink} from '../../components/common/SuperLink/SuperLink';
import {SmallContainer} from '../../components/small-container/SmallContainer';

export const NotFound: React.FC = () => {
    return (
        <SmallContainer>
            <div className={s.notFound}>
                <div className={s.notFound__container}>
                    <h3>Page no found. Error #404.</h3>
                    <SuperLink to='/'>Go home</SuperLink>
                </div>
            </div>
        </SmallContainer>
    );
};