import React from 'react';
import {SuperNavLink} from "../common/SuperNavLink/SuperNavLink";
import {useDispatch} from "react-redux";
import {logout} from '../../store/reducers/login-reducer';

const HeaderCont = () => {

    const dispatch = useDispatch();

    const logoutClickHandler = () => {
        dispatch(logout())
    }

    return (
        <header style={{backgroundColor: '#4b4e6d', position: "absolute", top: '0'}}>
            <nav>
                <SuperNavLink to='/profile' children='profile'/>
                <SuperNavLink to='/login' children='login'/>
                <SuperNavLink to='/register' children='register'/>
                <SuperNavLink to='/password-recovery' children='password-recovery'/>
                <SuperNavLink to='/entering-new-password' children='entering-new-password'/>
                <SuperNavLink to='/test-components' children='test-components'/>
                <button onClick={logoutClickHandler}>LOGOUT</button>
            </nav>
        </header>
    );
};

export default HeaderCont;