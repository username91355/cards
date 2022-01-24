import React from 'react';
import HeaderCont from "../header/HeaderCont";
import {AppRoutes} from "../routes/AppRoutes";

const Main: React.FC = () => {
    return (
        <>
            <HeaderCont/>
            <AppRoutes/>
        </>
    );
};

export default Main;