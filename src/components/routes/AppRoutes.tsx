import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../../pages/not-found/NotFound';
import {ProfileCont} from '../../pages/profile/ProfileCont';
import {LoginCont} from '../../pages/login/LoginCont';
import {PasswordRecoveryCont} from '../../pages/password-recovery/PasswordRecoveryCont';
import {EnteringNewPasswordCont} from '../../pages/entering-new-password/EnteringNewPasswordCont';
import {RegisterCont} from '../../pages/register/RegisterCont';
import {TestComponents} from '../../pages/test-components/TestComponents';
import {CardsCont} from '../../pages/cards/CardsCont';
import {CheckEmail} from '../../pages/check-email/CheckEmail';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<ProfileCont/>}/>
            <Route path='/profile' element={<ProfileCont/>}/>
            <Route path='/cards' element={<CardsCont/>}/>
            <Route path='/login' element={<LoginCont/>}/>
            <Route path='/register' element={<RegisterCont/>}/>
            <Route path='/password-recovery' element={<PasswordRecoveryCont/>}/>
            <Route path='/check-email' element={<CheckEmail/>}/>
            <Route path='/entering-new-password/:token' element={<EnteringNewPasswordCont/>}/>
            <Route path='/test-components' element={<TestComponents/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};