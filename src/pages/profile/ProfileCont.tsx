import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {TAppState} from "../../store/store";

const ProfileCont = () => {

    const isAuth = useSelector((state: TAppState) => state.login.isAuth);

    return (
        <div>
            {(!isAuth) && <Navigate to='/login'/>}
            ProfileCont
        </div>
    );
};

export default ProfileCont;