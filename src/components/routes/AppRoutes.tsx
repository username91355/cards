import {Route, Routes} from 'react-router-dom';
import NotFoundCont from '../../pages/not-found/NotFoundCont';
import ProfileCont from '../../pages/profile/ProfileCont';
import LoginCont from '../../pages/login/LoginCont';
import PasswordRecoveryCont from '../../pages/password-recovery/PasswordRecoveryCont';
import EnteringNewPasswordCont from '../../pages/entering-new-password/EnteringNewPasswordCont';
import RegisterCont from '../../pages/register/RegisterCont';
import TestComponents from '../../pages/test-components/TestComponents';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProfileCont/>}/>
            <Route path='/profile' element={<ProfileCont/>}/>
            <Route path='/login' element={<LoginCont/>}/>
            <Route path='/register' element={<RegisterCont/>}/>
            <Route path='/password-recovery' element={<PasswordRecoveryCont/>}/>
            <Route path='/entering-new-password' element={<EnteringNewPasswordCont/>}/>
            <Route path='/test-components' element={<TestComponents/>}/>
            <Route path='*' element={<NotFoundCont/>}/>
        </Routes>
    );
};