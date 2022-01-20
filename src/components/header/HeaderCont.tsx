import React from 'react';
import {SuperNavLink} from "../common/SuperNavLink/SuperNavLink";

const HeaderCont = () => {
    return (
        <header>
            <nav>
                <SuperNavLink to='/profile' children='profile'/>
                <SuperNavLink to='/login' children='login'/>
                <SuperNavLink to='/registration' children='registration'/>
                <SuperNavLink to='/password-recovery' children='password-recovery'/>
                <SuperNavLink to='/entering-new-password' children='entering-new-password'/>
                <SuperNavLink to='/test-components' children='test-components'/>
            </nav>
        </header>
    );
};

export default HeaderCont;